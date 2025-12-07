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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNADRB4E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN98fhVNjbrDhnikT%2BQyl7O0BvriovkOKp2U5riU%2FPgQIgbUb02UW5ZagjsO2GGKJsHqE0hGrzM59sdxjoq7hnVLYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPSEdSEz%2BMEkMfTTSrcAzNn0i%2F%2BsXQDluIwFSE2xqJP0a7qpJ8%2F7DaTI%2FvkeW80zUFyjDyfPbupNlgktQQYBKUzFiVpbV18rEQohkoGtRZzsHv%2BC5%2Ff6BIaG89QW%2FYc%2B0CG%2BSGNtF6hJcWmFv2L7JdongYErc0q9%2F%2Bbmfe5QLZk3zK6ERb5sJHvjmxNmTcJMxH3V2Tp5DmETi6sFsehk6LgqHrjgJQUCSEyOLzo6XEH2xqusawr01pkDgmqjuevOSSsta6bvKw6wXoRhrgXmx07H0UeFripNPqfeMLcrxjojATi%2BHQvSqYkpg2%2FovRIVWe0%2BVi6I%2Frg7Yi1pIxs9u%2BNhtZ%2Fuvw8Ajr2AXOzPkzW%2F4GieiubXKNwAUsrF8Vb5x3lpxs8e2E0nU1bSyRrunNBPtmDeNEaXsu28gr6asyhVM5UKwsB4G6yNWLU41KOpxfSfzjGY9zh8SntvLMR8TObE9NLQ%2FiwNjhjnd0NE3JhL%2BNg852sTc6TCbD0R%2BZod7HvCKome0RC0Yx%2FzLbIdHIhtZwWsUi%2FvRp1ENxBNOLlMoM5b9FBcn6pjomou0aalCHuBKbGPIxjaqDqiZnU1YHeKseDmCf53AQ5fB4Q7C9RE7L%2B9W1jflVMPJ1Z66JR4Sr1nBIRWxq%2FHfgrMNz90skGOqUBPLytIi792pZunWaCWSiNrZwFAvk%2FGdjLyh6oUALIK1GFsx1I%2FxpTOHKIEl3TQEwkqbxqfG5P8lCxgAwLAjyWdNgU%2BZUoEZFtEHiTOigcUUyf9vcu9h8%2FCPUVsOJCF9HQ4x8%2FBWvcX2pHLrT6ooy56OM5XpvLXTbGncBJvNAwjvkqSkX%2BWMiwwwBFdg9T1tza9cJH4My%2BkA4VfHEwgiK%2B%2BwqezRxN&X-Amz-Signature=ec7d8fbf42a3d1adb0cb9048818f9afaafb13cba2486f8894b8ed2bbc8c71d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

