export const getRandomNotificationType = () =>
  (["error", "info", "neutral", "success", "warning"] as const)[Date.now() % 5];

export const notify = ({ innerHtml }: { innerHtml: string }) => {
  const bqNotification = document.createElement("bq-notification");

  bqNotification.innerHTML = innerHtml;
  bqNotification.type = getRandomNotificationType();
  bqNotification.autoDismiss = true;

  document.body.appendChild(bqNotification);

  bqNotification.toast();
};
