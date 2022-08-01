import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useRef, useEffect} from 'react'
// abi add
import {providers, Contract} from 'ethers'
import Web3Modal from 'web3modal'
import {contractAddress, abi} from '../constants'
import {Button, CircularProgress, Typography} from "@material-ui/core"
import {useStyles} from '../components/home_styles'
import {Grid,} from "@material-ui/core"
export default function Home() {
  
  const [walletConnected, setWalletConnected] = useState(false)
  const [joinedWhitelist, setJoinedWhitelist] = useState(false)
  const [loading, setLoading] = useState(false)
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0)
  const web3ModalRef = useRef() 
  
  
  const myStyles=useStyles()




  const getProviderOrSigner = async (needSigner = false) =>{
    const provider = await web3ModalRef.current.connect();
    
    const web3Provider =  new providers.Web3Provider(provider)

    const {chainId } = await web3Provider.getNetwork()
    if (chainId !== 4){
      window.alert("chainge the network to rinkeby")
      throw new Error("change network to rinkeby")
    }
    if(needSigner){
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  }
  const connectWallet = async () =>{
   
    try{
    await getProviderOrSigner()
    setWalletConnected(true)
    getNumberOfWhitelisted()
    isAddressInWhitelist()
    }catch(e){
      console.log(e)
    }

  }
  const getNumberOfWhitelisted = async()=>{
    try{
      const provider = await getProviderOrSigner()
      const whitelistContract = new Contract(contractAddress, abi, provider)
      const numListed =await whitelistContract.numAddressesWhitelisted();
      setNumberOfWhitelisted(numListed.toNumber())
    }catch(e){
      console.log(e)
    }
  }
  const isAddressInWhitelist = async ()=>{
    try{
      const signer = await getProviderOrSigner(true)
      const whitelistContract = new Contract(contractAddress, abi, signer)
      const address = await signer.getAddress()
      const isWhitelisted = await whitelistContract.whitelistedAddresses(address)
      setJoinedWhitelist(isWhitelisted)
    }catch(e){
      console.log(e)
    }
  }
  const addAddressToWhitelist = async()=>{
    try {

      const signer = await getProviderOrSigner(true)
      const whitelistContract = new Contract(contractAddress, abi, signer)
      const tx =await whitelistContract.addAddressToWhitelist()
      setLoading(true)
      await tx.wait()
      setLoading(false)
      await getNumberOfWhitelisted()
      setJoinedWhitelist(true)
    }catch(e){
      console.log(e)
    }
  }
  const renderButton  = ()=>{
    
      if(walletConnected){
        if(!joinedWhitelist){
          if(loading){
            return <Button variant="contained" color="secondary" disabled={loading}>
              <CircularProgress />
            </Button>
          }else{
            return <Button variant="contained" color="secondary" onClick={addAddressToWhitelist}>Join Whitelist</Button>

          }
        }else{
          return <Typography variant="contained" color="secondary">You are in... Enjoy the bruh  previliges</Typography>
        }
      }
      else {
          
            return <Button variant="contained" color="primary" onClick={connectWallet}>Connect wallet</Button>
         
         
      }
  }
  useEffect(()=>{
    web3ModalRef.current = new Web3Modal({
      network: "rinkeby",
      providerOptions: {},
      disableInjectedProvider : false
    })
    connectWallet()
  }, [walletConnected])
  return (
    <div>
        <Navbar/>

        <Grid container style={{height:"92.5vh"}}>
          <Grid item md={6}>
            <div className={myStyles.profileDiv}>
              <h2>Welcome to Bruh Devs</h2>
              <p>Join the waitlist bruh, wht ya waitin for</p>
              <p><b>{numberOfWhitelisted}</b> devs are already in bruh devs</p>
              {
                !loading? 
                <div></div>:
                <h1></h1>
              }
              {renderButton()}
            </div> 
            
          </Grid>
          <Grid item md={6}>
            <img src="https://m.media-amazon.com/images/I/51mX+pZxS-L._AC_SX425_.jpg" className={`${styles.bg} ${myStyles.profileDiv}`}/>
          </Grid>
        </Grid>
        
    </div>
  )
}
