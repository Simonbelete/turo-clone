import React, { ReactElement } from 'react';

const TimePicker: React.FC = (): ReactElement => {
  return (
    <select
      defaultValue="600"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        console.log(e.target.value)
      }
      className="bg-white border-0 text-[16px] font-medium text[#000000] focus:outline-none font-basis-grotesque"
    >
      <option value="0">Midnight</option>
      <option value="30">12:30 AM</option>
      <option value="60">1:00 AM</option>
      <option value="90">1:30 AM</option>
      <option value="120">2:00 AM</option>
      <option value="150">2:30 AM</option>
      <option value="180">3:00 AM</option>
      <option value="210">3:30 AM</option>
      <option value="240">4:00 AM</option>
      <option value="270">4:30 AM</option>
      <option value="300">5:00 AM</option>
      <option value="330">5:30 AM</option>
      <option value="360">6:00 AM</option>
      <option value="390">6:30 AM</option>
      <option value="420">7:00 AM</option>
      <option value="450">7:30 AM</option>
      <option value="480">8:00 AM</option>
      <option value="510">8:30 AM</option>
      <option value="540">9:00 AM</option>
      <option value="570">9:30 AM</option>
      <option value="600">10:00 AM</option>
      <option value="630">10:30 AM</option>
      <option value="660">11:00 AM</option>
      <option value="690">11:30 AM</option>
      <option value="720">Noon</option>
      <option value="750">12:30 PM</option>
      <option value="780">1:00 PM</option>
      <option value="810">1:30 PM</option>
      <option value="840">2:00 PM</option>
      <option value="870">2:30 PM</option>
      <option value="900">3:00 PM</option>
      <option value="930">3:30 PM</option>
      <option value="960">4:00 PM</option>
      <option value="990">4:30 PM</option>
      <option value="1020">5:00 PM</option>
      <option value="1050">5:30 PM</option>
      <option value="1080">6:00 PM</option>
      <option value="1110">6:30 PM</option>
      <option value="1140">7:00 PM</option>
      <option value="1170">7:30 PM</option>
      <option value="1200">8:00 PM</option>
      <option value="1230">8:30 PM</option>
      <option value="1260">9:00 PM</option>
      <option value="1290">9:30 PM</option>
      <option value="1320">10:00 PM</option>
      <option value="1350">10:30 PM</option>
      <option value="1380">11:00 PM</option>
      <option value="1410">11:30 PM</option>
    </select>
  );
};

export default TimePicker;
