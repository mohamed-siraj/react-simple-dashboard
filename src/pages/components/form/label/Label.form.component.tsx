import React from "react";

type TLabelFormComponent = {
    text: string;
    error: any
};

const LabelFormComponent: React.FunctionComponent<TLabelFormComponent> = ({ text, error }) => {

    return (<>
        <label className={`block ${error ? 'text-rose-600' : 'text-gray-700'} text-sm font-bold mb-2`}>
            {text}
        </label>
    </>);
};

export default LabelFormComponent;