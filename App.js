import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
const board =  [['', '', ''],['', '', ''],['', '', '']];
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
  const [getResult, setResult] = useState('');
  const [getTurn, setTurn] = useState('p1');

  const onClick = (game) => {
    if (getTurn == 'p1') {
      if (game == 1 && getTxt1 == '-') {
        setTxt1('X');
        board[0][0] = 'X';
      }
      if (game == 2 && getTxt2 == '-') {
        setTxt2('X');
        board[0][1] = 'X';
      }
      if (game == 3 && getTxt3 == '-') {
        setTxt3('X');
        board[0][2] = 'X';
      }
      if (game == 4 && getTxt4 == '-') {
        setTxt4('X');
        board[1][0] = 'X';
      }
      if (game == 5 && getTxt5 == '-') {
        setTxt5('X');
        board[1][1] = 'X';
      }
      if (game == 6 && getTxt6 == '-') {
        setTxt6('X');
        board[1][2] = 'X';
      }
      if (game == 7 && getTxt7 == '-') {
        setTxt7('X');
        board[2][0] = 'X';
      }
      if (game == 8 && getTxt8 == '-') {
        setTxt8('X');
        board[2][1]= 'X';
      }
      if (game == 9 && getTxt9 == '-') {
        setTxt9('X');
        board[2][2] = 'X';
      }
      setTurn('p2');
    } else if (getTurn == 'p2') {
      if (game == 1 && getTxt1 == '-') {
        setTxt1('O');
        board[0][0] = 'O';
      }
      if (game == 2 && getTxt2 == '-') {
        setTxt2('O');
        board[0][1] = 'O';
      }
      if (game == 3 && getTxt3 == '-') {
        setTxt3('O');
        board[0][2] = 'O';
      }
      if (game == 4 && getTxt4 == '-') {
        setTxt4('O');
        board[1][0] = 'O';
      }
      if (game == 5 && getTxt5 == '-') {
        setTxt5('O');
        board[1][1] = 'O';
      }
      if (game == 6 && getTxt6 == '-') {
        setTxt6('O');
        board[1][2] = 'O';
      }
      if (game == 7 && getTxt7 == '-') {
        setTxt7('O');
        board[2][0] = 'O';
      }
      if (game == 8 && getTxt8 == '-') {
        setTxt8('O');
        board[2][1] = 'O';
      }
      if (game == 9 && getTxt9 == '-') {
        setTxt9('O');
        board[2][2] = 'O';
      }
      setTurn('p1');
    }

    result();
  };
  const result = () => {
    if (
      (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') ||
      (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
      (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') ||
      (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') ||
      (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') ||
      (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') ||
      (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') ||
      (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') ||
      (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X')
    ) {
      setTurn('');
      alert('PLAYER 1 WINS!');
    } else if (
       (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') ||
      (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
      (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') ||
      (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') ||
      (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') ||
      (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') ||
      (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') ||
      (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') ||
      (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')
    ) {
      setTurn('');
      alert('PLAYER 2 WINS');
    }

    else if (
      board[0][0] !== '' &&
      board[0][1] !== '' &&
      board[0][2] !== '' &&
      board[1][0] !== '' &&
      board[1][1] !== '' &&
      board[1][2] !== '' &&
      board[2][0] !== '' &&
      board[2][1] !== '' &&
      board[2][2] !== ''
    ) {
      setTurn('')
      setResult('Tis a DRAW!');
    }
  };
  const reload = () => {
    window.location.reload(false);
  };
  const play = () => {
    setTxt1('-'),
      setTxt2('-'),
      setTxt3('-'),
      setTxt4('-'),
      setTxt5('-'),
      setTxt6('-'),
      setTxt7('-'),
      setTxt8('-'),
      setTxt9('-');
    (board[0][0] = ''),
      (board[0][1] = ''),
      (board[0][2] = ''),
      (board[1][0] = ''),
      (board[1][1] = ''),
      (board[1][2] = ''),
      (board[2][0] = ''),
      (board[2][1] = ''),
      (board[2][2] = '');
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
        <Button onPress={play} title="NEW GAME" color="#f78da7" />
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
  btnSize: { width: '100px', textAlign: 'center' },

  buttonText: { fontSize: 30, color: '#c2185b' },
  buttonContainer: {
    width: '100%',
    height: 100,
    borderWidth: '1px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});
