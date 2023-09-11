import {
  Avatar,
  Paper,
  Grid,
  Box,
  ImageList,
  Tooltip,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Fade,
  FormGroup,
  FormControlLabel,
  Radio,
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import { deepOrange, deepPurple } from '@mui/material/colors';
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  Comment,
  ReportProblemRounded,
  Bookmark,
  BookmarkBorder,
} from '@mui/icons-material';

import axios from 'axios'

// import { posts } from '../assets/posts';




function Feed() {
  const [posts, setPosts] = React.useState<string[]>([])

  React.useEffect(() => {
    async function getPosts() {
      const {data} = await axios.get('http://127.0.0.1:8000/api/')
      setPosts(data)
    }
    getPosts()
  },[])



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(""); // Add state for the selected value


  const handleReportOpen = () => {
    setIsOpen(true);
  };

  const handleReportClose = () => {
    // alert("do you want to cancel")
    setIsOpen(false);
  };

  const handleReportSubmit = (value) => {
    // Perform your reportPost logic here
    console.log("reported as: ",value)
    handleReportClose();
  };

  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          elevation={3}
          style={{
            // padding: '1rem',
            width: '100%',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            marginBottom: '1.7rem',
            overflow: 'false',
          }}>
          {/* <CardContent > */}
          <Box
            display='flex'
            justifyContent='space-between'>
            <Box
              display='flex'
              // justifyContent="space-between"
              // marginLeft="1rem"
              // paddingTop="1rem"
            >
              <Tooltip
                title={post.user.username}
                enterDelay={300}
                leaveDelay={200}>
                <Avatar
                  alt={post.user.username}
                  src='nay'
                  sx={{ width: 56, height: 56, bgcolor: deepOrange[500] }}
                />
              </Tooltip>
              <Box
                display='flex'
                marginLeft='1rem'
                flexDirection='column'>
                <Typography variant='h6'>{post.user.username}</Typography>
                <Typography
                  variant='subtitle2'
                  color='textSecondary'>
                  {post.formatted_created_at}
                </Typography>
              </Box>
            </Box>
            <Box>
              <div>
                <IconButton
                  id='basic-button'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
                  <MoreVert />
                </IconButton>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}>
                  <MenuItem onClick={handleClose}>Share</MenuItem>
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Don't recommend</MenuItem>
                  <MenuItem onClick={handleClose}>Block user</MenuItem>
                </Menu>
              </div>
            </Box>
          </Box>
          {/* </CardContent> */}

          <CardMedia
            component='img'
            alt='img'
            image={post.postImage}
            style={{
              width: '100%',
              borderRadius: '8px',
              marginTop: '1rem',
            }}></CardMedia>
          <CardContent>
            <Typography variant='h6'>{post.content}</Typography>
          </CardContent>
          <Box
            display='flex'
            justifyContent='space-between'>
            <Box
              gap='1.3rem'
              display='flex'>
              <Box
                display='flex'
                alignItems='center'>
                <Tooltip title='like'>
                  <IconButton>
                    {post.numLikes ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Tooltip>
                <Typography
                  variant='h6'
                  color='grey.600'>
                  {post.numLikes}
                </Typography>
              </Box>
              <Box
                display='flex'
                alignItems='center'>
                <Tooltip title='add comment'>
                  <IconButton>
                    <Comment />
                  </IconButton>
                </Tooltip>
                <Typography
                  variant='h6'
                  color='grey.600'>
                  {post.numComments}
                </Typography>
              </Box>
              <Box
                display='flex'
                alignItems='center'>
                <Tooltip title='report this post'>
                  <IconButton
                  onClick={handleReportOpen}
                  >
                    <ReportProblemRounded />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* modal */}
              <Dialog
                open={isOpen}
                onClose={handleReportClose}
                maxWidth='sm'
                fullWidth
                slotProps={ {backdrop : {style:{backgroundColor : 'rgba(0, 0, 0, 0.2)'}}}}
               
                >
                <DialogTitle><Box display="flex" alignItems="center" gap='1rem'><ReportProblemRounded color="error" fontSize='large' /> <span > Report Post</span>  </Box></DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please select the reason for reporting this post:
                  </DialogContentText>
                  <RadioGroup
                  value={selectedValue} // Set the value of the RadioGroup
                  onChange={(event) => setSelectedValue(event.target.value)} // Update the selected value when a Radio is clicked
             
                  >
                    <FormControlLabel
                      value='Spam'
                      control={<Radio color='error' />}
                      label='Spam'
                    />
                    <FormControlLabel
                      value='harmful'
                      control={<Radio color='error' />}
                      label='harmful'
                    />
                    <FormControlLabel
                      value='sexualContent'
                      control={<Radio color='error' />}
                      label='Sexual Content'
                      // disabled
                    />
                    <FormControlLabel
                      value='harassment'
                      control={<Radio color='error' />}
                      label='Harassment'
                    />
                    <FormControlLabel
                      value='scam'
                      control={<Radio color='error' />}
                      label="Scam"
                    />
                    
                  </RadioGroup>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleReportClose}
                    color='primary'>
                    Close
                  </Button>
                  <Button
                    onClick={() => handleReportSubmit(selectedValue)} // Pass the selected value to handleReportSubmit
                    color='error'
                    disabled={selectedValue==""}
                    >
                    Report
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box>
              <Tooltip title='add to bookmarkd'>
                <IconButton>
                  {false ? <Bookmark /> : <BookmarkBorder />}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Typography
            variant='subtitle2'
            color='grey.600'
            sx={{
              ':hover': {
                textDecoration: 'underline',
              },
            }}>
            View all comments
          </Typography>
        </Card>
      ))}
    </>
  );
}

export default Feed;
