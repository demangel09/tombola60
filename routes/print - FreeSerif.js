var pdfkit = require('pdfkit');
var options = {};
options.size = 'FOLIO';

var print = module.exports = function(content,callback){
	var doc = new pdfkit(options);
	doc.fontSize(36);
	doc.registerFont('Cardo', 'fonts/FreeSerif.ttf')
	doc.font('Cardo');
	doc.image('./routes/template_75_v4.png', 0, 0,{width: 615, height: 467});
	doc.fontSize(36);
	
//Box A ARRAY 0 [0-5]
	//1st layer
	doc.text(content[0].box[0],125,50,{width:36,align:'center'});
	doc.text(content[0].box[1],171,50,{width:36,align:'center'});
	//2nd layer
	doc.text(content[0].box[2],125,107,{width:36,align:'center'});
	doc.text(content[0].box[3],171,107,{width:36,align:'center'});
	//3rd layer
	doc.text(content[0].box[4],125,163,{width:36,align:'center'});
	doc.text(content[0].box[5],171,163,{width:36,align:'center'});
	//game series
	doc.fontSize(12);
	doc.text(content[0].series,167,217);
//Box B ARRAY1 [0-8]
	doc.fontSize(36);
	//1st layer
	doc.text(content[1].box[0],234,50,{width:36,align:'center'});
	doc.text(content[1].box[1],283,50,{width:36,align:'center'});
	doc.text(content[1].box[2],330,50,{width:36,align:'center'});
	//2nd layer
	doc.text(content[1].box[3],234,107,{width:36,align:'center'});
	doc.text(content[1].box[4],283,107,{width:36,align:'center'});
	doc.text(content[1].box[5],330,107,{width:36,align:'center'});
	//3rd layer
	doc.text(content[1].box[6],234,163,{width:36,align:'center'});
	doc.text(content[1].box[7],283,163,{width:36,align:'center'});
	doc.text(content[1].box[8],330,163,{width:36,align:'center'});
	//game series
	doc.fontSize(12);
	doc.text(content[1].series,321,217);
//Box C ARRAY2 [0-12]
	doc.fontSize(36);
	//1st layer
	doc.text(content[2].box[0],393,50,{width:36,align:'center'});
	doc.text(content[2].box[1],443,50,{width:36,align:'center'});
	doc.text(content[2].box[2],490,50,{width:36,align:'center'});
	doc.text(content[2].box[3],541,50,{width:36,align:'center'});
	//2nd layer
	doc.text(content[2].box[4],393,107,{width:36,align:'center'});
	doc.text(content[2].box[5],443,107,{width:36,align:'center'});
	doc.text(content[2].box[6],490,107,{width:36,align:'center'});
	doc.text(content[2].box[7],541,107,{width:36,align:'center'});
	//3rd layer
	doc.text(content[2].box[8],393,163,{width:36,align:'center'});
	doc.text(content[2].box[9],443,163,{width:36,align:'center'});
	doc.text(content[2].box[10],490,163,{width:36,align:'center'});
	doc.text(content[2].box[11],541,163,{width:36,align:'center'});
	//game series
	doc.fontSize(13);
	doc.text(content[2].series,488,217);
//Box D ARRAY3 [0-16]
	doc.fontSize(36);
	//1st layer
	doc.text(content[3].box[0],37,267,{width:36,align:'center'});
	doc.text(content[3].box[1],86,267,{width:36,align:'center'});
	doc.text(content[3].box[2],134,267,{width:36,align:'center'});
	doc.text(content[3].box[3],184,267,{width:36,align:'center'});
	doc.text(content[3].box[4],233,267,{width:36,align:'center'});
	//2nd layer
	doc.text(content[3].box[5],37,323,{width:36,align:'center'});
	doc.text(content[3].box[6],86,323,{width:36,align:'center'});
	doc.text(content[3].box[7],134,323,{width:36,align:'center'});
	doc.text(content[3].box[8],184,323,{width:36,align:'center'});
	doc.text(content[3].box[9],233,323,{width:36,align:'center'});
	//3rd layer
	doc.text(content[3].box[10],37,380,{width:36,align:'center'});
	doc.text(content[3].box[11],86,380,{width:36,align:'center'});
	doc.text(content[3].box[12],134,380,{width:36,align:'center'});
	doc.text(content[3].box[13],184,380,{width:36,align:'center'});
	doc.text(content[3].box[14],233,380,{width:36,align:'center'});
	//game series
	doc.fontSize(12);
	doc.text(content[3].series,182,433);
//Box E ARRAY4 [0-12]
	doc.fontSize(36);

	doc.text(content[4].box[0],295,267,{width:36,align:'center'});
	doc.text(content[4].box[1],344,267,{width:36,align:'center'});
	doc.text(content[4].box[2],395,267,{width:36,align:'center'});
	doc.text(content[4].box[3],444,267,{width:36,align:'center'});
	doc.text(content[4].box[4],493,267,{width:36,align:'center'});
	doc.text(content[4].box[5],540,267,{width:36,align:'center'});
	
	doc.text(content[4].box[6],295,323,{width:36,align:'center'});
	doc.text(content[4].box[7],344,323,{width:36,align:'center'});
	doc.text(content[4].box[8],395,323,{width:36,align:'center'});
	doc.text(content[4].box[9],444,323,{width:36,align:'center'});
	doc.text(content[4].box[10],493,323,{width:36,align:'center'});
	doc.text(content[4].box[11],540,323,{width:36,align:'center'});
	
	doc.text(content[4].box[12],295,380,{width:36,align:'center'});
	doc.text(content[4].box[13],344,380,{width:36,align:'center'});
	doc.text(content[4].box[14],395,380,{width:36,align:'center'});
	doc.text(content[4].box[15],444,380,{width:36,align:'center'});
	doc.text(content[4].box[16],493,380,{width:36,align:'center'});
	doc.text(content[4].box[17],540,380,{width:36,align:'center'});

	doc.fontSize(12);
	doc.text(content[4].series,437,433);
//Box F
	doc.fontSize(36);
	
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 468)
		.lineTo(5, 468)
		.dash(5, {space: 10})
		.fillAndStroke("black");
	doc.image('./routes/template_75_v4.png', 0, 468,{width: 615, height: 467});
