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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DISCEQD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPQMBEay%2BS0oIoPQBZqVkyupsYebe4SLP74G7PteqqAIgFvsOC5GtAgNtGdwmCmhKKterS0oX7%2BSct0oBK4%2BwZ0EqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BA9JR6nFgcaVe2xircAxMzwOgjoOxzsS9V5xVRvcPCsuoBSUmne5by5mqDuztemNP1MYdq7trseV5oKlPZsmQk5Iu9sP%2FTy8196R07ykuoa1Nor%2FyAGdlJ1%2FTDKkvUf9Xpe6wJno20UsgE0DC2sSaVGhraV9r8ce0m5sr4tu0%2FFSSR1astLYdmisOn5cNYLo7xUhbfpzWvCBvMdMZUR0S7hP5EGva8%2BUZX9m9qIkYcfHwGojC4%2FZOvhJoVrdBTk5CJcX%2FQqb%2FPygolkl3EQY9S%2FdXqAo4t8fbteiIQgV3QiRonqPkNnPMrGZ%2FKs8OnF6NvEIWCPiKDNe1LbC9Urxv1WVto5KV%2BFTZPgFGCOaPgTytXdWIAS9bPSeVk0BFSAuDdCsIK0EWHJQ4v1HB8XWTu6JtCF6ppWlmaGl%2FhQ7dfiUrvfEUa0Y61HHfeNrbUKpYOEsd%2Fa5l6vDFBZYLHBAR1okSFRPtfArVhw10fxKluWNiMQrhYCBHHzhKSXbOhAzWRfIlYwJ7%2FoWpiUIDPg9XIBGXv%2BeV9kh4UC9bJxrNJy2%2B9A9glw0OaErSvUVG8%2BsIh0Vsy0lTPCkZP9pItNNfBKoEAobtikwL3%2FBFQX8zhwJZZHlNkDAPKR%2BPYZKfLZTqB2qGaQSX7qGPAMIy84ckGOqUBN28O68M9J5goncm60rceBje5uSyBni%2BDw3Vr%2Fnz9e7daMUk8O2bg6ogCw74ii6NJgSa9bxpkTh6gCgDcn8hpI0qTlWXqdJNskzMhcurIEqvn%2BnsZneS7DaBgRoylRi%2BrRCdlchDX%2B%2FcEoyvAYHPST8WqSetCqnCvQhyhJrIRf1CMtBuOGE4T6%2FgK3pkk0LV1ZK4JGfCJqzRyUCRNHhM6RD4R8CHl&X-Amz-Signature=57585577877a3eac0cecb535e211b29280d39a6155c087e68b10eb4da755fe31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

