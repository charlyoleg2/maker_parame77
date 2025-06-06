// Generated by Parametrix

const { polygon } = require('@jscad/modeling').primitives;
//const { subtract } = require('@jscad/modeling').booleans;
//const { union, intersect, scission, subtract } = require('@jscad/modeling').booleans;
const { union, intersect, subtract } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRotate } = require('@jscad/modeling').extrusions;
const { translate, rotate } = require('@jscad/modeling').transforms;

const main = () => {

const ctr_face_fig_springWorm_faceTube_Fa000_Ctr000 = polygon({ points: [ [ 15.0000, 0.0000 ],
	[ 14.8717, 1.9579 ],
	[ 14.4889, 3.8823 ],
	[ 13.8582, 5.7403 ],
	[ 12.9904, 7.5000 ],
	[ 11.9003, 9.1314 ],
	[ 10.6066, 10.6066 ],
	[ 9.1314, 11.9003 ],
	[ 7.5000, 12.9904 ],
	[ 5.7403, 13.8582 ],
	[ 3.8823, 14.4889 ],
	[ 1.9579, 14.8717 ],
	[ 0.0000, 15.0000 ],
	[ -1.9579, 14.8717 ],
	[ -3.8823, 14.4889 ],
	[ -5.7403, 13.8582 ],
	[ -7.5000, 12.9904 ],
	[ -9.1314, 11.9003 ],
	[ -10.6066, 10.6066 ],
	[ -11.9003, 9.1314 ],
	[ -12.9904, 7.5000 ],
	[ -13.8582, 5.7403 ],
	[ -14.4889, 3.8823 ],
	[ -14.8717, 1.9579 ],
	[ -15.0000, 0.0000 ],
	[ -14.8717, -1.9579 ],
	[ -14.4889, -3.8823 ],
	[ -13.8582, -5.7403 ],
	[ -12.9904, -7.5000 ],
	[ -11.9003, -9.1314 ],
	[ -10.6066, -10.6066 ],
	[ -9.1314, -11.9003 ],
	[ -7.5000, -12.9904 ],
	[ -5.7403, -13.8582 ],
	[ -3.8823, -14.4889 ],
	[ -1.9579, -14.8717 ],
	[ -0.0000, -15.0000 ],
	[ 1.9579, -14.8717 ],
	[ 3.8823, -14.4889 ],
	[ 5.7403, -13.8582 ],
	[ 7.5000, -12.9904 ],
	[ 9.1314, -11.9003 ],
	[ 10.6066, -10.6066 ],
	[ 11.9003, -9.1314 ],
	[ 12.9904, -7.5000 ],
	[ 13.8582, -5.7403 ],
	[ 14.4889, -3.8823 ],
	[ 14.8717, -1.9579 ],
	[ 15.0000, 0.0000 ] ] });

const ctr_face_fig_springWorm_faceTube_Fa000_Ctr001 = polygon({ points: [ [ 13.0000, 0.0000 ],
	[ 12.8476, 1.9844 ],
	[ 12.3942, 3.9224 ],
	[ 11.6502, 5.7684 ],
	[ 10.6331, 7.4791 ],
	[ 9.3668, 9.0146 ],
	[ 7.8809, 10.3388 ],
	[ 6.2104, 11.4207 ],
	[ 4.3942, 12.2348 ],
	[ 2.4751, 12.7622 ],
	[ 0.4979, 12.9905 ],
	[ -1.4909, 12.9142 ],
	[ -3.4448, 12.5353 ],
	[ -5.3179, 11.8625 ],
	[ -7.0664, 10.9118 ],
	[ -8.6492, 9.7052 ],
	[ -10.0294, 8.2712 ],
	[ -11.1744, 6.6432 ],
	[ -12.0575, 4.8596 ],
	[ -12.6580, 2.9621 ],
	[ -12.9619, 0.9951 ],
	[ -12.9619, -0.9951 ],
	[ -12.6580, -2.9621 ],
	[ -12.0575, -4.8596 ],
	[ -11.1744, -6.6432 ],
	[ -10.0294, -8.2712 ],
	[ -8.6492, -9.7052 ],
	[ -7.0664, -10.9118 ],
	[ -5.3179, -11.8625 ],
	[ -3.4448, -12.5353 ],
	[ -1.4909, -12.9142 ],
	[ 0.4979, -12.9905 ],
	[ 2.4751, -12.7622 ],
	[ 4.3942, -12.2348 ],
	[ 6.2104, -11.4207 ],
	[ 7.8809, -10.3388 ],
	[ 9.3668, -9.0146 ],
	[ 10.6331, -7.4791 ],
	[ 11.6502, -5.7684 ],
	[ 12.3942, -3.9224 ],
	[ 12.8476, -1.9844 ],
	[ 13.0000, 0.0000 ] ] });

face_fig_springWorm_faceTube_Fa000 = subtract( ctr_face_fig_springWorm_faceTube_Fa000_Ctr000, ctr_face_fig_springWorm_faceTube_Fa000_Ctr001 );
fig_springWorm_faceTube = face_fig_springWorm_faceTube_Fa000;
const ctr_face_fig_springWorm_faceGroove1_Fa000_Ctr000 = polygon({ points: [ [ 4.0000, 1.0000 ],
	[ 4.0096, 0.9025 ],
	[ 4.0381, 0.8087 ],
	[ 4.0843, 0.7222 ],
	[ 4.1464, 0.6464 ],
	[ 4.2222, 0.5843 ],
	[ 4.3087, 0.5381 ],
	[ 4.4025, 0.5096 ],
	[ 4.5000, 0.5000 ],
	[ 4.5975, 0.5096 ],
	[ 4.6913, 0.5381 ],
	[ 4.7778, 0.5843 ],
	[ 4.8536, 0.6464 ],
	[ 4.9157, 0.7222 ],
	[ 4.9619, 0.8087 ],
	[ 4.9904, 0.9025 ],
	[ 5.0000, 1.0000 ],
	[ 5.0000, 15.5000 ],
	[ 4.0000, 15.5000 ],
	[ 4.0000, 1.0000 ] ] });

face_fig_springWorm_faceGroove1_Fa000 = ctr_face_fig_springWorm_faceGroove1_Fa000_Ctr000;
const ctr_face_fig_springWorm_faceGroove1_Fa001_Ctr000 = polygon({ points: [ [ 4.0000, -15.5000 ],
	[ 5.0000, -15.5000 ],
	[ 5.0000, -1.0000 ],
	[ 4.9904, -0.9025 ],
	[ 4.9619, -0.8087 ],
	[ 4.9157, -0.7222 ],
	[ 4.8536, -0.6464 ],
	[ 4.7778, -0.5843 ],
	[ 4.6913, -0.5381 ],
	[ 4.5975, -0.5096 ],
	[ 4.5000, -0.5000 ],
	[ 4.4025, -0.5096 ],
	[ 4.3087, -0.5381 ],
	[ 4.2222, -0.5843 ],
	[ 4.1464, -0.6464 ],
	[ 4.0843, -0.7222 ],
	[ 4.0381, -0.8087 ],
	[ 4.0096, -0.9025 ],
	[ 4.0000, -1.0000 ],
	[ 4.0000, -15.5000 ] ] });

face_fig_springWorm_faceGroove1_Fa001 = ctr_face_fig_springWorm_faceGroove1_Fa001_Ctr000;
const ctr_face_fig_springWorm_faceGroove1_Fa002_Ctr000 = polygon({ points: [ [ 10.0000, 1.0000 ],
	[ 10.0096, 0.9025 ],
	[ 10.0381, 0.8087 ],
	[ 10.0843, 0.7222 ],
	[ 10.1464, 0.6464 ],
	[ 10.2222, 0.5843 ],
	[ 10.3087, 0.5381 ],
	[ 10.4025, 0.5096 ],
	[ 10.5000, 0.5000 ],
	[ 10.5975, 0.5096 ],
	[ 10.6913, 0.5381 ],
	[ 10.7778, 0.5843 ],
	[ 10.8536, 0.6464 ],
	[ 10.9157, 0.7222 ],
	[ 10.9619, 0.8087 ],
	[ 10.9904, 0.9025 ],
	[ 11.0000, 1.0000 ],
	[ 11.0000, 15.5000 ],
	[ 10.0000, 15.5000 ],
	[ 10.0000, 1.0000 ] ] });

face_fig_springWorm_faceGroove1_Fa002 = ctr_face_fig_springWorm_faceGroove1_Fa002_Ctr000;
const ctr_face_fig_springWorm_faceGroove1_Fa003_Ctr000 = polygon({ points: [ [ 10.0000, -15.5000 ],
	[ 11.0000, -15.5000 ],
	[ 11.0000, -1.0000 ],
	[ 10.9904, -0.9025 ],
	[ 10.9619, -0.8087 ],
	[ 10.9157, -0.7222 ],
	[ 10.8536, -0.6464 ],
	[ 10.7778, -0.5843 ],
	[ 10.6913, -0.5381 ],
	[ 10.5975, -0.5096 ],
	[ 10.5000, -0.5000 ],
	[ 10.4025, -0.5096 ],
	[ 10.3087, -0.5381 ],
	[ 10.2222, -0.5843 ],
	[ 10.1464, -0.6464 ],
	[ 10.0843, -0.7222 ],
	[ 10.0381, -0.8087 ],
	[ 10.0096, -0.9025 ],
	[ 10.0000, -1.0000 ],
	[ 10.0000, -15.5000 ] ] });

face_fig_springWorm_faceGroove1_Fa003 = ctr_face_fig_springWorm_faceGroove1_Fa003_Ctr000;
const ctr_face_fig_springWorm_faceGroove1_Fa004_Ctr000 = polygon({ points: [ [ 16.0000, 1.0000 ],
	[ 16.0096, 0.9025 ],
	[ 16.0381, 0.8087 ],
	[ 16.0843, 0.7222 ],
	[ 16.1464, 0.6464 ],
	[ 16.2222, 0.5843 ],
	[ 16.3087, 0.5381 ],
	[ 16.4025, 0.5096 ],
	[ 16.5000, 0.5000 ],
	[ 16.5975, 0.5096 ],
	[ 16.6913, 0.5381 ],
	[ 16.7778, 0.5843 ],
	[ 16.8536, 0.6464 ],
	[ 16.9157, 0.7222 ],
	[ 16.9619, 0.8087 ],
	[ 16.9904, 0.9025 ],
	[ 17.0000, 1.0000 ],
	[ 17.0000, 15.5000 ],
	[ 16.0000, 15.5000 ],
	[ 16.0000, 1.0000 ] ] });

face_fig_springWorm_faceGroove1_Fa004 = ctr_face_fig_springWorm_faceGroove1_Fa004_Ctr000;
const ctr_face_fig_springWorm_faceGroove1_Fa005_Ctr000 = polygon({ points: [ [ 16.0000, -15.5000 ],
	[ 17.0000, -15.5000 ],
	[ 17.0000, -1.0000 ],
	[ 16.9904, -0.9025 ],
	[ 16.9619, -0.8087 ],
	[ 16.9157, -0.7222 ],
	[ 16.8536, -0.6464 ],
	[ 16.7778, -0.5843 ],
	[ 16.6913, -0.5381 ],
	[ 16.5975, -0.5096 ],
	[ 16.5000, -0.5000 ],
	[ 16.4025, -0.5096 ],
	[ 16.3087, -0.5381 ],
	[ 16.2222, -0.5843 ],
	[ 16.1464, -0.6464 ],
	[ 16.0843, -0.7222 ],
	[ 16.0381, -0.8087 ],
	[ 16.0096, -0.9025 ],
	[ 16.0000, -1.0000 ],
	[ 16.0000, -15.5000 ] ] });

face_fig_springWorm_faceGroove1_Fa005 = ctr_face_fig_springWorm_faceGroove1_Fa005_Ctr000;
fig_springWorm_faceGroove1 = union( face_fig_springWorm_faceGroove1_Fa000, face_fig_springWorm_faceGroove1_Fa001, face_fig_springWorm_faceGroove1_Fa002, face_fig_springWorm_faceGroove1_Fa003, face_fig_springWorm_faceGroove1_Fa004, face_fig_springWorm_faceGroove1_Fa005 );
const ctr_face_fig_springWorm_faceGroove2_Fa000_Ctr000 = polygon({ points: [ [ 7.0000, 1.0000 ],
	[ 7.0096, 0.9025 ],
	[ 7.0381, 0.8087 ],
	[ 7.0843, 0.7222 ],
	[ 7.1464, 0.6464 ],
	[ 7.2222, 0.5843 ],
	[ 7.3087, 0.5381 ],
	[ 7.4025, 0.5096 ],
	[ 7.5000, 0.5000 ],
	[ 7.5975, 0.5096 ],
	[ 7.6913, 0.5381 ],
	[ 7.7778, 0.5843 ],
	[ 7.8536, 0.6464 ],
	[ 7.9157, 0.7222 ],
	[ 7.9619, 0.8087 ],
	[ 7.9904, 0.9025 ],
	[ 8.0000, 1.0000 ],
	[ 8.0000, 15.5000 ],
	[ 7.0000, 15.5000 ],
	[ 7.0000, 1.0000 ] ] });

face_fig_springWorm_faceGroove2_Fa000 = ctr_face_fig_springWorm_faceGroove2_Fa000_Ctr000;
const ctr_face_fig_springWorm_faceGroove2_Fa001_Ctr000 = polygon({ points: [ [ 7.0000, -15.5000 ],
	[ 8.0000, -15.5000 ],
	[ 8.0000, -1.0000 ],
	[ 7.9904, -0.9025 ],
	[ 7.9619, -0.8087 ],
	[ 7.9157, -0.7222 ],
	[ 7.8536, -0.6464 ],
	[ 7.7778, -0.5843 ],
	[ 7.6913, -0.5381 ],
	[ 7.5975, -0.5096 ],
	[ 7.5000, -0.5000 ],
	[ 7.4025, -0.5096 ],
	[ 7.3087, -0.5381 ],
	[ 7.2222, -0.5843 ],
	[ 7.1464, -0.6464 ],
	[ 7.0843, -0.7222 ],
	[ 7.0381, -0.8087 ],
	[ 7.0096, -0.9025 ],
	[ 7.0000, -1.0000 ],
	[ 7.0000, -15.5000 ] ] });

face_fig_springWorm_faceGroove2_Fa001 = ctr_face_fig_springWorm_faceGroove2_Fa001_Ctr000;
const ctr_face_fig_springWorm_faceGroove2_Fa002_Ctr000 = polygon({ points: [ [ 13.0000, 1.0000 ],
	[ 13.0096, 0.9025 ],
	[ 13.0381, 0.8087 ],
	[ 13.0843, 0.7222 ],
	[ 13.1464, 0.6464 ],
	[ 13.2222, 0.5843 ],
	[ 13.3087, 0.5381 ],
	[ 13.4025, 0.5096 ],
	[ 13.5000, 0.5000 ],
	[ 13.5975, 0.5096 ],
	[ 13.6913, 0.5381 ],
	[ 13.7778, 0.5843 ],
	[ 13.8536, 0.6464 ],
	[ 13.9157, 0.7222 ],
	[ 13.9619, 0.8087 ],
	[ 13.9904, 0.9025 ],
	[ 14.0000, 1.0000 ],
	[ 14.0000, 15.5000 ],
	[ 13.0000, 15.5000 ],
	[ 13.0000, 1.0000 ] ] });

face_fig_springWorm_faceGroove2_Fa002 = ctr_face_fig_springWorm_faceGroove2_Fa002_Ctr000;
const ctr_face_fig_springWorm_faceGroove2_Fa003_Ctr000 = polygon({ points: [ [ 13.0000, -15.5000 ],
	[ 14.0000, -15.5000 ],
	[ 14.0000, -1.0000 ],
	[ 13.9904, -0.9025 ],
	[ 13.9619, -0.8087 ],
	[ 13.9157, -0.7222 ],
	[ 13.8536, -0.6464 ],
	[ 13.7778, -0.5843 ],
	[ 13.6913, -0.5381 ],
	[ 13.5975, -0.5096 ],
	[ 13.5000, -0.5000 ],
	[ 13.4025, -0.5096 ],
	[ 13.3087, -0.5381 ],
	[ 13.2222, -0.5843 ],
	[ 13.1464, -0.6464 ],
	[ 13.0843, -0.7222 ],
	[ 13.0381, -0.8087 ],
	[ 13.0096, -0.9025 ],
	[ 13.0000, -1.0000 ],
	[ 13.0000, -15.5000 ] ] });

face_fig_springWorm_faceGroove2_Fa003 = ctr_face_fig_springWorm_faceGroove2_Fa003_Ctr000;
const ctr_face_fig_springWorm_faceGroove2_Fa004_Ctr000 = polygon({ points: [ [ 19.0000, 1.0000 ],
	[ 19.0096, 0.9025 ],
	[ 19.0381, 0.8087 ],
	[ 19.0843, 0.7222 ],
	[ 19.1464, 0.6464 ],
	[ 19.2222, 0.5843 ],
	[ 19.3087, 0.5381 ],
	[ 19.4025, 0.5096 ],
	[ 19.5000, 0.5000 ],
	[ 19.5975, 0.5096 ],
	[ 19.6913, 0.5381 ],
	[ 19.7778, 0.5843 ],
	[ 19.8536, 0.6464 ],
	[ 19.9157, 0.7222 ],
	[ 19.9619, 0.8087 ],
	[ 19.9904, 0.9025 ],
	[ 20.0000, 1.0000 ],
	[ 20.0000, 15.5000 ],
	[ 19.0000, 15.5000 ],
	[ 19.0000, 1.0000 ] ] });

face_fig_springWorm_faceGroove2_Fa004 = ctr_face_fig_springWorm_faceGroove2_Fa004_Ctr000;
const ctr_face_fig_springWorm_faceGroove2_Fa005_Ctr000 = polygon({ points: [ [ 19.0000, -15.5000 ],
	[ 20.0000, -15.5000 ],
	[ 20.0000, -1.0000 ],
	[ 19.9904, -0.9025 ],
	[ 19.9619, -0.8087 ],
	[ 19.9157, -0.7222 ],
	[ 19.8536, -0.6464 ],
	[ 19.7778, -0.5843 ],
	[ 19.6913, -0.5381 ],
	[ 19.5975, -0.5096 ],
	[ 19.5000, -0.5000 ],
	[ 19.4025, -0.5096 ],
	[ 19.3087, -0.5381 ],
	[ 19.2222, -0.5843 ],
	[ 19.1464, -0.6464 ],
	[ 19.0843, -0.7222 ],
	[ 19.0381, -0.8087 ],
	[ 19.0096, -0.9025 ],
	[ 19.0000, -1.0000 ],
	[ 19.0000, -15.5000 ] ] });

face_fig_springWorm_faceGroove2_Fa005 = ctr_face_fig_springWorm_faceGroove2_Fa005_Ctr000;
fig_springWorm_faceGroove2 = union( face_fig_springWorm_faceGroove2_Fa000, face_fig_springWorm_faceGroove2_Fa001, face_fig_springWorm_faceGroove2_Fa002, face_fig_springWorm_faceGroove2_Fa003, face_fig_springWorm_faceGroove2_Fa004, face_fig_springWorm_faceGroove2_Fa005 );
const ctr_face_fig_springWorm_faceLeft_Fa000_Ctr000 = polygon({ points: [ [ 15.0000, 0.0000 ],
	[ 14.8717, 1.9579 ],
	[ 14.4889, 3.8823 ],
	[ 13.8582, 5.7403 ],
	[ 12.9904, 7.5000 ],
	[ 11.9003, 9.1314 ],
	[ 10.6066, 10.6066 ],
	[ 9.1314, 11.9003 ],
	[ 7.5000, 12.9904 ],
	[ 5.7403, 13.8582 ],
	[ 3.8823, 14.4889 ],
	[ 1.9579, 14.8717 ],
	[ 0.0000, 15.0000 ],
	[ -1.9579, 14.8717 ],
	[ -3.8823, 14.4889 ],
	[ -5.7403, 13.8582 ],
	[ -7.5000, 12.9904 ],
	[ -9.1314, 11.9003 ],
	[ -10.6066, 10.6066 ],
	[ -11.9003, 9.1314 ],
	[ -12.9904, 7.5000 ],
	[ -13.8582, 5.7403 ],
	[ -14.4889, 3.8823 ],
	[ -14.8717, 1.9579 ],
	[ -15.0000, 0.0000 ],
	[ -14.8717, -1.9579 ],
	[ -14.4889, -3.8823 ],
	[ -13.8582, -5.7403 ],
	[ -12.9904, -7.5000 ],
	[ -11.9003, -9.1314 ],
	[ -10.6066, -10.6066 ],
	[ -9.1314, -11.9003 ],
	[ -7.5000, -12.9904 ],
	[ -5.7403, -13.8582 ],
	[ -3.8823, -14.4889 ],
	[ -1.9579, -14.8717 ],
	[ -0.0000, -15.0000 ],
	[ 1.9579, -14.8717 ],
	[ 3.8823, -14.4889 ],
	[ 5.7403, -13.8582 ],
	[ 7.5000, -12.9904 ],
	[ 9.1314, -11.9003 ],
	[ 10.6066, -10.6066 ],
	[ 11.9003, -9.1314 ],
	[ 12.9904, -7.5000 ],
	[ 13.8582, -5.7403 ],
	[ 14.4889, -3.8823 ],
	[ 14.8717, -1.9579 ],
	[ 15.0000, 0.0000 ] ] });

const ctr_face_fig_springWorm_faceLeft_Fa000_Ctr001 = polygon({ points: [ [ 8.8273, -0.0000 ],
	[ 10.9717, 0.0000 ],
	[ 11.1483, 0.0157 ],
	[ 11.3193, 0.0624 ],
	[ 11.4794, 0.1385 ],
	[ 11.6235, 0.2416 ],
	[ 11.7472, 0.3686 ],
	[ 11.8465, 0.5155 ],
	[ 11.9183, 0.6776 ],
	[ 11.9603, 0.8498 ],
	[ 11.9713, 1.0267 ],
	[ 11.9509, 1.2028 ],
	[ 11.4457, 3.6424 ],
	[ 11.3945, 3.8121 ],
	[ 11.3141, 3.9701 ],
	[ 11.2072, 4.1115 ],
	[ 11.0769, 4.2317 ],
	[ 10.9274, 4.3270 ],
	[ 10.7635, 4.3945 ],
	[ 10.5902, 4.4319 ],
	[ 10.4131, 4.4382 ],
	[ 10.2376, 4.4131 ],
	[ 10.0693, 4.3574 ],
	[ 8.1013, 3.5057 ],
	[ 7.9376, 3.4511 ],
	[ 7.7669, 3.4255 ],
	[ 7.5944, 3.4295 ],
	[ 7.4251, 3.4632 ],
	[ 7.2642, 3.5255 ],
	[ 7.1163, 3.6145 ],
	[ 6.9860, 3.7276 ],
	[ 6.8770, 3.8614 ],
	[ 6.1219, 4.9726 ],
	[ 6.0375, 5.1232 ],
	[ 5.9803, 5.2860 ],
	[ 5.9520, 5.4563 ],
	[ 5.9534, 5.6288 ],
	[ 5.9844, 5.7986 ],
	[ 6.0441, 5.9605 ],
	[ 6.1308, 6.1097 ],
	[ 6.2418, 6.2418 ],
	[ 7.7582, 7.7582 ],
	[ 7.8719, 7.8941 ],
	[ 7.9599, 8.0480 ],
	[ 8.0192, 8.2151 ],
	[ 8.0482, 8.3899 ],
	[ 8.0458, 8.5672 ],
	[ 8.0122, 8.7412 ],
	[ 7.9484, 8.9066 ],
	[ 7.8564, 9.0581 ],
	[ 7.7390, 9.1910 ],
	[ 7.6001, 9.3011 ],
	[ 5.5177, 10.6689 ],
	[ 5.3615, 10.7527 ],
	[ 5.1930, 10.8076 ],
	[ 5.0174, 10.8319 ],
	[ 4.8403, 10.8248 ],
	[ 4.6672, 10.7866 ],
	[ 4.5036, 10.7183 ],
	[ 4.3546, 10.6223 ],
	[ 4.2249, 10.5014 ],
	[ 4.1186, 10.3596 ],
	[ 4.0389, 10.2012 ],
	[ 3.2495, 8.2074 ],
	[ 3.1724, 8.0530 ],
	[ 3.0699, 7.9142 ],
	[ 2.9450, 7.7951 ],
	[ 2.8015, 7.6992 ],
	[ 2.6437, 7.6294 ],
	[ 2.4762, 7.5878 ],
	[ 2.3041, 7.5756 ],
	[ 2.1324, 7.5932 ],
	[ 0.8126, 7.8450 ],
	[ 0.6465, 7.8918 ],
	[ 0.4910, 7.9665 ],
	[ 0.3506, 8.0669 ],
	[ 0.2295, 8.1898 ],
	[ 0.1314, 8.3318 ],
	[ 0.0591, 8.4885 ],
	[ 0.0149, 8.6553 ],
	[ 0.0000, 8.8273 ],
	[ 0.0000, 10.9717 ],
	[ -0.0157, 11.1483 ],
	[ -0.0624, 11.3193 ],
	[ -0.1385, 11.4794 ],
	[ -0.2416, 11.6235 ],
	[ -0.3686, 11.7472 ],
	[ -0.5155, 11.8465 ],
	[ -0.6776, 11.9183 ],
	[ -0.8498, 11.9603 ],
	[ -1.0267, 11.9713 ],
	[ -1.2028, 11.9509 ],
	[ -3.6424, 11.4457 ],
	[ -3.8121, 11.3945 ],
	[ -3.9701, 11.3141 ],
	[ -4.1115, 11.2072 ],
	[ -4.2317, 11.0769 ],
	[ -4.3270, 10.9274 ],
	[ -4.3945, 10.7635 ],
	[ -4.4319, 10.5902 ],
	[ -4.4382, 10.4131 ],
	[ -4.4131, 10.2376 ],
	[ -4.3574, 10.0693 ],
	[ -3.5057, 8.1013 ],
	[ -3.4511, 7.9376 ],
	[ -3.4255, 7.7669 ],
	[ -3.4295, 7.5944 ],
	[ -3.4632, 7.4251 ],
	[ -3.5255, 7.2642 ],
	[ -3.6145, 7.1163 ],
	[ -3.7276, 6.9860 ],
	[ -3.8614, 6.8770 ],
	[ -4.9726, 6.1219 ],
	[ -5.1232, 6.0375 ],
	[ -5.2860, 5.9803 ],
	[ -5.4563, 5.9520 ],
	[ -5.6288, 5.9534 ],
	[ -5.7986, 5.9844 ],
	[ -5.9605, 6.0441 ],
	[ -6.1097, 6.1308 ],
	[ -6.2418, 6.2418 ],
	[ -7.7582, 7.7582 ],
	[ -7.8941, 7.8719 ],
	[ -8.0480, 7.9599 ],
	[ -8.2151, 8.0192 ],
	[ -8.3899, 8.0482 ],
	[ -8.5672, 8.0458 ],
	[ -8.7412, 8.0122 ],
	[ -8.9066, 7.9484 ],
	[ -9.0581, 7.8564 ],
	[ -9.1910, 7.7390 ],
	[ -9.3011, 7.6001 ],
	[ -10.6689, 5.5177 ],
	[ -10.7527, 5.3615 ],
	[ -10.8076, 5.1930 ],
	[ -10.8319, 5.0174 ],
	[ -10.8248, 4.8403 ],
	[ -10.7866, 4.6672 ],
	[ -10.7183, 4.5036 ],
	[ -10.6223, 4.3546 ],
	[ -10.5014, 4.2249 ],
	[ -10.3596, 4.1186 ],
	[ -10.2012, 4.0389 ],
	[ -8.2074, 3.2495 ],
	[ -8.0530, 3.1724 ],
	[ -7.9142, 3.0699 ],
	[ -7.7951, 2.9450 ],
	[ -7.6992, 2.8015 ],
	[ -7.6294, 2.6437 ],
	[ -7.5878, 2.4762 ],
	[ -7.5756, 2.3041 ],
	[ -7.5932, 2.1324 ],
	[ -7.8450, 0.8126 ],
	[ -7.8918, 0.6465 ],
	[ -7.9665, 0.4910 ],
	[ -8.0669, 0.3506 ],
	[ -8.1898, 0.2295 ],
	[ -8.3318, 0.1314 ],
	[ -8.4885, 0.0591 ],
	[ -8.6553, 0.0149 ],
	[ -8.8273, 0.0000 ],
	[ -10.9717, 0.0000 ],
	[ -11.1483, -0.0157 ],
	[ -11.3193, -0.0624 ],
	[ -11.4794, -0.1385 ],
	[ -11.6235, -0.2416 ],
	[ -11.7472, -0.3686 ],
	[ -11.8465, -0.5155 ],
	[ -11.9183, -0.6776 ],
	[ -11.9603, -0.8498 ],
	[ -11.9713, -1.0267 ],
	[ -11.9509, -1.2028 ],
	[ -11.4457, -3.6424 ],
	[ -11.3945, -3.8121 ],
	[ -11.3141, -3.9701 ],
	[ -11.2072, -4.1115 ],
	[ -11.0769, -4.2317 ],
	[ -10.9274, -4.3270 ],
	[ -10.7635, -4.3945 ],
	[ -10.5902, -4.4319 ],
	[ -10.4131, -4.4382 ],
	[ -10.2376, -4.4131 ],
	[ -10.0693, -4.3574 ],
	[ -8.1013, -3.5057 ],
	[ -7.9376, -3.4511 ],
	[ -7.7669, -3.4255 ],
	[ -7.5944, -3.4295 ],
	[ -7.4251, -3.4632 ],
	[ -7.2642, -3.5255 ],
	[ -7.1163, -3.6145 ],
	[ -6.9860, -3.7276 ],
	[ -6.8770, -3.8614 ],
	[ -6.1219, -4.9726 ],
	[ -6.0375, -5.1232 ],
	[ -5.9803, -5.2860 ],
	[ -5.9520, -5.4563 ],
	[ -5.9534, -5.6288 ],
	[ -5.9844, -5.7986 ],
	[ -6.0441, -5.9605 ],
	[ -6.1308, -6.1097 ],
	[ -6.2418, -6.2418 ],
	[ -7.7582, -7.7582 ],
	[ -7.8719, -7.8941 ],
	[ -7.9599, -8.0480 ],
	[ -8.0192, -8.2151 ],
	[ -8.0482, -8.3899 ],
	[ -8.0458, -8.5672 ],
	[ -8.0122, -8.7412 ],
	[ -7.9484, -8.9066 ],
	[ -7.8564, -9.0581 ],
	[ -7.7390, -9.1910 ],
	[ -7.6001, -9.3011 ],
	[ -5.5177, -10.6689 ],
	[ -5.3615, -10.7527 ],
	[ -5.1930, -10.8076 ],
	[ -5.0174, -10.8319 ],
	[ -4.8403, -10.8248 ],
	[ -4.6672, -10.7866 ],
	[ -4.5036, -10.7183 ],
	[ -4.3546, -10.6223 ],
	[ -4.2249, -10.5014 ],
	[ -4.1186, -10.3596 ],
	[ -4.0389, -10.2012 ],
	[ -3.2495, -8.2074 ],
	[ -3.1724, -8.0530 ],
	[ -3.0699, -7.9142 ],
	[ -2.9450, -7.7951 ],
	[ -2.8015, -7.6992 ],
	[ -2.6437, -7.6294 ],
	[ -2.4762, -7.5878 ],
	[ -2.3041, -7.5756 ],
	[ -2.1324, -7.5932 ],
	[ -0.8126, -7.8450 ],
	[ -0.6465, -7.8918 ],
	[ -0.4910, -7.9665 ],
	[ -0.3506, -8.0669 ],
	[ -0.2295, -8.1898 ],
	[ -0.1314, -8.3318 ],
	[ -0.0591, -8.4885 ],
	[ -0.0149, -8.6553 ],
	[ -0.0000, -8.8273 ],
	[ -0.0000, -10.9717 ],
	[ 0.0157, -11.1483 ],
	[ 0.0624, -11.3193 ],
	[ 0.1385, -11.4794 ],
	[ 0.2416, -11.6235 ],
	[ 0.3686, -11.7472 ],
	[ 0.5155, -11.8465 ],
	[ 0.6776, -11.9183 ],
	[ 0.8498, -11.9603 ],
	[ 1.0267, -11.9713 ],
	[ 1.2028, -11.9509 ],
	[ 3.6424, -11.4457 ],
	[ 3.8121, -11.3945 ],
	[ 3.9701, -11.3141 ],
	[ 4.1115, -11.2072 ],
	[ 4.2317, -11.0769 ],
	[ 4.3270, -10.9274 ],
	[ 4.3945, -10.7635 ],
	[ 4.4319, -10.5902 ],
	[ 4.4382, -10.4131 ],
	[ 4.4131, -10.2376 ],
	[ 4.3574, -10.0693 ],
	[ 3.5057, -8.1013 ],
	[ 3.4511, -7.9376 ],
	[ 3.4255, -7.7669 ],
	[ 3.4295, -7.5944 ],
	[ 3.4632, -7.4251 ],
	[ 3.5255, -7.2642 ],
	[ 3.6145, -7.1163 ],
	[ 3.7276, -6.9860 ],
	[ 3.8614, -6.8770 ],
	[ 4.9726, -6.1219 ],
	[ 5.1232, -6.0375 ],
	[ 5.2860, -5.9803 ],
	[ 5.4563, -5.9520 ],
	[ 5.6288, -5.9534 ],
	[ 5.7986, -5.9844 ],
	[ 5.9605, -6.0441 ],
	[ 6.1097, -6.1308 ],
	[ 6.2418, -6.2418 ],
	[ 7.7582, -7.7582 ],
	[ 7.8941, -7.8719 ],
	[ 8.0480, -7.9599 ],
	[ 8.2151, -8.0192 ],
	[ 8.3899, -8.0482 ],
	[ 8.5672, -8.0458 ],
	[ 8.7412, -8.0122 ],
	[ 8.9066, -7.9484 ],
	[ 9.0581, -7.8564 ],
	[ 9.1910, -7.7390 ],
	[ 9.3011, -7.6001 ],
	[ 10.6689, -5.5177 ],
	[ 10.7527, -5.3615 ],
	[ 10.8076, -5.1930 ],
	[ 10.8319, -5.0174 ],
	[ 10.8248, -4.8403 ],
	[ 10.7866, -4.6672 ],
	[ 10.7183, -4.5036 ],
	[ 10.6223, -4.3546 ],
	[ 10.5014, -4.2249 ],
	[ 10.3596, -4.1186 ],
	[ 10.2012, -4.0389 ],
	[ 8.2074, -3.2495 ],
	[ 8.0530, -3.1724 ],
	[ 7.9142, -3.0699 ],
	[ 7.7951, -2.9450 ],
	[ 7.6992, -2.8015 ],
	[ 7.6294, -2.6437 ],
	[ 7.5878, -2.4762 ],
	[ 7.5756, -2.3041 ],
	[ 7.5932, -2.1324 ],
	[ 7.8450, -0.8126 ],
	[ 7.8918, -0.6465 ],
	[ 7.9665, -0.4910 ],
	[ 8.0669, -0.3506 ],
	[ 8.1898, -0.2295 ],
	[ 8.3318, -0.1314 ],
	[ 8.4885, -0.0591 ],
	[ 8.6553, -0.0149 ],
	[ 8.8273, -0.0000 ] ] });

face_fig_springWorm_faceLeft_Fa000 = subtract( ctr_face_fig_springWorm_faceLeft_Fa000_Ctr000, ctr_face_fig_springWorm_faceLeft_Fa000_Ctr001 );
fig_springWorm_faceLeft = face_fig_springWorm_faceLeft_Fa000;
const ctr_face_fig_springWorm_faceRight_Fa000_Ctr000 = polygon({ points: [ [ 15.0000, 0.0000 ],
	[ 14.8717, 1.9579 ],
	[ 14.4889, 3.8823 ],
	[ 13.8582, 5.7403 ],
	[ 12.9904, 7.5000 ],
	[ 11.9003, 9.1314 ],
	[ 10.6066, 10.6066 ],
	[ 9.1314, 11.9003 ],
	[ 7.5000, 12.9904 ],
	[ 5.7403, 13.8582 ],
	[ 3.8823, 14.4889 ],
	[ 1.9579, 14.8717 ],
	[ 0.0000, 15.0000 ],
	[ -1.9579, 14.8717 ],
	[ -3.8823, 14.4889 ],
	[ -5.7403, 13.8582 ],
	[ -7.5000, 12.9904 ],
	[ -9.1314, 11.9003 ],
	[ -10.6066, 10.6066 ],
	[ -11.9003, 9.1314 ],
	[ -12.9904, 7.5000 ],
	[ -13.8582, 5.7403 ],
	[ -14.4889, 3.8823 ],
	[ -14.8717, 1.9579 ],
	[ -15.0000, 0.0000 ],
	[ -14.8717, -1.9579 ],
	[ -14.4889, -3.8823 ],
	[ -13.8582, -5.7403 ],
	[ -12.9904, -7.5000 ],
	[ -11.9003, -9.1314 ],
	[ -10.6066, -10.6066 ],
	[ -9.1314, -11.9003 ],
	[ -7.5000, -12.9904 ],
	[ -5.7403, -13.8582 ],
	[ -3.8823, -14.4889 ],
	[ -1.9579, -14.8717 ],
	[ -0.0000, -15.0000 ],
	[ 1.9579, -14.8717 ],
	[ 3.8823, -14.4889 ],
	[ 5.7403, -13.8582 ],
	[ 7.5000, -12.9904 ],
	[ 9.1314, -11.9003 ],
	[ 10.6066, -10.6066 ],
	[ 11.9003, -9.1314 ],
	[ 12.9904, -7.5000 ],
	[ 13.8582, -5.7403 ],
	[ 14.4889, -3.8823 ],
	[ 14.8717, -1.9579 ],
	[ 15.0000, 0.0000 ] ] });

const ctr_face_fig_springWorm_faceRight_Fa000_Ctr001 = polygon({ points: [ [ 8.8273, -0.0000 ],
	[ 10.9717, 0.0000 ],
	[ 11.1483, 0.0157 ],
	[ 11.3193, 0.0624 ],
	[ 11.4794, 0.1385 ],
	[ 11.6235, 0.2416 ],
	[ 11.7472, 0.3686 ],
	[ 11.8465, 0.5155 ],
	[ 11.9183, 0.6776 ],
	[ 11.9603, 0.8498 ],
	[ 11.9713, 1.0267 ],
	[ 11.9509, 1.2028 ],
	[ 11.4457, 3.6424 ],
	[ 11.3945, 3.8121 ],
	[ 11.3141, 3.9701 ],
	[ 11.2072, 4.1115 ],
	[ 11.0769, 4.2317 ],
	[ 10.9274, 4.3270 ],
	[ 10.7635, 4.3945 ],
	[ 10.5902, 4.4319 ],
	[ 10.4131, 4.4382 ],
	[ 10.2376, 4.4131 ],
	[ 10.0693, 4.3574 ],
	[ 8.1013, 3.5057 ],
	[ 7.9376, 3.4511 ],
	[ 7.7669, 3.4255 ],
	[ 7.5944, 3.4295 ],
	[ 7.4251, 3.4632 ],
	[ 7.2642, 3.5255 ],
	[ 7.1163, 3.6145 ],
	[ 6.9860, 3.7276 ],
	[ 6.8770, 3.8614 ],
	[ 6.1219, 4.9726 ],
	[ 6.0375, 5.1232 ],
	[ 5.9803, 5.2860 ],
	[ 5.9520, 5.4563 ],
	[ 5.9534, 5.6288 ],
	[ 5.9844, 5.7986 ],
	[ 6.0441, 5.9605 ],
	[ 6.1308, 6.1097 ],
	[ 6.2418, 6.2418 ],
	[ 7.7582, 7.7582 ],
	[ 7.8719, 7.8941 ],
	[ 7.9599, 8.0480 ],
	[ 8.0192, 8.2151 ],
	[ 8.0482, 8.3899 ],
	[ 8.0458, 8.5672 ],
	[ 8.0122, 8.7412 ],
	[ 7.9484, 8.9066 ],
	[ 7.8564, 9.0581 ],
	[ 7.7390, 9.1910 ],
	[ 7.6001, 9.3011 ],
	[ 5.5177, 10.6689 ],
	[ 5.3615, 10.7527 ],
	[ 5.1930, 10.8076 ],
	[ 5.0174, 10.8319 ],
	[ 4.8403, 10.8248 ],
	[ 4.6672, 10.7866 ],
	[ 4.5036, 10.7183 ],
	[ 4.3546, 10.6223 ],
	[ 4.2249, 10.5014 ],
	[ 4.1186, 10.3596 ],
	[ 4.0389, 10.2012 ],
	[ 3.2495, 8.2074 ],
	[ 3.1724, 8.0530 ],
	[ 3.0699, 7.9142 ],
	[ 2.9450, 7.7951 ],
	[ 2.8015, 7.6992 ],
	[ 2.6437, 7.6294 ],
	[ 2.4762, 7.5878 ],
	[ 2.3041, 7.5756 ],
	[ 2.1324, 7.5932 ],
	[ 0.8126, 7.8450 ],
	[ 0.6465, 7.8918 ],
	[ 0.4910, 7.9665 ],
	[ 0.3506, 8.0669 ],
	[ 0.2295, 8.1898 ],
	[ 0.1314, 8.3318 ],
	[ 0.0591, 8.4885 ],
	[ 0.0149, 8.6553 ],
	[ 0.0000, 8.8273 ],
	[ 0.0000, 10.9717 ],
	[ -0.0157, 11.1483 ],
	[ -0.0624, 11.3193 ],
	[ -0.1385, 11.4794 ],
	[ -0.2416, 11.6235 ],
	[ -0.3686, 11.7472 ],
	[ -0.5155, 11.8465 ],
	[ -0.6776, 11.9183 ],
	[ -0.8498, 11.9603 ],
	[ -1.0267, 11.9713 ],
	[ -1.2028, 11.9509 ],
	[ -3.6424, 11.4457 ],
	[ -3.8121, 11.3945 ],
	[ -3.9701, 11.3141 ],
	[ -4.1115, 11.2072 ],
	[ -4.2317, 11.0769 ],
	[ -4.3270, 10.9274 ],
	[ -4.3945, 10.7635 ],
	[ -4.4319, 10.5902 ],
	[ -4.4382, 10.4131 ],
	[ -4.4131, 10.2376 ],
	[ -4.3574, 10.0693 ],
	[ -3.5057, 8.1013 ],
	[ -3.4511, 7.9376 ],
	[ -3.4255, 7.7669 ],
	[ -3.4295, 7.5944 ],
	[ -3.4632, 7.4251 ],
	[ -3.5255, 7.2642 ],
	[ -3.6145, 7.1163 ],
	[ -3.7276, 6.9860 ],
	[ -3.8614, 6.8770 ],
	[ -4.9726, 6.1219 ],
	[ -5.1232, 6.0375 ],
	[ -5.2860, 5.9803 ],
	[ -5.4563, 5.9520 ],
	[ -5.6288, 5.9534 ],
	[ -5.7986, 5.9844 ],
	[ -5.9605, 6.0441 ],
	[ -6.1097, 6.1308 ],
	[ -6.2418, 6.2418 ],
	[ -7.7582, 7.7582 ],
	[ -7.8941, 7.8719 ],
	[ -8.0480, 7.9599 ],
	[ -8.2151, 8.0192 ],
	[ -8.3899, 8.0482 ],
	[ -8.5672, 8.0458 ],
	[ -8.7412, 8.0122 ],
	[ -8.9066, 7.9484 ],
	[ -9.0581, 7.8564 ],
	[ -9.1910, 7.7390 ],
	[ -9.3011, 7.6001 ],
	[ -10.6689, 5.5177 ],
	[ -10.7527, 5.3615 ],
	[ -10.8076, 5.1930 ],
	[ -10.8319, 5.0174 ],
	[ -10.8248, 4.8403 ],
	[ -10.7866, 4.6672 ],
	[ -10.7183, 4.5036 ],
	[ -10.6223, 4.3546 ],
	[ -10.5014, 4.2249 ],
	[ -10.3596, 4.1186 ],
	[ -10.2012, 4.0389 ],
	[ -8.2074, 3.2495 ],
	[ -8.0530, 3.1724 ],
	[ -7.9142, 3.0699 ],
	[ -7.7951, 2.9450 ],
	[ -7.6992, 2.8015 ],
	[ -7.6294, 2.6437 ],
	[ -7.5878, 2.4762 ],
	[ -7.5756, 2.3041 ],
	[ -7.5932, 2.1324 ],
	[ -7.8450, 0.8126 ],
	[ -7.8918, 0.6465 ],
	[ -7.9665, 0.4910 ],
	[ -8.0669, 0.3506 ],
	[ -8.1898, 0.2295 ],
	[ -8.3318, 0.1314 ],
	[ -8.4885, 0.0591 ],
	[ -8.6553, 0.0149 ],
	[ -8.8273, 0.0000 ],
	[ -10.9717, 0.0000 ],
	[ -11.1483, -0.0157 ],
	[ -11.3193, -0.0624 ],
	[ -11.4794, -0.1385 ],
	[ -11.6235, -0.2416 ],
	[ -11.7472, -0.3686 ],
	[ -11.8465, -0.5155 ],
	[ -11.9183, -0.6776 ],
	[ -11.9603, -0.8498 ],
	[ -11.9713, -1.0267 ],
	[ -11.9509, -1.2028 ],
	[ -11.4457, -3.6424 ],
	[ -11.3945, -3.8121 ],
	[ -11.3141, -3.9701 ],
	[ -11.2072, -4.1115 ],
	[ -11.0769, -4.2317 ],
	[ -10.9274, -4.3270 ],
	[ -10.7635, -4.3945 ],
	[ -10.5902, -4.4319 ],
	[ -10.4131, -4.4382 ],
	[ -10.2376, -4.4131 ],
	[ -10.0693, -4.3574 ],
	[ -8.1013, -3.5057 ],
	[ -7.9376, -3.4511 ],
	[ -7.7669, -3.4255 ],
	[ -7.5944, -3.4295 ],
	[ -7.4251, -3.4632 ],
	[ -7.2642, -3.5255 ],
	[ -7.1163, -3.6145 ],
	[ -6.9860, -3.7276 ],
	[ -6.8770, -3.8614 ],
	[ -6.1219, -4.9726 ],
	[ -6.0375, -5.1232 ],
	[ -5.9803, -5.2860 ],
	[ -5.9520, -5.4563 ],
	[ -5.9534, -5.6288 ],
	[ -5.9844, -5.7986 ],
	[ -6.0441, -5.9605 ],
	[ -6.1308, -6.1097 ],
	[ -6.2418, -6.2418 ],
	[ -7.7582, -7.7582 ],
	[ -7.8719, -7.8941 ],
	[ -7.9599, -8.0480 ],
	[ -8.0192, -8.2151 ],
	[ -8.0482, -8.3899 ],
	[ -8.0458, -8.5672 ],
	[ -8.0122, -8.7412 ],
	[ -7.9484, -8.9066 ],
	[ -7.8564, -9.0581 ],
	[ -7.7390, -9.1910 ],
	[ -7.6001, -9.3011 ],
	[ -5.5177, -10.6689 ],
	[ -5.3615, -10.7527 ],
	[ -5.1930, -10.8076 ],
	[ -5.0174, -10.8319 ],
	[ -4.8403, -10.8248 ],
	[ -4.6672, -10.7866 ],
	[ -4.5036, -10.7183 ],
	[ -4.3546, -10.6223 ],
	[ -4.2249, -10.5014 ],
	[ -4.1186, -10.3596 ],
	[ -4.0389, -10.2012 ],
	[ -3.2495, -8.2074 ],
	[ -3.1724, -8.0530 ],
	[ -3.0699, -7.9142 ],
	[ -2.9450, -7.7951 ],
	[ -2.8015, -7.6992 ],
	[ -2.6437, -7.6294 ],
	[ -2.4762, -7.5878 ],
	[ -2.3041, -7.5756 ],
	[ -2.1324, -7.5932 ],
	[ -0.8126, -7.8450 ],
	[ -0.6465, -7.8918 ],
	[ -0.4910, -7.9665 ],
	[ -0.3506, -8.0669 ],
	[ -0.2295, -8.1898 ],
	[ -0.1314, -8.3318 ],
	[ -0.0591, -8.4885 ],
	[ -0.0149, -8.6553 ],
	[ -0.0000, -8.8273 ],
	[ -0.0000, -10.9717 ],
	[ 0.0157, -11.1483 ],
	[ 0.0624, -11.3193 ],
	[ 0.1385, -11.4794 ],
	[ 0.2416, -11.6235 ],
	[ 0.3686, -11.7472 ],
	[ 0.5155, -11.8465 ],
	[ 0.6776, -11.9183 ],
	[ 0.8498, -11.9603 ],
	[ 1.0267, -11.9713 ],
	[ 1.2028, -11.9509 ],
	[ 3.6424, -11.4457 ],
	[ 3.8121, -11.3945 ],
	[ 3.9701, -11.3141 ],
	[ 4.1115, -11.2072 ],
	[ 4.2317, -11.0769 ],
	[ 4.3270, -10.9274 ],
	[ 4.3945, -10.7635 ],
	[ 4.4319, -10.5902 ],
	[ 4.4382, -10.4131 ],
	[ 4.4131, -10.2376 ],
	[ 4.3574, -10.0693 ],
	[ 3.5057, -8.1013 ],
	[ 3.4511, -7.9376 ],
	[ 3.4255, -7.7669 ],
	[ 3.4295, -7.5944 ],
	[ 3.4632, -7.4251 ],
	[ 3.5255, -7.2642 ],
	[ 3.6145, -7.1163 ],
	[ 3.7276, -6.9860 ],
	[ 3.8614, -6.8770 ],
	[ 4.9726, -6.1219 ],
	[ 5.1232, -6.0375 ],
	[ 5.2860, -5.9803 ],
	[ 5.4563, -5.9520 ],
	[ 5.6288, -5.9534 ],
	[ 5.7986, -5.9844 ],
	[ 5.9605, -6.0441 ],
	[ 6.1097, -6.1308 ],
	[ 6.2418, -6.2418 ],
	[ 7.7582, -7.7582 ],
	[ 7.8941, -7.8719 ],
	[ 8.0480, -7.9599 ],
	[ 8.2151, -8.0192 ],
	[ 8.3899, -8.0482 ],
	[ 8.5672, -8.0458 ],
	[ 8.7412, -8.0122 ],
	[ 8.9066, -7.9484 ],
	[ 9.0581, -7.8564 ],
	[ 9.1910, -7.7390 ],
	[ 9.3011, -7.6001 ],
	[ 10.6689, -5.5177 ],
	[ 10.7527, -5.3615 ],
	[ 10.8076, -5.1930 ],
	[ 10.8319, -5.0174 ],
	[ 10.8248, -4.8403 ],
	[ 10.7866, -4.6672 ],
	[ 10.7183, -4.5036 ],
	[ 10.6223, -4.3546 ],
	[ 10.5014, -4.2249 ],
	[ 10.3596, -4.1186 ],
	[ 10.2012, -4.0389 ],
	[ 8.2074, -3.2495 ],
	[ 8.0530, -3.1724 ],
	[ 7.9142, -3.0699 ],
	[ 7.7951, -2.9450 ],
	[ 7.6992, -2.8015 ],
	[ 7.6294, -2.6437 ],
	[ 7.5878, -2.4762 ],
	[ 7.5756, -2.3041 ],
	[ 7.5932, -2.1324 ],
	[ 7.8450, -0.8126 ],
	[ 7.8918, -0.6465 ],
	[ 7.9665, -0.4910 ],
	[ 8.0669, -0.3506 ],
	[ 8.1898, -0.2295 ],
	[ 8.3318, -0.1314 ],
	[ 8.4885, -0.0591 ],
	[ 8.6553, -0.0149 ],
	[ 8.8273, -0.0000 ] ] });

face_fig_springWorm_faceRight_Fa000 = subtract( ctr_face_fig_springWorm_faceRight_Fa000_Ctr000, ctr_face_fig_springWorm_faceRight_Fa000_Ctr001 );
fig_springWorm_faceRight = face_fig_springWorm_faceRight_Fa000;
const ctr_face_fig_springWorm_faceW1b_Fa000_Ctr000 = polygon({ points: [ [ 15.0000, 0.0000 ],
	[ 14.8717, 1.9579 ],
	[ 14.4889, 3.8823 ],
	[ 13.8582, 5.7403 ],
	[ 12.9904, 7.5000 ],
	[ 11.9003, 9.1314 ],
	[ 10.6066, 10.6066 ],
	[ 9.1314, 11.9003 ],
	[ 7.5000, 12.9904 ],
	[ 5.7403, 13.8582 ],
	[ 3.8823, 14.4889 ],
	[ 1.9579, 14.8717 ],
	[ 0.0000, 15.0000 ],
	[ -1.9579, 14.8717 ],
	[ -3.8823, 14.4889 ],
	[ -5.7403, 13.8582 ],
	[ -7.5000, 12.9904 ],
	[ -9.1314, 11.9003 ],
	[ -10.6066, 10.6066 ],
	[ -11.9003, 9.1314 ],
	[ -12.9904, 7.5000 ],
	[ -13.8582, 5.7403 ],
	[ -14.4889, 3.8823 ],
	[ -14.8717, 1.9579 ],
	[ -15.0000, 0.0000 ],
	[ -14.8717, -1.9579 ],
	[ -14.4889, -3.8823 ],
	[ -13.8582, -5.7403 ],
	[ -12.9904, -7.5000 ],
	[ -11.9003, -9.1314 ],
	[ -10.6066, -10.6066 ],
	[ -9.1314, -11.9003 ],
	[ -7.5000, -12.9904 ],
	[ -5.7403, -13.8582 ],
	[ -3.8823, -14.4889 ],
	[ -1.9579, -14.8717 ],
	[ -0.0000, -15.0000 ],
	[ 1.9579, -14.8717 ],
	[ 3.8823, -14.4889 ],
	[ 5.7403, -13.8582 ],
	[ 7.5000, -12.9904 ],
	[ 9.1314, -11.9003 ],
	[ 10.6066, -10.6066 ],
	[ 11.9003, -9.1314 ],
	[ 12.9904, -7.5000 ],
	[ 13.8582, -5.7403 ],
	[ 14.4889, -3.8823 ],
	[ 14.8717, -1.9579 ],
	[ 15.0000, 0.0000 ] ] });

face_fig_springWorm_faceW1b_Fa000 = ctr_face_fig_springWorm_faceW1b_Fa000_Ctr000;
fig_springWorm_faceW1b = face_fig_springWorm_faceW1b_Fa000;

const subpax_springWorm_tube =
	translate( [ 0, 0, 2, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 20}, fig_springWorm_faceTube )
		)
	);


