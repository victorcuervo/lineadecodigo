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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDEQGUA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkDf%2Fc7PyG%2By5pdKppxXR3VFka0%2BBuLVq3i%2B2XcPwi%2FAIgaqbuAVtC0h84dXrIIk7EQSgBL3%2BPYqTVhabtwxgtInUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQYhPZpdBiAjxU%2FICrcA1VweTAYm13tG4swBcs%2F0KMx0FObnFYzdzDeIAPW5rN6oBPqED20YVMG%2FzoNXyrNNTS3rtRCRnESDOjbUnx9zfxBOixHo9WwGRpWHzdAa18zwG27xn0v5oPVNYaC0P5wcqQL0Tm0a6kpD9fB%2FQI4VA64YbMz93FWGLw5jAGlcDfTpbBaV%2F8TyKH5tudIdbrcC%2BGqs012Ghjf8nh0Tp4I2oHt7PLBEUEsVjCUV9gU0UzZmj5H%2BuIAgauocRBmNzZu8Mh%2FD1ar39%2B9XM5rF%2Bf%2BFwRfu8oW2dllr6mntj2cu7A93eLiwZViGQvhmwaknA7pFElxnGEZPRGPKSgH1iE%2BYoMDWjPpauM1pzyBp59sfHdexzb6fj0UKWzLhSf7KGRYtVXvoWPeE6jjbrHJiDpxjVlvFxunrHsJG3%2BuQyUCaBAvtaF6rsA0ArTTkFpVmr0DvAC4Iel0MV2p7KYPGGKVBaAbvVjgxD%2FQARSn6TQ%2FSigrxIuRqPNoNiUZRR8zL8Awaz4xVZ43t5NTlgejpnTP6PDn71nQGI5JmqTXzB6F4dgo2QWaHe%2F1myRuSy6H11ulqEMToZ%2FPdFWRXR5%2Fva5yHTl0RyXG9L3HmITgOqmOXC8vQSgxL53%2B8ZErKOD9ML2a1ckGOqUBpvAC3doAN6xJ8Mnr5vSAN%2FiobpdE1jW%2F5ymAv6PCwo7zvj2yefkyvE%2FD9B2sDRR2zVBD655NXlebZ5runD4DJGfVGPTt2i48KhP3JcUeHczLbzrf%2FjZOzDMm6C4ZquNs7TkdZ44NiV1yu7PzI9dCMBzmpkbsA3%2FZJk7QZ%2F0oZv4kwdbMKI80JfbuSADVtBx9FcsZYnTSffaoXBsPmXWzn8E1ZCzA&X-Amz-Signature=b743c0db15b282727b8e370763a5a4b0b645426786272bc54d3a9e3545865b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

