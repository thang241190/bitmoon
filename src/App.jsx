import './App.scss'

function App() {
  return (
    <div>
      <div className='triangle-wrapper triangle-wrapper-1'>
        <div className='triangle-1'>
          <div></div>
        </div>
        <div className='triangle-2'>
          <div></div>
        </div>
      </div>
      <div className='triangle-wrapper triangle-wrapper-2'>
        <div className='triangle-1'>
          <div></div>
        </div>
        <div className='triangle-2'>
          <div></div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='logo'>
          <img src='/images/logo.png' />
        </div>
        <h2 className='text-large'>
          Sàn giao dịch Bitmoon đóng cửa để chuyển sang trang mới về blockchain
        </h2>
        <h3 className='text-small'>
          vui lòng liên hệ{' '}
          <a href='mailto:support@bitmoon.net'>support@bitmoon.net</a> <br />{' '}
          nếu có bất cứ thắc mắc gì
        </h3>
        <h3 className='text-small-2 text-small'>Try the new Bitmoon at</h3>
        <p>
          <a className='button' href='https://bitmoon.network' target='_blank'>
            https://bitmoon.network
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
