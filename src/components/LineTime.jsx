import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCircle } from "react-icons/fa";

import { timelineItems } from "../data/timeline";
import { PRIMARY, BG } from "../constants/colors";

const LineTime = () => {
  return (
    <section id="timeline" className="w-full px-6 py-16">

      {/* Header */}
      <div className="mb-10">
<h2 className="text-3xl sm:text-4xl font-bold text-dark flex items-center gap-6">
          Formación y experiencia
          <span className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent hidden sm:block" />
        </h2>
      </div>

      <VerticalTimeline lineColor={PRIMARY} className="!p-0">
        {timelineItems.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.time}
            contentStyle={{
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              background: "#1f2335",
              color: "#e2e8f0",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1f2335" }}
            icon={<FaCircle color={PRIMARY} />}
            iconStyle={{
              background: BG,
              boxShadow: `0 0 0 3px ${PRIMARY}, 0 3px 0 5px ${BG}`,
            }}
          >
            <h2 className="font-bold text-dark">{item.title}</h2>
            <p className="!m-0 text-muted text-sm">{item.body}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

    </section>
  );
};

export default LineTime;
