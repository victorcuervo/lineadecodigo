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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FNTHF7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqa145m7QpiQgq%2B5e7i1jJCJ%2BCd8Rk%2B2O52AQiHhPX8AiANN%2BAyn4aleUQj6OdfwZxRBTK6a4cMRT4J%2FqeeUBnFJyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMuFqZtO4gcMAGtQsUKtwDqg9vD825xWIeP0IUFIQUIH1TlxEn%2Bn8ygjM4pTMvFRKRdTeB2uAe7p6ybt5R25dyORDXSJOBfmWc7zWPX3H%2BBznbAkf0Kw1zkSK%2FIan7U8mM4x2imiBP8hBhehL2zTP7FnTne1J4rQOi1SXas%2BqJUW1e0juZLsA3oFwoVqI10VRBiaZyTXgAEQs0zLAzp7aXLRfN3lzsFs6QJUt6vgAx5YTTZoNeEjS2SRIUO708O0kQyrkhtylPLPyTDEavzhDtz9KOlIrPlQ2x2MwtjxZPyAQW1bnefPIFSVb46wiHHrlmfiCnNyTMmkB%2BobztN9pD2VOKQR10zHWCkaafwC%2BzrY6%2BVz2Olr6%2BxgWe4EHCTITD2UHrjAWJUZtU0ork14M4M1FvgGha%2Bn8QwiXsLVLu1SGkAL194vAW%2FhEgT5Voz49bSeMjVWQcGwcecHxq1iVqGY%2FaznKw9oYznflmBWy7ST0UTyeoUQjOzosaIW4RvPzHmodrd1Sp2qpX%2F8PxLhvJmzK1wCER8TZHtQ6S5TIpOwTCMS%2F2%2FzzU7cmfKBiaXpGlXutI4SLXFEVwzdmq%2FBFRZId19TaTy4ze1xoKbzi2JOQxmvJ9HmgCgk3EbcDl4jjL6s54kpu8TEdIW%2Fwwx6fOyQY6pgEm4phpJQsIiMGhp6WmyOJTFNm7loPDZv7XY9txHtVErVn%2FrpgpxgXtIrz7nGJgwKADis%2BcT3OySWF%2FFu3%2FuWHUCBBJeIltQ0K%2FVwehPEOWPIScBqZE8KbJepxKFe2G64wU2U%2BQuNPYM5pCWsHrOckjsqO9mCuBTDIaBAai%2FjLyNXVeH3b1ZAFR8lRfx%2BSlY72sCGIoHiUFkM40cIJIFWSG9CsBlstd&X-Amz-Signature=c24277ff7d688842fd70aef7db56887fc53eaad49a8bd100889822a5657a183f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

