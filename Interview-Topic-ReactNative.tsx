//////////////////////--------- Basic Questions -----------/////////////////////
// latest version of react-native : 0.71 ,stable version : 68.5 , 65

// Xcode version : 12.4

// @react-navigation/native : V5 ,V6

// Netive app vs Hybrid app
/*1.Native app : platform spacifec java,kotlin,objective C
  2.Hybred app : reactNative ,Flutter its open in native browser in android and ios device */

// How to reduce the app size?
/*1. Hermes : => Hermes is a new JavaScript engine used by React Native which gives massive performance boosts and apk size boost to React Native by packing loads of useful features from precompiling JavaScript to bytecode to reduced footprint of running JavaScript on mobile devices!
2. Open up android/app/build.gradle
Set def enableProguardInReleaseBuilds = true this would enable Progaurd to compress the Java Bytecode. This reduces the app size by a tad bit
Set def enableSeparateBuildPerCPUArchitecture = true . Android devices support two major device artitectures armebi and x86. By default RN builds the native librariers for both these artitectures into the same apk.

After reading through React Native official docs we found that All the apps from Google Playstore work's on different ABI such as

armeabi-v7a
arm64-v8a
x86
x86_64
So in order to support all the above ABI's react-native by default creates a Universal APK which contains files required for different device configuration into a single apk which bloated the apk size to 23 MB.

What is an ABI?
Different Android devices use different CPUs, which in turn support different instruction sets. Each combination of CPU and instruction set has its own Application Binary Interface (ABI).

Instead of Generating a Universal apk we switched to a completely new Publishing format called .aab

After generating aab file and uploading to Google Playstore, The Application size reduced drastically by 70% and App size to 7.29 MB from 23 MB
3.minimum 3rd party librery use 
*/

//How to improve react native app performance ?
/*
1.Hermes : => Hermes is a new JavaScript engine used by React Native which gives massive performance boosts and apk size boost to React Native by packing loads of useful features from precompiling JavaScript to bytecode to reduced footprint of running JavaScript on mobile devices!
2.Flash List instid of FlatList
3.flatList instid of scrollView
4.Reduce unnecessary Re-Renders with useMemo Hook 
5.effective state data handling
5.1 const [state,setState]
function handelClick(){
  setState(prevState => {
    return Object.assign({}, prevState, {count : prevState.count + 1});
  });
}
it help to not direct manupulet the DOM first compare with vertual dom then make changes
5.2 Use Context API
5.3 Redux
remove all console.log
breaking learge code in small component 
Lazy Loading => load components when user visit them 
*/

//How to optimize React native code
/*
1. Use an Image Caching Solution by  react - native - fast - image
rendering a lot of images on one screen  
low performance in general
low - performance loading from cache
2.memo : => memorize a state value,shallow compare between previous prop and next props only for premetive value (mens not passing callback function,array,objects)
3.useMemo : => memorize any operation of a function ,is a callback function and have a dependency Array
4.useCallback : => memorize a function , is a callback function and have a dependency Array
5.Use appropriate image size
6.Avoid unnecessary renders ex: -> use useMemo()
7.Use nativeDriver with Animated library ex: -> animeted
8.Use Flipper to debug and performance monitor
9.delete console statements in the source code
10.Use FlatList to render a huge list of data items
11.flickering
*/

// what is safeAreaView : Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13).

// Yarn VS Npm?
/*
Yarn => Facebook developed Yarn in 2016 as a replacement for NPM. It was designed to offer more advanced features that NPM lacked at the time (such as version locking) and create a more secure, stable, and efficient product.
However, since Yarn was released, NPM has added several crucial features. In its current state, Yarn is now more of an alternative to NPM rather than a replacement.

NPM => is the default package manager for Node.js with a CLI tool that helps install, manage, and remove Node.js packages. It also enables users to share open-source Node.js packages.
*/

