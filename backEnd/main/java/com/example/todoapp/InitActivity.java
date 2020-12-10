package com.example.todoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

public class InitActivity extends AppCompatActivity {
        private static final int GOTO_HOME_PAGE=0;
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            WindowManager.LayoutParams localLayoutParams = getWindow().getAttributes();
            requestWindowFeature(Window.FEATURE_NO_TITLE);
            setContentView(R.layout.activity_init);
            getSupportActionBar().hide();
            mHandler.sendEmptyMessageDelayed(GOTO_HOME_PAGE, 1000);//1秒后跳转
        }
        private Handler mHandler=new Handler(){
            public void handleMessage(android.os.Message msg) {
                switch(msg.what){
                    case GOTO_HOME_PAGE:
                        Intent intent=new Intent(InitActivity.this,MainActivity.class);//跳转到主界面
                        startActivity(intent);
                        finish();
                        break;
                    default:
                        break;
                }
            };
        };

}