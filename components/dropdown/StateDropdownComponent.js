import React from 'react';

export default class StateDropdownComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stateInput: ""
        }
    }

    onHandleStateChange = (input) => {
        this.setState({
            stateInput: input
        })
        console.log(`this is state input: ${this.state.stateInput}`)
    }

    render() {
        <View style={styles.pickerView}>
            <Picker
                style={styles.pickerstyles}
                selectedValue={this.state.stateInput}
                onValueChange={(
                    itemValue, itemPosition
                ) => this.setState({
                    stateInput: itemValue, choosenIndex: itemPosition
                })}
            >
                <Picker.Item label="Select a State" value="Selet a State" value="disabled" />
                <Picker.Item label="Alabama" value="Alabama" />
                <Picker.Item label="Alaska" value="Alaska" />
                <Picker.Item label="Arizona" value="Arizona" />
                <Picker.Item label="Arkansas" value="Arkansas" />
                <Picker.Item label="California" value="California" />
                <Picker.Item label="Colorado" value="Colorado" />
                <Picker.Item label="Conneticut" value="Conneticut" />
                <Picker.Item label="Delaware" value="Delaware" />
                <Picker.Item label="Florida" value="Florida" />
                <Picker.Item label="Georgia" value="Georgia" />
                <Picker.Item label="Hawaii" value="Hawaii" />
                <Picker.Item label="Idaho" value="Idaho" />
                <Picker.Item label="Illinois" value="Illinois" />
                <Picker.Item label="Indiana" value="Indiana" />
                <Picker.Item label="Iowa" value="Iowa" />
                <Picker.Item label="Kansas" value="Kansas" />
                <Picker.Item label="Kentucky" value="Kentucky" />
                <Picker.Item label="Louisiana" value="Louisiana" />
                <Picker.Item label="Maine" value="Maine" />
                <Picker.Item label="Maryland" value="Maryland" />
                <Picker.Item label="Massachusetts" value="Massachusetts" />
                <Picker.Item label="Michigan" value="Michigan" />
                <Picker.Item label="Minnesota" value="Minnesota" />
                <Picker.Item label="Mississippi" value="Mississippi" />
                <Picker.Item label="Missouri" value="Missouri" />
                <Picker.Item label="Montana" value="Montana" />
                <Picker.Item label="Nebraska" value="Nebraska" />
                <Picker.Item label="Nevada" value="Nevada" />
                <Picker.Item label="New Hampshire" value="New Hampshire" />
                <Picker.Item label="New Jersey" value="New Jersey" />
                <Picker.Item label="New Mexico" value="New Mexico" />
                <Picker.Item label="New York" value="New York" />
                <Picker.Item label="North Carolina" value="North Carolina" />
                <Picker.Item label="North Dakota" value="North Dakota" />
                <Picker.Item label="Ohio" value="Ohio" />
                <Picker.Item label="Oklahoma" value="Oklahoma" />
                <Picker.Item label="Oregon" value="Oregon" />
                <Picker.Item label="Pennsylvania" value="Pennsylvania" />
                <Picker.Item label="Rhode Island" value="Rhode Island" />
                <Picker.Item label="South Carolina" value="South Carolina" />
                <Picker.Item label="South Dakota" value="South Dakota" />
                <Picker.Item label="Tennessee" value="Tennessee" />
                <Picker.Item label="Texas" value="Texas" />
                <Picker.Item label="Utah" value="Utah" />
                <Picker.Item label="Vermont" value="Vermont" />
                <Picker.Item label="Virginia" value="Virginia" />
                <Picker.Item label="Washington" value="Washington" />
                <Picker.Item label="West Virginia" value="West Virginia" />
                <Picker.Item label="Wisconsin" value="Wisconsin" />
                <Picker.Item label="Wyoming" value="Wyoming" />
            </Picker>
        </View>
    }
}