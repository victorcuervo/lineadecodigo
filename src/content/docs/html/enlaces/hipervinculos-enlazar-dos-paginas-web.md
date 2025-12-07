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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S63GNZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7AWi1thxeC1FU856M30aqOAiWaN%2F6XKCZC5LoOP8%2BBAiEAt4OJzAhsHegPElLwPZM4NMnK%2BLHHojsL3ME24nQP5T0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2Fg9tb%2FolahTooSQSrcAwNW7wEwt5bK53sKsXf289BGeUcbAc%2FgGyHBHNGjuhGIYq9cicHNJ9R572yz5tM56y6KFhAXHxFMnaoEH75ph%2BpZ1QjtsuvnIswTgFP1iDjY3GOdzyV%2FdBL5dmBjB%2F7iNbZF4gNcWtj%2Ft%2FyfAo8L3yo6ycV5mAksQ3heWE6G%2BgTMMa3kR6CSVYVZ0VhQecD4uKOJpfFDwX10nBJD1k8Lyhj5nyKYUbxXdhha0aJcQqhSuOPD6Nb02dHalcCf3MEXY9WNdsKw7mHiDf6%2B0ZacdGo8rrPSGTrcEahAvGPEp9FrkrvXEzPYnrF%2Bk3L2FUXr9KmTejoiQBrHJK2IDAmU0uK2Q6TiVJnzuBPtwQhB35CpSPMqDJw4%2BHRd3BSeux2VZpHqaa1E92vjAwewT2jy6jD2e6LNahMHkpK6I7%2FlQzmjQzTNJGRUCLxSG5EVO0f4D1riXJaA6%2FVsDt20ytUIBQd4gsSBt1eu8kKzCO9vuvAKg0bEC4nALM0wzRmBDyiQt%2FJ19z3%2BxIqIYFBjN4fCh0VtKjTsQFKWqF7TJCLlC3jS3MKBBNxbg2FFuk2IfdT0PIQxMu7cFewjZRTWZPU5PutthjT2l3qSlxeWeJKhnlxwjbcYFsyRKXxqqY1sMMbH18kGOqUBY555WjlmY3D5mN9GOLMxO%2B4GjTjMgztGP4fsjj84wqbEBHUVOw0v%2BBiXifTInnnxsHFfZBZQYgr%2BQt9ImBnqGqN0Y3S8QfSTMj1kRkw7wzBqFZTDAUO6AGrg%2BZyBEcBtHqMpS7AEsQcRKPE09stCmiRvbg1c%2B37l171J4KUOvE3QdmL3Ck31RHnQQx1RoRbP%2BZmOoc8AkFohz8KyXDbzCfndekDy&X-Amz-Signature=d3cdadc24376eede485d0eaa7adc3a2fe3ab1ddb28257b14ce5111a94e95f4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

