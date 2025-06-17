#!/usr/bin/env node
// make_parts.js

import { exec } from "child_process";
import { promisify } from 'util';

const c_Parts = {
	door1arc_A: 'door1arc_A_v01',
	door1arc_B: 'door1arc_B_v01',
	stoneTower: 'stoneTower_v01',
	house: 'house_v01',
	springTorqueA_A1: 'springTorqueA_A1_v01',
	springTorqueA_B1: 'springTorqueA_B1_v01',
	springTorqueA_B2: 'springTorqueA_B2_v01',
	springTorqueA_C1: 'springTorqueA_C1_v01',
	springTorqueA_C2: 'springTorqueA_C2_v01',
	plugTorque: 'plugTorque_v01',
	springTorqueB_A: 'springTorqueB_A_v01',
	springTorqueB_B: 'springTorqueB_B_v01',
	springTorqueB_C: 'springTorqueB_C_v01',
	springTorqueC_A: 'springTorqueC_A_v01',
	springTorqueC_B: 'springTorqueC_B_v01',
	springTorqueC_C: 'springTorqueC_C_v01',
	springWorm: 'springWorm_v01',
	springOne: 'springOne_v01',
	springSide: 'springSide_v01',
	springInt: 'springInt_v01',
	heliostat: 'heliostat_v01',
	heliostat_A: 'heliostat_A_v01',
	heliostat_B: 'heliostat_B_v01',
	capsule_A: 'capsule_A_v01',
	capsule_B: 'capsule_B_v01',
	rccar_A1: 'rccar_A1_v01',
	rccar_A2: 'rccar_A2_v01',
	rccar_A3: 'rccar_A3_v01',
	rccar_B2: 'rccar_B2_v01',
	rccar_B3: 'rccar_B3_v01',
	rccar_B4: 'rccar_B4_v01',
	rccar_B5: 'rccar_B5_v01',
	singleBone: 'singleBone_v01',
	doubleBone: 'doubleBone_v01',
	pcar: 'pcar_v01',
};

