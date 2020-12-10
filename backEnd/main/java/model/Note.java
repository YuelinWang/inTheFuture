package model;

public class Note {
    private int id;      //事项id
    private int userId;  //用户id
    private String title;   //标题
    private String completed; //是否完成

    public Note(String title, String completed) {
        this.id=0;
        this.userId=1;
        this.title = title;
        this.completed = completed;
    }

    public Note(int id, int userId, String title, String completed) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }

    public int getId() { return id;    }

    public int getUserId() {  return userId;}

    public String getTitle() {
        return title;
    }

    public String getCompleted() {
        return completed;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\": " + id +
                ", \"userId\": " + userId +
                ", \"title\": \"" + title + '\"'  +
                ", \"completed\": " + completed  +
                "}";
    }
}
