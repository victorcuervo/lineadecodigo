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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJKKFUAS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCDGVXdIkt8iuY005huDMoT5FtKKP%2Bkphc0iqXOJGqPQIhAIybrsUXtO2vkNkX75XIUpUQ1310w5l8XN4kndm%2FY5RzKv8DCHEQABoMNjM3NDIzMTgzODA1IgyMwjW%2BTgxDt0eE%2F9Eq3AMOhRrP6ZPoQSdSiwrKwkfCm866xvJvn1Bbb%2F2nCIBaDzNGWcPaac0AzHnWOUw%2BAvtOKtjxJJeuFir3mEkbGZY3u7xO53AGh%2F%2Fw1eg4SxUUY3hVB9GKpaTPCxnYHtAekvd2c7DpUO6D8k7UvNctvAaOGNuH7tI8xfJwdFj0mZWcLuVxkEbUAJtQLSmQrfgaqrXP6C4WqvHsMJRFsK69CLFvp5GKe%2F1x6Y2SO%2FrnJljnYqomhlzihWBAtDEFplRvEItWNuv6hJZyvAvK26aRUh3%2FagQ0NLkFc3jLZGtH3k3p3R2Hc1qmMfc1rBck%2FMpMI9jRihzTo6olxJues2saHEePo1e7YfZCxZ3z5H5C8yD6Up29OlGMhBWYRlC1FOvzmUm0X10%2BxEJeBEguUcH5W%2BlXJ%2BWi9F0%2FrH59iri3v0xqbxF8cKPKPTkLAlfxKZQd05FItZA9ItgGaII3F2cHvbTOVnetVnhkOkKmVK8Ao1U7O8XDNBLZT2rI3qSEQ5%2Fh3eHYGZuebZ2AIvEHmtmEx2vyXNpnAoAbibN7S9AdDple%2BJriA61QN3GwuzP6rAb7mnDCVcE4JdzuEWyZ5ie704AVKv4SFbgl5RBuCn%2BbiPf9OKQM%2B80t7TSIWZYpmTD%2BvM%2FJBjqkAcW5%2FoN8lpq1fsFywO8rkcfdl9iCSi87lIXSKHUPat6%2B1c%2Bu11xmy%2FkjoCvS7lGyAyGi5rQD%2BJKMbXJktoVrXKRFKeYiCLqP6QVamCNyTa%2F1lOScr48wg0hnwmzQD%2BCBY9bswWtm7O8cHcP5jNw3bKeSeGoiuFMRPKVn46QFasXBpOEsw3oOKK3KgM4hVdPP%2Bl0NCdpJ8JnTRByV7Ys5DEvCoCUm&X-Amz-Signature=ccd32dfa6b7ff88355cf3fab3cdda30b52d52e3674e6b54a2377c35254c63829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

