---
title: Beszel API on HomeAssistant # Name for SEO
description: Use your beszel monitoring data inside your HomeAssistant as sensors # Description for SEO
date: '2025-06-20' # Edit date for SEO
tags: 'Tutorial, HomeAssistant'
---

Hello everyone,

I built a [HomeAssistant](https://home-assistant.io) integration for [Beszel](https://beszel.dev) (not another agent, but for monitoring) that you can use too.

Here is the GitHub-Link to my repository: [Ronjar/beszel-ha](https://github.com/Ronjar/beszel-ha).

If you miss any functionality or encounter errors, please open an issue or, for smaller features, just open a pull request.

Currently it supports:
- **Status** (Connected or Disconnected)
- **Uptime** (Minutes)
- **CPU** (Percentage)
- **RAM** (Percentage)
- **DISK usage** (Percentage)
- **Temperature** (°C)
- **Bandwidth** (MBit/s)

I will implement more sensors once I find the time to do it.


## Usage

This is just an integration, aka no additional UI elements. But just with some bar- and mushroom cards you can build some good looking layouts. Here is a example:
![Screenshot from HomeAssistant dashboard with a card showing CPU, RAM and Disk usage as bar charts](/img/blog/beszel_ha_example_card.png)


```yaml
type: custom:vertical-stack-in-card
cards:
  - type: horizontal-stack
    cards:
      - type: custom:mushroom-template-card
        primary: Evergreen
        icon: mdi:server
        secondary: ""
        icon_color: |-
          {% if states('binary_sensor.evergreen_status') | bool %}
            green
          {% else %}
            red
          {% endif %}
        fill_container: false
        multiline_secondary: false
        entity: binary_sensor.evergreen_status
      - type: custom:mushroom-template-card
        entity: sensor.evergreen_uptime
        icon: mdi:sort-clock-descending
        primary: "{{ (states('sensor.evergreen_uptime') | int / 1440) | int  }} Days"
        secondary: ""
        icon_color: blue
        card_mod:
          style: |
            ha-card {
              margin: 0 10px;
              align-items: end;
              box-shadow: none;
            }
  - type: custom:bar-card
    entities:
      - entity: sensor.evergreen_cpu
        name: CPU
        color: "#4caf50"
      - entity: sensor.evergreen_ram
        name: RAM
        color: "#2196f3"
      - entity: sensor.evergreen_disk
        name: Disk
        color: "#f44336"
    positions:
      indicator: "off"

```