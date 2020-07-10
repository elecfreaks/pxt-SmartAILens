/**
 * This extension is designed to programme and drive the Smart AI Lens(二郎神)
 */
//% weight=0 color=#0031AF icon="\uf06e"
//% groups='["Basics", "Ball", "Face", "Card", "Color", "Tracking", "Learn"]'
namespace SmartAILens {
    const CameraAdd = 0X14;
    let DataBuff = pins.createBuffer(9);
    /**
    * Status List of Ball
    */
    export enum FuncList {
        //% block="Card"
        Card = 2,
        //% block="Face"
        Face = 6,
        //% block="Ball"
        Ball = 7,
        //% block="Tracking"
        Tracking = 8,
        //% block="Color"
        Color = 9,
        //% block="Things"
        Things = 10
    }
    /**
    * Status List of Ball
    */
    export enum Ballstatus {
        //% block="Color"
        Color = 1,
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Ball TotalNum"
        BallTotalNum = 7,
        //% block="Ball order"
        Ballorder = 8
    }
    /**
    * Status List of Face
    */
    export enum Facestatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Face TotalNum"
        FaceTotalNum = 7,
        //% block="Face order"
        Faceorder = 8
    }
    /**
    * Status List of Card
    */
    export enum Cardstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Card TotalNum"
        CardTotalNum = 7,
        //% block="Card order"
        Cardorder = 8
    }
    /**
    * Status List of Color
    */
    export enum Colorstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Color TotalNum"
        ColorTotalNum = 7,
        //% block="Color order"
        Colororder = 8
    }
    /**
    * Status List of Color
    */
    export enum ColorLs {
        //% block="black"
        black = 1,
        //% block="blue"
        blue = 2,
        //% block="brown"
        brown = 3,
        //% block="green"
        green = 4,
        //% block="orange"
        orange = 5,
        //% block="pink"
        pink = 6,
        //% block="purple"
        purple = 7,
        //% block="red"
        red = 8,
        //% block="rose"
        rose = 9,
        //% block="white"
        white = 10,
        //% block="yellow"
        yellow = 11
    }

    export enum Linestatus {
        //% block="angel"
        angel = 1,
        //% block="width"
        width = 2,
        //% block="len"
        len = 3
    }
    export enum LineList {
        //% block="forward"
        forward = 0,
        //% block="left front"
        left_fromt = 1,
        //% block="right front"
        right_fromt = 2,
        //% block="left turn"
        left_turn = 3,
        //% block="right turn"
        right_turn = 4,
        //% block="T-junction"
        T_junction = 5,
        //% block="intersection"
        intersection = 6,
        //% block="no road"
        no_road = 8
    }
    /**
    * Number Cards List
    */
    export enum numberCards{
        //% block="0"
        zero = 0,
        //% block="1"
        one = 1,
        //% block="2"
        two = 2,
        //% block="3"
        three = 3,
        //% block="4"
        four = 4,
        //% block="5"
        five = 5,
        //% block="6"
        six = 6,
        //% block="7"
        seven = 7,
        //% block="8"
        eight = 8,
        //% block="9"
        nine = 9
    }
    /*
    * Letters Cards List
    */
    export enum letterCards{
        //% block="A"
        A = 0,
        //% block="B"
        B = 1,
        //% block="C"
        C = 2,
        //% block="D"
        D = 3,
        //% block="E"
        E = 4,
        //% block="F"
        F = 5,
        //% block="G"
        G = 6,
        //% block="H"
        H = 7,
        //% block="I"
        I = 8,
        //% block="J"
        J = 9,
        //% block="K"
        K = 10,
        //% block="L"
        L = 11,
        //% block="M"
        M = 12,
        //% block="N"
        N = 13,
        //% block="O"
        O = 14,
        //% block="P"
        P = 15,
        //% block="Q"
        Q = 16,
        //% block="R"
        R = 17,
        //% block="S"
        S = 18,
        //% block="T"
        T = 19,
        //% block="U"
        U = 20,
        //% block="V"
        V = 21,
        //% block="W"
        W = 22,
        //% block="X"
        X = 23,
        //% block="Y"
        Y = 24,
        //% block="Z"
        Z = 25
    }
    /*
    * Traffic Cards List
    */
    export enum trafficCards{
        //% block="forward"
        forward = 1,
		//% block="back"
        back = 0,
		//% block="stop"
        stop = 4,
		//% block="turn left"
        turnleft = 2,
		//% block="turn right"
        turnright = 3
    }
    /*
    * Other Cards List
    */
    export enum otherCards{
        //% block="circle"
        circle = 0,
		//% block="hexagon"
        hexagon = 1,
		//% block="pentagon"
        pentagon = 2,
		//% block="rectangle"
        rectangle = 3,
		//% block="triangle"
        triangle = 5,

		//% block="airplane"
        airplane = 6,
		//% block="apple"
        apple = 7,
		//% block="ship"
        ship = 8,
		//% block="bread"
        bread = 9,
		//% block="car"
        car = 10,
		//% block="cat"
        cat = 11,
		//% block="cup"
        cup = 12,
		//% block="dog"
        dog = 13,
		//% block="egg"
        egg = 14,
		//% block="grape"
        grape = 15,
		//% block="pear"
        pear = 16,
		//% block="strawberry"
        strawberry = 17,
		//% block="umbrella"
        umbrella = 18
    }
    /**
    * TODO: Waiting for module initialization.
    */
    //% block="Init model IIC Port"
    //% group="Basics" weight=100
    export function initModel():void{
        let timeout = 0
        while (!(pins.i2cReadNumber(CameraAdd, NumberFormat.Int8LE))) {
            timeout++
            if(timeout > 100){
                basic.showString("Init AILens Error!")
            }
        }   
    }
    /**
    * TODO: Switch recognition objects.
    * @param fun Function list eg: FuncList.Face
    */
    //% block="switch function to %fun"
    //% group="Basics" weight=95
    export function switchfunc(fun: FuncList):void{
        let funcBuff = pins.i2cReadBuffer(CameraAdd, 9)
        funcBuff[0]=0x20
        funcBuff[1]=fun
        pins.i2cWriteBuffer(CameraAdd, funcBuff)
    }

    /**
    * TODO: Get the data in a frame
    */
    //% block="Get once data from AI Lens"
    //% group="Basics" weight=90
    export function cameraData(): void {
        DataBuff = pins.i2cReadBuffer(CameraAdd, 9)
    }

    //% block="Recognize the ball"
    //% group="Ball" weight=85
    export function checkBall(): boolean {
        if (DataBuff[0] == 7) {
            return true
        }
        else {
            return false
        }
    }
    //% block="From data Object Ball status %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Ball" weight=80
    export function ballData(status: Ballstatus): number {
        if (DataBuff[0] == 7) {
            switch (status) {
                case Ballstatus.Color:
                    return DataBuff[1]
                    break
                case Ballstatus.X:
                    return DataBuff[2]
                    break
                case Ballstatus.Y:
                    return DataBuff[3]
                    break
                case Ballstatus.W:
                    return DataBuff[4]
                    break
                case Ballstatus.H:
                    return DataBuff[5]
                    break
                case Ballstatus.Confidence:
                    return DataBuff[6]
                    break
                case Ballstatus.BallTotalNum:
                    return DataBuff[7]
                    break
                case Ballstatus.Ballorder:
                    return DataBuff[8]
                    break
                default:
                    return 0;
            }
        }
        else {
            return null
        }
    }

    /**
    * TODO: Judge whether there is a face in the picture
    */
    //% block="Recognize the face"
    //% group="Face" weight=75
    export function checkFace(): boolean {
        return DataBuff[0] == 6
    }
    /**
    * TODO: Judge whether there is a face in the picture
    * @param status Facestatus, eg: Facestatus.X
    */
    //% block="From data get Face status %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Face" weight=70
    export function faceData(status: Facestatus): number {
        if (DataBuff[0] == 6) {
            switch (status) {
                case Facestatus.X:
                    return DataBuff[2]
                    break
                case Facestatus.Y:
                    return DataBuff[3]
                    break
                case Facestatus.W:
                    return DataBuff[4]
                    break
                case Facestatus.H:
                    return DataBuff[5]
                    break
                case Facestatus.Confidence:
                    return DataBuff[6]
                    break
                case Facestatus.FaceTotalNum:
                    return DataBuff[7]
                    break
                case Facestatus.Faceorder:
                    return DataBuff[8]
                    break
                default:
                    return null
            }
        }
        else {
            return null
        }
    }
    /**
    * TODO: Judge whether there is a digital card in the screen
    * @param status numberCards, eg: numberCards.1
    */
    //% block="Recognize the number Card %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=65
    export function numberCard(status:numberCards): boolean{
        if (DataBuff[0] == 2) {
            return status == DataBuff[1] - 1
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a letter card in the screen
    * @param status letterCards, eg: letterCards.A
    */
    //% block="Recognize the letter Card %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=60
    export function letterCard(status:letterCards): boolean{
        if (DataBuff[0] == 3) {
            return status == DataBuff[1] - 1
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a traffic card in the screen
    * @param status trafficCards, eg: trafficCards.forward
    */
    //% block="Recognize the traffic Card %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=55
    export function trafficCard(status:trafficCards): boolean{
        if (DataBuff[0] == 4) {
            return status == DataBuff[1] - 1
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a other card in the screen
    * @param status otherCards, eg: otherCards.cat
    */
    //% block="Recognize the other Card %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=50
    export function otherCard(status:otherCards): boolean{
        if (DataBuff[0] == 5) {
            return status == DataBuff[1] - 1 
        }
        else
            return false
    }
    /**
    * TODO: Card parameters in the screen
    * @param status otherCards, eg: Cardstatus.X
    */
    //% block="From data Object Card status %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=45
    export function CardData(status: Cardstatus): number {
        if (DataBuff[0] == 2 || DataBuff[0] == 3 || DataBuff[0] == 4 || DataBuff[0] == 5) {
            switch (status) {
                case Cardstatus.X:
                    return DataBuff[2]
                    break
                case Cardstatus.Y:
                    return DataBuff[3]
                    break
                case Cardstatus.W:
                    return DataBuff[4]
                    break
                case Cardstatus.H:
                    return DataBuff[5]
                    break
                case Cardstatus.Confidence:
                    return DataBuff[6]
                    break
                case Cardstatus.CardTotalNum:
                    return DataBuff[7]
                    break
                case Cardstatus.Cardorder:
                    return DataBuff[8]
                    break
                default:
                    return null
            }
        }
        else
            return null
    }
    //% block="From data Object Line tracking is %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Tracking"
    //% deprecated=true weight=40
    export function lineTracking(status: LineList): boolean {
        if (DataBuff[0] == 8) {
            if (DataBuff[4] == status) {
                return true
            }
            else {
                return false
            }
        }
        else
            return false
    }
    //% block="From data Object tracking status %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Tracking"
    //% deprecated=true weight=35
    export function trackingData(status: Linestatus): number {
        if (DataBuff[0] == 8) {
            switch (status) {
                case Linestatus.angel:
                    return (DataBuff[2]);
                case Linestatus.len:
                    return (DataBuff[3]);
                case Linestatus.width:
                    return (DataBuff[4]);
                default:
                    return 0;
            }
        }
        else
            return null
    }
    //% block="From data Color is %status"
    //% status.fieldEditor="gridpicker"
    //% group="Color" weight=30
    export function colorCheck(status: ColorLs): boolean {
        if (DataBuff[0] == 9) {
            return status == DataBuff[1]
        }
        else
            return false
    }
    //% block="From data Object color status %status"
    //% group="Color" weight=25
    export function colorData(status: Colorstatus): number {
        if (DataBuff[0] == 1) {
            switch (status) {
                case Colorstatus.X:
                    return DataBuff[2]
                    break
                case Colorstatus.Y:
                    return DataBuff[3]
                    break
                case Colorstatus.W:
                    return DataBuff[4]
                    break
                case Colorstatus.H:
                    return DataBuff[5]
                    break
                case Colorstatus.Confidence:
                    return DataBuff[6]
                    break
                case Colorstatus.ColorTotalNum:
                    return DataBuff[7]
                    break
                case Colorstatus.Colororder:
                    return DataBuff[8]
                    break
                default:
                    return null
            }
        }
        else {
            return null
        }
    }

    //% block="learn Things ID %thingsID"
    //% group="Learn" weight=20
    export function learnThings(thingsID: number): void {
        let thingsBuf = pins.createBuffer(9)
        let timeout = 0
        thingsBuf[0] = 10
        thingsBuf[1] = thingsID
        pins.i2cWriteBuffer(CameraAdd, thingsBuf)
        while (timeout > 10000) {
            cameraData()
            if (DataBuff[0] == 9 && DataBuff[1] == thingsID) {
                break
            }
            timeout++
        }
    }
    //% block="From data Object things ID"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Learn" weight=15
    export function thingsData(): number {
        if (DataBuff[0] == 10 && DataBuff[2] < 10) {
            return DataBuff[1]
        }
        else{
            return null
        }
    }
}