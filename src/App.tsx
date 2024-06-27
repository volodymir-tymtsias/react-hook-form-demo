import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import "./App.css";
import ReactHookForm from "./components/HookForm";

interface MyForm {
  firstName: string;
  lastName: string;
  name: string;
  age: number;
}

function App() {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<MyForm>({
    defaultValues: {
      age: 18,
    },
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  };

  

  return (
    <div className="App">
      <ReactHookForm />

      <section>
        <h1>Вивчення з Anton Larichev</h1>

        <form onSubmit={handleSubmit(submit, error)} noValidate>
          <div className="field">
            <label htmlFor="name">Ім’я:</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? true : false}
            />
          </div>

          <div className="field">
            <label htmlFor="age">Вік:</label>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <input type="number" id="age" {...field} />
              )}
            />
            {/* <input type="number" id="age" {...register("age")} /> */}
          </div>

          <button type="submit">Відправити</button>

          <button
            type="button"
            onClick={() => {
              setValue("name", "Богдан");
            }}
          >
            Встановити ім’я
          </button>

          <button
            type="button"
            onClick={() =>
              reset({
                age: 0,
                name: "",
              })
            }
          >
            Очистити форму
          </button>

          <button type="button" onClick={() => clearErrors()}>
            Очистити помилки
          </button>
        </form>

        <p>{`Встановлено вік ${watch("age")}`}</p>
      </section>
    </div>
  );
}

export default App;
