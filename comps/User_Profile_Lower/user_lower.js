// import React from 'react';
// import { TabView, SceneMap } from 'react-native-tab-view';


// export default function UserLower() {

//     return (
//         <TabView />
//     );
// }

// import * as React from 'react';
// import { View, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
// );

// const SecondRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
// );

// const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
// });

// export default function UserLower() {
//     const layout = useWindowDimensions();

//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//         { key: 'first', title: 'First' },
//         { key: 'second', title: 'Second' },
//     ]);

//     return (
//         <TabView
//             navigationState={{ index, routes }}
//             renderScene={renderScene}
//             onIndexChange={setIndex}
//             initialLayout={{ width: layout.width }}
//         />
//     );
// }

import React from 'react';
import { Tab, TabBar } from '@ui-kitten/components';
import { View, Text } from 'react-native'

export default function UserLower() {

    return (
        <View>
            <Text>This dumb thing even working?</Text>
            <TabBar>
                <Tab title='USERS' />
                <Tab title='ORDERS' />
                <Tab title='TRANSACTIONS' />
            </TabBar>
        </View>
    );
};