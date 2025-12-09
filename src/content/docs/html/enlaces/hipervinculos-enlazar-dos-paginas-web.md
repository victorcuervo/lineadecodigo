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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUO5OT3N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWpQC8hu%2FxpccEav4QM0jPqt82yp%2Bx0aFymVRH5BNsAIhAN%2FQiDo0zao928VOfL1AGG3WK%2B8SehDbKuvV9pOBQMNEKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEjG9lELd1z1hvkxgq3AODSnU472eM2RfCmfM7ijV0%2BOBjHL8OBcxxwVV0MHNh3BcRPkarUV6DO%2BjfgkYtLBLxq8R70GwIRU9DB3oVFoj8YUh4gYVQF9LP8Y1171IB%2BUtmDIAZfGYeVIVLD5w%2B0d7Y6F3k%2FjHztZo7nrMsE%2Bd5ve78Ebeoa%2BDRs1gTs%2BANgOsEdOTlorfC81t3ZOY6FJr3%2ByBdBGZCvJlT5WVXn8D0Yms3QN1ykTwC24spXo9w3MCcUA0Gz7iXtyQCbc2C3SdvD5TGS%2B5T7Hco5G%2Bma%2F6yEa%2BoK%2Fify6%2B78Iy7ve2RmjMxNiR3qY7SpufGA3CZzoJ5dPXLeHX885H5bPOwVaAJ20F7JVLX%2FxgJsU%2B2glXyeGUPDuuoU%2BryaKWpW0B1pcZ1Ifa0DjcXY3ivWt5%2FpG6g0J1zPEgLQxxTPTMBYi%2FPa0LvvzvNSOMBSLtd9rhCd%2FBXuvgGFui7mPdQYzaKYSXGVTX1z87GwLcGrfHXnVUZlWtulhfu0Eb1nJto0sdTy5bIQYvcS%2F%2Bd7uDdybliftD2o0hoTv59hhO4wuZdaVTj6At20v00D6J4CoVciJuHFBs9SlZD7s12w8tQzUb9shjxgs2QeRRFQvKpA5sj5oaYr80%2Fh9I2kcG5yDyOejCq3uHJBjqkASlCypqH550pwFk%2FnHwqzPMLF7v3xBrqUOxzSSkCBhY9ZiLg%2FIHAJNjyENj8l3X3WtXR0tDfzgR2A2atrNmCLNrfi%2FhYHUXpYS%2BzSG4GUwnO1nFsSeRKU1Bsxyg6FySmEY4jC59lE%2FrTLDSNLN3hT2wqIFzc3AIGHxdXUhCU3053vkWotRFcWqmmQZrcl1zz1kVBR3YtIpNWLFvJeuNObLpLA7hj&X-Amz-Signature=da54ec92770e8a41973ab0aa9a66e6f18ff88b257e0ade695630f7d85ed4f4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

