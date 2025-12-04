---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YOMEAT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDUiNyhwu9Bt4DX%2BixsFwDvRqq1SYSGOW4AGO0i0O2g0AiBVULKQsyonitbw1BJr%2B8UFX7%2BMJOBqisgmj3ss7Wf2bSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMA8LcRP97mWC2OdqnKtwDsH2RAJI%2Bj02%2Bwn4TlyRVNJVE4ctRdgAA2pPndn9ki1fQ6ERjfPNG%2Fdalme0LfGJWukshSG6uP%2FSdj%2FyR97wNVdueCt7W%2FsbyJM5uE6PWjvXWSSv77LUGYAvrTcTDdAfHf2CCtXwgNN1AKfFt6gwSWeYBefBIeJi8Zjf88uJn9WTYyN12k3Lc8XyP1gqgcW8shsPQIZ1WHxlPVvAbgWyJU4Tkt2f1jOJ36ibAw0dT%2FI8YpvFKca0T0B1Ey9xNipGFKvEQMiI0NgS4WKZreZ3pNhvjVfc3dvSRzyMk%2BVdmkhLNLpQ5SXBZIy6YsWeMjvna8JQ%2BZ9LtirsBpSA8ox4KRpkXUR52mj9T3D6cs6qQhzr%2BJfMavEkapGq43WfZjhg%2BAYw%2ByiApB5y3KBgFUB5EhM8B7srqaYFapxw5cmxfFE3uqlAY6nWq4pbF68Q%2FRGOizBo5OtG%2FoMQf1DoLNMHU6S3wjwr5NmWruOI9AyDcbwh%2FpdlXsR54VU1akgBzmT%2Fe5GhBO%2FI4tgrRDcagA5BqpTjlsI7HZszCN1SMuHgJwslVfXLLPsioVy%2B86L6O%2BIdVrHMewk5jlong9KjFRX5%2FCGs%2BG20uXf%2B9R%2FMSS3nTdgaT0SvskshuY1RoX3MwiMrFyQY6pgE7P7r6bEqoF6%2BfhGsy5pzvNLDW2igFsEnJ8f0tCUFx13AmGCI0%2BDw1pmn89FvcPjV9nLZUFPi9JJQBqlgDINHfs%2BKJyuoM6e%2F7KFshAjNjaDx1pXHwsm12h%2FboJF1N2Gc94glrbWaXs8kvBVmj%2B7WaM1NRf%2FLL2xP807TLhe7W8mG0i2VvgHUBXb0iayJigk8SxlcZiDGGxR5i4M06zfUNj756GJW9&X-Amz-Signature=f0f078f66ae28e1ad00f20c2c8bdc20ea4acceb58cc369287b28125dfce65308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

