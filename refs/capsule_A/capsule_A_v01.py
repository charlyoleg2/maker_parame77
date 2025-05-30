# freecad-python generated by Parametrix
# run the script with:
# freecad.cmd myScript.py

import FreeCAD as App
import Part

#print(sys.argv)
outFileName = "capsule"
if (len(sys.argv) == 3):
    outFileName = sys.argv[2]
print(f"outFileName: {outFileName}")

def ctr_face_capsule_faceBody_Fa0_Ctr0():
	P000 = App.Vector(-2458.5786, 600.0000, 0)
	P001 = App.Vector(-1100.0000, 600.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(-1100.0000, 300.0000, 0)
	S001 = Part.LineSegment(P001, P002)
	P003 = App.Vector(1100.0000, 300.0000, 0)
	S002 = Part.LineSegment(P002, P003)
	P004 = App.Vector(1100.0000, 600.0000, 0)
	S003 = Part.LineSegment(P003, P004)
	P005 = App.Vector(2458.5786, 600.0000, 0)
	S004 = Part.LineSegment(P004, P005)
	P006 = App.Vector(2496.8470, 607.6120, 0)
	P007 = App.Vector(2529.2893, 629.2893, 0)
	S005 = Part.Arc(P005, P006, P007)
	P008 = App.Vector(2770.7107, 870.7107, 0)
	S006 = Part.LineSegment(P007, P008)
	P009 = App.Vector(2792.3880, 903.1530, 0)
	P010 = App.Vector(2800.0000, 941.4214, 0)
	S007 = Part.Arc(P008, P009, P010)
	P011 = App.Vector(2800.0000, 1374.9596, 0)
	S008 = Part.LineSegment(P010, P011)
	P012 = App.Vector(2796.9394, 1399.5105, 0)
	P013 = App.Vector(2787.9451, 1422.5586, 0)
	S009 = Part.Arc(P011, P012, P013)
	P014 = App.Vector(2170.3033, 2159.8730, 0)
	P015 = App.Vector(1313.2301, 2596.3812, 0)
	S010 = Part.Arc(P013, P014, P015)
	P016 = App.Vector(1300.0233, 2599.0912, 0)
	P017 = App.Vector(1286.5719, 2600.0000, 0)
	S011 = Part.Arc(P015, P016, P017)
	P018 = App.Vector(-1286.5719, 2600.0000, 0)
	S012 = Part.LineSegment(P017, P018)
	P019 = App.Vector(-1300.0233, 2599.0912, 0)
	P020 = App.Vector(-1313.2301, 2596.3812, 0)
	S013 = Part.Arc(P018, P019, P020)
	P021 = App.Vector(-2170.3033, 2159.8730, 0)
	P022 = App.Vector(-2787.9451, 1422.5586, 0)
	S014 = Part.Arc(P020, P021, P022)
	P023 = App.Vector(-2796.9394, 1399.5105, 0)
	P024 = App.Vector(-2800.0000, 1374.9596, 0)
	S015 = Part.Arc(P022, P023, P024)
	P025 = App.Vector(-2800.0000, 941.4214, 0)
	S016 = Part.LineSegment(P024, P025)
	P026 = App.Vector(-2792.3880, 903.1530, 0)
	P027 = App.Vector(-2770.7107, 870.7107, 0)
	S017 = Part.Arc(P025, P026, P027)
	P028 = App.Vector(-2529.2893, 629.2893, 0)
	S018 = Part.LineSegment(P027, P028)
	P029 = App.Vector(-2496.8470, 607.6120, 0)
	P030 = App.Vector(-2458.5786, 600.0000, 0)
	S019 = Part.Arc(P028, P029, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007, S008, S009, S010, S011, S012, S013, S014, S015, S016, S017, S018, S019])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def ctr_face_capsule_faceBody_Fa0_Ctr1():
	P000 = App.Vector(-2458.5786, 610.0000, 0)
	P001 = App.Vector(2458.5786, 610.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(2493.0202, 616.8508, 0)
	P003 = App.Vector(2522.2183, 636.3604, 0)
	S001 = Part.Arc(P001, P002, P003)
	P004 = App.Vector(2763.6396, 877.7817, 0)
	S002 = Part.LineSegment(P003, P004)
	P005 = App.Vector(2783.1492, 906.9798, 0)
	P006 = App.Vector(2790.0000, 941.4214, 0)
	S003 = Part.Arc(P004, P005, P006)
	P007 = App.Vector(2790.0000, 1373.3809, 0)
	S004 = Part.LineSegment(P006, P007)
	P008 = App.Vector(2787.2650, 1395.3996, 0)
	P009 = App.Vector(2779.2262, 1416.0800, 0)
	S005 = Part.Arc(P007, P008, P009)
	P010 = App.Vector(2163.1902, 2152.2476, 0)
	P011 = App.Vector(1306.9541, 2586.1861, 0)
	S006 = Part.Arc(P009, P010, P011)
	P012 = App.Vector(1295.2047, 2588.5672, 0)
	P013 = App.Vector(1283.2431, 2589.3657, 0)
	S007 = Part.Arc(P011, P012, P013)
	P014 = App.Vector(-1283.2431, 2589.3657, 0)
	S008 = Part.LineSegment(P013, P014)
	P015 = App.Vector(-1295.2047, 2588.5672, 0)
	P016 = App.Vector(-1306.9541, 2586.1861, 0)
	S009 = Part.Arc(P014, P015, P016)
	P017 = App.Vector(-2163.1902, 2152.2476, 0)
	P018 = App.Vector(-2779.2262, 1416.0800, 0)
	S010 = Part.Arc(P016, P017, P018)
	P019 = App.Vector(-2787.2650, 1395.3996, 0)
	P020 = App.Vector(-2790.0000, 1373.3809, 0)
	S011 = Part.Arc(P018, P019, P020)
	P021 = App.Vector(-2790.0000, 941.4214, 0)
	S012 = Part.LineSegment(P020, P021)
	P022 = App.Vector(-2783.1492, 906.9798, 0)
	P023 = App.Vector(-2763.6396, 877.7817, 0)
	S013 = Part.Arc(P021, P022, P023)
	P024 = App.Vector(-2522.2183, 636.3604, 0)
	S014 = Part.LineSegment(P023, P024)
	P025 = App.Vector(-2493.0202, 616.8508, 0)
	P026 = App.Vector(-2458.5786, 610.0000, 0)
	S015 = Part.Arc(P024, P025, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007, S008, S009, S010, S011, S012, S013, S014, S015])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def ctr_face_capsule_faceBody_Fa0_Ctr2():
	P000 = App.Vector(-1090.0000, 310.0000, 0)
	P001 = App.Vector(1090.0000, 310.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(1090.0000, 600.0000, 0)
	S001 = Part.LineSegment(P001, P002)
	P003 = App.Vector(-1090.0000, 600.0000, 0)
	S002 = Part.LineSegment(P002, P003)
	P004 = App.Vector(-1090.0000, 310.0000, 0)
	S003 = Part.LineSegment(P003, P000)
	aShape = Part.Shape([S000, S001, S002, S003])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceBody_Fa0():
	FC000 = ctr_face_capsule_faceBody_Fa0_Ctr0()
	FC001 = ctr_face_capsule_faceBody_Fa0_Ctr1()
	FC002 = ctr_face_capsule_faceBody_Fa0_Ctr2()
	rOneFace = FC000.cut([FC001, FC002])
	rOneFace.check()
	return rOneFace

def capsule_faceBody():
	FA000 = face_capsule_faceBody_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def ctr_face_capsule_faceWheels_Fa0_Ctr0():
	P000 = App.Vector(0.0000, 300.0000, 0)
	P001 = App.Vector(250.0000, 300.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(250.0000, 400.0000, 0)
	S001 = Part.LineSegment(P001, P002)
	P003 = App.Vector(50.0000, 400.0000, 0)
	S002 = Part.LineSegment(P002, P003)
	P004 = App.Vector(50.0000, 1400.0000, 0)
	S003 = Part.LineSegment(P003, P004)
	P005 = App.Vector(250.0000, 1400.0000, 0)
	S004 = Part.LineSegment(P004, P005)
	P006 = App.Vector(250.0000, 1500.0000, 0)
	S005 = Part.LineSegment(P005, P006)
	P007 = App.Vector(0.0000, 1500.0000, 0)
	S006 = Part.LineSegment(P006, P007)
	P008 = App.Vector(0.0000, 300.0000, 0)
	S007 = Part.LineSegment(P007, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceWheels_Fa0():
	FC000 = ctr_face_capsule_faceWheels_Fa0_Ctr0()
	rOneFace = FC000
	rOneFace.check()
	return rOneFace

def capsule_faceWheels():
	FA000 = face_capsule_faceWheels_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def ctr_face_capsule_faceFront_Fa0_Ctr0():
	P000 = App.Vector(-683.4389, 1200.0000, 0)
	P001 = App.Vector(683.4389, 1200.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(759.3354, 1234.8869, 0)
	P003 = App.Vector(782.2760, 1315.2057, 0)
	S001 = Part.Arc(P001, P002, P003)
	P004 = App.Vector(613.0453, 2415.2057, 0)
	S002 = Part.LineSegment(P003, P004)
	P005 = App.Vector(579.3212, 2475.8965, 0)
	P006 = App.Vector(514.2081, 2500.0000, 0)
	S003 = Part.Arc(P004, P005, P006)
	P007 = App.Vector(-514.2081, 2500.0000, 0)
	S004 = Part.LineSegment(P006, P007)
	P008 = App.Vector(-579.3212, 2475.8965, 0)
	P009 = App.Vector(-613.0453, 2415.2057, 0)
	S005 = Part.Arc(P007, P008, P009)
	P010 = App.Vector(-782.2760, 1315.2057, 0)
	S006 = Part.LineSegment(P009, P010)
	P011 = App.Vector(-759.3354, 1234.8869, 0)
	P012 = App.Vector(-683.4389, 1200.0000, 0)
	S007 = Part.Arc(P010, P011, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceFront_Fa0():
	FC000 = ctr_face_capsule_faceFront_Fa0_Ctr0()
	rOneFace = FC000
	rOneFace.check()
	return rOneFace

def capsule_faceFront():
	FA000 = face_capsule_faceFront_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def ctr_face_capsule_faceTop_Fa0_Ctr0():
	P000 = App.Vector(-800.0000, -75.0000, 0)
	P001 = App.Vector(-675.5204, -375.5204, 0)
	P002 = App.Vector(-375.0000, -500.0000, 0)
	S000 = Part.Arc(P000, P001, P002)
	P003 = App.Vector(375.0000, -500.0000, 0)
	S001 = Part.LineSegment(P002, P003)
	P004 = App.Vector(675.5204, -375.5204, 0)
	P005 = App.Vector(800.0000, -75.0000, 0)
	S002 = Part.Arc(P003, P004, P005)
	P006 = App.Vector(800.0000, 75.0000, 0)
	S003 = Part.LineSegment(P005, P006)
	P007 = App.Vector(675.5204, 375.5204, 0)
	P008 = App.Vector(375.0000, 500.0000, 0)
	S004 = Part.Arc(P006, P007, P008)
	P009 = App.Vector(-375.0000, 500.0000, 0)
	S005 = Part.LineSegment(P008, P009)
	P010 = App.Vector(-675.5204, 375.5204, 0)
	P011 = App.Vector(-800.0000, 75.0000, 0)
	S006 = Part.Arc(P009, P010, P011)
	P012 = App.Vector(-800.0000, -75.0000, 0)
	S007 = Part.LineSegment(P011, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def ctr_face_capsule_faceTop_Fa0_Ctr1():
	P000 = App.Vector(-790.0000, -75.0000, 0)
	P001 = App.Vector(-668.4493, -368.4493, 0)
	P002 = App.Vector(-375.0000, -490.0000, 0)
	S000 = Part.Arc(P000, P001, P002)
	P003 = App.Vector(375.0000, -490.0000, 0)
	S001 = Part.LineSegment(P002, P003)
	P004 = App.Vector(668.4493, -368.4493, 0)
	P005 = App.Vector(790.0000, -75.0000, 0)
	S002 = Part.Arc(P003, P004, P005)
	P006 = App.Vector(790.0000, 75.0000, 0)
	S003 = Part.LineSegment(P005, P006)
	P007 = App.Vector(668.4493, 368.4493, 0)
	P008 = App.Vector(375.0000, 490.0000, 0)
	S004 = Part.Arc(P006, P007, P008)
	P009 = App.Vector(-375.0000, 490.0000, 0)
	S005 = Part.LineSegment(P008, P009)
	P010 = App.Vector(-668.4493, 368.4493, 0)
	P011 = App.Vector(-790.0000, 75.0000, 0)
	S006 = Part.Arc(P009, P010, P011)
	P012 = App.Vector(-790.0000, -75.0000, 0)
	S007 = Part.LineSegment(P011, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceTop_Fa0():
	FC000 = ctr_face_capsule_faceTop_Fa0_Ctr0()
	FC001 = ctr_face_capsule_faceTop_Fa0_Ctr1()
	rOneFace = FC000.cut([FC001])
	rOneFace.check()
	return rOneFace

def capsule_faceTop():
	FA000 = face_capsule_faceTop_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def ctr_face_capsule_faceTopInt_Fa0_Ctr0():
	P000 = App.Vector(-790.0000, -75.0000, 0)
	P001 = App.Vector(-668.4493, -368.4493, 0)
	P002 = App.Vector(-375.0000, -490.0000, 0)
	S000 = Part.Arc(P000, P001, P002)
	P003 = App.Vector(375.0000, -490.0000, 0)
	S001 = Part.LineSegment(P002, P003)
	P004 = App.Vector(668.4493, -368.4493, 0)
	P005 = App.Vector(790.0000, -75.0000, 0)
	S002 = Part.Arc(P003, P004, P005)
	P006 = App.Vector(790.0000, 75.0000, 0)
	S003 = Part.LineSegment(P005, P006)
	P007 = App.Vector(668.4493, 368.4493, 0)
	P008 = App.Vector(375.0000, 490.0000, 0)
	S004 = Part.Arc(P006, P007, P008)
	P009 = App.Vector(-375.0000, 490.0000, 0)
	S005 = Part.LineSegment(P008, P009)
	P010 = App.Vector(-668.4493, 368.4493, 0)
	P011 = App.Vector(-790.0000, 75.0000, 0)
	S006 = Part.Arc(P009, P010, P011)
	P012 = App.Vector(-790.0000, -75.0000, 0)
	S007 = Part.LineSegment(P011, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceTopInt_Fa0():
	FC000 = ctr_face_capsule_faceTopInt_Fa0_Ctr0()
	rOneFace = FC000
	rOneFace.check()
	return rOneFace

def capsule_faceTopInt():
	FA000 = face_capsule_faceTopInt_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def ctr_face_capsule_faceTopTop_Fa0_Ctr0():
	P000 = App.Vector(-1000.0000, -75.0000, 0)
	P001 = App.Vector(-816.9417, -516.9417, 0)
	P002 = App.Vector(-375.0000, -700.0000, 0)
	S000 = Part.Arc(P000, P001, P002)
	P003 = App.Vector(375.0000, -700.0000, 0)
	S001 = Part.LineSegment(P002, P003)
	P004 = App.Vector(816.9417, -516.9417, 0)
	P005 = App.Vector(1000.0000, -75.0000, 0)
	S002 = Part.Arc(P003, P004, P005)
	P006 = App.Vector(1000.0000, 75.0000, 0)
	S003 = Part.LineSegment(P005, P006)
	P007 = App.Vector(816.9417, 516.9417, 0)
	P008 = App.Vector(375.0000, 700.0000, 0)
	S004 = Part.Arc(P006, P007, P008)
	P009 = App.Vector(-375.0000, 700.0000, 0)
	S005 = Part.LineSegment(P008, P009)
	P010 = App.Vector(-816.9417, 516.9417, 0)
	P011 = App.Vector(-1000.0000, 75.0000, 0)
	S006 = Part.Arc(P009, P010, P011)
	P012 = App.Vector(-1000.0000, -75.0000, 0)
	S007 = Part.LineSegment(P011, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceTopTop_Fa0():
	FC000 = ctr_face_capsule_faceTopTop_Fa0_Ctr0()
	rOneFace = FC000
	rOneFace.check()
	return rOneFace

def capsule_faceTopTop():
	FA000 = face_capsule_faceTopTop_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def ctr_face_capsule_faceTopLeg_Fa0_Ctr0():
	P000 = App.Vector(-75.0000, 2600.0000, 0)
	P001 = App.Vector(75.0000, 2600.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(75.0000, 2650.0000, 0)
	S001 = Part.LineSegment(P001, P002)
	P003 = App.Vector(39.6447, 2664.6447, 0)
	P004 = App.Vector(25.0000, 2700.0000, 0)
	S002 = Part.Arc(P002, P003, P004)
	P005 = App.Vector(25.0000, 2800.0000, 0)
	S003 = Part.LineSegment(P004, P005)
	P006 = App.Vector(39.6447, 2835.3553, 0)
	P007 = App.Vector(75.0000, 2850.0000, 0)
	S004 = Part.Arc(P005, P006, P007)
	P008 = App.Vector(75.0000, 2900.0000, 0)
	S005 = Part.LineSegment(P007, P008)
	P009 = App.Vector(-75.0000, 2900.0000, 0)
	S006 = Part.LineSegment(P008, P009)
	P010 = App.Vector(-75.0000, 2850.0000, 0)
	S007 = Part.LineSegment(P009, P010)
	P011 = App.Vector(-39.6447, 2835.3553, 0)
	P012 = App.Vector(-25.0000, 2800.0000, 0)
	S008 = Part.Arc(P010, P011, P012)
	P013 = App.Vector(-25.0000, 2700.0000, 0)
	S009 = Part.LineSegment(P012, P013)
	P014 = App.Vector(-39.6447, 2664.6447, 0)
	P015 = App.Vector(-75.0000, 2650.0000, 0)
	S010 = Part.Arc(P013, P014, P015)
	P016 = App.Vector(-75.0000, 2600.0000, 0)
	S011 = Part.LineSegment(P015, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007, S008, S009, S010, S011])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceTopLeg_Fa0():
	FC000 = ctr_face_capsule_faceTopLeg_Fa0_Ctr0()
	rOneFace = FC000
	rOneFace.check()
	return rOneFace

def capsule_faceTopLeg():
	FA000 = face_capsule_faceTopLeg_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def ctr_face_capsule_faceWall_Fa0_Ctr0():
	P000 = App.Vector(-2458.5786, 600.0000, 0)
	P001 = App.Vector(2458.5786, 600.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(2496.8470, 607.6120, 0)
	P003 = App.Vector(2529.2893, 629.2893, 0)
	S001 = Part.Arc(P001, P002, P003)
	P004 = App.Vector(2770.7107, 870.7107, 0)
	S002 = Part.LineSegment(P003, P004)
	P005 = App.Vector(2792.3880, 903.1530, 0)
	P006 = App.Vector(2800.0000, 941.4214, 0)
	S003 = Part.Arc(P004, P005, P006)
	P007 = App.Vector(2800.0000, 1374.9596, 0)
	S004 = Part.LineSegment(P006, P007)
	P008 = App.Vector(2796.9394, 1399.5105, 0)
	P009 = App.Vector(2787.9451, 1422.5586, 0)
	S005 = Part.Arc(P007, P008, P009)
	P010 = App.Vector(2170.3033, 2159.8730, 0)
	P011 = App.Vector(1313.2301, 2596.3812, 0)
	S006 = Part.Arc(P009, P010, P011)
	P012 = App.Vector(1300.0233, 2599.0912, 0)
	P013 = App.Vector(1286.5719, 2600.0000, 0)
	S007 = Part.Arc(P011, P012, P013)
	P014 = App.Vector(-1286.5719, 2600.0000, 0)
	S008 = Part.LineSegment(P013, P014)
	P015 = App.Vector(-1300.0233, 2599.0912, 0)
	P016 = App.Vector(-1313.2301, 2596.3812, 0)
	S009 = Part.Arc(P014, P015, P016)
	P017 = App.Vector(-2170.3033, 2159.8730, 0)
	P018 = App.Vector(-2787.9451, 1422.5586, 0)
	S010 = Part.Arc(P016, P017, P018)
	P019 = App.Vector(-2796.9394, 1399.5105, 0)
	P020 = App.Vector(-2800.0000, 1374.9596, 0)
	S011 = Part.Arc(P018, P019, P020)
	P021 = App.Vector(-2800.0000, 941.4214, 0)
	S012 = Part.LineSegment(P020, P021)
	P022 = App.Vector(-2792.3880, 903.1530, 0)
	P023 = App.Vector(-2770.7107, 870.7107, 0)
	S013 = Part.Arc(P021, P022, P023)
	P024 = App.Vector(-2529.2893, 629.2893, 0)
	S014 = Part.LineSegment(P023, P024)
	P025 = App.Vector(-2496.8470, 607.6120, 0)
	P026 = App.Vector(-2458.5786, 600.0000, 0)
	S015 = Part.Arc(P024, P025, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007, S008, S009, S010, S011, S012, S013, S014, S015])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def ctr_face_capsule_faceWall_Fa0_Ctr1():
	P000 = App.Vector(2612.9574, 1511.4655, 0)
	P001 = App.Vector(2034.0256, 2132.7991, 0)
	P002 = App.Vector(1263.8970, 2490.7367, 0)
	S000 = Part.Arc(P000, P001, P002)
	P003 = App.Vector(1251.9909, 2492.9241, 0)
	P004 = App.Vector(1239.9077, 2493.6567, 0)
	S001 = Part.Arc(P002, P003, P004)
	P005 = App.Vector(851.9375, 2493.6567, 0)
	S002 = Part.LineSegment(P004, P005)
	P006 = App.Vector(781.2268, 2464.3674, 0)
	P007 = App.Vector(751.9375, 2393.6567, 0)
	S003 = Part.Arc(P005, P006, P007)
	P008 = App.Vector(751.9375, 1458.5786, 0)
	S004 = Part.LineSegment(P007, P008)
	P009 = App.Vector(781.2268, 1387.8680, 0)
	P010 = App.Vector(851.9375, 1358.5786, 0)
	S005 = Part.Arc(P008, P009, P010)
	P011 = App.Vector(2528.0871, 1358.5786, 0)
	S006 = Part.LineSegment(P010, P011)
	P012 = App.Vector(2615.5190, 1410.0436, 0)
	P013 = App.Vector(2612.9574, 1511.4655, 0)
	S007 = Part.Arc(P011, P012, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def ctr_face_capsule_faceWall_Fa0_Ctr2():
	P000 = App.Vector(-2612.9574, 1511.4655, 0)
	P001 = App.Vector(-2034.0256, 2132.7991, 0)
	P002 = App.Vector(-1263.8970, 2490.7367, 0)
	S000 = Part.Arc(P000, P001, P002)
	P003 = App.Vector(-1251.9909, 2492.9241, 0)
	P004 = App.Vector(-1239.9077, 2493.6567, 0)
	S001 = Part.Arc(P002, P003, P004)
	P005 = App.Vector(-851.9375, 2493.6567, 0)
	S002 = Part.LineSegment(P004, P005)
	P006 = App.Vector(-781.2268, 2464.3674, 0)
	P007 = App.Vector(-751.9375, 2393.6567, 0)
	S003 = Part.Arc(P005, P006, P007)
	P008 = App.Vector(-751.9375, 1458.5786, 0)
	S004 = Part.LineSegment(P007, P008)
	P009 = App.Vector(-781.2268, 1387.8680, 0)
	P010 = App.Vector(-851.9375, 1358.5786, 0)
	S005 = Part.Arc(P008, P009, P010)
	P011 = App.Vector(-2528.0871, 1358.5786, 0)
	S006 = Part.LineSegment(P010, P011)
	P012 = App.Vector(-2615.5190, 1410.0436, 0)
	P013 = App.Vector(-2612.9574, 1511.4655, 0)
	S007 = Part.Arc(P011, P012, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def ctr_face_capsule_faceWall_Fa0_Ctr3():
	P000 = App.Vector(-251.9375, 1200.0000, 0)
	P001 = App.Vector(251.9375, 1200.0000, 0)
	S000 = Part.LineSegment(P000, P001)
	P002 = App.Vector(322.6482, 1229.2893, 0)
	P003 = App.Vector(351.9375, 1300.0000, 0)
	S001 = Part.Arc(P001, P002, P003)
	P004 = App.Vector(351.9375, 2100.0000, 0)
	S002 = Part.LineSegment(P003, P004)
	P005 = App.Vector(322.6482, 2170.7107, 0)
	P006 = App.Vector(251.9375, 2200.0000, 0)
	S003 = Part.Arc(P004, P005, P006)
	P007 = App.Vector(-251.9375, 2200.0000, 0)
	S004 = Part.LineSegment(P006, P007)
	P008 = App.Vector(-322.6482, 2170.7107, 0)
	P009 = App.Vector(-351.9375, 2100.0000, 0)
	S005 = Part.Arc(P007, P008, P009)
	P010 = App.Vector(-351.9375, 1300.0000, 0)
	S006 = Part.LineSegment(P009, P010)
	P011 = App.Vector(-322.6482, 1229.2893, 0)
	P012 = App.Vector(-251.9375, 1200.0000, 0)
	S007 = Part.Arc(P010, P011, P000)
	aShape = Part.Shape([S000, S001, S002, S003, S004, S005, S006, S007])
	aWire = Part.Wire(aShape.Edges)
	subFace = Part.Face(aWire)
	subFace.check()
	return subFace

def face_capsule_faceWall_Fa0():
	FC000 = ctr_face_capsule_faceWall_Fa0_Ctr0()
	FC001 = ctr_face_capsule_faceWall_Fa0_Ctr1()
	FC002 = ctr_face_capsule_faceWall_Fa0_Ctr2()
	FC003 = ctr_face_capsule_faceWall_Fa0_Ctr3()
	rOneFace = FC000.cut([FC001, FC002, FC003])
	rOneFace.check()
	return rOneFace

def capsule_faceWall():
	FA000 = face_capsule_faceWall_Fa0()
	rOneFig = FA000
	rOneFig.check()
	return rOneFig

def fex_subpax_capsule_body():
	FIG = capsule_faceBody()
	VEX = FIG.extrude(App.Vector(0, 0, 1800))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(0.0000, 0.0000, 0.0000))
	return VFP
subpax_capsule_body = fex_subpax_capsule_body()

def fex_subpax_capsule_wheel1():
	FIG = capsule_faceWheels()
	VEX = FIG.revolve(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 360).rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 90)
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(-2200.0000, 250.0000, 0.0000))
	return VFP
subpax_capsule_wheel1 = fex_subpax_capsule_wheel1()

def fex_subpax_capsule_wheel2():
	FIG = capsule_faceWheels()
	VEX = FIG.revolve(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 360).rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 90)
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(-1600.0000, 250.0000, 0.0000))
	return VFP
subpax_capsule_wheel2 = fex_subpax_capsule_wheel2()

def fex_subpax_capsule_wheel3():
	FIG = capsule_faceWheels()
	VEX = FIG.revolve(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 360).rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 90)
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(2200.0000, 250.0000, 0.0000))
	return VFP
subpax_capsule_wheel3 = fex_subpax_capsule_wheel3()

def fex_subpax_capsule_wheel4():
	FIG = capsule_faceWheels()
	VEX = FIG.revolve(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 360).rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 90)
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(1600.0000, 250.0000, 0.0000))
	return VFP
subpax_capsule_wheel4 = fex_subpax_capsule_wheel4()

def fex_subpax_capsule_frontWin():
	FIG = capsule_faceFront()
	VEX = FIG.extrude(App.Vector(0, 0, 5800))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 90.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(-2900.0000, 0.0000, 900.0000))
	return VFP
subpax_capsule_frontWin = fex_subpax_capsule_frontWin()

def fex_subpax_capsule_topInt():
	FIG = capsule_faceTopInt()
	VEX = FIG.extrude(App.Vector(0, 0, 30))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), -90.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(0.0000, 2580.0000, 900.0000))
	return VFP
