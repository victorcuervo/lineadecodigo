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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UND7J4SR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T231623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFushlNesdUFR9MQqJ0fVAOeaiBBoE4NZCaZCVlDUbo2AiEA%2FsT7pkomCp7PkMOLfofeYWduM94VDpQgZ9F730qm5vIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDd4YxYNquk%2F2xp83SrcA8mcK%2F0AqVIdFQ8vWKbfgvlb8HHj%2FCKa%2BZ3EPkMmw0Si6scX%2BUL7BmWd9aZjMApTYVvOaHJGZe3Xr%2BX2hzUskBGwR2xsl16obL%2FvJ%2BsYU3LDN6Ye%2FCg2oVMa%2FRPvlpdAVrpE%2BrNb8JMefnz%2FqinacOWxsvrwO7LyCEWMLv%2FW52K4qY7faMBauFoHMjQd%2B7O7o3xxrHyH1xNFAg7bePdWEPubfQ%2BsW%2BzO28%2FpTFE2ca0uu780mvmWP3VkrnTpF8ItzZyRpPtB%2BfeS72JBbj8MQgRHXGdLSqEtQdV16y0Drpq5JOlK3qET7RYIV2atXLm56IAPy6jXVxVDkGXti7K2uvfLGR21lJBYiE0RIWQ9sqiCSdzE1%2BqlqSWKyOb8t%2Fgq3KLxRvmfl4X2ehQIxUwsHVhYLi9S6SzfG1UjFoBkYEbNevw%2BL29VQBRD42MtVlLGBoO5%2BzucLGDr7OjU2Elo1ueJhFnAMoN60XeLarN4j0iFgBsf0LGVf1M0l%2BmHh0PdZ2mgGSP3w%2B7dFeZ78CEMKzavyHaM7MQw4vYTp78%2FbiK5ZyPAmF9gJnZU3Pyi2qDOxNw5uI0tsG6kjEUmzvZv6ndnU4625pAVEDYQoszch9QhtqmMeRwHb0GTXWi0MIPE4skGOqUBKoOqQrwg7CrpunmzP0J5EK6Ee%2BaS9p6g9fgstNPmMXuCIE5zNP1Tu169f96Y2IQm3%2FMf4XNVHHKdTcuakMu9WDYMrm4K6drYwpzoU81RoI8v92A%2Fer2kNPxe27QhAaODtsZhJeuYvQ533zxids3ruPqBUHu%2BqMufgxRJXJM8nqGF1zWdMfiasUn%2B8wgb%2FpSGIx50okwreJPCODn3ZtsDyP%2Bh6vaK&X-Amz-Signature=bfa1e88a4ba6f4922ef55e7bb6951cd474d2b6b68be25729047a89b42ab5673f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