const c_svgdxf = {
	door1arc_A: ['faceDoor'],
	door1arc_B: ['faceDoor'],
	stoneTower: ['faceHplan', 'faceDoor', 'faceWin1', 'faceWin2', 'faceWin3', 'faceWin4', 'faceCorri', 'faceFS', 'faceTopExt', 'faceTCFront', 'faceTCMid', 'faceTCRear', 'faceFloors', 'faceStairsL1', 'faceStairsL2', 'faceStairsW1', 'faceStairsW2'],
	house: ['facePA', 'facePB', 'facePC', 'facePD', 'facePE', 'faceTerrasse'],
	springTorqueA_A1: ['faceProfile'],
	springTorqueA_B1: ['faceProfile'],
	springTorqueA_B2: ['faceProfile'],
	springTorqueA_C1: ['faceProfile'],
	springTorqueA_C2: ['faceProfile'],
	plugTorque: ['faceIntern', 'faceExtern'],
	springTorqueB_A: ['faceProfile'],
	springTorqueB_B: ['faceProfile'],
	springTorqueB_C: ['faceProfile'],
	springTorqueC_A: ['faceProfile'],
	springTorqueC_B: ['faceProfile'],
	springTorqueC_C: ['faceProfile'],
	springWorm: ['faceTube', 'faceGroove1', 'faceGroove2', 'faceLeft', 'faceRight', 'faceW1b'],
	springOne: ['faceWallB', 'SFG_pattern', 'SFG_profiles', 'SFG_f00', 'SFG_f01'],
	springSide: ['SFG_pattern', 'SFG_profiles', 'SFG_f00', 'SFG_f01'],
	springInt: ['SFG_pattern', 'SFG_profiles', 'SFG_f00', 'SFG_f01'],
	heliostat: ['faceBottomPole', 'faceDoor', 'faceBottomDisc', 'faceTopPole', 'faceHorizPole', 'faceHorizPoleInt', 'faceDiag3', 'faceDiagE', 'faceDiagI', 'faceCleanDiag', 'faceHand'],
	heliostat_A: ['faceBottomPole', 'faceDoor', 'faceBottomDisc', 'faceTopPole', 'faceHorizPole', 'faceHorizPoleInt', 'faceDiag3', 'faceDiagE', 'faceDiagI', 'faceCleanDiag', 'faceHand'],
	heliostat_B: ['faceBottomPole', 'faceDoor', 'faceBottomDisc', 'faceTopPole', 'faceHorizPole', 'faceHorizPoleInt', 'faceDiag3', 'faceDiagE', 'faceDiagI', 'faceCleanDiag', 'faceHand'],
	capsule_A: ['faceBody', 'faceWheels', 'faceFront', 'faceTop', 'faceTopInt', 'faceTopTop', 'faceTopLeg', 'faceWall'],
	capsule_B: ['faceBody', 'faceWheels', 'faceFront', 'faceTop', 'faceTopInt', 'faceTopTop', 'faceTopLeg', 'faceWall'],
	rccar_A1: ['facePlatform', 'faceTop', 'faceSide', 'faceTriangle', 'facePFfixation', 'faceBones', 'faceHandFixation', 'faceHandPlateR', 'faceHandPlateL', 'faceHandBackR', 'faceHandBackL', 'faceMotorBulkR', 'faceMotorBulkL', 'faceMFoot', 'faceWheel'],
	rccar_A2: ['facePlatform', 'faceTop', 'faceSide', 'faceTriangle', 'facePFfixation', 'faceBones', 'faceHandFixation', 'faceHandPlateR', 'faceHandPlateL', 'faceHandBackR', 'faceHandBackL', 'faceMotorBulkR', 'faceMotorBulkL', 'faceMFoot', 'faceWheel'],
	rccar_A3: ['facePlatform', 'faceTop', 'faceSide', 'faceTriangle', 'facePFfixation', 'faceBones', 'faceHandFixation', 'faceHandPlateR', 'faceHandPlateL', 'faceHandBackR', 'faceHandBackL', 'faceMotorBulkR', 'faceMotorBulkL', 'faceMFoot', 'faceWheel'],
	rccar_B2: ['facePlatform', 'faceTop', 'faceSide', 'faceTriangle', 'facePFfixation', 'faceBones', 'faceHandFixation', 'faceHandPlateR', 'faceHandPlateL', 'faceHandBackR', 'faceHandBackL', 'faceMotorBulkR', 'faceMotorBulkL', 'faceMFoot', 'faceWheel'],
	rccar_B3: ['facePlatform', 'faceTop', 'faceSide', 'faceTriangle', 'facePFfixation', 'faceBones', 'faceHandFixation', 'faceHandPlateR', 'faceHandPlateL', 'faceHandBackR', 'faceHandBackL', 'faceMotorBulkR', 'faceMotorBulkL', 'faceMFoot', 'faceWheel'],
	rccar_B4: ['facePlatform', 'faceTop', 'faceSide', 'faceTriangle', 'facePFfixation', 'faceBones', 'faceHandFixation', 'faceHandPlateR', 'faceHandPlateL', 'faceHandBackR', 'faceHandBackL', 'faceMotorBulkR', 'faceMotorBulkL', 'faceMFoot', 'faceWheel'],
	rccar_B5: ['facePlatform', 'faceTop', 'faceSide', 'faceTriangle', 'facePFfixation', 'faceBones', 'faceHandFixation', 'faceHandPlateR', 'faceHandPlateL', 'faceHandBackR', 'faceHandBackL', 'faceMotorBulkR', 'faceMotorBulkL', 'faceMFoot', 'faceWheel'],
	singleBone: ['faceBone'],
	doubleBone: ['SFG_pattern', 'SFG_profiles', 'SFG_f00', 'SFG_f01'],
	pcar: ['faceSideWiWheels', 'faceSideWoWheels', 'faceTop', 'faceFront', 'faceWheel'],
};

function inferDesignName(instanceName) {
	const re = /_[A-Z][0-9]*$/;
	const rDesignName = instanceName.replace(re, '');
	return rDesignName
}

