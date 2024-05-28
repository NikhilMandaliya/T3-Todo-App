import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC"
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update multiples rows of table: "todos" */
  update_todos_many?: Maybe<Array<Maybe<Todos_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Todos_ManyArgs = {
  updates: Array<Todos_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};

export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

export type Query_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

export type Query_RootTodos_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "todos" */
  todos_stream: Array<Todos>;
};

export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootTodos_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Todos_Stream_Cursor_Input>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: "todos";
  id: Scalars["Int"]["output"];
  is_completed: Scalars["Boolean"]["output"];
  title: Scalars["String"]["output"];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: "todos_aggregate";
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: "todos_aggregate_fields";
  avg?: Maybe<Todos_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todos_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: "todos_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_completed?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodosPkey = "todos_pkey"
}

/** input type for incrementing numeric columns in table "todos" */
export type Todos_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: "todos_max_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: "todos_min_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: "todos_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  id?: InputMaybe<Order_By>;
  is_completed?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  IsCompleted = "is_completed",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: "todos_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: "todos_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: "todos_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "todos" */
export type Todos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todos_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: "todos_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  IsCompleted = "is_completed",
  /** column name */
  Title = "title"
}

export type Todos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Todos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: "todos_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: "todos_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: "todos_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type TasksQueryQueryVariables = Exact<{ [key: string]: never }>;

export type TasksQueryQuery = { __typename?: "query_root" } & { todos: Array<{ __typename?: "todos" } & Pick<Todos, "id" | "title" | "is_completed">> };

export const TasksQuery = gql`
  query TasksQuery {
    todos {
      id
      title
      is_completed
    }
  }
`;
import { IntrospectionQuery } from "graphql";
export default {
  __schema: {
    queryType: {
      name: "query_root"
    },
    mutationType: {
      name: "mutation_root"
    },
    subscriptionType: {
      name: "subscription_root"
    },
    types: [
      {
        kind: "OBJECT",
        name: "mutation_root",
        fields: [
          {
            name: "delete_todos",
            type: {
              kind: "OBJECT",
              name: "todos_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_todos_by_pk",
            type: {
              kind: "OBJECT",
              name: "todos",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "insert_todos",
            type: {
              kind: "OBJECT",
              name: "todos_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_todos_one",
            type: {
              kind: "OBJECT",
              name: "todos",
              ofType: null
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "update_todos",
            type: {
              kind: "OBJECT",
              name: "todos_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_todos_by_pk",
            type: {
              kind: "OBJECT",
              name: "todos",
              ofType: null
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_todos_many",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "todos_mutation_response",
                ofType: null
              }
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "query_root",
        fields: [
          {
            name: "todos",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "todos",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "todos_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "todos_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "todos_by_pk",
            type: {
              kind: "OBJECT",
              name: "todos",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "subscription_root",
        fields: [
          {
            name: "todos",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "todos",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "todos_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "todos_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "todos_by_pk",
            type: {
              kind: "OBJECT",
              name: "todos",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "todos_stream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "todos",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "batch_size",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "is_completed",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "todos_aggregate_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "todos",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_aggregate_fields",
        fields: [
          {
            name: "avg",
            type: {
              kind: "OBJECT",
              name: "todos_avg_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "todos_max_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "todos_min_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "stddev",
            type: {
              kind: "OBJECT",
              name: "todos_stddev_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "stddev_pop",
            type: {
              kind: "OBJECT",
              name: "todos_stddev_pop_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "stddev_samp",
            type: {
              kind: "OBJECT",
              name: "todos_stddev_samp_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "sum",
            type: {
              kind: "OBJECT",
              name: "todos_sum_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "var_pop",
            type: {
              kind: "OBJECT",
              name: "todos_var_pop_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "var_samp",
            type: {
              kind: "OBJECT",
              name: "todos_var_samp_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "variance",
            type: {
              kind: "OBJECT",
              name: "todos_variance_fields",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_avg_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_max_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_min_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "todos",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_stddev_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_stddev_pop_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_stddev_samp_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_sum_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_var_pop_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_var_samp_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "todos_variance_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "SCALAR",
        name: "Any"
      }
    ],
    directives: []
  }
} as unknown as IntrospectionQuery;
