import { Suspense } from "react";
import MimicLoading from "../components/mimic_loading";

import LandingPage from "../components/LandingPage/LandingPage";

import Image from "next/image";

export default function HomePage() {
    return (
        <div>
            <Suspense fallback={<p>idek</p>}>
                <LandingPage />
            </Suspense>
        </div>

    )
};