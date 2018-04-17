import React, { Component } from 'react'
import {View,Text,Image as ImageDefault} from 'react-native'

import { createImageProgress } from 'react-native-image-progress'
import FastImage from 'react-native-fast-image'
import * as Progress from 'react-native-progress';
const Image = createImageProgress(FastImage)
const ImageProgress = createImageProgress(ImageDefault)

export default class ImageCache extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        if( this.props.uri.indexOf('api') == -1 ) {
            if( this.props.bar ) {
                return (
                    <Image
                        indicator={()=><Progress.CircleSnail color={['red', 'green', 'blue']} />}
                        source={{uri: this.props.uri,cache: 'force-cache'}}
                        style={[this.props.style,{}]}
                        {...this.props}
                    />
                )
            }else{
                return (
                    <Image
                        source={{uri: this.props.uri,cache: 'force-cache'}}
                        style={[this.props.style,{}]}
                        {...this.props}
                    />
                )
            }
        }
        else
        {
            if( this.props.bar ) {
                return (
                    <ImageProgress
                        indicator={()=><Progress.CircleSnail color={['red', 'green', 'blue']} />}
                        source={{uri: this.props.uri,cache: 'force-cache'}}
                        style={[this.props.style,{}]}
                        {...this.props}
                    />
                )
            }else{
                return (
                    <ImageProgress
                        source={{uri: this.props.uri,cache: 'force-cache'}}
                        style={[this.props.style,{}]}
                        {...this.props}
                    />
                )
            }
        }
        
    }

}