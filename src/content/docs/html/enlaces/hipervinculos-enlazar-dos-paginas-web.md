---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSODSAEH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiuBLRG4gc9tdD2OkPS98OsUdK8vKqR5%2BAgichoyErYAiEAwMYQs37ubCHWeRcvGJP9kTW4aI3dpt0CgmEbcXuDF38qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE4HpdiVv6RLzH6LCrcA%2FqoZGYLr7ryBhQPOJ6OcqxYSmwNRonwSoHk1oma3lTfOsKJMp%2BiC3YSTfV%2FF96sNC3pC19F0mzCa4LZ0sUNSVn4qP%2BM6BwPCutoT44DbnW7u7ejRWwy4MdcJXh8x9FLBM%2BpPjnoYot010FlF1yzBPO85ZZc8ImCqEk%2FDMp8EzYhwPnBPURxrtItPvTrjMsWKq7KJYoV1p%2BQ90izoQxBBC1UKFF46elZOIbmv89%2BFdF%2BsJb%2BlVR%2Bj4PL3xhEE8rK%2FcRKKd%2FRDUOa%2FMwognJJQ4wELtKUYFKrfRLNmzxJFlofGbaZ%2FP1y74mBJtE5D05ynY3CriIQyRf8XSY6vFteI1V5D%2B5QgNfUAL2KOgXcz09jmkGjAtgM0oU3m%2FfOVJAKmyWBHFWUn6cJH%2Bl6ZkUQPtFMpZWR9nIatUUUufh5vj9R0Tm8IHDh%2Bubj3D7UDWep5PaxcxZ65P%2Fv3jz2TKAyktcbIIczcFRWZeLfOxVIqAN93YgI29%2BSzUfe%2FBWjtdffMImMKvSbBsO6ev%2F9SHm4484j4xDPSOxO68LzZl7hL%2Fz%2BSTJxtIv%2BojKP7OP0EhsnmoIWGZAQrinjFH0D%2FVTueK2hwgxA4PVLkOa4adxCU8kgqNqpdXTisZhakA%2BuMIO84ckGOqUB7G8JrbcCUmChKanmeOsoi8JAb1p33RifJMPJiRHGbbV8wOWQk0XChFPE5LJ3XANsCdFyOIJgiSdT3YOwFide4p7GMEfNQtZfYZtpFLNSWgcn%2F%2FW7Fp816jKkqeG2zDjdYaJ6Q%2FtWDhBTzYPxOJBqWmwPk412SFVzdEQ2ESm0tGsBHSrJB2N7P9QfRcqONHUk6QvjC7GgeNZccmKQlIFNhdc4bzO4&X-Amz-Signature=303e8bdee97e99796d3d7c3954c523439148f9f77889e9ecd4f03bcc5d88d841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

