import React, { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tab/Tabs';
const Examples = () => {
    const [selectedBtn, setSelectedBtn] = useState();
    const handleSelect = (selectedBtn) => {
      setSelectedBtn(selectedBtn);
   }
    return (
        <Section title={"Examples"} id='examples'>
         <Tabs 
        
         buttons={<>     
                    <TabButton onClick={()=>handleSelect("components")} isSelected={selectedBtn==="components"}>Components</TabButton>
                    <TabButton onClick={()=>handleSelect("jsx")}isSelected={selectedBtn==="jsx"}>JSX</TabButton>
                    <TabButton onClick={()=>handleSelect("props")}isSelected={selectedBtn==="props"}>Props</TabButton>
                    <TabButton onClick={()=>handleSelect("state")}isSelected={selectedBtn==="state"}>State</TabButton>
            </>}
            >
         {!selectedBtn?(<p>Please Select a topic.</p>):( 
          <div id='tab-content'>
          <h3>{EXAMPLES[selectedBtn]?.title}</h3>
          <p>{EXAMPLES[selectedBtn]?.description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedBtn]?.code}
            </code>
          </pre>
          </div>
         )} 
        </Tabs>   
        </Section>
        )
}

export default Examples