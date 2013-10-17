var pdfkit = require('pdfkit');
var options = {};
options.size = 'FOLIO';

var print = module.exports = function(content,callback){
	console.log("------------------------------------");
	console.log("value per content");
	console.log(content);
	console.log("------------------------------------");
	var doc = new pdfkit(options);
	doc.fontSize(32);
	doc.font('Times-Roman');
//	doc.font('Tw-Cen-MT-Condensed');
//	doc.registerFont('Cardo', 'fonts/FreeSerifBold.ttf')
//	doc.font('Cardo');
//	doc.image('./routes/Template3.PNG', 0, 0,{width: 615, height: 467});
	//Box A
	var m = 6;
	var yaxis = 0;
	var xaxis = 0;
	var boxList = ['A','B','C','D','E'];
	var boxNo = 0;
	doc.fontSize(12);
	doc.text("Production",30,yaxis+50);
	doc.text("Date",45,yaxis+60);
	doc.text("Category",90,yaxis+50); //30
	doc.text("Production",140,yaxis+50); //80
	doc.text("Id",160,yaxis+60)
	doc.text("Series",200,yaxis+50); //140
	//doc.text("Production",175,yaxis+30);
	//doc.text("Date",190,yaxis+40);
	doc.text("Box",235,yaxis+50);
	for(var i =0; i<content.length; i++){
		yaxis += 10;
		doc.fontSize(9);
		doc.text(content[i].prod_date,40,yaxis+70);
		doc.text(content[i].category,110,yaxis+70); //50
		doc.text(content[i].prodid,150,yaxis+70); //90
		doc.text(content[i].series,200,yaxis+70); //140
		//doc.text(content[i].prod_date,180,yaxis+50); //180
		doc.text(boxList[boxNo],240,yaxis+70); //240
		//doc.text("           ",130,yaxis+30,{width:35,align:'center'})
		for(var j = 0;j<m;j++){
			xaxis += 15;
			doc.text(content[i].box[j],xaxis+265,yaxis+70,{width:35,align:'center'});
		//	if(j != 5){
		//		doc.text("-",xaxis+150,yaxis+30,{width:35,align:'center'})
		//	}
		}
		//doc.lineWidth(1);
		//doc.lineCap('butt')
		//	.moveTo(607, 468)
		//	.lineTo(5, 468)
		//	.dash(5, {space: 10})
		//	.fillAndStroke("black");
		xaxis = 0;
		m += 3;
		if(m > 18){
			m=6;
		}
		boxNo+=1;
		if(boxNo > 4){
			boxNo = 0;
		}
	}
	//doc.rotate(270,{origin:[100,555]}).text(content[content.length-1].prodid+"                                                                                                                                    "+content[content.length-1].prodid,75,555);
	//doc.rotate(0,{origin:[100,80+567]}).text(content[9].prodid,75,80+467);
	
	doc.write("masterlist/v1"+content[content.length-1].prodid+" "+content[0].series+"-"+content[content.length-1].series+".pdf",function(){
		callback(null,content[content.length-1].prodid+" "+content[0].series+"-"+content[content.length-1].series+".pdf");
	});
};
