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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVC2NUJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChzZjf3MLcheeshDFWbE%2F2wxYNhaze%2BkCLqJCQnWgrvAIgDP7KNvs5HOWr041Sh1X02Xaf92Ts0VFOaZ93sP0KtS0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAX26yif8141t3KRCrcA5MAULnIpB1iI%2FmKHMTxTPWE4YFgf%2BobKEs5vS7gKE7qMhHy2T36dz9oS9vgfaqulKzrwFbffIDXHv%2B%2BnrYMay1RsDXFOTHA09zM2hchNdsDERCcqWpP%2BjHagXinY%2BSWFCE4YHvlGT3qLOcVEKI12oytrAuzRvNjRTBA4p1JogAHdiKip6VsvnABDYHHKLZLN9qckdm4QA2dG%2FDuQ9%2B4cnCf%2FO59MBmPoHtNkcBrcb2pYjt%2BTiN7OJMV2DfXWETkeh7xd7oxoShrhWnBEjX4aZ9UTlLeRrMkd7ir6RpVmmCxLZ1As6OYnIoqVcyK0a7ms9OPzZHWuW5YcrF67i2BMQI1%2BAclTxCont9yKsLCFSRQ3%2BqjG1GGI5vICFwb6Wb%2FF2%2Bci2UY4rwe8IpUo%2FHC921kUw9kctsSXcGv7Il%2Biv4L7sQ5EIox7hgrosWVBwLLCbtgbpSAlRe2rNRt3OTMbI2QcMb%2BsmCOifCHizbddJf7%2F83kmcQEqtDSZdGKtgMypXKZvU6atpvkUf062Mfu%2FoKmy3SIpjdv54BOk9mQ0advb0MY33%2Bklf7RnhNU3kT0fQij8rzp3%2F%2FogJdcDQQ3oo0w00Ao%2BgsMxlUp52FKEeC8V2118UJXYltBeMIbMLff4ckGOqUBq9eToXyeRiaSG4WGNPd3sf3jxT%2Bv9gt9kkJQAhik4KKfbb560%2F32tehYquHxtsAknX91sCl0UuAqLepGrPt03OcbqLvkKpElgQw7f5qRbvfRhAVa8GhmkWRahTuHyEiv8bE8EaQi3LA67edi4JbCKrfwucFgOm%2FilzgjTra0DrBZgZPnIppoW9ZKmgBYtZ9hqUw%2FlXf93R9AFqVEBO3aieK13V8N&X-Amz-Signature=c34352be09eb8bd729f8a028d955cf9a5c437a2b35916571aa5a842bb4b74db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

