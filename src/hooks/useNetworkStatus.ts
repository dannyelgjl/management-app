import { useNetInfo } from '@react-native-community/netinfo';

export function useNetworkStatus() {
  const netInfo = useNetInfo();
  const isUnknown = netInfo.isConnected === null;
  const isOnline = Boolean(
    netInfo.isConnected && netInfo.isInternetReachable !== false,
  );

  return {
    isOffline: !isUnknown && !isOnline,
    isOnline,
    isUnknown,
  };
}
