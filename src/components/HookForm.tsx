import { SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  firstName: string;
  lastName: string;
}

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyForm>();

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section>
      <h1>Вивчення з Mikhail Nepomniachtchi</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          firstName:
          <input {...register("firstName", { required: true })} />
        </label>
        <button type="submit">Відправити</button>
      </form>
    </section>
  );
};

export default ReactHookForm;
