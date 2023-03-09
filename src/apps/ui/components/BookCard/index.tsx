import React, { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../zustand/store';
import * as S from './styles'

type Props = {
  initialHour: string;
  finalHour: string;
  clientName: string;
  serviceName: string;
  baseMargin: number;
}


const BookCard = ({ initialHour, finalHour, clientName, serviceName, baseMargin }: Props) => {

  const sys = useStore(state => state.system)

  const [addMt, setAddMarginTop] = useState(0)
  const [bookHeight, setBookHeight] = useState(0)

  const calcMarginTop = useCallback((initialHour: string) => {
    let totalMargin = 0

    let sysHr = sys.openingHour.trim().split(':')
    let iHr = initialHour.trim().split(':')

    let [sysOpeningHr, sysOpeningMn] = [Number(sysHr[0]), Number(sysHr[1])]
    let [initialHr, initialMn] = [Number(iHr[0]), Number(iHr[1])]

    let [hrsDiff, minDiff] = [
      initialHr - sysOpeningHr,
      initialMn - sysOpeningMn
    ]

    if (hrsDiff > 0) {
      totalMargin += hrsDiff * (sys.baseScheduleLineHeight * 4)
    }
    if (minDiff > 0) {
      totalMargin += (minDiff / 15) * sys.baseScheduleLineHeight
    }

    return totalMargin
  }, [sys.baseScheduleLineHeight, sys.openingHour])

  const getBookHeight = useCallback((initialHour: string, finalHour: string) => {
    let totalHeight = 0

    let iHr = initialHour.trim().split(':')
    let fHr = finalHour.trim().split(':')

    let [initialHr, initialMn] = [Number(iHr[0]), Number(iHr[1])]
    let [finalHr, finalMn] = [Number(fHr[0]), Number(fHr[1])]

    let [hrsDiff, minDiff] = [
      finalHr - initialHr,
      finalMn - initialMn
    ]

    if (hrsDiff > 0 && !((finalMn - initialMn) < 0)) {
      totalHeight += hrsDiff * (sys.baseScheduleLineHeight * 4)
    }
    if (minDiff > 0) {
      totalHeight += (minDiff / 15) * sys.baseScheduleLineHeight
    } else if (minDiff < 0) {
      minDiff = 60 - ((minDiff) * (-1))
      totalHeight += (minDiff / 15) * sys.baseScheduleLineHeight
    }

    return totalHeight
  }, [sys.baseScheduleLineHeight])

  const getRandomColor = () => sys.scheduleColors[
    Math.ceil((Math.random() * sys.scheduleColors.length)-1)
  ]

  useEffect(() => {
    setAddMarginTop(() => calcMarginTop(initialHour))
    setBookHeight(() => getBookHeight(initialHour, finalHour))
  }, [setAddMarginTop, setBookHeight, calcMarginTop, getBookHeight, initialHour, finalHour])

  return (
    <S.Box height={bookHeight} baseMargin={baseMargin} additionalMT={addMt} bgColor={getRandomColor()}>
      <S.MainInfo inMinHeigh={bookHeight < 50}>
        {bookHeight > 50 &&
          <S.ClientName>{clientName}</S.ClientName>
        }
        <S.Service>{serviceName}</S.Service>
      </S.MainInfo>
      <S.ServiceTime>{`${initialHour} - ${finalHour}`}</S.ServiceTime>
    </S.Box>
  )

}


export default BookCard