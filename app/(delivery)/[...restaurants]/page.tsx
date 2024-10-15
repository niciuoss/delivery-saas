import { MonthCard } from '../components/month-card'
import { MonthOrdersAmountCard } from '../components/month-orders-amount-card'
import { DayOrdersAmountCard } from '../components/day-orders-amount-card'
import { CanceledAmountCard } from '../components/month-canceled-orders-amount'
import { RevenueChart } from '../components/revenue-chart'
import { PopularProductsChart } from '../components/popular-products-chart'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <>
      <div className="pr-5 pl-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <CanceledAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
