import type { SettingTabConfig } from "@/lib/types";

export const getMainRoute = (workspaceId: string) => {
  return [
    {
      label: "Dashboard",
      path: `/app/${workspaceId}`,
      isDisabled: false,
    },
    {
      label: "Settings",
      path: `/app/${workspaceId}/settings/general`,
      isDisabled: false,
    },
  ];
};
