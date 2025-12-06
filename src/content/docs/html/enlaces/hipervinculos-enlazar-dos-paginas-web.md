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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMUKSUJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvzJEWP1BsO7dW7gCvzbCWQqVYGZJ7tOikn709cO5QPgIhANE7K2SfPPvqGSxTHjrN27mePGYnuGtBGiF7U%2FKx8%2BnkKv8DCHAQABoMNjM3NDIzMTgzODA1IgwICb7wEbVJ2iW%2FvdUq3ANQNvhntBkRMXf%2BCk7T1rBkQjEHPWgnUHk74h0NbUi%2Fqj5A2AydMzzgo5%2FIi2yxO4Rn%2BTnuHC%2BeAnkt3BmL0Ol0sxYsUHMiEUZ6avHtRmFpGM5ZshGgg4vDir%2FF0LWUaZdeGCXy4N2XKNXpWgwuzlDC19EZTnHu35RUSZkT2WS04XEjlutMA1KDwS1bImrW8aLqZW79a6%2Fo7647fi%2BKcKl1LfnFGcUQovMnRJazJgZR2rJQo0jFi%2F3RO3v9O4ZV0E1fjDyeB2bSWEoKoiFR6Ni%2BLpATiYJuqklmRnxi88YnWk0x8DNwl%2FjNw3BIc7OqG0Yc1cSez5kU9Osz5AK4SbEuZpQfi78PT1z97BYWvbru8zXzEkScSWtlGhwzJJQxtvTHQyWzYcM8A9pJEm9tgBF8yan0ODQy6IMdIGhuUaUKKsvc7fSJUM24thApwauuU9lURNg%2Byjw81HKS7MKotvh2hmT7Dl%2F3c672LH4DWIrQ%2FTwXF%2BkkRidixSSRu9mj0YnKS%2FMymrlONtMGgpRRToaezqRKWE3Jq%2BS2xw0oLB18HeQB%2B6zJavivgDWabN9uFABipTOO9pDoKXFLVdgi%2BMWJl%2FZ%2B2IBmKPFTFTuNKnU3XvCmV3n%2FXPlX%2BZkbHDD9ns%2FJBjqkATQnNm2waS6jAb6qwkiOZLl8x9Bcx7RmqEAqPs70lXBGJHkgW13Ag4DiYMbur%2BUvI3ZF176E9EDIOWr9Yd07oiQKq9zkmwukbgIbKs3QAJvHRMpqKUl8uQxkN08bb2Ql7TaQ1a69q6uFPooM0BZWd%2B%2BYFWY6ISudlqsF9Jb8WfWoBuESYGR7wLEGc5B29Gie%2BSYNyYoNt6bL9cbgq45dH40IK6fw&X-Amz-Signature=ea494f298c6f0180fc1bf2fd48dab8975d24f90b0cd24c3f3bac72478939bd00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

