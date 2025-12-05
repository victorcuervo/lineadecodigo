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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHLBBRJ3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJgP8JDJiUnAfmz9pSf0C%2BTNXevRlUJcrMkSVU2gJrDAiEA5ESWZFX%2FykMpky47onkWe1MQEphLsfVqul5sK%2B3ViOcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGir0a26BDktcjnCMircA01ia4YZ4UOp6VG4wsKFOGo9Txa2tznVfalXQL3V4LtRaSqqF3WybBtT9b6LppC4eeGPt7wHOpZujScciV91xBk%2BHwp1Kg5p3lKBCtDFMaeDWTaUQ%2B0RdPQ%2Bj91iC7RjlFjERogn0kEjsNJEkW5u1FJyt%2BH4RH1ZhLVviBH850ZU%2BZis3IjlKbabXaCIKz0CF0OnoyDElV%2FGAYUeobT%2BO1LSR8XxtYyZhkfdMLeRbonPEqH9Lvs4LTGp5%2F0VabnrHpw09wmhwR8%2BOMehOTx5m4nvOxkphPLhU5ZoPHECTgNRMqTQvLoH6l%2FtzKJnTPXTORK9MhrRLxT28iGhsOjIBhorT7TujPMWrE6C8zgxi%2BkAu7uZzOgVoZ8leo5hXR91c%2FZMqQ2hPpPdiwn7mniY5jI%2BEIhEwWN137rrLHauTjPywvXIB2sL5qyHV%2BXhmIbqK8h01U7%2BmNo1y6G%2FOnZxlCKjWYfc1LvoD%2Brn4e7qkMMWomdgL8vo4iWftARO7%2FeGjQUUZVRmBT0w9RQFIN4W2h1xrlWhsfu5COiNQEYuuoNuTbPbcKnmY7tT1o3kYNd3tCv5A3PF3cZo%2B1qiLr4rXxUUkkyoOxUz9BY3OPhNHGM5kg0LGh6GXok5p7raMImvyckGOqUB5I%2BkmXsV9eL8m7Ml4UzPIa88%2Buzrl6cE%2BKfP%2FT1kskQWbPCE9j5ye4CrAlaOa8oi%2BFfrw5pbkEU6c0yB%2B5jOI5Xa81yBzKC7sc18YRtdRPAFBkGmKx1pfXapIUMaJ9GwFtCReGfJWge2fTm3jhqeehyBHZj9iMQLPvzp9fT3vV%2FM%2BcH9zqlWiJNaQumpvU2NYEJ8EbsxGnYL8nqPsyyL%2B5Kvt1kR&X-Amz-Signature=9a82493255c0f54977af1b6066c233cb7eacd1f9d66f72969dfd6ef05ab2ba7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

