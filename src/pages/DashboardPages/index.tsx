import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { progressStats, quizData, recentTestResults } from '../../data/data';
import { BlockList } from './styled';
import QuizCard from '../../components/QuizCard'
import ProgressCard from '../../components/ProgressCard';
import RecentResults from '../../components/RecentResults';

const DashboardPages = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid size={{xs: 12, md: 6}}>
          <QuizCard
            question={quizData.question}
            options={quizData.options}
            correctIndex={quizData.correctIndex}
          />
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <BlockList>
            { progressStats.map((stat, index) => (
              <ProgressCard
                key={index}
                title={stat.title}
                averageScore={stat.averageScore}
              />
            )) }
          </BlockList>
        </Grid>
        <Grid size={{xs: 12}}>
          <RecentResults results={recentTestResults} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardPages;