    import {Box, Container, Heading,Flex,Card} from 'theme-ui'
    function Home() {
        return (
        
            <Container variant ='container' >
                
                
                <Heading as= 'h2' m='30px' variant='headline' >How to Get Started </Heading>
                <Card variant="primary">                      
                 
                <Flex>
                    <img src = "/register.gif"  width='150em' height='150em' style = {{  borderRadius: '99999px'}}/>
                    <Box mt='auto' mb= 'auto' ml='2em'>
                    <Heading  variant='headline'  >Step 1 </Heading>
                        <Heading  variant='subtitle'>Register Your Self</Heading>
                    </Box>
                </Flex>


                <Flex>
                    <img src = "/to-do.gif"
                     width='150em' height='150em'  width='150em' height='150em' style = {{  borderRadius: '99999px'}}/>
                    <Box padding='2em'>
                    <Heading  variant='headline'>Step 2 </Heading>
                        <Heading  variant='subtitle'>Short List </Heading>
                    </Box>
                </Flex>
                <Flex >
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0iIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMzNDk4ZGIiPjxwYXRoIGQ9Ik02NS4wMzc1LDI0LjA4YzAsMCAtMjEuOTAzMTIsMS41MDUgLTM2LjIyNzUsMTMuMDA3NWMtMC4wNjcxOSwwLjAyNjg4IC0wLjE0NzgxLDAuMDY3MTkgLTAuMjE1LDAuMTA3NWMtMi40ODU5NCwyLjI5NzgxIC00LjM1Mzc1LDUuODU4NzUgLTYuNjY1LDEwLjk2NWMtMi4zMTEyNSw1LjEwNjI1IC00Ljc1Njg3LDExLjY3NzE5IC02Ljk4NzUsMTkuMDI3NWMtNC40NDc4MSwxNC43MTQwNiAtOC4wNjI1LDMyLjc3NDA2IC04LjA2MjUsNDkuNzcyNWMtMC4wMTM0NCwwLjYwNDY5IDAuMTM0MzgsMS4xOTU5NCAwLjQzLDEuNzJjNS4wMjU2Myw4LjgyODQ0IDE0LjI3MDYzLDE0LjE2MzEzIDIyLjg5NzUsMTcuNTIyNWM4LjYyNjg4LDMuMzU5MzggMTYuNTk1MzEsNC43MDMxMyAyMC42NCw0LjgzNzVjMS4xNDIxOSwwLjA0MDMxIDIuMjMwNjMsLTAuNDgzNzUgMi45MDI1LC0xLjM5NzVsOC4zODUsLTExLjYxYzYuNzU5MDYsMS41OTkwNiAxNC42ODcxOSwyLjY4NzUgMjMuODY1LDIuNjg3NWM5LjE3NzgxLDAgMTcuMTA1OTQsLTEuMDg4NDQgMjMuODY1LC0yLjY4NzVsOC4zODUsMTEuNjFjMC42NzE4OCwwLjkxMzc1IDEuNzYwMzEsMS40Mzc4MSAyLjkwMjUsMS4zOTc1YzQuMDQ0NjksLTAuMTM0MzcgMTIuMDEzMTMsLTEuNDc4MTIgMjAuNjQsLTQuODM3NWM4LjYyNjg4LC0zLjM1OTM3IDE3Ljg3MTg4LC04LjY5NDA2IDIyLjg5NzUsLTE3LjUyMjVjMC4yOTU2MywtMC41MjQwNiAwLjQ0MzQ0LC0xLjExNTMxIDAuNDMsLTEuNzJjMCwtMTYuOTk4NDQgLTMuNjE0NjksLTM1LjA1ODQ0IC04LjA2MjUsLTQ5Ljc3MjVjLTIuMjMwNjIsLTcuMzUwMzEgLTQuNjc2MjUsLTEzLjkyMTI1IC02Ljk4NzUsLTE5LjAyNzVjLTIuMzExMjUsLTUuMTA2MjUgLTQuMTc5MDYsLTguNjY3MTkgLTYuNjY1LC0xMC45NjVjLTAuMDY3MTksLTAuMDQwMzEgLTAuMTQ3ODEsLTAuMDgwNjIgLTAuMjE1LC0wLjEwNzVjLTE0LjMyNDM3LC0xMS41MDI1IC0zNi4yMjc1LC0xMy4wMDc1IC0zNi4yMjc1LC0xMy4wMDc1Yy0wLjI1NTMxLC0wLjAyNjg3IC0wLjQ5NzE5LC0wLjAyNjg3IC0wLjc1MjUsMGMtMS4xOTU5NCwwLjE2MTI1IC0yLjIwMzc1LDAuOTQwNjMgLTIuNjg3NSwyLjA0MjVjMCwwIC0xLjE2OTA2LDIuNTY2NTYgLTEuOTM1LDYuMjM1Yy02LjcwNTMxLC0xLjA3NSAtMTIuMzQ5MDYsLTEuMzk3NSAtMTUuNTg3NSwtMS4zOTc1Yy0zLjIzODQ0LDAgLTguODgyMTksMC4zMjI1IC0xNS41ODc1LDEuMzk3NWMtMC43NjU5NCwtMy42Njg0NCAtMS45MzUsLTYuMjM1IC0xLjkzNSwtNi4yMzVjLTAuNTkxMjUsLTEuMzQzNzUgLTEuOTc1MzEsLTIuMTYzNDQgLTMuNDQsLTIuMDQyNXpNNjIuODg3NSwzMS40OTc1YzAuMjU1MzEsMC42OTg3NSAwLjQzLDEuMzU3MTkgMC42NDUsMi4xNWMtNy43NTM0NCwxLjgwMDYzIC0xNi4yNDU5NCw0Ljc0MzQ0IC0yNC4xODc1LDkuNjc1Yy0xLjI0OTY5LDAuNTI0MDYgLTIuMDY5MzcsMS43MzM0NCAtMi4xMDk2OSwzLjA5MDYzYy0wLjAyNjg4LDEuMzQzNzUgMC43MzkwNiwyLjU5MzQ0IDEuOTQ4NDQsMy4xODQ2OWMxLjIyMjgxLDAuNTc3ODEgMi42NzQwNiwwLjQwMzEyIDMuNzA4NzUsLTAuNDcwMzFjMTUuOTM2ODgsLTkuODc2NTYgMzYuMjE0MDYsLTExLjI4NzUgNDMuMTA3NSwtMTEuMjg3NWM2Ljg5MzQ0LDAgMjcuMTcwNjMsMS40MTA5NCA0My4xMDc1LDExLjI4NzVjMS4wMzQ2OSwwLjg3MzQ0IDIuNDg1OTQsMS4wNDgxMyAzLjcwODc1LDAuNDcwMzFjMS4yMDkzOCwtMC41OTEyNSAxLjk3NTMxLC0xLjg0MDk0IDEuOTQ4NDQsLTMuMTg0NjljLTAuMDQwMzEsLTEuMzU3MTkgLTAuODYsLTIuNTY2NTYgLTIuMTA5NjksLTMuMDkwNjNjLTcuOTQxNTYsLTQuOTMxNTYgLTE2LjQzNDA2LC03Ljg3NDM3IC0yNC4xODc1LC05LjY3NWMwLjIxNSwtMC43OTI4MSAwLjM4OTY5LC0xLjQ1MTI1IDAuNjQ1LC0yLjE1YzMuOTIzNzUsMC40ODM3NSAxOS4xNzUzMSwyLjUzOTY5IDI5LjU2MjUsMTAuNzVjMC42NzE4OCwwLjYxODEzIDMuMDEsNC4wNTgxMyA1LjE2LDguODE1YzIuMTUsNC43NTY4OCA0LjQwNzUsMTAuOTUxNTYgNi41NTc1LDE4LjA2YzQuMTkyNSwxMy44Njc1IDcuNTc4NzUsMzAuOTczNDQgNy43NCw0Ni42NTVjLTMuOTEwMzEsNi4zMjkwNiAtMTEuMjQ3MTksMTEuMDMyMTkgLTE4LjgxMjUsMTMuOTc1Yy02Ljg4LDIuNjc0MDYgLTEzLjMwMzEyLDMuODcgLTE2LjY2MjUsNC4xOTI1bC01LjgwNSwtNy44NDc1YzIuOTU2MjUsLTAuOTU0MDYgNS42MTY4OCwtMS45ODg3NSA3Ljk1NSwtMy4wMWM4LjY4MDYzLC0zLjgxNjI1IDEzLjMzLC03Ljg0NzUgMTMuMzMsLTcuODQ3NWMxLjQyNDM4LC0xLjI3NjU2IDEuNTQ1MzEsLTMuNDY2ODcgMC4yNjg3NSwtNC44OTEyNWMtMS4yNzY1NiwtMS40MjQzNyAtMy40NjY4NywtMS41NDUzMSAtNC44OTEyNSwtMC4yNjg3NWMwLDAgLTMuNjAxMjUsMy4yOTIxOSAtMTEuNTAyNSw2Ljc3MjVjLTIuOTAyNSwxLjI3NjU2IC02LjQyMzEyLDIuNTM5NjkgLTEwLjQyNzUsMy42NTVjLTAuOTI3MTksLTAuMTA3NSAtMS44NTQzNywwLjE2MTI1IC0yLjU4LDAuNzUyNWMtNi40MDk2OSwxLjU1ODc1IC0xNC4wMjg3NSwyLjU4IC0yMy4wMDUsMi41OGMtOS4wNDM0NCwwIC0xNi42NzU5NCwtMS4xMTUzMSAtMjMuMTEyNSwtMi42ODc1Yy0wLjcyNTYyLC0wLjQ4Mzc1IC0xLjYxMjUsLTAuNjg1MzEgLTIuNDcyNSwtMC41Mzc1Yy00LjAxNzgxLC0xLjExNTMxIC03LjUxMTU2LC0yLjQ4NTk0IC0xMC40Mjc1LC0zLjc2MjVjLTcuOTAxMjUsLTMuNDgwMzEgLTExLjUwMjUsLTYuNzcyNSAtMTEuNTAyNSwtNi43NzI1Yy0wLjc3OTM3LC0wLjcyNTYyIC0xLjg1NDM3LC0xLjAzNDY5IC0yLjkwMjUsLTAuODZjLTEuMzMwMzEsMC4yMDE1NiAtMi40MzIxOSwxLjE1NTYzIC0yLjc5NSwyLjQ1OTA2Yy0wLjM3NjI1LDEuMjkgMC4wNTM3NSwyLjY4NzUgMS4wNzUsMy41NjA5NGMwLDAgNC42NDkzOCw0LjAzMTI1IDEzLjMzLDcuODQ3NWMyLjMzODEzLDEuMDIxMjUgNC45OTg3NSwyLjA1NTk0IDcuOTU1LDMuMDFsLTUuODA1LDcuODQ3NWMtMy4zNTkzNywtMC4zMjI1IC05Ljc4MjUsLTEuNTE4NDQgLTE2LjY2MjUsLTQuMTkyNWMtNy41NjUzMSwtMi45NDI4MSAtMTQuOTAyMTksLTcuNjQ1OTQgLTE4LjgxMjUsLTEzLjk3NWMwLjE2MTI1LC0xNS42ODE1NiAzLjU0NzUsLTMyLjc4NzUgNy43NCwtNDYuNjU1YzIuMTUsLTcuMTA4NDQgNC40MDc1LC0xMy4zMDMxMiA2LjU1NzUsLTE4LjA2YzIuMTUsLTQuNzU2ODcgNC40ODgxMywtOC4xOTY4NyA1LjE2LC04LjgxNWMxMC4zODcxOSwtOC4yMTAzMSAyNS42Mzg3NSwtMTAuMjY2MjUgMjkuNTYyNSwtMTAuNzV6TTYzLjY0LDcyLjI0Yy04Ljc3NDY5LDAgLTE1LjQ4LDcuOTY4NDQgLTE1LjQ4LDE3LjJjMCw5LjIzMTU2IDYuNzA1MzEsMTcuMiAxNS40OCwxNy4yYzguNzc0NjksMCAxNS40OCwtNy45Njg0NCAxNS40OCwtMTcuMmMwLC05LjIzMTU2IC02LjcwNTMxLC0xNy4yIC0xNS40OCwtMTcuMnpNMTA4LjM2LDcyLjI0Yy04Ljc3NDY5LDAgLTE1LjQ4LDcuOTY4NDQgLTE1LjQ4LDE3LjJjMCw5LjIzMTU2IDYuNzA1MzEsMTcuMiAxNS40OCwxNy4yYzguNzc0NjksMCAxNS40OCwtNy45Njg0NCAxNS40OCwtMTcuMmMwLC05LjIzMTU2IC02LjcwNTMxLC0xNy4yIC0xNS40OCwtMTcuMnpNNjMuNjQsNzkuMTJjNC41Mjg0NCwwIDguNiw0LjM1Mzc1IDguNiwxMC4zMmMwLDUuOTY2MjUgLTQuMDcxNTYsMTAuMzIgLTguNiwxMC4zMmMtNC41Mjg0NCwwIC04LjYsLTQuMzUzNzUgLTguNiwtMTAuMzJjMCwtNS45NjYyNSA0LjA3MTU2LC0xMC4zMiA4LjYsLTEwLjMyek0xMDguMzYsNzkuMTJjNC41Mjg0NCwwIDguNiw0LjM1Mzc1IDguNiwxMC4zMmMwLDUuOTY2MjUgLTQuMDcxNTYsMTAuMzIgLTguNiwxMC4zMmMtNC41Mjg0NCwwIC04LjYsLTQuMzUzNzUgLTguNiwtMTAuMzJjMCwtNS45NjYyNSA0LjA3MTU2LC0xMC4zMiA4LjYsLTEwLjMyeiI+PC9wYXRoPjwvZz48cGF0aCBkPSIiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" width='150em' height='150em' style = {{  borderRadius: '99999px'}}/>
                    <Box padding='2em'>
                    <Heading  variant='headline'>Step 3 </Heading>
                        <Heading  variant='subtitle'>Join Our Channels</Heading>
                    </Box>
                </Flex>
                <Flex >
                    <img src = "/trophy-animation.gif" width='150em' height='150em' style = {{  borderRadius: '99999em'}}/>
                    <Box padding='2em'>
                    <Heading  variant='headline'>Step 4 </Heading>
                        <Heading  variant='subtitle'> Result</Heading>
                    </Box>
                </Flex>
                

                </Card>
            </Container>
            
        
            
        )
    }
    
    export default Home