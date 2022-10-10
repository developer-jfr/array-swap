const truncateHash = (address, startLength = 4, endLength = 4) => {
    if (!address) return ''
  
    return `${address.substring(0, startLength)}...${address.substring(address.length - endLength)}`
  }

  export default truncateHash;