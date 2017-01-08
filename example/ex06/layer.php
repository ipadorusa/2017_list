<?php
/**
 * Created by PhpStorm.
 * User: kimwoosuk
 * Date: 2017. 1. 8.
 * Time: 15:16
 */




<style>
	.modal-header, .modal-body, .modal-footer{color: black;text-shadow: none;}
	#msl-list{color:#aaa}
	.black{color:#000; font-weight:bold;}
    .header {margin-top:10px;}
	.header td{height:30px; font-weight:bold; color:#000}
	.h_fire{background-color:#F15F5F}
	.h_water{background-color:#6799FF}
	.h_wood{background-color:#86E57F}
	.h_light{background-color:#E5D85C}
	.h_dark{background-color:#F361DC}

	.body {border-bottom:1px solid #aaa;}
                            .body td{color:#000}
                                </style>


<!-- header -->
<div class="modal-header">
	<!-- header title -->
	<h4 id="msl-title" class="modal-title"></h4>
</div>


<!-- body -->
<div class="modal-body">
	<br>
	<span id="msl-content"></span>
	<br><br>
</div>


<!-- Footer -->
<div class="modal-footer">
	<span id="msl-list"></span><br>
	<button type="button" class="btn btn-default" onclick="close_layer();" data-dismiss="modal">닫기</button>
</div>





<script src="js/skill.js"></script>
<script src="js/starmon.js"></script>
<script>
	var name = '';
	var option = '';
	var lsk = '';
	var sk3 = '';
	var sk5 = '';


//타이틀
	var title = "";
	if(name) title = name.split("_")[0];
    else if(lsk) title = lsk.split("_")[0];
    else if(sk3) title = sk3.split("_")[0];
    else if(sk5) title = sk5.split("_")[0];
	$("#msl-title").html(title);


//내용
	var content = "";
	if(name){
        var mon = get_starmon(name, option);
        var el = mon.속성;
        var lv = mon.태생;
        var name1 = mon.진화1;
        var name2 = mon.진화2;
        var name3 = mon.진화3;
        content = content + "속성 : "+el+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        content = content + "태생 : "+lv+"<br>";
        content = content + "1진화 : "+name1+"<br>";
        content = content + "2진화 : "+name2+"<br>";
        content = content + "3진화 : "+name3+"<br>";
    }
    else if(lsk) content = get_skill_contents(lsk);
    else if(sk3) content = get_skill_contents(sk3);
    else if(sk5) content = get_skill_contents(sk5);
	$("#msl-content").html(content);

//리스트
	var list_content = ""
	var list;
	if(name){

        //리스트테이블
        list_content=list_content+"		<table style='width:100%;'> ";
        list_content=list_content+"			<colgroup> ";
        list_content=list_content+"				<col style='width:150px;'/> ";
        list_content=list_content+"				<col style='width:60px;'/> ";
        list_content=list_content+"				<col style='width:150px;'/> ";
        list_content=list_content+"				<col style='width:150px;'/> ";
        list_content=list_content+"				<col style='width:150px;'/> ";
        list_content=list_content+"				<col style='width:150px;'/> ";
        list_content=list_content+"			</colgroup> ";

        starmon = get_starmon(name,option);
        list = get_starmon_stat(starmon.진화1,option);
        list_content=list_content+"			<tr class='header h_"+get_css_element(option)+"'> ";
        list_content=list_content+"				<td align='center' rowspan='"+(list.length+1)+"'>"+starmon.진화1+"</td> ";
		list_content=list_content+"				<td>MAXLV</td> ";
		list_content=list_content+"				<td>체력</td> ";
		list_content=list_content+"				<td>공격력</td> ";
		list_content=list_content+"				<td>방어력</td> ";
		list_content=list_content+"				<td>회복력</td> ";
		list_content=list_content+"			</tr> ";
		for(var i=0; i<list.length; i++){
            var stat = list[i];
            list_content=list_content+"			<tr class='body'> ";
            list_content=list_content+"				<td>"+stat.MAXLV+"</td> ";
            list_content=list_content+"				<td>"+stat.체력+"</td> ";
            list_content=list_content+"				<td>"+stat.공격력+"</td> ";
            list_content=list_content+"				<td>"+stat.방어력+"</td> ";
            list_content=list_content+"				<td>"+stat.회복력+"</td> ";
            list_content=list_content+"			</tr> ";
        }

		list = get_starmon_stat(starmon.진화2,option);
		list_content=list_content+"			<tr class='header h_"+get_css_element(option)+"'> ";
		list_content=list_content+"				<td align='center' rowspan='"+(list.length+1)+"'>"+starmon.진화2+"</td> ";
		list_content=list_content+"				<td>MAXLV</td> ";
		list_content=list_content+"				<td>체력</td> ";
		list_content=list_content+"				<td>공격력</td> ";
		list_content=list_content+"				<td>방어력</td> ";
		list_content=list_content+"				<td>회복력</td> ";
		list_content=list_content+"			</tr> ";
		for(var i=0; i<list.length; i++){
            var stat = list[i];
            list_content=list_content+"			<tr class='body'> ";
            list_content=list_content+"				<td>"+stat.MAXLV+"</td> ";
            list_content=list_content+"				<td>"+stat.체력+"</td> ";
            list_content=list_content+"				<td>"+stat.공격력+"</td> ";
            list_content=list_content+"				<td>"+stat.방어력+"</td> ";
            list_content=list_content+"				<td>"+stat.회복력+"</td> ";
            list_content=list_content+"			</tr> ";
        }

		list = get_starmon_stat(starmon.진화3,option);
		list_content=list_content+"			<tr class='header h_"+get_css_element(option)+"'> ";
		list_content=list_content+"				<td align='center' rowspan='"+(list.length+1)+"'>"+starmon.진화3+"</td> ";
		list_content=list_content+"				<td>MAXLV</td> ";
		list_content=list_content+"				<td>체력</td> ";
		list_content=list_content+"				<td>공격력</td> ";
		list_content=list_content+"				<td>방어력</td> ";
		list_content=list_content+"				<td>회복력</td> ";
		list_content=list_content+"			</tr> ";
		for(var i=0; i<list.length; i++){
            var stat = list[i];
            list_content=list_content+"			<tr class='body'> ";
            list_content=list_content+"				<td>"+stat.MAXLV+"</td> ";
            list_content=list_content+"				<td>"+stat.체력+"</td> ";
            list_content=list_content+"				<td>"+stat.공격력+"</td> ";
            list_content=list_content+"				<td>"+stat.방어력+"</td> ";
            list_content=list_content+"				<td>"+stat.회복력+"</td> ";
            list_content=list_content+"			</tr> ";
        }

		list_content=list_content+"		</table> ";
	}

	if(lsk || sk3 || sk5){
        if(lsk) list = get_skill_list(lsk);
        else if(sk3) list = get_skill_list(sk3);
        else if(sk5) list = get_skill_list(sk5);
        for(var i=0 ; i<list.length ; i++){
            if(content == list[i].설명){
                list_content = list_content + "<span class='black'>"+list[i].설명+"</span><br>";
            }else{
                list_content = list_content + list[i].설명+"<br>";
            }
        }
	}
	$("#msl-list").html(list_content);

</script>