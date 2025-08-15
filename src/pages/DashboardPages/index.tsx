import QuizCard from '../../components/QuizCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProgressCard from '../../components/ProgressCard';
import RecentResults from '../../components/RecentResults';

const data = [
    { title: "Математика", score: 85 },
    { title: "История", score: 65 },
    { title: "Английский язык", score: 92 },
    { title: "Физика", score: 74 },
  ];

const DashboardPages = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid size={6}>
          <QuizCard
            question="The Indian to beat the computers in mathematical wizardry is"
            options={["RAMANUJAM", "RINA PANIGRAHI", "RAJA RAMANNA", "SHAKUNTHALA DEVI"]}
            correctIndex={3}
          />
        </Grid>
        <Grid size={6}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <ProgressCard completedTests={15} averageScore={82} />
            <ProgressCard completedTests={15} averageScore={82} />
          </div>
        </Grid>
        <Grid size={16}>
          <RecentResults results={data} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardPages