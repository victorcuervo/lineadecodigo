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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOIEH6VR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXhJ0d3GX64rl7XJ3G6wmSXN7eshX66MiZRkh7OJu5qAiA9AVsrwF2kk20zNVsk3A0C3V8sr3Uy2PE%2BTfEIAQSZnSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScZLAW5HEfgrzQvqKtwDJV6MLx2xZJRaH3oC1vqLdNsHe%2BzvaSt4wuNV%2FmGcgtCUXk3zH41sT01GSoJOAhfDay3LPEOPpx1pW36Rsbi0DEfHTmFRejRiuBqYO%2B378Jk3Sk59k%2F64A7%2BZzDvo6T%2F5wEGbAWLlFzfuJbFDJYLGzAUcIkRhO09cjS%2BN8oZ0paEMqR32MXq%2FL0zCuPVWNoy7%2FqbfGf3zN%2FkWBGhcYPgwfXcafd%2BUi8%2FkXucQwIESS8tJQTnc9X9rbQlHl8m0jrFI9u67l4jOAto7noaq72xJjJZjDWTjuAOPtiNzO%2B%2FTpgPwF76UYfJFquxjGomwMjVAIwEirB%2F543NTSqEShfnFyQULFlgBZWFy68f4nDtfD9z%2BecK%2FmqVmz0M2qONqfDi17CQQSUKF0uLGRoQtKlmbDpsITqlj72pCuFe4nCvIEVQsiib1C%2BYqalOPV2tVEtBDPF8A7UNxAHs%2Fuksx%2BCIRSLmmnatOXMOSu2SXQXL2F4lnBy3GP4i6%2FJxOJxFEffnn25Xjh2XDE%2F95NX3x0R3d3idWJ%2BLD7lkb4c2qIaoIhRh5mAXJEUSLq0H4rkgFb%2B94x7V0C8DOEJ4Lk4RMRpG14BmTty%2FvpEwHleyxZA7TrseoQcyiQD2V%2FrxfjRcw%2Fu7YyQY6pgEsB0I0jGheAKIklcVMmVYonGAyYxCkO6Gsjzz2F%2BKpES09BOGdV4vavATr5tQM89syoJjKSRv9yIOQD3qnKRuSARcm658zMPIDl2nqDlAhPCoMuTZByUG8Xx3%2Fcm%2BVBt1vRuL9Cem5tZ37J%2Bx13tssTZ7sMdMnenQfGFGh4gtJc8g7ZKTW%2FkdAwiAucbStwgpmZ7rVmTA7qAk7Ek23AVU%2BiHfRT3i8&X-Amz-Signature=02eeae6fea9b355ab9e56ecbdccf88cfe650bfa9bbf46d38883cbabb347badf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

