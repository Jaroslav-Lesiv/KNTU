import React, { Component } from 'react';
import styled from 'styled-components'
import { size, color } from '../../variables'
import Grid from 'material-ui/Grid';

export const Wrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url(/images/uploads/general/cloud-iot-smbs.jpg) no-repeat;
    background-color: ${color.mainBackground};
`
export const Content = ({ children }) => (
    <Grid
        alignItems={'flex-start'}
        direction={'row'}
        justify={'justify-content'}
        md={8}
        xs={12}
        container>
        {children}
    </Grid>
)

export const SideBar = ({ children }) => (
    <Grid md={4} xs={12} container justify='space-around' direction={'column'}>
        {children}
    </Grid>
)

export const ContentWrapper = styled.div`
    overflow-y: overlay;
    overflow-x: hidden;
    padding-bottom: ${size.header.default};
    display: flex;
    padding-bottom: 0;
    height: 100%;
    justify-content: space-around;
`
export const MainWrapper = styled.div`
    width: 100%;
    max-width: 880px;
    overflow-x: hidden;
    overflow-y: overlay;
`


export const SidebarWrapper = styled.div`
    width: 100%;
    max-width: 300px;
    border: 1px solid green;
    min-height: 200px;
    max-height: 400px;
    margin-left: 15px;
`
