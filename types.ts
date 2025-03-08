export type Inputs = {
  value:
    | string
    | number
    | boolean
    | string[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Record<string, any[]>
    | undefined;
  isValid: boolean;
};

export type State = {
  inputs: Record<string, Inputs>;
  isValid: boolean;
};

export type InputChangeAction = {
  type: "INPUT_CHANGE";
  value: string | number | boolean | string[];
  isValid: boolean;
  inputId: string;
};

export type SetFormAction = {
  type: "SET_DATA";
  inputs: Record<string, Inputs>;
  formIsValid: boolean;
};

export type Action = InputChangeAction | SetFormAction;

export type InputHandler = (
  id: string,
  value: string | boolean | number,
  isValid: boolean
) => void;
