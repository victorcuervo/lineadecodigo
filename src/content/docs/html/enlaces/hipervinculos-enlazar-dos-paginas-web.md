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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJIV4QE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPvMNOsQI5oY4F0exTbJPkcgDntcavZVVrNDLPkwnVggIhAKm0rOrmu9ImiYHFYr9Zj9%2FTh4niyvp6uJu7juuiE2u8Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzziR9HQi%2BQXtKQlOkq3ANnZcY55heRTRWvdLa9jTk1UtmV%2B8%2B0x%2B1OTX7v7sT9%2ByLSqPBVzYsYvI83ffKGMlBlG%2BOVEYKoO7j2whBiASc1ZOzgX%2FWxf5kZaWCIpvBB7oWOuIsNJYAn8xgEHdLr0SAE20HWY0rj9IlXR7Kog52brVj4G7%2B9pDnjwE3KQq9kGHrtUoBDCZ8%2BNb980JeA86nYwd4%2B6%2FEDYEVaz07sI%2FSEpLhwmO5GAwqEO6CSKSwYIY8Usjwcoz591K1JHSSFId%2BrbmCijaKNtuKq4vPJLIsQAyvLesgzdMpuaRMkv0F0rdpRek58jBqZj1PJxtWDrQvjCSnv1upLM6e2FbKONtMhLNr6rk%2B2CnLtWQTVCoUEbUySDXfz5jTPJW%2B9etQp3WGZbToWCGvsuONANImuw6%2B8iSbXabnLTvjgiHOkuxeO8zQ8BywYjEn47JVrD442GP7scRLmV8pzIGun5sOh2VNZj6ImS8Fqo6O2IRSWDgIHeAgf1i8CX0s5r%2F%2FrO0E%2F1NNEGMRa5oHqJWHoQfpoHjiyv0%2BR5BcRpK8UwCd7BoGYVGaD3apOG5MfkrnrR2vHCd2%2B6C0KmtihlbzNf4mPtkVrBjJZvbRx%2BifwCexir64ONuyFC5ydK%2F9F9544dzDe48vJBjqkAXNj6vgyksnVPkF%2BC0iMXCdLYgDjbMspyMjiv8oAsNGyhQiYJRKri41qfsmvUfeHetKwSH0HEXNS86OkJN1RwMZhTnfiaGzg4TgMhyh2oA6HM2r8uctv9zc28uz0fD%2BcMa7PLKGo42kDTJJWKGPOvMhhv5XrO8KJTMibEA0agvuFSkw4V249698rJjDDrzxx5AUK2CGZ24%2FYnjePbSyNvGTno%2BEs&X-Amz-Signature=98373a7cb60f1e41ccbbf3028aac7b5c61c6b908d1de23e5b0a27e06c7b903c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

