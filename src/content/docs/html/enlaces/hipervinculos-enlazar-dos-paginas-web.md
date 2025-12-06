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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDD4UNIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGg6GPVVcLFh7vB6chg76Cs983WMtYBFtEtS13l5YnjwIgPHfGbSp7eUqX%2FdN%2FBmSct0acXSz1fe1kFznHYgfxq60q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4wcl%2F%2BgrDvwf2d5ircA%2BNSexvJSKIb%2FzBVwJMhpkVMybv%2BxfEtdVLQQfZShHjp4S%2BJipdTFVP108uT4lkxS1yZAmExUyY2a99pIReThqYRPWiIadil7C6IvRM77hNUp080PpmdrV8NogiE%2FxlbNaZ%2BBaJ5Aek%2B1lVUHqSK%2Ba6GvQE%2Be8vQnWMvCv1Dtk8UebLm%2FvRysVlIB0L7uQg9u%2FVc6NI95l1zfjmDuwjacbPT%2F0VVOSASLz4SYkkhbMUpRRD9MWlPwsDPTj5g8iiB%2BtJGDRe%2BWiyekcEFN%2F88k1VEcJm%2Bk21aXoHrwUqHkhaWQ%2FzYHY1AvUZgj5QE7SK%2BJUsQsDu9Cfr%2BtnDa9cK61nvtEH31ChweTMNRz22Vr7JvjYcRLWTlsoIHJNLxjyniZBcs91G2hjJ6bNbCtgh5OsO9Mjf5OBsq0P0cWfitArvjifQs0Apt%2BRe7VaWiIJ%2BvFBP1QU77vs1333H636fx5fIOhziy8SEbjfmblDEzlsTZOmhackCUxh%2BXBu63BFYAJZxqi0MDHpf0Q609THnd%2BY8ObYfrGNQDBaNXmtTpKb%2FaoI9EPZIHp%2FRhX1WTbaumkF4CJ6MXIwYPINtouuHyT%2B%2BPOayqqHtfFcEqSAMu%2FzjDn9JPQQ1FLhpR1fhrMKOm0MkGOqUB8y7HPMk%2BQ%2FCi2hH6mvleA%2B5VxFm6Hi1%2F7I9hBjBQUoiHjv4Kok4Rv3ANFawJ68PWgGDuKryEG6WEGYC%2FrpBcVVfJRZ%2BViwdY3WDEDz7XHVtOOGiTEu3WfY9nyThs1p5%2B4cHZpiVzJi5Q3VhuGOVvKZl%2Bi5zSOqnqutcM%2Bxu25ibHDiVsl4PW7Vu1gZG53eHtOP1iVT5KMzErogmp%2BdK8XQEA3RSv&X-Amz-Signature=c4d7a090ac4e053177535b7067dcf9dda0aed5183babb22c048fec913343b399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

