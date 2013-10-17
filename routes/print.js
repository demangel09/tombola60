var pdfkit = require('pdfkit');
var options = {};
options.size = 'FOLIO';

var print = module.exports = function(content,callback){
	var doc = new pdfkit(options);
	doc.fontSize(42);
	doc.registerFont('Cardo', 'fonts/OpenSans-CondBold.ttf')
	doc.font('Cardo');
	doc.image('./routes/template_75_v4.png', 0, 0,{width: 612, height: 459});
	doc.fontSize(42);
	
//Box A ARRAY 0 [0-5]
	//1st layer
	doc.text(content[0].box[0],119,41,{width:42,align:'center'});
	doc.text(content[0].box[1],168,41,{width:42,align:'center'});
	//2nd layer
	doc.text(content[0].box[2],119,97,{width:42,align:'center'});
	doc.text(content[0].box[3],168,97,{width:42,align:'center'});
	//3rd layer
	doc.text(content[0].box[4],119,154,{width:42,align:'center'});
	doc.text(content[0].box[5],168,154,{width:42,align:'center'});
	//game series
	doc.fontSize(12);
	doc.text("A1",147,213);
	doc.text(content[0].series,162,213);
//Box B ARRAY1 [0-8]
	doc.fontSize(42);
	//1st layer
	doc.text(content[1].box[0],229,41,{width:42,align:'center'});
	doc.text(content[1].box[1],280,41,{width:42,align:'center'});
	doc.text(content[1].box[2],329,41,{width:42,align:'center'});
	//2nd layer
	doc.text(content[1].box[3],229,97,{width:42,align:'center'});
	doc.text(content[1].box[4],280,97,{width:42,align:'center'});
	doc.text(content[1].box[5],329,97,{width:42,align:'center'});
	//3rd layer
	doc.text(content[1].box[6],229,154,{width:42,align:'center'});
	doc.text(content[1].box[7],280,154,{width:42,align:'center'});
	doc.text(content[1].box[8],329,154,{width:42,align:'center'});
	//game series
	doc.fontSize(12);
	doc.text("B2",280,213);
	doc.text(content[1].series,295,213);
//Box C ARRAY2 [0-12]
	doc.fontSize(42);
	//1st layer
	doc.text(content[2].box[0],391,41,{width:42,align:'center'});
	doc.text(content[2].box[1],440,41,{width:42,align:'center'});
	doc.text(content[2].box[2],490,41,{width:42,align:'center'});
	doc.text(content[2].box[3],537,41,{width:42,align:'center'});
	//2nd layer
	doc.text(content[2].box[4],391,97,{width:42,align:'center'});
	doc.text(content[2].box[5],440,97,{width:42,align:'center'});
	doc.text(content[2].box[6],490,97,{width:42,align:'center'});
	doc.text(content[2].box[7],537,97,{width:42,align:'center'});
	//3rd layer
	doc.text(content[2].box[8],391,154,{width:42,align:'center'});
	doc.text(content[2].box[9],440,154,{width:42,align:'center'});
	doc.text(content[2].box[10],490,154,{width:42,align:'center'});
	doc.text(content[2].box[11],537,154,{width:42,align:'center'});
	//game series
	doc.fontSize(13);
	doc.text("C3",468,213);
	doc.text(content[2].series,483,213);
//Box D ARRAY3 [0-16]
	doc.fontSize(42);
	//1st layer
	doc.text(content[3].box[0],34,253,{width:42,align:'center'});
	doc.text(content[3].box[1],81,253,{width:42,align:'center'});
	doc.text(content[3].box[2],131,253,{width:42,align:'center'});
	doc.text(content[3].box[3],181,253,{width:42,align:'center'});
	doc.text(content[3].box[4],229,253,{width:42,align:'center'});
	//2nd layer
	doc.text(content[3].box[5],34,312,{width:42,align:'center'});
	doc.text(content[3].box[6],81,312,{width:42,align:'center'});
	doc.text(content[3].box[7],131,312,{width:42,align:'center'});
	doc.text(content[3].box[8],181,312,{width:42,align:'center'});
	doc.text(content[3].box[9],229,312,{width:42,align:'center'});
	//3rd layer
	doc.text(content[3].box[10],34,367,{width:42,align:'center'});
	doc.text(content[3].box[11],81,367,{width:42,align:'center'});
	doc.text(content[3].box[12],131,367,{width:42,align:'center'});
	doc.text(content[3].box[13],181,367,{width:42,align:'center'});
	doc.text(content[3].box[14],229,367,{width:42,align:'center'});
	//game series
	doc.fontSize(12);
	doc.text("D4",132,425);
	doc.text(content[3].series,147,425);
//Box E ARRAY4 [0-12]
	doc.fontSize(42);

	doc.text(content[4].box[0],291,253,{width:42,align:'center'});
	doc.text(content[4].box[1],342,253,{width:42,align:'center'});
	doc.text(content[4].box[2],390,253,{width:42,align:'center'});
	doc.text(content[4].box[3],440,253,{width:42,align:'center'});
	doc.text(content[4].box[4],488,253,{width:42,align:'center'});
	doc.text(content[4].box[5],537,253,{width:42,align:'center'});
	
	doc.text(content[4].box[6],291,312,{width:42,align:'center'});
	doc.text(content[4].box[7],342,312,{width:42,align:'center'});
	doc.text(content[4].box[8],390,312,{width:42,align:'center'});
	doc.text(content[4].box[9],440,312,{width:42,align:'center'});
	doc.text(content[4].box[10],490,312,{width:42,align:'center'});
	doc.text(content[4].box[11],537,312,{width:42,align:'center'});
	
	doc.text(content[4].box[12],291,367,{width:42,align:'center'});
	doc.text(content[4].box[13],342,367,{width:42,align:'center'});
	doc.text(content[4].box[14],390,367,{width:42,align:'center'});
	doc.text(content[4].box[15],440,367,{width:42,align:'center'});
	doc.text(content[4].box[16],490,367,{width:42,align:'center'});
	doc.text(content[4].box[17],537,367,{width:42,align:'center'});

	doc.fontSize(12);
	doc.text("E5",407,425);
	doc.text(content[4].series,422,425);
//Box F
	doc.fontSize(42);
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 462)
		.lineTo(5, 462)
		.dash(5, {space: 10})
		.fillAndStroke("black");
	doc.image('./routes/template_75_v4.png', 0, 478,{width: 612, height: 459});
