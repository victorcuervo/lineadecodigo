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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKDEMGZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3lpsXj0a9ABlO700dNCqEd1s8s8LXhdFdJmK10rf%2FlQIgZ3gRth6hE61cZT%2BTbBkd2EiwWJTjKGoAKSsuXS%2FfJh4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCOj6VPjnIsXOpvIwCrcA2pKeAWtzJaH8iEArlGURldQL5c5sdvAm%2BEV207WB61VeWLo0M%2FTe3K%2F3KL1lXsaKYCDcYU4twKF5IaDKFCrfH0R%2BxwvV%2BKPUoh1skwDkY1WWK0ePyv3lrnmxxVOhpQ9A2mycqGrafeE13KgH2rJrtn8ydX7H83wG5FsDUz7ei8%2FXiolD%2BZJGGHrBCRc0IC%2F9DCjlosN84QD8Y3hfWMMtQjZ2JslvkNfNOeWpuFMM4qpk1rBAUFP85r0lQ6S6mDBEWtbfwjbgeaMT36dS2W6VRQSAx5y%2FUoiu6KoBNTa3XSq8t72yKw4jhlxvm3H9PAJeeer44QWQpJXnbPJpK7hl%2FTotbynQ3fj8KMWk%2FLg7SELxSXWSGCqAda4vGX950DiuZBxcaJVL%2FG9Hx2Uw3EjLZlJmGkj%2FRPLN%2Fh%2FUYNV%2FUjVgEy%2BH9U%2Fw6fJGg45DUTsiFvYfKeP8nRs8gBw3at8goY%2FrEjALkzMMt2%2FcxGOf4A69dw0L48HimxvKTGLWk3WL8uugcCG00ypv%2B%2BqxhZjveiWnta4LXKxGqlI5YUYhEvknKrRC8jtWazY%2FJ0taobGa0CZjDnTzLTr0tqSY9UFYpGMYbC3WolpJG3eZq7YG9mjHtt8NNDz%2FnMTLRloMNytyckGOqUBctSFfR5W1zutcDUtf2VZjqDyRq5X4XGbc27CeVKFhBfJobkF%2BhVQryMNxAlwgAnT9EJPkFccHXJXbmZkJxMvQgJfVYeNOxWRRx4Zyj14PMysahem9ngwKKxqsZo75WqK5HzbgzhGLgX9sAV78FjSLAuayAO9ke25r5sys%2BDylzQ58gBFNftOf6M6E670iVkUIf7hifimU4xdwh2DhitCluzbW0AW&X-Amz-Signature=c638905b0df071a82a0d652cdcc0fe1a730f63982a2157c4cb8d58176ff37ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

