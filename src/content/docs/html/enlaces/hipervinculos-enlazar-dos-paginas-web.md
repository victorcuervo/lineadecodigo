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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NOZ3RV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU9gZzR3rJio7jSrrwCVC7RP%2FdUDoDal%2FCGPu8U7%2BxwAiEA%2BmacIkxfD7nzc7yBkLk%2BamWovUIb5Luq6Tj3NsGoPkAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBL0gSZYohAF6IokCrcA%2FseoqR4CiSU6ti0X0wCiJ1iyHL%2B%2BpdJrVJAQmewxH%2B3%2BV00zPCq02mdmWWz3uxNXyhGAl3wtg8Cpmg6%2B9WSpxQ2l8NtX0hhj48kENJWX53sDHZDxSRerySeLPdGTHwWBm62eMfyPPg8kQDU3vrfYml3lJN0mLB%2FUA8jN3wW9hC8JsbbjkOZuCXLDqZX3s4ejftL15AOK95koxMqnvL6cv4YG3d8knTBBWImMHX5YAKM%2FhHbP0mrdXksXNT0iF5mZmEUiOLmemzul7ylEifojsyjtgHg9GwedTszdr4xtIoL80ChxKepbsybxqOggufrVlo4K2mUVWx7BX5fjXRstGEML9Q25J0H4fIJMFEAP8sF6nV%2BdFFnbCqQLbnlBBh3vvbeybYi%2Fk2ECIbRv01ZVuL3iRfTTHde0eLfz1t5gOp9X9zlIfhC8VikaY91KJnSkzxdcZLBgn%2FtC9rg6aW4IoXJDl6ypLzxZu5u9trtLwiMszuPjVaTEomLzzO4AxX%2FxaLGZOHqyQ3LVmrfhsj1%2BWYu8e%2BNb2Dt%2BalIjU0e%2BL13ePZDtaEk8LZLNLJtn5YIXRlzfMrCSYeJX9NS3P1NbrZ5xjIetuWaUwO5qxIucpHWY%2FnI7bKSvIonTYI3MLya1ckGOqUBGjUR0Zp2Xj13Bh0U3ZhFvqiegi6798WAahKuq89EAbzKAnuLE4rVwWLutRcn1KzQRlgWYz343%2BaEBXE4VYc04aP8wjnJQRIXSvAd5MZk%2F2EkACxHVoRdbFKc9hKn%2FE2H84vU6bPjseU9fYaORCCXxBTHqhzZhiJZSyUhTKhESe%2B7VPxWwTSIiIzkq%2FKQuyPxGNVPWOeAtCzXnRrfV7aMUj%2FTtO16&X-Amz-Signature=e32aa8f2816398144f773a2c6ed9eb9bd17159bbd2dccf4e3725e6da9e5e8d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

