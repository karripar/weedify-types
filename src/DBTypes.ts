type UserLevel = {
  user_level_id: number;
  level_name: "Admin" | "User" | "Guest";
};

type User = {
  user_id: number;
  username: string;
  password_hash: string;
  email: string;
  bio: string | null;
  user_level_id: number;
  created_at: Date | string;
};

type UserWithUnhashedPassword = Omit<User, "password_hash"> & {
  password: string;
};

type Follow = {
  follow_id: number;
  follower_id: number;
  followed_id: number;
  created_at?: Date | string;
};

type Notification = {
  notification_id: number;
  user_id: number;
  notification_text: string;
  is_read: boolean;
  notification_type_id: number;
  is_archived: boolean;
  created_at: Date | string;
};

type NotificationType = {
  notification_type_id: number;
  notification_type_name: string;
};

type MediaItem = {
  media_id: number;
  user_id: number;
  filename: string;
  thumbnail: string | null;
  coordinates_id: number | null;
  filesize: number;
  media_type: string;
  title: string;
  description: string | null;
  created_at: Date | string;
  screenshots: string[] | null;
};

type Coordinates = {
  coordinates_id: number;
  latitude: number;
  longitude: number;
  location_name: string;
};

type MediaItemWithFollower = MediaItem & {
  follower_id: number;
};

type Comment = {
  comment_id: number;
  media_id: number;
  user_id: number;
  reference_comment_id: number | null;
  comment_text: string;
  created_at: Date;
};

type CommentWithUsername = Comment & { username: string };

type CommentWithReplies = CommentWithUsername & {
  replies: CommentWithReplies[];
};

type CommentWithUsernameAndReplies = CommentWithUsername & {
  replies: CommentWithUsername[];
};

type Like = {
  like_id: number;
  media_id: number;
  user_id: number;
  created_at: Date;
};

type Rating = {
  rating_id: number;
  media_id: number;
  user_id: number;
  rating_value: number;
  created_at: Date;
};

type Tag = {
  tag_id: number;
  tag_name: string;
};

type Favorite = {
  favorite_id: number;
  user_id: number;
  media_id: number;
  created_at: Date | string;
};

type MediaTag = {
  material_tag_id: number;
  material_id: number;
  tag_id: number;
};

type TagResult = MediaTag & Tag;
type UploadResult = {
  message: string;
  data?: {
    image: string;
  };
};

type MediaRating = {
  media_id: number;
  title: string;
  avg_rating: number | null;
};

type MediaComment = {
  media_id: number;
  title: string;
  comment_count: number;
};

type UserActivity = {
  user_id: number;
  username: string;
  media_count: number;
  comment_count: number;
  rating_count: number;
};

type UserNotification = {
  user_id: number;
  username: string;
  notification_count: number;
  unread_count: number;
};

type LatestNotification = {
  notification_id: number;
  user_id: number;
  notification_text: string;
  notification_type_name: string;
  is_read: boolean;
  created_at: Date | string;
  username: string;
};

type LatestMedia = {
  media_id: number;
  title: string;
  user_id: number;
  description: string | null;
  created_at: Date | string;
  username: string;
};

type MostLikedMedia = Pick<
  MediaItem,
  | "media_id"
  | "filename"
  | "filesize"
  | "media_type"
  | "title"
  | "description"
  | "created_at"
> &
  Pick<User, "user_id" | "username" | "email" | "created_at"> & {
    likes_count: bigint;
  };

type Credentials = Pick<UserWithUnhashedPassword, "email" | "password">;

type RegisterCredentials = Pick<
  UserWithUnhashedPassword,
  "username" | "email" | "password"
>;

type AuthContextType = {
  user: UserWithNoPassword | null;
  handleLogin: (credentials: Credentials) => void;
  handleLogout: () => void;
  handleAutoLogin: () => void;
};

type UserWithLevel = Omit<User, "user_level_id"> &
  Pick<UserLevel, "level_name">;

type UserWithNoSensitiveInfo = Omit<UserWithNoPassword, "email">;

type UserWithNoPassword = Omit<UserWithLevel, "password_hash">;

type UserWithProfilePicture = UserWithNoPassword & {
  filename: string;
};

type TokenContent = Pick<User, "user_id"> & Pick<UserLevel, "level_name">;

type MediaItemWithOwner = MediaItem & Pick<User, "username">;

type FileInfo = {
  filename: string;
  user_id: number;
};

type MediaResponse = {
  message: string;
  media_id: number;
};

type TagResponse = {
  message: string;
  tags: Tag[];
};

type EditedProfile = {
  username: string;
  bio: string;
};

type ProfilePicture = {
  profile_picture_id: number;
  user_id: number;
  filename: string;
  media_type: string;
  filesize: number;
  created_at: Date | string;
};

export type {
  UserLevel,
  User,
  MediaItem,
  Comment,
  Like,
  Rating,
  Tag,
  MediaTag,
  TagResult,
  UploadResult,
  MediaRating,
  UserWithLevel,
  UserWithNoPassword,
  TokenContent,
  MediaItemWithOwner,
  FileInfo,
  Notification,
  NotificationType,
  Follow,
  Coordinates,
  UserActivity,
  UserNotification,
  LatestNotification,
  LatestMedia,
  MostLikedMedia,
  MediaItemWithFollower,
  UserWithUnhashedPassword,
  Favorite,
  MediaComment,
  Credentials,
  RegisterCredentials,
  AuthContextType,
  CommentWithUsername,
  CommentWithReplies,
  CommentWithUsernameAndReplies,
  MediaResponse,
  TagResponse,
  UserWithNoSensitiveInfo,
  EditedProfile,
  ProfilePicture,
  UserWithProfilePicture,
};