//TouchableOpacity vs Button vs Pressable
/*
Pressable was a new introduction to RN 0.63, prior to that,Touchable Opacity was the most common used Component to wrap a component or simliar components.
Both their basic functionalities are same, to make a text/image clickable and user interactive.
But with Pressable you get to access a lot new props like :
HitRect, which is such a cool feature, acc to docs :
A basic button component that should render nicely on any platform. Supports a minimal level of customization.
*/

//scrollView vs flatList?
/*
ScrollView loads all the content,the data to be displayed on screen all at once.it would automatically cause performance issues
Flatlist It shows only those elements that are currently being displayed on the screen.
As opposed to the ScrollView, the FlatList renders only those elements that are currently being displayed on the screen (default: 10 items).
*/

//How roted screen potret to landscrep
/*
On iOS, in the General tab and Deployment Info section of Xcode enable the Device Orientation you want to support (ensure you have selected iPhone from the Devices menu when making the changes). For Android, open the AndroidManifest.xml file and within the activity element add 'android:screenOrientation="portrait"' to lock to portrait or 'android:screenOrientation="landscape"' to lock to landscape.

//reactNative animation?
/*
1.react-native-share-element for transitions using react navigation inrernally and share element will use in all stack screens
2.react-native-Animatable, it is used in all image, view, text by animatable.its propertys are animation = { 'slideInUp'}, duration, delay, direction, easing
3.react-navigation-shared-element - changes in stack-navigation
*/
//High resolution image optimize
/*
react-native-image-resizer props are  imageUri,newWidth,newHeight,compressFormat,quality
react-native-image-picker props are  maxWidth: 500, maxHeight: 500, quality: 0.5,
Use PNG format instead of JPG
Use WEBP format for images. It can help reduce the binary size on iOS and Android by 29%
*/

//threads om react native
/*
1.Main threads :(3rd) render the view 
2.shadow threads :(2nd) send the view, and it calculet the height with 
3.js threads :(1st) compile all code and execute 
*/

//Dark Theeme?

//Payment getway?
/*
1.React-Native-Stripe
The Stripe React Native SDK allows you to build payments into your native Android and iOS apps using React Native. We provide powerful and customisable UI screens and elements that you can use out-of-the-box to collect your users’ payment details.
<StripeProvider
      publishableKey="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      // Your app code here
    </StripeProvider>

2.React-Native-Razorpay

*/

//3.Chat socket.io and firebase chat?
/*
Use an open-socket (Websockets) to get information directly from the server when a new bid arrives.
In this article I will talk about Websockets and specifically on the Node.js library - Socket.io
Socket.io is a popular JavaScript library that allows us to create real-time, bi-directional communication between software applications and a Node.js server.
*/

//Authentication?
/*
1.Api Auth
2.React-native-google-signIn/google-signin
3.React-native-fb sdk
4.react-native-apple-authentication
*/

//Thunk for middleware => Redux is a state management tool, which is used to store the state of different variables in our react application. It makes complex react applications easier by centralizing the application state. You can learn more about redux here. Redux supports middleware, and middleware functions run between dispatching an action and the moment it reaches the reducer. Redux middlewares can be used for logging, routing, asynchronous actions, etc.For the scope of this tutorial, we will focus on a redux middleware called thunk. It allows us to return functions instead of objects from redux actions. Plain redux doesn’t allow complex logic inside action functions, you can only perform simple synchronous updates by dispatching actions. This middleware extends its ability and lets you write complex logic that interacts with the store. Thunk doesn’t interfere with the action until it returns a function

