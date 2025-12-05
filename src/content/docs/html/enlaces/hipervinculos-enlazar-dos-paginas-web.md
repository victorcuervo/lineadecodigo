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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCJKD2A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMU2m7FUZ8W9bcQc%2Fmea29PdY1LEufv9dvkW5qMnybAiEA5RS3zKf0SE4e0CkU4esUz51pMTT4M3HIoyyPRWO%2BYycq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHdFmS2O0CdLpiEZYyrcA1F9fG%2F0zLjhLPBrJjOvW1rVec5pDPOyb1T%2BuscDN1N0Jkqjwm5T4ixJaWlcwoBA4AsAZWXPsO3H%2F8s0iSWqm70z9AG0eKE2ANbzCSiNY4ik8djurT4%2Bg5pylvq2QDFIRUfMxj5BCDccnIiCWuaMj7v8rCoLBX%2B1tensfQB014y71rQ%2BtxjXAXPZHe93cwbEpk%2FKvuZdYcHa%2FqsVSg5AqfIP%2B5D3LuVUqLSgpMysvnwSkWA6CKcjNURUgka8SpaNNiXIdfQIuHbKvkX7YnSL4wMu9Sj1u7m2zsC9qUTedhoJDcTWCoKE%2F58QT9G4xDeOlzIxByGvYRUIgHbnTyM%2F6%2BVGtzZfKOih8FjKxHOstbqYjMNXlSbWRtZd%2F2B87qdzy0UOk4mE%2FgF%2FNEiWr1RcIyw7u8qNH53bognXD7ywmKqQrINyyHn7T0JqXwoTWKmCTkg83uhcpqFJuKAsskARQqNkD5qdkoxf7kQHF3JUmTjUBVzE8eXSgTL8jTPu2V6KsEIF%2Fn5I67nQ7%2Bz2jwssdmkjbaoH7XqCDbpdTTpedXwNziSiOPoBwY5fn51ESUNB77ajj5iu7emAsltjZJzWGwztmlq8C%2F1xqI3aYWKHdd8KMJPsgB7OE3I8D5moMPH8y8kGOqUB5i7ubgNqkPrXeZ27ICNqcK3oDqUyKpacVmoqZ8Vdiek8oyZHtxF6Bn80pldqWHOiLfrQd6E7xmkJA40YkDvQzsqbqQdh%2FdQqBVPII1DkFMrsf5sm6C0W7sZ%2BVMwSiqP%2BgZ%2BZ3zZfZP0eKQsrNV3BJxGyzr0i7KaYiMFv7E2IW%2BjnnXfcqe2C154rDWUcGikCsz5El7PJVBzcOLGyHhy5H2FY6Gmj&X-Amz-Signature=628ad6fdfdbcb929b8873dfaec45290d9ad01b9f47813c2100ed6c178ac6ea77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