//	doc.font('Courier-Bold');
	
	//Box A
	doc.text(content[5].box[0],119,42+474,{width:42,align:'center'});
	doc.text(content[5].box[1],167,42+474,{width:42,align:'center'});
	
	doc.text(content[5].box[2],119,100+474,{width:42,align:'center'});
	doc.text(content[5].box[3],167,100+474,{width:42,align:'center'});
	
	doc.text(content[5].box[4],119,157+474,{width:42,align:'center'});
	doc.text(content[5].box[5],167,157+474,{width:42,align:'center'});
	
	doc.fontSize(12);
	doc.text("A1",147,218+474);
	doc.text(content[5].series,162,218+474);
//Box B
	doc.fontSize(42);
//Box B
	doc.text(content[6].box[0],232,42+474,{width:42,align:'center'});
	doc.text(content[6].box[1],280,42+474,{width:42,align:'center'});
	doc.text(content[6].box[2],329,42+474,{width:42,align:'center'});
	
	doc.text(content[6].box[3],232,100+474,{width:42,align:'center'});
	doc.text(content[6].box[4],280,100+474,{width:42,align:'center'});
	doc.text(content[6].box[5],329,100+474,{width:42,align:'center'});
	
	doc.text(content[6].box[6],232,157+474,{width:42,align:'center'});
	doc.text(content[6].box[7],280,157+474,{width:42,align:'center'});
	doc.text(content[6].box[8],329,157+474,{width:42,align:'center'});
	
	doc.fontSize(12);
	doc.text("B2",280,218+474);
	doc.text(content[6].series,292,218+474,{width:42,align:'center'});
