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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRZIIQG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvHeZKiMgxAgvqecQs%2Frf%2FBJsR5wHlySdH33i45zj30AiEA%2BpU4%2FrxseWcAkZSherp85VwXUT9dm2XNI66RZ%2Bt2G3EqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVbKFOM71Y%2FyYLQUCrcA9JN6tCAtRD2b6oz0ECgk1%2FiuZfbDqm5aibEs66zT6ldoFgF%2BLxkQIuJydGwE3zUlKF6J3139IUV6%2BgxbrtORPWFX01gekUNBLpaGka9seDiAbXU5SZeNWbY3MzKKLZg9MM9PfQaPwopJRjk7%2B%2BxaFEQq5SR3LINZeRe7vjydh8CDCT2mgGhS9SABc7jkAFB0I5K1JB3m7ec5pU7OZm3x3kL6MkVAaVukj0LdIMu2l8W0Z3h87bNRXFTknmBMHAPB0C4t7qOmqSJYF47oQuk2MZCfvd8qBA0%2BZ4d9gacbtFzKm5wx%2Fulx9s43i5qCtcRqyXlJ09NHG1ZVphqn9SQx%2F3n74VBpNilr8lchR0WIrtXyk67s34X%2F1YAYu%2FwlA7f43ad1J9ZFuooH%2Bh1mcIEEUu4WKMU0pxU40CuEK9lSDJz%2BMU62GFTXjC%2FFt1IUutLfEsmywIhMVVjj4fqjQVumq4ZfvNLRJ40SNz9p9jmDq4H4agLOlpsc0CXlbmOC9CJ4lxWp2UqdBUx15P6ipe119sVaweGtc4j0c50Yo6%2BpfccYlTkViDvVC1jfui9dAOPar06A3HEPDis6HwYmBOgCF2vBKBNzSdggfipxErhxNFC5cZMVh0NwDkpQvO3MPuh3ckGOqUBW15T6LeLM5H0goOPrh2%2BpwOjByL%2F%2B1cRJ5VYGEk%2FyAEUe4x8gpHDFSwyEeAIQeorwRShmzGbPKTey%2FpqiZwmnBz3aveiRLzEIiOeDHFZFZtxRIFyi1CfUkLcJ7r%2FoVR3TlGDx%2FeaZziyfQ%2B%2FLBZdqMiDV1CQlEbwi5flkjhYnGKJBlXCCnx2VGpx6liVQmrCXf6CMw5BeGFOLbKMEDJyZ7UI2AOq&X-Amz-Signature=16e86dc9410a3ba0a2d6672e959a46065c3ac9105f4800fd21f435b62aa92376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

