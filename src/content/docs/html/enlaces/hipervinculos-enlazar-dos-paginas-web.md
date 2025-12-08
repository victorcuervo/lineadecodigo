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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AX5GXEO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5yZtm46QTvbCt5B1VL1sbVjMg2C9zb6WViNijiJhs8AIhAL%2Bt9ZMF4AeBM34jUO2477yF9icy0Xoiz2slX8VOF86kKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHQNeHmqRRB50kdXwq3AP88h512NxybezdnJkRobFEFlR3rTzcQ1Equ5z%2BfzphTyu5dX1a5GIBnIhoCTwVrhLSCECt04UAxyBb7sl1pcHDs6I%2BmTcDTgBunEH43dNSy6dixHE7u7ljJdVAnArlftN6VY0nYlXgiUj3az4e%2FbvyY3YHOaGmI0iWV3txTP9NxeGmFgAjMN7%2Bx4YUJp2UJotP%2BZJuH5WPivcUexmvb43XJNduqN%2FXHgjGkDmUKAxztnXwAZ4T7SYAbyNRmNV2Ilct7O78qmbc6zrPKm0%2B2Ums7z5%2BH0Vrf%2BlgnEcjh2SRhQX7EyTf3VKnSI4%2FrRK2BQfE1ElJq4LgI6N28bJ9WRbCjSVJZH8ZdneZW2O%2B5WkWllygo2OqKWd%2BONOUqUn25pSCTGSE2eAAfGH26ECUiW86f1dB8348XxcODB8AOgxk5721GTyUA4Jkoi%2B8z843d%2BKjHk9vtOLwZqWKgsT0b6GhiGrMAVnnWEsZfAIWeb51BmOx%2BQx6%2BFQZvpyDTBXibC8W512977Bd4qBBj2UY9r%2FP5c%2F0Ut5ASFL2ei0DeEaJx%2FuZWNPv9o0ghRqCkKQbqhYHWm19Odvv1MkeoeZOdIUBstytLpuhT0TjHP4MhM0cWCGk%2BzJKHgE3lrGpbDCKot3JBjqkAekWuNxukneXS0hmU7cl2O%2BCl7fKZJvkvS966on%2BPNNFI2Z5zD1KHN33kpE%2F03r3dr4EtYUHzbzYqiA1BIFmFsvFwo%2BwX%2FQWd3lX3tFR7p7Im9qbDSjiip3h0EwDNAbnLAK9TzCuzj5nVAUjMKagubn2ZjEUOZ7FNq0dKe9je6qwAdA30kWJ%2B48lG3F4uEJcQbrSJXjEq2OrGccth887JGQizby4&X-Amz-Signature=bc578821c33fad64daaba4ca08f6de613e7019c23274a1c7964caf2c5af10424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