function getCmd(dName, fName) {
	const desiName = inferDesignName(dName);
	console.log(`info456: reference name: ${dName}   design name: ${desiName}`);
	const rCmd = [];
	//rCmd.push('pwd');
	//rCmd.push(`ls refs/${dName}`);
	//rCmd.push(`npx desi77-cli -d=desi77/${desiName} -o=refs/${dName} --outFileName=px_${fName}.json write json_param`);
	rCmd.push(`npx desi77-cli -d=desi77/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}.log.txt write compute_log`);
	// svg, dxf
	for (const face of c_svgdxf[dName]) {
		rCmd.push(`npx desi77-cli -d=desi77/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}_${face}.svg write svg__${face}`);
		rCmd.push(`npx desi77-cli -d=desi77/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}_${face}.dxf write dxf__${face}`);
	}
	// paxJson
	rCmd.push(`npx desi77-cli -d=desi77/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}.pax.json write pax_all`);
	// OpenSCAD
	rCmd.push(`npx desi77-cli -d=desi77/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}.scad write scad_3d_openscad`);
	//rCmd.push(`openscad -o refs/${dName}/${fName}_oscad.stl refs/${dName}/${fName}.scad`);
	// JsCAD
	rCmd.push(`npx desi77-cli -d=desi77/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}.js write js_3d_openjscad`);
	//rCmd.push(`cd refs && npx jscad ${dName}/${fName}.js -o ${dName}/${fName}_jscad.stl`);
	// FreeCAD
	rCmd.push(`npx desi77-cli -d=desi77/${desiName} -p=refs/${dName}/px_${fName}.json -o=refs/${dName} --outFileName=${fName}.py write py_3d_freecad`);
	//rCmd.push(`freecad.cmd refs/${dName}/${fName}.py refs/${dName}/${fName}_fc`);
	//rCmd.push(`npx rimraf refs/${dName}`);
	return rCmd
}

const aExec = promisify(exec);

async function execCmd(cmd) {
	console.log(cmd);
	try {
		const { stdout, stderr } = await aExec(cmd);
		console.log('---> stdout:');
		console.log(stdout);
		console.log('---> stderr:');
		console.log(stderr);
		console.log('---> end of log');
	} catch (err) {
		console.log(`err895: Error by executing: ${cmd}`);
		console.log(err);
		console.log(`info895: script stopped!`);
		process.exit(1);
	}
}

async function loopDesign(dList) {
	const pList = Object.keys(c_Parts);
	for (const [ idx, oneDesign ] of dList.entries()) {
		const idx2 = idx + 1;
		console.log(`${idx2} : working on ${oneDesign}`);
		if (!pList.includes(oneDesign)) {
			console.log(`err309: design ${oneDesign} is unkown!`);
			process.exit(1);
		}
		const cmds = getCmd(oneDesign, c_Parts[oneDesign]);
		for (const oneCmd of cmds) {
			await execCmd(oneCmd);
		}
		console.log(`${idx2} : end of generation of ${oneDesign}`);
	}
}

async function mhcli(args) {
	//console.log(args);
	const c_flag_all = '--all';
	const allList = Object.keys(c_Parts);
	if (args.length === 3 && args[2] === c_flag_all) {
		await loopDesign(allList);
	} else if (args.length > 2) {
		await loopDesign(args.slice(2));
	} else {
		console.log('err206: no argument provided!');
		console.log(`Possible arguments: ${c_flag_all} or the following design names:`);
		let str1 = '';
		let str2 = '';
		for (const [ idx, oneDesign ] of allList.entries()) {
			str1 += ` ${oneDesign}`;
			str2 += `${(idx + 1).toString().padStart(2, ' ')} : ${oneDesign}\n`;
		}
		console.log(str1);
		console.log(str2);
		console.log('info404: Nothing done!');
	}
}

console.log('make_parts.js says Hello!');
await mhcli(process.argv);
console.log('make_parts.js says Bye!');

