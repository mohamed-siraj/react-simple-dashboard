import React from "react";

enum ETextType {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password'
};

type TTextType = keyof typeof ETextType;

type TInputFormComponent = {
    register: any;
    error: any;
    name: string;
    placeholder: string;
    type: TTextType
};

const InputFormComponent: React.FunctionComponent<TInputFormComponent> = ({ error, name, placeholder, type, register }) => {

    return (<>
        <input data-testid={name} className={`${error ? `border-rose-600` : ''} shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type={type} {...register(name, { required: true })} placeholder={placeholder} />
        {error && <div className="text-rose-600 font-bold text-sm mt-[0.1rem]">{error.message}</div>}
    </>);
};

export default InputFormComponent;