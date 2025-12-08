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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5PWF4G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOFQ18N3cD42ouhjQxecRlveRaxFCasmHc5KtbFKLkqQIgex21MF%2FP91j59RdCoVFMhk1xbjFVhs%2BctwsGd2E8KIAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzgLIh8LCITNpB3lCrcA5Y0yKgdH3b71Yfzv063XfzfOFwqHen%2F%2FwpwA40whnsUKprRZ3py0z%2FASDzaV7NO07JNHh0h5vCezyNWWQY38%2FtzpoUPr%2FN%2B1tHLlKt1itntfTXiuVrUFHOyMHhoupTU7PtwTSEpF%2FbaSqLIpLqmigLIG%2FNNbCd5fMd5GgxHTK7Jyp7SvbfaTgqs9L0luaZg6ROCPC%2B%2FK98%2F9A5azrkjgId1r%2BqMaYfqOVEEu1i8OBowr9B5xC35Xy85q1bmxfPxq6S99XoKsOWlBhqbDPtiI0MRwcynbFIkFJYc4Q3%2BuNBRDLlyvWctFTREVjZiIp22DbhoCV0V8RU59X9I0IiS9HBhbMnuJbfplLLy2KsOa1%2FNaTQI9F9nP0I%2B%2FaXKjWcG2zSjidvUVKIhTA%2FWxYZI85o9JGZkV91WQOW%2Br4T%2BjVrIdoFHiCkSsPdZWESqOz3yfDsXggLchRMI1h6OrItDZtD0CRBzg0oVaCa7fQELrB%2BSg4BaZMPeq4lG%2FXGxXjefxr65s2veRy0%2B6DyMJAxf%2BhkN%2B0odn%2FiW9IJNCiCr%2FNDPrswVKmZwbAsdqDc9uB65oslk9g41pfZ9dAIGTUj3SF2JItalZ%2B8wzJlIbGK6H6UTnBj%2B2uM5ldVOx%2FpnMOGH3MkGOqUBcomhv0nwCg0kVgWVEkX5hXTnjEYClIH%2B1VmnwgztTJ1%2BlesbJt9MOIHwfJvhrw%2FIIR1DPeIoosj9Ze3z%2FHJ6G9tSoAZCk2KJkcCkNu3%2BRlTFJ0OGg9egOLH5h2CmqH0m9raHa8f%2Fn81%2B4iT2E1tVAzh53AQCjAYOfQV9d9cOBbTcYML0bJfQXSa%2BOItQCiEq3Dp5Tkke1EOMokJdLOQgFOuPU3bw&X-Amz-Signature=4e714e604b7db0dac1adb5ae01d2f825cc59c007a546137ae3517eb41460ee13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