//Redux-Toolkit
/*
Redux is a Javascript global state management library designed to act as a central store for managing application states. Redux helps build apps that behave consistently across all environments by providing a system to track all changes made to the state. For state management we use redux and redux toolkit
with out it we have to pass props parent chaid (props drilling) can also cantext API by using use reducer hook there have provider and consumer.
redux toolkit have createSlice() which have all initial state and action here action type is the reducer name automaticaly created 
createSlice
ConfigureStore
actionCreator
creatAction
useDispatch 
useSelector 

Action mins => what to do ?
An action is a simple object that indicates a desire to modify a state in the Redux store. It is required that actions specify a payload and a type attribute that describes what kind of change is to be made to the state. Actions require reducers to be successfully carried out. 
return{
  type :'INCREMENT',
  paylode: num
}

Reducer mins => How to do ? it contain state and action 
A reducer is a pure function that takes two arguments; the current state and an action to return a new state result. Reducers don't modify the original state directly; rather, they make a copy of the state and modify that.
state is readOnly only way to change state dispatch a action.
Dispatch => A function that accepts either a synchronous or asynchronous action object and sends it to a reducer for execution.

Slice => A collection of reducers and actions that work together to implement a single app feature.

Store => A store is an object that holds the app's entire state tree. Redux can only have a single store in an app.
*/

//react-queary => React Query is a lightweight, yet powerful library for fetching and caching data in React applications. It is designed to simplify the process of retrieving and managing data and to improve the performance of your application. First, React Query is a convenient tool for managing and fetching data in a React application. It provides features like automatic caching, background updates, and the ability to easily retry failed requests, which can make it easier to build performant and user-friendly applications.React Query and Axios can provide a powerful combination for fetching and managing data in a React application. React Query can handle all of the complex logic for caching, updating, and retrying requests, while Axios can be used to actually make the requests to the server. This can make it easier to build robust and maintainable applications.

//@storybook/react-native  => “Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.” Easy access to all components – access each component and browse through its states without having to worry about business logic. Increased chance of catching all edge cases. Ease of sharing and reusing components. Improved code quality – because you write components in isolation, disregarding business logic, you potentially put greater emphasis on code quality and reusability. Better documentation.

//@types/styled-components

//Testing JEST ?
/*
Jest unit testing freamwork

1. create a name.test.js file , import the sum() function const Sum = require ('./Sum')
2. test("test case", () => {
    expect(sum()).toBe(3)
});
3. npm install D(dependency) Jest
4. in package.json "Scripts": {
    test: "jest"
}
5. npm run test
// function test : =>
function sum(a, b) {
    return a + b
}
module.export Sum

test("Output Test", () => {
    expect(sum(2, 3)).toBe(4)
})
//.notToBe()
// Object test : =>
test("Output Test", () => {
    expect(sum(2, 3)).toEqual({ name: 'Abhijit', Roll: 5 })
})
// Callback function test : =>
function fetch(back) {
    return back("hello")
}
module.export = fetch()
test("call back test", (done) => {
    function callback(data) {
        try {
            expect(data).toBe("hello back")
            done()
        } catch (err) {
            done(err)
        }
    }
    fetch(callback)
})
 Promise function test : =>
function fetchData() {
    return new Promise((resolve, reject) => {
        resolve("hello")
    })
}
test("Promise Testing", () => {
    return fetchData().then((data) => {
        expect(data).toBe("hello")
    })
})
*/

