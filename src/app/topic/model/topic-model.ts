export class TopicModel {
  public id: string;
  public author: object = {
    loginname: '',
    avatar_url: ''
  };
  public author_id: string;
  public content: string;
  public create_at: string;
  public good: boolean;
  public is_collect: boolean;
  public last_reply_at: string;
  public replies: any = [];
  public reply_count: number;
  public tab: string;
  public top: boolean;
  public visit_count: number;
}
