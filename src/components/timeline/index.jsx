import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { events } from '../../data';

const zephyrEvents = events.map(event => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid #502D6A', marginTop:40 }} 
        iconStyle={{ background: '#502D6A', marginTop:40 }}
    >
        <div className='w-full md:w-full lg:w-full h-auto font-["Inconsolata"] rounded-lg shadow-lg shadow-[#deb5fb] hover:shadow-[#574069]'>
            <div className='rounded-t-lg bg-gradient-to-b from-[#9B36EA] to-[#502D6A] shadow-md shadow-gray-500'>
                <p className='text-white pl-4 py-2 sm:py-2.5 md:py-4'>{event.date}</p>
            </div>
            <div className='border-4 border-[#502D6A] rounded-b-lg pl-4'>
                <p className='text-black'>{event.name}</p>
                <p className='text-black'>{event.type}</p>
            </div>
        </div>
    </VerticalTimelineElement>
))

export default function Timeline(){
    return(
        <div className='box-border mx-10'> 
            <VerticalTimeline>
                {zephyrEvents}       
            </VerticalTimeline>
        </div>
    )
}
