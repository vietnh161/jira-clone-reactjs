import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikConfig,
  FormikProps,
  useFormik,
} from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import Modal from "../../shared/components/Modal";
import "react-quill/dist/quill.snow.css";
import "./Style.scss";
import Input from "../../shared/components/Input";

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
      // description: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(values);
    },
  };
  const createForm = useFormik(config);
  return (
    <Modal open={open} showCloseButton={false} onClose={onClose}>
      <div className="create-issue-form">
        <div className="create-issue-form__title">Create issue</div>
        <form onSubmit={createForm.handleSubmit}>
          <div className="create-issue-form__body">
            <div className="divider"></div>
            <Input
              componentClass="m-t-20"
              label="Short Summary"
              description="Concisely summarize the issue in one or two sentences."
              id="shortSummary"
              name="shortSummary"
              type="text"
              field={createForm.getFieldProps("shortSummary")}
              errorMessage={
                createForm.touched.shortSummary
                  ? createForm.getFieldMeta("shortSummary").error
                  : ""
              }
            ></Input>
            {/* <div className="create-issue-form__field">
              <label className="field__label" htmlFor="description">
                Description
              </label>
              <div className="field__text-editor">
                <ReactQuill
                  theme="snow"
                  value={createForm.values.description}
                  onChange={(value) =>
                    createForm.setFieldValue("description", value)
                  }
                />
              </div>
              <div className="field__description">
                Describe the issue in as much detail as you'd like.
              </div>
              {createForm.touched.description &&
              createForm.errors.description ? (
                <div className="field__error-message">
                  {createForm.errors.description}
                </div>
              ) : null}
            </div> */}
          </div>

          <div className="create-issue-form__footer">
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
        </form>

        <div className="create-issue-form__title">Another form</div>
        <Formik {...config}>
          {(props: FormikProps<any>) => (
            <Form>
              <Field name="shortSummary">
                {({
                  field,
                  form: { touched, errors },
                  meta,
                }: FieldProps<any>) => (
                  <Input
                    componentClass="m-t-20"
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
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateIssueModal;