//	doc.font('Courier-Bold');
	
	//Box A
	doc.text(content[5].box[0],125,50+467,{width:36,align:'center'});
	doc.text(content[5].box[1],171,50+467,{width:36,align:'center'});
	
	doc.text(content[5].box[2],125,107+467,{width:36,align:'center'});
	doc.text(content[5].box[3],171,107+467,{width:36,align:'center'});
	
	doc.text(content[5].box[4],125,163+467,{width:36,align:'center'});
	doc.text(content[5].box[5],171,163+467,{width:36,align:'center'});
	
	doc.fontSize(12);
	doc.text(content[5].series,167,216+467);
//Box B
	doc.fontSize(36);
//Box B
	doc.text(content[6].box[0],234,50+467,{width:36,align:'center'});
	doc.text(content[6].box[1],283,50+467,{width:36,align:'center'});
	doc.text(content[6].box[2],330,50+467,{width:36,align:'center'});
	
	doc.text(content[6].box[3],234,107+467,{width:36,align:'center'});
	doc.text(content[6].box[4],283,107+467,{width:36,align:'center'});
	doc.text(content[6].box[5],330,107+467,{width:36,align:'center'});
	
	doc.text(content[6].box[6],234,163+467,{width:36,align:'center'});
	doc.text(content[6].box[7],283,163+467,{width:36,align:'center'});
	doc.text(content[6].box[8],330,163+467,{width:36,align:'center'});
	
	doc.fontSize(12);
	doc.text(content[6].series,322,216+467);
