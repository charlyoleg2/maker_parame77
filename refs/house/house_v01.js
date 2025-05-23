// Generated by Parametrix

const { polygon } = require('@jscad/modeling').primitives;
//const { subtract } = require('@jscad/modeling').booleans;
//const { union, intersect, scission, subtract } = require('@jscad/modeling').booleans;
const { union, intersect, subtract } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRotate } = require('@jscad/modeling').extrusions;
const { translate, rotate } = require('@jscad/modeling').transforms;

const main = () => {

const ctr_face_fig_house_facePA_Fa000_Ctr000 = polygon({ points: [ [ -500.0000, 0.0000 ],
	[ 500.0000, 0.0000 ],
	[ 500.0000, 400.0000 ],
	[ 0.0000, 1600.0000 ],
	[ -500.0000, 400.0000 ],
	[ -500.0000, 0.0000 ] ] });

face_fig_house_facePA_Fa000 = ctr_face_fig_house_facePA_Fa000_Ctr000;
fig_house_facePA = face_fig_house_facePA_Fa000;
const ctr_face_fig_house_facePB_Fa000_Ctr000 = polygon({ points: [ [ -400.0000, 0.0000 ],
	[ 400.0000, 0.0000 ],
	[ 400.0000, 600.0000 ],
	[ 0.0000, 1700.0000 ],
	[ -400.0000, 600.0000 ],
	[ -400.0000, 0.0000 ] ] });

face_fig_house_facePB_Fa000 = ctr_face_fig_house_facePB_Fa000_Ctr000;
fig_house_facePB = face_fig_house_facePB_Fa000;
const ctr_face_fig_house_facePC_Fa000_Ctr000 = polygon({ points: [ [ -400.0000, 0.0000 ],
	[ 400.0000, 0.0000 ],
	[ 400.0000, 700.0000 ],
	[ 0.0000, 1300.0000 ],
	[ -400.0000, 700.0000 ],
	[ -400.0000, 0.0000 ] ] });

face_fig_house_facePC_Fa000 = ctr_face_fig_house_facePC_Fa000_Ctr000;
fig_house_facePC = face_fig_house_facePC_Fa000;
const ctr_face_fig_house_facePD_Fa000_Ctr000 = polygon({ points: [ [ -250.0000, 0.0000 ],
	[ 250.0000, 0.0000 ],
	[ 250.0000, 700.0000 ],
	[ 0.0000, 1300.0000 ],
	[ -250.0000, 700.0000 ],
	[ -250.0000, 0.0000 ] ] });

face_fig_house_facePD_Fa000 = ctr_face_fig_house_facePD_Fa000_Ctr000;
fig_house_facePD = face_fig_house_facePD_Fa000;
const ctr_face_fig_house_facePE_Fa000_Ctr000 = polygon({ points: [ [ -200.0000, 0.0000 ],
	[ 200.0000, 0.0000 ],
	[ 200.0000, 1000.0000 ],
	[ 0.0000, 1600.0000 ],
	[ -200.0000, 1000.0000 ],
	[ -200.0000, 0.0000 ] ] });

face_fig_house_facePE_Fa000 = ctr_face_fig_house_facePE_Fa000_Ctr000;
fig_house_facePE = face_fig_house_facePE_Fa000;
const ctr_face_fig_house_faceTerrasse_Fa000_Ctr000 = polygon({ points: [ [ -2400.0000, -250.0000 ],
	[ -2400.0000, 250.0000 ],
	[ -2600.0000, 250.0000 ],
	[ -2600.0000, -250.0000 ],
	[ -2400.0000, -250.0000 ] ] });

face_fig_house_faceTerrasse_Fa000 = ctr_face_fig_house_faceTerrasse_Fa000_Ctr000;
const ctr_face_fig_house_faceTerrasse_Fa001_Ctr000 = polygon({ points: [ [ -400.0000, -500.0000 ],
	[ -1900.0000, -500.0000 ],
	[ -1900.0000, -800.0000 ],
	[ -400.0000, -800.0000 ],
	[ -400.0000, -500.0000 ] ] });

face_fig_house_faceTerrasse_Fa001 = ctr_face_fig_house_faceTerrasse_Fa001_Ctr000;
fig_house_faceTerrasse = union( face_fig_house_faceTerrasse_Fa000, face_fig_house_faceTerrasse_Fa001 );

const subpax_house_pAw =
	translate( [ 0, 0, 0, ],
		rotate( [ 1.5707963267948966, 0, 4.71238898038469, ],
			   extrudeLinear( {height: 2400}, fig_house_facePA )
		)
	);


const subpax_house_pAe =
	translate( [ 0, 0, 0, ],
		rotate( [ 1.5707963267948966, 0, 1.5707963267948966, ],
			   extrudeLinear( {height: 600}, fig_house_facePA )
		)
	);


const subpax_house_pBn =
	translate( [ 0, 0, 0, ],
		rotate( [ 1.5707963267948966, 0, 3.141592653589793, ],
			   extrudeLinear( {height: 900}, fig_house_facePB )
		)
	);


const subpax_house_pBs =
	translate( [ 0, 0, 0, ],
		rotate( [ 1.5707963267948966, 0, 0, ],
			   extrudeLinear( {height: 1400}, fig_house_facePB )
		)
	);


const subpax_house_pCn =
	translate( [ -800, 0, 0, ],
		rotate( [ 1.5707963267948966, 0, 3.141592653589793, ],
			   extrudeLinear( {height: 700}, fig_house_facePC )
		)
	);


const subpax_house_pD1s =
	translate( [ -1550, 0, 0, ],
		rotate( [ 1.5707963267948966, 0, 0, ],
			   extrudeLinear( {height: 500}, fig_house_facePD )
		)
	);


const subpax_house_pD2e =
	translate( [ 0, -1050, 0, ],
		rotate( [ 1.5707963267948966, 0, 1.5707963267948966, ],
			   extrudeLinear( {height: 400}, fig_house_facePD )
		)
	);


const subpax_house_pE1s =
	translate( [ -600, 0, 0, ],
		rotate( [ 1.5707963267948966, 0, 0, ],
			   extrudeLinear( {height: 400}, fig_house_facePE )
		)
	);


const subpax_house_pE2w =
	translate( [ 0, -600, 0, ],
		rotate( [ 1.5707963267948966, 0, 4.71238898038469, ],
			   extrudeLinear( {height: 300}, fig_house_facePE )
		)
	);


const subpax_house_terras =
	translate( [ 0, 0, 0, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 400}, fig_house_faceTerrasse )
		)
	);

const pax_house = union( subpax_house_pAw, subpax_house_pAe, subpax_house_pBn, subpax_house_pBs, subpax_house_pCn, subpax_house_pD1s, subpax_house_pD2e, subpax_house_pE1s, subpax_house_pE2w, subpax_house_terras );

return pax_house;
}
module.exports = { main };
