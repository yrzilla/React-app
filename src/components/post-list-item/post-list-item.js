import React from 'react';

const PostListItem = () => {
  return (
    <li className='app-list d-flex justify-content-between'>
      <span className='app-list-item-label'>
        hello world
      </span>
      <div className='d-flex justify-content-center align-items-center'>
        <button type='button' className='btn-star btn-sm'>
          <i class="fa fa-star"></i>
        </button>
        <button type='button' className='btn-trash btn-sm'>
        <i class="fa fa-trash-o"></i>
        </button>
        <i class="fa fa-heart"></i>
      </div>
    </li>
  )
}

export default PostListItem;