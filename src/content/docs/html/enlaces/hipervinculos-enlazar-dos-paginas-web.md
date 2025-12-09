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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVKD3QX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbRAnA90trHdHvQXXOkSsyaSyCV6j%2FlSe2TGZKJQ%2Fm9gIhAIYms7QSan99Bp8Bexg3agXpROvRdNGxRtge4C0ICfKJKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXe7uJpmtNvFohLYsq3APHHn4docrRcGouPmfGkwNaMJyUBGnlv659Reg%2BuOgbsW7N2Meg7s16hyb2Jme0oNRYU0WjblPrVCATa%2BE1uNMbQanG9CoLu92LocYok1pCrJyYnIH%2B2rl3B3Qnsy2cfHx43dgqhUq9hHyzXzofnJV06HfbIi2ZV8AsWgCsAVYjhzxZeYhKvH%2F2a02pgDr%2BAGgdOLRxuSu0xeEPXdDyKwwGDVKeBYkAsOdjwznHq%2FVigv%2FHFoxp0xsvuF9YC7KVB5plABZqNzwlIES2z4Ry%2BwJQS74rjPzD3oIKTNvCcFvQz%2FpMrEpXifjmsS5V3EuJDhclR%2Fh8EoEAnPKR4pTPeIPq7Q7xxApyZxYx3sBcPQDuSBxs8XTLzgseTrQqIh3v76mIYEcxl5hxyztTVW0Zih0GlanJutggx%2FErbJwt8bVn4qnFk3FxLAbPPHqFhqq1ro%2Fs4xrnYDfUvZBXr3lvEJkHfX5CRcF5TvffJuF8VWOEPrELVx0l4wObjU4nL35vO0He3YZk279nE3lfsHapNUWoxnYwMIzZx5za2IqitOGMDNnSqtt%2FkZMgGAuXQgPdnV9xap3vpV0%2Fm6L5RsWRt1i9RUtKnO18TcRQbNZ0Tj88OvFxxxrltXeH17gUKDCM6d3JBjqkAc2ge7Uum0x8O8RQPmMWt11aY%2BLhtp3EhwWiKpiZO75bEyaLoLxTDUgthQGQPqdirJ7n2ZDjApdj2DQsRczkZw9PkQHtQNcNHDyZRgrjZPu5tCUSuj7ZOn7%2BoFk%2F8IDJd6DPEzzR2PGuj%2BjHoQZVzMHhYDPxNHu0vvceAEeVMvuE%2BFipNACZOxNzMo71zJM233Dhp40CuOl8CLX%2Fwf%2B08UbXo3Qz&X-Amz-Signature=1d33d563fb3ba522708b942f2be07d312492d58a6537a99de3fb466c851739e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

