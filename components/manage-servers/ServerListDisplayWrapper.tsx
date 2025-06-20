// components/manage-servers/ServerListDisplayWrapper.tsx
"use client";

import React, { useState } from "react";
import { Server } from "@/lib/generated/prisma";
import { ServerListDisplay } from "./ServerListDisplay";
import { ConnectModal } from "./ConnectModal";

interface ServerListDisplayWrapperProps {
  initialServers: Server[];
}

export function ServerListDisplayWrapper({
  initialServers,
}: ServerListDisplayWrapperProps) {
  const [selectedServerForConnect, setSelectedServerForConnect] =
    useState<Server | null>(null);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleOpenConnectModal = (server: Server) => {
    setSelectedServerForConnect(server);
    setIsConnectModalOpen(true);
  };

  return (
    <>
      <ServerListDisplay
        servers={initialServers}
        onConnectAction={handleOpenConnectModal}
      />
      {selectedServerForConnect && (
        <ConnectModal
          isOpen={isConnectModalOpen}
          onOpenChangeAction={setIsConnectModalOpen}
          serverName={selectedServerForConnect.name}
        />
      )}
    </>
  );
}
