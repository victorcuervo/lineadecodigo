---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPH4Y43%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlbdxjgVORf8pkw23KOAK4s4E8bUnqfy270jgLcuVP0AiEA4mXWKntYEFyEzCJ18oIt1uDmbjmU8eAcPOrAyBXEGd0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOT%2Feqs43t9KiRFbxyrcA5XXaufV%2FMXRSEZe19pNXBe48R3r8N9ELUSbXW8y8pFyA1aT%2BYFfKk1XA9GlhNyUAXwu7XoafuLk%2FT1wkmhzubeVS2TQ4KycwnUEM%2Bf%2FX7oehVoviDjRrIqlu6VcTUQf6K9HuvVCySMvlFoCy3ZpkZiL5UWMTS%2F8ucUZcsn7RXSdeqe0ttArwQL%2BQEUuihpZpZ%2BogF7pXhZgUqNSFrh%2B9BDYLXiXV0LWlup2RJUwY%2BbIPm7KCj1CRoO8HCEYkv9PdsoywcGM%2BR03bo2QWwa%2FG4oX4LjYTOkl1syZswTfzivDfj3PxEi1hXwuNEg340CpwlcqffUG8oI2zgiDvQ5tGV4ayWt5IIaZu1oq8t041pQzGvsln7icITEfabLadPMLtP6d8HBUPVARODb6qNc1qhJzYCRYSPBdLzFOERQLDg8zAx461Yij%2FBijSIOuKN5tmtz%2F3G8kp141INZqclgMoLeX6QU4EaP9akIrOS6y4INV3fHi0E4Cgl74%2BkbmlFQLiXZHIAbx4Kc8kxQz9jKUTKXt6jEEerltFgMTD2moy9jwwWueRjdPhF4tZe%2BcZY132HONcwCkv6vqX%2FoCHUDDkQ22p%2BT70s3qajFUw13tNhqWxm6kvACM4nGKDU4oMOPcxskGOqUBwUJIKBBgq896KGE1TuFixivYDzxw94y6X9lQ0%2F3G47CsZaL2kojvdwqZASAfyymWrC1r%2FPgFFQ69cG0xlEBrMX6jcgMT%2FPOWVDbGDdt5hcdYY4sIzDgpgIzJihITgllRFeVr43cqYSFoqviUXsRWAlrFgmoReLL2MreBM3LZ2vZRAGB%2FRdb809iIJf17D6mSuSFOm4ZICPfa9L1p7QVKEJOca3ej&X-Amz-Signature=1d3380e5e64c31c84c338733658d79b5fdf5c43f481c16adaaa44660f0661879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

