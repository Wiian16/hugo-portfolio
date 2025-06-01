---
date: {{ .Date }}
# description: ""
# image: "" 
# imageAlt: ""
# tags: ["",]
title: "{{ replace .File.ContentBaseName `-` ` ` | title}}"
type: "post"
draft: true
---
