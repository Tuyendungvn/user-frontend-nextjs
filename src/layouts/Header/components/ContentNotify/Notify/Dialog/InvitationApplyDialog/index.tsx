import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";

import Input from "@designs/Input";
import Dialog from "@components/Dialog";

import { IRootState } from "@common/typings";

import {
  Title,
  Container,
  ScheduleInterviewBox,
  ScheduleInterviewDialogContainer,
  ButtonWrapper,
} from "./styles";

import { actionSuccess } from "@redux/actions/common";

import { IGetAllInvitationApply } from "@common/typings/InvitationApply";
import { getAllInvitationApply } from "@redux/actions/invitationApply";
import Button from "@designs/Button";
import invitationApply from "@redux/sagas/invitationApply";
import Link from "@designs/Link";
import { PATH } from "@routes";

interface IDialogProps {
  isOpen: boolean;
  onClose: () => void;
  invitationApplyId?: string;
}

const InvitationApplyDialog: React.FC<IDialogProps> = (props) => {
  const { isOpen, onClose, invitationApplyId } = props;
  const { t } = useTranslation(["profile", "common"]);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state: IRootState) => state.auth);
  const { isLoading } = useSelector((state: IRootState) => state.actions);

  const {
    allInvitationApply: { results: listInvitation = [] },
  } = useSelector((state: IRootState) => state.invitationApply);

  const invitation = listInvitation.find(
    (element) => element?._id === invitationApplyId,
  );

  useEffect(() => {
    if (actionSuccess) {
      getInvitationApply();
      open && setOpen(false);
    }
  }, [actionSuccess]);

  const getInvitationApply = () => {
    const payload: IGetAllInvitationApply = {
      filterInvitationApply: {
        receiver: currentUser?.userInfo?._id,
      },
    };
    dispatch(getAllInvitationApply(payload));
  };

  return (
    <ScheduleInterviewDialogContainer>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        className="z-50 rounded-none relative"
      >
        <Container>
          <Title>{t("common:invitation-apply.invitation")}</Title>
          <ScheduleInterviewBox>
            {listInvitation && (
              <div className="flex flex-col gap-y-2 mb-4">
                {invitation?.receiver?._id === currentUser?.userInfo?._id && (
                  <>
                    <Input
                      label={t("common:invitation-apply.company")}
                      value={invitation?.company?.name}
                      disabled
                    />
                    <Input
                      label={t("common:invitation-apply.recruitment")}
                      value={invitation?.positionApply}
                      disabled
                    />
                    <Input
                      label={t("common:invitation-apply.location")}
                      value={invitation?.address}
                      disabled
                    />
                    <Input
                      label={t("common:invitation-apply.phone-number-contact")}
                      value={invitation?.senderPhone}
                      disabled
                    />
                    <Input
                      label={t("common:invitation-apply.email-contact")}
                      value={invitation?.senderEmail}
                      disabled
                    />
                    <ButtonWrapper>
                      <Button
                        loading={isLoading}
                        primary
                        type="submit"
                        className="px-4"
                      >
                        <Link
                          routeName={PATH.JOB_DETAIL}
                          params={{ slug: invitation?.recruitment?.slug }}
                        >
                          Xem việc làm
                        </Link>
                      </Button>
                    </ButtonWrapper>
                  </>
                )}
              </div>
            )}
          </ScheduleInterviewBox>
        </Container>
      </Dialog>
    </ScheduleInterviewDialogContainer>
  );
};

export default InvitationApplyDialog;
