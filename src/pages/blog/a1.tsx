import React from 'react';
import { motion } from 'framer-motion';

const Article1: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12 md:px-20">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-xl relative z-10">

        {/* Header image */}
        <div className="mb-8 relative w-full h-[300px] rounded-2xl overflow-hidden">
          <img
            src="/image/1.jpg"
            alt="AI Future"
            className="object-cover w-full h-full rounded-2xl opacity-90"
          />
        </div>

        {/* Metadata */}
        <div className="text-sm text-cyan-400 uppercase tracking-wider mb-4">
          April 2025 · AI · LLMs
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          The Future of Large Language Models
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            The future of large language models (LLMs) is incredibly bright. As artificial intelligence advances,
            we’re seeing increasingly powerful systems capable of understanding, generating, and reasoning with
            human-like fluency.
          </p>

          <p>
            These models aren’t just about text anymore. With the rise of multimodal LLMs that integrate text,
            images, and audio, the possibilities for creative, technical, and scientific applications are expanding
            exponentially.
          </p>

          {/* Inline image */}
          <div className="relative w-full h-[250px] mt-6 rounded-xl overflow-hidden">
            <img
              src="/image/2.jpg"
              alt="Multimodal AI"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          <div>
            In the near future, expect LLMs to:
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Collaborate across modalities: images, text, video, and audio</li>
              <li>Act as intelligent agents in real-world systems</li>
              <li>Drive innovations in health, education, and personalized services</li>
            </ul>
          </div>

          <p>
            But with great power comes great responsibility. The ethical deployment of these systems — including
            transparency, bias mitigation, and alignment with human values — will be critical as we move forward.
          </p>
        </motion.div>
      </div>

      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none bg-gradient-to-r from-transparent via-cyan-800/10 to-transparent animate-pulse" />
    </div>
  );
};

export default Article1;
