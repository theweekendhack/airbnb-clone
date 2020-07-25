class Room
{

    title;
    descrption;
    price;
    imgPath;
    id;
    isTopRoom;

    constructor(id,img,title,desc,price,isTopRoom=false)
    {
        this.title=title;
        this.id=id;
        this.descrption=desc;
        this.price= price;
        this.imgPath=img;
        this.isTopRoom=isTopRoom;
    }


}

const roomModel =
{

    rooms : [], // This is the room table 

    init()
    { //  INSERT INTO DATA IN TO
        this.rooms.push(new Room(1,"/img/room1.jpg","POS Netflix and Chilling Room","Blah",105))
        this.rooms.push(new Room(2,"/img/room2.jpg","Sando Love Making Room","Blah",50))
        this.rooms.push(new Room(3,"/img/room3.jpg","Tobago Room of Love","Blah",98,true))
        this.rooms.push(new Room(4,"/img/room4.jpg","Room of Doom","Blah",40,true))
        this.rooms.push(new Room(5,"/img/room5.jpg","Salt Room (You doh get nothing here)","Blah",25,true))
        this.rooms.push(new Room(6,"/img/room6.jpg","Baby Making","Blah",120));
        this.rooms.push(new Room(7,"/img/room1.jpg","Hyatt Top Shooter ","Blah",105))
        this.rooms.push(new Room(8,"/img/room2.jpg","The Wetman Room","Blah",50))
        this.rooms.push(new Room(9,"/img/room3.jpg","BoobooShanti Room","Blah",98,true))
        this.rooms.push(new Room(10,"/img/room4.jpg","UWI Alumni Room","Blah",40,true))
        this.rooms.push(new Room(11,"/img/room5.jpg","Too Bad Room","Blah",25,true))
        this.rooms.push(new Room(12,"/img/room6.jpg","More Trouble Room","Blah",120))

    },

    getAllRooms()
    {
        return this.rooms;
    },


    getTopRooms()
    {

       const topRooms = this.rooms.filter((room)=> room.isTopRoom == true)

        return topRooms;
    }

}

roomModel.init();
module.exports = roomModel;