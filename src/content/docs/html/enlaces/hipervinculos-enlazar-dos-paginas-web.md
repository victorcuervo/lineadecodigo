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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQ2Q2N5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu02K7EcIUy5Mf4utQNpZvD8j4NB7JR%2FW3IgtftuvV3gIgJWqAlp9LyHO9MSmIqwStWvmJMuyKP4BjhVoHiPX9Nk8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGkznGepNHPVHXcOpCrcAwdkfYuJ4r0VGhZfiwaiXvgAhPDxH4pxFR1HIPazJJN%2FwGjgEDg8x2geF1NvNcomBBumvAK5ifRZzBaMBK34D16uy%2BZr0OkhzWLSLIvfrCeoQDeZXNYhL%2F9azv%2FnKKfENLdDAIDs8%2FHhceD%2Fel1YLy8AHWLOnixgcxMf4PRGU9VnGoXggGLPzVU62YfrDqtz3mwSIKbZMr2bcU1dVJ%2FPwtshc%2FEADyLyGgIE%2FeKCJUFu8j953ytx8LXkvTiX4UDyvUttwcQpcqDpfnLi5WYN09XR7hUaqiGivk%2FRaJzLEpnJNwXujGL61GSYjLIn3OuKfTQrItV51CRUxdhgpkvj9btFC%2BzKOUSXxMfNzwUMgIuJnG4dJP9%2Fn4QKz7AqXvTOQMpNW%2Fd6kYSOB78R4CWqnyveYyxDqNLkgCqSeLG8al5dYg2luhAtmT3Xk6lZpxl0fvccuSGrmW2YDvulp5T0kg5qceTfYDZBIyYXsEjYtEanEW4RIUnxMtDD8ApXZA0BiA%2BjS5WaoZLZdSk%2FPbHPENq0IBMssTF3qoZsMhXoicJ2RQ6%2F2qEMFaslKsCDUfwncLLais%2BzZA9hGPX78SN%2Fn0lVbQy2AR8fRqEjywEjsf61VWnMxrYhXBJJ%2FdudMJ7iy8kGOqUB7OqmgQwyxD7oKOG%2FyJfB9TgW3DUoNx%2FpL2lUqzEtCbljT3aWoPtyMONstkBEgc7so1A5D9A6l3LyHIEIjboP%2Fl3Fu8a4YQM23tir5oMpucuHeVA%2FV7zyof6fGkMNv2PrN8ZmB1hme%2BK%2BFVi4X6Q45vOPOXAUVuW4LhC%2B%2By3RfX50UbF6GKObvHQ4OxBwFq2wbKdMk%2FU8utjjbb3%2BpUVYi%2FzamhSy&X-Amz-Signature=dcc77cecc312791400e21e8fd531cfcf7dcaac24fd3342db05a0c41bd4b8d382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

