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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAHE2FR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxVJnABvBk3ABgCwoCEaJ54xBXx%2Fzb4khYnIzJ%2FeHSgIhANYbPtgugCLSn06a7fIeyyhPjd0pMbNPzgX5R0N9ETORKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysDs9Z8Zz09kFMsTIq3AOIbZSzQxdMciQA399udyPZTBwd7UNPw3tPJcO42Z9rK7%2BbSTSn2he16OuwLNo3ytz%2F7%2B7zCw%2FKU24wqBsBo6yM3aNYtela4FHv2XfuVfhzzo2mboqi88EC3VlheqYaelb6z8L%2FychpW2htZvuiOubnAF1KtG9tJbffeLbPCAL63JdmPqjAjeRoPP%2B48zAq1kO2nzwNToWawZPhwr3FuAtS1JYPosFEMBMePocS4K8A1%2Ff6eAHCY1dZKB6tGZPM0k%2BnEcvpduSPFBw%2B%2BXXIvW0g1NEulbyc12qDnznJYlFV2gECRVqEAqariCAtfZKeG6IUuqhuknPFAEgMwAljMRz7rGNjPk5Vtq2f6kCCUz1rN%2F0MPoKR3Eyv0Uf1aIK5rX1LpHmffn3%2BQe5OjY4H5UuaMLeTzWXHRZOSqSms7Kglc15c88BHLi3ws9U6%2FO5TjPoQuLp6gKGDJRIZFA1lQ2n1XwUXv6FnxtJ8BGY3XeE0edmotcPzdOiH%2F9jvKC0sfFWa5%2FY6j3%2FYEZanS%2FhTm4PN93z%2F%2BzQZv3ThGkWM1dtUwvmu8gMWq%2FNObtySx4xrsYfCuqO5pujDw%2B%2ByyrbPdhhslGnDvoRR2vGpI35uWvTX4RfUPTlMFuT6%2Bhkx5TCN3dzJBjqkAd1%2FwG0LuxC4p0uAuNKJEmz%2BPP9WCk9CA1bAmVCNkpGYG6kWcoRRu1SonyTBD9U28%2FOZZszgQZleiwoZxaEycj1MRiNDl0Lqw2hBMFWTJmZE3D8MJY3UdWAzaa5Oee1KtoBfRKbHcsdOQclwPUx9ALkHr7lvRbSJ%2F1brAmkttsR%2FED3jFW2d%2FzFDJZA8%2Bo%2Bxamf1xP0JELVqQeeuWW14PPjKXixF&X-Amz-Signature=27c5471033e45d8a11cd1798d37869c5ccc927949d95de80d924d72564c23447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