//Box C
	doc.fontSize(42);
	doc.text(content[7].box[0],391,42+474,{width:42,align:'center'});
	doc.text(content[7].box[1],440,42+474,{width:42,align:'center'});
	doc.text(content[7].box[2],490,42+474,{width:42,align:'center'});
	doc.text(content[7].box[3],537,42+474,{width:42,align:'center'});

	doc.text(content[7].box[4],391,100+474,{width:42,align:'center'});
	doc.text(content[7].box[5],440,100+474,{width:42,align:'center'});
	doc.text(content[7].box[6],490,100+474,{width:42,align:'center'});
	doc.text(content[7].box[7],537,100+474,{width:42,align:'center'});
	
	doc.text(content[7].box[8],391,157+474,{width:42,align:'center'});
	doc.text(content[7].box[9],440,157+474,{width:42,align:'center'});
	doc.text(content[7].box[10],490,157+474,{width:42,align:'center'});
	doc.text(content[7].box[11],537,157+474,{width:42,align:'center'});

	doc.fontSize(12);
	doc.text("C3",468,218+474);
	doc.text(content[7].series,483,218+474);
//Box D
	doc.fontSize(42);

	doc.text(content[8].box[0],32,258+472,{width:42,align:'center'});
	doc.text(content[8].box[1],82,258+472,{width:42,align:'center'});
	doc.text(content[8].box[2],130,258+472,{width:42,align:'center'});
	doc.text(content[8].box[3],180,258+472,{width:42,align:'center'});
	doc.text(content[8].box[4],229,258+472,{width:42,align:'center'});

	doc.text(content[8].box[5],32,317+472,{width:42,align:'center'});
	doc.text(content[8].box[6],82,317+472,{width:42,align:'center'});
	doc.text(content[8].box[7],130,317+472,{width:42,align:'center'});
	doc.text(content[8].box[8],180,317+472,{width:42,align:'center'});
	doc.text(content[8].box[9],229,317+472,{width:42,align:'center'});

	doc.text(content[8].box[10],32,373+472,{width:42,align:'center'});
	doc.text(content[8].box[11],82,373+472,{width:42,align:'center'});
	doc.text(content[8].box[12],130,373+472,{width:42,align:'center'});
	doc.text(content[8].box[13],180,373+472,{width:42,align:'center'});
	doc.text(content[8].box[14],229,373+472,{width:42,align:'center'});

	doc.fontSize(12);
	doc.text("D4",132,432+472);
	doc.text(content[8].series,147,432+472);
//Box E
	doc.fontSize(42);

	doc.text(content[9].box[0],290,258+472,{width:42,align:'center'});
	doc.text(content[9].box[1],341,258+472,{width:42,align:'center'});
	doc.text(content[9].box[2],390,258+472,{width:42,align:'center'});
	doc.text(content[9].box[3],439,258+472,{width:42,align:'center'});
	doc.text(content[9].box[4],490,258+472,{width:42,align:'center'});
	doc.text(content[9].box[5],537,258+472,{width:42,align:'center'});
	
	doc.text(content[9].box[6],290,317+472,{width:42,align:'center'});
	doc.text(content[9].box[7],341,317+472,{width:42,align:'center'});
	doc.text(content[9].box[8],390,317+472,{width:42,align:'center'});
	doc.text(content[9].box[9],439,317+472,{width:42,align:'center'});
	doc.text(content[9].box[10],490,317+472,{width:42,align:'center'});
	doc.text(content[9].box[11],537,317+472,{width:42,align:'center'});
	
	doc.text(content[9].box[12],290,373+472,{width:42,align:'center'});
	doc.text(content[9].box[13],341,373+472,{width:42,align:'center'});
	doc.text(content[9].box[14],390,373+472,{width:42,align:'center'});
	doc.text(content[9].box[15],439,373+472,{width:42,align:'center'});
	doc.text(content[9].box[16],490,373+472,{width:42,align:'center'});
	doc.text(content[9].box[17],537,373+472,{width:42,align:'center'});
	doc.fontSize(12);
	doc.text("E5",407,432+472);
	doc.text(content[9].series,422,432+472);
//Box F
	doc.fontSize(42);
	
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 462)
		.lineTo(5, 462)
		.dash(5, {space: 10})
		.fillAndStroke("red");
	doc.fontSize(16);
	
	doc.rotate(270,{origin:[78,553]}).text(content[9].prodid+"                                                                                                              "+content[9].prodid,75,553);
//	doc.rotate(0,{origin:[100,87+567]}).text(content[9].prodid,75,80);
	
	doc.write('printcards/v1'+content[9].prodid+" "+content[0].series+"-"+content[9].series+".pdf",function(){
		callback(null,content[9].prodid+" "+content[0].series+"-"+content[9].series+".pdf");
	});
};
