---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZTQZ7Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFthG6U1E76vPHDtYfOMpJqNADIXZj3r38rwITdpNLgwAiEA%2BS4XrpW8bVyZZIr932DwxaHw4LLzDAl7%2BLkk4ZusHpUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHfkGLZJtjHxo6sg2yrcAx%2BG0kKmfInOXZH5k9E7KFPU6ndoiiKyjRKuhc6Q1l0xOEecSF0YXEV21KCmbmH6AsrZOkRV3YiWlXTk%2FXvFhRWwQEEpCOuntG70tokLmTIFTUrnQJW1jh8qiy3KDmOXlcETj4FKzlCa3GKcol70YIBrWusUdWblpHBK4bn09vX9AZ2lEsvpi6kGqS5xEBqHVy3%2F7Hn1srYE8Rwg46mJYRMuPV4GX9A5xqG9H8LQQHzMQUcGuC3X4E3UZu16dbA0SyBFscxEd1Q5SBNeTyQoCEk1dgxj4joIH9XfYDfcx0jarVG%2FjAt3Df6d5kKwyjnyrvxKEpqspW9pxdUGOXKGkO6XO0qc1w0HhmSQViYRS9D6Lg5LFkYA7iDrcn8GT%2F%2F1RV3lhOlBedZ2KU6bIFccpXGTE7oOT3D5%2B65eh7yx%2FQ4pb97JZ%2F%2F5ABkMWdvAdLS0SlWF8qDVUINYtnk4jj1f%2BrA2hDVnkuK%2FiQNnlPwGuWafIHaCXh7oRA9nUxGenE6H6Yz4Pga0A81pHKZtJGB83E8FnPi80cy%2Buptw8q99q0s8KVEC%2BwmFsxIg922J5NNJGvoFTYGaTsEyfzQiwTCubR9Ljdr3hm8t6Yz2SdnuvO68puJtXbTgSN6fk%2BIFMImfz8kGOqUB9GjLiTxzgxTPwVBnPJBBKipa50pXd5qgCnlqDic8apRw50SxKe3x5zPSdVr9gR2sXMcggIn3Zc8EaEuSde6OY3JlYbIVqYcMLCqquHHksUjMHg7mjiE5Adn9nQcbTZxB9is%2FANcT%2BoagAKPfc%2FSMm2Mj7kzeYPn7puG%2FRB%2Ffy4UV5vlhD5KqGBIV9VOiqpDammWHep%2BRCUfI1c3g52YagDJuzV14&X-Amz-Signature=534d96fc982796f4b80a79dd60d25cd756e3ba8fcd4a1e8d575e553a7aa2f0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

