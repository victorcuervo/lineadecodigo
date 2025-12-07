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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TYGHWI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnXIBR0D5MENifl9LI8j9Z80WX%2FsmSnu%2BpL5wjmYD%2FzAiEAx0Ui%2BMQ3mClwDjPk5ncCsGdA447T08gvMl3CP87R6%2B0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlhHRK9Xvglgf7pRCrcA7cpjRrom6ExW4A9M2xGw12iL9mktk%2F6HXos4gYHVhiVimZxsVP7%2FWpjOCw88Nc7sUg7UgRLo9bkVYqUibkXObTwgNtxi65IG2xlqaYOvXk8J6caUkAQSQoTDwAgiwzW8GjGow1dLl2eJsY7efpRecgY8m771XJqhd92nKRqKea1RWxjHfvS6GPUHPgseb09CG4y4Dngfvh5c%2F9B6ZS3jvetS7dwPEDw1MX64Nmg4gxcb7qC42MVjvJI%2F9p4XpOs36vZXuR4IVizGVmM5lg6cnkA38jlDxfZQYJ%2Fg%2FJ4UE40Vyg1R7kpoctNuIVAa76Sv%2BqQk7WIpS2523HL7kqqde9XqVVEBZ9otnituVwGsQXw%2BmGBuxqHvsvsTRHcbF5SJqQr%2FIbC9KE313bKwh9ejrxYXNFDIDC0IYf%2F6desKmWPCdXFpVg1JTlZ1i1VEkxoPr%2BmF2KxPyEtEbJXvUPFpkmm9rzuGiMH5LfieJADalpTo7HJIrZJdUfop57exx7XoDDhevHS%2FLiCMRVQc9AcfT9tO1e3vVMcwjoJDaQIMWbm0QRu2h5HmH%2B%2FcmFiyzaBbiPdaFix3Mh5U755ERAOJ6la8dad4wY30JjYdrixsBbWkNFdiU4wOobRd7T9MMiZ1ckGOqUBZwJ%2F3u9m0t%2BxJSeRNTUnhfrgh23zCzxQSCZTBqcIHSYEhk%2BdRKyQQt1uq%2BLcjcnnG%2BgYKlOBBZapsoyHFhKR2Iu6uPX9m8ZUZF9lumsf8kUqFSJ2aAvkeeQvEcVQmT5to6xqzBHms6QdgMTS5FzPgitcyfWWla%2FTM%2B3gYcW75t14Yi6eecd6VvM9THYU5AtMpSUwcsHLt00SqWcl3x9QaOsbcJyw&X-Amz-Signature=888d4378dd62c27a215fab2bec0ffa0f723a9b82a18f243e63a43ff0fa4f5fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

