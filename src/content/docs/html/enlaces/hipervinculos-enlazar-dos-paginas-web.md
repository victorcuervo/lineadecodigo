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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7SFQBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2BtZiBflr5uBDvxv3tQAwS%2BsSFK6ivyzRvmojnfc74AiAUfZh1QS0ZST8GseXmIgv%2BzgrrogkpOhXOVFAwlaVWzCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMoN3LuDZiH9%2FBiWbJKtwDOOSyRF0xlS9sU%2B02ZNy9S0l7p7fkySye8DwcmVDrKh%2Bd1N7H0Muz%2FSAqAylsqT92M%2F9DHhOOKZK9tWkuslgmfsUWLmtbolON5Rdaq8udLPlUeO8R2LuwNhoUewFqubj08nN57F%2FePgImNJaB0Z8fqBTuM08vtw%2BMnP8n77Z2xZunOuskkt2BKCMWnpqVqr8jsCcmSt3rnTF%2BRbXcbIG1B0bj0xSu1QaVdAf3oSnRdNW%2BdEYVxCCWM6hfaddRMQji0Q5gCHuwrxsoUcQ762H6h%2FiQu8UL%2BLlLwOu1TojQm0uScLgo%2FowR3TuwiCUZjSZing3IZgKs9hUVwYOh8u%2B0%2Fn%2Fi1CwuBNpsA2BbQypqRZvlZ%2BjDtZsuhRehxSQB5dW8KkLHUWT662R%2Fz%2B%2Bs8pe4fepZ%2Byb9zrt7rs8B%2Bii%2B5a%2BJAz7hBpxnNHrrb3BrYZ8h9pss6BUqKXXGLyB0fzuTppnrlfiorKlzgjS1OK8O2ROKBH%2FZvncvmgyDSQsxHEJF6UPMY%2Fxj%2BXSlhlZVyyEKvJciW4JGjPwfmBslzlUi%2BdKOiSCJ3Blqbzi16QeP6c8hPfp8vIVUorXwYJVLDHa8pSycqQS0ymOEVqqUw2OVVIx5GxrVZTm5culIpeEwgIzIyQY6pgHiFLuwBqu1NXaZGrLhygdIBoKYCljJr4NP67qV2wQ4%2BoUGf5dAjxVEi5gy6DCpsi%2FwxIAQ3CdfwtQNpRjUvBJ9ncCW%2FvjHbqJqIn9x8bwIAugXC7DnUpcjPpovABYjWMpJ9AezgS077xzxgVChQBp8yeO0jcAkzQHsd0LqwpEIimh%2FbeWSX%2BDAGEcJ79USk6zl%2BcCkOsbkBWNQPwnyVHLFDAvbTb6t&X-Amz-Signature=8e71c7084bef45e08c93cf60b466dfab0d9e9411f08315553d8608c1bb538f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

