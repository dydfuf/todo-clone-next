import { GetServerSideProps, NextPage } from "next";
import { getTodosAPI } from "../lib/api/todo";

import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

interface IProps {
  todos: TodoType[];
}

const index: NextPage<IProps> = ({ todos }) => {
  console.log(process.env, "클라이언트");
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();
    console.log(data);
    return { props: { todos: data } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default index;
