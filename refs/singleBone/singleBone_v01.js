// Generated by Parametrix

const { polygon } = require('@jscad/modeling').primitives;
//const { subtract } = require('@jscad/modeling').booleans;
//const { union, intersect, scission, subtract } = require('@jscad/modeling').booleans;
const { union, intersect, subtract } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRotate } = require('@jscad/modeling').extrusions;
const { translate, rotate } = require('@jscad/modeling').transforms;

const main = () => {

const ctr_face_fig_singleBone_faceBone_Fa000_Ctr000 = polygon({ points: [ [ 22.5533, 26.7647 ],
	[ 20.9982, 28.0014 ],
	[ 19.3754, 29.1478 ],
	[ 17.6902, 30.2003 ],
	[ 15.9480, 31.1554 ],
	[ 14.1544, 32.0102 ],
	[ 12.3152, 32.7618 ],
	[ 10.4363, 33.4078 ],
	[ 8.5238, 33.9462 ],
	[ 6.5838, 34.3752 ],
	[ 4.6225, 34.6934 ],
	[ 2.6464, 34.8998 ],
	[ 0.6618, 34.9937 ],
	[ -1.3250, 34.9749 ],
	[ -3.3075, 34.8434 ],
	[ -5.2793, 34.5995 ],
	[ -7.2342, 34.2442 ],
	[ -9.1657, 33.7785 ],
	[ -11.0677, 33.2040 ],
	[ -12.9340, 32.5225 ],
	[ -14.7586, 31.7361 ],
	[ -16.5357, 30.8475 ],
	[ -18.2595, 29.8595 ],
	[ -19.9245, 28.7753 ],
	[ -21.5252, 27.5983 ],
	[ -23.0566, 26.3324 ],
	[ -24.5136, 24.9816 ],
	[ -25.8917, 23.5503 ],
	[ -27.1864, 22.0432 ],
	[ -28.3934, 20.4650 ],
	[ -29.5089, 18.8208 ],
	[ -30.5294, 17.1160 ],
	[ -31.4514, 15.3561 ],
	[ -32.2721, 13.5466 ],
	[ -32.9888, 11.6935 ],
	[ -33.5992, 9.8028 ],
	[ -34.1013, 7.8804 ],
	[ -34.4935, 5.9326 ],
	[ -34.7746, 3.9657 ],
	[ -34.9436, 1.9861 ],
	[ -35.0000, -0.0000 ],
	[ -34.9436, -1.9861 ],
	[ -34.7746, -3.9657 ],
	[ -34.4935, -5.9326 ],
	[ -34.1013, -7.8804 ],
	[ -33.5992, -9.8028 ],
	[ -32.9888, -11.6935 ],
	[ -32.2721, -13.5466 ],
	[ -31.4514, -15.3561 ],
	[ -30.5294, -17.1160 ],
	[ -29.5089, -18.8208 ],
	[ -28.3934, -20.4650 ],
	[ -27.1864, -22.0432 ],
	[ -25.8917, -23.5503 ],
	[ -24.5136, -24.9816 ],
	[ -23.0566, -26.3324 ],
	[ -21.5252, -27.5983 ],
	[ -19.9245, -28.7753 ],
	[ -18.2595, -29.8595 ],
	[ -16.5357, -30.8475 ],
	[ -14.7586, -31.7361 ],
	[ -12.9340, -32.5225 ],
	[ -11.0677, -33.2040 ],
	[ -9.1657, -33.7785 ],
	[ -7.2342, -34.2442 ],
	[ -5.2793, -34.5995 ],
	[ -3.3075, -34.8434 ],
	[ -1.3250, -34.9749 ],
	[ 0.6618, -34.9937 ],
	[ 2.6464, -34.8998 ],
	[ 4.6225, -34.6934 ],
	[ 6.5838, -34.3752 ],
	[ 8.5238, -33.9462 ],
	[ 10.4363, -33.4078 ],
	[ 12.3152, -32.7618 ],
	[ 14.1544, -32.0102 ],
	[ 15.9480, -31.1554 ],
	[ 17.6902, -30.2003 ],
	[ 19.3754, -29.1478 ],
	[ 20.9982, -28.0014 ],
	[ 22.5533, -26.7647 ],
	[ 24.0647, -25.5406 ],
	[ 25.6225, -24.3762 ],
	[ 27.2244, -23.2733 ],
	[ 28.8681, -22.2335 ],
	[ 30.5509, -21.2584 ],
	[ 32.2704, -20.3495 ],
	[ 34.0239, -19.5082 ],
	[ 35.8088, -18.7357 ],
	[ 37.6224, -18.0332 ],
	[ 39.4620, -17.4017 ],
	[ 41.3247, -16.8423 ],
	[ 43.2077, -16.3558 ],
	[ 45.1083, -15.9428 ],
	[ 47.0235, -15.6041 ],
	[ 48.9504, -15.3401 ],
	[ 50.8861, -15.1512 ],
	[ 52.8277, -15.0378 ],
	[ 54.7723, -15.0000 ],
	[ 145.2277, -15.0000 ],
	[ 147.1723, -15.0378 ],
	[ 149.1139, -15.1512 ],
	[ 151.0496, -15.3401 ],
	[ 152.9765, -15.6041 ],
	[ 154.8917, -15.9428 ],
	[ 156.7923, -16.3558 ],
	[ 158.6753, -16.8423 ],
	[ 160.5380, -17.4017 ],
	[ 162.3776, -18.0332 ],
	[ 164.1912, -18.7357 ],
	[ 165.9761, -19.5082 ],
	[ 167.7296, -20.3495 ],
	[ 169.4491, -21.2584 ],
	[ 171.1319, -22.2335 ],
	[ 172.7756, -23.2733 ],
	[ 174.3775, -24.3762 ],
	[ 175.9353, -25.5406 ],
	[ 177.4467, -26.7647 ],
	[ 179.0018, -28.0014 ],
	[ 180.6246, -29.1478 ],
	[ 182.3098, -30.2003 ],
	[ 184.0520, -31.1554 ],
	[ 185.8456, -32.0102 ],
	[ 187.6848, -32.7618 ],
	[ 189.5637, -33.4078 ],
	[ 191.4762, -33.9462 ],
	[ 193.4162, -34.3752 ],
	[ 195.3775, -34.6934 ],
	[ 197.3536, -34.8998 ],
	[ 199.3382, -34.9937 ],
	[ 201.3250, -34.9749 ],
	[ 203.3075, -34.8434 ],
	[ 205.2793, -34.5995 ],
	[ 207.2342, -34.2442 ],
	[ 209.1657, -33.7785 ],
	[ 211.0677, -33.2040 ],
	[ 212.9340, -32.5225 ],
	[ 214.7586, -31.7361 ],
	[ 216.5357, -30.8475 ],
	[ 218.2595, -29.8595 ],
	[ 219.9245, -28.7753 ],
	[ 221.5252, -27.5983 ],
	[ 223.0566, -26.3324 ],
	[ 224.5136, -24.9816 ],
	[ 225.8917, -23.5503 ],
	[ 227.1864, -22.0432 ],
	[ 228.3934, -20.4650 ],
	[ 229.5089, -18.8208 ],
	[ 230.5294, -17.1160 ],
	[ 231.4514, -15.3561 ],
	[ 232.2721, -13.5466 ],
	[ 232.9888, -11.6935 ],
	[ 233.5992, -9.8028 ],
	[ 234.1013, -7.8804 ],
	[ 234.4935, -5.9326 ],
	[ 234.7746, -3.9657 ],
	[ 234.9436, -1.9861 ],
	[ 235.0000, -0.0000 ],
	[ 234.9436, 1.9861 ],
	[ 234.7746, 3.9657 ],
	[ 234.4935, 5.9326 ],
	[ 234.1013, 7.8804 ],
	[ 233.5992, 9.8028 ],
	[ 232.9888, 11.6935 ],
	[ 232.2721, 13.5466 ],
	[ 231.4514, 15.3561 ],
	[ 230.5294, 17.1160 ],
	[ 229.5089, 18.8208 ],
	[ 228.3934, 20.4650 ],
	[ 227.1864, 22.0432 ],
	[ 225.8917, 23.5503 ],
	[ 224.5136, 24.9816 ],
	[ 223.0566, 26.3324 ],
	[ 221.5252, 27.5983 ],
	[ 219.9245, 28.7753 ],
	[ 218.2595, 29.8595 ],
	[ 216.5357, 30.8475 ],
	[ 214.7586, 31.7361 ],
	[ 212.9340, 32.5225 ],
	[ 211.0677, 33.2040 ],
	[ 209.1657, 33.7785 ],
	[ 207.2342, 34.2442 ],
	[ 205.2793, 34.5995 ],
	[ 203.3075, 34.8434 ],
	[ 201.3250, 34.9749 ],
	[ 199.3382, 34.9937 ],
	[ 197.3536, 34.8998 ],
	[ 195.3775, 34.6934 ],
	[ 193.4162, 34.3752 ],
	[ 191.4762, 33.9462 ],
	[ 189.5637, 33.4078 ],
	[ 187.6848, 32.7618 ],
	[ 185.8456, 32.0102 ],
	[ 184.0520, 31.1554 ],
	[ 182.3098, 30.2003 ],
	[ 180.6246, 29.1478 ],
	[ 179.0018, 28.0014 ],
	[ 177.4467, 26.7647 ],
	[ 175.9353, 25.5406 ],
	[ 174.3775, 24.3762 ],
	[ 172.7756, 23.2733 ],
	[ 171.1319, 22.2335 ],
	[ 169.4491, 21.2584 ],
	[ 167.7296, 20.3495 ],
	[ 165.9761, 19.5082 ],
	[ 164.1912, 18.7357 ],
	[ 162.3776, 18.0332 ],
	[ 160.5380, 17.4017 ],
	[ 158.6753, 16.8423 ],
	[ 156.7923, 16.3558 ],
	[ 154.8917, 15.9428 ],
	[ 152.9765, 15.6041 ],
	[ 151.0496, 15.3401 ],
	[ 149.1139, 15.1512 ],
	[ 147.1723, 15.0378 ],
	[ 145.2277, 15.0000 ],
	[ 54.7723, 15.0000 ],
	[ 52.8277, 15.0378 ],
	[ 50.8861, 15.1512 ],
	[ 48.9504, 15.3401 ],
	[ 47.0235, 15.6041 ],
	[ 45.1083, 15.9428 ],
	[ 43.2077, 16.3558 ],
	[ 41.3247, 16.8423 ],
	[ 39.4620, 17.4017 ],
	[ 37.6224, 18.0332 ],
	[ 35.8088, 18.7357 ],
	[ 34.0239, 19.5082 ],
	[ 32.2704, 20.3495 ],
	[ 30.5509, 21.2584 ],
	[ 28.8681, 22.2335 ],
	[ 27.2244, 23.2733 ],
	[ 25.6225, 24.3762 ],
	[ 24.0647, 25.5406 ],
	[ 22.5533, 26.7647 ] ] });

const ctr_face_fig_singleBone_faceBone_Fa000_Ctr001 = polygon({ points: [ [ 15.0000, 0.0000 ],
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

const ctr_face_fig_singleBone_faceBone_Fa000_Ctr002 = polygon({ points: [ [ 215.0000, 0.0000 ],
	[ 214.8717, 1.9579 ],
	[ 214.4889, 3.8823 ],
	[ 213.8582, 5.7403 ],
	[ 212.9904, 7.5000 ],
	[ 211.9003, 9.1314 ],
	[ 210.6066, 10.6066 ],
	[ 209.1314, 11.9003 ],
	[ 207.5000, 12.9904 ],
	[ 205.7403, 13.8582 ],
	[ 203.8823, 14.4889 ],
	[ 201.9579, 14.8717 ],
	[ 200.0000, 15.0000 ],
	[ 198.0421, 14.8717 ],
	[ 196.1177, 14.4889 ],
	[ 194.2597, 13.8582 ],
	[ 192.5000, 12.9904 ],
	[ 190.8686, 11.9003 ],
	[ 189.3934, 10.6066 ],
	[ 188.0997, 9.1314 ],
	[ 187.0096, 7.5000 ],
	[ 186.1418, 5.7403 ],
	[ 185.5111, 3.8823 ],
	[ 185.1283, 1.9579 ],
	[ 185.0000, 0.0000 ],
	[ 185.1283, -1.9579 ],
	[ 185.5111, -3.8823 ],
	[ 186.1418, -5.7403 ],
	[ 187.0096, -7.5000 ],
	[ 188.0997, -9.1314 ],
	[ 189.3934, -10.6066 ],
	[ 190.8686, -11.9003 ],
	[ 192.5000, -12.9904 ],
	[ 194.2597, -13.8582 ],
	[ 196.1177, -14.4889 ],
	[ 198.0421, -14.8717 ],
	[ 200.0000, -15.0000 ],
	[ 201.9579, -14.8717 ],
	[ 203.8823, -14.4889 ],
	[ 205.7403, -13.8582 ],
	[ 207.5000, -12.9904 ],
	[ 209.1314, -11.9003 ],
	[ 210.6066, -10.6066 ],
	[ 211.9003, -9.1314 ],
	[ 212.9904, -7.5000 ],
	[ 213.8582, -5.7403 ],
	[ 214.4889, -3.8823 ],
	[ 214.8717, -1.9579 ],
	[ 215.0000, 0.0000 ] ] });

const ctr_face_fig_singleBone_faceBone_Fa000_Ctr003 = polygon({ points: [ [ 64.0000, 0.0000 ],
	[ 63.8559, 1.4632 ],
	[ 63.4291, 2.8701 ],
	[ 62.7360, 4.1668 ],
	[ 61.8033, 5.3033 ],
	[ 60.6668, 6.2360 ],
	[ 59.3701, 6.9291 ],
	[ 57.9632, 7.3559 ],
	[ 56.5000, 7.5000 ],
	[ 55.0368, 7.3559 ],
	[ 53.6299, 6.9291 ],
	[ 52.3332, 6.2360 ],
	[ 51.1967, 5.3033 ],
	[ 50.2640, 4.1668 ],
	[ 49.5709, 2.8701 ],
	[ 49.1441, 1.4632 ],
	[ 49.0000, 0.0000 ],
	[ 49.1441, -1.4632 ],
	[ 49.5709, -2.8701 ],
	[ 50.2640, -4.1668 ],
	[ 51.1967, -5.3033 ],
	[ 52.3332, -6.2360 ],
	[ 53.6299, -6.9291 ],
	[ 55.0368, -7.3559 ],
	[ 56.5000, -7.5000 ],
	[ 57.9632, -7.3559 ],
	[ 59.3701, -6.9291 ],
	[ 60.6668, -6.2360 ],
	[ 61.8033, -5.3033 ],
	[ 62.7360, -4.1668 ],
	[ 63.4291, -2.8701 ],
	[ 63.8559, -1.4632 ],
	[ 64.0000, 0.0000 ] ] });

const ctr_face_fig_singleBone_faceBone_Fa000_Ctr004 = polygon({ points: [ [ 93.0000, 0.0000 ],
	[ 92.8559, 1.4632 ],
	[ 92.4291, 2.8701 ],
	[ 91.7360, 4.1668 ],
	[ 90.8033, 5.3033 ],
	[ 89.6668, 6.2360 ],
	[ 88.3701, 6.9291 ],
	[ 86.9632, 7.3559 ],
	[ 85.5000, 7.5000 ],
	[ 84.0368, 7.3559 ],
	[ 82.6299, 6.9291 ],
	[ 81.3332, 6.2360 ],
	[ 80.1967, 5.3033 ],
	[ 79.2640, 4.1668 ],
	[ 78.5709, 2.8701 ],
	[ 78.1441, 1.4632 ],
	[ 78.0000, 0.0000 ],
	[ 78.1441, -1.4632 ],
	[ 78.5709, -2.8701 ],
	[ 79.2640, -4.1668 ],
	[ 80.1967, -5.3033 ],
	[ 81.3332, -6.2360 ],
	[ 82.6299, -6.9291 ],
	[ 84.0368, -7.3559 ],
	[ 85.5000, -7.5000 ],
	[ 86.9632, -7.3559 ],
	[ 88.3701, -6.9291 ],
	[ 89.6668, -6.2360 ],
	[ 90.8033, -5.3033 ],
	[ 91.7360, -4.1668 ],
	[ 92.4291, -2.8701 ],
	[ 92.8559, -1.4632 ],
	[ 93.0000, 0.0000 ] ] });

const ctr_face_fig_singleBone_faceBone_Fa000_Ctr005 = polygon({ points: [ [ 122.0000, 0.0000 ],
	[ 121.8559, 1.4632 ],
	[ 121.4291, 2.8701 ],
	[ 120.7360, 4.1668 ],
	[ 119.8033, 5.3033 ],
	[ 118.6668, 6.2360 ],
	[ 117.3701, 6.9291 ],
	[ 115.9632, 7.3559 ],
	[ 114.5000, 7.5000 ],
	[ 113.0368, 7.3559 ],
	[ 111.6299, 6.9291 ],
	[ 110.3332, 6.2360 ],
	[ 109.1967, 5.3033 ],
	[ 108.2640, 4.1668 ],
	[ 107.5709, 2.8701 ],
	[ 107.1441, 1.4632 ],
	[ 107.0000, 0.0000 ],
	[ 107.1441, -1.4632 ],
	[ 107.5709, -2.8701 ],
	[ 108.2640, -4.1668 ],
	[ 109.1967, -5.3033 ],
	[ 110.3332, -6.2360 ],
	[ 111.6299, -6.9291 ],
	[ 113.0368, -7.3559 ],
	[ 114.5000, -7.5000 ],
	[ 115.9632, -7.3559 ],
	[ 117.3701, -6.9291 ],
	[ 118.6668, -6.2360 ],
	[ 119.8033, -5.3033 ],
	[ 120.7360, -4.1668 ],
	[ 121.4291, -2.8701 ],
	[ 121.8559, -1.4632 ],
	[ 122.0000, 0.0000 ] ] });

const ctr_face_fig_singleBone_faceBone_Fa000_Ctr006 = polygon({ points: [ [ 151.0000, 0.0000 ],
	[ 150.8559, 1.4632 ],
	[ 150.4291, 2.8701 ],
	[ 149.7360, 4.1668 ],
	[ 148.8033, 5.3033 ],
	[ 147.6668, 6.2360 ],
	[ 146.3701, 6.9291 ],
	[ 144.9632, 7.3559 ],
	[ 143.5000, 7.5000 ],
	[ 142.0368, 7.3559 ],
	[ 140.6299, 6.9291 ],
	[ 139.3332, 6.2360 ],
	[ 138.1967, 5.3033 ],
	[ 137.2640, 4.1668 ],
	[ 136.5709, 2.8701 ],
	[ 136.1441, 1.4632 ],
	[ 136.0000, 0.0000 ],
	[ 136.1441, -1.4632 ],
	[ 136.5709, -2.8701 ],
	[ 137.2640, -4.1668 ],
	[ 138.1967, -5.3033 ],
	[ 139.3332, -6.2360 ],
	[ 140.6299, -6.9291 ],
	[ 142.0368, -7.3559 ],
	[ 143.5000, -7.5000 ],
	[ 144.9632, -7.3559 ],
	[ 146.3701, -6.9291 ],
	[ 147.6668, -6.2360 ],
	[ 148.8033, -5.3033 ],
	[ 149.7360, -4.1668 ],
	[ 150.4291, -2.8701 ],
	[ 150.8559, -1.4632 ],
	[ 151.0000, 0.0000 ] ] });

face_fig_singleBone_faceBone_Fa000 = subtract( ctr_face_fig_singleBone_faceBone_Fa000_Ctr000, ctr_face_fig_singleBone_faceBone_Fa000_Ctr001, ctr_face_fig_singleBone_faceBone_Fa000_Ctr002, ctr_face_fig_singleBone_faceBone_Fa000_Ctr003, ctr_face_fig_singleBone_faceBone_Fa000_Ctr004, ctr_face_fig_singleBone_faceBone_Fa000_Ctr005, ctr_face_fig_singleBone_faceBone_Fa000_Ctr006 );
fig_singleBone_faceBone = face_fig_singleBone_faceBone_Fa000;

const subpax_singleBone_bone =
	translate( [ 0, 0, 0, ],
		rotate( [ 0, 0, 0, ],
			   extrudeLinear( {height: 10}, fig_singleBone_faceBone )
		)
	);

const pax_singleBone = subpax_singleBone_bone;

return pax_singleBone;
}
module.exports = { main };
