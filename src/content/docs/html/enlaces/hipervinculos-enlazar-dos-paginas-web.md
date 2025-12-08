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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJGKUSU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK6%2FAPims%2BihVi4uaqSLHspK2IEbTqV5oIY8Dmo0EFCAiEAxPFechrCT8i42D7xcG7W%2F5U1594jqmLTxAnF0riAdOEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8MU21THeIZ8FfQ7CrcA%2Bgrs1S2QNqbvEOcA5gs5BOEVAfS7dW52SDtF1GSYGM8J5L9iKTR3aAKn6CV6lY97Zxj7jw6WDyYevEte65WQYSKV5Ns%2Fko7pZPwsyheYvqT08SkJhYUMjQkNoGZRuTp0tjt5aER%2FhZfmHeOR4po7vRQyRzh131MPFt05FNNJ0Bx7Gpwd5orT95dTLXPB5%2BJaAMfswWWRoqha9WmvUH%2FXv9zRTN7242N0yUUxdHR7wY42NO3mzOwjxzH%2BRWUJ%2BxzamfdqQ0UdAcKIXW%2F79pFJZM0aHUQlgM9ENpSmPjmjPicY0f9e3Rj7MoHEY5lldyz%2FyCf88M85qoMZQMOPZoR%2BeYSXBDBIt8Z%2B%2Ft55AV0Ni8nEQBF9TDztkJZEnHMHxl16%2B0uc52mjfcdybY8JHbKFzfpvOFNX0B7ZjTbLWvcUveDntvB7FWzEWpBkUSZTOLh5rBJeY5QqVgtZw5Ne8aB6DHoNLT8oOVukLZ8%2B7mzWOtSedapoTKNXC8Ag4PDBUOls6w2PM2N%2B1UTGKExLsrbOxC2o1oGc4nLvk%2F62VjddQ%2FoZcNxkTS8Xy4O5iX%2BBIE%2FvlCa81Wj1tlHHq%2Fl%2B37PUPdURJceqZk2CTlR66wzuCQETfjQQ2dZZoKA5861MNKP28kGOqUBCOUg2SPRlAWSAEUZ3oEgB6Fc8IaHCr6IsIZ4X81iRKvcr6SMkkyroIIUs53wO4RbXo3ympXubkKUUgCYRXZDvuxavVOLMs1PA1FrgFjEXvNoYuD8%2B93uQYSEZIartCZLW1ucO2gU7uKiEOW71F%2F%2F5sh%2Bnzwz8HeTSMpYJOTD%2FsCr8g9T%2Bkv0dABQS2olrslmZCIIQg%2BKTkitB9W%2BYk9FSecxpTxI&X-Amz-Signature=ea003d5453a0a9fe34e7479c7fc35b5c01f02b95ca8caf92dfad3bed080ffd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

