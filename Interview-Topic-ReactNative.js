//////////////////////--------- Basic Questions -----------/////////////////////
//latest version of react-native : 0.71 ,stable version : 68.5 , 65
//Xcode version : 12.4
//@react-navigation/native : V5 ,V6

// touchableOpacity vs button
// scrollView vs flatlist
// ScrollView loads all the content,the data to be displayed on screen all at once.it would automatically cause performance issues
// Flatlist It shows only those elements that are currently being displayed on the screen.
// As opposed to the ScrollView, the FlatList renders only those elements that are currently being displayed on the screen (default: 10 items).

// how roted screen potret to landscrep
// On iOS, in the General tab and Deployment Info section of Xcode enable the Device Orientation you want to support (ensure you have selected iPhone from the Devices menu when making the changes). For Android, open the AndroidManifest.xml file and within the activity element add 'android:screenOrientation="portrait"' to lock to portrait or 'android:screenOrientation="landscape"' to lock to landscape.

//reactNative animation
// 1.react - native - share - element for transitions using react navigation inrernally and share element will use in all stack screens
// 2.react - native - Animatable, it is used in all image, view, text by animatable.its propertys are animation = { 'slideInUp'}, duration, delay, direction, easing

// high resolution image optimize
// react-native-image-resizer props are  imageUri,newWidth,newHeight,compressFormat,quality
// react-native-image-picker props are  maxWidth: 500, maxHeight: 500, quality: 0.5,
// Use PNG format instead of JPG
// Use WEBP format for images. It can help reduce the binary size on iOS and Android by 29%

//////////////////////--------- Plugins -----------/////////////////////

// payment getway 
//1.React-Native-Stripe
//2.React-Native-Razorpay

// Authentication
//1.Api Auth
//2.React-native-google-signIn/google-signin
//3.React-native-fb sdk
//4.react-native-apple-authentication

//Redux-Toolkit

//react-queary

//Flipper

//Hermes

//@storybook/react-native

//@types/styled-components

// testing JEST or ENZYME
//Jest unit testing freamwork
//1. create a name.test.js file , import the sum() function const Sum = require ('./Sum')
// 2. test("test case", () => {
//     expect(sum()).toBe(3)
// });
// 3. npm install D(dependency) Jest
// 4. in package.json "Screpts": {
//     test: "jest"
// }
// 5. npm run test
// // function test : => 
// function sum(a, b) {
//     return a + b
// }
// module.export Sum

// test("Output Test", () => {
//     expect(sum(2, 3)).toBe(4)
// })
// //.notToBe()
// // Object test : => 
// test("Output Test", () => {
//     expect(sum(2, 3)).toEqual({ name: 'Abhijit', Roll: 5 })
// })
// // Callback function test : => 
// function fetch(back) {
//     return back("hello")
// }
// module.export = fetch()
// test("call back test", (done) => {
//     function callback(data) {
//         try {
//             expect(data).toBe("hello back")
//             done()
//         } catch (err) {
//             done(err)
//         }
//     }
//     fetch(callback)
// })
// // Promise function test : => 
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         resolve("hello")
//     })
// }
// test("Promise Testing", () => {
//     return fetchData().then((data) => {
//         expect(data).toBe("hello")
//     })
// })

// Android and Ios App build process
// ANDROID :->
// Run project => reactnative run android 
//  bundle debug => gradlew assemble release 
//  upload in playstore => keystore generate ,keymame key_aliases ,add keystore in android app
//  bundle release => ./gradlew bundlerelease
//IOS :->
// 1. Pod install
// 2. apple devloper account create 
// create certifecat (3types of certifecat there)
// P12 file create
// distribution certifecate => build and Push 
// devlopment cerifecate => build and .ipa 
// enterprize certifecat => in house app test 
// 3. in keystore .P12 will install 
// 4. .xcworkspace open 
// project folder from left side 
// signing and capability  add account 
// 5. again folder -> info.pList version update
// 6. generic/any ios device -> Product -> Archive 
// 7. to .ipa created distribution -> build -> upload to test flight 

// if keystore loose what will do
// certifecate create in Ios
// 1.you get purchase approved email from Apple after buying Apple Developer Program
// 2.go to Developer site(https://developer.apple.com/)
//     3.click Certificates, IDs & Profiles to go to the certification page. 2 type of certifecat you can download one is devlopment certifecate 2nd is production certification
// 4.execute Keychain Access program on your Mac.
// 5.click Keychain accesss > Certification Assistant > Request a Certificate From a Certificate Authority...on the left top of the PC screen.
// 6.f you click Request a Certificate From a Certificate Authority...menu, you can see Certificate Assistant like below screen.inser User Email Address and Common Name.select Saved to disk and Let me specify key pair information.click Continue button and save the file to your PC.completed to create KeyChain Certification file.
// 7.go to Account page in Apple Developer site(https://developer.apple.com/) and select Certificates, IDs &, completed to create certification. click Download to save certification to your PC.
//         8. register certification
// 9.configure Apple Developer account
// 10.after xcode is executed, click projectname on the left top and select General tab.
// connect with apple account
// 11.connect Provisioning Profiles
// import Scripts vartual scroll view
// cashing in RN
// Google all services Map,Google Login,Facebook Login IN APP INTEGRATION
// Firebase Service (social login ,CRUD operation)
// Local Storage @react-native-async-storage/async-storage 


