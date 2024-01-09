const { useRouter } = require("next/router")

const router = useRouter()

const handleRouteChange = () => {

}
const handleRouteChangeComplete = () => {
  
}

router.events.on("routeChangeStart", handleRouteChange)
router.events.on("routeChangeComplete", handleRouteChangeComplete)
