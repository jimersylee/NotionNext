import React from 'react'

export const Getrevue = () => {
  React.useEffect(() => {
  }, [])
  return <div>
    <div id='revue-embed' className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
      <h1>开始订阅我的关于终生学习, 生产力以及知识管理的文章. 订阅后, 您将收到我的精选文章. </h1>
      <form action='https://www.getrevue.co/profile/jimmylee/add_subscriber' method='post' id='revue-form'
            name='revue-form' target='_blank'>
        <div className='mt-1 rounded-md shadow-sm'>
          <label className='block text-sm font-medium text-gray-700 leading-5' htmlFor='member_email'>邮件地址</label>
          <input
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            placeholder='Your email address...' type='email' name='member[email]'
            id='member_email' />
        </div>
        <div className='mt-1 rounded-md shadow-sm'>
          <label className='block text-sm font-medium text-gray-700 leading-5' htmlFor='member_first_name'>姓<span
            className='optional'>(选填)</span></label>
          <input
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            placeholder='First name... (Optional)' type='text'
            name='member[first_name]' id='member_first_name' />
        </div>
        <div className='mt-1 rounded-md shadow-sm'>
          <label className='block text-sm font-medium text-gray-700 leading-5' htmlFor='member_last_name'>名 <span
            className='optional'>(可选)</span></label>
          <input
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            placeholder='Last name... (Optional)' type='text' name='member[last_name]'
            id='member_last_name' />
        </div>
        <div className='revue-form-actions'>
          <input
            className='flex justify-center my-1 w-full px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
            type='submit' value='立即免费订阅' name='member[subscribe]' id='member_submit' />
        </div>
      </form>
    </div>
  </div>
}
