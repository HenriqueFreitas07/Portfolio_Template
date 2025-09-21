import { motion } from "motion/react";
import CountUp from './CountUp'
import { Stats as StatsType } from "../types/Stats";

const stats: StatsType[] = [
    { label: "Internship & Volunteering Hours", value: 500, suffix: "+" },
    { label: "Projects & Collaborations", value: 15, suffix: "+" },
    { label: "Scholarship Awarded", value: 1, suffix: "" },
    { label: "Workshops & Events", value: 10, suffix: "+" },
];

const Stats = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="bg-[#1414149c] border border-[var(--white-icon-tr)] border-white rounded-md p-6"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                    <h3 className="text-4xl md:text-5xl font-semibold text-[var(--sec)] shiny-sec">
                        <CountUp
                            from={0}
                            to={stat.value}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-[var(--white-icon)]">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default Stats;
