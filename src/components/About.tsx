import { FC } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '@/constants/data';
import Button from './ui/Button';

const About: FC = () => {
  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
              {/* Placeholder for about image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-secondary-300">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-20">
                  ABOUT US
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-large"
            >
              <div className="text-4xl font-bold text-primary-600">98%</div>
              <div className="text-sm text-neutral-600 mt-1">Client Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="badge badge-primary mb-4">About Us</span>
              <h2 className="heading-secondary mb-4">
                Creating Digital Excellence{' '}
                <span className="text-primary-600">Since 2016</span>
              </h2>
              <p className="text-body mb-4">
                We are a team of passionate designers, developers, and digital strategists
                dedicated to creating exceptional digital experiences that drive business growth.
              </p>
              <p className="text-body">
                Our commitment to pixel-perfect design, clean code, and user-centered approach
                has helped over 120 companies transform their digital presence and achieve
                their business goals.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="text-4xl font-bold text-primary-600">
                    {stat.value}+
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
