import React, { useState } from "react";
import { View, Text, Button, TextInputComponent } from 'react-native'

import { category_data, location_data } from './Dropdown/data';
import DropdownComponent from "./Dropdown/Dropdown";
import DTPicker from "./DateTimePicker/index";
import CouterDrop from "./Dropdown/CouterDrop";
import DateTimeDrop from "./Dropdown/DatetimeDrop";
import DropButton from "./Dropdown/DropButton";
import PostInput from "./PostTextInput";
import TextCard from "./Dropdown/TextCard";
import PostTask from "./Dropdown/PostTask";

//do it at Homepage
// postCards.map(item => {
//     return (
//         <Postcard category={item.category} />
//     )

// });

export const postCards = [];

var chosenDatetime = "";
var chosenCategory = "";
var chosenLocation = "";
var chosenCounter = "";
var chosenText = [];

export const setChosenDatetime = (date) => {
    chosenDatetime = date;
}
export const setChosenCategory = (category) => {
    chosenCategory = category;
}
export const setChosenLocation = (location) => {
    chosenLocation = location;
}

export const setChosenCounter = (counter) => {
    chosenCounter = counter;
}

export const setChosenText = (text) => {
    chosenText.push(text);
}

export const removeChosenText = (index) => {
    chosenText.splice(index, 1);
}

export const removePostcard = (id) => {
    postCards = postCards.filter(card => {
        return card.id !== id;
    });
}

const init = () => {
    chosenDatetime = "";
    chosenCategory = "";
    chosenLocation = "";
    chosenCounter = "";
    chosenText = [];
}

const DropMenuComp = () => {
    const [curId, setCurrentId] = useState(0);

    const onClick = () => {
        console.log("btn clicked! date/time:" + chosenDatetime
            + "; category: " + chosenCategory + "; lacation: " + chosenLocation + "; number:" + chosenCounter + "; text:" + chosenText);

        postCards.push({
            id: curId,
            datetime: chosenDatetime,
            category: chosenCategory,
            location: chosenLocation,
            counter: chosenCounter,
            tasks: chosenText
        });

        init();

        setCurrentId(curId + 1);

        console.log(postCards);
    }

    return (
        <View key={curId}>
            <PostTask />
            <DropdownComponent
                label_txt="Category"
                data={category_data}
                icon_name="filter"
                ph_txt="Select Category"
            />
            <DropdownComponent
                label_txt="Location"
                data={location_data}
                icon_name="md-location-outline"
                ph_txt="Pick Location"
            />
            <DTPicker />
            <CouterDrop />

            <Button onPress={onClick} title="test" />
            <DropButton onPress={onClick} />
        </View>
    )
}

export default DropMenuComp