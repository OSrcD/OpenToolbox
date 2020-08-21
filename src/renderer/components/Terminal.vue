<template>

        
    <div id="xterm" :style="{backgroundImage: 'url(' + background + ')'} "></div>
       

</template>

<style scoped>
    #xterm{
        
        
        margin-left: 4.7px;
        height: 100%;
        width: 100%;
        background: no-repeat center;
        background-size: contain;
    }

    
    

    

</style>
  
<script>

const os = require('os');
const pty = require('node-pty');

import { Terminal } from 'xterm';

import { FitAddon } from 'xterm-addon-fit';
const { remote } = require('electron')
import background from '@/assets/background.png'
import { send } from 'process';

export default {
    name: 'Terminal',

    props: {
        terminalProperties: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },

    data(){
        return{
            xterm: null,
            ptyProcess: null,
            shell: null,
            fitAddon: null,
            background: background
        }
    },

    methods: {
        initializeTerminal: function(){
        this.shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
        this.ptyProcess = pty.spawn(this.shell,[],{
            name: 'xterm-color',
            cols: 80,
            rows: 30,
            cwd: process.env.HOME,
            env: process.env
        });
        this.ptyProcess.write('source ~/.bash_profile\r');
        const that = this;
        this.xterm = new Terminal({
            
            
            
            
            cursorBlink: true, //光标闪烁
            fontSize: 25,
            
            theme: {
                
                foreground:'white',
                background: "#0000",
               
             
            },
            allowTransparency: true
            
        });
        
        this.fitAddon = new FitAddon();
        this.xterm.loadAddon(this.fitAddon);
        this.xterm.open(document.getElementById('xterm')); 
        this.fitAddon.fit();
        this.ptyProcess.write('clear\r');
        this.xterm.onData(send => {this.ptyProcess.write(send);});
        
        this.ptyProcess.onData(recv => {this.xterm.write(recv);});

     

        window.addEventListener("resize", resizeScreen);

        function resizeScreen(){
           
            that.fitAddon.fit();
        }

        
        }
        
    },




    mounted(){
        
       this.initializeTerminal();
       remote.getCurrentWindow().setSize(858, 481)
        
       
    }



}



</script>