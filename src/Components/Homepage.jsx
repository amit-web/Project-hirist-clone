import { Navbar } from './Navbar'
import { Category } from './CategoryCompo/Category'
import { PremiumJobs } from './PremiumJobsCompo/PremiumJobs'
import { DownloadApp } from './DownloadApp/DownloadApp';
import { Opportunity } from './Opportunity/Opportunity'
import { Implinks } from './Implinks/Implinks';

export function Homepage() {
    return (
        <>
            <div style={{ width: '95.4vw', padding: '0 2rem', textAlign: 'center' }}>
                <Navbar />
                <Category />
                <PremiumJobs />
                <DownloadApp />
                <Opportunity />
                <Implinks />
            </div>
        </>
    )
}