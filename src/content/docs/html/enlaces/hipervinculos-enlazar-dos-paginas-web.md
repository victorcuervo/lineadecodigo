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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5JRBSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0K85N7UUj8w4%2FsbPJTtwK%2Boov73m09CTYGcOm4RLzSQIhALB4rcqThjIiVCsJiBWehH4UWW23b9GfmEkP8W%2FcoKfiKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP8t3QGKwirL3cw7Aq3ANry3Zmjk2MsTqj63GWQWtq%2BOC3b4rkdP5oH6wGQcAK6iM2D7bnWqq4K71sYlVTSP9CznJSdtUoU7uNqlRSbmPrnuHeZeMJlHtu67hHXiFyND8nVEt%2BAHEucQj9OFiV5ZZybBlJvRolXjBtHDAlGCBhLJfM2%2FF5pEDXfZvlOH6qw2L8a1jOtXGiFf5kKDfo7XaTMcCEMK3T36h02PdiiO53gbz%2B7Lk%2BZZwxVF8eHvkDkRx39cRyXn1W%2BBwr43mnbdIGBQKZSxEeV1ORj08XpjpNUT1Un%2FGGRyydi8vONrVrdHzfVBNs6HT8fSjqtPwp1Pw%2Bnwe8Jrd5eVKvmKwl8dng9JUXA3TTp04uQBIUNwRmdmdprYL7sBhw%2BfqiLhQSInme6Yy9sBdDtJAK%2FRwPNN1AgY6TgRL3aRHgrmUGtsXLrOu9An%2BqYAlSBGkzQT%2FXWbJwnxZ8664Oy7pyUsFUp%2FaFgYJmMI4Eb9Sgyf6Tl7aNdgBQdELKnnOlpjzHAP2zg2LKauMo9Rak3D%2BJ0OJPlQquXAncND9dqweZO8qgW4UqlHbiVayLISxwweaGmP%2FeTUp%2BnDo9873DY%2Fqu%2BZ9ajeAZt%2BWHuWF0Nujdi%2Bsjc2Bw0BjAhx%2FAUzz3cvM1JDD5j9vJBjqkAdzlwGUjJxPi6ox%2FfsqbH8nRkGdR6zWPHdEQomh6JtiqcYR7UzpuS2EHXi4y5z2F1sXM5gXbr5rz5oxZ317HjaIkd49p7JjGfSG7QsPfaRYYcYCtd7axNPegvh6fuBzAgneFNZr%2BVN3uds0s3EcvEuKgh3QH5IBr3iLhTya7syxoFXc%2FM2Q9LOoqCKbDpbKDfH048tVgPbkAwzUHJQoOIWXAtdbz&X-Amz-Signature=0fbf93495c8234b27814b15b3542a0af7fb7a87e32c02b764a365ae6cd0bbdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

