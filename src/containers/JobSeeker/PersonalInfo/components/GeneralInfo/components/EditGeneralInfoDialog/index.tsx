import { Formik, FormikValues } from "formik";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Dialog from "@components/Dialog";
import { splitStringToWordsArray } from "@common/functions/filterString";
import Button from "@designs/Button";
import InputBox from "@designs/Input";
import TextArea from "@designs/TextArea";
import GroupSelect from "@designs/GroupSelect";
import { updateUserProfile } from "@redux/actions/user";
import { IUpdateUserInput, IRootState, ICategoryLevel2 } from "@common/typings";

import { IGeneralInfoProps } from "../../index";
import {
  ButtonWrapper,
  Container,
  DialogButton,
  Title,
  Wrapper,
  Form,
} from "./styles";
import { getAllCategoryLevel2 } from "@redux/actions/category";
import { showNotification } from "@components/ToastNotification";

interface IEditGeneralInfoDialogProps extends IGeneralInfoProps {
  ButtonMenu?: React.ReactElement;
  className?: string;
}

const EditGeneralInfoDialog: React.FC<IEditGeneralInfoDialogProps> = (
  props,
) => {
  const { t } = useTranslation(["job-management", "common"]);
  const {
    ButtonMenu,
    className,
    code,
    description,
    displayName,
    title,
    career,
  } = props;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const { isLoading } = useSelector((state: IRootState) => state.actions);

  const {
    categoryLevel1,
    categoryLevel2: { results: listCareers = [], totalCount = 0 },
  } = useSelector((state: IRootState) => state.category);

  const [page, setPage] = useState(0);
  const [allCareers, setAllCareers] = useState<ICategoryLevel2[]>([]);

  useEffect(() => {
    if (listCareers?.length > 0) {
      const newPage = page + 1;
      setPage(newPage);
      setAllCareers([...allCareers, ...listCareers]);
    }
  }, [listCareers]);

  const initialValues = {
    fullName: displayName || "",
    code: code || "",
    title: title || "",
    bio: description || "",
    career: career || [],
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required(t("personal-info.general-info.fullName-validation"))
      .test(
        "Full name",
        t("personal-info.general-info.fullName-regex"),
        (values) => splitStringToWordsArray(values, " ")?.length > 1,
      ),
    title: Yup.string().required(
      t("personal-info.general-info.title-validation"),
    ),
  });

  const handleSubmit = (values: FormikValues) => {
    const updateUserPayload: IUpdateUserInput = {
      updateUserInput: {
        displayName: values.fullName,
        title: values.title,
        history: values.bio,
        career: values?.career.map((item: ICategoryLevel2) => item?._id),
      },
    };

    dispatch(updateUserProfile(updateUserPayload));
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Container className={className}>
      <DialogButton onClick={handleOpenDialog}>{ButtonMenu}</DialogButton>

      <Dialog
        isOpen={open}
        onClose={() => null}
        className="z-50 rounded-none w-max"
      >
        <Wrapper>
          <Title>{t("personal-info.general-info.edit-general-info")}</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <InputBox
                    label={t("personal-info.general-info.fullName")}
                    placeholder={t(
                      "personal-info.general-info.fullName-placeholder",
                    )}
                    type="text"
                    required
                    {...formik.getFieldProps("fullName")}
                    {...formik.getFieldMeta("fullName")}
                  />

                  <InputBox
                    label={t("personal-info.general-info.candidate-code")}
                    placeholder={t(
                      "personal-info.general-info.candidate-code-placeholder",
                    )}
                    type="text"
                    value={initialValues.code}
                    required
                    disabled
                    {...formik.getFieldProps("code")}
                    {...formik.getFieldMeta("code")}
                  />

                  <GroupSelect
                    initValue={initialValues.career}
                    limit={3}
                    instanceId="career"
                    groupLabel={categoryLevel1?.results}
                    groupOption={allCareers}
                    label={t("personal-info.general-info.job")}
                    isMulti
                    required
                    placeholder={t("personal-info.general-info.job")}
                    onChangeSelect={(value: ICategoryLevel2[]) => {
                      formik.setFieldValue(
                        "career",
                        value.map((item) => item),
                      );
                    }}
                  />

                  <InputBox
                    label={t("personal-info.general-info.title")}
                    placeholder={t(
                      "personal-info.general-info.title-placeholder",
                    )}
                    type="text"
                    required
                    {...formik.getFieldProps("title")}
                    {...formik.getFieldMeta("title")}
                  />

                  <TextArea
                    label={t("personal-info.general-info.bio")}
                    placeholder={t(
                      "personal-info.general-info.bio-placeholder",
                    )}
                    type="text"
                    rows={5}
                    {...formik.getFieldProps("bio")}
                    {...formik.getFieldMeta("bio")}
                  />

                  <ButtonWrapper>
                    <Button
                      type="button"
                      onClick={handleCloseDialog}
                      className="w-1/2 border border-solid border-primary"
                    >
                      {t("common:dialog.cancel")}
                    </Button>

                    <Button
                      loading={isLoading}
                      primary
                      type="submit"
                      className="w-1/2"
                    >
                      {!isLoading && t("common:dialog.save")}
                    </Button>
                  </ButtonWrapper>
                </Form>
              );
            }}
          </Formik>
        </Wrapper>
      </Dialog>
    </Container>
  );
};

export default EditGeneralInfoDialog;
