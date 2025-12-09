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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVKK2L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDDFbkr1HS3EPy0bFpkuzDxoMB7ZfMC0nRxkv3oww5%2FAIhAOHz2t%2FLMiypvA6GS5Ld3C2GTZSi751Gm3pGrwbUJ7QMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw88hjhf2eaOkuOEc8q3ANcs1EYPNgE%2BCIxI77h9EiSwWlcbadGd6a%2FszbcgXySSd4bAPSS63WQf7roqdE8HNv%2FVOxWKurNmMnKN82nDhgquw0mWHoIbNBbD4YwLtCmXb44V1tTdwQGmoavkUpKtxD6Gel5sY6Fyh7BLahfaEKnH3iPRzPw%2FS3lizTQE0sRNEUGMHP2TLGGJFiQ19%2BW%2FQBwbA6Qnuz6e0B22VM5V%2F%2BZG%2BlY45V3pEpp3JYMCNhWOev4Jf4FwT2lEcs2961f9a7UQ1DIrC73ide5qDjmsX8c7CkKEy0ko%2FOINXgmNyv2QxeBAL6x2SChpeTuATajP62mK3xmfE9TNSaCP71EdbEUJQZEE5%2BeHNc6ICat0CApAl8xD6jDpRPQ2BisMW9pcsccVQMMk8UfSSJEVOy%2BO2EnZ8f5thcdHEQBdfMQ7m4MmV6Oa8x6ZQnnKTPg0wDpbdetObal%2Bn9CHnULj3zGcsCapwKy8tPEgJJWgVns0Ft9Uo3aHy84h8zzlFmlCNRDGXJJJbyKf6wiAnspytPQeYYdrkllPe%2FLpbpoVlqQNWOgDxdURZBB8U%2F7vNZU4N82djC6bVV1Pk6p%2F0yc81e7GYhMe3wIwWPF7pla0Y3To04CWdsVssM3MBXXow6saTCYxN%2FJBjqkAT2G3c9y2beiS5biLl%2Bof5NXGaRFpybnXaVAfNB7y34h5ap7baPNFRelCKvZADX81uM93KPGhRzanjU8OGuqfqlbLvTdS71dBzAxFYKrBQ%2FsursmAoIgo661NZs58ApJTWcGMxkWmwmLyyX7x%2FHdSHcVS3ErJHGd3y%2Bus%2F8CQIIMPZkYmk2xuAe0%2BDFJ%2FlMaxm2%2B8nStGOjlnTDUrRf4oIz7dgGL&X-Amz-Signature=1f593e7c4507b96a5eb7f53f36f3ee7a95d65feb050f8d241b952bb8480f9e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

