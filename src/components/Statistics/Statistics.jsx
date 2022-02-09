import css from "./statistics.module.css";
import PropTypes from "prop-types";



////////factoring//////
const StatisticsCard = ({ stats, title }) => {
    const elements = stats.map(el => {
        return (<li className={css.item} key={el.id}style={{ backgroundColor: getColor() }} >
             <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}</span>
        </li>
        )
    })
    return (<section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statlist}>
            {elements}
 </ul>
        
    </section>
        
    )
}
StatisticsCard.defaultProps = {
    stats: [],
    title:PropTypes.string.isRequired,
}
export default StatisticsCard;


function getColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }