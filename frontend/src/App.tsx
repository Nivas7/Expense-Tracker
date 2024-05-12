import './App.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from 'react';

function App() {

  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {

    async function fetchTotal() {
      const res = await fetch("/api/expenses/total-spent")
      const data = await res.json()
      setTotalSpent(data.total)
    }

    fetchTotal()
    
  }, [])

  return (
    <Card className="w-[350px] m-auto">
    <CardHeader>
      <CardTitle>Total Spent</CardTitle>
      <CardDescription>The total amount you've spent.</CardDescription>
    </CardHeader>
    <CardContent>{totalSpent}</CardContent>
    </Card>
  )
}

export default App
