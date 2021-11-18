var names=new Array();
names[0]="Yake";
names[1]="Alex";
names[2]="Javier";
names[3]="Jamile";
names[4]="josue";
names[5]="jordan";
names[6]="jose";
names[7]="jordania";
names[8]="Yulissa";
names[9]="Nayeli";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("GoodBye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}