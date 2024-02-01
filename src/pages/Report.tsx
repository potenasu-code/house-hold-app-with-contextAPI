import { Grid, Paper } from "@mui/material";
import React from "react";
import MonthSelector from "../components/MonthSelector";
import CategoryChart from "../components/CategoryChart";

import TransactionTable from "../components/TransactionTable";
import BarChart from "../components/BarChart";

const Report = () => {
  const commonPaperStyle = {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    p: 2,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* 日付選択エリア */}
        <MonthSelector />
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={commonPaperStyle}>
          {/* 円グラフ */}
          <CategoryChart />
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={commonPaperStyle}>
          {/* 棒グラフ */}
          <BarChart />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        {/* テーブル */}
        <TransactionTable />
      </Grid>
    </Grid>
  );
};

export default Report;