//Android and Ios App build process?
/*
 ANDROID =>
Run project => reactnative run android
 bundle debug => gradlew assemble release
 upload in playstore => keystore generate ,keymame key_aliases ,add keystore in android app
 bundle release => ./gradlew bundlerelease

IOS :->
1. Pod install
2. apple devloper account create
create certifecat (3types of certifecat there)
P12 file create
distribution certifecate => build and Push
devlopment cerifecate => build and .ipa
enterprize certifecat => in house app test
3. in keystore .P12 will install
4. .xcworkspace open
project folder from left side
signing and capability  add account
5. again folder -> info.pList version update
6. generic/any ios device -> Product -> Archive
7. to .ipa created distribution -> build -> upload to test flight

//If keystore loose what will do =>
//Keep your keystore and private key in a safe and secure place, and ensure that you have secure backups of them. If you publish an app to Google Play and then lose the key with which you signed your app, you will not be able to publish any updates to your app, since you must always sign all versions of your app with the same key.There's no way to recover your key . Lost my keystore for uploaded app on android market .So finally, Its not possible. Please Create new keystore with the application with different package name and version and publish as a new application.

// if IOS or ANDROID folder deleted use -> react-native upgrade commend

//Certifecate create in Ios : =>
/*
1.you get purchase approved email from Apple after buying Apple Developer Program
2.go to Developer site(https://developer.apple.com/)
    3.click Certificates, IDs & Profiles to go to the certification page. 2 type of certifecat you can download one is devlopment certifecate 2nd is production certification
4.execute Keychain Access program on your Mac.
5.click Keychain accesss > Certification Assistant > Request a Certificate From a Certificate Authority...on the left top of the PC screen.
6.f you click Request a Certificate From a Certificate Authority...menu, you can see Certificate Assistant like below screen.inser User Email Address and Common Name.select Saved to disk and Let me specify key pair information.click Continue button and save the file to your PC.completed to create KeyChain Certification file.
7.go to Account page in Apple Developer site(https://developer.apple.com/) and select Certificates, IDs &, completed to create certification. click Download to save certification to your PC.
        8. register certification
9.configure Apple Developer account
10.after xcode is executed, click projectname on the left top and select General tab.
connect with apple account
11.connect Provisioning Profiles
*/

// import Scripts vertual scroll view

// Google all services Map,Google Login,Facebook Login IN APP INTEGRATION

// Firebase Service (social login ,CRUD operation,notifecation)

// Local Storage @react-native-async-storage/async-storage

//////////////////////--------- Styles -----------/////////////////////

/*
react native use StyleSheet component for styling
diffrent styling in IOS and ANDROID use platform.ios or Platform.android from react-native
const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})
Horizontal : left to right,x axis
Vertical : up to Down , y axis
flexDirection: 'row' //x axis ,horizontayy
Flex for layout the element ,use primary and secoendary axis concept default axis is column //y axis ,verticaly,top to bottom
display:'flex',
flex : 1 //take the full area     //according to primary access
flexWrap:"wrape", //help to keep the hole things in to the parent view not to overflow
flex:"grow"
overflow:"hidden"
justifyContent:'flex-start',flex-end,center,space-between,space-around    //work according to primary axis like flexDirection row or column
alignItem:'center',flex-start,flex-end  // work item alignment according to cross access
alignSelf:'stretch',center,flex-end for the perticuler element only,it can over right the container alignItem property but alignItem is for the container
z-index : 1  // low value to kep it into the top or bottom   according to z axis ,it work with position :absolure or relative
position:'absolute', // control how the components are overlap each other and use left right top bottom
*/

//////////////////////--------- Descriptions -----------/////////////////////

//Simple component :is a

//pass data child component to parent and parent to child

//Lifecycle methods order of execution ?
/*
1.constructor()//1st execute
2.Render() //2nd execute
3.componentDidMount() //3rd execute
2.Render() //(again) //4th execute
4.componentDidUpdate(prevProps, prevState) //5th execute
5.componentWillUnmount()//6th execute
*/

// Component ?
// 3 way components are render 1.state changes, 2. props are receive changes, 3.parent is render child component will re - render
//Control vs unControl component?
//control component control by the react component bu using onChange and value er get the value and chenge the input tezt value ex: useState, and uncontrol component control by DOM ex: useRef

//PROPS?
/*
import React, { FC } from "react";
import { Dimensions, StyleSheet, View, TextInput } from "react-native";
const { height, width } = Dimensions.get("screen");
interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  btnStyle?: {};
  placeholderTextColor: string;
  icon?: string | undefined;
}
const TextInputs: FC<Props> = (props) => {
  return (
    <View style={{}}>
      <TextInput
        style={{ ...style.input, ...props.btnStyle }}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry || false}
        placeholderTextColor={props.placeholderTextColor}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#000000",
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#eafafc",
    borderColor: "#1b94c4",
    borderRadius: 10,
  },
});
export default TextInputs;

<TextInputs
  placeholder="enter Password"
  placeholderTextColor="#1b94c4"
  secureTextEntry={true}
  onChangeText={(e) => setData({ ...data, password: e })}
  btnStyle={{
    borderColor: validate && data.password === "" ? "red" : "#1b94c4",
  }}
/>;
*/

