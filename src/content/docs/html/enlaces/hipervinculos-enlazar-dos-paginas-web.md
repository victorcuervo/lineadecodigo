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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLLOCYY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVb%2FS7Un55%2B54BUTy7Ha6F4VP2vFKb4tSmXXIiJwEIBAiBD4%2Bi%2B7TuRHdkffXkkA2nFGqRTKZzqVa%2FD7QWPZh04qCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiACGXmrRfLpbuWnHKtwDAbTHHsgdMLX3auzbYXweToe15qFMregHvv%2BP9H0R%2FFtry2kO%2FwDVq187FMPfmsLgoRQvfwXFpOV%2BK42um56HRsX8U0wensVsN5EfbSkRYg%2F7x4g97sayaauGKhw8w2zvioy%2Fw1EOiLXWjoH5%2B2lifkTI%2FxsPQGuJLjqmttfLF8PN46Z4U%2FsHQPdV%2FamMAriH1gzxyx1m4YKz2NltNutEaRlDpydqQpcb1S76gPp%2FhEauyuxdEbY3hQJmWm16BC9rlDQa%2BeJIxb4scBXwIqgPGB1fUPBLb4je3UbHT0Bu%2FZUUtDT%2F3pxbMXPlLAR1bI8e%2FGxU71pqwXgy9pv9Fxj2Hj8bP9XEJpNg2px4QqEVzRRkaK%2F4T%2FJ6TL%2FNK5e3ujK8i1WE%2BkDGd75whRvB4zTBNMXuu%2Fj1wadPEEE737BOxI0BTdUpUoLjJfjdrSwrHU5xWe0i0VLskvVklFnLArF7aC8YB31i3Odn6EgpK99SSaK%2FgCwe4kizelqYwy%2BzR5%2FyLaFPe%2B7CINO%2BYesrpJ9bhewisxDU0sn%2FfcG3hzVAJ4g5xJIzLnSmnCDNLduuP3F7yvAMNfNh%2BeEOXDMxl8n1nAILXbV0X6XKqMSaH%2FQr%2F0r4SCjWHS1Pz0BJd5gwl6DUyQY6pgFiV9Ok6qivg5mMX4h53vze6J0C%2BavAgZ%2BrdEBvzmaSaBS5yjwuPYSDArAwCxHEGUvrlqjuvEYt%2FKh9zOrBFX%2FyWHDAp1%2FTtfo7lIgUqTrf9H4Zlvh33CvcQpKtBWG28PNbjXxiiigxw39PhmTtstdF6StZHAJCd%2FDcf5nleiruhejq77WW5YXMPI8Uoh9lsLUQmx%2Fzw86sMSQYxRCR7tV9dr2TeI%2F9&X-Amz-Signature=4bbf221d9ebb48ffea2025262ba055363f33b26b30ef3eba403e6fb4c92c4678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

