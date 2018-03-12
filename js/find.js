function Findnumber()
{
	var x = document.getElementById("user").value;
	var mychar = document.getElementById("classn");
	var yearnum = x.substr(0,2);
	var mojar = x.substr(2,4);
	var classnum = x.substr(6,2);
	var mojarname;
	var mojarnum = parseInt(mojar);
	var classname = yearnum + "" + classnum;
	switch(mojarnum)
	{
		case 1101:
			mojarname = "算机";
			break;
		case 1102:
			mojarname = "通信";
			break;
		case 1103:
			mojarname = "软件";
			break;
		case 1104:
			mojarname = "数媒";
			break;
		case 1201:
			mojarname = "材化";
			break;
		case 1205:
			mojarname = "复材";
			break;
		case 1203:
			mojarname = "高材";
			break;
		case 1206:
			mojarname = "高材卓越";
			break;
		case 1202:
			mojarname = "化学";
			break;
		case 0101:
			mojarname = "化工";
			break;
		case 0104:
			mojarname = "化工卓越";
			break;
		case 0901:
			mojarname = "环工";
			break;
		case 0902:
			mojarname = "环科";
			break;
		case 0103:
			mojarname = "能源";
			break;
		case 0903:
			mojarname = "生工";
			break;
		case 1204:
			mojarname = "非金";
			break;
		case 0102:
			mojarname = "应化";
			break;
		case 0206:
			mojarname = "安工";
			break;
		case 0202:
			mojarname = "材料";
			break;

	}
	mychar.innerHTML = mojarname + classname;
}

