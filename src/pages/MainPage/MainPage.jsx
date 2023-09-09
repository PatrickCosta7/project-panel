import BarraNav from "components/BarraNav";
import Container from "components/Container";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    return(
        <main>
            <BarraNav />
            <Container>
                <Outlet />
            </Container>

        </main>
    )
}