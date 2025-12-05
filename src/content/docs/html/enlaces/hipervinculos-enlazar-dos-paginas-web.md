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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FD43EBD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2B9Cckdm2Zg5%2BxgQpPONFDLyKcYtdoWxnXoV2FIAgLwIgZo7JPIgYnK8Bkcqac8s18SIdi9X0NHOEfsLXyMgg2P8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKUtpErapUvjDRNCNSrcAysoCMSjbZi1zDbx%2B2cp8i0ncTiFiBBacrS53qZJNvqKu14tg7sVO%2FlUDHxRLJe%2F9A0uYr6pqpDD%2BsToLjaMjUQd7hRx8gZowkRrQ2DzAkI9G7KRqwr9bM%2BRS8YaCYl%2BmDLJyMLWPDXpb0%2FiUMZvaYrI7JldVfhYVPYXmxxNK04aPg4eZD1U5SNNZZ%2Fh%2Fhxzxj3aBQK7Sh8%2F5meEm5D9ehWGOOsgQpxuZVVyITLLvxMGe22fDysnOGVCd3VKXSM2qdy4GnU0BoWM2lnbtBrODG3Kmb75DbCdFZ7HUfCgx%2FcnflmX1A307IDH7SDTkhHxPdDJbXVa5ENXMoQlNvj%2BZZ2qWU1Km1JKnjZcCmfYNYcteiLRn%2FhdLEvuhivAB9s%2BjPsePCojDntzIh%2FDVPmolXq2gjoDdjU4E5QmNJct41yzHQCy3cH1F%2BZAUy8XdW2zKr0rkQV8lDEVhfaSAFW5XIAFWEQYPykm9AC7b042YzqKnwMVH8bQYGDPUP5%2BWkTUy8C54fwxgnohizFqf09usmGyP%2Bb9E%2F223JHUOgyUaj6Rf7xfBdxRHvUfwxjnQn%2FTGRxcG6DUWUfmRIdE84zzZ2jRAKDX%2FZysX0M0FdjDSgFxgWAyUMc3sQ3HGbJQMLqpyckGOqUBTcM2P6LFDo54ZDDLs%2FVP8%2BDklSUlqExTya5kVYw6KcBX0LVT4M2uGVTppu2xIIum6Pwa%2BADTa8UbWVVRPPIH4xh3wakWY9IGxUgNJkfL5YAH1Y67trKgW45uPkmVAn4Bpbg9PdX8Cpcv0USLE7M5rXB1amKCo5h%2FULMgtUEvZs5AGgdVZTnyaQuoXgag7gw81ift3krl7kQW62MoYoOpxiLk6UDg&X-Amz-Signature=c9c82a0b5e13cfcf861977ce6ccc1f53039991edb0486a37de2c88381d61b7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

