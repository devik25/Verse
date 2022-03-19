<h1 align="center">
  <br>
  <a href="https://github.com/Devik225/Verse">
<!-- ![Screenshot (1154)](https://user-images.githubusercontent.com/67371806/159117409-6d4611f1-6cc1-4ef8-816a-07a142714360.png) -->
<!-- ![Screenshot (1153)](https://user-images.githubusercontent.com/67371806/159117410-b2626d0b-4866-43b1-a16b-c70253bc703e.png) -->
<!-- ![Screenshot (1155)](https://user-images.githubusercontent.com/67371806/159117413-d89ff060-e715-486f-9eb0-7303935665a7.png) -->
<!-- ![Logo](https://user-images.githubusercontent.com/67371806/159117462-9c681bf5-13da-41ba-9df9-95fb74ee0473.svg) -->
<!-- ![Logo_dark](https://user-images.githubusercontent.com/67371806/159117480-a42dc8f4-970f-4c24-ae29-2548ae6ae5b8.svg) -->


  <img src="https://user-images.githubusercontent.com/67371806/159117480-a42dc8f4-970f-4c24-ae29-2548ae6ae5b8.svg" align="center" alt="Verse" width="150"></a>
  <br>

</h1>

<h4 align="center">
**Verse** is a music streaming Web app where you can easily download and stream music completely free.
</h4>
 
 <p align="center">
 <img src="https://user-images.githubusercontent.com/67371806/159117410-b2626d0b-4866-43b1-a16b-c70253bc703e.png" align="center" alt="Verse" width="500">
 <img src="https://user-images.githubusercontent.com/67371806/159117409-6d4611f1-6cc1-4ef8-816a-07a142714360.png" align="center" alt="Verse" width="500">
  <img src="https://user-images.githubusercontent.com/67371806/159117413-d89ff060-e715-486f-9eb0-7303935665a7.png" align="center" alt="Verse" width="500">
  </p>
<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#project-leaders">Project Leaders</a> •
  <a href="#contributors">Contributors</a> •
  <a href="/doc/en-US/user_guide.md">User Guide</a> •
  <a href="/doc/en-US/dev_guide.md">Developer Guide</a>
</p>

## Features

- [x] [Intrusion Detection System](/doc/en-US/user_guide.md#intrusion-detection-system)
- [x] [Firewall](/doc/en-US/user_guide.md#firewall)
- [x] [Web Application Firewall](/doc/en-US/user_guide.md#web-application-firewall)
- [x] [AntiVirus](/doc/en-US/user_guide.md#antivirus)
- [x] [Malware Analysis](/doc/en-US/user_guide.md#setting-up-malware-analysis)
- [x] [Server Log Monitor](/doc/en-US/user_guide.md#server-log-monitor)
- [x] [System Log Monitor](/doc/en-US/user_guide.md#system-log-monitor)
- [x] [Local Web Deface Detection & Prevention System](/doc/en-US/user_guide.md#web-deface-detection)
- [x] [Auto Web Server Patcher](/doc/en-US/user_guide.md#auto-server-patcher)
- [x] [Insecure Headers Detection](/doc/en-US/user_guide.md#insecure-headers)
- [x] [IoT Anonymity Checker](/doc/en-US/user_guide.md#iot-anonymity-checker)
- [x] [Auto Report Generation Using OSINT](/doc/en-US/user_guide.md)
- [x] [Notifying Suspicious Activities Using Various Mediums (Twitter, Telegram, Slack, Gmail, SMS, AWS)](doc/en-US/user_guide.md#setting-up-notifiers)
- [x] [Interactive GUI For Ease Of Setting Up](/doc/en-US/user_guide.md#configuring-using-web-ui)

## Installation

![Setup Intro][Setup-help-animation]

Before installing, please make sure to install the **[pre-requisites](/doc/en-US/user_guide.md#pre-requisites)**.

To install software requirements:

For apt package manager based systems:
```shell
$ sudo bash install_dependencies_apt.sh
```
For yum package manager based systems:
```shell
$ sudo bash install_dependencies_yum.sh
```

You can install SecureTea from PyPi package manager using the following command:

`$ sudo python3 -m pip install securetea`

**or**

You can install SecureTea using the latest repository:

```shell
git clone https://github.com/OWASP/SecureTea-Project.git
cd SecureTea-Project/
sudo python3 setup.py install
```

Please make sure all dependencies are installed if anyone of the above fails.

For more detailed information, refer to the [installation guide](/doc/en-US/user_guide.md#installation).

## Quick Start

1. Start SecureTea using one or more [**integrations**](/doc/en-US/user_guide.md#usage):

    For example, running Intrusion Detection System only: `$ sudo securetea --ids`

2. Start SecureTea in [**server mode**](/doc/en-US/user_guide.md#starting-up-in-server-mode):

    `$ sudo securetea-server`

3. Start SecureTea in [**system mode**](/doc/en-US/user_guide.md#starting-up-in-system-mode):

    `$ sudo securetea-system`

4. Start SecureTea in [**IoT mode**](/doc/en-US/user_guide.md#starting-up-in-iot-mode):

    `$ sudo securetea-iot`

For more detailed information, refer to the [usage guide](https://github.com/OWASP/SecureTea-Project/blob/master/doc/en-US/user_guide.md#usage).

## Project done by Devik Kamath


Video showing quick overview
https://user-images.githubusercontent.com/67371806/159116924-012bead2-497c-4ce5-be6c-0469e6fc3b91.mp4

