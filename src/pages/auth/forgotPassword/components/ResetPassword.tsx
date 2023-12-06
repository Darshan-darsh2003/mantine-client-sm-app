import { Box, Button, PinInput, Text } from '@mantine/core'
import React from 'react'

const ResetPassword = () => {
  return (
   <>
    <Text c="dimmed" fz="sm" ta="center">
        Enter  The code sent to Your email to Reset Password
      </Text>
   <Box my={20} style={{display:'flex',justifyContent:'center'}}>
   <PinInput size="xl" disabled={true} error={false} type="number" />
   </Box>
   <Box style={{display:'flex',justifyContent:'center'}}>
   <Button disabled variant='default'>Verify OTP</Button>
   </Box>
   </>
  )
}

export default ResetPassword