//Box C
	doc.fontSize(36);
	doc.text(content[7].box[0],393,50+467,{width:36,align:'center'});
	doc.text(content[7].box[1],443,50+467,{width:36,align:'center'});
	doc.text(content[7].box[2],491,50+467,{width:36,align:'center'});
	doc.text(content[7].box[3],541,50+467,{width:36,align:'center'});

	doc.text(content[7].box[4],393,107+467,{width:36,align:'center'});
	doc.text(content[7].box[5],443,107+467,{width:36,align:'center'});
	doc.text(content[7].box[6],491,107+467,{width:36,align:'center'});
	doc.text(content[7].box[7],541,107+467,{width:36,align:'center'});
	
	doc.text(content[7].box[8],393,163+467,{width:36,align:'center'});
	doc.text(content[7].box[9],443,163+467,{width:36,align:'center'});
	doc.text(content[7].box[10],491,163+467,{width:36,align:'center'});
	doc.text(content[7].box[11],541,163+467,{width:36,align:'center'});

	doc.fontSize(12);
	doc.text(content[7].series,488,216+467);
//Box D
	doc.fontSize(36);

	doc.text(content[8].box[0],37,267+467,{width:36,align:'center'});
	doc.text(content[8].box[1],86,267+467,{width:36,align:'center'});
	doc.text(content[8].box[2],134,267+467,{width:36,align:'center'});
	doc.text(content[8].box[3],184,267+467,{width:36,align:'center'});
	doc.text(content[8].box[4],233,267+467,{width:36,align:'center'});

	doc.text(content[8].box[5],37,323+467,{width:36,align:'center'});
	doc.text(content[8].box[6],86,323+467,{width:36,align:'center'});
	doc.text(content[8].box[7],134,323+467,{width:36,align:'center'});
	doc.text(content[8].box[8],184,323+467,{width:36,align:'center'});
	doc.text(content[8].box[9],233,323+467,{width:36,align:'center'});

	doc.text(content[8].box[10],37,380+467,{width:36,align:'center'});
	doc.text(content[8].box[11],86,380+467,{width:36,align:'center'});
	doc.text(content[8].box[12],134,380+467,{width:36,align:'center'});
	doc.text(content[8].box[13],184,380+467,{width:36,align:'center'});
	doc.text(content[8].box[14],233,380+467,{width:36,align:'center'});

	doc.fontSize(12);
	doc.text(content[8].series,182,432+467);
//Box E
	doc.fontSize(36);

	doc.text(content[9].box[0],295,267+467,{width:36,align:'center'});
	doc.text(content[9].box[1],344,267+467,{width:36,align:'center'});
	doc.text(content[9].box[2],395,267+467,{width:36,align:'center'});
	doc.text(content[9].box[3],444,267+467,{width:36,align:'center'});
	doc.text(content[9].box[4],493,267+467,{width:36,align:'center'});
	doc.text(content[9].box[5],540,267+467,{width:36,align:'center'});
	
	doc.text(content[9].box[6],295,323+467,{width:36,align:'center'});
	doc.text(content[9].box[7],344,323+467,{width:36,align:'center'});
	doc.text(content[9].box[8],395,323+467,{width:36,align:'center'});
	doc.text(content[9].box[9],444,323+467,{width:36,align:'center'});
	doc.text(content[9].box[10],493,323+467,{width:36,align:'center'});
	doc.text(content[9].box[11],540,323+467,{width:36,align:'center'});
	
	doc.text(content[9].box[12],295,380+467,{width:36,align:'center'});
	doc.text(content[9].box[13],344,380+467,{width:36,align:'center'});
	doc.text(content[9].box[14],395,380+467,{width:36,align:'center'});
	doc.text(content[9].box[15],444,380+467,{width:36,align:'center'});
	doc.text(content[9].box[16],493,380+467,{width:36,align:'center'});
	doc.text(content[9].box[17],540,380+467,{width:36,align:'center'});
	doc.fontSize(12);
	doc.text(content[9].series,437,432+467);
//Box F
	doc.fontSize(36);
	
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 468)
		.lineTo(5, 468)
		.dash(5, {space: 10})
		.fillAndStroke("red");
	doc.fontSize(16);
	
	doc.rotate(270,{origin:[81,555]}).text(content[9].prodid+"                                                                                                       "+content[9].prodid,75,555);
//	doc.rotate(0,{origin:[100,87+567]}).text(content[9].prodid,75,80);
	
	doc.write('printcards/v1'+content[9].prodid+" "+content[0].series+"-"+content[9].series+".pdf",function(){
		callback(null,content[9].prodid+" "+content[0].series+"-"+content[9].series+".pdf");
	});
};