subpax_capsule_topInt = fex_subpax_capsule_topInt()

def fex_subpax_capsule_top1():
	FIG = capsule_faceTop()
	VEX = FIG.extrude(App.Vector(0, 0, 50))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), -90.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(0.0000, 2600.0000, 900.0000))
	return VFP
subpax_capsule_top1 = fex_subpax_capsule_top1()

def fex_subpax_capsule_top2():
	FIG = capsule_faceTop()
	VEX = FIG.extrude(App.Vector(0, 0, 50))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), -90.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(0.0000, 2850.0000, 900.0000))
	return VFP
subpax_capsule_top2 = fex_subpax_capsule_top2()

def fex_subpax_capsule_topTop():
	FIG = capsule_faceTopTop()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), -90.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(0.0000, 2900.0000, 900.0000))
	return VFP
subpax_capsule_topTop = fex_subpax_capsule_topTop()

def fex_subpax_capsule_topLeg1():
	FIG = capsule_faceTopLeg()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 90.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(-800.0000, 0.0000, 900.0000))
	return VFP
subpax_capsule_topLeg1 = fex_subpax_capsule_topLeg1()

def fex_subpax_capsule_topLeg2():
	FIG = capsule_faceTopLeg()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 90.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(790.0000, 0.0000, 900.0000))
	return VFP
