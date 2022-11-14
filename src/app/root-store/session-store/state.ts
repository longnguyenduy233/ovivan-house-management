export interface SessionState {
    session?: {
      token: string;
    };
    isLoading: boolean;
    error?: Error;
  }