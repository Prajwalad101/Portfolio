import type { NextComponentType } from 'next';

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from '../Misc/Icons.collection';

import { Icon } from '../Misc/Icon.component';

const Contact: NextComponentType = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>
      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon
          icon={<AiOutlineGithub />}
          url="https://github.com/Prajwalad101"
        />
        <Icon icon={<MdEmail />} url="mailto:prajwalad101@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
