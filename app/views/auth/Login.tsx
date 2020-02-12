import {Button, Container, Icon, Text, View} from 'native-base';
import {connect} from 'react-redux';
import React from 'react';
import {StyleSheet} from 'react-native';
import {login} from '../../store/auth/actions/login.action';

class LoginComponent extends React.Component<{login}> {
    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <Button iconLeft light style={styles.button} onPress={() => {
                        this.props.login({username: 'barchero', password: 'barchero'});
                    }}>
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

const mapStateToProps = (state) => ({
    auth: state.auth
});

export const Login = connect(mapStateToProps, {login})(LoginComponent);


