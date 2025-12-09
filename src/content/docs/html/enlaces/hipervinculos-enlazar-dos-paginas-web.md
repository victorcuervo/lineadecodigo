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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVNRSEI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxGlDac8oO9yzBVrNwnOuMb1I%2BZ3WNrau%2FL6HwWWC0BAiEAr7EuMiUEChVBm31qgO6MqLopi0%2BwYRsZKIlBAT2HutwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEkT1oqegSUYwtg2CrcAzAL9sz%2BHcZ4Uwc2EGrZTVUOTUar62OMgkgbjBCDxZ%2Bg53qE07rbAqDD1CXzJT3eyhczdElsApujTO2XzqxAOegqnuHXK77lAoJ7w1mytS2QbX9%2FO2kYIELhMASWw65TdqMwTDU%2FGQQyy8VSEjIw9V3pSK8EPofMF5oknUMiWBHefRndFvX9j%2Beg7DckGRYX%2Bj9U1We0V2WzKWU3zjxnNzuukoLZXpSEATN5kGaLrHYmC%2B4IVoLbBE660ZDkO8P%2FdxeuciWcIzBcs4%2BdqVeCTuUXL9pXLOdlysYqUZdEDeOiBVH%2BG2uzA5sexZza64nEfc3fgkO0m53F6oqvEMtutBYkfrRR%2F1hvoslzQiUGHT%2FHrtLTIVieyAjnLoEwOuI30zuVgE%2F1HuJ3hoj405LUrOqZJrXxBUdi37ZT5XPD3PMxJ4BpbooPEdnZMj%2F9sbw7V125pLBv5Ge53mIIw3Dmo%2BbugdEdkmsikoRa8qhm%2B9ahqD6JGF%2B0B9vWWB79ud2KHl0hZbvZrIx4CQGChI%2BoVGM8CTJl3etUEWsxjosvB8efCQ9FflxhoV2ORgjUnlwncBxMZZc9MTf4%2FqCJoqygBkmCYJ0w392xWwsOgSfuJs4OBVjezYIzMC9gNXV0MJeu3skGOqUB8sybCQkAyFaNfPdZoZTX13LHKf0ePssC9ZDzmLa4Ar2jPmU8iLptFdRnTlpuA0HofjidpaoqLn2gsVYemvxaOTY9MXGUcSwYuDVluQlGWPomS3jnR9o0Cv0MZ2mjaZQFltWfDSj7Mmju37ea7OSy9G0vo9d0qHRYHbNMTJrvjcASGE4a6euMRNf3r7UErHg3RXlgM6TRSH6yWDwwhBsh%2FC8zbO46&X-Amz-Signature=0d9142d2ce045b03560c3ad0d020796e830d2c29267649eac845b85cba76f212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

