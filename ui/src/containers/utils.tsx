import { Notification } from "@contentstack/venus-components";
import { ShowDetailsButton } from "./common/components/show-details";

/**
 *  Shows notifications
 * @param text the text of the notification
 * @param description  the description of the notification
 * @param type the type of notification
 * @param cta  whether there's a call to action in the notification
 */
export function showNotification(text: string, description: string, type: string, cta?: any) {
  const notificationProps: any = {
    notificationContent: {
      text: text,
      description: description,
    },
    notificationProps: {
      autoClose: true,
      position: "top-center",
    },
    type: type,
  };
  if (cta) {
    notificationProps.cta = cta;
  }
  Notification(notificationProps);
}

/**
 *  Helper function to show successful notifications
 * @param text
 * @param description
 */
export function showSuccess(text: string, description?: string) {
  showNotification(text, description || "", "success");
}

/**
 *  Helper function to show successful notifications with a callback handler for the "Details" button
 * @param text
 * @param handler
 * @param description
 */
export function showSuccessWithDetails(text: string, handler: () => void, description?: string) {
  showNotification(text, description || "", "success", <ShowDetailsButton type={"success"} handler={handler} />);
}

/**
 *  Helper function to show error notifications with a callback handler for the "Details" button
 * @param text
 * @param handler
 * @param description
 */
export function showErrorWithDetails(text: string, handler: () => void, description?: string) {
  showNotification(text, description || "", "error", <ShowDetailsButton type={"danger"} handler={handler} />);
}

/**
 * Helper function to show error notifications
 * @param text
 * @param description
 */

export function showError(text: string, description?: string) {
  showNotification(text, description || "", "error");
}

/**
 * Helper function to show notifications
 * @param text
 * @param description
 */
export function showMessage(text: string, description?: string) {
  showNotification(text, description || "", "message");
}
