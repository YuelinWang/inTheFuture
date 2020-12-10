package presenter;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import model.Note;

public class MyDatabase {
    Context context;
    MySQLiteOpenHelper mySQLiteOpenHelper;
    SQLiteDatabase mydatabase;

    public MyDatabase(Context context){
        this.context = context;
        mySQLiteOpenHelper = new MySQLiteOpenHelper(context);
    }
    public void insertTest(){
        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,1,'第一条note','true','2020-12-04 11:41:31');");
        mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,1,'2222','false','2020-12-04 11:41:31');");
        mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,1,'3333','true','2020-12-05 21:41:31');");
        mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,1,'4444','false','2020-12-05 21:41:31');");
        mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,1,'55','false','2020-12-09 11:41:31');");
        mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,1,'666','true','2020-12-09 11:41:31');");

    }

    //删除超过三天的已完成事件
    public void deleteOverdue() throws ParseException {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        String nowDate = df.format(new Date());// new Date()为获取当前系统时间
        Date toDate = df.parse(nowDate);
        long to = toDate.getTime();

        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        Cursor cursor = mydatabase.rawQuery("select id,user_id,title,completed,createTime from mynotes",null);
        cursor.moveToFirst();
        while(!cursor.isAfterLast()){
            int id = cursor.getInt(cursor.getColumnIndex("id"));
            String completed = cursor.getString(cursor.getColumnIndex("completed"));
            String createDate = cursor.getString(cursor.getColumnIndex("createTime"));
            //如果时间已完成，且时间超过三天，删除该条记录
            Date fromDate = df.parse(createDate);
            long from = fromDate.getTime();
            /*小时差*/
            int hours = (int) ((to-from) / (1000 * 60 * 60));
            if(completed.equals("true")&&hours>=72){
                mydatabase.execSQL("delete from mynotes where id=?",new String[]{String.valueOf(id)});
            }
            cursor.moveToNext();
        }
        mydatabase.close();
    }

    //给一个id，给在表中的位置，然后把这个删除
    public int delNotetodo(int id){
        int pos=0;
        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        Cursor cursor = mydatabase.rawQuery("select * from mynotes",null);
        cursor.moveToFirst();
        while (!cursor.isAfterLast()){
            int ListId = cursor.getInt(cursor.getColumnIndex("id"));
            String title = cursor.getString(cursor.getColumnIndex("title"));
            if(ListId==id){
                mydatabase.execSQL("delete from mynotes where id=?",new String[]{String.valueOf(id)});
                return pos;
            }
            cursor.moveToNext();
            pos++;
        }
        mydatabase.close();
        return pos;
    }

    //查询所有note
    public ArrayList<Note> getNotes(){
        ArrayList<Note> arr = new ArrayList<Note>();
        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        Cursor cursor = mydatabase.rawQuery("select id,user_id,title,completed from mynotes",null);
        cursor.moveToFirst();
        while(!cursor.isAfterLast()){
            int id = cursor.getInt(cursor.getColumnIndex("id"));
            int userId = cursor.getInt(cursor.getColumnIndex("user_id"));
            String title = cursor.getString(cursor.getColumnIndex("title"));
            String completed = cursor.getString(cursor.getColumnIndex("completed"));
            Note note = new Note(id,userId,title,completed);
            arr.add(note);
            cursor.moveToNext();
        }
        mydatabase.close();
        return arr;
    }

    public int nowId(){
        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        Cursor cursor = mydatabase.rawQuery("select id from mynotes",null);
        cursor.moveToFirst();
        if(cursor.isAfterLast()){
            return 0;
        }else{
            cursor.moveToLast();
            int id = cursor.getInt(cursor.getColumnIndex("id"));
            return id;
        }
    }


    //插入数据
    public void addNote(Note note) {
        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        Cursor cursor = mydatabase.rawQuery("select * from mynotes", null);
        cursor.moveToFirst();
        if (cursor.isAfterLast()) {
            mydatabase.execSQL("DELETE FROM mynotes");
            mydatabase.execSQL("DELETE FROM sqlite_sequence WHERE name = 'mynotes';");
            mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(1,?,?,?,datetime('now','localtime'))", new String[]{String.valueOf(note.getUserId()), note.getTitle(), note.getCompleted()});
        } else {
            mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,?,?,?,datetime('now','localtime'))", new String[]{String.valueOf(note.getUserId()), note.getTitle(), note.getCompleted()});
        }
        //mydatabase.execSQL("insert into mynotes(id,user_id,title,completed,createTime)values(null,?,?,?,datetime('now','localtime'))", new String[]{String.valueOf(note.getUserId()), note.getTitle(), note.getCompleted()});
    }

    //更新数据
    public void updateNote(int id,String completed) {
        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        //mydatabase.execSQL("update mynotes set completed='"+completed+"' where id="+id+"");
        mydatabase.execSQL("update mynotes set completed=? where id=?", new String[]{completed, String.valueOf(id)});
    }

    //删除数据
    public void deleteNote(int id){
        mydatabase = mySQLiteOpenHelper.getWritableDatabase();
        mydatabase.execSQL("delete from mynotes where id=?",new String[]{String.valueOf(id)});
    }
}
