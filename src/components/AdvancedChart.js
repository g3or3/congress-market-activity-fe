import { AdvancedChart } from "react-tradingview-embed";

const TradingViewWidget = ({ ticker }) => {
	return (
		<AdvancedChart
			widgetProps={{ theme: "dark", symbol: ticker, range: "60M", details: true }}
		/>
	);
};

export default TradingViewWidget;
