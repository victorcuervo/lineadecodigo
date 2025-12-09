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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDZPABO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6xXvci7x8mLy%2BLogNnUcmJ7pNaU4RXqOs47e2XWUiYAiEA5VKAtHUCL7OAGTU7iB7927DaIIS92NIA5JOdpE3r5cEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyVF2QQQ7POxSpaFCrcA8o8dBOUrd8OMsnkGAkOQ9S69TAvbnuDsEqEK7SO7FnT8gw4y3FR2f4sKSBHc2ROfIcwPkVgMMnOT0C4k0kxPyN8W5XqWc%2BmAEss52eT3I4rxfQUAGvM1BaCIN5iOso8v3RTV0bdyFNnrkayOHCl7LLaTbmoYjby0Br5w9UFQrXCdOorKMRmUVQmZljctjDSLT%2FBBmX%2FOrvE9Hq8EuPQ6up3nsMY%2BGkwEJZaBq7gr2uMmoo36WERDq9i63xOCr9xbJ2uBFaz0bAiNZ1kdviJiWtsQN4FE6iN0HUJmflCH%2FYWmhAa5q243QDbcmptQ6d17gKh2io%2F8Hxpty5rWrKRnU8WV%2BBgMxv02Mmp%2FpGK5gnGqSCJHqv5HoxLJ3tOzjuPuPgrs0lYIshuVd0Cwbohs5jyMUX4h0l8WtXtUiA0hrv5thCXA9aZ3Iv2pouqE2pPRz4yn4trn7fk7YQvSph0AGRQk4l%2BJqK3N55I3ei%2BeRJZ4HaLmV8RE9W2a6RPR44aW3gPEa75jn99GWUozdbOUYSRsBcbnqHLjzodbYPfY8j5%2Bamxndy9WeCXdDmSd38HQfAzbqYT3Dtd%2F4GefUjgi6hF7SmtP1JNalL6Y6990U%2BW2VjOs36Prhax3CApMPKt3skGOqUBpZP%2FIlHNwkR%2FhUPiejBF1t1CNNtI%2FKlKlyRm0lw8KyY6mUYAEPLts5dxQr23mvXCDSvgGbf27R%2BIVxmUABkhVrcS2L9uUlKyQAZAk8VCE1jfKwT9PG0P%2FiVdtMJInDvjWQEny4Ofhwwmuozu6KPEUFBey75eIriSAyEBQS15cedBAGwBlYSRZTo3keqM0zzQG77Ilh76kScLp1eYlau7TtAwYWmZ&X-Amz-Signature=669eb53a3cd2777f7edf5c5b500af6907517e3d755a3cf4420ba65c2ff5f1188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

