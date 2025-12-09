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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCSIFRB2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDeP6F7%2FVYEKmswdLAzHCcpJgyJJ2E0ELeVuCD%2BA4f7gIhAOlBw2YqhKinvlrh8HhtPBpbR27budKZAA%2FUxNAGnjDkKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpYV7XxPeXPfPWVfUq3AMbmHQod1r9gRvWJnRikgtp99C1oMKB4djUmxcIHuZcYkfBld43Wn2HtuQ0bs20dSPPl5qP8zotmk%2BOwlAhoiDV9pLl2aZBnaqv2t%2FR%2FowYN%2BcleFtjp%2BtGD2jWGqdTvquTpaRzA1PRob854x5K9HDUPMtnIVUlrPvQPMePt8npkX7lfE6Or4FIFpNX5qK9g38HplT4TCqrhxdtd0nk%2F%2FhWIyv2%2BU16IlWFPWAx0JFNaiSZW%2B99ze6tLbkNGp%2BO%2FGQQNJRyfkZ3ssQYjdXMsXr0%2BW2RGCwoXccQXVm%2BWDf2%2FFRP%2BQx1cKsRrMRFipyboowWKEzDcEqXa8PaBcCu1HgvAv33c6sPfUibTQSj1WaIMk4XNVVRQdTENIsNw2%2FEhTlfZ%2BKmocNACVUMDsXqhGTm1tm7ucUVi1zB0z48SduxekXtpFPv6odheI6zIkxPwVMqsiG%2BRAENVuWQ%2BJKyJzUnNP%2B%2BshZo3PrfS1zeJetk0HEZMFNw9H8ahElBi7ZOLqrXRWnUksXi48jQCi2pIKBZzbwkw25vvEhxkqeuV4iA2M%2BU8SQp75TggttgP9KIUIL%2FvbYpzbVFZPTPeXP4%2Fk5HJjzZ4DkZztQQ70MmGgvqZkfYg6Ycfr58XnTXsTDtn%2BLJBjqkAQBWLsEu7Jp20ZxgRVOm9ph%2FfFoBb8%2FwEPsJYiH3ypyavNDWjMgSmnOlnJRsjdf641OvIzzbuUBYuL8EkNaCu2bAANE2Xq8X%2Blr9Af1Ix32UOeJoJWMezUXD1nsSz9cuONoti3IaYz%2FhFojuVAPnFVkTxE%2FXmY3NqnrXYt%2BslZuRZxkp9SMVOeHyDgwrv7U%2F7PfEIMDxdbvRbHyfPa%2FhmLdxMFeF&X-Amz-Signature=32085a134de2af508d11af7b2b5944d1bb4d10d91e14e6de5fcf8adf0f2df4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

