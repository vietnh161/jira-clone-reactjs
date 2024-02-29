import {
  Form,
  Formik,
  FormikConfig,
  FormikProps
} from "formik";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import FormField from "../../shared/components/FormField";
import Input from "../../shared/components/Input";
import Modal from "../../shared/components/Modal";
import Select from "../../shared/components/Select";
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
      issueType: Yup.string().required("Required"),
      shortSummary: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
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
            {(_: FormikProps<any>) => (
              <Form>

                <FormField
                  name="issueType"
                  label="Issue Type"
                  description="Start typing to get a list of possible matches."
                >
                  <Select
                    options={[
                      { value: 1, label: "Task" },
                      { value: 2, label: "Bug" },
                      { value: 3, label: "Story" },
                    ]}
                    
                  ></Select>
                </FormField>

                <FormField
                  name="shortSummary"
                  label="Short Summary"
                  description="Concisely summarize the issue in one or two sentences."
                >
                  <Input type="text" ></Input>
                </FormField>

                <FormField
                  name="description"
                  label="Description"
                  description="Describe the issue in as much detail as you'd like."
                >
                  <TextEditor disabled></TextEditor>
                </FormField>
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
