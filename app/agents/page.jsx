import Link from 'next/link'
import { Suspense } from 'react'

const agents = ['jett', 'cypher', 'astra']

const LoadAgents = () => {

    return (
        <ul>
            {agents.map(agent => {
                const capital_agent_name = agent[0].toUpperCase() + agent.slice(1);
                console.log(agent);

                return (
                    <li key={agent}>
                        <Link href={`./agents/${agent}`}>{capital_agent_name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}


export default function AgentsPage() {


    return (
        <div>
            <h1>Agents Route</h1>
            <Suspense fallback={<p>FUCK ME</p>}>
                <LoadAgents />
            </Suspense>
        </div>
    );
};