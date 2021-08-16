import { AdvancedChart } from "react-tradingview-embed";
import { StockChart, StockChartContainer } from "./styles";

const TradingViewWidget = ({ ticker }) => {
	return (
		<StockChartContainer>
			<StockChart>
				<AdvancedChart
					widgetProps={{ theme: "light", symbol: ticker, range: "60M", details: true }}
				/>
			</StockChart>
		</StockChartContainer>
	);
};

export default TradingViewWidget;
