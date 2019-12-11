import * as ActionTypes from './type';
export function UserName()
{
return function(dispatch)
{
dispatch({type:'UserName'});
}
}
export function password()
{
return function(dispatch)
{
dispatch({type:'password'});
}
}