import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {darkGray} from '../utils/Colors';

const Search = () => {
  // const [isCancelVisible, setIsCancelVisible] = useState(false);
  // const inputRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          marginTop: 50,
          alignItems: 'center',
        }}>
        <TextInput
          ref={inputRef}
          style={{
            width: isCancelVisible ? '80%' : '90%',
            height: 40,
            backgroundColor: darkGray,
            marginLeft: 20,
            borderRadius: 5,
          }}
          onFocus={() => {
            setIsCancelVisible(true);
          }}
          onSubmitEditing={() => {
            setIsCancelVisible(false);
          }}
        />
        {isCancelVisible ? (
          <Text
            style={{color: '#fff', marginLeft: 10, fontSize: 16}}
            onPress={() => {
              inputRef.removeFocus();
              setIsCancelVisible(false);
            }}>
            Cancel
          </Text>
        ) : null}
      </View> */}
      <TouchableOpacity
        style={{
          width: '70%',
          height: 50,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setShowPopup(true);
        }}>
        <Text style={{color: '#fff'}}>Open Dialog</Text>
      </TouchableOpacity>
      {showPopup ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showPopup}
          onRequestClose={() => {
            setShowPopup(false);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                height: '45%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: '80%',
                  height: '80%',
                  backgroundColor: '#fff',
                  borderRadius: 15,
                }}>
                <View style={{width: '100%', height: '100%', marginTop: 60}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 30,
                      fontWeight: '900',
                      alignSelf: 'center',
                    }}>
                    Enjoy Our App
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      width: '90%',
                      alignSelf: 'center',
                      marginTop: 10,
                      textAlign: 'center',
                    }}>
                    If you enjoy using our App.Would you mind rating us on the
                    App Store ?
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      height: 53,
                      borderRadius: 10,
                      backgroundColor: 'orange',
                      alignSelf: 'center',
                      marginTop: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 20, fontWeight: '800'}}>
                      Rate Us!
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      height: 53,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: 'orange',
                      alignSelf: 'center',
                      marginTop: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      setShowPopup(false);
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '600',
                        color: 'orange',
                      }}>
                      Later
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  width: '100%',
                  height: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 0,
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{width: 100, height: 100}}
                />
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup}
        onRequestClose={() => {}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '90%',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: '80%',
                height: '50%',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              <View style={{width: '100%', height: '100%', marginTop: 70}}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: '800',
                    alignSelf: 'center',
                  }}>
                  Enjoy Our App
                </Text>
                <Text
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  If you enjoy using our app then if you dont mind rating us on
                  App Store ?
                </Text>
                <TouchableOpacity
                  style={{
                    width: '90%',
                    height: 55,
                    alignSelf: 'center',
                    borderRadius: 10,
                    backgroundColor: 'orange',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                  }}>
                  <Text style={{fontSize: 20}}>Rate Us!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '90%',
                    height: 55,
                    alignSelf: 'center',
                    borderRadius: 10,
                    borderColor: 'orange',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                  }} onPress={()=>{
                    setShowPopup(false)
                  }}>
                  <Text style={{fontSize: 20, color: 'orange'}}>Later</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                top: 0,
              }}>
              <Image
                source={require('../images/star.png')}
                style={{width: 130, height: 130}}
              />
            </View>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default Search;
