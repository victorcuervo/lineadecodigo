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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q225YPNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuZSu14zNm8cmNaDep5%2FIdU7P2a%2B28LH%2FQ9rCYc8BODAIgJwbLOnYZUzrRvlyLRm1dblFOI750fdBgxUe5RTmCHxAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbXVuFQ4u9o4w6ggyrcAzxEJkic9nVM4FOAbKMS6r5u1N0hemsev1yCsk9Th84lp6tvSQfR1tfM%2FnwkeH1GlGbda2rTi2cXqATmGPbbA8b214u5olVQpmqjoB%2B3cO6ef%2Bk5QUrH3TtgFzhvWN9X74hV2sUHQlozco6SaXgeDF%2BjOzyR%2BMBjvBYmGhHGl7rPqhVlllOK%2FiVWK7fxghBRvN%2FgBXzuXjNZDrTwRghlIkxe1Cw3XmXbHLxlO8xcuA%2BN52WN3ilgy7EAKQPo1lIIsa6HxrcQ9OwqZIATMOL%2F6QPjC4IVGLYLE3nDTgBl2WRkTorW4FErqOMcGwI98qibV%2F8a4xBgDfKLM45mZ7juQN%2FnYS81Zn6aspUt59EPdvlKOqNJk6bx23OtAPgTql8yvCiWDi8IvP%2FuH1oQ0F%2BwIosaVHWQnXgMSVQpzLtHQ5y831JHFzbMpaO4KHZz4aKoWG77MdoFcNFbAiSGnB%2BOTk6aJMnfnCsJ%2B8QIQbusw%2FTFQQqfSf%2B3f7fqKGb%2FDUKN1WPkUSmPaAbs%2BhB%2FTbXI4uGMSPffW3iIFfbqmPlF6EUKvY70%2BzVWGITba1JSdzbSMPbqmtPQFfLZLaCvDge67SXthtQpjR5%2B%2BuEPyjLNlk2LF3sbqTIbz4Gz19dBMPnt2ckGOqUB5Jb03qJCXRWap4mCLKRCRGGcT1aoRQNKAfNxxZvv7FY1ABRRBg9rpOJaKStAD5ATjx1FTxhWBhNg2rykVjRBJNTMcllZjnNzmJBjOsDPb%2Fzum2E%2BwUDXbp1pKQjx4%2BdXDeZJziX0do5vKiClH5e1TB7DS%2BOAU1OEcLdi1Pui%2FqPxB8wa5dNAMH1i79zghKRFnd4HA4fBZElG80ho%2BI9TOcs6VCWk&X-Amz-Signature=f0379281d8d3df12d67476ac2928a76119cf809458ea8ec2343a2bebe5362e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