//////////////////////--------- Styles -----------/////////////////////
// react native use StyleSheet component for styleing
// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// })
//Horizontal : left to right,x axis
//Vertical : up to Down , y axis
//flexDirection: 'row' //x axis ,horizontayy 
// Flex for layout the element ,use primary and secoendary axis concept default axis is column //y axis ,verticaly,top to bottom
// display:'flex',
// flex : 1 //take the full area     //according to primary access
// flexWrap:"wrape", //help to keep the hole things in to the parent view not to overflow
//overflow:"hidden"
//justifyContent:'flex-start',flex-end,center,space-between,space-around    //work according to primary axis like flexDirection row or column
// alignItem:'center',flex-start,flex-end  // work item alignment according to cross access
// alignSelf:'stretch',center,flex-end for the perticuler element only,it can over right the container alignItem property but alignItem is for the container
// z-index : 1  // low value to kep it into the top or bottom   according to z axis ,it work with position :absolure or relative
// position:'absolute', // control how the components are overlap each other and use left right top bottom

//////////////////////--------- Descriptions -----------/////////////////////


//Simple component 
//pass data child component to parent and parent to child

//Lifecycle methods order of execution
// 1.constructor()//1st execute
// 2.Render() //2nd execute
// 3.componentDidMount() //3rd execute
// 2.Render() //(again) //4th execute
// 4.componentDidUpdate(prevProps, prevState) //5th execute
// 5.componentWillUnmount()//6th execute

//Component

//control vs unControl component
// control component control by the react component bu using onChange and value er get the value and chenge the input tezt value ex: useState, and uncontrol component control by DOM ex: useRef

//HOOKS
//UseState hook
// useState is a Hook that lets you add state to function components.
// EX => const [isHungry, setIsHungry] = useState(true);

//UseEffect
// The Effect Hook lets you perform side effects in function components , mostly use in apiCall
//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(() => {
//         // Update the document title using the browser API
//         document.title = `You clicked ${count} times`;
//     }, []);

//UseRef
// manupulet DOM directly, Hooking Perticuler component of HTML
// useRef returns a mutable ref object whose.current property is initialized to the passed argument(initialValue).The returned object will persist for the full lifetime of the component.
//         import { useState, useRef } from './react';
//     function App() {
//         const refElement = useRef("");
//         const [name, setName] = useState("Abhijit")
//         const inputEl = useRef("");
//         const Reset = () => {
//             setName('')
//             // `current` points to the mounted text input element
//             inputEl.current.focus();
//         };
//         return (
//             <>
//                 <input ref={inputEl} type="text" />
//                 <button onClick={Reset}>Focus the input</button>
//             </>
//         );
//     }

//     //UseMemo
//     const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
//     Returns a memoized value.increze the performance of app
//     Pass a “create” function and an array of dependencies.useMemo will only recompute the memoized value when one of the dependencies has changed.This optimization helps to avoid expensive calculations on every render.
//         import { useState, useMemo } from './react';
//     function App2() {
//         const [add, setAdd] = useState(0)
//         const [remove, setRemove] = useState(10)
//         const multiplecation = useMemo(function multiply() {
//             console.log("***********")
//             return add * 2
//         }, [add])
//         return (
//             <>
//                 <input ref={inputEl} type="text" />
//                 <button onClick={() => { setAdd(add + 1) }}>Increse</button>
//                 <button onClick={() => { setAdd(add - 1) }}>decrese</button>
//                 {multiplecation}
//             </>
//         );
//     }
// //UseCallback
// Returns a memoized callback or function.
// Pass an inline callback and an array of dependencies.useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
//         import { useState, useMemo, useCallback } from './react';
//     function ChildrenA({ Learning, count }) {
//         console.log("children component")
//     }
//     import { useState, useMemo, useCallback } from './react';
//     import ChildrenA from './ChildrenA'
//     function App3() {
//         const [add, setAdd] = useState(0)
//         const [count, setCount] = useState(0)
//         const Learning = useCallback(function someUseCallback() {
//             console.log("***********")
//         }, [count])
//         return (
//             <>
//                 <Children Learning={Learning} count={count} />
//                 <button onClick={() => { setAdd(add + 1) }}>Increse</button>
//                 {count}
//                 <button onClick={() => { setCount(add + 11) }}>decrese</button>

//             </>
//         );
//     }


// //customHook
// A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
// remove the duplicat logic from a compoment and extract the logic in custom hook is like HOC component
//     import { useState } from 'react';
//     function useCounter(initialValue = 0) {
//         const [count, setCount] useState(initialValue)
//         function Increment() {
//             setCount(count + 1)
//         }
//         function Decrement() {
//             setCount(count - 1)
//         }
//         return [count, Increment, Decrement]
//     }
//     export default useCounter
//     import React from 'react';
//     import useCounter from './useCounter'
//     function Counter1() {
//         const [count, Increment, Decrement] = useCounter(10)
//         return (
//             <View>
//                 {counter}
//                 <Button onClick={Increment}>Increment</Button>
//                 <Button onClick={Decrement}>Decrement</Button>
//             </View>
//         )
//     }
//     export default Counter1
//     import React from 'react';
//     import useCounter from './useCounter'
//     function Counter2() {
//         const [count, Increment, Decrement] = useCounter()
//         return (
//             <View>
//                 {counter}
//                 <Button onClick={Increment}>Increment</Button>
//                 <Button onClick={Decrement}>Decrement</Button>
//             </View>
//         )
//     }
//     export default Counter2
//     import React from 'react'
//     import Counter1 from './Counter1'
//     import Counter2 from './Counter2'
//     function App() {
//         return (
//             <View>
//                 <Counter1 />
//                 <Counter2 />
//             </View>
//         )
//     }
//     export default App

