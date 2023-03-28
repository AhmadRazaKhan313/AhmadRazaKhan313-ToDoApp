import { View, Text, TextInput,TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState,} from 'react'
import { Colors } from '../../themes/Variables'
import Button from '../../common /Button'
import  Images from '../../themes/images'
import styles from './styles'


const TodoList = () => {
  const [mydata , setmyData] = useState('')
  const [myListData, setmylistData] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [editData, setEditData] = useState('')
  useEffect(()=> {
    
  },[])
  const handleData =(text)=>{
    setmyData(text)
  }
 
 
  const AddList= ()=> {
if(!isEdit){
    if(mydata){
  setmylistData([...myListData, mydata])
  setmyData(null)
    }
  } else{
    if(mydata){
    for(let i = 0 ; i < myListData.length; i++){
      if(editData === myListData[i]){
        myListData[i]= mydata
        setIsEdit(false)
        setEditData('')
        setmyData('')
      }
    }
  }
  }
  }
 
  const deleteData =(items)=> {
    let itemcopy = [...myListData]
  const updateList = itemcopy.filter((item)=>item!==items)
      setmylistData(updateList)
  }
  const editList=(item)=> {
    setmyData(item)
    setEditData(item)
    setIsEdit(true)

   }

  return (
   <View style={styles.main}> 
    <View style={styles.container}>
      <View style={styles.headerTextView}>   
         <Text  style={styles.headerText}> 
        To Do List 
      </Text>
      </View>
      <View style={styles.inputView}> 
      <TextInput
     
      placeholder='Enter SomeThing'
      onChangeText={(text)=>handleData(text)}
      value={mydata}
      style={styles.input}
      />
       <TouchableOpacity  onPress={AddList}  
       style={styles.addButton}> 
      <Image source={Images.Add} style={styles.addImage}/>
     </TouchableOpacity>    
      </View>
      {myListData.length==0 ? <View style={{paddingVertical: 20,alignItems: 'center'}}> 
        <Text style={{color:Colors.input, fontSize: 25, fontWeight: '800'}}>
          No Data Available 
        </Text>
      </View>:
     
    
    
      <ScrollView style={styles.scroll}>
        {myListData.map((item, index)=>{
          return(
           <View  key={item} style={styles.listTextView}> 
            <Text style={styles.listtext}>{item}</Text>
            <TouchableOpacity onPress={()=>deleteData(item)}   >
            <Image source={Images.delete} style={styles.deleteImage}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>editList(item)}>
            <Image source={Images.edit} style={styles.editImage}/>
            </TouchableOpacity>
          </View>    
            

          )
        })}
       
         

        
       
      </ScrollView>
}
   
       </View>
     
     
   </View>
  )
}

export default TodoList