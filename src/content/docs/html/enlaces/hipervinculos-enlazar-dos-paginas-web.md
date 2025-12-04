---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT4L7YRN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDusI1h1mz6eLu94mC0dL06T69LidkEmnQG5f%2Bv9GEZpAIgWwxEWEswEA%2BUK2IVr0nXlB8%2FOML%2BfkxGI3c%2FWzbUWX0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE8%2BiTlpADUgXajqxyrcA9FAkj0UKw2adwZIF1lysv%2BV6rzhhkCi%2FmgCvhX4pIxHfINj4wB3Iv0akFWXnXWPLsalAnJbgUvfxRzlENzpmU%2BbjKvKeqnZ23DFKHtvse3B%2BodmeOdDDhQNVBUNEIjIvhHyTUt7mT0mCquOrL8tdRF43dMausyuLzCsGH4BeXp%2F2rBlatS06tmSwfs%2F6CPSO5Vc7gkOhnZIa%2Buw5T%2B6s7Z%2BbXwlRgMWHllAB4udRyU3XJ41j7SDciCEh78lqketJelg3E9QF65EuoFY9GkyGlXxZJ3UyamoF8m1qPZ0%2Baeg%2BhbeqqYp71va2gaU%2FwBiN1NZ%2BBZ9bIuOT6Nk4hg4dCs0%2FoU1k1KsPnCoOPP25xdjOaTI91XdKoaU9WQ0aXDvRm0YmDuMob3r8Iu3Z1akT9PLC7Mp0UsavrCkUjP7nlFy2Iq5EKPxLw3tbCunHIj6pSbBBvesMO3WXK1JrPcbmT7yNWDfqAhsgOY5ow6JsJ%2BDJs33pHGBqde0oC%2FgPtloL7d4zUig8FQHE%2FPyoLYe4p3odqEP0uMiQS2txIQmF32oaII0YYftWcuTi8ol%2FasYEBdWRMkGp%2FmrnIATJhecVxAVXsjkqACF5ieR5%2B2eY%2FaqWu4nhL88fp9DcV0AMMS%2BxskGOqUB4YssQY5PVfuOpoZOAMFtEItj347gGcJqlJ7Bx7IyLaa5WZxMs1il7ascRkYqO5Y9Ns0PR7XmR8kLrKcQeJBWL7kdgRos5d50GCVRtiyMsd55ftF9PbdHbhA9ZBr8aIkJSUAXrGKzeJc7haUGGUZRu8dg29RQaej55zrMDYHHnF%2FC0JrFgxguRIUIoQlVCx7B0jbYAdxSsQXtmNhpWiJqpUTfF4P1&X-Amz-Signature=21f2539b45cacc4b8091db6ec70e7a67ef30f0e1562f792ac8d49d3de7c5ac44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

