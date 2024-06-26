import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface MyForm {
  name: string;
  age: number;
};

function App() {
  const {register, handleSubmit} = useForm<MyForm>({
    defaultValues: {
      age: 18,
    }
  });

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register('name')} />
        <input type="number" {...register('age')} />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default App;
