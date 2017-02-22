import Mock from 'mockjs'

Mock.mock('https://api.example.com/user', {
    'name': '@name',
    'age|1-100': 100,
    'color': '@color'
})