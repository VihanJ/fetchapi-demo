package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class DemoRestController {

    ArrayList<String> list;

    public DemoRestController() {
        list = new ArrayList<String>();
        list.add("meme");
        list.add("like");
        list.add("subscribe");
    }

    @GetMapping("/demo")
    public ArrayList<String> returnData() {
        return list;
    }

    @PutMapping("/demo/add")
    public ArrayList<String> returnAddedData(@RequestBody ListElement listelement) {

        String element = listelement.getElement();


        System.out.println("Element:" +element);
        if (element!=null&&!element.equals("")) {

            list.add(listelement.getElement());
        }
        return list;

    }

    @DeleteMapping("/demo/deleteElement")
    public ArrayList<String> returnDataWithDelete() {

        int index = list.size()-1;

        if (index >= 0){
            list.remove(list.size()-1);

        }


        return list;
    }


}
