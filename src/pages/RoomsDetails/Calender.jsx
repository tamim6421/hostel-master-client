import { DateRange } from 'react-date-range'


const Calender = ({ value,handleSelect }) => {
  return (
    <DateRange
      rangeColors={['#0384fc']}
      ranges={[value]}
    //   onChange={handleSelect}
    //   date={value.startDate}
      direction='vertical'
    //   showDateDisplay={false}
    //   minDate={value.startDate}
    //   maxDate={value.endDate}
    />
  )
}

export default Calender