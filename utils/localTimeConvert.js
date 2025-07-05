import { DateTime } from "luxon";

// use to convert time from UTC to Vietname UTC '+7:00' for display

export const getVietnamTime = () => {
    return DateTime.now().setZone('Asia/Ho_Chi_Minh').toJSDate();
}