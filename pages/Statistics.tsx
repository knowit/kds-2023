import { Paper, Stack, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useContext, useEffect, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { BackgroundContext } from '../src/components/layout'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'
import statistics_json from '../src/constants/statistics.json'
import { knowitDigitalLolipop, knowitDigitalWhite } from '../src/styles/colors'

interface StatisticData {
  company: string
  presenter: boolean
  country: string
}

interface BarData {
  label: string
  count: number
}
const statisticsData: StatisticData[] =
  statistics_json as unknown as StatisticData[]

const Statistics: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  const getSortedArray = (data: Record<string, number>) => {
    return Object.entries(data)
      .map((entry) => ({
        label: entry[0],
        count: entry[1],
      }))
      .sort((a, b) => a.count - b.count)
  }
  const {
    allByCompany,
    allByCountry,
    speakerByCompany,
    speakerByCountry,
    participanyByCompany,
    participantByCountry,
  } = useMemo(() => {
    const allByCompanyRecord: Record<string, number> = {}
    const allByCountryRecord: Record<string, number> = {}
    const speakerByCompanyRecord: Record<string, number> = {}
    const speakerByCountryRecord: Record<string, number> = {}
    const participantByCountryRecord: Record<string, number> = {}
    const participantByCompanyRecord: Record<string, number> = {}

    statisticsData.forEach((entry) => {
      if (entry.presenter) {
        if (entry.company in speakerByCompanyRecord) {
          speakerByCompanyRecord[entry.company] =
            speakerByCompanyRecord[entry.company] + 1
        } else {
          speakerByCompanyRecord[entry.company] = 1
        }
        if (entry.country in speakerByCountryRecord) {
          speakerByCountryRecord[entry.country] =
            speakerByCountryRecord[entry.country] + 1
        } else {
          speakerByCountryRecord[entry.country] = 1
        }
      } else {
        if (entry.company in participantByCompanyRecord) {
          participantByCompanyRecord[entry.company] =
            participantByCompanyRecord[entry.company] + 1
        } else {
          participantByCompanyRecord[entry.company] = 1
        }
        if (entry.country in participantByCountryRecord) {
          participantByCountryRecord[entry.country] =
            participantByCountryRecord[entry.country] + 1
        } else {
          participantByCountryRecord[entry.country] = 1
        }
      }

      if (entry.company in allByCompanyRecord) {
        allByCompanyRecord[entry.company] =
          allByCompanyRecord[entry.company] + 1
      } else {
        allByCompanyRecord[entry.company] = 1
      }
      if (entry.country in allByCountryRecord) {
        allByCountryRecord[entry.country] =
          allByCountryRecord[entry.country] + 1
      } else {
        allByCountryRecord[entry.country] = 1
      }
    })

    return {
      allByCompany: getSortedArray(allByCompanyRecord),
      allByCountry: getSortedArray(allByCountryRecord),
      speakerByCompany: getSortedArray(speakerByCompanyRecord),
      speakerByCountry: getSortedArray(speakerByCountryRecord),
      participanyByCompany: getSortedArray(participantByCompanyRecord),
      participantByCountry: getSortedArray(participantByCountryRecord),
    }
  }, [])
  useEffect(() => {
    setBackgroundUsed('map')
  }, [])
  return (
    <ZoomInPaper fadeInMs={400}>
      <Paper variant='glass' sx={{ minWidth: '1200px' }}>
        <Stack
          width={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
        >
          <Typography variant='h3'>All Attendees</Typography>
          <Typography variant='h5'>By Company</Typography>
          <CompanyBar data={allByCompany} />
          <Typography variant='h5'>By Country</Typography>
          <CountryBar data={allByCountry} />
          <Typography variant='h3'>Speakers</Typography>
          <Typography variant='h5'>By Company</Typography>
          <CompanyBar data={speakerByCompany} />
          <Typography variant='h5'>By Country</Typography>
          <CountryBar data={speakerByCountry} />
          <Typography variant='h3'>Participants</Typography>
          <Typography variant='h5'>By Company</Typography>
          <CompanyBar data={participanyByCompany} />
          <Typography variant='h5'>By Country</Typography>
          <CountryBar data={participantByCountry} />
        </Stack>
      </Paper>
    </ZoomInPaper>
  )
}

const CompanyBar = ({ data }: { data: BarData[] }) => {
  return (
    <BarChart
      width={800}
      height={1000}
      data={data}
      barSize={24}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 150,
      }}
      layout='vertical'
    >
      <XAxis type={'number'} tick={{ fill: knowitDigitalWhite }} />
      <YAxis
        dataKey={'label'}
        interval={0}
        type={'category'}
        tick={{ fill: knowitDigitalWhite }}
        width={275}
      />
      <Tooltip
        itemStyle={{ color: knowitDigitalWhite }}
        contentStyle={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(5px)',
          padding: '1rem',
        }}
      />
      <Bar dataKey='count' fill={knowitDigitalLolipop} />
    </BarChart>
  )
}

const CountryBar = ({ data }: { data: BarData[] }) => {
  return (
    <BarChart
      width={600}
      height={600}
      data={data}
      barSize={24}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 150,
      }}
    >
      <XAxis
        dataKey='label'
        interval={0}
        tick={{ fill: knowitDigitalWhite }}
        tickLine={false}
      />
      <YAxis interval={0} tick={{ fill: knowitDigitalWhite }} />
      <Tooltip
        itemStyle={{ color: knowitDigitalWhite }}
        contentStyle={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(5px)',
          padding: '1rem',
        }}
      />
      <Bar dataKey='count' fill={knowitDigitalLolipop} />
    </BarChart>
  )
}

export default Statistics
