
import React,{Component} from 'react'
import {View} from 'react-native'
import Gallery from 'react-native-image-gallery'

export default class Gallerys extends Component{
    constructor()  {
        super()
    }
    render() {

        return (
            <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                images={[
                { source: { uri: 'https://zcqy520.com/Data/Story/20160405/1459838501.jpg' } },
                { source: { uri: 'https://zcqy520.com/Data/Story/20160405/1459836773.jpg' } },
                { source: { uri: 'https://zcqy520.com/Data/Story/20170427/1493263443.jpg' } },
                { source: { uri: 'https://zcqy520.com/Public/images/340.jpg' } }
                ]}
            />
        )
    }
}