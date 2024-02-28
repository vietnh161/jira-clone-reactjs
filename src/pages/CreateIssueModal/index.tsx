import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikConfig,
  FormikProps,
} from "formik";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import Input from "../../shared/components/Input";
import Modal from "../../shared/components/Modal";
import TextEditor from "../../shared/components/TextEditor";
import "./Style.scss";

interface CreateIssueModalProps {
  open: boolean;
  onClose?: () => void;
}

const CreateIssueModal = (props: CreateIssueModalProps) => {
  const { open, onClose } = props;
  const config: FormikConfig<any> = {
    initialValues: {
      issueType: "",
      shortSummary: "",
      description: "",
      reporter: {},
      assignees: [],
      priority: 1,
    },
    validationSchema: Yup.object({
      // issueType: Yup.string().required("Required"),
      shortSummary: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  };
  return (
    <Modal open={open} showCloseButton={false} onClose={onClose}>
      <div className="create-issue-form">
        <div className="create-issue-form__title">Create issue</div>
        <div className="create-issue-form__body">
          <Formik {...config}>
            {(props: FormikProps<any>) => (
              <Form>
                <Field name="shortSummary">
                  {({ field, meta }: FieldProps<any>) => (
                    <Input
                      classes="m-t-20"
                      label="Short Summary"
                      description="Concisely summarize the issue in one or two sentences."
                      id="shortSummary"
                      name="shortSummary"
                      type="text"
                      field={field}
                      errorMessage={meta.touched ? meta.error : ""}
                    ></Input>
                  )}
                </Field>
                <Field name="description">
                  {({ field, meta }: FieldProps<any>) => (
                    <TextEditor
                      classes="m-t-20"
                      label="Description"
                      description="Describe the issue in as much detail as you'd like."
                      id="description"
                      field={field}
                      errorMessage={meta.touched ? meta.error : ""}
                    ></TextEditor>
                  )}
                </Field>
                <div className="create-issue-form__submit">
                  <button className="field__submit-button" type="submit">
                    Submit
                  </button>
                  <button
                    className="field__cancel-button"
                    type="button"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default CreateIssueModal;
