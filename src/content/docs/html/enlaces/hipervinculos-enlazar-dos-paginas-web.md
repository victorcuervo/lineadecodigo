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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBT6HGM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmQfq2j86PUn4YldduI3yWTCveKYwz%2Brefyyhxo7La%2BAiEAxMNS8vIjHtSJipBu2WB5Dsj%2F8l0FnqCGe7U0sxemkpUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPX453A8s1ODB0A6MCrcA7YSHbNLvwnVvucLMnWlSYWFAtSWsoBDwWdyL76zWv%2FymQ6LDOW6DpcjFRKi0vKZUHMvArgf3vELHH%2B3zcXTYqXu%2Br2bRQi3XjfhTAEos%2FeZI8HXjiPI5pBXRPUVNrvAFCiy6IrKWBH8kuOeQfmEnlP%2BaumX2A%2FiVyP7jPrY2NGFsSSZ%2BFTH2vORReqeMTvmd5WrRxt%2FOnEVvptZk%2Bcd7LB%2Fc1GNx%2FrpbejbZ0GzCypY7QwvhRyWirQYPL%2BA7CK5SSdN2%2B8H3TsZsVVqN3k95kc%2BzUgHnVeayfH5kTsWIrzwuo1Pox68Xt5r4ALNg2BFrPC%2BehpFeLQXZl2ZcbxzCot4DXpkcZ0St9D3ltFHKwiJ1po6nq4GKbHsrk30JOrv0ZyDp1arM4h2kUAAOvyADwO2R%2BGxoiv5q%2B5yHl%2BV6obTNscsxZCsFZQZp4p2UbcwgUiyqNzxVGolEJy7oiXt4GCz5aj1%2B%2Bc3gwco%2FEaCtkDQx4MJtGREdCxfgWEEn8yw1uBh9rsGhgJGSl2oNjGM1WeiJbpMg8dZ4KGyUYNwp2wZAfA%2F7PGcadz8wp4bQpeUSqupYxr5gGyxl9PQnC457iHwyDMMd44%2F5knEbIV5%2F01oQWzpTMU%2BHAOfTZrqMNn90skGOqUBTBUUd1ifjJ36aFJLYTLNDox9vpUVepC17wOj6J65uTMACXyaJAP5vp%2Bh%2BjA%2BypNZ6n8juUv87I1BAgEOBLud8MpJW1kZYR5DCkETHobZ0k0DFHimXmgY%2FdQ2ncD3GqzbHHht3Gn5XoWLupX1IhKk1zG8ED%2FCVhup4afBjcTsMslKK%2FrQ2P2yvoh2WMHQtnn6jjPCRKetLu1dDiO4Hhm0wueTMJnm&X-Amz-Signature=663709d16e1f538ab3867e7784058b480371480a7c257e29d7791edab09e6f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

