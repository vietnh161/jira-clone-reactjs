import { Form, Formik, FormikConfig, FormikProps } from "formik";
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
      issueType: 1,
      shortSummary: "",
      description: "",
      reporter: {},
      assignees: [],
      priority: 3,
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
                  <Input type="text"></Input>
                </FormField>

                <FormField
                  name="description"
                  label="Description"
                  description="Describe the issue in as much detail as you'd like."
                >
                  <TextEditor></TextEditor>
                </FormField>

                <FormField
                  name="reporter"
                  label="Reporter"
                >
                  <Select
                    options={[
                      { value: 1, label: "Josh Dayton" },
                      { value: 2, label: "Bryan Blythe" },
                      { value: 3, label: "Bartholomew Brooklyn" },
                      { value: 4, label: "Ramsey Shaw" },
                      { value: 5, label: "Hugh Peter" },
                    ]}
                  ></Select>
                </FormField>

                <FormField
                  name="assignees"
                  label="Asignees"
                >
                  <Select
                    options={[
                      { value: 1, label: "Bysshe Newt" },
                      { value: 2, label: "Buck Crispin" },
                      { value: 3, label: "Xavior Garrett" },
                      { value: 4, label: "Glanville Chaz" },
                      { value: 5, label: "Raven Keaton" },
                      { value: 6, label: "Shayne Josiah" },
                      { value: 7, label: "Rylie Herman" },
                      { value: 8, label: "Azure Lachlan" },
                      { value: 9, label: "Bob Rob" },
                      { value: 10, label: "Zander Sonny" },
                    ]}
                  ></Select>
                </FormField>

                <FormField
                  name="priority"
                  label="Priority"
                >
                  <Select
                    options={[
                      { value: 1, label: "Highest" },
                      { value: 2, label: "High" },
                      { value: 3, label: "Low" },
                      { value: 4, label: "Lowest" },
                    ]}
                  ></Select>
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
