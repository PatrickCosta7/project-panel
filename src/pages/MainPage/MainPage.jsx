import BarraNav from "components/BarraNav";
import Container from "components/Container";
import MoviesProvider from "context/movies";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <main>
            <MoviesProvider>
            <BarraNav />
                <Container>
                    <Outlet />
                </Container>
            </MoviesProvider>

        </main>
    )
}