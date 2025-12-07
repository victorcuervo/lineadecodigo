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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDBJ47L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyhoodADYV8U01XGWTnziOMoruqm7JNfUFVg2ehm60AiBEbniSCaC%2Fpr6rp0nhq1Ztfh7hgaPFxGV8pTeEeZKdjyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOgK%2BwRzXo5unPxB9KtwD7eVL%2FobeVBlH44MPRA5zp%2FXIllk6GNIhza703hjVRcsIFPEZcdEJQyOYsQ3B%2Bi9lcbBOz38j0R3xPPq04q2rJegNq2Ra%2BFjkskM7YDFIhVcAwzBTkrkYP%2BQKYAFBtfsokBPPJG0Cy33QHL%2BJ7MSuofTalMA%2BcvulVCW4%2F4JTokPXSdxnnb9O5StFMrzFgoJZmRYI%2F1A5S7jo%2B0wl16iOITZxxzgquJrZXuVJEmoQ7tfZBJYAhDLPgjjOhqWtEUH6c5cci8DmGsyXJ0k3R%2FsfEQ0UOsobKWOlEakizPZnFDy4tr8GE9mwHGQwuJvswntADEmDTbE0L%2FmOhrCcuvXP%2FG8wVZ7Wcgo%2BlJYwvOhm6GCMQy%2FUnXoV4KuA87CQKZBTgpb9W9Ynpqg0vPTb6pRBxOY2sh%2FBgQYS1wfbd1TusYiN1UTbmiF0cx6lqckWMTGKz9ehCq8DkIfGFnGCsTJ4wI%2BuL8pEWrF2o7x0yc87u7XHO6tQq0UBmjwGvgA4a173p1NvFWIBB3Wu9QHD3S4%2BJVMMYobRfQK9z2ilpfqKiSeMyKu9Fj8NXw2VKQNAtb2BwzZYPZHD%2FkdrCiP4seHbK8F5yLLcz8%2Fwb%2BgpHQQ9ITEMAcl%2BnmJlJ2OcQY4w%2Fv3SyQY6pgEEDTaQ%2BvyVEzjAHBupRz%2FF%2BOTmr3%2BOJoHmsmpnvyHcsPIFKV29aWxD2lchI6QC6U7mNloVYJ3cDORI8bE1tNVcsSFZOmvlf%2Ftwxb42ZDkp9pABEjvtWkj155E%2BAFbB9XAfVSKv97bEjy6PhtY%2FoiC4d6ZITOV37xKpZpO4Z5RiMmQaIq0QQErjrotu2Y1uWpxc71%2BMEL0FrlYj9SdpS8v5fjuNY9ic&X-Amz-Signature=1ced753a97bd64d586c88c3207acec4389ca36fe93b848b2f7ddf60c93b82ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