subpax_capsule_topLeg2 = fex_subpax_capsule_topLeg2()

def fex_subpax_capsule_topLeg3():
	FIG = capsule_faceTopLeg()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(-300.0000, 0.0000, 400.0000))
	return VFP
subpax_capsule_topLeg3 = fex_subpax_capsule_topLeg3()

def fex_subpax_capsule_topLeg4():
	FIG = capsule_faceTopLeg()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(-300.0000, 0.0000, 1390.0000))
	return VFP
subpax_capsule_topLeg4 = fex_subpax_capsule_topLeg4()

def fex_subpax_capsule_topLeg5():
	FIG = capsule_faceTopLeg()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(300.0000, 0.0000, 400.0000))
	return VFP
subpax_capsule_topLeg5 = fex_subpax_capsule_topLeg5()

def fex_subpax_capsule_topLeg6():
	FIG = capsule_faceTopLeg()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(300.0000, 0.0000, 1390.0000))
	return VFP
subpax_capsule_topLeg6 = fex_subpax_capsule_topLeg6()

def fex_subpax_capsule_wall1():
	FIG = capsule_faceWall()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(0.0000, 0.0000, 0.0000))
	return VFP
subpax_capsule_wall1 = fex_subpax_capsule_wall1()

def fex_subpax_capsule_wall2():
	FIG = capsule_faceWall()
	VEX = FIG.extrude(App.Vector(0, 0, 10))
	VR1 = VEX.rotate(App.Vector(0, 0, 0), App.Vector(1, 0, 0), 0.0000)
	VR2 = VR1.rotate(App.Vector(0, 0, 0), App.Vector(0, 1, 0), 0.0000)
	VR3 = VR2.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), 0.0000)
	VFP = VR3.translate(App.Vector(0.0000, 0.0000, 1790.0000))
	return VFP
