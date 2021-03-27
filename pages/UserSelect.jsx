import tw from 'twin.macro'
import Title from 'components/Title'
import Select from 'react-select'
import axios from 'axios'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { userState } from 'atoms'

export default () => {
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState([])

  const getUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.ir/users')
    return data
  }

  const setUser = useSetRecoilState(userState)

  const setProfileUser = profile => setUser(profile.data)

  const insertUsers = () => {
    !options.length && setLoading(true)
    options.length
      ? {}
      : getUsers().then(items => {
          setLoading(false)
          !options.length &&
            items.map(item =>
              setOptions(prev => [
                ...prev,
                { value: item.name, label: item.name, data: { ...item , show: true } },
              ]),
            )
        })
  }

  return (
    <>
      <Title>لیست کاربران</Title>
      <Select
        placeholder='کابران'
        loadingMessage={() => 'صبر کنید...'}
        onFocus={insertUsers}
        isLoading={loading}
        onChange={setProfileUser}
        tw="mt-5"
        options={options}
      />
    </>
  )
}
