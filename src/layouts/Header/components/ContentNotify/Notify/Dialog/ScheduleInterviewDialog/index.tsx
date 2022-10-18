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
import {
  cancelTheScheduleInterview,
  confirmTheScheduleInterview,
  getAllScheduleInterview,
} from "@redux/actions/scheduleInterview";
import { actionSuccess } from "@redux/actions/common";
import {
  ICancelTheScheduleInterview,
  IConfirmTheScheduleInterview,
  IGetAllScheduleInterview,
} from "@common/typings/scheduleInterview";
import {
  formatDate,
  formatDateWithTime,
} from "@common/functions/format/formatDate";
import Button from "@designs/Button";

interface IDialogProps {
  isOpen: boolean;
  onClose: () => void;
  scheduleInterviewId?: string;
}

const ScheduleInterviewDialog: React.FC<IDialogProps> = (props) => {
  const { isOpen, onClose, scheduleInterviewId } = props;
  const { t } = useTranslation(["profile", "common"]);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState<boolean>();
  const [isExpired, setIsExpired] = useState<boolean>();
  const [isRefused, setIsRefused] = useState<boolean>();

  const { currentUser } = useSelector((state: IRootState) => state.auth);
  const { recruitment } = useSelector((state: IRootState) => state.recruitment);

  const {
    allScheduleInterview: { results: listScheduled = [] },
  } = useSelector((state: IRootState) => state.scheduleInterview);

  const scheduleView = listScheduled.find(
    (element) => element?._id === scheduleInterviewId,
  );

  useEffect(() => {
    if (scheduleView?.isConfirmFromReceiver === true) {
      setIsConfirm(true);
    }
    if (scheduleView?.status === "canceled") {
      setIsRefused(true);
    }
    if (scheduleView?.status === "expired") {
      setIsExpired(true);
    }
  }, [scheduleView]);

  useEffect(() => {
    if (actionSuccess) {
      getScheduledInterview();
      open && setOpen(false);
    }
  }, [actionSuccess]);

  const getScheduledInterview = () => {
    const payload: IGetAllScheduleInterview = {
      filterScheduleInterview: {
        receiver: currentUser?.userInfo?._id,
        recruitment: recruitment?._id,
      },
    };
    dispatch(getAllScheduleInterview(payload));
  };

  const confirmTheScheduleInterviewAPI = (scheduleInterviewId: string) => {
    const payload: IConfirmTheScheduleInterview = {
      id: scheduleInterviewId,
    };
    dispatch(confirmTheScheduleInterview(payload));
  };

  const cancelTheScheduleInterviewAPI = (scheduleInterviewId: string) => {
    const payload: ICancelTheScheduleInterview = {
      id: scheduleInterviewId,
    };
    dispatch(cancelTheScheduleInterview(payload));
  };

  const handleConfirm = () => {
    confirmTheScheduleInterviewAPI(scheduleInterviewId);
    onClose();
  };

  const handleRefuse = () => {
    cancelTheScheduleInterviewAPI(scheduleInterviewId);
    onClose();
  };

  return (
    <ScheduleInterviewDialogContainer>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        className="z-50 rounded-none relative"
      >
        <Container>
          <Title>{t("common:schedule-interview.schedule")}</Title>

          <ScheduleInterviewBox>
            {listScheduled && (
              <div className="flex flex-col gap-y-2 mb-4">
                {scheduleView?.receiver?._id === currentUser?.userInfo?._id && (
                  <>
                    <Input
                      label={t("common:schedule-interview.interview-position")}
                      value={scheduleView?.positionInterview}
                      disabled
                    />
                    <Input
                      label={t("common:schedule-interview.interview-method")}
                      value={scheduleView?.scheduleType}
                      disabled
                    />
                    <Input
                      label={t("common:schedule-interview.interview-date")}
                      value={formatDate(scheduleView?.scheduleTime)}
                      disabled
                    />
                    <Input
                      label={t("common:schedule-interview.interview-time")}
                      value={formatDateWithTime(scheduleView?.scheduleTime)}
                      disabled
                    />
                    <Input
                      label={t("common:schedule-interview.interview-location")}
                      value={scheduleView?.scheduleLocation}
                      disabled
                    />
                    <Input
                      label={t("common:schedule-interview.interviewer")}
                      value={scheduleView?.interviewerName}
                      disabled
                    />
                    <Input
                      label={t("common:schedule-interview.phone-number")}
                      value={scheduleView?.interviewerPhone}
                      disabled
                    />
                    <Input
                      label={t("common:schedule-interview.email")}
                      value={scheduleView?.interviewerEmail}
                      disabled
                    />
                    {isRefused ? (
                      <ButtonWrapper>
                        <Button
                          primary
                          className="px-2"
                          style={{
                            opacity: 0.5,
                            pointerEvents: "none",
                          }}
                        >
                          Lịch phỏng vấn đã bị hủy
                        </Button>
                      </ButtonWrapper>
                    ) : null}
                    {isExpired ? (
                      <ButtonWrapper>
                        <Button
                          primary
                          className="px-2"
                          style={{
                            opacity: 0.5,
                            pointerEvents: "none",
                          }}
                        >
                          Lịch phỏng vấn đã hết hạn
                        </Button>
                      </ButtonWrapper>
                    ) : null}
                    {!isExpired && !isRefused && (
                      <ButtonWrapper>
                        <Button
                          type="submit"
                          onClick={handleRefuse}
                          className="w-15 border border-solid border-primary"
                        >
                          {t("common:schedule-interview.refuse")}
                        </Button>

                        <Button
                          primary
                          type="submit"
                          className="w-15"
                          onClick={handleConfirm}
                          style={{
                            opacity: isConfirm ? 0.5 : 1,
                            pointerEvents: isConfirm ? "none" : "initial",
                          }}
                        >
                          {!isConfirm
                            ? t("common:schedule-interview.confirm")
                            : t("common:schedule-interview.confirmed")}
                        </Button>
                      </ButtonWrapper>
                    )}
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

export default ScheduleInterviewDialog;
