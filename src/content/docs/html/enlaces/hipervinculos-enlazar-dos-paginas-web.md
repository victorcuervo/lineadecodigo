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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2BFXDM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTxY72yWBzs%2BPekvbE9qqwU6PuE7CsKgofmddhZtEjzgIgW9FSSXlsqAc8Aid1BBc9p7vAefOyrgVfh%2FFi11j2Fc0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPG%2FD6eYRdJ6%2BnNzeSrcA1ATspEsTvDE8R7OQvp%2FYLt69d84tfcmk%2Fq%2B%2F37RyjDsLro5Z877c3OjMEULQsfR84ozuw2reU6TNTueMMw3gY11oV1Em8GX9LR79Msoso%2FiNdn2B3ulJutBZUjOd%2FQ5UvRSJk7wxduSb9mxbivFWXn8rvcQSjJ9r0VKRdmgono0vxo1n91ydlHmlNbzczHwDCjNr0Us2V3YX6GvClFeeePOq7xeMN3PC2ZOPLF0V0UVg9DNa0FnEyOgaAAOwh7nE7WSarvYpubbyLuu7wtekX6uKDZiFPWnWAZsSWWn1eMnhoJZofouATyLF6wcV976NPHmbk2gZotq7osW4R67a3x3zd8McJqj2cQ0s2QX1QcPSX%2B3tAhzK4vvmi7Ui7SfMfTBWRUXe9YaNbYXaEy1PbgBdXMrOAvpHz7CItUqRww%2Fv0AdyltLEUjtPu0GrbsnA%2BpzFOpgoyS5YKCbQNaJJOLNqHo0rNeHEW9EfYpvdVWyduoTdSIPKDKyoEAKyiz4qQocDgNPlIsBUmNMIaNz7NxD0wpLKlYrtmoZh8YhnnY8lkjtxq11QmfI9D4DNxNG%2FE6PzGTj0tqdtxqIhB8p4Tra7iwFnCUsIzLTNkuXxClj2Bj0T%2BZBlloMSttLMI691skGOqUB%2FVLuWhxoiul47VSs7S1VeGN%2FaegclJd0SfhC7vR6BBmo22HIwD5zkQX4i6lYuhIoBGPXZ4QvHZQE1XSqHWtHqLDW0YeDEHukpxLzrYDRdoel%2F8H40ibuiI8KF1EfFzSzXpdc3orQZ5umrVi0V7eJ1H2kss1AiRXYPzcffCBER%2BCb0cyG1DyP5gNqMY4r9mQNSd5fwAb8FgA0WlEpv0d3oo9kkLJH&X-Amz-Signature=58e710ef81d93ce6154eb30242e5305f5ba9d459aa65371bd7f7569c5a9b3ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

