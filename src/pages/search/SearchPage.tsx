import { Box, Card, Grid, ScrollArea, Text } from "@mantine/core";
import React from "react";
import { UserCard } from "./components/UserCard";
import SearchInput from "./components/SearchInput";

const SearchPage = () => {
  return (
    <Grid p={10}>
      <Grid.Col>
        <Card withBorder>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text variant="h1">Search Users</Text>
            <SearchInput />
          </Box>
        </Card>
      </Grid.Col>
      <Grid.Col>
        <Card withBorder>
          <ScrollArea.Autosize mah="calc(100vh - 200px)">
            <Grid p={10}>
              {Array(10)
                .fill(null)
                .map((element, index) => (
                  <Grid.Col span={4}>
                    <UserCard />
                  </Grid.Col>
                ))}
            </Grid>
          </ScrollArea.Autosize>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default SearchPage;
