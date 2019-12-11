import * as ActionTypes from './type';
export function FirstName()
{
return function(dispatch)
{
dispatch({type:'FirstName'});
}
}
export function LastName()
{
return function(dispatch)
{
dispatch({type:'LastName'});
}
}
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