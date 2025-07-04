
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ExternalAccount
 * 
 */
export type ExternalAccount = $Result.DefaultSelection<Prisma.$ExternalAccountPayload>
/**
 * Model attachments
 * 
 */
export type attachments = $Result.DefaultSelection<Prisma.$attachmentsPayload>
/**
 * Model message_versions
 * 
 */
export type message_versions = $Result.DefaultSelection<Prisma.$message_versionsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model sources
 * 
 */
export type sources = $Result.DefaultSelection<Prisma.$sourcesPayload>
/**
 * Model summaries
 * 
 */
export type summaries = $Result.DefaultSelection<Prisma.$summariesPayload>
/**
 * Model summary_cache
 * 
 */
export type summary_cache = $Result.DefaultSelection<Prisma.$summary_cachePayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const messages_priority_level: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type messages_priority_level = (typeof messages_priority_level)[keyof typeof messages_priority_level]

}

export type messages_priority_level = $Enums.messages_priority_level

export const messages_priority_level: typeof $Enums.messages_priority_level

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ExternalAccounts
 * const externalAccounts = await prisma.externalAccount.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ExternalAccounts
   * const externalAccounts = await prisma.externalAccount.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.externalAccount`: Exposes CRUD operations for the **ExternalAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalAccounts
    * const externalAccounts = await prisma.externalAccount.findMany()
    * ```
    */
  get externalAccount(): Prisma.ExternalAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachments`: Exposes CRUD operations for the **attachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachments.findMany()
    * ```
    */
  get attachments(): Prisma.attachmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message_versions`: Exposes CRUD operations for the **message_versions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Message_versions
    * const message_versions = await prisma.message_versions.findMany()
    * ```
    */
  get message_versions(): Prisma.message_versionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sources`: Exposes CRUD operations for the **sources** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.sources.findMany()
    * ```
    */
  get sources(): Prisma.sourcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.summaries`: Exposes CRUD operations for the **summaries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Summaries
    * const summaries = await prisma.summaries.findMany()
    * ```
    */
  get summaries(): Prisma.summariesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.summary_cache`: Exposes CRUD operations for the **summary_cache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Summary_caches
    * const summary_caches = await prisma.summary_cache.findMany()
    * ```
    */
  get summary_cache(): Prisma.summary_cacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ExternalAccount: 'ExternalAccount',
    attachments: 'attachments',
    message_versions: 'message_versions',
    messages: 'messages',
    sources: 'sources',
    summaries: 'summaries',
    summary_cache: 'summary_cache',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "externalAccount" | "attachments" | "message_versions" | "messages" | "sources" | "summaries" | "summary_cache" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ExternalAccount: {
        payload: Prisma.$ExternalAccountPayload<ExtArgs>
        fields: Prisma.ExternalAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          findFirst: {
            args: Prisma.ExternalAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          findMany: {
            args: Prisma.ExternalAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>[]
          }
          create: {
            args: Prisma.ExternalAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          createMany: {
            args: Prisma.ExternalAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExternalAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          update: {
            args: Prisma.ExternalAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          deleteMany: {
            args: Prisma.ExternalAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExternalAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          aggregate: {
            args: Prisma.ExternalAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalAccount>
          }
          groupBy: {
            args: Prisma.ExternalAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalAccountCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalAccountCountAggregateOutputType> | number
          }
        }
      }
      attachments: {
        payload: Prisma.$attachmentsPayload<ExtArgs>
        fields: Prisma.attachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attachmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attachmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          findFirst: {
            args: Prisma.attachmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attachmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          findMany: {
            args: Prisma.attachmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>[]
          }
          create: {
            args: Prisma.attachmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          createMany: {
            args: Prisma.attachmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.attachmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          update: {
            args: Prisma.attachmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          deleteMany: {
            args: Prisma.attachmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attachmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.attachmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          aggregate: {
            args: Prisma.AttachmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachments>
          }
          groupBy: {
            args: Prisma.attachmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.attachmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsCountAggregateOutputType> | number
          }
        }
      }
      message_versions: {
        payload: Prisma.$message_versionsPayload<ExtArgs>
        fields: Prisma.message_versionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.message_versionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.message_versionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload>
          }
          findFirst: {
            args: Prisma.message_versionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.message_versionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload>
          }
          findMany: {
            args: Prisma.message_versionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload>[]
          }
          create: {
            args: Prisma.message_versionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload>
          }
          createMany: {
            args: Prisma.message_versionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.message_versionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload>
          }
          update: {
            args: Prisma.message_versionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload>
          }
          deleteMany: {
            args: Prisma.message_versionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.message_versionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.message_versionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$message_versionsPayload>
          }
          aggregate: {
            args: Prisma.Message_versionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage_versions>
          }
          groupBy: {
            args: Prisma.message_versionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Message_versionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.message_versionsCountArgs<ExtArgs>
            result: $Utils.Optional<Message_versionsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      sources: {
        payload: Prisma.$sourcesPayload<ExtArgs>
        fields: Prisma.sourcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sourcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sourcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          findFirst: {
            args: Prisma.sourcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sourcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          findMany: {
            args: Prisma.sourcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>[]
          }
          create: {
            args: Prisma.sourcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          createMany: {
            args: Prisma.sourcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sourcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          update: {
            args: Prisma.sourcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          deleteMany: {
            args: Prisma.sourcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sourcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sourcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          aggregate: {
            args: Prisma.SourcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSources>
          }
          groupBy: {
            args: Prisma.sourcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sourcesCountArgs<ExtArgs>
            result: $Utils.Optional<SourcesCountAggregateOutputType> | number
          }
        }
      }
      summaries: {
        payload: Prisma.$summariesPayload<ExtArgs>
        fields: Prisma.summariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.summariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.summariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload>
          }
          findFirst: {
            args: Prisma.summariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.summariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload>
          }
          findMany: {
            args: Prisma.summariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload>[]
          }
          create: {
            args: Prisma.summariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload>
          }
          createMany: {
            args: Prisma.summariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.summariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload>
          }
          update: {
            args: Prisma.summariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload>
          }
          deleteMany: {
            args: Prisma.summariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.summariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.summariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summariesPayload>
          }
          aggregate: {
            args: Prisma.SummariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummaries>
          }
          groupBy: {
            args: Prisma.summariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.summariesCountArgs<ExtArgs>
            result: $Utils.Optional<SummariesCountAggregateOutputType> | number
          }
        }
      }
      summary_cache: {
        payload: Prisma.$summary_cachePayload<ExtArgs>
        fields: Prisma.summary_cacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.summary_cacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.summary_cacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload>
          }
          findFirst: {
            args: Prisma.summary_cacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.summary_cacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload>
          }
          findMany: {
            args: Prisma.summary_cacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload>[]
          }
          create: {
            args: Prisma.summary_cacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload>
          }
          createMany: {
            args: Prisma.summary_cacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.summary_cacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload>
          }
          update: {
            args: Prisma.summary_cacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload>
          }
          deleteMany: {
            args: Prisma.summary_cacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.summary_cacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.summary_cacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$summary_cachePayload>
          }
          aggregate: {
            args: Prisma.Summary_cacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummary_cache>
          }
          groupBy: {
            args: Prisma.summary_cacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<Summary_cacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.summary_cacheCountArgs<ExtArgs>
            result: $Utils.Optional<Summary_cacheCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    externalAccount?: ExternalAccountOmit
    attachments?: attachmentsOmit
    message_versions?: message_versionsOmit
    messages?: messagesOmit
    sources?: sourcesOmit
    summaries?: summariesOmit
    summary_cache?: summary_cacheOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExternalAccountCountOutputType
   */

  export type ExternalAccountCountOutputType = {
    messages: number
  }

  export type ExternalAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ExternalAccountCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ExternalAccountCountOutputType without action
   */
  export type ExternalAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccountCountOutputType
     */
    select?: ExternalAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExternalAccountCountOutputType without action
   */
  export type ExternalAccountCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type MessagesCountOutputType
   */

  export type MessagesCountOutputType = {
    attachments: number
    message_versions: number
    summaries: number
    summary_cache: number
  }

  export type MessagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | MessagesCountOutputTypeCountAttachmentsArgs
    message_versions?: boolean | MessagesCountOutputTypeCountMessage_versionsArgs
    summaries?: boolean | MessagesCountOutputTypeCountSummariesArgs
    summary_cache?: boolean | MessagesCountOutputTypeCountSummary_cacheArgs
  }

  // Custom InputTypes
  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagesCountOutputType
     */
    select?: MessagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attachmentsWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountMessage_versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: message_versionsWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: summariesWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountSummary_cacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: summary_cacheWhereInput
  }


  /**
   * Count Type SourcesCountOutputType
   */

  export type SourcesCountOutputType = {
    external_accounts: number
    messages: number
  }

  export type SourcesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    external_accounts?: boolean | SourcesCountOutputTypeCountExternal_accountsArgs
    messages?: boolean | SourcesCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * SourcesCountOutputType without action
   */
  export type SourcesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcesCountOutputType
     */
    select?: SourcesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourcesCountOutputType without action
   */
  export type SourcesCountOutputTypeCountExternal_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalAccountWhereInput
  }

  /**
   * SourcesCountOutputType without action
   */
  export type SourcesCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    external_accounts: number
    messages: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    external_accounts?: boolean | UsersCountOutputTypeCountExternal_accountsArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExternal_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalAccountWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ExternalAccount
   */

  export type AggregateExternalAccount = {
    _count: ExternalAccountCountAggregateOutputType | null
    _avg: ExternalAccountAvgAggregateOutputType | null
    _sum: ExternalAccountSumAggregateOutputType | null
    _min: ExternalAccountMinAggregateOutputType | null
    _max: ExternalAccountMaxAggregateOutputType | null
  }

  export type ExternalAccountAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
  }

  export type ExternalAccountSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
  }

  export type ExternalAccountMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
    external_user_id: string | null
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    connected_at: Date | null
  }

  export type ExternalAccountMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
    external_user_id: string | null
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    connected_at: Date | null
  }

  export type ExternalAccountCountAggregateOutputType = {
    id: number
    user_id: number
    source_id: number
    external_user_id: number
    access_token: number
    refresh_token: number
    expires_at: number
    connected_at: number
    _all: number
  }


  export type ExternalAccountAvgAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
  }

  export type ExternalAccountSumAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
  }

  export type ExternalAccountMinAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_user_id?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    connected_at?: true
  }

  export type ExternalAccountMaxAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_user_id?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    connected_at?: true
  }

  export type ExternalAccountCountAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_user_id?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    connected_at?: true
    _all?: true
  }

  export type ExternalAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalAccount to aggregate.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalAccounts
    **/
    _count?: true | ExternalAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternalAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternalAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalAccountMaxAggregateInputType
  }

  export type GetExternalAccountAggregateType<T extends ExternalAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalAccount[P]>
      : GetScalarType<T[P], AggregateExternalAccount[P]>
  }




  export type ExternalAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalAccountWhereInput
    orderBy?: ExternalAccountOrderByWithAggregationInput | ExternalAccountOrderByWithAggregationInput[]
    by: ExternalAccountScalarFieldEnum[] | ExternalAccountScalarFieldEnum
    having?: ExternalAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalAccountCountAggregateInputType | true
    _avg?: ExternalAccountAvgAggregateInputType
    _sum?: ExternalAccountSumAggregateInputType
    _min?: ExternalAccountMinAggregateInputType
    _max?: ExternalAccountMaxAggregateInputType
  }

  export type ExternalAccountGroupByOutputType = {
    id: number
    user_id: number
    source_id: number
    external_user_id: string | null
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    connected_at: Date | null
    _count: ExternalAccountCountAggregateOutputType | null
    _avg: ExternalAccountAvgAggregateOutputType | null
    _sum: ExternalAccountSumAggregateOutputType | null
    _min: ExternalAccountMinAggregateOutputType | null
    _max: ExternalAccountMaxAggregateOutputType | null
  }

  type GetExternalAccountGroupByPayload<T extends ExternalAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalAccountGroupByOutputType[P]>
        }
      >
    >


  export type ExternalAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    source_id?: boolean
    external_user_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    connected_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    source?: boolean | sourcesDefaultArgs<ExtArgs>
    messages?: boolean | ExternalAccount$messagesArgs<ExtArgs>
    _count?: boolean | ExternalAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalAccount"]>



  export type ExternalAccountSelectScalar = {
    id?: boolean
    user_id?: boolean
    source_id?: boolean
    external_user_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    connected_at?: boolean
  }

  export type ExternalAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "source_id" | "external_user_id" | "access_token" | "refresh_token" | "expires_at" | "connected_at", ExtArgs["result"]["externalAccount"]>
  export type ExternalAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    source?: boolean | sourcesDefaultArgs<ExtArgs>
    messages?: boolean | ExternalAccount$messagesArgs<ExtArgs>
    _count?: boolean | ExternalAccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExternalAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalAccount"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      source: Prisma.$sourcesPayload<ExtArgs>
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      source_id: number
      external_user_id: string | null
      access_token: string | null
      refresh_token: string | null
      expires_at: Date | null
      connected_at: Date | null
    }, ExtArgs["result"]["externalAccount"]>
    composites: {}
  }

  type ExternalAccountGetPayload<S extends boolean | null | undefined | ExternalAccountDefaultArgs> = $Result.GetResult<Prisma.$ExternalAccountPayload, S>

  type ExternalAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExternalAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExternalAccountCountAggregateInputType | true
    }

  export interface ExternalAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalAccount'], meta: { name: 'ExternalAccount' } }
    /**
     * Find zero or one ExternalAccount that matches the filter.
     * @param {ExternalAccountFindUniqueArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalAccountFindUniqueArgs>(args: SelectSubset<T, ExternalAccountFindUniqueArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExternalAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExternalAccountFindUniqueOrThrowArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountFindFirstArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalAccountFindFirstArgs>(args?: SelectSubset<T, ExternalAccountFindFirstArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountFindFirstOrThrowArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExternalAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalAccounts
     * const externalAccounts = await prisma.externalAccount.findMany()
     * 
     * // Get first 10 ExternalAccounts
     * const externalAccounts = await prisma.externalAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalAccountWithIdOnly = await prisma.externalAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExternalAccountFindManyArgs>(args?: SelectSubset<T, ExternalAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExternalAccount.
     * @param {ExternalAccountCreateArgs} args - Arguments to create a ExternalAccount.
     * @example
     * // Create one ExternalAccount
     * const ExternalAccount = await prisma.externalAccount.create({
     *   data: {
     *     // ... data to create a ExternalAccount
     *   }
     * })
     * 
     */
    create<T extends ExternalAccountCreateArgs>(args: SelectSubset<T, ExternalAccountCreateArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExternalAccounts.
     * @param {ExternalAccountCreateManyArgs} args - Arguments to create many ExternalAccounts.
     * @example
     * // Create many ExternalAccounts
     * const externalAccount = await prisma.externalAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalAccountCreateManyArgs>(args?: SelectSubset<T, ExternalAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExternalAccount.
     * @param {ExternalAccountDeleteArgs} args - Arguments to delete one ExternalAccount.
     * @example
     * // Delete one ExternalAccount
     * const ExternalAccount = await prisma.externalAccount.delete({
     *   where: {
     *     // ... filter to delete one ExternalAccount
     *   }
     * })
     * 
     */
    delete<T extends ExternalAccountDeleteArgs>(args: SelectSubset<T, ExternalAccountDeleteArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExternalAccount.
     * @param {ExternalAccountUpdateArgs} args - Arguments to update one ExternalAccount.
     * @example
     * // Update one ExternalAccount
     * const externalAccount = await prisma.externalAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalAccountUpdateArgs>(args: SelectSubset<T, ExternalAccountUpdateArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExternalAccounts.
     * @param {ExternalAccountDeleteManyArgs} args - Arguments to filter ExternalAccounts to delete.
     * @example
     * // Delete a few ExternalAccounts
     * const { count } = await prisma.externalAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalAccountDeleteManyArgs>(args?: SelectSubset<T, ExternalAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalAccounts
     * const externalAccount = await prisma.externalAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalAccountUpdateManyArgs>(args: SelectSubset<T, ExternalAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalAccount.
     * @param {ExternalAccountUpsertArgs} args - Arguments to update or create a ExternalAccount.
     * @example
     * // Update or create a ExternalAccount
     * const externalAccount = await prisma.externalAccount.upsert({
     *   create: {
     *     // ... data to create a ExternalAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalAccount we want to update
     *   }
     * })
     */
    upsert<T extends ExternalAccountUpsertArgs>(args: SelectSubset<T, ExternalAccountUpsertArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExternalAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountCountArgs} args - Arguments to filter ExternalAccounts to count.
     * @example
     * // Count the number of ExternalAccounts
     * const count = await prisma.externalAccount.count({
     *   where: {
     *     // ... the filter for the ExternalAccounts we want to count
     *   }
     * })
    **/
    count<T extends ExternalAccountCountArgs>(
      args?: Subset<T, ExternalAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExternalAccountAggregateArgs>(args: Subset<T, ExternalAccountAggregateArgs>): Prisma.PrismaPromise<GetExternalAccountAggregateType<T>>

    /**
     * Group by ExternalAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExternalAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalAccountGroupByArgs['orderBy'] }
        : { orderBy?: ExternalAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExternalAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalAccount model
   */
  readonly fields: ExternalAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source<T extends sourcesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sourcesDefaultArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ExternalAccount$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ExternalAccount$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExternalAccount model
   */
  interface ExternalAccountFieldRefs {
    readonly id: FieldRef<"ExternalAccount", 'Int'>
    readonly user_id: FieldRef<"ExternalAccount", 'Int'>
    readonly source_id: FieldRef<"ExternalAccount", 'Int'>
    readonly external_user_id: FieldRef<"ExternalAccount", 'String'>
    readonly access_token: FieldRef<"ExternalAccount", 'String'>
    readonly refresh_token: FieldRef<"ExternalAccount", 'String'>
    readonly expires_at: FieldRef<"ExternalAccount", 'DateTime'>
    readonly connected_at: FieldRef<"ExternalAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExternalAccount findUnique
   */
  export type ExternalAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount findUniqueOrThrow
   */
  export type ExternalAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount findFirst
   */
  export type ExternalAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalAccounts.
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalAccounts.
     */
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * ExternalAccount findFirstOrThrow
   */
  export type ExternalAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalAccounts.
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalAccounts.
     */
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * ExternalAccount findMany
   */
  export type ExternalAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccounts to fetch.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalAccounts.
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * ExternalAccount create
   */
  export type ExternalAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalAccount.
     */
    data: XOR<ExternalAccountCreateInput, ExternalAccountUncheckedCreateInput>
  }

  /**
   * ExternalAccount createMany
   */
  export type ExternalAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalAccounts.
     */
    data: ExternalAccountCreateManyInput | ExternalAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalAccount update
   */
  export type ExternalAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalAccount.
     */
    data: XOR<ExternalAccountUpdateInput, ExternalAccountUncheckedUpdateInput>
    /**
     * Choose, which ExternalAccount to update.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount updateMany
   */
  export type ExternalAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalAccounts.
     */
    data: XOR<ExternalAccountUpdateManyMutationInput, ExternalAccountUncheckedUpdateManyInput>
    /**
     * Filter which ExternalAccounts to update
     */
    where?: ExternalAccountWhereInput
    /**
     * Limit how many ExternalAccounts to update.
     */
    limit?: number
  }

  /**
   * ExternalAccount upsert
   */
  export type ExternalAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalAccount to update in case it exists.
     */
    where: ExternalAccountWhereUniqueInput
    /**
     * In case the ExternalAccount found by the `where` argument doesn't exist, create a new ExternalAccount with this data.
     */
    create: XOR<ExternalAccountCreateInput, ExternalAccountUncheckedCreateInput>
    /**
     * In case the ExternalAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalAccountUpdateInput, ExternalAccountUncheckedUpdateInput>
  }

  /**
   * ExternalAccount delete
   */
  export type ExternalAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter which ExternalAccount to delete.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount deleteMany
   */
  export type ExternalAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalAccounts to delete
     */
    where?: ExternalAccountWhereInput
    /**
     * Limit how many ExternalAccounts to delete.
     */
    limit?: number
  }

  /**
   * ExternalAccount.messages
   */
  export type ExternalAccount$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * ExternalAccount without action
   */
  export type ExternalAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
  }


  /**
   * Model attachments
   */

  export type AggregateAttachments = {
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  export type AttachmentsAvgAggregateOutputType = {
    id: number | null
    message_id: number | null
  }

  export type AttachmentsSumAggregateOutputType = {
    id: number | null
    message_id: number | null
  }

  export type AttachmentsMinAggregateOutputType = {
    id: number | null
    message_id: number | null
    file_name: string | null
    file_url: string | null
    file_type: string | null
    created_at: Date | null
  }

  export type AttachmentsMaxAggregateOutputType = {
    id: number | null
    message_id: number | null
    file_name: string | null
    file_url: string | null
    file_type: string | null
    created_at: Date | null
  }

  export type AttachmentsCountAggregateOutputType = {
    id: number
    message_id: number
    file_name: number
    file_url: number
    file_type: number
    created_at: number
    _all: number
  }


  export type AttachmentsAvgAggregateInputType = {
    id?: true
    message_id?: true
  }

  export type AttachmentsSumAggregateInputType = {
    id?: true
    message_id?: true
  }

  export type AttachmentsMinAggregateInputType = {
    id?: true
    message_id?: true
    file_name?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type AttachmentsMaxAggregateInputType = {
    id?: true
    message_id?: true
    file_name?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type AttachmentsCountAggregateInputType = {
    id?: true
    message_id?: true
    file_name?: true
    file_url?: true
    file_type?: true
    created_at?: true
    _all?: true
  }

  export type AttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachments to aggregate.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attachments
    **/
    _count?: true | AttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentsMaxAggregateInputType
  }

  export type GetAttachmentsAggregateType<T extends AttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachments[P]>
      : GetScalarType<T[P], AggregateAttachments[P]>
  }




  export type attachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attachmentsWhereInput
    orderBy?: attachmentsOrderByWithAggregationInput | attachmentsOrderByWithAggregationInput[]
    by: AttachmentsScalarFieldEnum[] | AttachmentsScalarFieldEnum
    having?: attachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentsCountAggregateInputType | true
    _avg?: AttachmentsAvgAggregateInputType
    _sum?: AttachmentsSumAggregateInputType
    _min?: AttachmentsMinAggregateInputType
    _max?: AttachmentsMaxAggregateInputType
  }

  export type AttachmentsGroupByOutputType = {
    id: number
    message_id: number
    file_name: string | null
    file_url: string | null
    file_type: string | null
    created_at: Date | null
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  type GetAttachmentsGroupByPayload<T extends attachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type attachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    file_name?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>



  export type attachmentsSelectScalar = {
    id?: boolean
    message_id?: boolean
    file_name?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
  }

  export type attachmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_id" | "file_name" | "file_url" | "file_type" | "created_at", ExtArgs["result"]["attachments"]>
  export type attachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }

  export type $attachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attachments"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_id: number
      file_name: string | null
      file_url: string | null
      file_type: string | null
      created_at: Date | null
    }, ExtArgs["result"]["attachments"]>
    composites: {}
  }

  type attachmentsGetPayload<S extends boolean | null | undefined | attachmentsDefaultArgs> = $Result.GetResult<Prisma.$attachmentsPayload, S>

  type attachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentsCountAggregateInputType | true
    }

  export interface attachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attachments'], meta: { name: 'attachments' } }
    /**
     * Find zero or one Attachments that matches the filter.
     * @param {attachmentsFindUniqueArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attachmentsFindUniqueArgs>(args: SelectSubset<T, attachmentsFindUniqueArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attachmentsFindUniqueOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attachmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, attachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attachmentsFindFirstArgs>(args?: SelectSubset<T, attachmentsFindFirstArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attachmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, attachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachments.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attachmentsFindManyArgs>(args?: SelectSubset<T, attachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachments.
     * @param {attachmentsCreateArgs} args - Arguments to create a Attachments.
     * @example
     * // Create one Attachments
     * const Attachments = await prisma.attachments.create({
     *   data: {
     *     // ... data to create a Attachments
     *   }
     * })
     * 
     */
    create<T extends attachmentsCreateArgs>(args: SelectSubset<T, attachmentsCreateArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {attachmentsCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attachmentsCreateManyArgs>(args?: SelectSubset<T, attachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachments.
     * @param {attachmentsDeleteArgs} args - Arguments to delete one Attachments.
     * @example
     * // Delete one Attachments
     * const Attachments = await prisma.attachments.delete({
     *   where: {
     *     // ... filter to delete one Attachments
     *   }
     * })
     * 
     */
    delete<T extends attachmentsDeleteArgs>(args: SelectSubset<T, attachmentsDeleteArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachments.
     * @param {attachmentsUpdateArgs} args - Arguments to update one Attachments.
     * @example
     * // Update one Attachments
     * const attachments = await prisma.attachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attachmentsUpdateArgs>(args: SelectSubset<T, attachmentsUpdateArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {attachmentsDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attachmentsDeleteManyArgs>(args?: SelectSubset<T, attachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attachmentsUpdateManyArgs>(args: SelectSubset<T, attachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachments.
     * @param {attachmentsUpsertArgs} args - Arguments to update or create a Attachments.
     * @example
     * // Update or create a Attachments
     * const attachments = await prisma.attachments.upsert({
     *   create: {
     *     // ... data to create a Attachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachments we want to update
     *   }
     * })
     */
    upsert<T extends attachmentsUpsertArgs>(args: SelectSubset<T, attachmentsUpsertArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachments.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends attachmentsCountArgs>(
      args?: Subset<T, attachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentsAggregateArgs>(args: Subset<T, AttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAttachmentsAggregateType<T>>

    /**
     * Group by Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends attachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attachmentsGroupByArgs['orderBy'] }
        : { orderBy?: attachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, attachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attachments model
   */
  readonly fields: attachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends messagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, messagesDefaultArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attachments model
   */
  interface attachmentsFieldRefs {
    readonly id: FieldRef<"attachments", 'Int'>
    readonly message_id: FieldRef<"attachments", 'Int'>
    readonly file_name: FieldRef<"attachments", 'String'>
    readonly file_url: FieldRef<"attachments", 'String'>
    readonly file_type: FieldRef<"attachments", 'String'>
    readonly created_at: FieldRef<"attachments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attachments findUnique
   */
  export type attachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments findUniqueOrThrow
   */
  export type attachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments findFirst
   */
  export type attachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments findFirstOrThrow
   */
  export type attachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments findMany
   */
  export type attachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments create
   */
  export type attachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a attachments.
     */
    data: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
  }

  /**
   * attachments createMany
   */
  export type attachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attachments.
     */
    data: attachmentsCreateManyInput | attachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attachments update
   */
  export type attachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a attachments.
     */
    data: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
    /**
     * Choose, which attachments to update.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments updateMany
   */
  export type attachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to update.
     */
    limit?: number
  }

  /**
   * attachments upsert
   */
  export type attachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the attachments to update in case it exists.
     */
    where: attachmentsWhereUniqueInput
    /**
     * In case the attachments found by the `where` argument doesn't exist, create a new attachments with this data.
     */
    create: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
    /**
     * In case the attachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
  }

  /**
   * attachments delete
   */
  export type attachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter which attachments to delete.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments deleteMany
   */
  export type attachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachments to delete
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to delete.
     */
    limit?: number
  }

  /**
   * attachments without action
   */
  export type attachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
  }


  /**
   * Model message_versions
   */

  export type AggregateMessage_versions = {
    _count: Message_versionsCountAggregateOutputType | null
    _avg: Message_versionsAvgAggregateOutputType | null
    _sum: Message_versionsSumAggregateOutputType | null
    _min: Message_versionsMinAggregateOutputType | null
    _max: Message_versionsMaxAggregateOutputType | null
  }

  export type Message_versionsAvgAggregateOutputType = {
    id: number | null
    message_id: number | null
    version: number | null
  }

  export type Message_versionsSumAggregateOutputType = {
    id: number | null
    message_id: number | null
    version: number | null
  }

  export type Message_versionsMinAggregateOutputType = {
    id: number | null
    message_id: number | null
    version: number | null
    content: string | null
    update_at: Date | null
  }

  export type Message_versionsMaxAggregateOutputType = {
    id: number | null
    message_id: number | null
    version: number | null
    content: string | null
    update_at: Date | null
  }

  export type Message_versionsCountAggregateOutputType = {
    id: number
    message_id: number
    version: number
    content: number
    update_at: number
    _all: number
  }


  export type Message_versionsAvgAggregateInputType = {
    id?: true
    message_id?: true
    version?: true
  }

  export type Message_versionsSumAggregateInputType = {
    id?: true
    message_id?: true
    version?: true
  }

  export type Message_versionsMinAggregateInputType = {
    id?: true
    message_id?: true
    version?: true
    content?: true
    update_at?: true
  }

  export type Message_versionsMaxAggregateInputType = {
    id?: true
    message_id?: true
    version?: true
    content?: true
    update_at?: true
  }

  export type Message_versionsCountAggregateInputType = {
    id?: true
    message_id?: true
    version?: true
    content?: true
    update_at?: true
    _all?: true
  }

  export type Message_versionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message_versions to aggregate.
     */
    where?: message_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of message_versions to fetch.
     */
    orderBy?: message_versionsOrderByWithRelationInput | message_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: message_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` message_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` message_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned message_versions
    **/
    _count?: true | Message_versionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Message_versionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Message_versionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Message_versionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Message_versionsMaxAggregateInputType
  }

  export type GetMessage_versionsAggregateType<T extends Message_versionsAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage_versions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage_versions[P]>
      : GetScalarType<T[P], AggregateMessage_versions[P]>
  }




  export type message_versionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: message_versionsWhereInput
    orderBy?: message_versionsOrderByWithAggregationInput | message_versionsOrderByWithAggregationInput[]
    by: Message_versionsScalarFieldEnum[] | Message_versionsScalarFieldEnum
    having?: message_versionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Message_versionsCountAggregateInputType | true
    _avg?: Message_versionsAvgAggregateInputType
    _sum?: Message_versionsSumAggregateInputType
    _min?: Message_versionsMinAggregateInputType
    _max?: Message_versionsMaxAggregateInputType
  }

  export type Message_versionsGroupByOutputType = {
    id: number
    message_id: number
    version: number
    content: string
    update_at: Date | null
    _count: Message_versionsCountAggregateOutputType | null
    _avg: Message_versionsAvgAggregateOutputType | null
    _sum: Message_versionsSumAggregateOutputType | null
    _min: Message_versionsMinAggregateOutputType | null
    _max: Message_versionsMaxAggregateOutputType | null
  }

  type GetMessage_versionsGroupByPayload<T extends message_versionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Message_versionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Message_versionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Message_versionsGroupByOutputType[P]>
            : GetScalarType<T[P], Message_versionsGroupByOutputType[P]>
        }
      >
    >


  export type message_versionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    version?: boolean
    content?: boolean
    update_at?: boolean
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message_versions"]>



  export type message_versionsSelectScalar = {
    id?: boolean
    message_id?: boolean
    version?: boolean
    content?: boolean
    update_at?: boolean
  }

  export type message_versionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_id" | "version" | "content" | "update_at", ExtArgs["result"]["message_versions"]>
  export type message_versionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }

  export type $message_versionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message_versions"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_id: number
      version: number
      content: string
      update_at: Date | null
    }, ExtArgs["result"]["message_versions"]>
    composites: {}
  }

  type message_versionsGetPayload<S extends boolean | null | undefined | message_versionsDefaultArgs> = $Result.GetResult<Prisma.$message_versionsPayload, S>

  type message_versionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<message_versionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Message_versionsCountAggregateInputType | true
    }

  export interface message_versionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message_versions'], meta: { name: 'message_versions' } }
    /**
     * Find zero or one Message_versions that matches the filter.
     * @param {message_versionsFindUniqueArgs} args - Arguments to find a Message_versions
     * @example
     * // Get one Message_versions
     * const message_versions = await prisma.message_versions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends message_versionsFindUniqueArgs>(args: SelectSubset<T, message_versionsFindUniqueArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message_versions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {message_versionsFindUniqueOrThrowArgs} args - Arguments to find a Message_versions
     * @example
     * // Get one Message_versions
     * const message_versions = await prisma.message_versions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends message_versionsFindUniqueOrThrowArgs>(args: SelectSubset<T, message_versionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {message_versionsFindFirstArgs} args - Arguments to find a Message_versions
     * @example
     * // Get one Message_versions
     * const message_versions = await prisma.message_versions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends message_versionsFindFirstArgs>(args?: SelectSubset<T, message_versionsFindFirstArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message_versions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {message_versionsFindFirstOrThrowArgs} args - Arguments to find a Message_versions
     * @example
     * // Get one Message_versions
     * const message_versions = await prisma.message_versions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends message_versionsFindFirstOrThrowArgs>(args?: SelectSubset<T, message_versionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Message_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {message_versionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Message_versions
     * const message_versions = await prisma.message_versions.findMany()
     * 
     * // Get first 10 Message_versions
     * const message_versions = await prisma.message_versions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const message_versionsWithIdOnly = await prisma.message_versions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends message_versionsFindManyArgs>(args?: SelectSubset<T, message_versionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message_versions.
     * @param {message_versionsCreateArgs} args - Arguments to create a Message_versions.
     * @example
     * // Create one Message_versions
     * const Message_versions = await prisma.message_versions.create({
     *   data: {
     *     // ... data to create a Message_versions
     *   }
     * })
     * 
     */
    create<T extends message_versionsCreateArgs>(args: SelectSubset<T, message_versionsCreateArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Message_versions.
     * @param {message_versionsCreateManyArgs} args - Arguments to create many Message_versions.
     * @example
     * // Create many Message_versions
     * const message_versions = await prisma.message_versions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends message_versionsCreateManyArgs>(args?: SelectSubset<T, message_versionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message_versions.
     * @param {message_versionsDeleteArgs} args - Arguments to delete one Message_versions.
     * @example
     * // Delete one Message_versions
     * const Message_versions = await prisma.message_versions.delete({
     *   where: {
     *     // ... filter to delete one Message_versions
     *   }
     * })
     * 
     */
    delete<T extends message_versionsDeleteArgs>(args: SelectSubset<T, message_versionsDeleteArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message_versions.
     * @param {message_versionsUpdateArgs} args - Arguments to update one Message_versions.
     * @example
     * // Update one Message_versions
     * const message_versions = await prisma.message_versions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends message_versionsUpdateArgs>(args: SelectSubset<T, message_versionsUpdateArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Message_versions.
     * @param {message_versionsDeleteManyArgs} args - Arguments to filter Message_versions to delete.
     * @example
     * // Delete a few Message_versions
     * const { count } = await prisma.message_versions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends message_versionsDeleteManyArgs>(args?: SelectSubset<T, message_versionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Message_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {message_versionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Message_versions
     * const message_versions = await prisma.message_versions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends message_versionsUpdateManyArgs>(args: SelectSubset<T, message_versionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message_versions.
     * @param {message_versionsUpsertArgs} args - Arguments to update or create a Message_versions.
     * @example
     * // Update or create a Message_versions
     * const message_versions = await prisma.message_versions.upsert({
     *   create: {
     *     // ... data to create a Message_versions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message_versions we want to update
     *   }
     * })
     */
    upsert<T extends message_versionsUpsertArgs>(args: SelectSubset<T, message_versionsUpsertArgs<ExtArgs>>): Prisma__message_versionsClient<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Message_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {message_versionsCountArgs} args - Arguments to filter Message_versions to count.
     * @example
     * // Count the number of Message_versions
     * const count = await prisma.message_versions.count({
     *   where: {
     *     // ... the filter for the Message_versions we want to count
     *   }
     * })
    **/
    count<T extends message_versionsCountArgs>(
      args?: Subset<T, message_versionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Message_versionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Message_versionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Message_versionsAggregateArgs>(args: Subset<T, Message_versionsAggregateArgs>): Prisma.PrismaPromise<GetMessage_versionsAggregateType<T>>

    /**
     * Group by Message_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {message_versionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends message_versionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: message_versionsGroupByArgs['orderBy'] }
        : { orderBy?: message_versionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, message_versionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessage_versionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message_versions model
   */
  readonly fields: message_versionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message_versions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__message_versionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends messagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, messagesDefaultArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the message_versions model
   */
  interface message_versionsFieldRefs {
    readonly id: FieldRef<"message_versions", 'Int'>
    readonly message_id: FieldRef<"message_versions", 'Int'>
    readonly version: FieldRef<"message_versions", 'Int'>
    readonly content: FieldRef<"message_versions", 'String'>
    readonly update_at: FieldRef<"message_versions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * message_versions findUnique
   */
  export type message_versionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * Filter, which message_versions to fetch.
     */
    where: message_versionsWhereUniqueInput
  }

  /**
   * message_versions findUniqueOrThrow
   */
  export type message_versionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * Filter, which message_versions to fetch.
     */
    where: message_versionsWhereUniqueInput
  }

  /**
   * message_versions findFirst
   */
  export type message_versionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * Filter, which message_versions to fetch.
     */
    where?: message_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of message_versions to fetch.
     */
    orderBy?: message_versionsOrderByWithRelationInput | message_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for message_versions.
     */
    cursor?: message_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` message_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` message_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of message_versions.
     */
    distinct?: Message_versionsScalarFieldEnum | Message_versionsScalarFieldEnum[]
  }

  /**
   * message_versions findFirstOrThrow
   */
  export type message_versionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * Filter, which message_versions to fetch.
     */
    where?: message_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of message_versions to fetch.
     */
    orderBy?: message_versionsOrderByWithRelationInput | message_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for message_versions.
     */
    cursor?: message_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` message_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` message_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of message_versions.
     */
    distinct?: Message_versionsScalarFieldEnum | Message_versionsScalarFieldEnum[]
  }

  /**
   * message_versions findMany
   */
  export type message_versionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * Filter, which message_versions to fetch.
     */
    where?: message_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of message_versions to fetch.
     */
    orderBy?: message_versionsOrderByWithRelationInput | message_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing message_versions.
     */
    cursor?: message_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` message_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` message_versions.
     */
    skip?: number
    distinct?: Message_versionsScalarFieldEnum | Message_versionsScalarFieldEnum[]
  }

  /**
   * message_versions create
   */
  export type message_versionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * The data needed to create a message_versions.
     */
    data: XOR<message_versionsCreateInput, message_versionsUncheckedCreateInput>
  }

  /**
   * message_versions createMany
   */
  export type message_versionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many message_versions.
     */
    data: message_versionsCreateManyInput | message_versionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message_versions update
   */
  export type message_versionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * The data needed to update a message_versions.
     */
    data: XOR<message_versionsUpdateInput, message_versionsUncheckedUpdateInput>
    /**
     * Choose, which message_versions to update.
     */
    where: message_versionsWhereUniqueInput
  }

  /**
   * message_versions updateMany
   */
  export type message_versionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update message_versions.
     */
    data: XOR<message_versionsUpdateManyMutationInput, message_versionsUncheckedUpdateManyInput>
    /**
     * Filter which message_versions to update
     */
    where?: message_versionsWhereInput
    /**
     * Limit how many message_versions to update.
     */
    limit?: number
  }

  /**
   * message_versions upsert
   */
  export type message_versionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * The filter to search for the message_versions to update in case it exists.
     */
    where: message_versionsWhereUniqueInput
    /**
     * In case the message_versions found by the `where` argument doesn't exist, create a new message_versions with this data.
     */
    create: XOR<message_versionsCreateInput, message_versionsUncheckedCreateInput>
    /**
     * In case the message_versions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<message_versionsUpdateInput, message_versionsUncheckedUpdateInput>
  }

  /**
   * message_versions delete
   */
  export type message_versionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    /**
     * Filter which message_versions to delete.
     */
    where: message_versionsWhereUniqueInput
  }

  /**
   * message_versions deleteMany
   */
  export type message_versionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message_versions to delete
     */
    where?: message_versionsWhereInput
    /**
     * Limit how many message_versions to delete.
     */
    limit?: number
  }

  /**
   * message_versions without action
   */
  export type message_versionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
    external_account_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
    external_account_id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
    external_account_id: number | null
    external_message_id: string | null
    original_content: string | null
    received_at: Date | null
    is_read: boolean | null
    priority_level: $Enums.messages_priority_level | null
    created_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    source_id: number | null
    external_account_id: number | null
    external_message_id: string | null
    original_content: string | null
    received_at: Date | null
    is_read: boolean | null
    priority_level: $Enums.messages_priority_level | null
    created_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id: number
    original_content: number
    received_at: number
    is_read: number
    priority_level: number
    created_at: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_account_id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_account_id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_account_id?: true
    external_message_id?: true
    original_content?: true
    received_at?: true
    is_read?: true
    priority_level?: true
    created_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_account_id?: true
    external_message_id?: true
    original_content?: true
    received_at?: true
    is_read?: true
    priority_level?: true
    created_at?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    user_id?: true
    source_id?: true
    external_account_id?: true
    external_message_id?: true
    original_content?: true
    received_at?: true
    is_read?: true
    priority_level?: true
    created_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id: string | null
    original_content: string
    received_at: Date
    is_read: boolean | null
    priority_level: $Enums.messages_priority_level | null
    created_at: Date | null
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    source_id?: boolean
    external_account_id?: boolean
    external_message_id?: boolean
    original_content?: boolean
    received_at?: boolean
    is_read?: boolean
    priority_level?: boolean
    created_at?: boolean
    attachments?: boolean | messages$attachmentsArgs<ExtArgs>
    message_versions?: boolean | messages$message_versionsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    sources?: boolean | sourcesDefaultArgs<ExtArgs>
    external_accounts?: boolean | ExternalAccountDefaultArgs<ExtArgs>
    summaries?: boolean | messages$summariesArgs<ExtArgs>
    summary_cache?: boolean | messages$summary_cacheArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>



  export type messagesSelectScalar = {
    id?: boolean
    user_id?: boolean
    source_id?: boolean
    external_account_id?: boolean
    external_message_id?: boolean
    original_content?: boolean
    received_at?: boolean
    is_read?: boolean
    priority_level?: boolean
    created_at?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "source_id" | "external_account_id" | "external_message_id" | "original_content" | "received_at" | "is_read" | "priority_level" | "created_at", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | messages$attachmentsArgs<ExtArgs>
    message_versions?: boolean | messages$message_versionsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    sources?: boolean | sourcesDefaultArgs<ExtArgs>
    external_accounts?: boolean | ExternalAccountDefaultArgs<ExtArgs>
    summaries?: boolean | messages$summariesArgs<ExtArgs>
    summary_cache?: boolean | messages$summary_cacheArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      attachments: Prisma.$attachmentsPayload<ExtArgs>[]
      message_versions: Prisma.$message_versionsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      sources: Prisma.$sourcesPayload<ExtArgs>
      external_accounts: Prisma.$ExternalAccountPayload<ExtArgs>
      summaries: Prisma.$summariesPayload<ExtArgs>[]
      summary_cache: Prisma.$summary_cachePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      source_id: number
      external_account_id: number
      external_message_id: string | null
      original_content: string
      received_at: Date
      is_read: boolean | null
      priority_level: $Enums.messages_priority_level | null
      created_at: Date | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends messages$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, messages$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_versions<T extends messages$message_versionsArgs<ExtArgs> = {}>(args?: Subset<T, messages$message_versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$message_versionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sources<T extends sourcesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sourcesDefaultArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    external_accounts<T extends ExternalAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExternalAccountDefaultArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    summaries<T extends messages$summariesArgs<ExtArgs> = {}>(args?: Subset<T, messages$summariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    summary_cache<T extends messages$summary_cacheArgs<ExtArgs> = {}>(args?: Subset<T, messages$summary_cacheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly user_id: FieldRef<"messages", 'Int'>
    readonly source_id: FieldRef<"messages", 'Int'>
    readonly external_account_id: FieldRef<"messages", 'Int'>
    readonly external_message_id: FieldRef<"messages", 'String'>
    readonly original_content: FieldRef<"messages", 'String'>
    readonly received_at: FieldRef<"messages", 'DateTime'>
    readonly is_read: FieldRef<"messages", 'Boolean'>
    readonly priority_level: FieldRef<"messages", 'messages_priority_level'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.attachments
   */
  export type messages$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    where?: attachmentsWhereInput
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    cursor?: attachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * messages.message_versions
   */
  export type messages$message_versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message_versions
     */
    select?: message_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message_versions
     */
    omit?: message_versionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: message_versionsInclude<ExtArgs> | null
    where?: message_versionsWhereInput
    orderBy?: message_versionsOrderByWithRelationInput | message_versionsOrderByWithRelationInput[]
    cursor?: message_versionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Message_versionsScalarFieldEnum | Message_versionsScalarFieldEnum[]
  }

  /**
   * messages.summaries
   */
  export type messages$summariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    where?: summariesWhereInput
    orderBy?: summariesOrderByWithRelationInput | summariesOrderByWithRelationInput[]
    cursor?: summariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummariesScalarFieldEnum | SummariesScalarFieldEnum[]
  }

  /**
   * messages.summary_cache
   */
  export type messages$summary_cacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    where?: summary_cacheWhereInput
    orderBy?: summary_cacheOrderByWithRelationInput | summary_cacheOrderByWithRelationInput[]
    cursor?: summary_cacheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Summary_cacheScalarFieldEnum | Summary_cacheScalarFieldEnum[]
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model sources
   */

  export type AggregateSources = {
    _count: SourcesCountAggregateOutputType | null
    _avg: SourcesAvgAggregateOutputType | null
    _sum: SourcesSumAggregateOutputType | null
    _min: SourcesMinAggregateOutputType | null
    _max: SourcesMaxAggregateOutputType | null
  }

  export type SourcesAvgAggregateOutputType = {
    id: number | null
  }

  export type SourcesSumAggregateOutputType = {
    id: number | null
  }

  export type SourcesMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    icon_url: string | null
    base_url: string | null
    created_at: Date | null
  }

  export type SourcesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    icon_url: string | null
    base_url: string | null
    created_at: Date | null
  }

  export type SourcesCountAggregateOutputType = {
    id: number
    name: number
    type: number
    icon_url: number
    base_url: number
    created_at: number
    _all: number
  }


  export type SourcesAvgAggregateInputType = {
    id?: true
  }

  export type SourcesSumAggregateInputType = {
    id?: true
  }

  export type SourcesMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    icon_url?: true
    base_url?: true
    created_at?: true
  }

  export type SourcesMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    icon_url?: true
    base_url?: true
    created_at?: true
  }

  export type SourcesCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    icon_url?: true
    base_url?: true
    created_at?: true
    _all?: true
  }

  export type SourcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sources to aggregate.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sources
    **/
    _count?: true | SourcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourcesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourcesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourcesMaxAggregateInputType
  }

  export type GetSourcesAggregateType<T extends SourcesAggregateArgs> = {
        [P in keyof T & keyof AggregateSources]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSources[P]>
      : GetScalarType<T[P], AggregateSources[P]>
  }




  export type sourcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sourcesWhereInput
    orderBy?: sourcesOrderByWithAggregationInput | sourcesOrderByWithAggregationInput[]
    by: SourcesScalarFieldEnum[] | SourcesScalarFieldEnum
    having?: sourcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourcesCountAggregateInputType | true
    _avg?: SourcesAvgAggregateInputType
    _sum?: SourcesSumAggregateInputType
    _min?: SourcesMinAggregateInputType
    _max?: SourcesMaxAggregateInputType
  }

  export type SourcesGroupByOutputType = {
    id: number
    name: string
    type: string | null
    icon_url: string | null
    base_url: string | null
    created_at: Date | null
    _count: SourcesCountAggregateOutputType | null
    _avg: SourcesAvgAggregateOutputType | null
    _sum: SourcesSumAggregateOutputType | null
    _min: SourcesMinAggregateOutputType | null
    _max: SourcesMaxAggregateOutputType | null
  }

  type GetSourcesGroupByPayload<T extends sourcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourcesGroupByOutputType[P]>
            : GetScalarType<T[P], SourcesGroupByOutputType[P]>
        }
      >
    >


  export type sourcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    icon_url?: boolean
    base_url?: boolean
    created_at?: boolean
    external_accounts?: boolean | sources$external_accountsArgs<ExtArgs>
    messages?: boolean | sources$messagesArgs<ExtArgs>
    _count?: boolean | SourcesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sources"]>



  export type sourcesSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    icon_url?: boolean
    base_url?: boolean
    created_at?: boolean
  }

  export type sourcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "icon_url" | "base_url" | "created_at", ExtArgs["result"]["sources"]>
  export type sourcesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    external_accounts?: boolean | sources$external_accountsArgs<ExtArgs>
    messages?: boolean | sources$messagesArgs<ExtArgs>
    _count?: boolean | SourcesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sourcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sources"
    objects: {
      external_accounts: Prisma.$ExternalAccountPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string | null
      icon_url: string | null
      base_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["sources"]>
    composites: {}
  }

  type sourcesGetPayload<S extends boolean | null | undefined | sourcesDefaultArgs> = $Result.GetResult<Prisma.$sourcesPayload, S>

  type sourcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sourcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourcesCountAggregateInputType | true
    }

  export interface sourcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sources'], meta: { name: 'sources' } }
    /**
     * Find zero or one Sources that matches the filter.
     * @param {sourcesFindUniqueArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sourcesFindUniqueArgs>(args: SelectSubset<T, sourcesFindUniqueArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sources that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sourcesFindUniqueOrThrowArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sourcesFindUniqueOrThrowArgs>(args: SelectSubset<T, sourcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesFindFirstArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sourcesFindFirstArgs>(args?: SelectSubset<T, sourcesFindFirstArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sources that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesFindFirstOrThrowArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sourcesFindFirstOrThrowArgs>(args?: SelectSubset<T, sourcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.sources.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.sources.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourcesWithIdOnly = await prisma.sources.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sourcesFindManyArgs>(args?: SelectSubset<T, sourcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sources.
     * @param {sourcesCreateArgs} args - Arguments to create a Sources.
     * @example
     * // Create one Sources
     * const Sources = await prisma.sources.create({
     *   data: {
     *     // ... data to create a Sources
     *   }
     * })
     * 
     */
    create<T extends sourcesCreateArgs>(args: SelectSubset<T, sourcesCreateArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {sourcesCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const sources = await prisma.sources.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sourcesCreateManyArgs>(args?: SelectSubset<T, sourcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sources.
     * @param {sourcesDeleteArgs} args - Arguments to delete one Sources.
     * @example
     * // Delete one Sources
     * const Sources = await prisma.sources.delete({
     *   where: {
     *     // ... filter to delete one Sources
     *   }
     * })
     * 
     */
    delete<T extends sourcesDeleteArgs>(args: SelectSubset<T, sourcesDeleteArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sources.
     * @param {sourcesUpdateArgs} args - Arguments to update one Sources.
     * @example
     * // Update one Sources
     * const sources = await prisma.sources.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sourcesUpdateArgs>(args: SelectSubset<T, sourcesUpdateArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {sourcesDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.sources.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sourcesDeleteManyArgs>(args?: SelectSubset<T, sourcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const sources = await prisma.sources.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sourcesUpdateManyArgs>(args: SelectSubset<T, sourcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sources.
     * @param {sourcesUpsertArgs} args - Arguments to update or create a Sources.
     * @example
     * // Update or create a Sources
     * const sources = await prisma.sources.upsert({
     *   create: {
     *     // ... data to create a Sources
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sources we want to update
     *   }
     * })
     */
    upsert<T extends sourcesUpsertArgs>(args: SelectSubset<T, sourcesUpsertArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.sources.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends sourcesCountArgs>(
      args?: Subset<T, sourcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourcesAggregateArgs>(args: Subset<T, SourcesAggregateArgs>): Prisma.PrismaPromise<GetSourcesAggregateType<T>>

    /**
     * Group by Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sourcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sourcesGroupByArgs['orderBy'] }
        : { orderBy?: sourcesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sourcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sources model
   */
  readonly fields: sourcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sources.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sourcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    external_accounts<T extends sources$external_accountsArgs<ExtArgs> = {}>(args?: Subset<T, sources$external_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends sources$messagesArgs<ExtArgs> = {}>(args?: Subset<T, sources$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sources model
   */
  interface sourcesFieldRefs {
    readonly id: FieldRef<"sources", 'Int'>
    readonly name: FieldRef<"sources", 'String'>
    readonly type: FieldRef<"sources", 'String'>
    readonly icon_url: FieldRef<"sources", 'String'>
    readonly base_url: FieldRef<"sources", 'String'>
    readonly created_at: FieldRef<"sources", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sources findUnique
   */
  export type sourcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources findUniqueOrThrow
   */
  export type sourcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources findFirst
   */
  export type sourcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sources.
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sources.
     */
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * sources findFirstOrThrow
   */
  export type sourcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sources.
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sources.
     */
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * sources findMany
   */
  export type sourcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sources.
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * sources create
   */
  export type sourcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * The data needed to create a sources.
     */
    data: XOR<sourcesCreateInput, sourcesUncheckedCreateInput>
  }

  /**
   * sources createMany
   */
  export type sourcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sources.
     */
    data: sourcesCreateManyInput | sourcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sources update
   */
  export type sourcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * The data needed to update a sources.
     */
    data: XOR<sourcesUpdateInput, sourcesUncheckedUpdateInput>
    /**
     * Choose, which sources to update.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources updateMany
   */
  export type sourcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sources.
     */
    data: XOR<sourcesUpdateManyMutationInput, sourcesUncheckedUpdateManyInput>
    /**
     * Filter which sources to update
     */
    where?: sourcesWhereInput
    /**
     * Limit how many sources to update.
     */
    limit?: number
  }

  /**
   * sources upsert
   */
  export type sourcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * The filter to search for the sources to update in case it exists.
     */
    where: sourcesWhereUniqueInput
    /**
     * In case the sources found by the `where` argument doesn't exist, create a new sources with this data.
     */
    create: XOR<sourcesCreateInput, sourcesUncheckedCreateInput>
    /**
     * In case the sources was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sourcesUpdateInput, sourcesUncheckedUpdateInput>
  }

  /**
   * sources delete
   */
  export type sourcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter which sources to delete.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources deleteMany
   */
  export type sourcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sources to delete
     */
    where?: sourcesWhereInput
    /**
     * Limit how many sources to delete.
     */
    limit?: number
  }

  /**
   * sources.external_accounts
   */
  export type sources$external_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    where?: ExternalAccountWhereInput
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    cursor?: ExternalAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * sources.messages
   */
  export type sources$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * sources without action
   */
  export type sourcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
  }


  /**
   * Model summaries
   */

  export type AggregateSummaries = {
    _count: SummariesCountAggregateOutputType | null
    _avg: SummariesAvgAggregateOutputType | null
    _sum: SummariesSumAggregateOutputType | null
    _min: SummariesMinAggregateOutputType | null
    _max: SummariesMaxAggregateOutputType | null
  }

  export type SummariesAvgAggregateOutputType = {
    id: number | null
    message_id: number | null
    temperature: number | null
  }

  export type SummariesSumAggregateOutputType = {
    id: number | null
    message_id: number | null
    temperature: number | null
  }

  export type SummariesMinAggregateOutputType = {
    id: number | null
    message_id: number | null
    summary_text: string | null
    is_edited: boolean | null
    model_used: string | null
    temperature: number | null
    is_auto_generated: boolean | null
    generated_at: Date | null
  }

  export type SummariesMaxAggregateOutputType = {
    id: number | null
    message_id: number | null
    summary_text: string | null
    is_edited: boolean | null
    model_used: string | null
    temperature: number | null
    is_auto_generated: boolean | null
    generated_at: Date | null
  }

  export type SummariesCountAggregateOutputType = {
    id: number
    message_id: number
    summary_text: number
    is_edited: number
    model_used: number
    temperature: number
    is_auto_generated: number
    generated_at: number
    _all: number
  }


  export type SummariesAvgAggregateInputType = {
    id?: true
    message_id?: true
    temperature?: true
  }

  export type SummariesSumAggregateInputType = {
    id?: true
    message_id?: true
    temperature?: true
  }

  export type SummariesMinAggregateInputType = {
    id?: true
    message_id?: true
    summary_text?: true
    is_edited?: true
    model_used?: true
    temperature?: true
    is_auto_generated?: true
    generated_at?: true
  }

  export type SummariesMaxAggregateInputType = {
    id?: true
    message_id?: true
    summary_text?: true
    is_edited?: true
    model_used?: true
    temperature?: true
    is_auto_generated?: true
    generated_at?: true
  }

  export type SummariesCountAggregateInputType = {
    id?: true
    message_id?: true
    summary_text?: true
    is_edited?: true
    model_used?: true
    temperature?: true
    is_auto_generated?: true
    generated_at?: true
    _all?: true
  }

  export type SummariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which summaries to aggregate.
     */
    where?: summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summaries to fetch.
     */
    orderBy?: summariesOrderByWithRelationInput | summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned summaries
    **/
    _count?: true | SummariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SummariesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SummariesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummariesMaxAggregateInputType
  }

  export type GetSummariesAggregateType<T extends SummariesAggregateArgs> = {
        [P in keyof T & keyof AggregateSummaries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummaries[P]>
      : GetScalarType<T[P], AggregateSummaries[P]>
  }




  export type summariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: summariesWhereInput
    orderBy?: summariesOrderByWithAggregationInput | summariesOrderByWithAggregationInput[]
    by: SummariesScalarFieldEnum[] | SummariesScalarFieldEnum
    having?: summariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummariesCountAggregateInputType | true
    _avg?: SummariesAvgAggregateInputType
    _sum?: SummariesSumAggregateInputType
    _min?: SummariesMinAggregateInputType
    _max?: SummariesMaxAggregateInputType
  }

  export type SummariesGroupByOutputType = {
    id: number
    message_id: number
    summary_text: string
    is_edited: boolean | null
    model_used: string | null
    temperature: number | null
    is_auto_generated: boolean | null
    generated_at: Date | null
    _count: SummariesCountAggregateOutputType | null
    _avg: SummariesAvgAggregateOutputType | null
    _sum: SummariesSumAggregateOutputType | null
    _min: SummariesMinAggregateOutputType | null
    _max: SummariesMaxAggregateOutputType | null
  }

  type GetSummariesGroupByPayload<T extends summariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummariesGroupByOutputType[P]>
            : GetScalarType<T[P], SummariesGroupByOutputType[P]>
        }
      >
    >


  export type summariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    summary_text?: boolean
    is_edited?: boolean
    model_used?: boolean
    temperature?: boolean
    is_auto_generated?: boolean
    generated_at?: boolean
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaries"]>



  export type summariesSelectScalar = {
    id?: boolean
    message_id?: boolean
    summary_text?: boolean
    is_edited?: boolean
    model_used?: boolean
    temperature?: boolean
    is_auto_generated?: boolean
    generated_at?: boolean
  }

  export type summariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_id" | "summary_text" | "is_edited" | "model_used" | "temperature" | "is_auto_generated" | "generated_at", ExtArgs["result"]["summaries"]>
  export type summariesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }

  export type $summariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "summaries"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_id: number
      summary_text: string
      is_edited: boolean | null
      model_used: string | null
      temperature: number | null
      is_auto_generated: boolean | null
      generated_at: Date | null
    }, ExtArgs["result"]["summaries"]>
    composites: {}
  }

  type summariesGetPayload<S extends boolean | null | undefined | summariesDefaultArgs> = $Result.GetResult<Prisma.$summariesPayload, S>

  type summariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<summariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SummariesCountAggregateInputType | true
    }

  export interface summariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['summaries'], meta: { name: 'summaries' } }
    /**
     * Find zero or one Summaries that matches the filter.
     * @param {summariesFindUniqueArgs} args - Arguments to find a Summaries
     * @example
     * // Get one Summaries
     * const summaries = await prisma.summaries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends summariesFindUniqueArgs>(args: SelectSubset<T, summariesFindUniqueArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Summaries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {summariesFindUniqueOrThrowArgs} args - Arguments to find a Summaries
     * @example
     * // Get one Summaries
     * const summaries = await prisma.summaries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends summariesFindUniqueOrThrowArgs>(args: SelectSubset<T, summariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summariesFindFirstArgs} args - Arguments to find a Summaries
     * @example
     * // Get one Summaries
     * const summaries = await prisma.summaries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends summariesFindFirstArgs>(args?: SelectSubset<T, summariesFindFirstArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summaries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summariesFindFirstOrThrowArgs} args - Arguments to find a Summaries
     * @example
     * // Get one Summaries
     * const summaries = await prisma.summaries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends summariesFindFirstOrThrowArgs>(args?: SelectSubset<T, summariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Summaries
     * const summaries = await prisma.summaries.findMany()
     * 
     * // Get first 10 Summaries
     * const summaries = await prisma.summaries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summariesWithIdOnly = await prisma.summaries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends summariesFindManyArgs>(args?: SelectSubset<T, summariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Summaries.
     * @param {summariesCreateArgs} args - Arguments to create a Summaries.
     * @example
     * // Create one Summaries
     * const Summaries = await prisma.summaries.create({
     *   data: {
     *     // ... data to create a Summaries
     *   }
     * })
     * 
     */
    create<T extends summariesCreateArgs>(args: SelectSubset<T, summariesCreateArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Summaries.
     * @param {summariesCreateManyArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summaries = await prisma.summaries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends summariesCreateManyArgs>(args?: SelectSubset<T, summariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Summaries.
     * @param {summariesDeleteArgs} args - Arguments to delete one Summaries.
     * @example
     * // Delete one Summaries
     * const Summaries = await prisma.summaries.delete({
     *   where: {
     *     // ... filter to delete one Summaries
     *   }
     * })
     * 
     */
    delete<T extends summariesDeleteArgs>(args: SelectSubset<T, summariesDeleteArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Summaries.
     * @param {summariesUpdateArgs} args - Arguments to update one Summaries.
     * @example
     * // Update one Summaries
     * const summaries = await prisma.summaries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends summariesUpdateArgs>(args: SelectSubset<T, summariesUpdateArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Summaries.
     * @param {summariesDeleteManyArgs} args - Arguments to filter Summaries to delete.
     * @example
     * // Delete a few Summaries
     * const { count } = await prisma.summaries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends summariesDeleteManyArgs>(args?: SelectSubset<T, summariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Summaries
     * const summaries = await prisma.summaries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends summariesUpdateManyArgs>(args: SelectSubset<T, summariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Summaries.
     * @param {summariesUpsertArgs} args - Arguments to update or create a Summaries.
     * @example
     * // Update or create a Summaries
     * const summaries = await prisma.summaries.upsert({
     *   create: {
     *     // ... data to create a Summaries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Summaries we want to update
     *   }
     * })
     */
    upsert<T extends summariesUpsertArgs>(args: SelectSubset<T, summariesUpsertArgs<ExtArgs>>): Prisma__summariesClient<$Result.GetResult<Prisma.$summariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summariesCountArgs} args - Arguments to filter Summaries to count.
     * @example
     * // Count the number of Summaries
     * const count = await prisma.summaries.count({
     *   where: {
     *     // ... the filter for the Summaries we want to count
     *   }
     * })
    **/
    count<T extends summariesCountArgs>(
      args?: Subset<T, summariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummariesAggregateArgs>(args: Subset<T, SummariesAggregateArgs>): Prisma.PrismaPromise<GetSummariesAggregateType<T>>

    /**
     * Group by Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summariesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends summariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: summariesGroupByArgs['orderBy'] }
        : { orderBy?: summariesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, summariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the summaries model
   */
  readonly fields: summariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for summaries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__summariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends messagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, messagesDefaultArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the summaries model
   */
  interface summariesFieldRefs {
    readonly id: FieldRef<"summaries", 'Int'>
    readonly message_id: FieldRef<"summaries", 'Int'>
    readonly summary_text: FieldRef<"summaries", 'String'>
    readonly is_edited: FieldRef<"summaries", 'Boolean'>
    readonly model_used: FieldRef<"summaries", 'String'>
    readonly temperature: FieldRef<"summaries", 'Float'>
    readonly is_auto_generated: FieldRef<"summaries", 'Boolean'>
    readonly generated_at: FieldRef<"summaries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * summaries findUnique
   */
  export type summariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * Filter, which summaries to fetch.
     */
    where: summariesWhereUniqueInput
  }

  /**
   * summaries findUniqueOrThrow
   */
  export type summariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * Filter, which summaries to fetch.
     */
    where: summariesWhereUniqueInput
  }

  /**
   * summaries findFirst
   */
  export type summariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * Filter, which summaries to fetch.
     */
    where?: summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summaries to fetch.
     */
    orderBy?: summariesOrderByWithRelationInput | summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for summaries.
     */
    cursor?: summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of summaries.
     */
    distinct?: SummariesScalarFieldEnum | SummariesScalarFieldEnum[]
  }

  /**
   * summaries findFirstOrThrow
   */
  export type summariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * Filter, which summaries to fetch.
     */
    where?: summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summaries to fetch.
     */
    orderBy?: summariesOrderByWithRelationInput | summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for summaries.
     */
    cursor?: summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of summaries.
     */
    distinct?: SummariesScalarFieldEnum | SummariesScalarFieldEnum[]
  }

  /**
   * summaries findMany
   */
  export type summariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * Filter, which summaries to fetch.
     */
    where?: summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summaries to fetch.
     */
    orderBy?: summariesOrderByWithRelationInput | summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing summaries.
     */
    cursor?: summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summaries.
     */
    skip?: number
    distinct?: SummariesScalarFieldEnum | SummariesScalarFieldEnum[]
  }

  /**
   * summaries create
   */
  export type summariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * The data needed to create a summaries.
     */
    data: XOR<summariesCreateInput, summariesUncheckedCreateInput>
  }

  /**
   * summaries createMany
   */
  export type summariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many summaries.
     */
    data: summariesCreateManyInput | summariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * summaries update
   */
  export type summariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * The data needed to update a summaries.
     */
    data: XOR<summariesUpdateInput, summariesUncheckedUpdateInput>
    /**
     * Choose, which summaries to update.
     */
    where: summariesWhereUniqueInput
  }

  /**
   * summaries updateMany
   */
  export type summariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update summaries.
     */
    data: XOR<summariesUpdateManyMutationInput, summariesUncheckedUpdateManyInput>
    /**
     * Filter which summaries to update
     */
    where?: summariesWhereInput
    /**
     * Limit how many summaries to update.
     */
    limit?: number
  }

  /**
   * summaries upsert
   */
  export type summariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * The filter to search for the summaries to update in case it exists.
     */
    where: summariesWhereUniqueInput
    /**
     * In case the summaries found by the `where` argument doesn't exist, create a new summaries with this data.
     */
    create: XOR<summariesCreateInput, summariesUncheckedCreateInput>
    /**
     * In case the summaries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<summariesUpdateInput, summariesUncheckedUpdateInput>
  }

  /**
   * summaries delete
   */
  export type summariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
    /**
     * Filter which summaries to delete.
     */
    where: summariesWhereUniqueInput
  }

  /**
   * summaries deleteMany
   */
  export type summariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which summaries to delete
     */
    where?: summariesWhereInput
    /**
     * Limit how many summaries to delete.
     */
    limit?: number
  }

  /**
   * summaries without action
   */
  export type summariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summaries
     */
    select?: summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summaries
     */
    omit?: summariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summariesInclude<ExtArgs> | null
  }


  /**
   * Model summary_cache
   */

  export type AggregateSummary_cache = {
    _count: Summary_cacheCountAggregateOutputType | null
    _avg: Summary_cacheAvgAggregateOutputType | null
    _sum: Summary_cacheSumAggregateOutputType | null
    _min: Summary_cacheMinAggregateOutputType | null
    _max: Summary_cacheMaxAggregateOutputType | null
  }

  export type Summary_cacheAvgAggregateOutputType = {
    id: number | null
    message_id: number | null
    temperature: number | null
  }

  export type Summary_cacheSumAggregateOutputType = {
    id: number | null
    message_id: number | null
    temperature: number | null
  }

  export type Summary_cacheMinAggregateOutputType = {
    id: number | null
    message_id: number | null
    summary_text: string | null
    model_used: string | null
    temperature: number | null
    created_at: Date | null
  }

  export type Summary_cacheMaxAggregateOutputType = {
    id: number | null
    message_id: number | null
    summary_text: string | null
    model_used: string | null
    temperature: number | null
    created_at: Date | null
  }

  export type Summary_cacheCountAggregateOutputType = {
    id: number
    message_id: number
    summary_text: number
    model_used: number
    temperature: number
    created_at: number
    _all: number
  }


  export type Summary_cacheAvgAggregateInputType = {
    id?: true
    message_id?: true
    temperature?: true
  }

  export type Summary_cacheSumAggregateInputType = {
    id?: true
    message_id?: true
    temperature?: true
  }

  export type Summary_cacheMinAggregateInputType = {
    id?: true
    message_id?: true
    summary_text?: true
    model_used?: true
    temperature?: true
    created_at?: true
  }

  export type Summary_cacheMaxAggregateInputType = {
    id?: true
    message_id?: true
    summary_text?: true
    model_used?: true
    temperature?: true
    created_at?: true
  }

  export type Summary_cacheCountAggregateInputType = {
    id?: true
    message_id?: true
    summary_text?: true
    model_used?: true
    temperature?: true
    created_at?: true
    _all?: true
  }

  export type Summary_cacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which summary_cache to aggregate.
     */
    where?: summary_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summary_caches to fetch.
     */
    orderBy?: summary_cacheOrderByWithRelationInput | summary_cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: summary_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summary_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summary_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned summary_caches
    **/
    _count?: true | Summary_cacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Summary_cacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Summary_cacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Summary_cacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Summary_cacheMaxAggregateInputType
  }

  export type GetSummary_cacheAggregateType<T extends Summary_cacheAggregateArgs> = {
        [P in keyof T & keyof AggregateSummary_cache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummary_cache[P]>
      : GetScalarType<T[P], AggregateSummary_cache[P]>
  }




  export type summary_cacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: summary_cacheWhereInput
    orderBy?: summary_cacheOrderByWithAggregationInput | summary_cacheOrderByWithAggregationInput[]
    by: Summary_cacheScalarFieldEnum[] | Summary_cacheScalarFieldEnum
    having?: summary_cacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Summary_cacheCountAggregateInputType | true
    _avg?: Summary_cacheAvgAggregateInputType
    _sum?: Summary_cacheSumAggregateInputType
    _min?: Summary_cacheMinAggregateInputType
    _max?: Summary_cacheMaxAggregateInputType
  }

  export type Summary_cacheGroupByOutputType = {
    id: number
    message_id: number
    summary_text: string
    model_used: string | null
    temperature: number | null
    created_at: Date | null
    _count: Summary_cacheCountAggregateOutputType | null
    _avg: Summary_cacheAvgAggregateOutputType | null
    _sum: Summary_cacheSumAggregateOutputType | null
    _min: Summary_cacheMinAggregateOutputType | null
    _max: Summary_cacheMaxAggregateOutputType | null
  }

  type GetSummary_cacheGroupByPayload<T extends summary_cacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Summary_cacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Summary_cacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Summary_cacheGroupByOutputType[P]>
            : GetScalarType<T[P], Summary_cacheGroupByOutputType[P]>
        }
      >
    >


  export type summary_cacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    summary_text?: boolean
    model_used?: boolean
    temperature?: boolean
    created_at?: boolean
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summary_cache"]>



  export type summary_cacheSelectScalar = {
    id?: boolean
    message_id?: boolean
    summary_text?: boolean
    model_used?: boolean
    temperature?: boolean
    created_at?: boolean
  }

  export type summary_cacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_id" | "summary_text" | "model_used" | "temperature" | "created_at", ExtArgs["result"]["summary_cache"]>
  export type summary_cacheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }

  export type $summary_cachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "summary_cache"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_id: number
      summary_text: string
      model_used: string | null
      temperature: number | null
      created_at: Date | null
    }, ExtArgs["result"]["summary_cache"]>
    composites: {}
  }

  type summary_cacheGetPayload<S extends boolean | null | undefined | summary_cacheDefaultArgs> = $Result.GetResult<Prisma.$summary_cachePayload, S>

  type summary_cacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<summary_cacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Summary_cacheCountAggregateInputType | true
    }

  export interface summary_cacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['summary_cache'], meta: { name: 'summary_cache' } }
    /**
     * Find zero or one Summary_cache that matches the filter.
     * @param {summary_cacheFindUniqueArgs} args - Arguments to find a Summary_cache
     * @example
     * // Get one Summary_cache
     * const summary_cache = await prisma.summary_cache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends summary_cacheFindUniqueArgs>(args: SelectSubset<T, summary_cacheFindUniqueArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Summary_cache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {summary_cacheFindUniqueOrThrowArgs} args - Arguments to find a Summary_cache
     * @example
     * // Get one Summary_cache
     * const summary_cache = await prisma.summary_cache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends summary_cacheFindUniqueOrThrowArgs>(args: SelectSubset<T, summary_cacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summary_cache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summary_cacheFindFirstArgs} args - Arguments to find a Summary_cache
     * @example
     * // Get one Summary_cache
     * const summary_cache = await prisma.summary_cache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends summary_cacheFindFirstArgs>(args?: SelectSubset<T, summary_cacheFindFirstArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summary_cache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summary_cacheFindFirstOrThrowArgs} args - Arguments to find a Summary_cache
     * @example
     * // Get one Summary_cache
     * const summary_cache = await prisma.summary_cache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends summary_cacheFindFirstOrThrowArgs>(args?: SelectSubset<T, summary_cacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Summary_caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summary_cacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Summary_caches
     * const summary_caches = await prisma.summary_cache.findMany()
     * 
     * // Get first 10 Summary_caches
     * const summary_caches = await prisma.summary_cache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summary_cacheWithIdOnly = await prisma.summary_cache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends summary_cacheFindManyArgs>(args?: SelectSubset<T, summary_cacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Summary_cache.
     * @param {summary_cacheCreateArgs} args - Arguments to create a Summary_cache.
     * @example
     * // Create one Summary_cache
     * const Summary_cache = await prisma.summary_cache.create({
     *   data: {
     *     // ... data to create a Summary_cache
     *   }
     * })
     * 
     */
    create<T extends summary_cacheCreateArgs>(args: SelectSubset<T, summary_cacheCreateArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Summary_caches.
     * @param {summary_cacheCreateManyArgs} args - Arguments to create many Summary_caches.
     * @example
     * // Create many Summary_caches
     * const summary_cache = await prisma.summary_cache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends summary_cacheCreateManyArgs>(args?: SelectSubset<T, summary_cacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Summary_cache.
     * @param {summary_cacheDeleteArgs} args - Arguments to delete one Summary_cache.
     * @example
     * // Delete one Summary_cache
     * const Summary_cache = await prisma.summary_cache.delete({
     *   where: {
     *     // ... filter to delete one Summary_cache
     *   }
     * })
     * 
     */
    delete<T extends summary_cacheDeleteArgs>(args: SelectSubset<T, summary_cacheDeleteArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Summary_cache.
     * @param {summary_cacheUpdateArgs} args - Arguments to update one Summary_cache.
     * @example
     * // Update one Summary_cache
     * const summary_cache = await prisma.summary_cache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends summary_cacheUpdateArgs>(args: SelectSubset<T, summary_cacheUpdateArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Summary_caches.
     * @param {summary_cacheDeleteManyArgs} args - Arguments to filter Summary_caches to delete.
     * @example
     * // Delete a few Summary_caches
     * const { count } = await prisma.summary_cache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends summary_cacheDeleteManyArgs>(args?: SelectSubset<T, summary_cacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summary_caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summary_cacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Summary_caches
     * const summary_cache = await prisma.summary_cache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends summary_cacheUpdateManyArgs>(args: SelectSubset<T, summary_cacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Summary_cache.
     * @param {summary_cacheUpsertArgs} args - Arguments to update or create a Summary_cache.
     * @example
     * // Update or create a Summary_cache
     * const summary_cache = await prisma.summary_cache.upsert({
     *   create: {
     *     // ... data to create a Summary_cache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Summary_cache we want to update
     *   }
     * })
     */
    upsert<T extends summary_cacheUpsertArgs>(args: SelectSubset<T, summary_cacheUpsertArgs<ExtArgs>>): Prisma__summary_cacheClient<$Result.GetResult<Prisma.$summary_cachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Summary_caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summary_cacheCountArgs} args - Arguments to filter Summary_caches to count.
     * @example
     * // Count the number of Summary_caches
     * const count = await prisma.summary_cache.count({
     *   where: {
     *     // ... the filter for the Summary_caches we want to count
     *   }
     * })
    **/
    count<T extends summary_cacheCountArgs>(
      args?: Subset<T, summary_cacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Summary_cacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Summary_cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Summary_cacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Summary_cacheAggregateArgs>(args: Subset<T, Summary_cacheAggregateArgs>): Prisma.PrismaPromise<GetSummary_cacheAggregateType<T>>

    /**
     * Group by Summary_cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {summary_cacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends summary_cacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: summary_cacheGroupByArgs['orderBy'] }
        : { orderBy?: summary_cacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, summary_cacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummary_cacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the summary_cache model
   */
  readonly fields: summary_cacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for summary_cache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__summary_cacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends messagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, messagesDefaultArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the summary_cache model
   */
  interface summary_cacheFieldRefs {
    readonly id: FieldRef<"summary_cache", 'Int'>
    readonly message_id: FieldRef<"summary_cache", 'Int'>
    readonly summary_text: FieldRef<"summary_cache", 'String'>
    readonly model_used: FieldRef<"summary_cache", 'String'>
    readonly temperature: FieldRef<"summary_cache", 'Float'>
    readonly created_at: FieldRef<"summary_cache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * summary_cache findUnique
   */
  export type summary_cacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * Filter, which summary_cache to fetch.
     */
    where: summary_cacheWhereUniqueInput
  }

  /**
   * summary_cache findUniqueOrThrow
   */
  export type summary_cacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * Filter, which summary_cache to fetch.
     */
    where: summary_cacheWhereUniqueInput
  }

  /**
   * summary_cache findFirst
   */
  export type summary_cacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * Filter, which summary_cache to fetch.
     */
    where?: summary_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summary_caches to fetch.
     */
    orderBy?: summary_cacheOrderByWithRelationInput | summary_cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for summary_caches.
     */
    cursor?: summary_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summary_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summary_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of summary_caches.
     */
    distinct?: Summary_cacheScalarFieldEnum | Summary_cacheScalarFieldEnum[]
  }

  /**
   * summary_cache findFirstOrThrow
   */
  export type summary_cacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * Filter, which summary_cache to fetch.
     */
    where?: summary_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summary_caches to fetch.
     */
    orderBy?: summary_cacheOrderByWithRelationInput | summary_cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for summary_caches.
     */
    cursor?: summary_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summary_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summary_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of summary_caches.
     */
    distinct?: Summary_cacheScalarFieldEnum | Summary_cacheScalarFieldEnum[]
  }

  /**
   * summary_cache findMany
   */
  export type summary_cacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * Filter, which summary_caches to fetch.
     */
    where?: summary_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of summary_caches to fetch.
     */
    orderBy?: summary_cacheOrderByWithRelationInput | summary_cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing summary_caches.
     */
    cursor?: summary_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` summary_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` summary_caches.
     */
    skip?: number
    distinct?: Summary_cacheScalarFieldEnum | Summary_cacheScalarFieldEnum[]
  }

  /**
   * summary_cache create
   */
  export type summary_cacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * The data needed to create a summary_cache.
     */
    data: XOR<summary_cacheCreateInput, summary_cacheUncheckedCreateInput>
  }

  /**
   * summary_cache createMany
   */
  export type summary_cacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many summary_caches.
     */
    data: summary_cacheCreateManyInput | summary_cacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * summary_cache update
   */
  export type summary_cacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * The data needed to update a summary_cache.
     */
    data: XOR<summary_cacheUpdateInput, summary_cacheUncheckedUpdateInput>
    /**
     * Choose, which summary_cache to update.
     */
    where: summary_cacheWhereUniqueInput
  }

  /**
   * summary_cache updateMany
   */
  export type summary_cacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update summary_caches.
     */
    data: XOR<summary_cacheUpdateManyMutationInput, summary_cacheUncheckedUpdateManyInput>
    /**
     * Filter which summary_caches to update
     */
    where?: summary_cacheWhereInput
    /**
     * Limit how many summary_caches to update.
     */
    limit?: number
  }

  /**
   * summary_cache upsert
   */
  export type summary_cacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * The filter to search for the summary_cache to update in case it exists.
     */
    where: summary_cacheWhereUniqueInput
    /**
     * In case the summary_cache found by the `where` argument doesn't exist, create a new summary_cache with this data.
     */
    create: XOR<summary_cacheCreateInput, summary_cacheUncheckedCreateInput>
    /**
     * In case the summary_cache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<summary_cacheUpdateInput, summary_cacheUncheckedUpdateInput>
  }

  /**
   * summary_cache delete
   */
  export type summary_cacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
    /**
     * Filter which summary_cache to delete.
     */
    where: summary_cacheWhereUniqueInput
  }

  /**
   * summary_cache deleteMany
   */
  export type summary_cacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which summary_caches to delete
     */
    where?: summary_cacheWhereInput
    /**
     * Limit how many summary_caches to delete.
     */
    limit?: number
  }

  /**
   * summary_cache without action
   */
  export type summary_cacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the summary_cache
     */
    select?: summary_cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the summary_cache
     */
    omit?: summary_cacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: summary_cacheInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    is_verified: boolean | null
    verification_token: string | null
    email_verified_at: Date | null
    reset_token_expires: Date | null
    is_active: boolean | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    is_verified: boolean | null
    verification_token: string | null
    email_verified_at: Date | null
    reset_token_expires: Date | null
    is_active: boolean | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    is_verified: number
    verification_token: number
    email_verified_at: number
    reset_token_expires: number
    is_active: number
    created_at: number
    update_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_verified?: true
    verification_token?: true
    email_verified_at?: true
    reset_token_expires?: true
    is_active?: true
    created_at?: true
    update_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_verified?: true
    verification_token?: true
    email_verified_at?: true
    reset_token_expires?: true
    is_active?: true
    created_at?: true
    update_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_verified?: true
    verification_token?: true
    email_verified_at?: true
    reset_token_expires?: true
    is_active?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    is_verified: boolean | null
    verification_token: string | null
    email_verified_at: Date | null
    reset_token_expires: Date | null
    is_active: boolean | null
    created_at: Date | null
    update_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_verified?: boolean
    verification_token?: boolean
    email_verified_at?: boolean
    reset_token_expires?: boolean
    is_active?: boolean
    created_at?: boolean
    update_at?: boolean
    external_accounts?: boolean | users$external_accountsArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_verified?: boolean
    verification_token?: boolean
    email_verified_at?: boolean
    reset_token_expires?: boolean
    is_active?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "is_verified" | "verification_token" | "email_verified_at" | "reset_token_expires" | "is_active" | "created_at" | "update_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    external_accounts?: boolean | users$external_accountsArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      external_accounts: Prisma.$ExternalAccountPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      is_verified: boolean | null
      verification_token: string | null
      email_verified_at: Date | null
      reset_token_expires: Date | null
      is_active: boolean | null
      created_at: Date | null
      update_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    external_accounts<T extends users$external_accountsArgs<ExtArgs> = {}>(args?: Subset<T, users$external_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly is_verified: FieldRef<"users", 'Boolean'>
    readonly verification_token: FieldRef<"users", 'String'>
    readonly email_verified_at: FieldRef<"users", 'DateTime'>
    readonly reset_token_expires: FieldRef<"users", 'DateTime'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly update_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.external_accounts
   */
  export type users$external_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    where?: ExternalAccountWhereInput
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    cursor?: ExternalAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ExternalAccountScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    source_id: 'source_id',
    external_user_id: 'external_user_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    expires_at: 'expires_at',
    connected_at: 'connected_at'
  };

  export type ExternalAccountScalarFieldEnum = (typeof ExternalAccountScalarFieldEnum)[keyof typeof ExternalAccountScalarFieldEnum]


  export const AttachmentsScalarFieldEnum: {
    id: 'id',
    message_id: 'message_id',
    file_name: 'file_name',
    file_url: 'file_url',
    file_type: 'file_type',
    created_at: 'created_at'
  };

  export type AttachmentsScalarFieldEnum = (typeof AttachmentsScalarFieldEnum)[keyof typeof AttachmentsScalarFieldEnum]


  export const Message_versionsScalarFieldEnum: {
    id: 'id',
    message_id: 'message_id',
    version: 'version',
    content: 'content',
    update_at: 'update_at'
  };

  export type Message_versionsScalarFieldEnum = (typeof Message_versionsScalarFieldEnum)[keyof typeof Message_versionsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    source_id: 'source_id',
    external_account_id: 'external_account_id',
    external_message_id: 'external_message_id',
    original_content: 'original_content',
    received_at: 'received_at',
    is_read: 'is_read',
    priority_level: 'priority_level',
    created_at: 'created_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SourcesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    icon_url: 'icon_url',
    base_url: 'base_url',
    created_at: 'created_at'
  };

  export type SourcesScalarFieldEnum = (typeof SourcesScalarFieldEnum)[keyof typeof SourcesScalarFieldEnum]


  export const SummariesScalarFieldEnum: {
    id: 'id',
    message_id: 'message_id',
    summary_text: 'summary_text',
    is_edited: 'is_edited',
    model_used: 'model_used',
    temperature: 'temperature',
    is_auto_generated: 'is_auto_generated',
    generated_at: 'generated_at'
  };

  export type SummariesScalarFieldEnum = (typeof SummariesScalarFieldEnum)[keyof typeof SummariesScalarFieldEnum]


  export const Summary_cacheScalarFieldEnum: {
    id: 'id',
    message_id: 'message_id',
    summary_text: 'summary_text',
    model_used: 'model_used',
    temperature: 'temperature',
    created_at: 'created_at'
  };

  export type Summary_cacheScalarFieldEnum = (typeof Summary_cacheScalarFieldEnum)[keyof typeof Summary_cacheScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    is_verified: 'is_verified',
    verification_token: 'verification_token',
    email_verified_at: 'email_verified_at',
    reset_token_expires: 'reset_token_expires',
    is_active: 'is_active',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ExternalAccountOrderByRelevanceFieldEnum: {
    external_user_id: 'external_user_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token'
  };

  export type ExternalAccountOrderByRelevanceFieldEnum = (typeof ExternalAccountOrderByRelevanceFieldEnum)[keyof typeof ExternalAccountOrderByRelevanceFieldEnum]


  export const attachmentsOrderByRelevanceFieldEnum: {
    file_name: 'file_name',
    file_url: 'file_url',
    file_type: 'file_type'
  };

  export type attachmentsOrderByRelevanceFieldEnum = (typeof attachmentsOrderByRelevanceFieldEnum)[keyof typeof attachmentsOrderByRelevanceFieldEnum]


  export const message_versionsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type message_versionsOrderByRelevanceFieldEnum = (typeof message_versionsOrderByRelevanceFieldEnum)[keyof typeof message_versionsOrderByRelevanceFieldEnum]


  export const messagesOrderByRelevanceFieldEnum: {
    external_message_id: 'external_message_id',
    original_content: 'original_content'
  };

  export type messagesOrderByRelevanceFieldEnum = (typeof messagesOrderByRelevanceFieldEnum)[keyof typeof messagesOrderByRelevanceFieldEnum]


  export const sourcesOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type',
    icon_url: 'icon_url',
    base_url: 'base_url'
  };

  export type sourcesOrderByRelevanceFieldEnum = (typeof sourcesOrderByRelevanceFieldEnum)[keyof typeof sourcesOrderByRelevanceFieldEnum]


  export const summariesOrderByRelevanceFieldEnum: {
    summary_text: 'summary_text',
    model_used: 'model_used'
  };

  export type summariesOrderByRelevanceFieldEnum = (typeof summariesOrderByRelevanceFieldEnum)[keyof typeof summariesOrderByRelevanceFieldEnum]


  export const summary_cacheOrderByRelevanceFieldEnum: {
    summary_text: 'summary_text',
    model_used: 'model_used'
  };

  export type summary_cacheOrderByRelevanceFieldEnum = (typeof summary_cacheOrderByRelevanceFieldEnum)[keyof typeof summary_cacheOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    verification_token: 'verification_token'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'messages_priority_level'
   */
  export type Enummessages_priority_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'messages_priority_level'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ExternalAccountWhereInput = {
    AND?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    OR?: ExternalAccountWhereInput[]
    NOT?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    id?: IntFilter<"ExternalAccount"> | number
    user_id?: IntFilter<"ExternalAccount"> | number
    source_id?: IntFilter<"ExternalAccount"> | number
    external_user_id?: StringNullableFilter<"ExternalAccount"> | string | null
    access_token?: StringNullableFilter<"ExternalAccount"> | string | null
    refresh_token?: StringNullableFilter<"ExternalAccount"> | string | null
    expires_at?: DateTimeNullableFilter<"ExternalAccount"> | Date | string | null
    connected_at?: DateTimeNullableFilter<"ExternalAccount"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    source?: XOR<SourcesScalarRelationFilter, sourcesWhereInput>
    messages?: MessagesListRelationFilter
  }

  export type ExternalAccountOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_user_id?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    connected_at?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    source?: sourcesOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
    _relevance?: ExternalAccountOrderByRelevanceInput
  }

  export type ExternalAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    OR?: ExternalAccountWhereInput[]
    NOT?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    user_id?: IntFilter<"ExternalAccount"> | number
    source_id?: IntFilter<"ExternalAccount"> | number
    external_user_id?: StringNullableFilter<"ExternalAccount"> | string | null
    access_token?: StringNullableFilter<"ExternalAccount"> | string | null
    refresh_token?: StringNullableFilter<"ExternalAccount"> | string | null
    expires_at?: DateTimeNullableFilter<"ExternalAccount"> | Date | string | null
    connected_at?: DateTimeNullableFilter<"ExternalAccount"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    source?: XOR<SourcesScalarRelationFilter, sourcesWhereInput>
    messages?: MessagesListRelationFilter
  }, "id">

  export type ExternalAccountOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_user_id?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    connected_at?: SortOrderInput | SortOrder
    _count?: ExternalAccountCountOrderByAggregateInput
    _avg?: ExternalAccountAvgOrderByAggregateInput
    _max?: ExternalAccountMaxOrderByAggregateInput
    _min?: ExternalAccountMinOrderByAggregateInput
    _sum?: ExternalAccountSumOrderByAggregateInput
  }

  export type ExternalAccountScalarWhereWithAggregatesInput = {
    AND?: ExternalAccountScalarWhereWithAggregatesInput | ExternalAccountScalarWhereWithAggregatesInput[]
    OR?: ExternalAccountScalarWhereWithAggregatesInput[]
    NOT?: ExternalAccountScalarWhereWithAggregatesInput | ExternalAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExternalAccount"> | number
    user_id?: IntWithAggregatesFilter<"ExternalAccount"> | number
    source_id?: IntWithAggregatesFilter<"ExternalAccount"> | number
    external_user_id?: StringNullableWithAggregatesFilter<"ExternalAccount"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"ExternalAccount"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"ExternalAccount"> | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"ExternalAccount"> | Date | string | null
    connected_at?: DateTimeNullableWithAggregatesFilter<"ExternalAccount"> | Date | string | null
  }

  export type attachmentsWhereInput = {
    AND?: attachmentsWhereInput | attachmentsWhereInput[]
    OR?: attachmentsWhereInput[]
    NOT?: attachmentsWhereInput | attachmentsWhereInput[]
    id?: IntFilter<"attachments"> | number
    message_id?: IntFilter<"attachments"> | number
    file_name?: StringNullableFilter<"attachments"> | string | null
    file_url?: StringNullableFilter<"attachments"> | string | null
    file_type?: StringNullableFilter<"attachments"> | string | null
    created_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }

  export type attachmentsOrderByWithRelationInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_name?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    messages?: messagesOrderByWithRelationInput
    _relevance?: attachmentsOrderByRelevanceInput
  }

  export type attachmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: attachmentsWhereInput | attachmentsWhereInput[]
    OR?: attachmentsWhereInput[]
    NOT?: attachmentsWhereInput | attachmentsWhereInput[]
    message_id?: IntFilter<"attachments"> | number
    file_name?: StringNullableFilter<"attachments"> | string | null
    file_url?: StringNullableFilter<"attachments"> | string | null
    file_type?: StringNullableFilter<"attachments"> | string | null
    created_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }, "id">

  export type attachmentsOrderByWithAggregationInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_name?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: attachmentsCountOrderByAggregateInput
    _avg?: attachmentsAvgOrderByAggregateInput
    _max?: attachmentsMaxOrderByAggregateInput
    _min?: attachmentsMinOrderByAggregateInput
    _sum?: attachmentsSumOrderByAggregateInput
  }

  export type attachmentsScalarWhereWithAggregatesInput = {
    AND?: attachmentsScalarWhereWithAggregatesInput | attachmentsScalarWhereWithAggregatesInput[]
    OR?: attachmentsScalarWhereWithAggregatesInput[]
    NOT?: attachmentsScalarWhereWithAggregatesInput | attachmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attachments"> | number
    message_id?: IntWithAggregatesFilter<"attachments"> | number
    file_name?: StringNullableWithAggregatesFilter<"attachments"> | string | null
    file_url?: StringNullableWithAggregatesFilter<"attachments"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"attachments"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"attachments"> | Date | string | null
  }

  export type message_versionsWhereInput = {
    AND?: message_versionsWhereInput | message_versionsWhereInput[]
    OR?: message_versionsWhereInput[]
    NOT?: message_versionsWhereInput | message_versionsWhereInput[]
    id?: IntFilter<"message_versions"> | number
    message_id?: IntFilter<"message_versions"> | number
    version?: IntFilter<"message_versions"> | number
    content?: StringFilter<"message_versions"> | string
    update_at?: DateTimeNullableFilter<"message_versions"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }

  export type message_versionsOrderByWithRelationInput = {
    id?: SortOrder
    message_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    update_at?: SortOrderInput | SortOrder
    messages?: messagesOrderByWithRelationInput
    _relevance?: message_versionsOrderByRelevanceInput
  }

  export type message_versionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: message_versionsWhereInput | message_versionsWhereInput[]
    OR?: message_versionsWhereInput[]
    NOT?: message_versionsWhereInput | message_versionsWhereInput[]
    message_id?: IntFilter<"message_versions"> | number
    version?: IntFilter<"message_versions"> | number
    content?: StringFilter<"message_versions"> | string
    update_at?: DateTimeNullableFilter<"message_versions"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }, "id">

  export type message_versionsOrderByWithAggregationInput = {
    id?: SortOrder
    message_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    update_at?: SortOrderInput | SortOrder
    _count?: message_versionsCountOrderByAggregateInput
    _avg?: message_versionsAvgOrderByAggregateInput
    _max?: message_versionsMaxOrderByAggregateInput
    _min?: message_versionsMinOrderByAggregateInput
    _sum?: message_versionsSumOrderByAggregateInput
  }

  export type message_versionsScalarWhereWithAggregatesInput = {
    AND?: message_versionsScalarWhereWithAggregatesInput | message_versionsScalarWhereWithAggregatesInput[]
    OR?: message_versionsScalarWhereWithAggregatesInput[]
    NOT?: message_versionsScalarWhereWithAggregatesInput | message_versionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"message_versions"> | number
    message_id?: IntWithAggregatesFilter<"message_versions"> | number
    version?: IntWithAggregatesFilter<"message_versions"> | number
    content?: StringWithAggregatesFilter<"message_versions"> | string
    update_at?: DateTimeNullableWithAggregatesFilter<"message_versions"> | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    user_id?: IntFilter<"messages"> | number
    source_id?: IntFilter<"messages"> | number
    external_account_id?: IntFilter<"messages"> | number
    external_message_id?: StringNullableFilter<"messages"> | string | null
    original_content?: StringFilter<"messages"> | string
    received_at?: DateTimeFilter<"messages"> | Date | string
    is_read?: BoolNullableFilter<"messages"> | boolean | null
    priority_level?: Enummessages_priority_levelNullableFilter<"messages"> | $Enums.messages_priority_level | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    attachments?: AttachmentsListRelationFilter
    message_versions?: Message_versionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    sources?: XOR<SourcesScalarRelationFilter, sourcesWhereInput>
    external_accounts?: XOR<ExternalAccountScalarRelationFilter, ExternalAccountWhereInput>
    summaries?: SummariesListRelationFilter
    summary_cache?: Summary_cacheListRelationFilter
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_account_id?: SortOrder
    external_message_id?: SortOrderInput | SortOrder
    original_content?: SortOrder
    received_at?: SortOrder
    is_read?: SortOrderInput | SortOrder
    priority_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    attachments?: attachmentsOrderByRelationAggregateInput
    message_versions?: message_versionsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    sources?: sourcesOrderByWithRelationInput
    external_accounts?: ExternalAccountOrderByWithRelationInput
    summaries?: summariesOrderByRelationAggregateInput
    summary_cache?: summary_cacheOrderByRelationAggregateInput
    _relevance?: messagesOrderByRelevanceInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    user_id?: IntFilter<"messages"> | number
    source_id?: IntFilter<"messages"> | number
    external_account_id?: IntFilter<"messages"> | number
    external_message_id?: StringNullableFilter<"messages"> | string | null
    original_content?: StringFilter<"messages"> | string
    received_at?: DateTimeFilter<"messages"> | Date | string
    is_read?: BoolNullableFilter<"messages"> | boolean | null
    priority_level?: Enummessages_priority_levelNullableFilter<"messages"> | $Enums.messages_priority_level | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    attachments?: AttachmentsListRelationFilter
    message_versions?: Message_versionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    sources?: XOR<SourcesScalarRelationFilter, sourcesWhereInput>
    external_accounts?: XOR<ExternalAccountScalarRelationFilter, ExternalAccountWhereInput>
    summaries?: SummariesListRelationFilter
    summary_cache?: Summary_cacheListRelationFilter
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_account_id?: SortOrder
    external_message_id?: SortOrderInput | SortOrder
    original_content?: SortOrder
    received_at?: SortOrder
    is_read?: SortOrderInput | SortOrder
    priority_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    user_id?: IntWithAggregatesFilter<"messages"> | number
    source_id?: IntWithAggregatesFilter<"messages"> | number
    external_account_id?: IntWithAggregatesFilter<"messages"> | number
    external_message_id?: StringNullableWithAggregatesFilter<"messages"> | string | null
    original_content?: StringWithAggregatesFilter<"messages"> | string
    received_at?: DateTimeWithAggregatesFilter<"messages"> | Date | string
    is_read?: BoolNullableWithAggregatesFilter<"messages"> | boolean | null
    priority_level?: Enummessages_priority_levelNullableWithAggregatesFilter<"messages"> | $Enums.messages_priority_level | null
    created_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
  }

  export type sourcesWhereInput = {
    AND?: sourcesWhereInput | sourcesWhereInput[]
    OR?: sourcesWhereInput[]
    NOT?: sourcesWhereInput | sourcesWhereInput[]
    id?: IntFilter<"sources"> | number
    name?: StringFilter<"sources"> | string
    type?: StringNullableFilter<"sources"> | string | null
    icon_url?: StringNullableFilter<"sources"> | string | null
    base_url?: StringNullableFilter<"sources"> | string | null
    created_at?: DateTimeNullableFilter<"sources"> | Date | string | null
    external_accounts?: ExternalAccountListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type sourcesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    icon_url?: SortOrderInput | SortOrder
    base_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    external_accounts?: ExternalAccountOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    _relevance?: sourcesOrderByRelevanceInput
  }

  export type sourcesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: sourcesWhereInput | sourcesWhereInput[]
    OR?: sourcesWhereInput[]
    NOT?: sourcesWhereInput | sourcesWhereInput[]
    type?: StringNullableFilter<"sources"> | string | null
    icon_url?: StringNullableFilter<"sources"> | string | null
    base_url?: StringNullableFilter<"sources"> | string | null
    created_at?: DateTimeNullableFilter<"sources"> | Date | string | null
    external_accounts?: ExternalAccountListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id" | "name">

  export type sourcesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    icon_url?: SortOrderInput | SortOrder
    base_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: sourcesCountOrderByAggregateInput
    _avg?: sourcesAvgOrderByAggregateInput
    _max?: sourcesMaxOrderByAggregateInput
    _min?: sourcesMinOrderByAggregateInput
    _sum?: sourcesSumOrderByAggregateInput
  }

  export type sourcesScalarWhereWithAggregatesInput = {
    AND?: sourcesScalarWhereWithAggregatesInput | sourcesScalarWhereWithAggregatesInput[]
    OR?: sourcesScalarWhereWithAggregatesInput[]
    NOT?: sourcesScalarWhereWithAggregatesInput | sourcesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sources"> | number
    name?: StringWithAggregatesFilter<"sources"> | string
    type?: StringNullableWithAggregatesFilter<"sources"> | string | null
    icon_url?: StringNullableWithAggregatesFilter<"sources"> | string | null
    base_url?: StringNullableWithAggregatesFilter<"sources"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"sources"> | Date | string | null
  }

  export type summariesWhereInput = {
    AND?: summariesWhereInput | summariesWhereInput[]
    OR?: summariesWhereInput[]
    NOT?: summariesWhereInput | summariesWhereInput[]
    id?: IntFilter<"summaries"> | number
    message_id?: IntFilter<"summaries"> | number
    summary_text?: StringFilter<"summaries"> | string
    is_edited?: BoolNullableFilter<"summaries"> | boolean | null
    model_used?: StringNullableFilter<"summaries"> | string | null
    temperature?: FloatNullableFilter<"summaries"> | number | null
    is_auto_generated?: BoolNullableFilter<"summaries"> | boolean | null
    generated_at?: DateTimeNullableFilter<"summaries"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }

  export type summariesOrderByWithRelationInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    is_edited?: SortOrderInput | SortOrder
    model_used?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    is_auto_generated?: SortOrderInput | SortOrder
    generated_at?: SortOrderInput | SortOrder
    messages?: messagesOrderByWithRelationInput
    _relevance?: summariesOrderByRelevanceInput
  }

  export type summariesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: summariesWhereInput | summariesWhereInput[]
    OR?: summariesWhereInput[]
    NOT?: summariesWhereInput | summariesWhereInput[]
    message_id?: IntFilter<"summaries"> | number
    summary_text?: StringFilter<"summaries"> | string
    is_edited?: BoolNullableFilter<"summaries"> | boolean | null
    model_used?: StringNullableFilter<"summaries"> | string | null
    temperature?: FloatNullableFilter<"summaries"> | number | null
    is_auto_generated?: BoolNullableFilter<"summaries"> | boolean | null
    generated_at?: DateTimeNullableFilter<"summaries"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }, "id">

  export type summariesOrderByWithAggregationInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    is_edited?: SortOrderInput | SortOrder
    model_used?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    is_auto_generated?: SortOrderInput | SortOrder
    generated_at?: SortOrderInput | SortOrder
    _count?: summariesCountOrderByAggregateInput
    _avg?: summariesAvgOrderByAggregateInput
    _max?: summariesMaxOrderByAggregateInput
    _min?: summariesMinOrderByAggregateInput
    _sum?: summariesSumOrderByAggregateInput
  }

  export type summariesScalarWhereWithAggregatesInput = {
    AND?: summariesScalarWhereWithAggregatesInput | summariesScalarWhereWithAggregatesInput[]
    OR?: summariesScalarWhereWithAggregatesInput[]
    NOT?: summariesScalarWhereWithAggregatesInput | summariesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"summaries"> | number
    message_id?: IntWithAggregatesFilter<"summaries"> | number
    summary_text?: StringWithAggregatesFilter<"summaries"> | string
    is_edited?: BoolNullableWithAggregatesFilter<"summaries"> | boolean | null
    model_used?: StringNullableWithAggregatesFilter<"summaries"> | string | null
    temperature?: FloatNullableWithAggregatesFilter<"summaries"> | number | null
    is_auto_generated?: BoolNullableWithAggregatesFilter<"summaries"> | boolean | null
    generated_at?: DateTimeNullableWithAggregatesFilter<"summaries"> | Date | string | null
  }

  export type summary_cacheWhereInput = {
    AND?: summary_cacheWhereInput | summary_cacheWhereInput[]
    OR?: summary_cacheWhereInput[]
    NOT?: summary_cacheWhereInput | summary_cacheWhereInput[]
    id?: IntFilter<"summary_cache"> | number
    message_id?: IntFilter<"summary_cache"> | number
    summary_text?: StringFilter<"summary_cache"> | string
    model_used?: StringNullableFilter<"summary_cache"> | string | null
    temperature?: FloatNullableFilter<"summary_cache"> | number | null
    created_at?: DateTimeNullableFilter<"summary_cache"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }

  export type summary_cacheOrderByWithRelationInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    model_used?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    messages?: messagesOrderByWithRelationInput
    _relevance?: summary_cacheOrderByRelevanceInput
  }

  export type summary_cacheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: summary_cacheWhereInput | summary_cacheWhereInput[]
    OR?: summary_cacheWhereInput[]
    NOT?: summary_cacheWhereInput | summary_cacheWhereInput[]
    message_id?: IntFilter<"summary_cache"> | number
    summary_text?: StringFilter<"summary_cache"> | string
    model_used?: StringNullableFilter<"summary_cache"> | string | null
    temperature?: FloatNullableFilter<"summary_cache"> | number | null
    created_at?: DateTimeNullableFilter<"summary_cache"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }, "id">

  export type summary_cacheOrderByWithAggregationInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    model_used?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: summary_cacheCountOrderByAggregateInput
    _avg?: summary_cacheAvgOrderByAggregateInput
    _max?: summary_cacheMaxOrderByAggregateInput
    _min?: summary_cacheMinOrderByAggregateInput
    _sum?: summary_cacheSumOrderByAggregateInput
  }

  export type summary_cacheScalarWhereWithAggregatesInput = {
    AND?: summary_cacheScalarWhereWithAggregatesInput | summary_cacheScalarWhereWithAggregatesInput[]
    OR?: summary_cacheScalarWhereWithAggregatesInput[]
    NOT?: summary_cacheScalarWhereWithAggregatesInput | summary_cacheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"summary_cache"> | number
    message_id?: IntWithAggregatesFilter<"summary_cache"> | number
    summary_text?: StringWithAggregatesFilter<"summary_cache"> | string
    model_used?: StringNullableWithAggregatesFilter<"summary_cache"> | string | null
    temperature?: FloatNullableWithAggregatesFilter<"summary_cache"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"summary_cache"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    is_verified?: BoolNullableFilter<"users"> | boolean | null
    verification_token?: StringNullableFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    reset_token_expires?: DateTimeNullableFilter<"users"> | Date | string | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    update_at?: DateTimeNullableFilter<"users"> | Date | string | null
    external_accounts?: ExternalAccountListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrderInput | SortOrder
    verification_token?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    external_accounts?: ExternalAccountOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    is_verified?: BoolNullableFilter<"users"> | boolean | null
    verification_token?: StringNullableFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    reset_token_expires?: DateTimeNullableFilter<"users"> | Date | string | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    update_at?: DateTimeNullableFilter<"users"> | Date | string | null
    external_accounts?: ExternalAccountListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrderInput | SortOrder
    verification_token?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    is_verified?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    verification_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    reset_token_expires?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type ExternalAccountCreateInput = {
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
    user: usersCreateNestedOneWithoutExternal_accountsInput
    source: sourcesCreateNestedOneWithoutExternal_accountsInput
    messages?: messagesCreateNestedManyWithoutExternal_accountsInput
  }

  export type ExternalAccountUncheckedCreateInput = {
    id?: number
    user_id: number
    source_id: number
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutExternal_accountsInput
  }

  export type ExternalAccountUpdateInput = {
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutExternal_accountsNestedInput
    source?: sourcesUpdateOneRequiredWithoutExternal_accountsNestedInput
    messages?: messagesUpdateManyWithoutExternal_accountsNestedInput
  }

  export type ExternalAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutExternal_accountsNestedInput
  }

  export type ExternalAccountCreateManyInput = {
    id?: number
    user_id: number
    source_id: number
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
  }

  export type ExternalAccountUpdateManyMutationInput = {
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExternalAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsCreateInput = {
    file_name?: string | null
    file_url?: string | null
    file_type?: string | null
    created_at?: Date | string | null
    messages: messagesCreateNestedOneWithoutAttachmentsInput
  }

  export type attachmentsUncheckedCreateInput = {
    id?: number
    message_id: number
    file_name?: string | null
    file_url?: string | null
    file_type?: string | null
    created_at?: Date | string | null
  }

  export type attachmentsUpdateInput = {
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type attachmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsCreateManyInput = {
    id?: number
    message_id: number
    file_name?: string | null
    file_url?: string | null
    file_type?: string | null
    created_at?: Date | string | null
  }

  export type attachmentsUpdateManyMutationInput = {
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type message_versionsCreateInput = {
    version: number
    content: string
    update_at?: Date | string | null
    messages: messagesCreateNestedOneWithoutMessage_versionsInput
  }

  export type message_versionsUncheckedCreateInput = {
    id?: number
    message_id: number
    version: number
    content: string
    update_at?: Date | string | null
  }

  export type message_versionsUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateOneRequiredWithoutMessage_versionsNestedInput
  }

  export type message_versionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type message_versionsCreateManyInput = {
    id?: number
    message_id: number
    version: number
    content: string
    update_at?: Date | string | null
  }

  export type message_versionsUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type message_versionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsCreateNestedManyWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
    sources: sourcesCreateNestedOneWithoutMessagesInput
    external_accounts: ExternalAccountCreateNestedOneWithoutMessagesInput
    summaries?: summariesCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsUncheckedCreateNestedManyWithoutMessagesInput
    summaries?: summariesUncheckedCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesUpdateInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    sources?: sourcesUpdateOneRequiredWithoutMessagesNestedInput
    external_accounts?: ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput
    summaries?: summariesUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUncheckedUpdateManyWithoutMessagesNestedInput
    summaries?: summariesUncheckedUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesCreateManyInput = {
    id?: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
  }

  export type messagesUpdateManyMutationInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sourcesCreateInput = {
    name: string
    type?: string | null
    icon_url?: string | null
    base_url?: string | null
    created_at?: Date | string | null
    external_accounts?: ExternalAccountCreateNestedManyWithoutSourceInput
    messages?: messagesCreateNestedManyWithoutSourcesInput
  }

  export type sourcesUncheckedCreateInput = {
    id?: number
    name: string
    type?: string | null
    icon_url?: string | null
    base_url?: string | null
    created_at?: Date | string | null
    external_accounts?: ExternalAccountUncheckedCreateNestedManyWithoutSourceInput
    messages?: messagesUncheckedCreateNestedManyWithoutSourcesInput
  }

  export type sourcesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUpdateManyWithoutSourceNestedInput
    messages?: messagesUpdateManyWithoutSourcesNestedInput
  }

  export type sourcesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUncheckedUpdateManyWithoutSourceNestedInput
    messages?: messagesUncheckedUpdateManyWithoutSourcesNestedInput
  }

  export type sourcesCreateManyInput = {
    id?: number
    name: string
    type?: string | null
    icon_url?: string | null
    base_url?: string | null
    created_at?: Date | string | null
  }

  export type sourcesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sourcesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summariesCreateInput = {
    summary_text: string
    is_edited?: boolean | null
    model_used?: string | null
    temperature?: number | null
    is_auto_generated?: boolean | null
    generated_at?: Date | string | null
    messages: messagesCreateNestedOneWithoutSummariesInput
  }

  export type summariesUncheckedCreateInput = {
    id?: number
    message_id: number
    summary_text: string
    is_edited?: boolean | null
    model_used?: string | null
    temperature?: number | null
    is_auto_generated?: boolean | null
    generated_at?: Date | string | null
  }

  export type summariesUpdateInput = {
    summary_text?: StringFieldUpdateOperationsInput | string
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    is_auto_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateOneRequiredWithoutSummariesNestedInput
  }

  export type summariesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    is_auto_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summariesCreateManyInput = {
    id?: number
    message_id: number
    summary_text: string
    is_edited?: boolean | null
    model_used?: string | null
    temperature?: number | null
    is_auto_generated?: boolean | null
    generated_at?: Date | string | null
  }

  export type summariesUpdateManyMutationInput = {
    summary_text?: StringFieldUpdateOperationsInput | string
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    is_auto_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summariesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    is_auto_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summary_cacheCreateInput = {
    summary_text: string
    model_used?: string | null
    temperature?: number | null
    created_at?: Date | string | null
    messages: messagesCreateNestedOneWithoutSummary_cacheInput
  }

  export type summary_cacheUncheckedCreateInput = {
    id?: number
    message_id: number
    summary_text: string
    model_used?: string | null
    temperature?: number | null
    created_at?: Date | string | null
  }

  export type summary_cacheUpdateInput = {
    summary_text?: StringFieldUpdateOperationsInput | string
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateOneRequiredWithoutSummary_cacheNestedInput
  }

  export type summary_cacheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summary_cacheCreateManyInput = {
    id?: number
    message_id: number
    summary_text: string
    model_used?: string | null
    temperature?: number | null
    created_at?: Date | string | null
  }

  export type summary_cacheUpdateManyMutationInput = {
    summary_text?: StringFieldUpdateOperationsInput | string
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summary_cacheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name?: string | null
    email: string
    password: string
    is_verified?: boolean | null
    verification_token?: string | null
    email_verified_at?: Date | string | null
    reset_token_expires?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    external_accounts?: ExternalAccountCreateNestedManyWithoutUserInput
    messages?: messagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    is_verified?: boolean | null
    verification_token?: string | null
    email_verified_at?: Date | string | null
    reset_token_expires?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    external_accounts?: ExternalAccountUncheckedCreateNestedManyWithoutUserInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUpdateManyWithoutUserNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUncheckedUpdateManyWithoutUserNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    is_verified?: boolean | null
    verification_token?: string | null
    email_verified_at?: Date | string | null
    reset_token_expires?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SourcesScalarRelationFilter = {
    is?: sourcesWhereInput
    isNot?: sourcesWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExternalAccountOrderByRelevanceInput = {
    fields: ExternalAccountOrderByRelevanceFieldEnum | ExternalAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExternalAccountCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    connected_at?: SortOrder
  }

  export type ExternalAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
  }

  export type ExternalAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    connected_at?: SortOrder
  }

  export type ExternalAccountMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    connected_at?: SortOrder
  }

  export type ExternalAccountSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MessagesScalarRelationFilter = {
    is?: messagesWhereInput
    isNot?: messagesWhereInput
  }

  export type attachmentsOrderByRelevanceInput = {
    fields: attachmentsOrderByRelevanceFieldEnum | attachmentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type attachmentsCountOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type attachmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
  }

  export type attachmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type attachmentsMinOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_name?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type attachmentsSumOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type message_versionsOrderByRelevanceInput = {
    fields: message_versionsOrderByRelevanceFieldEnum | message_versionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type message_versionsCountOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    update_at?: SortOrder
  }

  export type message_versionsAvgOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    version?: SortOrder
  }

  export type message_versionsMaxOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    update_at?: SortOrder
  }

  export type message_versionsMinOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    update_at?: SortOrder
  }

  export type message_versionsSumOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    version?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Enummessages_priority_levelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_priority_level | Enummessages_priority_levelFieldRefInput<$PrismaModel> | null
    in?: $Enums.messages_priority_level[] | null
    notIn?: $Enums.messages_priority_level[] | null
    not?: NestedEnummessages_priority_levelNullableFilter<$PrismaModel> | $Enums.messages_priority_level | null
  }

  export type AttachmentsListRelationFilter = {
    every?: attachmentsWhereInput
    some?: attachmentsWhereInput
    none?: attachmentsWhereInput
  }

  export type Message_versionsListRelationFilter = {
    every?: message_versionsWhereInput
    some?: message_versionsWhereInput
    none?: message_versionsWhereInput
  }

  export type ExternalAccountScalarRelationFilter = {
    is?: ExternalAccountWhereInput
    isNot?: ExternalAccountWhereInput
  }

  export type SummariesListRelationFilter = {
    every?: summariesWhereInput
    some?: summariesWhereInput
    none?: summariesWhereInput
  }

  export type Summary_cacheListRelationFilter = {
    every?: summary_cacheWhereInput
    some?: summary_cacheWhereInput
    none?: summary_cacheWhereInput
  }

  export type attachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type message_versionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type summariesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type summary_cacheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelevanceInput = {
    fields: messagesOrderByRelevanceFieldEnum | messagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_account_id?: SortOrder
    external_message_id?: SortOrder
    original_content?: SortOrder
    received_at?: SortOrder
    is_read?: SortOrder
    priority_level?: SortOrder
    created_at?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_account_id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_account_id?: SortOrder
    external_message_id?: SortOrder
    original_content?: SortOrder
    received_at?: SortOrder
    is_read?: SortOrder
    priority_level?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_account_id?: SortOrder
    external_message_id?: SortOrder
    original_content?: SortOrder
    received_at?: SortOrder
    is_read?: SortOrder
    priority_level?: SortOrder
    created_at?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_id?: SortOrder
    external_account_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enummessages_priority_levelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_priority_level | Enummessages_priority_levelFieldRefInput<$PrismaModel> | null
    in?: $Enums.messages_priority_level[] | null
    notIn?: $Enums.messages_priority_level[] | null
    not?: NestedEnummessages_priority_levelNullableWithAggregatesFilter<$PrismaModel> | $Enums.messages_priority_level | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummessages_priority_levelNullableFilter<$PrismaModel>
    _max?: NestedEnummessages_priority_levelNullableFilter<$PrismaModel>
  }

  export type ExternalAccountListRelationFilter = {
    every?: ExternalAccountWhereInput
    some?: ExternalAccountWhereInput
    none?: ExternalAccountWhereInput
  }

  export type ExternalAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sourcesOrderByRelevanceInput = {
    fields: sourcesOrderByRelevanceFieldEnum | sourcesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sourcesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon_url?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
  }

  export type sourcesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sourcesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon_url?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
  }

  export type sourcesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon_url?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
  }

  export type sourcesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type summariesOrderByRelevanceInput = {
    fields: summariesOrderByRelevanceFieldEnum | summariesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type summariesCountOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    is_edited?: SortOrder
    model_used?: SortOrder
    temperature?: SortOrder
    is_auto_generated?: SortOrder
    generated_at?: SortOrder
  }

  export type summariesAvgOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    temperature?: SortOrder
  }

  export type summariesMaxOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    is_edited?: SortOrder
    model_used?: SortOrder
    temperature?: SortOrder
    is_auto_generated?: SortOrder
    generated_at?: SortOrder
  }

  export type summariesMinOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    is_edited?: SortOrder
    model_used?: SortOrder
    temperature?: SortOrder
    is_auto_generated?: SortOrder
    generated_at?: SortOrder
  }

  export type summariesSumOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    temperature?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type summary_cacheOrderByRelevanceInput = {
    fields: summary_cacheOrderByRelevanceFieldEnum | summary_cacheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type summary_cacheCountOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    model_used?: SortOrder
    temperature?: SortOrder
    created_at?: SortOrder
  }

  export type summary_cacheAvgOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    temperature?: SortOrder
  }

  export type summary_cacheMaxOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    model_used?: SortOrder
    temperature?: SortOrder
    created_at?: SortOrder
  }

  export type summary_cacheMinOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    summary_text?: SortOrder
    model_used?: SortOrder
    temperature?: SortOrder
    created_at?: SortOrder
  }

  export type summary_cacheSumOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    temperature?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    email_verified_at?: SortOrder
    reset_token_expires?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    email_verified_at?: SortOrder
    reset_token_expires?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    email_verified_at?: SortOrder
    reset_token_expires?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutExternal_accountsInput = {
    create?: XOR<usersCreateWithoutExternal_accountsInput, usersUncheckedCreateWithoutExternal_accountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExternal_accountsInput
    connect?: usersWhereUniqueInput
  }

  export type sourcesCreateNestedOneWithoutExternal_accountsInput = {
    create?: XOR<sourcesCreateWithoutExternal_accountsInput, sourcesUncheckedCreateWithoutExternal_accountsInput>
    connectOrCreate?: sourcesCreateOrConnectWithoutExternal_accountsInput
    connect?: sourcesWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutExternal_accountsInput = {
    create?: XOR<messagesCreateWithoutExternal_accountsInput, messagesUncheckedCreateWithoutExternal_accountsInput> | messagesCreateWithoutExternal_accountsInput[] | messagesUncheckedCreateWithoutExternal_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutExternal_accountsInput | messagesCreateOrConnectWithoutExternal_accountsInput[]
    createMany?: messagesCreateManyExternal_accountsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutExternal_accountsInput = {
    create?: XOR<messagesCreateWithoutExternal_accountsInput, messagesUncheckedCreateWithoutExternal_accountsInput> | messagesCreateWithoutExternal_accountsInput[] | messagesUncheckedCreateWithoutExternal_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutExternal_accountsInput | messagesCreateOrConnectWithoutExternal_accountsInput[]
    createMany?: messagesCreateManyExternal_accountsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutExternal_accountsNestedInput = {
    create?: XOR<usersCreateWithoutExternal_accountsInput, usersUncheckedCreateWithoutExternal_accountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExternal_accountsInput
    upsert?: usersUpsertWithoutExternal_accountsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExternal_accountsInput, usersUpdateWithoutExternal_accountsInput>, usersUncheckedUpdateWithoutExternal_accountsInput>
  }

  export type sourcesUpdateOneRequiredWithoutExternal_accountsNestedInput = {
    create?: XOR<sourcesCreateWithoutExternal_accountsInput, sourcesUncheckedCreateWithoutExternal_accountsInput>
    connectOrCreate?: sourcesCreateOrConnectWithoutExternal_accountsInput
    upsert?: sourcesUpsertWithoutExternal_accountsInput
    connect?: sourcesWhereUniqueInput
    update?: XOR<XOR<sourcesUpdateToOneWithWhereWithoutExternal_accountsInput, sourcesUpdateWithoutExternal_accountsInput>, sourcesUncheckedUpdateWithoutExternal_accountsInput>
  }

  export type messagesUpdateManyWithoutExternal_accountsNestedInput = {
    create?: XOR<messagesCreateWithoutExternal_accountsInput, messagesUncheckedCreateWithoutExternal_accountsInput> | messagesCreateWithoutExternal_accountsInput[] | messagesUncheckedCreateWithoutExternal_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutExternal_accountsInput | messagesCreateOrConnectWithoutExternal_accountsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutExternal_accountsInput | messagesUpsertWithWhereUniqueWithoutExternal_accountsInput[]
    createMany?: messagesCreateManyExternal_accountsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutExternal_accountsInput | messagesUpdateWithWhereUniqueWithoutExternal_accountsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutExternal_accountsInput | messagesUpdateManyWithWhereWithoutExternal_accountsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type messagesUncheckedUpdateManyWithoutExternal_accountsNestedInput = {
    create?: XOR<messagesCreateWithoutExternal_accountsInput, messagesUncheckedCreateWithoutExternal_accountsInput> | messagesCreateWithoutExternal_accountsInput[] | messagesUncheckedCreateWithoutExternal_accountsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutExternal_accountsInput | messagesCreateOrConnectWithoutExternal_accountsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutExternal_accountsInput | messagesUpsertWithWhereUniqueWithoutExternal_accountsInput[]
    createMany?: messagesCreateManyExternal_accountsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutExternal_accountsInput | messagesUpdateWithWhereUniqueWithoutExternal_accountsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutExternal_accountsInput | messagesUpdateManyWithWhereWithoutExternal_accountsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutAttachmentsInput
    connect?: messagesWhereUniqueInput
  }

  export type messagesUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutAttachmentsInput
    upsert?: messagesUpsertWithoutAttachmentsInput
    connect?: messagesWhereUniqueInput
    update?: XOR<XOR<messagesUpdateToOneWithWhereWithoutAttachmentsInput, messagesUpdateWithoutAttachmentsInput>, messagesUncheckedUpdateWithoutAttachmentsInput>
  }

  export type messagesCreateNestedOneWithoutMessage_versionsInput = {
    create?: XOR<messagesCreateWithoutMessage_versionsInput, messagesUncheckedCreateWithoutMessage_versionsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutMessage_versionsInput
    connect?: messagesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type messagesUpdateOneRequiredWithoutMessage_versionsNestedInput = {
    create?: XOR<messagesCreateWithoutMessage_versionsInput, messagesUncheckedCreateWithoutMessage_versionsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutMessage_versionsInput
    upsert?: messagesUpsertWithoutMessage_versionsInput
    connect?: messagesWhereUniqueInput
    update?: XOR<XOR<messagesUpdateToOneWithWhereWithoutMessage_versionsInput, messagesUpdateWithoutMessage_versionsInput>, messagesUncheckedUpdateWithoutMessage_versionsInput>
  }

  export type attachmentsCreateNestedManyWithoutMessagesInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
  }

  export type message_versionsCreateNestedManyWithoutMessagesInput = {
    create?: XOR<message_versionsCreateWithoutMessagesInput, message_versionsUncheckedCreateWithoutMessagesInput> | message_versionsCreateWithoutMessagesInput[] | message_versionsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: message_versionsCreateOrConnectWithoutMessagesInput | message_versionsCreateOrConnectWithoutMessagesInput[]
    createMany?: message_versionsCreateManyMessagesInputEnvelope
    connect?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type sourcesCreateNestedOneWithoutMessagesInput = {
    create?: XOR<sourcesCreateWithoutMessagesInput, sourcesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: sourcesCreateOrConnectWithoutMessagesInput
    connect?: sourcesWhereUniqueInput
  }

  export type ExternalAccountCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ExternalAccountCreateWithoutMessagesInput, ExternalAccountUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutMessagesInput
    connect?: ExternalAccountWhereUniqueInput
  }

  export type summariesCreateNestedManyWithoutMessagesInput = {
    create?: XOR<summariesCreateWithoutMessagesInput, summariesUncheckedCreateWithoutMessagesInput> | summariesCreateWithoutMessagesInput[] | summariesUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summariesCreateOrConnectWithoutMessagesInput | summariesCreateOrConnectWithoutMessagesInput[]
    createMany?: summariesCreateManyMessagesInputEnvelope
    connect?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
  }

  export type summary_cacheCreateNestedManyWithoutMessagesInput = {
    create?: XOR<summary_cacheCreateWithoutMessagesInput, summary_cacheUncheckedCreateWithoutMessagesInput> | summary_cacheCreateWithoutMessagesInput[] | summary_cacheUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summary_cacheCreateOrConnectWithoutMessagesInput | summary_cacheCreateOrConnectWithoutMessagesInput[]
    createMany?: summary_cacheCreateManyMessagesInputEnvelope
    connect?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
  }

  export type attachmentsUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
  }

  export type message_versionsUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<message_versionsCreateWithoutMessagesInput, message_versionsUncheckedCreateWithoutMessagesInput> | message_versionsCreateWithoutMessagesInput[] | message_versionsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: message_versionsCreateOrConnectWithoutMessagesInput | message_versionsCreateOrConnectWithoutMessagesInput[]
    createMany?: message_versionsCreateManyMessagesInputEnvelope
    connect?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
  }

  export type summariesUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<summariesCreateWithoutMessagesInput, summariesUncheckedCreateWithoutMessagesInput> | summariesCreateWithoutMessagesInput[] | summariesUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summariesCreateOrConnectWithoutMessagesInput | summariesCreateOrConnectWithoutMessagesInput[]
    createMany?: summariesCreateManyMessagesInputEnvelope
    connect?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
  }

  export type summary_cacheUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<summary_cacheCreateWithoutMessagesInput, summary_cacheUncheckedCreateWithoutMessagesInput> | summary_cacheCreateWithoutMessagesInput[] | summary_cacheUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summary_cacheCreateOrConnectWithoutMessagesInput | summary_cacheCreateOrConnectWithoutMessagesInput[]
    createMany?: summary_cacheCreateManyMessagesInputEnvelope
    connect?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnummessages_priority_levelFieldUpdateOperationsInput = {
    set?: $Enums.messages_priority_level | null
  }

  export type attachmentsUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    upsert?: attachmentsUpsertWithWhereUniqueWithoutMessagesInput | attachmentsUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    set?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    disconnect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    delete?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    update?: attachmentsUpdateWithWhereUniqueWithoutMessagesInput | attachmentsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: attachmentsUpdateManyWithWhereWithoutMessagesInput | attachmentsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
  }

  export type message_versionsUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<message_versionsCreateWithoutMessagesInput, message_versionsUncheckedCreateWithoutMessagesInput> | message_versionsCreateWithoutMessagesInput[] | message_versionsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: message_versionsCreateOrConnectWithoutMessagesInput | message_versionsCreateOrConnectWithoutMessagesInput[]
    upsert?: message_versionsUpsertWithWhereUniqueWithoutMessagesInput | message_versionsUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: message_versionsCreateManyMessagesInputEnvelope
    set?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    disconnect?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    delete?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    connect?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    update?: message_versionsUpdateWithWhereUniqueWithoutMessagesInput | message_versionsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: message_versionsUpdateManyWithWhereWithoutMessagesInput | message_versionsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: message_versionsScalarWhereInput | message_versionsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    upsert?: usersUpsertWithoutMessagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMessagesInput, usersUpdateWithoutMessagesInput>, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type sourcesUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<sourcesCreateWithoutMessagesInput, sourcesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: sourcesCreateOrConnectWithoutMessagesInput
    upsert?: sourcesUpsertWithoutMessagesInput
    connect?: sourcesWhereUniqueInput
    update?: XOR<XOR<sourcesUpdateToOneWithWhereWithoutMessagesInput, sourcesUpdateWithoutMessagesInput>, sourcesUncheckedUpdateWithoutMessagesInput>
  }

  export type ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ExternalAccountCreateWithoutMessagesInput, ExternalAccountUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutMessagesInput
    upsert?: ExternalAccountUpsertWithoutMessagesInput
    connect?: ExternalAccountWhereUniqueInput
    update?: XOR<XOR<ExternalAccountUpdateToOneWithWhereWithoutMessagesInput, ExternalAccountUpdateWithoutMessagesInput>, ExternalAccountUncheckedUpdateWithoutMessagesInput>
  }

  export type summariesUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<summariesCreateWithoutMessagesInput, summariesUncheckedCreateWithoutMessagesInput> | summariesCreateWithoutMessagesInput[] | summariesUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summariesCreateOrConnectWithoutMessagesInput | summariesCreateOrConnectWithoutMessagesInput[]
    upsert?: summariesUpsertWithWhereUniqueWithoutMessagesInput | summariesUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: summariesCreateManyMessagesInputEnvelope
    set?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    disconnect?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    delete?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    connect?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    update?: summariesUpdateWithWhereUniqueWithoutMessagesInput | summariesUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: summariesUpdateManyWithWhereWithoutMessagesInput | summariesUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: summariesScalarWhereInput | summariesScalarWhereInput[]
  }

  export type summary_cacheUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<summary_cacheCreateWithoutMessagesInput, summary_cacheUncheckedCreateWithoutMessagesInput> | summary_cacheCreateWithoutMessagesInput[] | summary_cacheUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summary_cacheCreateOrConnectWithoutMessagesInput | summary_cacheCreateOrConnectWithoutMessagesInput[]
    upsert?: summary_cacheUpsertWithWhereUniqueWithoutMessagesInput | summary_cacheUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: summary_cacheCreateManyMessagesInputEnvelope
    set?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    disconnect?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    delete?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    connect?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    update?: summary_cacheUpdateWithWhereUniqueWithoutMessagesInput | summary_cacheUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: summary_cacheUpdateManyWithWhereWithoutMessagesInput | summary_cacheUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: summary_cacheScalarWhereInput | summary_cacheScalarWhereInput[]
  }

  export type attachmentsUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    upsert?: attachmentsUpsertWithWhereUniqueWithoutMessagesInput | attachmentsUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    set?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    disconnect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    delete?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    update?: attachmentsUpdateWithWhereUniqueWithoutMessagesInput | attachmentsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: attachmentsUpdateManyWithWhereWithoutMessagesInput | attachmentsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
  }

  export type message_versionsUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<message_versionsCreateWithoutMessagesInput, message_versionsUncheckedCreateWithoutMessagesInput> | message_versionsCreateWithoutMessagesInput[] | message_versionsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: message_versionsCreateOrConnectWithoutMessagesInput | message_versionsCreateOrConnectWithoutMessagesInput[]
    upsert?: message_versionsUpsertWithWhereUniqueWithoutMessagesInput | message_versionsUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: message_versionsCreateManyMessagesInputEnvelope
    set?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    disconnect?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    delete?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    connect?: message_versionsWhereUniqueInput | message_versionsWhereUniqueInput[]
    update?: message_versionsUpdateWithWhereUniqueWithoutMessagesInput | message_versionsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: message_versionsUpdateManyWithWhereWithoutMessagesInput | message_versionsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: message_versionsScalarWhereInput | message_versionsScalarWhereInput[]
  }

  export type summariesUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<summariesCreateWithoutMessagesInput, summariesUncheckedCreateWithoutMessagesInput> | summariesCreateWithoutMessagesInput[] | summariesUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summariesCreateOrConnectWithoutMessagesInput | summariesCreateOrConnectWithoutMessagesInput[]
    upsert?: summariesUpsertWithWhereUniqueWithoutMessagesInput | summariesUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: summariesCreateManyMessagesInputEnvelope
    set?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    disconnect?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    delete?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    connect?: summariesWhereUniqueInput | summariesWhereUniqueInput[]
    update?: summariesUpdateWithWhereUniqueWithoutMessagesInput | summariesUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: summariesUpdateManyWithWhereWithoutMessagesInput | summariesUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: summariesScalarWhereInput | summariesScalarWhereInput[]
  }

  export type summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<summary_cacheCreateWithoutMessagesInput, summary_cacheUncheckedCreateWithoutMessagesInput> | summary_cacheCreateWithoutMessagesInput[] | summary_cacheUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: summary_cacheCreateOrConnectWithoutMessagesInput | summary_cacheCreateOrConnectWithoutMessagesInput[]
    upsert?: summary_cacheUpsertWithWhereUniqueWithoutMessagesInput | summary_cacheUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: summary_cacheCreateManyMessagesInputEnvelope
    set?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    disconnect?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    delete?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    connect?: summary_cacheWhereUniqueInput | summary_cacheWhereUniqueInput[]
    update?: summary_cacheUpdateWithWhereUniqueWithoutMessagesInput | summary_cacheUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: summary_cacheUpdateManyWithWhereWithoutMessagesInput | summary_cacheUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: summary_cacheScalarWhereInput | summary_cacheScalarWhereInput[]
  }

  export type ExternalAccountCreateNestedManyWithoutSourceInput = {
    create?: XOR<ExternalAccountCreateWithoutSourceInput, ExternalAccountUncheckedCreateWithoutSourceInput> | ExternalAccountCreateWithoutSourceInput[] | ExternalAccountUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutSourceInput | ExternalAccountCreateOrConnectWithoutSourceInput[]
    createMany?: ExternalAccountCreateManySourceInputEnvelope
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutSourcesInput = {
    create?: XOR<messagesCreateWithoutSourcesInput, messagesUncheckedCreateWithoutSourcesInput> | messagesCreateWithoutSourcesInput[] | messagesUncheckedCreateWithoutSourcesInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSourcesInput | messagesCreateOrConnectWithoutSourcesInput[]
    createMany?: messagesCreateManySourcesInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type ExternalAccountUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<ExternalAccountCreateWithoutSourceInput, ExternalAccountUncheckedCreateWithoutSourceInput> | ExternalAccountCreateWithoutSourceInput[] | ExternalAccountUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutSourceInput | ExternalAccountCreateOrConnectWithoutSourceInput[]
    createMany?: ExternalAccountCreateManySourceInputEnvelope
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutSourcesInput = {
    create?: XOR<messagesCreateWithoutSourcesInput, messagesUncheckedCreateWithoutSourcesInput> | messagesCreateWithoutSourcesInput[] | messagesUncheckedCreateWithoutSourcesInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSourcesInput | messagesCreateOrConnectWithoutSourcesInput[]
    createMany?: messagesCreateManySourcesInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type ExternalAccountUpdateManyWithoutSourceNestedInput = {
    create?: XOR<ExternalAccountCreateWithoutSourceInput, ExternalAccountUncheckedCreateWithoutSourceInput> | ExternalAccountCreateWithoutSourceInput[] | ExternalAccountUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutSourceInput | ExternalAccountCreateOrConnectWithoutSourceInput[]
    upsert?: ExternalAccountUpsertWithWhereUniqueWithoutSourceInput | ExternalAccountUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: ExternalAccountCreateManySourceInputEnvelope
    set?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    disconnect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    delete?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    update?: ExternalAccountUpdateWithWhereUniqueWithoutSourceInput | ExternalAccountUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: ExternalAccountUpdateManyWithWhereWithoutSourceInput | ExternalAccountUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutSourcesNestedInput = {
    create?: XOR<messagesCreateWithoutSourcesInput, messagesUncheckedCreateWithoutSourcesInput> | messagesCreateWithoutSourcesInput[] | messagesUncheckedCreateWithoutSourcesInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSourcesInput | messagesCreateOrConnectWithoutSourcesInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSourcesInput | messagesUpsertWithWhereUniqueWithoutSourcesInput[]
    createMany?: messagesCreateManySourcesInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSourcesInput | messagesUpdateWithWhereUniqueWithoutSourcesInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSourcesInput | messagesUpdateManyWithWhereWithoutSourcesInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type ExternalAccountUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<ExternalAccountCreateWithoutSourceInput, ExternalAccountUncheckedCreateWithoutSourceInput> | ExternalAccountCreateWithoutSourceInput[] | ExternalAccountUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutSourceInput | ExternalAccountCreateOrConnectWithoutSourceInput[]
    upsert?: ExternalAccountUpsertWithWhereUniqueWithoutSourceInput | ExternalAccountUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: ExternalAccountCreateManySourceInputEnvelope
    set?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    disconnect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    delete?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    update?: ExternalAccountUpdateWithWhereUniqueWithoutSourceInput | ExternalAccountUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: ExternalAccountUpdateManyWithWhereWithoutSourceInput | ExternalAccountUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutSourcesNestedInput = {
    create?: XOR<messagesCreateWithoutSourcesInput, messagesUncheckedCreateWithoutSourcesInput> | messagesCreateWithoutSourcesInput[] | messagesUncheckedCreateWithoutSourcesInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSourcesInput | messagesCreateOrConnectWithoutSourcesInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSourcesInput | messagesUpsertWithWhereUniqueWithoutSourcesInput[]
    createMany?: messagesCreateManySourcesInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSourcesInput | messagesUpdateWithWhereUniqueWithoutSourcesInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSourcesInput | messagesUpdateManyWithWhereWithoutSourcesInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesCreateNestedOneWithoutSummariesInput = {
    create?: XOR<messagesCreateWithoutSummariesInput, messagesUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: messagesCreateOrConnectWithoutSummariesInput
    connect?: messagesWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type messagesUpdateOneRequiredWithoutSummariesNestedInput = {
    create?: XOR<messagesCreateWithoutSummariesInput, messagesUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: messagesCreateOrConnectWithoutSummariesInput
    upsert?: messagesUpsertWithoutSummariesInput
    connect?: messagesWhereUniqueInput
    update?: XOR<XOR<messagesUpdateToOneWithWhereWithoutSummariesInput, messagesUpdateWithoutSummariesInput>, messagesUncheckedUpdateWithoutSummariesInput>
  }

  export type messagesCreateNestedOneWithoutSummary_cacheInput = {
    create?: XOR<messagesCreateWithoutSummary_cacheInput, messagesUncheckedCreateWithoutSummary_cacheInput>
    connectOrCreate?: messagesCreateOrConnectWithoutSummary_cacheInput
    connect?: messagesWhereUniqueInput
  }

  export type messagesUpdateOneRequiredWithoutSummary_cacheNestedInput = {
    create?: XOR<messagesCreateWithoutSummary_cacheInput, messagesUncheckedCreateWithoutSummary_cacheInput>
    connectOrCreate?: messagesCreateOrConnectWithoutSummary_cacheInput
    upsert?: messagesUpsertWithoutSummary_cacheInput
    connect?: messagesWhereUniqueInput
    update?: XOR<XOR<messagesUpdateToOneWithWhereWithoutSummary_cacheInput, messagesUpdateWithoutSummary_cacheInput>, messagesUncheckedUpdateWithoutSummary_cacheInput>
  }

  export type ExternalAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type ExternalAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type ExternalAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    upsert?: ExternalAccountUpsertWithWhereUniqueWithoutUserInput | ExternalAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    set?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    disconnect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    delete?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    update?: ExternalAccountUpdateWithWhereUniqueWithoutUserInput | ExternalAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExternalAccountUpdateManyWithWhereWithoutUserInput | ExternalAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type ExternalAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    upsert?: ExternalAccountUpsertWithWhereUniqueWithoutUserInput | ExternalAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    set?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    disconnect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    delete?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    update?: ExternalAccountUpdateWithWhereUniqueWithoutUserInput | ExternalAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExternalAccountUpdateManyWithWhereWithoutUserInput | ExternalAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnummessages_priority_levelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_priority_level | Enummessages_priority_levelFieldRefInput<$PrismaModel> | null
    in?: $Enums.messages_priority_level[] | null
    notIn?: $Enums.messages_priority_level[] | null
    not?: NestedEnummessages_priority_levelNullableFilter<$PrismaModel> | $Enums.messages_priority_level | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnummessages_priority_levelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_priority_level | Enummessages_priority_levelFieldRefInput<$PrismaModel> | null
    in?: $Enums.messages_priority_level[] | null
    notIn?: $Enums.messages_priority_level[] | null
    not?: NestedEnummessages_priority_levelNullableWithAggregatesFilter<$PrismaModel> | $Enums.messages_priority_level | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummessages_priority_levelNullableFilter<$PrismaModel>
    _max?: NestedEnummessages_priority_levelNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutExternal_accountsInput = {
    name?: string | null
    email: string
    password: string
    is_verified?: boolean | null
    verification_token?: string | null
    email_verified_at?: Date | string | null
    reset_token_expires?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    messages?: messagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutExternal_accountsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    is_verified?: boolean | null
    verification_token?: string | null
    email_verified_at?: Date | string | null
    reset_token_expires?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutExternal_accountsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExternal_accountsInput, usersUncheckedCreateWithoutExternal_accountsInput>
  }

  export type sourcesCreateWithoutExternal_accountsInput = {
    name: string
    type?: string | null
    icon_url?: string | null
    base_url?: string | null
    created_at?: Date | string | null
    messages?: messagesCreateNestedManyWithoutSourcesInput
  }

  export type sourcesUncheckedCreateWithoutExternal_accountsInput = {
    id?: number
    name: string
    type?: string | null
    icon_url?: string | null
    base_url?: string | null
    created_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutSourcesInput
  }

  export type sourcesCreateOrConnectWithoutExternal_accountsInput = {
    where: sourcesWhereUniqueInput
    create: XOR<sourcesCreateWithoutExternal_accountsInput, sourcesUncheckedCreateWithoutExternal_accountsInput>
  }

  export type messagesCreateWithoutExternal_accountsInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsCreateNestedManyWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
    sources: sourcesCreateNestedOneWithoutMessagesInput
    summaries?: summariesCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutExternal_accountsInput = {
    id?: number
    user_id: number
    source_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsUncheckedCreateNestedManyWithoutMessagesInput
    summaries?: summariesUncheckedCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutExternal_accountsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutExternal_accountsInput, messagesUncheckedCreateWithoutExternal_accountsInput>
  }

  export type messagesCreateManyExternal_accountsInputEnvelope = {
    data: messagesCreateManyExternal_accountsInput | messagesCreateManyExternal_accountsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutExternal_accountsInput = {
    update: XOR<usersUpdateWithoutExternal_accountsInput, usersUncheckedUpdateWithoutExternal_accountsInput>
    create: XOR<usersCreateWithoutExternal_accountsInput, usersUncheckedCreateWithoutExternal_accountsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExternal_accountsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExternal_accountsInput, usersUncheckedUpdateWithoutExternal_accountsInput>
  }

  export type usersUpdateWithoutExternal_accountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutExternal_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type sourcesUpsertWithoutExternal_accountsInput = {
    update: XOR<sourcesUpdateWithoutExternal_accountsInput, sourcesUncheckedUpdateWithoutExternal_accountsInput>
    create: XOR<sourcesCreateWithoutExternal_accountsInput, sourcesUncheckedCreateWithoutExternal_accountsInput>
    where?: sourcesWhereInput
  }

  export type sourcesUpdateToOneWithWhereWithoutExternal_accountsInput = {
    where?: sourcesWhereInput
    data: XOR<sourcesUpdateWithoutExternal_accountsInput, sourcesUncheckedUpdateWithoutExternal_accountsInput>
  }

  export type sourcesUpdateWithoutExternal_accountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateManyWithoutSourcesNestedInput
  }

  export type sourcesUncheckedUpdateWithoutExternal_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutSourcesNestedInput
  }

  export type messagesUpsertWithWhereUniqueWithoutExternal_accountsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutExternal_accountsInput, messagesUncheckedUpdateWithoutExternal_accountsInput>
    create: XOR<messagesCreateWithoutExternal_accountsInput, messagesUncheckedCreateWithoutExternal_accountsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutExternal_accountsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutExternal_accountsInput, messagesUncheckedUpdateWithoutExternal_accountsInput>
  }

  export type messagesUpdateManyWithWhereWithoutExternal_accountsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutExternal_accountsInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: IntFilter<"messages"> | number
    user_id?: IntFilter<"messages"> | number
    source_id?: IntFilter<"messages"> | number
    external_account_id?: IntFilter<"messages"> | number
    external_message_id?: StringNullableFilter<"messages"> | string | null
    original_content?: StringFilter<"messages"> | string
    received_at?: DateTimeFilter<"messages"> | Date | string
    is_read?: BoolNullableFilter<"messages"> | boolean | null
    priority_level?: Enummessages_priority_levelNullableFilter<"messages"> | $Enums.messages_priority_level | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
  }

  export type messagesCreateWithoutAttachmentsInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    message_versions?: message_versionsCreateNestedManyWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
    sources: sourcesCreateNestedOneWithoutMessagesInput
    external_accounts: ExternalAccountCreateNestedOneWithoutMessagesInput
    summaries?: summariesCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    message_versions?: message_versionsUncheckedCreateNestedManyWithoutMessagesInput
    summaries?: summariesUncheckedCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutAttachmentsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
  }

  export type messagesUpsertWithoutAttachmentsInput = {
    update: XOR<messagesUpdateWithoutAttachmentsInput, messagesUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
    where?: messagesWhereInput
  }

  export type messagesUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: messagesWhereInput
    data: XOR<messagesUpdateWithoutAttachmentsInput, messagesUncheckedUpdateWithoutAttachmentsInput>
  }

  export type messagesUpdateWithoutAttachmentsInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message_versions?: message_versionsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    sources?: sourcesUpdateOneRequiredWithoutMessagesNestedInput
    external_accounts?: ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput
    summaries?: summariesUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message_versions?: message_versionsUncheckedUpdateManyWithoutMessagesNestedInput
    summaries?: summariesUncheckedUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesCreateWithoutMessage_versionsInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
    sources: sourcesCreateNestedOneWithoutMessagesInput
    external_accounts: ExternalAccountCreateNestedOneWithoutMessagesInput
    summaries?: summariesCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutMessage_versionsInput = {
    id?: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    summaries?: summariesUncheckedCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutMessage_versionsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutMessage_versionsInput, messagesUncheckedCreateWithoutMessage_versionsInput>
  }

  export type messagesUpsertWithoutMessage_versionsInput = {
    update: XOR<messagesUpdateWithoutMessage_versionsInput, messagesUncheckedUpdateWithoutMessage_versionsInput>
    create: XOR<messagesCreateWithoutMessage_versionsInput, messagesUncheckedCreateWithoutMessage_versionsInput>
    where?: messagesWhereInput
  }

  export type messagesUpdateToOneWithWhereWithoutMessage_versionsInput = {
    where?: messagesWhereInput
    data: XOR<messagesUpdateWithoutMessage_versionsInput, messagesUncheckedUpdateWithoutMessage_versionsInput>
  }

  export type messagesUpdateWithoutMessage_versionsInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    sources?: sourcesUpdateOneRequiredWithoutMessagesNestedInput
    external_accounts?: ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput
    summaries?: summariesUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutMessage_versionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    summaries?: summariesUncheckedUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type attachmentsCreateWithoutMessagesInput = {
    file_name?: string | null
    file_url?: string | null
    file_type?: string | null
    created_at?: Date | string | null
  }

  export type attachmentsUncheckedCreateWithoutMessagesInput = {
    id?: number
    file_name?: string | null
    file_url?: string | null
    file_type?: string | null
    created_at?: Date | string | null
  }

  export type attachmentsCreateOrConnectWithoutMessagesInput = {
    where: attachmentsWhereUniqueInput
    create: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput>
  }

  export type attachmentsCreateManyMessagesInputEnvelope = {
    data: attachmentsCreateManyMessagesInput | attachmentsCreateManyMessagesInput[]
    skipDuplicates?: boolean
  }

  export type message_versionsCreateWithoutMessagesInput = {
    version: number
    content: string
    update_at?: Date | string | null
  }

  export type message_versionsUncheckedCreateWithoutMessagesInput = {
    id?: number
    version: number
    content: string
    update_at?: Date | string | null
  }

  export type message_versionsCreateOrConnectWithoutMessagesInput = {
    where: message_versionsWhereUniqueInput
    create: XOR<message_versionsCreateWithoutMessagesInput, message_versionsUncheckedCreateWithoutMessagesInput>
  }

  export type message_versionsCreateManyMessagesInputEnvelope = {
    data: message_versionsCreateManyMessagesInput | message_versionsCreateManyMessagesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutMessagesInput = {
    name?: string | null
    email: string
    password: string
    is_verified?: boolean | null
    verification_token?: string | null
    email_verified_at?: Date | string | null
    reset_token_expires?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    external_accounts?: ExternalAccountCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    is_verified?: boolean | null
    verification_token?: string | null
    email_verified_at?: Date | string | null
    reset_token_expires?: Date | string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    update_at?: Date | string | null
    external_accounts?: ExternalAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type sourcesCreateWithoutMessagesInput = {
    name: string
    type?: string | null
    icon_url?: string | null
    base_url?: string | null
    created_at?: Date | string | null
    external_accounts?: ExternalAccountCreateNestedManyWithoutSourceInput
  }

  export type sourcesUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    type?: string | null
    icon_url?: string | null
    base_url?: string | null
    created_at?: Date | string | null
    external_accounts?: ExternalAccountUncheckedCreateNestedManyWithoutSourceInput
  }

  export type sourcesCreateOrConnectWithoutMessagesInput = {
    where: sourcesWhereUniqueInput
    create: XOR<sourcesCreateWithoutMessagesInput, sourcesUncheckedCreateWithoutMessagesInput>
  }

  export type ExternalAccountCreateWithoutMessagesInput = {
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
    user: usersCreateNestedOneWithoutExternal_accountsInput
    source: sourcesCreateNestedOneWithoutExternal_accountsInput
  }

  export type ExternalAccountUncheckedCreateWithoutMessagesInput = {
    id?: number
    user_id: number
    source_id: number
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
  }

  export type ExternalAccountCreateOrConnectWithoutMessagesInput = {
    where: ExternalAccountWhereUniqueInput
    create: XOR<ExternalAccountCreateWithoutMessagesInput, ExternalAccountUncheckedCreateWithoutMessagesInput>
  }

  export type summariesCreateWithoutMessagesInput = {
    summary_text: string
    is_edited?: boolean | null
    model_used?: string | null
    temperature?: number | null
    is_auto_generated?: boolean | null
    generated_at?: Date | string | null
  }

  export type summariesUncheckedCreateWithoutMessagesInput = {
    id?: number
    summary_text: string
    is_edited?: boolean | null
    model_used?: string | null
    temperature?: number | null
    is_auto_generated?: boolean | null
    generated_at?: Date | string | null
  }

  export type summariesCreateOrConnectWithoutMessagesInput = {
    where: summariesWhereUniqueInput
    create: XOR<summariesCreateWithoutMessagesInput, summariesUncheckedCreateWithoutMessagesInput>
  }

  export type summariesCreateManyMessagesInputEnvelope = {
    data: summariesCreateManyMessagesInput | summariesCreateManyMessagesInput[]
    skipDuplicates?: boolean
  }

  export type summary_cacheCreateWithoutMessagesInput = {
    summary_text: string
    model_used?: string | null
    temperature?: number | null
    created_at?: Date | string | null
  }

  export type summary_cacheUncheckedCreateWithoutMessagesInput = {
    id?: number
    summary_text: string
    model_used?: string | null
    temperature?: number | null
    created_at?: Date | string | null
  }

  export type summary_cacheCreateOrConnectWithoutMessagesInput = {
    where: summary_cacheWhereUniqueInput
    create: XOR<summary_cacheCreateWithoutMessagesInput, summary_cacheUncheckedCreateWithoutMessagesInput>
  }

  export type summary_cacheCreateManyMessagesInputEnvelope = {
    data: summary_cacheCreateManyMessagesInput | summary_cacheCreateManyMessagesInput[]
    skipDuplicates?: boolean
  }

  export type attachmentsUpsertWithWhereUniqueWithoutMessagesInput = {
    where: attachmentsWhereUniqueInput
    update: XOR<attachmentsUpdateWithoutMessagesInput, attachmentsUncheckedUpdateWithoutMessagesInput>
    create: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput>
  }

  export type attachmentsUpdateWithWhereUniqueWithoutMessagesInput = {
    where: attachmentsWhereUniqueInput
    data: XOR<attachmentsUpdateWithoutMessagesInput, attachmentsUncheckedUpdateWithoutMessagesInput>
  }

  export type attachmentsUpdateManyWithWhereWithoutMessagesInput = {
    where: attachmentsScalarWhereInput
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyWithoutMessagesInput>
  }

  export type attachmentsScalarWhereInput = {
    AND?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
    OR?: attachmentsScalarWhereInput[]
    NOT?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
    id?: IntFilter<"attachments"> | number
    message_id?: IntFilter<"attachments"> | number
    file_name?: StringNullableFilter<"attachments"> | string | null
    file_url?: StringNullableFilter<"attachments"> | string | null
    file_type?: StringNullableFilter<"attachments"> | string | null
    created_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
  }

  export type message_versionsUpsertWithWhereUniqueWithoutMessagesInput = {
    where: message_versionsWhereUniqueInput
    update: XOR<message_versionsUpdateWithoutMessagesInput, message_versionsUncheckedUpdateWithoutMessagesInput>
    create: XOR<message_versionsCreateWithoutMessagesInput, message_versionsUncheckedCreateWithoutMessagesInput>
  }

  export type message_versionsUpdateWithWhereUniqueWithoutMessagesInput = {
    where: message_versionsWhereUniqueInput
    data: XOR<message_versionsUpdateWithoutMessagesInput, message_versionsUncheckedUpdateWithoutMessagesInput>
  }

  export type message_versionsUpdateManyWithWhereWithoutMessagesInput = {
    where: message_versionsScalarWhereInput
    data: XOR<message_versionsUpdateManyMutationInput, message_versionsUncheckedUpdateManyWithoutMessagesInput>
  }

  export type message_versionsScalarWhereInput = {
    AND?: message_versionsScalarWhereInput | message_versionsScalarWhereInput[]
    OR?: message_versionsScalarWhereInput[]
    NOT?: message_versionsScalarWhereInput | message_versionsScalarWhereInput[]
    id?: IntFilter<"message_versions"> | number
    message_id?: IntFilter<"message_versions"> | number
    version?: IntFilter<"message_versions"> | number
    content?: StringFilter<"message_versions"> | string
    update_at?: DateTimeNullableFilter<"message_versions"> | Date | string | null
  }

  export type usersUpsertWithoutMessagesInput = {
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateWithoutMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sourcesUpsertWithoutMessagesInput = {
    update: XOR<sourcesUpdateWithoutMessagesInput, sourcesUncheckedUpdateWithoutMessagesInput>
    create: XOR<sourcesCreateWithoutMessagesInput, sourcesUncheckedCreateWithoutMessagesInput>
    where?: sourcesWhereInput
  }

  export type sourcesUpdateToOneWithWhereWithoutMessagesInput = {
    where?: sourcesWhereInput
    data: XOR<sourcesUpdateWithoutMessagesInput, sourcesUncheckedUpdateWithoutMessagesInput>
  }

  export type sourcesUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUpdateManyWithoutSourceNestedInput
  }

  export type sourcesUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    base_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    external_accounts?: ExternalAccountUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type ExternalAccountUpsertWithoutMessagesInput = {
    update: XOR<ExternalAccountUpdateWithoutMessagesInput, ExternalAccountUncheckedUpdateWithoutMessagesInput>
    create: XOR<ExternalAccountCreateWithoutMessagesInput, ExternalAccountUncheckedCreateWithoutMessagesInput>
    where?: ExternalAccountWhereInput
  }

  export type ExternalAccountUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ExternalAccountWhereInput
    data: XOR<ExternalAccountUpdateWithoutMessagesInput, ExternalAccountUncheckedUpdateWithoutMessagesInput>
  }

  export type ExternalAccountUpdateWithoutMessagesInput = {
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutExternal_accountsNestedInput
    source?: sourcesUpdateOneRequiredWithoutExternal_accountsNestedInput
  }

  export type ExternalAccountUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summariesUpsertWithWhereUniqueWithoutMessagesInput = {
    where: summariesWhereUniqueInput
    update: XOR<summariesUpdateWithoutMessagesInput, summariesUncheckedUpdateWithoutMessagesInput>
    create: XOR<summariesCreateWithoutMessagesInput, summariesUncheckedCreateWithoutMessagesInput>
  }

  export type summariesUpdateWithWhereUniqueWithoutMessagesInput = {
    where: summariesWhereUniqueInput
    data: XOR<summariesUpdateWithoutMessagesInput, summariesUncheckedUpdateWithoutMessagesInput>
  }

  export type summariesUpdateManyWithWhereWithoutMessagesInput = {
    where: summariesScalarWhereInput
    data: XOR<summariesUpdateManyMutationInput, summariesUncheckedUpdateManyWithoutMessagesInput>
  }

  export type summariesScalarWhereInput = {
    AND?: summariesScalarWhereInput | summariesScalarWhereInput[]
    OR?: summariesScalarWhereInput[]
    NOT?: summariesScalarWhereInput | summariesScalarWhereInput[]
    id?: IntFilter<"summaries"> | number
    message_id?: IntFilter<"summaries"> | number
    summary_text?: StringFilter<"summaries"> | string
    is_edited?: BoolNullableFilter<"summaries"> | boolean | null
    model_used?: StringNullableFilter<"summaries"> | string | null
    temperature?: FloatNullableFilter<"summaries"> | number | null
    is_auto_generated?: BoolNullableFilter<"summaries"> | boolean | null
    generated_at?: DateTimeNullableFilter<"summaries"> | Date | string | null
  }

  export type summary_cacheUpsertWithWhereUniqueWithoutMessagesInput = {
    where: summary_cacheWhereUniqueInput
    update: XOR<summary_cacheUpdateWithoutMessagesInput, summary_cacheUncheckedUpdateWithoutMessagesInput>
    create: XOR<summary_cacheCreateWithoutMessagesInput, summary_cacheUncheckedCreateWithoutMessagesInput>
  }

  export type summary_cacheUpdateWithWhereUniqueWithoutMessagesInput = {
    where: summary_cacheWhereUniqueInput
    data: XOR<summary_cacheUpdateWithoutMessagesInput, summary_cacheUncheckedUpdateWithoutMessagesInput>
  }

  export type summary_cacheUpdateManyWithWhereWithoutMessagesInput = {
    where: summary_cacheScalarWhereInput
    data: XOR<summary_cacheUpdateManyMutationInput, summary_cacheUncheckedUpdateManyWithoutMessagesInput>
  }

  export type summary_cacheScalarWhereInput = {
    AND?: summary_cacheScalarWhereInput | summary_cacheScalarWhereInput[]
    OR?: summary_cacheScalarWhereInput[]
    NOT?: summary_cacheScalarWhereInput | summary_cacheScalarWhereInput[]
    id?: IntFilter<"summary_cache"> | number
    message_id?: IntFilter<"summary_cache"> | number
    summary_text?: StringFilter<"summary_cache"> | string
    model_used?: StringNullableFilter<"summary_cache"> | string | null
    temperature?: FloatNullableFilter<"summary_cache"> | number | null
    created_at?: DateTimeNullableFilter<"summary_cache"> | Date | string | null
  }

  export type ExternalAccountCreateWithoutSourceInput = {
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
    user: usersCreateNestedOneWithoutExternal_accountsInput
    messages?: messagesCreateNestedManyWithoutExternal_accountsInput
  }

  export type ExternalAccountUncheckedCreateWithoutSourceInput = {
    id?: number
    user_id: number
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutExternal_accountsInput
  }

  export type ExternalAccountCreateOrConnectWithoutSourceInput = {
    where: ExternalAccountWhereUniqueInput
    create: XOR<ExternalAccountCreateWithoutSourceInput, ExternalAccountUncheckedCreateWithoutSourceInput>
  }

  export type ExternalAccountCreateManySourceInputEnvelope = {
    data: ExternalAccountCreateManySourceInput | ExternalAccountCreateManySourceInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutSourcesInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsCreateNestedManyWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
    external_accounts: ExternalAccountCreateNestedOneWithoutMessagesInput
    summaries?: summariesCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutSourcesInput = {
    id?: number
    user_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsUncheckedCreateNestedManyWithoutMessagesInput
    summaries?: summariesUncheckedCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutSourcesInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutSourcesInput, messagesUncheckedCreateWithoutSourcesInput>
  }

  export type messagesCreateManySourcesInputEnvelope = {
    data: messagesCreateManySourcesInput | messagesCreateManySourcesInput[]
    skipDuplicates?: boolean
  }

  export type ExternalAccountUpsertWithWhereUniqueWithoutSourceInput = {
    where: ExternalAccountWhereUniqueInput
    update: XOR<ExternalAccountUpdateWithoutSourceInput, ExternalAccountUncheckedUpdateWithoutSourceInput>
    create: XOR<ExternalAccountCreateWithoutSourceInput, ExternalAccountUncheckedCreateWithoutSourceInput>
  }

  export type ExternalAccountUpdateWithWhereUniqueWithoutSourceInput = {
    where: ExternalAccountWhereUniqueInput
    data: XOR<ExternalAccountUpdateWithoutSourceInput, ExternalAccountUncheckedUpdateWithoutSourceInput>
  }

  export type ExternalAccountUpdateManyWithWhereWithoutSourceInput = {
    where: ExternalAccountScalarWhereInput
    data: XOR<ExternalAccountUpdateManyMutationInput, ExternalAccountUncheckedUpdateManyWithoutSourceInput>
  }

  export type ExternalAccountScalarWhereInput = {
    AND?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
    OR?: ExternalAccountScalarWhereInput[]
    NOT?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
    id?: IntFilter<"ExternalAccount"> | number
    user_id?: IntFilter<"ExternalAccount"> | number
    source_id?: IntFilter<"ExternalAccount"> | number
    external_user_id?: StringNullableFilter<"ExternalAccount"> | string | null
    access_token?: StringNullableFilter<"ExternalAccount"> | string | null
    refresh_token?: StringNullableFilter<"ExternalAccount"> | string | null
    expires_at?: DateTimeNullableFilter<"ExternalAccount"> | Date | string | null
    connected_at?: DateTimeNullableFilter<"ExternalAccount"> | Date | string | null
  }

  export type messagesUpsertWithWhereUniqueWithoutSourcesInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutSourcesInput, messagesUncheckedUpdateWithoutSourcesInput>
    create: XOR<messagesCreateWithoutSourcesInput, messagesUncheckedCreateWithoutSourcesInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutSourcesInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutSourcesInput, messagesUncheckedUpdateWithoutSourcesInput>
  }

  export type messagesUpdateManyWithWhereWithoutSourcesInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutSourcesInput>
  }

  export type messagesCreateWithoutSummariesInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsCreateNestedManyWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
    sources: sourcesCreateNestedOneWithoutMessagesInput
    external_accounts: ExternalAccountCreateNestedOneWithoutMessagesInput
    summary_cache?: summary_cacheCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutSummariesInput = {
    id?: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsUncheckedCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutSummariesInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutSummariesInput, messagesUncheckedCreateWithoutSummariesInput>
  }

  export type messagesUpsertWithoutSummariesInput = {
    update: XOR<messagesUpdateWithoutSummariesInput, messagesUncheckedUpdateWithoutSummariesInput>
    create: XOR<messagesCreateWithoutSummariesInput, messagesUncheckedCreateWithoutSummariesInput>
    where?: messagesWhereInput
  }

  export type messagesUpdateToOneWithWhereWithoutSummariesInput = {
    where?: messagesWhereInput
    data: XOR<messagesUpdateWithoutSummariesInput, messagesUncheckedUpdateWithoutSummariesInput>
  }

  export type messagesUpdateWithoutSummariesInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    sources?: sourcesUpdateOneRequiredWithoutMessagesNestedInput
    external_accounts?: ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput
    summary_cache?: summary_cacheUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutSummariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUncheckedUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesCreateWithoutSummary_cacheInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsCreateNestedManyWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
    sources: sourcesCreateNestedOneWithoutMessagesInput
    external_accounts: ExternalAccountCreateNestedOneWithoutMessagesInput
    summaries?: summariesCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutSummary_cacheInput = {
    id?: number
    user_id: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsUncheckedCreateNestedManyWithoutMessagesInput
    summaries?: summariesUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutSummary_cacheInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutSummary_cacheInput, messagesUncheckedCreateWithoutSummary_cacheInput>
  }

  export type messagesUpsertWithoutSummary_cacheInput = {
    update: XOR<messagesUpdateWithoutSummary_cacheInput, messagesUncheckedUpdateWithoutSummary_cacheInput>
    create: XOR<messagesCreateWithoutSummary_cacheInput, messagesUncheckedCreateWithoutSummary_cacheInput>
    where?: messagesWhereInput
  }

  export type messagesUpdateToOneWithWhereWithoutSummary_cacheInput = {
    where?: messagesWhereInput
    data: XOR<messagesUpdateWithoutSummary_cacheInput, messagesUncheckedUpdateWithoutSummary_cacheInput>
  }

  export type messagesUpdateWithoutSummary_cacheInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    sources?: sourcesUpdateOneRequiredWithoutMessagesNestedInput
    external_accounts?: ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput
    summaries?: summariesUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutSummary_cacheInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUncheckedUpdateManyWithoutMessagesNestedInput
    summaries?: summariesUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type ExternalAccountCreateWithoutUserInput = {
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
    source: sourcesCreateNestedOneWithoutExternal_accountsInput
    messages?: messagesCreateNestedManyWithoutExternal_accountsInput
  }

  export type ExternalAccountUncheckedCreateWithoutUserInput = {
    id?: number
    source_id: number
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutExternal_accountsInput
  }

  export type ExternalAccountCreateOrConnectWithoutUserInput = {
    where: ExternalAccountWhereUniqueInput
    create: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput>
  }

  export type ExternalAccountCreateManyUserInputEnvelope = {
    data: ExternalAccountCreateManyUserInput | ExternalAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutUsersInput = {
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsCreateNestedManyWithoutMessagesInput
    sources: sourcesCreateNestedOneWithoutMessagesInput
    external_accounts: ExternalAccountCreateNestedOneWithoutMessagesInput
    summaries?: summariesCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutUsersInput = {
    id?: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    message_versions?: message_versionsUncheckedCreateNestedManyWithoutMessagesInput
    summaries?: summariesUncheckedCreateNestedManyWithoutMessagesInput
    summary_cache?: summary_cacheUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutUsersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesCreateManyUsersInputEnvelope = {
    data: messagesCreateManyUsersInput | messagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ExternalAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: ExternalAccountWhereUniqueInput
    update: XOR<ExternalAccountUpdateWithoutUserInput, ExternalAccountUncheckedUpdateWithoutUserInput>
    create: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput>
  }

  export type ExternalAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: ExternalAccountWhereUniqueInput
    data: XOR<ExternalAccountUpdateWithoutUserInput, ExternalAccountUncheckedUpdateWithoutUserInput>
  }

  export type ExternalAccountUpdateManyWithWhereWithoutUserInput = {
    where: ExternalAccountScalarWhereInput
    data: XOR<ExternalAccountUpdateManyMutationInput, ExternalAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
  }

  export type messagesUpdateManyWithWhereWithoutUsersInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type messagesCreateManyExternal_accountsInput = {
    id?: number
    user_id: number
    source_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
  }

  export type messagesUpdateWithoutExternal_accountsInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    sources?: sourcesUpdateOneRequiredWithoutMessagesNestedInput
    summaries?: summariesUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutExternal_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUncheckedUpdateManyWithoutMessagesNestedInput
    summaries?: summariesUncheckedUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateManyWithoutExternal_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsCreateManyMessagesInput = {
    id?: number
    file_name?: string | null
    file_url?: string | null
    file_type?: string | null
    created_at?: Date | string | null
  }

  export type message_versionsCreateManyMessagesInput = {
    id?: number
    version: number
    content: string
    update_at?: Date | string | null
  }

  export type summariesCreateManyMessagesInput = {
    id?: number
    summary_text: string
    is_edited?: boolean | null
    model_used?: string | null
    temperature?: number | null
    is_auto_generated?: boolean | null
    generated_at?: Date | string | null
  }

  export type summary_cacheCreateManyMessagesInput = {
    id?: number
    summary_text: string
    model_used?: string | null
    temperature?: number | null
    created_at?: Date | string | null
  }

  export type attachmentsUpdateWithoutMessagesInput = {
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type message_versionsUpdateWithoutMessagesInput = {
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type message_versionsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type message_versionsUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summariesUpdateWithoutMessagesInput = {
    summary_text?: StringFieldUpdateOperationsInput | string
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    is_auto_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summariesUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    is_auto_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summariesUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    is_edited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    is_auto_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summary_cacheUpdateWithoutMessagesInput = {
    summary_text?: StringFieldUpdateOperationsInput | string
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summary_cacheUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type summary_cacheUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    summary_text?: StringFieldUpdateOperationsInput | string
    model_used?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExternalAccountCreateManySourceInput = {
    id?: number
    user_id: number
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
  }

  export type messagesCreateManySourcesInput = {
    id?: number
    user_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
  }

  export type ExternalAccountUpdateWithoutSourceInput = {
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutExternal_accountsNestedInput
    messages?: messagesUpdateManyWithoutExternal_accountsNestedInput
  }

  export type ExternalAccountUncheckedUpdateWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutExternal_accountsNestedInput
  }

  export type ExternalAccountUncheckedUpdateManyWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUpdateWithoutSourcesInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    external_accounts?: ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput
    summaries?: summariesUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUncheckedUpdateManyWithoutMessagesNestedInput
    summaries?: summariesUncheckedUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateManyWithoutSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExternalAccountCreateManyUserInput = {
    id?: number
    source_id: number
    external_user_id?: string | null
    access_token?: string | null
    refresh_token?: string | null
    expires_at?: Date | string | null
    connected_at?: Date | string | null
  }

  export type messagesCreateManyUsersInput = {
    id?: number
    source_id: number
    external_account_id: number
    external_message_id?: string | null
    original_content: string
    received_at: Date | string
    is_read?: boolean | null
    priority_level?: $Enums.messages_priority_level | null
    created_at?: Date | string | null
  }

  export type ExternalAccountUpdateWithoutUserInput = {
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: sourcesUpdateOneRequiredWithoutExternal_accountsNestedInput
    messages?: messagesUpdateManyWithoutExternal_accountsNestedInput
  }

  export type ExternalAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutExternal_accountsNestedInput
  }

  export type ExternalAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUpdateWithoutUsersInput = {
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUpdateManyWithoutMessagesNestedInput
    sources?: sourcesUpdateOneRequiredWithoutMessagesNestedInput
    external_accounts?: ExternalAccountUpdateOneRequiredWithoutMessagesNestedInput
    summaries?: summariesUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    message_versions?: message_versionsUncheckedUpdateManyWithoutMessagesNestedInput
    summaries?: summariesUncheckedUpdateManyWithoutMessagesNestedInput
    summary_cache?: summary_cacheUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    source_id?: IntFieldUpdateOperationsInput | number
    external_account_id?: IntFieldUpdateOperationsInput | number
    external_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_content?: StringFieldUpdateOperationsInput | string
    received_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    priority_level?: NullableEnummessages_priority_levelFieldUpdateOperationsInput | $Enums.messages_priority_level | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}