subpax_capsule_wall2 = fex_subpax_capsule_wall2()

def fvol_ipax_capsule_plus():
	V000 = subpax_capsule_body
	V001 = V000.fuse(subpax_capsule_wheel1)
	V002 = V001.fuse(subpax_capsule_wheel2)
	V003 = V002.fuse(subpax_capsule_wheel3)
	V004 = V003.fuse(subpax_capsule_wheel4)
	V005 = V004.fuse(subpax_capsule_top1)
	V006 = V005.fuse(subpax_capsule_top2)
	V007 = V006.fuse(subpax_capsule_topTop)
	V008 = V007.fuse(subpax_capsule_topLeg1)
	V009 = V008.fuse(subpax_capsule_topLeg2)
	V010 = V009.fuse(subpax_capsule_topLeg3)
	V011 = V010.fuse(subpax_capsule_topLeg4)
	V012 = V011.fuse(subpax_capsule_topLeg5)
	V013 = V012.fuse(subpax_capsule_topLeg6)
	V014 = V013.fuse(subpax_capsule_wall1)
	V015 = V014.fuse(subpax_capsule_wall2)
	VFC = V015.removeSplitter()
	return VFC
ipax_capsule_plus = fvol_ipax_capsule_plus()

def fvol_ipax_capsule_minus():
	V000 = subpax_capsule_frontWin
	V001 = V000.fuse(subpax_capsule_topInt)
	VFC = V001.removeSplitter()
	return VFC
ipax_capsule_minus = fvol_ipax_capsule_minus()

def fvol_pax_capsule():
	V000 = ipax_capsule_plus
	V001 = V000.cut(ipax_capsule_minus)
	VFC = V001.removeSplitter()
	return VFC
pax_capsule = fvol_pax_capsule()


pax_capsule.check()
#pax_capsule.exportBrep(f"{outFileName}.brep")
#pax_capsule.exportIges(f"{outFileName}.igs")
#pax_capsule.exportStep(f"{outFileName}.stp")
pax_capsule.exportStl(f"{outFileName}.stl")

