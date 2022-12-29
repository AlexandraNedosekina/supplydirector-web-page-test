import { Container, MantineProvider, Title, TextInput, SimpleGrid, Button, Stack } from '@mantine/core';
import React from 'react';
import TableSotr from '../../components/table'

function Profile() {

    return (
        <MantineProvider
            theme={{
                components: {
                    Container: {
                        defaultProps: {
                            sizes: {
                                xs: 540,
                                sm: 720,
                                md: 960,
                                lg: 1140,
                                xl: 1320,
                            },
                        },
                    },
                },
            }}
        >
            <Container size="lg">
                <Title order={4} size="h1" mt="md">
                    Список сотрудников
                </Title>
                <Stack spacing={10}>
                    <SimpleGrid cols={2}>
                        <TextInput
                            placeholder="Поиск по сотрудникам"
                            sx={() => ({
                                flex: '1',
                            })}
                        />
                        <div>
                            <Button>
                                + Добавить сотрудника
                            </Button>
                        </div>
                    </SimpleGrid>
                    <div style={{ width: 600 }}>
                        <SimpleGrid cols={3}>
                            <Button>
                                Все сотрудники
                            </Button>
                            <Button disabled>
                                Администраторы
                            </Button>
                            <Button disabled>
                                Новые
                            </Button>
                        </SimpleGrid>
                    </div>
                    <div>
                        <TableSotr/>
                    </div>
                </Stack>
            </Container>
        </MantineProvider>
    );
}
export default Profile;
