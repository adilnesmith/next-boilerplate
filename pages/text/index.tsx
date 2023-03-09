import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'lib/hooks/selectors';
import {
  setVal,
  getVal
} from 'pages/reducers/text';

export function Text() {
  const dispatch = useAppDispatch()
  useAppSelector(getVal)
  const [text, setText] = useState('')
  useEffect(() => {
    dispatch(setVal(text))
  }, [text])
  return (
    <div>
      <input type="text" placeholder="text here ..."
        onChange={(e) => setText(e.target.value)} />
      <>
        <p>{text}</p>
      </>
    </div>
  );
}
