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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4UIOUDQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXAxUd0EDXIcs4b%2BFyOrMfewpMxUpLrCtX7V9yi%2F4EAgIhALHvZ9aBtvDS8jBTbhdhTUFTBPcl7baIkklgW45VN8aiKv8DCGwQABoMNjM3NDIzMTgzODA1IgxUQPyhES%2BANj4fipsq3APdhK13bHNjn02I0qsSIbk5jzVSIoBbiIpH%2FcERHBD%2FE3mbND8OwcJItkHf5hSQmk%2Fwc%2Fr2KzSJ5ZFpPvdQmATmq69%2Bx5pGRzBBmNnK2WnmZxi8mxl1gLAmEmO0sRW4WXs3EL6NTnaJlpyniRS5uBMbqVtFS4RjgHfe7hEOhgOv1HiwtMfnJtVIqirp%2Bh9IicXRafgLdY1HB4HK4lRnMPkqK%2FmoaPCtIw42s6nuLwmY%2Fhgm2EEemw1TfOCFTJPjGthcmE%2BUPeSvmVTEdaLq9c7sbrDnAB%2BdwOxycoTPdEH%2FswFSZCpmFRgazJuoTLtnx6sNs0dw8f6Fe5KigCfy6UxetfUnM6CAvys0iskvlONImaCqwzm4qE8VXDd8HRBZ7TTKBbx323XIlEuYqOa%2F678xz%2BCybMQfIqiNW%2B0nVdpPWFxIK8pJzJttcFjMDJT5EPOH30EZZunpcpa4A9dx%2Fm%2F4TFNl2HxhIA5DWaGBDHb2EV5dmN3mrJ2SAAx3zDLemK4Uc5C1dTkE8BMvRcMHskvHd629RDmcdCaFwctQpTOmTPg5r1KJRhQl50IAIASA8zlwD0P%2BB4jeD6BNmoHYNa12MdvWfF4CLuAhMgYXaTpQx47S0A9rRzZX4GV46zDAws7JBjqkAeOM%2FQ%2F3RA%2FA%2B76OFaFFvs4BX3B2FeuExTlrArKo2pxNpYkrpNNIQmQ5AoG0xihwpe%2BgctmbmFuDcwAe9GvKN53xcp7FhqAptXl32am4IPgetsNQoazsFWaU%2Fv9sP93tkQbr1XnvqFd8oI7vx5syT2ChnC8Qkby7Iv%2BRqs6JHgQmMojdSIbYKNPnrFsee%2Fng%2BPaCV0NARza03c19czIymwa10ZAc&X-Amz-Signature=4a4fbeaa19154b052217218e228692625a920b2e2765a3c1080de3188573a2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

