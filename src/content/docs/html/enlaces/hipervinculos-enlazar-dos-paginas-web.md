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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6OXUGQX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR3BOj4qwHvuFvy6OhCJvwKRZZHMjPTcYhY3nyj3EdkAiEAhaM4rbNFmN3MqD8q2mGDRGckHxpT977W5%2BirP1C4dbcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJAOyvIqjc8NmIqJSrcA4TfjDYHkuBAAPKr28vBhtLy4%2BoxVle%2BCKvX8gkMPliEBLcj7OB12eytoMdAxbgmgDwsx8bfjB4tyg4E%2FDihVjx0Guuyi3WmVEOJKtEy5FU1O7%2F%2BgQshHj8n09jZyBCyYGsD4TLrzCyHFwskhQ5mcFrZhHSGorlQ2%2BHUD769tiou6e3Ua%2BlZu35EZ0uWSdakLd0adeIOVJ46Mgynj%2FmT1JuRLN3gZTbnZjH%2F6%2FseDtLJT7eI%2BazG3uUFJQLk7bbGNMU71Mpq0WN3nTLIjjbm%2BcCRs4uXKsni2A%2B35pRTFdAfT1jsypEzeJdnZQmOixt%2F4o1lycWdr0g2XPGjH8NRjvVrCmigk8fT23CidyVkxaHVv7CeqvjvV0Pz2t7WTCMs85CKrfpt9doCfAInEKwpfwcsPVD36RccopO7pejPK9r%2FCiL9dv8GO39dorQ3iFHk1B1fis2bv6arArRAJVU04LGc4AVukqKB79kfGVUOcsXvNAbJ%2F5MxWadn6q3jSBP2lE%2Bjgf4x0eSEtFw8lDLKaP1pHsEil1z1pUwi0IhwFJaGpc75eXpHhXbtsBGVfE1piDcodOtQxPtoOmVo9L%2FKD3ulxT6v1f75GoL2jxFsewq%2ByLs8tE2ls6MAqleXMO6j1MkGOqUB1Ux8D9JK0Pkblc%2FHAjYL5w3r5h7GoWILPUlNxeEAIMvSJmTfwQrl0%2FAEwn3UtgA%2FrVEra26CyySdeiUWZZiwV1ZFinqgSPwqT%2F%2FUO2i%2BRWHrV6e%2BHVKKE%2BE8%2BrHmT7g5zACdfsIdBFsPD9awoGNHWb46vPcu3ETv4N%2FAzASgBi0MxGOq3Rk9hagQPU7Jy1DF3hYXOzW3z2dTwaP6l06qqLkX%2BMQx&X-Amz-Signature=4479e76a8e543c251bb2133ae38c54790564af00e4c008d4d8d23cf5ad3a25ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

