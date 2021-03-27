import tw from 'twin.macro'
import Container from 'components/Container'
import Profile from 'components/Profile'
import UserSelect from './UserSelect'

export default () => {
  return (
    <Container>
      <div tw="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div tw="w-full">
          <Profile />
        </div>
        <div tw="w-full">
          <UserSelect />
        </div>
      </div>
    </Container>
  )
}
