//////////////////////--------- Basic Questions -----------/////////////////////
//latest version of react-native : 0.71 ,stable version : 
// touchableOpacity vs button
// scrollView vs flatlist
// Custom Hook
//lyfecycle methods order of execution
//pass function as props
//UseRef() Hooking Perticuler component of HTML
//UseMemo() 
// ref()

//////////////////////--------- Plugins -----------/////////////////////

// payment getway 
//1.React-Native-Stripe
//2.React-Native-Razorpay

// Authentication
//1.Api Auth
//2.React-native-google-signIn/google-signin
//3.React-native-fb sdk
//4.react-native-apple-authentication


// testing JEST or ENZYME
//Jest unit testing freamwork
//1. create a name.test.js file , import the sum() function const Sum = require ('./Sum')
2. test("test case", () => {
    expect(sum()).toBe(3)
});
3. npm install D(dependency) Jest
4. in package.json "Screpts": {
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
// Promise function test : => 
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

// Android and Ios App build process
// ANDROID
// Run project => reactnative run android 
//  bundle debug => gradlew assemble release 
//  upload in playstore => keystore generate ,keymame key_aliases ,add keystore in android app
//  bundle release => ./gradlew bundlerelease
//IOS build
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
// import Scripts vartual scroll view
// cashing in RN 
// Google all services Map,Google Login,Facebook Login IN APP INTEGRATION
// Firebase Service (social login ,CRUD operation)
// Local Storage 

//////////////////////--------- Styles -----------/////////////////////

// Flex
// display:'flex',
// flex-wrape:"wrape",
// zindex,
// position:'absolute',

//////////////////////--------- Descriptions -----------/////////////////////

// how roted screen potret to landscrep

// high resolution image optimize
//Simple component 
//pass data ch
//Lifecycle methods order of execution
// 1.constructor()//1st execute
// 2.Render() //2nd execute
// 3.componentDidMount() //3rd execute
// 2.Render() //(again) //4th execute
// 4.componentDidUpdate(prevProps, prevState) //5th execute
// 5.componentWillUnmount()//6th execute

//Component
//control vs unControl component
control component control by the react component bu using onChange and value er get the value and chenge the input tezt value ex: useState, and uncontrol component control by DOM ex: useRef
//HOOKS
//UseState
useState is a Hook that lets you add state to function components.
EX => const [isHungry, setIsHungry] = useState(true);

//UseEffect
The Effect Hook lets you perform side effects in function components , mostly use in apiCall
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    }, []);

//UseRef
manupulet DOM directly
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

    //UseMemo
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
//UseCallback
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


//customHook
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

