import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    border: `1px solid ${theme.palette.grey[500]}`, // Change border color to a grey from MUI's palette
    color: theme.palette.grey[500], // Change text color to a grey from MUI's palette
    borderRadius: '10px',
    width: '30px',
    height: '30px'
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: theme.palette.primary.main, // Change background color of selected page
    color: theme.palette.common.white, // Change text color of selected page
    border: 'none',
  },
  '& .MuiPaginationItem-ellipsis': {
    border: 'none', // Remove border from ellipsis
    color: theme.palette.grey[500], // Change color of ellipsis
  },
  '& .MuiPaginationItem-previousNext': {
    border: 'none', // Remove border from previous/next buttons
    color: theme.palette.grey[500], // Change color of previous/next buttons
  }
}));

export default function Page({ count, page, handleChange }) {
  return (
    <div>
      <CustomPagination count={count} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
    </div>
  );
}
