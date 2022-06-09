import { CaretLeft, CaretRight } from 'phosphor-react';
import './styles.scss';

const Pagination = (props) => {
	const { onLeftClick, onRightClick, page, totalPages } = props;

	return (
		<div className="pagination">
			<button className="pagination-btn" onClick={onLeftClick}>
				<div className="icon">
					<CaretLeft size={20} />
				</div>
			</button>
			<div>
				{page} de {totalPages}
			</div>
			<button className="pagination-btn" onClick={onRightClick}>
				<div className="icon">
					<CaretRight size={20} />
				</div>
			</button>
		</div>
	);
};

export default Pagination;