//HOOKS?
/*
1.UseState hook

2.useState is a Hook that lets you add state to function components.
// EX => const [isHungry, setIsHungry] = useState(true);

3.UseEffect

The Effect Hook lets you perform side effects in function components , mostly use in apiCall
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    }, []);

4.UseRef => 

manupulet DOM directly, Hooking Perticuler component of HTML
useRef returns a mutable ref object whose.current property is initialized to the passed argument(initialValue).The returned object will persist for the full lifetime of the component.
        import { useState, useRef } from './react';
    function App() {
        const refElement = useRef("");
        const [name, setName] = useState("Abhijit")
        const inputEl = useRef("");
        const Reset = () => {
            setName('')
            // `current` points to the mounted text input element
            inputEl.current.focus();
        };
        return (
            <>
                <input ref={inputEl} type="text" />
                <button onClick={Reset}>Focus the input</button>
            </>
        );
    }

5.UseMemo =>

    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    Returns a memoized value.increze the performance of app
    Pass a “create” function and an array of dependencies.useMemo will only recompute the memoized value when one of the dependencies has changed.This optimization helps to avoid expensive calculations on every render.
        import { useState, useMemo } from './react';
    function App2() {
        const [add, setAdd] = useState(0)
        const [remove, setRemove] = useState(10)
        const multiplecation = useMemo(function multiply() {
            console.log("***********")
            return add * 2
        }, [add])
        return (
            <>
                <input ref={inputEl} type="text" />
                <button onClick={() => { setAdd(add + 1) }}>Increse</button>
                <button onClick={() => { setAdd(add - 1) }}>decrese</button>
                {multiplecation}
            </>
        );
    }

6.UseCallback => 

Returns a memoized callback or function.
Pass an inline callback and an array of dependencies.useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
        import { useState, useMemo, useCallback } from './react';
    function ChildrenA({ Learning, count }) {
        console.log("children component")
    }
    import { useState, useMemo, useCallback } from './react';
    import ChildrenA from './ChildrenA'
    function App3() {
        const [add, setAdd] = useState(0)
        const [count, setCount] = useState(0)
        const Learning = useCallback(function someUseCallback() {
            console.log("***********")
        }, [count])
        return (
            <>
                <Children Learning={Learning} count={count} />
                <button onClick={() => { setAdd(add + 1) }}>Increse</button>
                {count}
                <button onClick={() => { setCount(add + 11) }}>decrese</button>

            </>
        );
    }

7.customHook =>

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
remove the duplicat logic from a compoment and extract the logic in custom hook is like HOC component
    import { useState } from 'react';
    function useCounter(initialValue = 0) {
        const [count, setCount] useState(initialValue)
        function Increment() {
            setCount(count + 1)
        }
        function Decrement() {
            setCount(count - 1)
        }
        return [count, Increment, Decrement]
    }
    export default useCounter
    import React from 'react';
    import useCounter from './useCounter'
    function Counter1() {
        const [count, Increment, Decrement] = useCounter(10)
        return (
            <View>
                {counter}
                <Button onClick={Increment}>Increment</Button>
                <Button onClick={Decrement}>Decrement</Button>
            </View>
        )
    }
    export default Counter1
    import React from 'react';
    import useCounter from './useCounter'
    function Counter2() {
        const [count, Increment, Decrement] = useCounter()
        return (
            <View>
                {counter}
                <Button onClick={Increment}>Increment</Button>
                <Button onClick={Decrement}>Decrement</Button>
            </View>
        )
    }
    export default Counter2
    import React from 'react'
    import Counter1 from './Counter1'
    import Counter2 from './Counter2'
    function App() {
        return (
            <View>
                <Counter1 />
                <Counter2 />
            </View>
        )
    }
    export default App
*/

//deepLinking ?
