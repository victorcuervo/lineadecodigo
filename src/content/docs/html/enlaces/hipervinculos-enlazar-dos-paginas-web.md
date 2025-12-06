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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VFKPU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZepLyA3AwlX6EbTztcHPH8t9%2BFFKdrGJbFanNIcM4nAIhALuPuC%2FcoHrS%2FQPQdZwg37t7vfUmbT66QIwNwHusTh3%2FKv8DCHUQABoMNjM3NDIzMTgzODA1IgyVCYjlCNrpqBsANUIq3APT4EXgDGl5bz%2FL2XgRY3SzdVpXX3LGIyPWIM0rhziciXHwwLGvHnga7XAdHCkFRsirHgYkaY31DPqgIeZdTT%2F%2BO82ONNliTrieopD3ym41GnCraYKFYt4BEaIcT6lNAFHk%2Bn6MO8lJFdwThhTSwcR9zg23Rf6fm%2FxS2I8np3cVjymhPy7n6RaxUZjStIRVooVAmYwwXp2g8LC6Lx2VJ6ZvHuANcLPQGLLaGQEQyXhYtdvATLF%2BGr7YOxMUAPMFcQgIboz3fzN42t1RnSw%2B8GCHQTicOss0Fp1pQ6pCeYt66sJrp4ppZn7ag%2Bcv%2Bw0%2Fftmli5V8qFA6SX%2Bjo2OdkFifB1lYkxp6W592k8lYpezn%2FkkS6KI%2FuwDxJ2GkwydWYjedE9nKmKU4bBOP%2B5mWfy8YetNJV2hFJq%2BYctXjnFPH5HAI%2BlYvRJtQrmFEsUpOvparwVRseRl9jx2hzOzVwKKyMHF87Ju5XYQs3qPdkIDMtSGHMWYPzWlJnUB8dCNHd9q5ar8xKD7LjmnrjI8fkrUTgBNMln9AbeTXZkmFm4FE3L%2BRC%2F0B2KeuABj%2FpgijkGT%2F4CzxiUcOr0Vg1o5ktzuWjt6KnINPj%2FmTkwJNh70QRpcGK9wayvnIGXPxDjDuptDJBjqkAa%2BS3%2BYDUTXSlocEuEUkprOnkR2zTZAURG1e0T28JZk7XRovhYrL0d5GX1UwrwPnN0atv%2BQzEGKS9smUktMgfQBRwvvKSmi9F7zHTBMTYCkN3ssJ%2FhtwHXL5F4fo1G9OLjqxzKBXKH%2FtZ6a6cj0sAknQ%2BnIsSSxC0T5Rtnyll%2F4dehPdhCt9I4WUm8qGCJ%2FnFLvJTW9U2Y9ndLr2%2FUm84dooEaqx&X-Amz-Signature=3351ef2add0824144aa139505d8bdad3b78c49672f0fd760ff7b6853a5f125a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

