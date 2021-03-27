import tw from 'twin.macro'
import { userState } from 'atoms'
import { useRecoilValue } from 'recoil'
import Card from './Card'

export default () => {
  const user = useRecoilValue(userState)

  if (!user.show) {
    return <></>
  }

  return (
    <Card>
      <div tw="flex justify-end	">
        <div tw="text-right flex flex-col gap-1">
          <div tw="text-xl text-gray-600 mb-2 font-medium">
            {user.name}
          </div>
          <div tw="text-gray-400">{user.username}</div>
          <div tw="text-gray-400">{user.email}</div>
          <div tw="text-gray-400">{user.phone}</div>
        </div>
        <img src={user.avatar} tw="w-32 mb-5 h-32 rounded-full" />
      </div>
    </Card>
  )
}
