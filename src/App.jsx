import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import { Fragment, useState } from "react";
import FeedBackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effects");

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);

  return (
    <Fragment>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && (
          <>
            <FeedBackSection />
          </>
        )}

        {tab === "effects" && <EffectSection />}
      </main>
    </Fragment>
  );
}
