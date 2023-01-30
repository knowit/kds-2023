import {
  Box,
  Button,
  CircularProgress,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  Paper,
  useTheme,
} from '@mui/material'
import { DateTime } from 'luxon'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import directus from '../lib/directus'
import {
  DirectusConference,
  DirectusEvent,
  DirectusTalk,
  DirectusTalkSpeaker,
} from '../src/types'
import {
  Scheduler,
  DayView,
  Appointments,
  GroupingPanel,
  Resources,
  AppointmentTooltip,
  CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui'
import {
  GroupingState,
  Resource,
  IntegratedGrouping,
  ViewState,
} from '@devexpress/dx-react-scheduler'
import { knowitDigitalLolipop } from '../src/styles/colors'

const OverrideStart = styled(Grid)({
  '.Container-container > .MainLayout-container > div > .MainLayout-header > div > div > table > tbody > tr:last-of-type':
    {
      display: 'none',
    },
})

const Content = ({
  appointmentData,
  ...restProps
}: AppointmentTooltip.ContentProps) => {
  return (
    <Box margin={2}>
      <Grid container>
        <Grid item>
          <Typography variant='h5'>{appointmentData?.title}</Typography>
        </Grid>
        {appointmentData?.talk != undefined && (
          <>
            <Grid item xs={12}>
              <Typography variant='caption'>
                {appointmentData.talk.Tags.join(', ')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{appointmentData?.talk.Description}</Typography>
            </Grid>
            {}
            <Grid item xs={12}>
              {appointmentData?.talk.Speakers?.map(
                (speaker: DirectusTalkSpeaker, idx: number) => (
                  <Grid item key={idx} xs={12}>
                    <Typography variant='body2'>
                      {`${speaker.Speaker_SpeakerId.SpeakerName} - ${speaker.Speaker_SpeakerId.CompanyName}`}
                    </Typography>
                  </Grid>
                )
              )}
            </Grid>
          </>
        )}
        {appointmentData?.event != undefined && <></>}
      </Grid>
    </Box>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = (_: AppointmentTooltip.HeaderProps) => {
  return <></>
}

interface ScheduleItem {
  title: string
  startDate: string
  endDate: string
  roomId: number[]
  event?: DirectusEvent
  talk?: DirectusTalk
}
const Program: NextPage = () => {
  const [resource, setResource] = useState<Resource[]>([])
  const [currentDay, setCurrentDay] = useState<string>(
    DateTime.now().weekday == 6 ? '2022-02-04' : '2023-02-03'
  )
  const [schedule, setSchedule] = useState<ScheduleItem[]>([])

  const getTracks = async () => {
    const res = await directus.items('Conference').readByQuery({
      limit: 1,
      fields: [
        'Name',
        'Rooms.Name',
        'Rooms.RoomId',
        'Timeslots.Type',
        'Timeslots.StartTime',
        'Timeslots.Talk.Description',
        'Timeslots.Talk.Difficulty',
        'Timeslots.Talk.Duration',
        'Timeslots.Talk.Language',
        'Timeslots.Talk.Tags',
        'Timeslots.Talk.Title',
        'Timeslots.Talk.Type',
        'Timeslots.Event.Description',
        'Timeslots.Event.Name',
        'Timeslots.Event.Duration',
        'Timeslots.Rooms.Room_RoomId.RoomId',
        'Timeslots.Talk.Speakers.Speaker_SpeakerId.CompanyName',
        'Timeslots.Talk.Speakers.Speaker_SpeakerId.Description',
        'Timeslots.Talk.Speakers.Speaker_SpeakerId.SpeakerId',
        'Timeslots.Talk.Speakers.Speaker_SpeakerId.SpeakerName',
      ],
      filter: {
        Name: {
          _eq: 'KDS 2023',
        },
      },
    })
    //Typescript issue compatabillity with directus - workaround
    const conferenceList = (res as any).data as DirectusConference[]

    const currentConference: DirectusConference | undefined =
      conferenceList.find((conference) => conference)
    if (currentConference) {
      const roomKeys = currentConference.Rooms.filter(
        (room) => room.Name != 'TBA'
      )
        .sort((a, b) => a.Name.localeCompare(b.Name))
        .map((room) => room.RoomId)

      const resourceInstances: Resource[] = [
        {
          fieldName: 'roomId',
          title: 'Tracks',

          instances: currentConference.Rooms.filter(
            (room) => room.Name != 'TBA'
          )
            .sort((a, b) => a.Name.localeCompare(b.Name))
            .map((room, idx) => {
              return { text: room.Name, id: idx, color: 'grey' }
            }),
          allowMultiple: true,
        },
      ]
      setResource(resourceInstances)
      const scheduleData: ScheduleItem[] = currentConference.Timeslots.map(
        (timeslot) => {
          if (timeslot.Event) {
            return {
              title: timeslot.Event.Name,
              startDate: timeslot.StartTime,
              endDate: DateTime.fromISO(timeslot.StartTime)
                .plus({ minutes: timeslot.Event.Duration })
                .toISO(),
              roomId: [0],
              event: timeslot.Event,
            }
          }
          return {
            title: timeslot.Talk.Title,
            startDate: timeslot.StartTime,
            endDate: DateTime.fromISO(timeslot.StartTime)
              .plus({ minutes: timeslot.Talk.Duration })
              .toISO(),
            roomId: timeslot.Rooms.map((room) =>
              roomKeys.indexOf(room.Room_RoomId.RoomId)
            ),
            talk: timeslot.Talk,
          }
        }
      )
      setSchedule(scheduleData)
    }
  }
  useEffect(() => {
    getTracks()
  }, [])
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item>
        <Paper variant='glass'>
          <Grid item>
            <Typography variant='h4' textAlign={'center'}>
              Schedule
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Here is the first draft for the Knowit Development Summit. Please
              note that the program is not yet set in stone and subject to
              change. If you have any inquires about changing your presentation
              info, contact contact <u>johnny.bjanesoy@knowit.no</u>. For
              cancellations or other inquiries, contact <u>kds@knowit.no</u>{' '}
            </Typography>
          </Grid>
          <Grid item container justifyContent={'center'} spacing={4}>
            <Grid item onClick={() => setCurrentDay('2023-02-03')}>
              <Button variant='roundButton' sx={{ width: '9rem' }}>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color:
                      currentDay === '2023-02-03'
                        ? knowitDigitalLolipop
                        : 'inherit',
                  }}
                >
                  Friday
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ width: '9rem' }}
                onClick={() => setCurrentDay('2023-02-04')}
                variant='roundButton'
              >
                <Typography
                  sx={{
                    fontSize: '20px',
                    color:
                      currentDay === '2023-02-04'
                        ? knowitDigitalLolipop
                        : 'inherit',
                  }}
                >
                  Saturday
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <OverrideStart item container sx={{}}>
        {schedule.length > 0 && resource.length > 0 ? (
          <Scheduler data={schedule}>
            <ViewState currentDate={currentDay} />
            <GroupingState
              grouping={[{ resourceName: 'roomId' }]}
              groupOrientation={() => (isMobile ? 'Vertical' : 'Horizontal')}
            />
            <DayView
              startDayHour={currentDay == '2023-02-03' ? 10 : 8}
              endDayHour={currentDay == '2023-02-03' ? 20 : 14}
              cellDuration={10}
            />
            <Appointments />
            <Resources data={resource} mainResourceName='roomId' palette={[]} />
            <IntegratedGrouping />
            <GroupingPanel />
            <AppointmentTooltip
              contentComponent={Content}
              headerComponent={Header}
            />
            <CurrentTimeIndicator />
          </Scheduler>
        ) : (
          <Grid item container justifyContent='center'>
            <CircularProgress size='6rem' color={'secondary'} />
          </Grid>
        )}
      </OverrideStart>
    </Grid>
  )
}

export default Program
