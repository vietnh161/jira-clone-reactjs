import { useFormik } from "formik";
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

  const createForm = useFormik({
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
  });
  return (
    <Modal open={open} showCloseButton={false} onClose={onClose}>
      <div className="create-issue-form">
        <div className="create-issue-form__title">Create issue</div>
        <form onSubmit={createForm.handleSubmit}>
          <div className="create-issue-form__body">
            {/* <div className="create-issue-form__field">
              <label className="field__label" htmlFor="issueType">
                Issue Type
              </label>
              <div className="field__select">
                <div className="selected-value">
                  {createForm.values.issueType}
                </div>
                <ul className="options">
                  <li
                    className="option"
                    onClick={() =>
                      createForm.setFieldValue("issueType", "Task")
                    }
                  >
                    Task
                  </li>
                  <li
                    className="option"
                    onClick={() => createForm.setFieldValue("issueType", "Bug")}
                  >
                    Bug
                  </li>
                  <li
                    className="option"
                    onClick={() =>
                      createForm.setFieldValue("issueType", "Story")
                    }
                  >
                    Story
                  </li>
                </ul>
              </div>
              <div className="field__description">
                Start typing to get a list of possible matches.
              </div>
              {createForm.touched.shortSummary &&
              createForm.errors.shortSummary ? (
                <div className="field__error-message">
                  {createForm.errors.shortSummary}
                </div>
              ) : null}
            </div> */}
            <div className="divider"></div>
            {/* <div className="create-issue-form__field">
              <label className="field__label" htmlFor="shortSummary">
                Short Summary
              </label>
              <div className="field__input">
                <input
                  id="shortSummary"
                  name="shortSummary"
                  type="text"
                  onChange={createForm.handleChange}
                  value={createForm.values.shortSummary}
                />
              </div>
              <div className="field__description">
                Concisely summarize the issue in one or two sentences.
              </div>
              {createForm.touched.shortSummary &&
              createForm.errors.shortSummary ? (
                <div className="field__error-message">
                  {createForm.errors.shortSummary}
                </div>
              ) : null}
            </div> */}
            <Input
              label="Short Summary"
              description="Concisely summarize the issue in one or two sentences."
              id="shortSummary"
              name="shortSummary"
              type="text"
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
      </div>
    </Modal>
  );
};

export default CreateIssueModal;
