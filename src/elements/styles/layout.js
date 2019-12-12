export const w100 = 'width: 100%;'
export const mw100 = 'max-width: 100%;'
export const fullHeight = 'height: 100%;'

/*
Flex
*/

export const flexRow = 'flex-direction: row; justify-content: space-around;'

export const flex
  = 'display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex;'
export const flex1 = 'flex: 1;'
export const noShrink = 'flex-shrink: 0;'

export const flexShrink = 'flex-shrink: 1;'

export const flexColumn
  = '-webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column;'
export const flexWrap = '-webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap;'

export const flexCenter
  = '-webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center;'
export const flexBaseline
  = '-webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline;'
export const flexStretch
  = '-webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; align-items: stretch;'
export const flexStart
  = '-webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start;'
export const flexEnd
  = '-webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end;'

export const flexJustify
  = '-webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between;'

export const flexContentCenter = 'justify-content: center;'
export const flexContentEnd = 'justify-content: flex-end;'
export const flexContentStart = 'justify-content: flex-start;'
export const flexContentAround = 'justify-content: space-around;'
export const flexContentBetween = 'justify-content: space-between;'

export const fullFlexCenter = `
  ${flex}
  ${flexCenter}
  ${flexJustify}
  ${flexContentCenter}
  align-content: center;
`

/*
Flex Component

*/
export const flexAuto = `
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
`
export const flexGrow = 'flex-grow: 1;'
