import { INotification } from "@common/typings";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import dayjs from "dayjs";
import {
  ItemV2Container,
  Content,
  Action,
  ExpandButton,
  DateTime,
  Company,
  DetailButton,
  ButtonWrapper,
  TextButton,
} from "./styles";
import { useRedirect } from "@common/hooks/useRedirect";
import { PATH } from "@routes";
import { useDispatch } from "react-redux";
import { setOpenNotification } from "@redux/actions/common";
import ScheduleInterviewDialog from "./Dialog/ScheduleInterviewDialog";
import InvitationApplyDialog from "./Dialog/InvitationApplyDialog";

interface INotificationProps {
  notification: INotification;
}

const Notify: React.FC<INotificationProps> = (props) => {
  const { notification } = props;
  const {
    name,
    company,
    description,
    createdAt,
    scheduleInterview,
    invitationApply,
  } = notification || {};

  const [open, setOpen] = useState(false);
  const { t } = useTranslation(["common"]);

  const redirect = useRedirect();
  const dispatch = useDispatch();

  const handleGetNotify = () => {
    if (name === "Evaluated") {
      redirect(PATH.JOB_MANAGEMENT_EVALUATED);
    }
  };

  const onOpenDialog = () => {
    setOpen(true);
    dispatch(setOpenNotification(false));
  };

  return (
    <ItemV2Container>
      <Company>{company?.name}</Company>
      <Content isOpen={open}>{description}</Content>

      {name === "Evaluated" && (
        <DetailButton onClick={() => handleGetNotify()}>
          Xem chi tiết
        </DetailButton>
      )}
      {name === "Approved" && null}
      {name === "Scheduled" && (
        <ButtonWrapper>
          <TextButton onClick={onOpenDialog}>Xem chi tiết</TextButton>
          <ScheduleInterviewDialog
            isOpen={open}
            scheduleInterviewId={scheduleInterview?._id}
            onClose={() => setOpen(false)}
          />
        </ButtonWrapper>
      )}

      {name === "Invitation" && (
        <ButtonWrapper>
          <TextButton onClick={onOpenDialog}>Xem chi tiết</TextButton>
          <InvitationApplyDialog
            isOpen={open}
            invitationApplyId={invitationApply?._id}
            onClose={() => setOpen(false)}
          />
        </ButtonWrapper>
      )}

      <Action className={open && "mt-3"}>
        {description?.length > 150 && (
          <ExpandButton onClick={() => setOpen(!open)}>
            {open ? t("header.collapse") : t("header.extend")}
          </ExpandButton>
        )}
        <DateTime>{dayjs(createdAt?.toString()).format("DD/MM/YYYY")}</DateTime>
      </Action>
    </ItemV2Container>
  );
};

export default Notify;
