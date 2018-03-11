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

	}
	mychar.innerHTML = mojarname + classname;
}

