/**
 * @flow
 */
import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  Image
} from 'react-native';

import FBSDK, {
  AccessToken,
  LoginManager
} from 'react-native-fbsdk';


import Component from './controls/Component';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: false, loading: true, failed: false};
  }

  componentDidMount() {
    let tries = 0;
    const handleToken = () => {
      if (++tries < 3) {
        AccessToken.getCurrentAccessToken().then(data => {
          // todo see if access token needs refreshing
          if (data) {
            if (data.expirationTime <= (new Date()).getTime()) {
              console.log('Refreshed access token');
              AccessToken.refreshCurrentAccessTokenAsync().then(() => handleToken());
            } else {
              this.props.loggedInFinished(data.accessToken);
            }
          }
          else
            this.setState({loading: false});
        }).catch(err => console.error(err));
      } else {
        this.setState({failed: true});
      }
    };
    handleToken();
  }

  login = () => {
    console.log('Login manager ');

    LoginManager.logInWithReadPermissions(['email', 'public_profile']).then(
      result => {
        if (result.isCancelled) {
          alert("login is cancelled.");
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
              if (data.accessToken) {
                console.log(data.accessToken.toString());
                this.props.loggedInFinished(data.accessToken.toString());
              }
              else {
                console.log('no token in getAccessToken', data);
              }
            }
          ).catch(err => {
            console.error(err);
          });
        }
      },
      error => console.error('Login fail with error')
    );
  };

  render() {
    const {loading, failed} = this.state;

    if (failed) {
      return <View style={{backgroundColor: '#45487F', flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text
        style={{color: '#fff'}}>{"Error logging in to Facebook, please try again in a few."}</Text></View>;
    }

    if (loading)
      return <View style={{backgroundColor: '#45487F', flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text
        style={{color: '#fff'}}>{"Loading..."}</Text></View>;

    return (
      <View style={{flex: 1, backgroundColor: '#45487F'}}>{/*
       <StatusBar backgroundColor="#45487F"/>
       <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
       <Image source={require('./lib/view/imgs/logo.png')} style={{width: 110, height: 110}}/>
       </View>
       <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text style={style.heroText}>{"Meet new People.".toUpperCase()}</Text>
       <Text style={style.heroText}>{"Build Amazing Things.".toUpperCase()}</Text>
       </View>
       <View style={{flex: 1, justifyContent: 'flex-start', paddingTop: 6, alignItems: 'center'}}>
       <TouchableHighlight onPress={this.login} style={{borderWidth: 2, padding: 12, borderStyle: 'solid', borderColor: '#fff', borderRadius: 3}}>
       <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
       /!*<FacebookIcon size={34}/>*!/
       <Image style={{width: 22, height: 22}} source={require('./lib/view/imgs/fb.png')}/>
       <View style={{justifyContent: 'center', alignItems: 'center'}}>
       <Text numberOfLines={1} style={{marginLeft: 10, color: '#fff', fontSize: 22}}>{"Login with Facebook"}</Text>
       </View>
       </View>
       </TouchableHighlight>
       <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
       <Text style={style.termsText}>{"By logging in you agree to our "}</Text>
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'center'}}>
       <Link url="https://www.collaborizm.com/Terms.html"><Text style={{fontWeight: 'bold', ...style.termsText}}>{"Terms of Use"}</Text></Link>
       <Text style={style.termsText}>{" and "}</Text>
       <Link url="https://www.collaborizm.com/PrivacyPolicy.html"><Text style={{fontWeight: 'bold', ...style.termsText}}>{"Privacy Policy"}</Text></Link>
       </View>
       </View>
       */}
<Text>Hello</Text>

      </View>
    );
  }
}

const style = {
  heroText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  termsText: {
    color: '#fff',
    fontSize: 10
  }
};