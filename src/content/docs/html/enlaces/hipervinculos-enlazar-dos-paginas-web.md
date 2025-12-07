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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM6IIG4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhtfnf7UMfnn7UkC9iZYh784mwAV%2FV2sWcVmaZG%2FxR1AiAvOBmicsOHaH%2FK9quGOMhlHEdZi85YPfg8u%2F9BL%2B4D8CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFmNxqtJvlBOaj7ElKtwDPIJBLqcKCmK7GtZeEpeL94TwgGQbRyi4uTeGW6Eiw638hYQ5g3VjmXcSXwSxnP7Nio%2BAE0qFTf2%2FsEL0M73P14n%2BjpBRhxORNzv%2F5WBYvarD%2Bh87ZUO0uFPv%2B1CSArpzi3NWBOZcORzikD5wWGSOHz6ec7OqZi28QeG1l9Mg2exABWoDdERjKbl7n3O6LLXiuA5Mj3LbGLPttBHiOl36FtBTH8RvYfPVPG%2BRAU4YBqEIOyKTWvK6HlkWzc1j3SuXzHlLxfjWTifkdSnVoIYv2Bq%2FsRYXiJNiuf049F55nSNh1bws%2FUiXHZU1JJ%2FFB7lpH46DoBuloAzGl5OO8xdCzKJlFdsduE89%2FfbQwnpoR%2BxabvOWdjLtQC6iGzW2V4hYzqXvhuL2ktCGYef6rkdOtqNoTb7Jvw8V1gSGG0V%2BpEIXreL8pdiKMBNtpSona1ZFAaQpy9KWYyGmPpPE4uwiRO70voN3VLyq9GHM7DVRhADQlCQBu2OlN7c%2BYbTVrso0AjWjr%2BejB%2FWQXqq27fdXGbMxRrfidQ6AQypJwmyfX%2FI5Rvfc76oNrPjh7VVmVFmJjwc4NmkHNd2n3vHsr7lWiNhkGJiX7RwergHoPNRHJkTQb4eyr0G1FtVTSH8wrbrWyQY6pgH3XV6foM8LkSbqG8YVaDG9kCIUsGRHt%2FzfvZ6Nc7vCRr0O2GVySGHiulxQM1J62wEaEYihU4Octn2numWlaoYlkAdrnU4Uns5yvsS2p4lWLM37lUC3gAgaqoPMmQoeSgBEl9HZqYJVI%2FrSEQbFTa1Gfiwv8dcaVUxrp2sFwig8rsR0%2FQgUS2Jc%2F14IB7hGPZ5e5WqzyEYMXBoePvAZHNPzmag2Omhl&X-Amz-Signature=5e1f173cbd06de8cfb9dde66985d7bbb38d05b5704025795d03331b3b6bad5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

