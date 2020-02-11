import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Icon, Text, View} from 'native-base';

export default function App() {
  return (
      <Container style={styles.container}>
        <View>
            <Button iconLeft light style={styles.button}>
                <Icon type='Ionicons' name='logo-facebook'/>
                <Text>
                    Login with Facebook
                </Text>
            </Button>
              <Button iconLeft light style={styles.button}>
                  <Icon type='Ionicons' name='logo-twitter'/>
                  <Text>
                      Login with Twitter
                  </Text>
              </Button>
              <Button iconLeft light style={styles.button}>
                  <Icon type='Ionicons' name='logo-google'/>
                  <Text>
                      Login with Google
                  </Text>
              </Button>
          </View>
      </Container>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
      marginBottom: 10
    }
});
