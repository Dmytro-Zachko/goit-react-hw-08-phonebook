import { Bars } from "react-loader-spinner";

const LoadingSpiner = () => {
    return (<div style={{justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            position: 'fixed',
            top: 100,
            right: 130,}}>
         <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
          <span>Loading...</span>
        </div>)
}

export default LoadingSpiner