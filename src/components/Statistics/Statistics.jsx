import PropTypes from 'prop-types';
import { Title, StatList, StatItem, Label, Percentage, ContainerStatistics} from './Statistics.styled';



export const Statistics = ({ title, stats }) => {
    return (
        <ContainerStatistics>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <StatItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </StatItem>
                ))}
            </StatList>
        </ContainerStatistics>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
