package com.example.todoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Build;
import android.os.Bundle;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.Toast;

import java.text.ParseException;
import java.util.ArrayList;
import model.Note;
import presenter.MyDatabase;

public class MainActivity extends AppCompatActivity {
    private WebView wb;
    ArrayList<Note> arrayList;
    MyDatabase myDatabase;

    @SuppressLint({"JavascriptInterface", "SetJavaScriptEnabled"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //隐藏app标题
        getSupportActionBar().hide();
        //创建数据库
        myDatabase = new MyDatabase(this);
        //获取webview对象
        wb = (WebView) findViewById(R.id.wb);
        wb.getSettings().setJavaScriptEnabled(true);
        wb.getSettings().setDatabaseEnabled(true);
        wb.loadUrl("file:///android_asset/index.html");

        //设置WebChromeClient,处理网页中的各种js事件
        wb.setWebChromeClient(new MyWebChromeClient());
        //删除超过三天的已完成事件
//        try {
//            myDatabase.deleteOverdue();
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
        //插入测试数据
        //myDatabase.insertTest();

        //暴露一个java对象给js，使得js可以直接调用方法
        wb.addJavascriptInterface(this,"android");
        //设置沉浸式StatusBar
        WindowManager.LayoutParams localLayoutParams = getWindow().getAttributes();
        localLayoutParams.flags = (WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS | localLayoutParams.flags);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            getWindow().getDecorView().setSystemUiVisibility(
                    wb.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN|wb.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
        }

    }
    private class MyWebChromeClient extends WebChromeClient {
        @Override
        public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
            return super.onJsAlert(view, url, message, result);
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        System.out.println(myDatabase.nowId());
    }

    //查询所有note
    @JavascriptInterface
    public  String getNotesJson(){
        StringBuilder res = new StringBuilder("[");
        ArrayList<Note> notes = myDatabase.getNotes();
        for (int i = 0; i <notes.size() ; i++) {
            res.append(notes.get(i).toString());
            if(i!=notes.size()-1)
                res.append(',');
        }
        res.append("]");
        return res.toString();
    }
    @JavascriptInterface
    public int nowID(){
        int id = myDatabase.nowId();
        return id;
    }

    //给一个id，给在表中的位置，然后把这个删除
    @JavascriptInterface
    public int delNotetodo(String id){
        //System.out.print("删除的id："+id);
        int a=myDatabase.delNotetodo(Integer.valueOf(id));
        //System.out.println("删除所在位置："+a);
        return a;
    }


    //添加一条note
    @JavascriptInterface
    public void pushNotestodo(String title){
        myDatabase.addNote(new Note(title,"false"));
    }

    //修改note完成状态,如果completed是true，改为false；反之，改为true
    @JavascriptInterface
    public void updateNote(String id,String completed){
        myDatabase.updateNote(Integer.valueOf(id),completed);
        //System.out.println("修改id:"+id+",com："+completed+"最大ID："+nowID());
    }

    //删除一个note
    @JavascriptInterface
    public void deleteNote(int id){
        myDatabase.deleteNote(id);
    }

    //输入空提示
    @JavascriptInterface
    public void nullWarning(){
        Toast.makeText(MainActivity.this,"输入不能为空!",Toast.LENGTH_SHORT).show();
    }

    //输入全为空格提示
    @JavascriptInterface
    public void blackSpaceWarning(){
        Toast.makeText(MainActivity.this,"输入不能全为空格!",Toast.LENGTH_SHORT).show();
    }
}
