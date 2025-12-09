---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHXJ25HB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExUeGmGSM%2Bm1uNCldceCgJT5VZdo%2FrrjruuEEYufdoVAiEA3qfyg9YRhsjhbc0mLG3WQx6Zq0Skf5t4eirnlHGDTogqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0O9px9EWyZOzMwoCrcAxqHWO0lF5ANgzpvBkgEMNv4tCQbufwTVFXB9ykjjqI6ZN%2BxyCkrxbPFuZXvVCQHhqo%2BTg8qtXEDX8Ud98nAUxnoEmfU7W9eRSU9oQIbueQmKSq8Au%2FE50HbYrX44Jwuy0PKFVkukh0yl75zDhrPJ%2FSosx%2B7XK3MR8a%2FsnPf5IwZj4k8hwo3RVfmb%2BNJSIbsCDZR3f5MydakDE8amk6qQ0JpFPvTcNIy0G3C32Qk3aBJmB4TtQyQeTrlDk924kCQGl3LAh6F2t4%2B1ZDmJC5Sbb3gDyzN%2BNeC7vP%2FeyeZAn0QAIRmsHUf07OKZb4diwZaIkjB5HzVD2hMVmJ501xvG6XC15uQWLaGFxXdzvKoRQqq9P7esR3N6II1ou6uArU0LBkAtLcKD9IIQ%2BznyT4dWH87JAtk118gYGkdwhQSLVQMHogiLICNPwWlkhtpdpuZJIM3HE2pv6hh%2FNMKIXBm3X%2B1I5dRxCGCP6BPEgidkEBltpW499Ky1WZHjkpYN3sYVFISOf1Cp38v4OLlSmamC6jeeApgz2vydtlfZEYO9tMb9Ck4EC9vqnfNBPX%2FzvdPksFjjkK4IblcLI0VBC3GkJEjocpN7eSx9famlR8kstrUkds%2BitGiA8mFAAQhMO6X4ckGOqUBa12c1Ylj0hOXrUsUsUfX3RNYkNervQIOvmwLQMU5HDvze%2BubNG%2BP1F6aT9PYiYn7flz1Tr11nm7IljT%2F%2BqdM%2FDUYckdjjdLOXffF6dneej2EQlLcdYK9%2BW7iHbvoALfEtyyoZDU399bxE%2BmPhTrienksthydHknqnxSQMlAGdxZOztvhQpJajY%2BnZ1wYcmlRWlM1miR8qcF1m6AC8nR7d6R9pa3g&X-Amz-Signature=78055676801e16e7cb5d0cf0e7434c64c4c8fa8383c150bf889d0d9238d6a558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

