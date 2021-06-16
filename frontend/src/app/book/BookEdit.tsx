import React, { useContext } from "react";
import { Form, Alert, Button, Card } from "antd";
import { useForm } from "antd/es/form/Form";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { FormattedMessage } from "react-intl";
import {
  createAntdFormValidationMessages,
  createUseAntdForm,
  createUseAntdFormValidation,
  RetryDialog,
  Field,
  GlobalErrorsAlert,
  Spinner,
  useEntityEditor,
  EntityEditorProps,
  registerEntityEditorScreen
} from "@haulmont/jmix-react-ui";
import { gql } from "@apollo/client";
import "../../app/App.css";
import { Book } from "../../jmix/entities/Book";

const ENTITY_NAME = "Book";
const ROUTING_PATH = "/bookEdit";

const LOAD_BOOK = gql`
  query BookById($id: String = "", $loadItem: Boolean!) {
    BookById(id: $id) @include(if: $loadItem) {
      id
      _instanceName
      author
      title
      year
    }
  }
`;

const UPSERT_BOOK = gql`
  mutation Upsert_Book($book: inp_Book!) {
    upsert_Book(book: $book) {
      id
    }
  }
`;

const BookEdit = observer((props: EntityEditorProps<Book>) => {
  const {
    onCommit,
    entityInstance,
    submitBtnCaption = "common.submit"
  } = props;

  const [form] = useForm();

  const {
    executeLoadQuery,
    loadQueryResult: { loading: queryLoading, error: queryError },
    upsertMutationResult: { loading: upsertLoading },
    serverValidationErrors,
    intl,
    handleSubmit,
    handleSubmitFailed,
    handleCancelBtnClick
  } = useEntityEditor<Book>({
    loadQuery: LOAD_BOOK,
    upsertMutation: UPSERT_BOOK,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    onCommit,
    entityInstance,
    useEntityEditorForm: createUseAntdForm(form),
    useEntityEditorFormValidation: createUseAntdFormValidation(form)
  });

  if (queryLoading) {
    return <Spinner />;
  }

  if (queryError != null) {
    console.error(queryError);
    return <RetryDialog onRetry={executeLoadQuery} />;
  }

  return (
    <Card className="narrow-layout">
      <Form
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        layout="vertical"
        form={form}
        validateMessages={createAntdFormValidationMessages(intl)}
      >
        <Field
          entityName={ENTITY_NAME}
          propertyName="author"
          formItemProps={{
            style: { marginBottom: "12px" }
          }}
        />

        <Field
          entityName={ENTITY_NAME}
          propertyName="title"
          formItemProps={{
            style: { marginBottom: "12px" }
          }}
        />

        <Field
          entityName={ENTITY_NAME}
          propertyName="year"
          formItemProps={{
            style: { marginBottom: "12px" }
          }}
        />

        <GlobalErrorsAlert serverValidationErrors={serverValidationErrors} />

        <Form.Item style={{ textAlign: "center" }}>
          <Button htmlType="button" onClick={handleCancelBtnClick}>
            <FormattedMessage id="common.cancel" />
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={upsertLoading}
            style={{ marginLeft: "8px" }}
          >
            <FormattedMessage id={submitBtnCaption} />
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
});

registerEntityEditorScreen(ENTITY_NAME, "bookEdit", <BookEdit />);

export default BookEdit;
