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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666AB3WWG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkdHfNkqLgbSZGmK3iLGWh3m6LTe67g4tAwlIC7FOdwIgfIu4QoXGslyGHhXfxkATYiXoS%2FgkVtuX3tRF3cLN6IoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrUyk1xBWdhAzqEoCrcAxW5VKboRHFuaaWaXmzU6dMtjjKSLVWec4OwABCtwpDggEmOZIoOeUQcEr7byUeih1bOf1QfikNuFJRqX9O0Y6F8RBiRaeQo1nmeFr09Pf45hWysjDquIDpgKKsZoPYBpZ1pX9wMMUA8xYchxEnyikSt7bSOeCfpsrPE0drMx0wfG2Vch2CVAaMHBod5QnPbkpphoWypOKk5cJS%2Fn4Qp0OO3dmENkH6foqCw%2BBNBub0uWljWOlg7gNxZguaYRUusM9HkkILWfoYDor%2BfwdplODRRYJ4Tt3HDFBMNr16UPuSl8%2Bc81fHvXnFnXi%2FSRFxcgI2IqxWOPU1aVPc4gOncIhCmZO9Re00bESTROWcR3y3IE%2FsCzEUwC2nwJR9esbhkyHfbv1xT96N3qLpYtQMi5NwFltgGfOF6eTBfIIJnJbKY%2FIM0AUZQ9cZM5Hu7qrt3KckN615YjS6Q%2B3WeNBwkHMjBlgGhjtotihiI9ZHuGWfeDRyIZAzHTjyWoggfQPU%2Fc8UshyFvLjl2cAexQZr%2BzCukQ5LEB3Z%2FyNGJIeV5Hsfva2GPCmaMsUxy4aJM5VVC%2Bv29SKzHIWD9N2EGBhOIsolB1ggrft7N2MvfVYet2VZ%2FOJaVu3C4aIrNDGzIMOX%2B4ckGOqUBuij0Jndhi9dIhTFd97lNeX3jdKblrqMEyIEU0aphcPz2T5DpRRrsY%2FRU%2FHVPbL49ebyfQXWljrUcJzQ93%2BAc6Z1UITL8wC6HjVbBQxMeDoUFCKrzNFyi20QentZn31b4ptaT4kUhU1z9i0moJSPXhsMjdlzdywHGDQiGVwtzKsd7uPjIImXovk6ylazuTJHRs2iOwU95FpGE%2Bg%2FfrN4H01Mr2aWk&X-Amz-Signature=5bf3ac0927557e364455038941ecbc9b778a3a11e983e56c128e25b9b2377996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

