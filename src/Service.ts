/**
 * @since 0.9.0
 */
import * as Context from "@effect/data/Context"
import type * as ReadonlyArray from "@effect/data/ReadonlyArray"
import type * as ast from "ts-morph"
import type * as config from "./Config"

/**
 * @category service
 * @since 0.9.0
 */
export interface Config {
  readonly config: config.Config
}

/**
 * @category service
 * @since 0.9.0
 */
export const Config = Context.Tag<Config>()

/**
 * @category service
 * @since 0.9.0
 */
export interface Source {
  readonly path: ReadonlyArray.NonEmptyReadonlyArray<string>
  readonly sourceFile: ast.SourceFile
}

/**
 * @category service
 * @since 0.9.0
 */
export const Source = Context.Tag<Source>()