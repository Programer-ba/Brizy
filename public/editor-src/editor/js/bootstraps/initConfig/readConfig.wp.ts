import { parseStrict, optional } from "visual/utils/reader/readWithParser";
import { mPipe } from "visual/utils/fp/mPipe";
import * as Str from "visual/utils/reader/string";
import * as Num from "visual/utils/reader/number";
import * as Obj from "visual/utils/reader/object";
import * as Arr from "visual/utils/reader/array";

import { pass, pipe } from "visual/utils/fp";

import { Rule } from "visual/global/Config/types/Rule";
import { WP } from "visual/global/Config/types/configs/WP";
import { throwOnNullish } from "visual/utils/value";

const tParser = parseStrict<unknown, Rule>({
  type: optional(
    mPipe(
      pass(Obj.isObject),
      Obj.readKey("type"),
      pass((v): v is Rule["type"] => [1, 2].includes(v as number))
    )
  ),
  entityType: pipe(
    mPipe(
      pass<unknown, object>(Obj.isObject),
      Obj.readKey("entityType"),
      Str.read
    ),
    throwOnNullish("Invalid rule entity type")
  ),
  group: pipe(
    mPipe(pass(Obj.isObject), Obj.readKey("group"), Num.read),
    throwOnNullish("Invalid rule group")
  ),
  values: pipe(
    mPipe(
      pass(Obj.isObject),
      Obj.readKey("values"),
      Arr.readWithItemReader<string>(Str.read)
    ),
    throwOnNullish("Invalid rule values")
  )
});

const t = pipe(pass(Array.isArray), throwOnNullish("Err"), v => v.map(tParser));

// arg config - should be unknown, but because we parse it partly,
// we temporary set Wp
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const readConfig = (config: WP): WP => ({
  ...config,
  wp: {
    ...config.wp,
    ruleMatches: t(config.wp.ruleMatches)
  }
});
