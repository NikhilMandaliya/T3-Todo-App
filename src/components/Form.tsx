import React from "react";
import { UseQueryExecute, useMutation } from "urql";
import MutationAddTodo from "~/queries/addTodo.graphql";
import { Todos, Todos_Insert_Input } from "~/gql/graphql";

const Form = ({ reexecuteQuery }: { reexecuteQuery: UseQueryExecute }) => {
  const [_, executeMutation] = useMutation<Todos, Todos_Insert_Input>(MutationAddTodo as string);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const form = event.currentTarget;
    const input = form.elements.namedItem("todo") as HTMLInputElement;
    const value = input.value;
    if (value) {
      try {
        await executeMutation({ title: value });
        reexecuteQuery({ requestPolicy: "network-only" });
      } catch (error) {
        console.error(error);
      }
    }

    form.reset();
  };

  return (
    <form className="form" onSubmit={(event) => void handleSubmit(event)}>
      <label htmlFor="todo">
        <input type="text" name="todo" id="todo" placeholder="Write your next task" />
      </label>

      <button type="submit">
        <span className="visually-hidden">Submit</span>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
        >
          <path
            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;
