import { SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  firstName: string;
  lastName: string;
}

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<MyForm>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <section>
      <h1>Вивчення з Mikhail Nepomniachtchi</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          First Name:
          <input
            {...register("firstName", {
              required: 'Поле "First Name" не заповнене',
              minLength: {
                value: 3,
                message: 'Поле "First Name" має містити не менше 3 символів',
              },
            })}
          />
        </label>
        <div>
          {errors?.firstName && (
            <p className="error">{errors?.firstName?.message || "Error!"}</p>
          )}
        </div>

        <label>
          Last Name:
          <input
            {...register("lastName", {
              required: 'Поле "Last Name" не заповнене',
              minLength: {
                value: 3,
                message: 'Поле "Last Name" має містити не менше 3 символів',
              },
            })}
          />
        </label>
        <div>
          {errors?.lastName && (
            <p className="error">{errors?.lastName?.message || "Error!"}</p>
          )}
        </div>
        <button type="submit" disabled={!isValid} >Відправити</button>
      </form>
    </section>
  );
};

export default ReactHookForm;
