import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {Modal} from 'react-native';

const masterboard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
export default function App() {
  const [getTxt1, setTxt1] = useState('-');
  const [getTxt2, setTxt2] = useState('-');
  const [getTxt3, setTxt3] = useState('-');
  const [getTxt4, setTxt4] = useState('-');
  const [getTxt5, setTxt5] = useState('-');
  const [getTxt6, setTxt6] = useState('-');
  const [getTxt7, setTxt7] = useState('-');
  const [getTxt8, setTxt8] = useState('-');
  const [getTxt9, setTxt9] = useState('-');
  const [getTurn, setTurn] = useState('p1');
  const [getResult, setResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const onClick = (game) => {
    if (getTurn == 'p1') {
      if (game == 1 && getTxt1 == '-') {
        setTxt1('X');
        masterboard[0][0] = 'X';
      }
      if (game == 2 && getTxt2 == '-') {
        setTxt2('X');
        masterboard[0][1] = 'X';
      }
      if (game == 3 && getTxt3 == '-') {
        setTxt3('X');
        masterboard[0][2] = 'X';
      }
      if (game == 4 && getTxt4 == '-') {
        setTxt4('X');
        masterboard[1][0] = 'X';
      }
      if (game == 5 && getTxt5 == '-') {
        setTxt5('X');
        masterboard[1][1] = 'X';
      }
      if (game == 6 && getTxt6 == '-') {
        setTxt6('X');
        masterboard[1][2] = 'X';
      }
      if (game == 7 && getTxt7 == '-') {
        setTxt7('X');
        masterboard[2][0] = 'X';
      }
      if (game == 8 && getTxt8 == '-') {
        setTxt8('X');
        masterboard[2][1] = 'X';
      }
      if (game == 9 && getTxt9 == '-') {
        setTxt9('X');
        masterboard[2][2] = 'X';
      }
      setTurn('p2');
    } else if (getTurn == 'p2') {
      if (game == 1 && getTxt1 == '-') {
        setTxt1('O');
        masterboard[0][0] = 'O';
      }
      if (game == 2 && getTxt2 == '-') {
        setTxt2('O');
        masterboard[0][1] = 'O';
      }
      if (game == 3 && getTxt3 == '-') {
        setTxt3('O');
        masterboard[0][2] = 'O';
      }
      if (game == 4 && getTxt4 == '-') {
        setTxt4('O');
        masterboard[1][0] = 'O';
      }
      if (game == 5 && getTxt5 == '-') {
        setTxt5('O');
        masterboard[1][1] = 'O';
      }
      if (game == 6 && getTxt6 == '-') {
        setTxt6('O');
        masterboard[1][2] = 'O';
      }
      if (game == 7 && getTxt7 == '-') {
        setTxt7('O');
        masterboard[2][0] = 'O';
      }
      if (game == 8 && getTxt8 == '-') {
        setTxt8('O');
        masterboard[2][1] = 'O';
      }
      if (game == 9 && getTxt9 == '-') {
        setTxt9('O');
        masterboard[2][2] = 'O';
      }
      setTurn('p1');
    }

    result();
  };
  const reload = () => {
    window.location.reload(false);
  };
  const result = () => {
    if (
      (masterboard[0][0] === 'X' && masterboard[0][1] === 'X' && masterboard[0][2] === 'X') ||
      (masterboard[0][0] === 'X' && masterboard[1][1] === 'X' && masterboard[2][2] === 'X') ||
      (masterboard[0][0] === 'X' && masterboard[1][0] === 'X' && masterboard[2][0] === 'X') ||
      (masterboard[0][1] === 'X' && masterboard[1][1] === 'X' && masterboard[2][1] === 'X') ||
      (masterboard[0][2] === 'X' && masterboard[1][2] === 'X' && masterboard[2][2] === 'X') ||
      (masterboard[0][2] === 'X' && masterboard[1][1] === 'X' && masterboard[2][0] === 'X') ||
      (masterboard[0][2] === 'X' && masterboard[1][1] === 'X' && masterboard[2][0] === 'X') ||
      (masterboard[1][0] === 'X' && masterboard[1][1] === 'X' && masterboard[1][2] === 'X') ||
      (masterboard[2][0] === 'X' && masterboard[2][1] === 'X' && masterboard[2][2] === 'X')
    ) {
      setTurn('');
      modalDisplay('PLAYER 1 WINS');
      alert('PLAYER 1 WINS!');


    } else if (
      (masterboard[0][0] === 'O' && masterboard[0][1] === 'O' && masterboard[0][2] === 'O') ||
      (masterboard[0][0] === 'O' && masterboard[1][1] === 'O' && masterboard[2][2] === 'O') ||
      (masterboard[0][0] === 'O' && masterboard[1][0] === 'O' && masterboard[2][0] === 'O') ||
      (masterboard[0][1] === 'O' && masterboard[1][1] === 'O' && masterboard[2][1] === 'O') ||
      (masterboard[0][2] === 'O' && masterboard[1][2] === 'O' && masterboard[2][2] === 'O') ||
      (masterboard[0][2] === 'O' && masterboard[1][1] === 'O' && masterboard[2][0] === 'O') ||
      (masterboard[0][2] === 'O' && masterboard[1][1] === 'O' && masterboard[2][0] === 'O') ||
      (masterboard[1][0] === 'O' && masterboard[1][1] === 'O' && masterboard[1][2] === 'O') ||
      (masterboard[2][0] === 'O' && masterboard[2][1] === 'O' && masterboard[2][2] === 'O')
    ) {
      setTurn('');
      setModalVisible(true);
      modalDisplay('PLAYER 2 WINS');
      alert('PLAYER 2 WINS');
    } else if (
      masterboard[0][0] !== '' &&
      masterboard[0][1] !== '' &&
      masterboard[0][2] !== '' &&
      masterboard[1][0] !== '' &&
      masterboard[1][1] !== '' &&
      masterboard[1][2] !== '' &&
      masterboard[2][0] !== '' &&
      masterboard[2][1] !== '' &&
      masterboard[2][2] !== ''
    ) {
      setTurn('');
      setModalVisible(true);
      modalDisplay('Tis a Draw');
      alert('Tis a DRAW!');
    }
  };
  const modalDisplay = () =>{
         <View style={styles.centeredView}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          console.log("aaaa");
          setModalVisible(!modalVisible);
          modalDisplay();
        }}
      ></Modal></View>
        

  }

  const newGame = () => {
    setTxt1('-'),
      setTxt2('-'),
      setTxt3('-'),
      setTxt4('-'),
      setTxt5('-'),
      setTxt6('-'),
      setTxt7('-'),
      setTxt8('-'),
      setTxt9('-');
    (masterboard[0][0] = ''),
      (masterboard[0][1] = ''),
      (masterboard[0][2] = ''),
      (masterboard[1][0] = ''),
      (masterboard[1][1] = ''),
      (masterboard[1][2] = ''),
      (masterboard[2][0] = ''),
      (masterboard[2][1] = ''),
      (masterboard[2][2] = '');
    setResult('');
    setTurn('p1');
  };

  const [getText, setText] = useState('');

  const buttonClick = (txt) => {
    // alert(txt)
    setText(getText + txt);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            padding: '10%',
            alignItems: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            fontSize: '85%',
            textAlign: 'center',
          },
        ]}>
        <View style={[{ padding: '10%', fontSize: '25' }]}>
          <Button onPress={reload} title="RELOAD GAME" color="#f78da7" />
        </View>
        CURRENT PLAYER :{' '}
        {getResult == ''
          ? getTurn == 'p1'
            ? 'PLAYER 1       SYMBOL: X'
            : 'PLAYER 2       SYMBOL: O'
          : ''}
        <Text />
      </View>
      <View style={styles.viewRowContainer}>
        <Pressable onPress={() => onClick(1)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt1}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(2)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt2}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(3)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt3}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.viewRowContainer}>
        <Pressable onPress={() => onClick(4)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt4}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(5)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt5}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(6)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt6}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.viewRowContainer}>
        <Pressable onPress={() => onClick(7)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt7}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(8)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt8}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(9)}>
          <View style={(styles.buttonContainer, styles.btnSize)}>
            <Text style={styles.buttonText}>{getTxt9}</Text>
          </View>
        </Pressable>
      </View>
      <View style={[{ alignItems: 'center' }]}>
        <Text
          style={[{ padding: '10%', fontSize: '25', justifyContent: 'center' }]}
        />
        {getResult}
        <Text />
      </View>
      <View style={[{ padding: '5%', fontSize: '25' }]}>
        <Button onPress={newGame} title="NEW GAME" color="#f78da7" />
      </View>

   
       <View style={styles.centeredView}>
          <View style={styles.modalView}>
           setResult('');
            <View style={[styles.textStyle]}>
        <Button onPress={newGame} title="NEW GAME" color="#f78da7" />
      </View>
          
          </View>
       
     
    </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    color: 'brown',
    borderWidth: '2px',
    borderColor: 'purple',
  },
  viewRowContainer: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    width: '100%',
    borderColor: '#c2185b',
    borderWidth: '1px',
    cursor: 'pointer',
  },
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  btnSize: { width: '100px', textAlign: 'center' },

  buttonText: { fontSize: 30, color: '#c2185b' },
  buttonContainer: {
    width: '100%',
    height: 100,
    borderWidth: '1px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  }, modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
