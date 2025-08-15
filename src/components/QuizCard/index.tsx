import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { ActionsRow, HiddenRadio, OptionLabel, OptionsContainer, StyledCard, Badge } from './styled';

interface QuizProps {
  question: string;
  options: string[];
  correctIndex: number;
}

const Quiz: React.FC<QuizProps> = ({ question, options, correctIndex }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isWrong = submitted && selected !== correctIndex;

  const handleSelect = (index: number) => {
    if (!submitted) {
      setSelected(index);
    }
  };

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <StyledCard>
      <Typography variant="h6">{question}</Typography>
      <OptionsContainer>
        {options.map((option, index) => {
          const isSelectedOption = selected === index;
          const isRightAnswer = submitted && index === correctIndex;
          const isSelectedWrong = isWrong && isSelectedOption;

          return (
            <OptionLabel
              key={index}
              isSelected={isSelectedOption}
              isCorrect={isRightAnswer}
              isWrong={isSelectedWrong}
            >
              <HiddenRadio
                type="radio"
                name="quiz"
                checked={isSelectedOption}
                onChange={() => handleSelect(index)}
              />
              <span>{option}</span>

              {isRightAnswer && <Badge correct>Верно</Badge>}
              {isSelectedWrong && <Badge>Неверно</Badge>}
            </OptionLabel>
          );
        })}
      </OptionsContainer>

      <ActionsRow>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={selected === null || submitted}
        >
          Отправить
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="inherit"
          onClick={handleReset}
          disabled={selected === null && !submitted}
        >
          Сбросить
        </Button>
      </ActionsRow>
    </StyledCard>
  );
};

export default Quiz;
