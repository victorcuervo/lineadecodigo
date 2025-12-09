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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGNJBHJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJWyH%2BkKmpEUhTsh2Ao6V3P%2F4rHJc0S2LexQbsFdKhhwIhAJRrB%2Bkowfc0SOhZZSk8dN4jYANY4To0G%2F36y6fyxQL8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyClnlEk3DQds4HEYgq3APQydPxiGuQAXg%2BNVRWp05UmoU2ynhA4%2FqkFM4upEf3qGzCAFy%2BynrKGgQc%2FM%2BhZd0%2BhlxdfT2ZXE4TvniZshDHGCJD1LA8nrD%2Fye%2FiTmjap4wQ34FiznWqQq35OIw9r5kHNrmoyzYUmBeYg4oPG%2FSnADZwut3GAdDqDsQfYGDpvsunJyrMzyAjCGLHkybsAR6Cv1dE13gnmLgr2tebGLGhASTxDXXQjy1dsgYO67E7SKPowpOnkGDaNgp4x9lFASkvXsQnk1virIgm3DOW7QQi%2F4QQbf8rUx13TXjc27VYm6zPWWQzlmao%2BAof0egBKHHGaMLuEE88pPGDbP%2BkFLHKmYVfgR4L%2BHe3v6%2FBKcDr0DguBdnvz%2BTxe30BytEmIoayyX3LuMeJOrqP6g1W6idqi%2BkXYAOXYEKRUBYZroEqELPV%2BgJbVK8hChm9EU%2FX%2Fe5oo7Dl4V5kBSagPVAWCKPBefO5aCaRQ4mre5tV6a5Nx%2FComxU3yPsbB0wiHe7iSPdFnPv8n3jyKwLbzerJNJHI84HmeHp3W4O1O%2FMPAkeo71DLnXUErYcxcrc0UinDcdTuNCfQoEz%2Bce54swoJC8tG%2FvL4bCkCUrjdNGFDI%2FuvIL7psEZxeHenuki6XzDW3eDJBjqkAYQvQ3bZ6YdJfR6E0YXBLDsh6y9A69epYQ%2FovLh19toFm2cxyUVJth30OcmpJ6RZuPGf8elZRzsd6S4m3BzSaqUoT72km4i92lhIXBOv4xWFN7WsrEHtnsijDM%2FqgiLK6RoRMOeIPDbiwUA6C83SWO%2BuCjJ13mA13GCP5VCijBa7aFMm720zFM%2BL5Vv4SBWDSDtfLKMnax1ZjsOjfZUR5nmQuJg4&X-Amz-Signature=49ff2bcf49e5abc5fd09fe406ec5847ce8a1481af200f3bbbbad97782222f888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

