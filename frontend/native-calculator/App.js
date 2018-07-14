import React from 'react';
import { Dimensions } from 'react-native'
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  state = {
    input1: "",
    input2: "",
    operator: "",
    operatorPressed: false,
    answer: ""
  }
  displayNum(num) {

    if (!this.state.operatorPressed) {

      let inputStr = this.state.input1;
      inputStr += num;;
      inputStr = inputStr;
      this.setState({
        input1: inputStr
      })
    } else {
      let inputStr = this.state.input2;
      inputStr += num;
      this.setState({
        input2: inputStr
      })

    }
  }


  displayOperator(operator) {
    var boolean = !this.state.operatorPressed;


    this.setState({
      operatorPressed: boolean,
      operator: operator
    })
  }

  clear() {

    this.setState({
      input1: "",
      input2: "",
      operator: "",
      operatorPressed: false,
      answer: ""
    })
  }

  calculate() {

    var operator = "";

    switch (this.state.operator) {
      case "+": operator = "add"; break;
      case "-": operator = "subtract"; break;
      case "*": operator = "multiply"; break;
      case "/": operator = "divide"; break;
      case "%": operator = "modulus"; break;
      default: null; break;
    }
    console.log("https://localhost:5001/" + operator + "?num1=" + parseInt(this.state.input1) + "&num2=" + parseInt(this.state.input2))
    axios.get("http://192.168.7.235:5001/" + operator + "?num1=" + parseInt(this.state.input1) + "&num2=" + parseInt(this.state.input2))
      .then(response => {

        this.setState({

          input1: response.data.answer,
          input2:"",
          operator:"",
          operatorPressed:false
        })
        

      }).catch(function (err) {
        console.log(err);
      })
  }




  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>

          <Text style={{ fontSize: 30 }}>{this.state.input1}</Text>
          <Text style={{ fontSize: 30 }}> {this.state.operator} </Text>
          <Text style={{ fontSize: 30 }}>{this.state.input2}</Text>
          {this.state.answer != "" ?
            <Text style={{ fontSize: 30 }}> = {this.state.answer}</Text>
            : null

          }



        </View>
        <View style={styles.buttonGrid}>
          <View style={styles.buttonGridRow1}>

            <TouchableOpacity onPress={() => this.displayNum(1)} style={styles.numButton}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayNum(2)} style={styles.numButton}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayNum(3)} style={styles.numButton}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayOperator("+")} style={styles.operatorButton}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonGridRow2}>

            <TouchableOpacity onPress={() => this.displayNum(4)} style={styles.numButton}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayNum(5)} style={styles.numButton}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayNum(6)} style={styles.numButton}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayOperator("-")} style={styles.operatorButton}><Text style={styles.buttonText}>-</Text></TouchableOpacity>


          </View>
          <View style={styles.buttonGridRow3}>

            <TouchableOpacity onPress={() => this.displayNum(7)} style={styles.numButton}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayNum(8)} style={styles.numButton}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayNum(9)} style={styles.numButton}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayOperator("*")} style={styles.operatorButton}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonGridRow3}>

            <TouchableOpacity onPress={() => this.displayNum("-")} style={styles.operatorButton}><Text style={styles.buttonText}>(-)</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayNum(0)} style={styles.numButton}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.clear()} style={{ height: 110, width: 210, backgroundColor: "red", borderWidth: .5, borderColor: 'black' }}><Text style={{ textAlign: 'center', fontSize: 30, marginTop: 25 }}>C</Text></TouchableOpacity>
            

          </View>
          <View style={styles.buttonGridRow3}>

            <TouchableOpacity onPress={() => this.displayOperator("/")} style={styles.operatorButton}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.displayOperator("%")} style={styles.operatorButton}><Text style={styles.buttonText}>%</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.calculate()} style={{ height: 110, width: 210, backgroundColor: "#26EE40", borderWidth: .5, borderColor: 'black' }}><Text style={{
              flex: 1, textAlign: 'center', fontSize: 40, flexDirection: 'row', marginTop: 20
            }}>=</Text></TouchableOpacity>

          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
  },

  buttonGrid: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  buttonGridRow1: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: Dimensions.get('window').width,
    margin: 0,

  },
  buttonGridRow2: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: Dimensions.get('window').width,
    margin: 0,
    padding: 0
  },
  buttonGridRow3: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: Dimensions.get('window').width,
    margin: 0,
    padding: 0
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 35,
    flexDirection: 'row',
    marginTop: 20
  },
  numButton: {
    height: 110,
    width: 105,
    backgroundColor: "#EEEEEE",


  },
  operatorButton:{
    height: 110,
    width: 105,
    backgroundColor: "#8A8A8A",
    borderWidth: .5, 
    borderColor: 'black'

  }


});
