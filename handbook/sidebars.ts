import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  default: [
    {
      type: 'category',
      label: 'Chapter 1: Foundations',
      items: [
        'foundations/digital-twin-workstation',
        'foundations/physical-ai-edge-kit',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: The Nervous System (ROS 2)',
      items: ['nervous-system-ros2/ros-fundamentals'],
    },
    {
      type: 'category',
      label: 'Chapter 3: The Digital Twin (Simulation)',
      items: ['digital-twin-simulation/gazebo-and-unity'],
    },
    {
      type: 'category',
      label: 'Chapter 4: The AI-Robot Brain (Isaac)',
      items: ['ai-robot-brain-isaac/isaac-sim'],
    },
    {
      type: 'category',
      label: 'Chapter 5: Vision-Language-Action (VLA)',
      items: ['vision-language-action-vla/vla-integration'],
    },
    {
      type: 'category',
      label: 'Chapter 6: Capstone Project',
      items: ['capstone-project/autonomous-humanoid'],
    },
  ],
};

export default sidebars;