const subpax_springWorm_left =
	translate( [ 0, 0, 0, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 2}, fig_springWorm_faceLeft )
		)
	);


const subpax_springWorm_leftB =
	translate( [ 0, 0, 2, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 1}, fig_springWorm_faceW1b )
		)
	);


const subpax_springWorm_rightB =
	translate( [ 0, 0, 22, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 1}, fig_springWorm_faceW1b )
		)
	);


const subpax_springWorm_right =
	translate( [ 0, 0, 22, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 2}, fig_springWorm_faceRight )
		)
	);


const subpax_springWorm_groove1 =
	translate( [ 18, 0, 0, ],
		rotate( [ 0, -1.5707963267948966, 0, ],
			   extrudeLinear( {height: 36}, fig_springWorm_faceGroove1 )
		)
	);


const subpax_springWorm_groove2 =
	translate( [ 0, -18, 0, ],
		rotate( [ 0, -1.5707963267948966, -1.5707963267948966, ],
			   extrudeLinear( {height: 36}, fig_springWorm_faceGroove2 )
		)
	);

const ipax_springWorm_plus = union( subpax_springWorm_tube, subpax_springWorm_left, subpax_springWorm_right );
const ipax_springWorm_moins = union( subpax_springWorm_groove1, subpax_springWorm_groove2 );
const pax_springWorm = subtract( ipax_springWorm_plus, ipax_springWorm_moins );

return pax_springWorm;
}
module.exports = { main };
