"use client"

import s from './SocialButtons.module.css'
import Image from 'next/image'
import { FaTelegram, FaFacebook, FaWhatsapp, FaInstagram, FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
export const SocialButtons = ({ }) => {
  return (

    <div className={s.root} >
      <div className={s.cardBody}>

        <motion.div whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
          whileTap={{ scale: 0.9 }} className={s.socialButton}>
          <div className="flex flex-row gap-4 items-center">
            <FaTelegram className="w-8 h-8" />
            <div className="flex flex-col"> Telegram <p className={s.pair}>@howchange_pl</p></div>
          </div>
          <FaAngleRight className={s.angle} />
        </motion.div>


        <motion.div whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
          whileTap={{ scale: 0.9 }} className={s.socialButton}>
          <div className="flex flex-row gap-4 items-center">
            <FaWhatsapp className="w-8 h-8" />
            <div className="flex flex-col"> WhatsApp <p className={s.pair}>@howchange_pl</p></div>
          </div>
          <FaAngleRight className={s.angle} />
        </motion.div>

        <motion.div whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
          whileTap={{ scale: 0.9 }} className={s.socialButton}>
          <div className="flex flex-row gap-4 items-center">
            <FaFacebook className="w-8 h-8" />
            <div className="flex flex-col"> Messenger <p className={s.pair}>@howchange_pl</p></div>
          </div>
          <FaAngleRight className={s.angle} />
        </motion.div>

        <motion.div whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
          whileTap={{ scale: 0.9 }} className={s.socialButton}>
          <div className="flex flex-row gap-4 items-center">
            <FaInstagram className="w-8 h-8" />
            <div className="flex flex-col"> Instagram <p className={s.pair}>@howchange_pl</p></div>
          </div>
          <FaAngleRight className={s.angle} />
        </motion.div>

      </div>
    </div>
  )
}

export default SocialButtons
