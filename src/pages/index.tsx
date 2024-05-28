import Head from "next/head";
import { useQuery } from "urql";
import TodosQuery from "../queries/todosQuery.graphql";
import React from "react";
import Header from "~/components/Header";
import TODOHero from "~/components/TODOHero";
import Form from "~/components/Form";
import TODOList from "~/components/TODOList";
import { TasksQueryQuery } from "~/gql/graphql";

export default function Home() {
  const [{ data, fetching }, reexecuteQuery] = useQuery<TasksQueryQuery>({
    query: TodosQuery as string
  });

  const todos = data?.todos || [];

  const todos_completed = todos ? todos.filter((todo) => todo.is_completed === true).length : 0;

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Create with t3 stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper">
          <Header />
          {fetching ? (
            <div className="loader">Loading....</div>
          ) : (
            <>
              <TODOHero todos_completed={todos_completed} total_todos={todos.length} />
              <Form reexecuteQuery={reexecuteQuery} />
              <TODOList todos={todos} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
