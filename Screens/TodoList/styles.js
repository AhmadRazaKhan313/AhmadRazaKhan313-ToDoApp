import { StyleSheet } from "react-native"
import { Colors } from "../../themes/Variables"

export default StyleSheet.create({
    main: {
        height:'100%'
    },
    container: {
        flex:1,
        backgroundColor: Colors.blackGrey,
    },
    headerText: {
        fontSize: 24, 
        fontWeight:'900', 
        color:Colors.input, 
        textAlign:'center',
    },
inputView: {
    paddingHorizontal: 30,  
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between'
},
input: {
    fontSize:20, 
    fontFamily:'600',
    color: Colors.black, 
    borderRadius: 10, 
    backgroundColor:Colors.input, 
    width: '90%' },
headerTextView: {
    paddingVertical: 30
},
addButton: {
    paddingLeft:10,
    backgroundColor:'white',
    width:32,
    height:32,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50, 
    marginLeft: 8,
    },
    addImage: {width:20, 
        height:20, 
        marginRight: 10
    },
    scroll:{
        marginTop: 40,
    },
    listTextView: {
        marginVertical: 10, 
        justifyContent:'space-between', 
        paddingVertical: 15, 
        paddingHorizontal: 10, 
        backgroundColor:Colors.grey, 
        width: '90%', 
        alignSelf:'center', 
        flexDirection:'row', 
        borderRadius: 10, 
        alignItems:'flex-start',
    },
    listtext: {fontSize:20, 
        flexWrap:'wrap',
        width:'75%',
        color:Colors.white
    },
    deleteImage: {
        width:24, 
        height:24,
    },
    editImage: {
        width:24,
        height:24}
})