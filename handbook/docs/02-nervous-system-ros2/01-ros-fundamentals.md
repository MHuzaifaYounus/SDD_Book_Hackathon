---
sidebar_position: 1
---

# ROS 2 Fundamentals

ROS (Robot Operating System) 2 is the essential "nervous system" that enables complex robotic systems to function. It's a flexible framework for writing robot software, providing tools, libraries, and conventions that simplify the task of creating sophisticated robot applications. This chapter will introduce you to the core concepts of ROS 2, focusing on the communication mechanisms that allow different parts of your robot's software to interact.

## What is ROS 2?

ROS 2 is a set of software libraries and tools that help you build robot applications. From drivers to state-of-the-art algorithms, and with powerful developer tools, ROS has everything you need for your next robotics project.

Key features include:
*   **Distributed Architecture**: ROS 2 uses a decentralized, distributed communication model, allowing nodes to run on different machines or even different continents.
*   **Real-time Communication**: Designed for mission-critical applications, ROS 2 offers improved quality of service (QoS) settings for reliable communication.
*   **Multi-platform Support**: Runs on Linux, Windows, and macOS, making it highly versatile.

## Core ROS 2 Concepts

### 1. Nodes: The Brain Cells

A node is an executable process that performs computations. In a typical ROS 2 system, you'll have many nodes working together, each responsible for a specific task (e.g., a node to control a motor, a node to read sensor data, a node to process camera images).

### 2. Topics: The Communication Channels

Topics are the primary means of anonymous data streaming in ROS 2. Nodes publish data to topics, and other nodes subscribe to those topics to receive the data. This publish/subscribe model allows for loose coupling between components.

*   **Publishers**: Nodes that send data (messages) to a topic.
*   **Subscribers**: Nodes that receive data (messages) from a topic.

**Example**: A camera node might publish image data to an `/image` topic, and a vision processing node would subscribe to that `/image` topic to receive the frames.

### 3. Services: Request/Response Interactions

While topics are for continuous data streams, services are used for request/response interactions. A client node sends a request to a service, and a server node performs the computation and returns a response.

**Example**: A client node might request a robotic arm to move to a specific position (request), and the arm control service would execute the movement and confirm completion (response).

### 4. Actions: Long-Running Tasks with Feedback

Actions extend services by providing feedback during the execution of a long-running task. A client sends a goal to an action server, which then provides continuous feedback on the goal's progress and eventually sends a result.

**Example**: A navigation action might receive a goal to "navigate to the kitchen." The action server would provide feedback like "moving to hallway," "at kitchen door," and finally "reached kitchen" (result).

### 5. URDF: Describing Your Robot

URDF (Unified Robot Description Format) is an XML format used in ROS to describe the kinematic and dynamic properties of a robot. It defines the robot's links (rigid bodies) and joints (connections between links), as well as its visual and collision properties.

**Example**: A URDF file for a humanoid robot would define its torso, head, arms, and legs as links, and how they connect via joints, including their range of motion and physical characteristics.

## Python Agents and `rclpy`

`rclpy` is the Python client library for ROS 2. It allows you to write ROS 2 nodes, publishers, subscribers, services, and actions using Python, making it accessible for rapid prototyping and scripting.

**Basic Python Node Structure**:

```python
import rclpy
from rclpy.node import Node

class MyPublisher(Node):
    def __init__(self):
        super().__init__('my_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello, ROS 2! %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    my_publisher = MyPublisher()
    rclpy.spin(my_publisher)
    my_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

This chapter provides a foundational understanding of ROS 2. In subsequent chapters, you will apply these concepts to build and control increasingly complex robotic behaviors.
