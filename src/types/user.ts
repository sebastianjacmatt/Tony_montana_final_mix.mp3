type User = {
  id: string;
  email: string;
  avatar_url: string;
  attributes: {
    name: string;
    sko: string;
    pace: number;
    bio: string;
    image: string;
  };
  username: string;
};

export type { User };
