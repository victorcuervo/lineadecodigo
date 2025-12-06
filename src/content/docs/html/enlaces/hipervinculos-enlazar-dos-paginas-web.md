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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622CFR3CG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5bOM3fmMBlcKq0qFDw4qcF4Lc9FQChlJ1A4nqS%2FKZaAiEAiq2Z5MZXLyIVJlJ5nvauBcJkanRc%2FR17GLB%2B1kpSsSIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ%2BqutUh%2BPvgkUPQlyrcA%2FYRk%2FbpUcXKmKDTw15AakkIvyjbByrWT1%2Fzo6Fr00VopHeanr6DtLl11ilNMbLcJ0gjBjwIHRTBnzPQ%2BoToSMPfAobKSLJd09jTk7tZJQnnFH3zBNksojDObal%2FDAgeQ%2BtbWyjSw9X6W8tzCznvUfkiwRayp3%2BdjDbkCgL%2B5QhDEefnNDevX2ocDo8tStxQvGiU%2Bj2mSbTHbjw%2FUBCG%2BlXEWM80Rsnq888KwceA0HqbvacVK%2F8Yhw9FvuhrNUB0Rx4i6vm6S3gawXLrMaYrtcYcxmdv%2FJwGrKSoB4vF%2FrJHoQ0lJK1pMa5lG4NRvQan2tedoGYESD7xwqGOyVAwTqCkV8SMtpCVDTKqgGzDleN6qRyUi6R%2FsmNIzAR3yXeusEoJUkNyx%2FIkeC%2Bj4ssDqxfXziJP4FuKivQB8%2BI6sVvex9rB16amThL9IThfxmfPy6Uo7nuWzblcC2McbO%2BAqhKkLG7Jj2E8BfQLrYpoQC6NPloJYQ0RaiL3soGOYvbNd9zKMNVpaEOWMWO8q5zwH%2BVLPWe1HwSFs5nmr%2BL2PgPnmIm91Sl3KIb%2BcOdwJ5Wh%2BYeDyaGsuz2r4xeiOR%2FcLIYLh6KAMAmANchVK%2BIqD713tckFdWqzxJuMILNTMJqJ0MkGOqUBIcUTmnoNwwrAAsuBs%2FMrhMrgZPP3MzIbur0IMnE280dIyRz6ZVE3%2Bq6pSasdjyybUhR8Wpvz1ubd5iNFKBCgpYXaj3VVFZ3YQKwm9gDR9pTqCARwi0kFA4DtKGrxsBNaC6Aes4TU5gZijBnMFX%2FT4qgOI125CvJmuz9Ztr2%2BitgSQukx2dXoIcRgGgXJHHqWzNbCTXusEJYPKPS3WqMEOhHm0%2B1B&X-Amz-Signature=b058f659449cb7bdea7cdfd22c6599e1443cf5e3e7eda1a73929004ff35fa384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

