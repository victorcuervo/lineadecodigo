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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX4XYXZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvYFQ%2FgVNscAaNaFTyR9DFGhMSOI8IbdPRhpNgGlSINAiEAjM180ZpwyW%2BuCmUym%2FIZCDxUjxCcgHyJERxxI6IteWEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAZlShvcfPj0HlgzyrcA2ZAjZbeviDi2AB71GmgXS4Av%2Fle%2F1cDEj1lQdiUSA3dyklWVzvbSD1rswkfmtUA126qFAM7exBUJlZ%2BWFQ4WaoW8IUj8w1a%2BsYOhmAX7gm51BqLs8N8AxXIkkDg02bMEJvjNp4gGgkS3fVz4u8W7jXqKb3JS1AQGAjTpMT%2Fkxp%2Fvh6pV4VcaIYkQPgKs4oAixEyX5tx5Z7y3cHBw4Jb4OxG7P5HpfCrBf5MSMz8nOgdBM%2B0mCJ0Qc2QjmizviASZar8uXqc4ULOX707SOZGQgJCYx8wEElCLWbAfbFsHsfdwrDfuTCA4LYI4VurfZX2dHRnsTo0UhFbUN6UMfdKD29I9eOSBezggFRh84dgbeBDQ4iMR%2BuE9HDDnfiAk9By12wo8ARIeyLMSsvf8fT9Mc1FOyN7fSaQ9EDarYR3iJRO8zotbVkfz8tg7vkS4vGoqALWykG6jjjZJenJs97NOp0IfTYkEVNoHmntK1eAcrrZF8PtOzfkXVe1WTzOlFE1HTQdsk6YuKKKVLxWMGIM43AnlALDkA9UOJHiJ215Dobfu4eX00HWeVJMhGv6RGmRBgMwln5yXMrOi3HUOYlfV14pFbXoLpjIb68VaTqOzLaHf%2FHL8zVUaO37iUBhMNvJ3skGOqUBitKwaux94B5mMcMJXplE5F9zSAR2gdpXYsdn6rtzOjuxEEpQiS9qbVOZ2sb1f05PK11eZtmWm7QR4GEOhqKGoWr3iM1j1GpT8HhM1fUcjsHsErhC3z4ZsO%2F37zgRPzExaBraal475%2FRUxhiX%2BnLCtN1L3%2BDhBHG7hzlwk1UhQDM5eLG3Oyj59fqJD5AlEbt9qu1Rxlq8xsW%2FExAgiDAnBDiEn%2BHr&X-Amz-Signature=befc8b8ebafaa75cbafe60c06d5f540aee4bf413d76d5834a1377c5a5b2e9a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

