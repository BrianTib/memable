import React from 'react';
import FeatureIntro from '../components/FeatureIntro';
import LeaderBoard from '../components/LeaderBoard';
import Developers from '../components/Developers';

export default function Page() {
    return (
        <div>
            <FeatureIntro />

            <LeaderBoard />

            <Developers />
        </div>
    );
}
