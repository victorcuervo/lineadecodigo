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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IMVFZH5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuOw4cRL%2BwSDWSa4Vd4yZcMH9nVjKNvkoeru86EQRA4AIgasEZC8MYJe4bLoGyyPALvx5%2BRnRsClm%2FsrCg2y9WLD4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5%2F10OtCFoxQoWbFircA0kjeC6E8GIjwFIV0Hgogkfc7nJx%2F0f%2BlSoothwQHbSRspMjl7Fy6PXe%2B%2BejIyxMq4VubZGGqaQpxHqyZMEulSpGUGwXZRBOcY7IVwWlzTP6Ow2mTjzTs61IY2TfaSOxcDYnMNdlq1RbUtRVoT7%2FqcyS8zdMPZ%2BgelxsH8D%2BAzA3BCnVq1z6cSpoBB1lzmqUx81nys0sBCqcekAqcUs7yAefmVroUdoJox8fX7pl%2FmCtI2KLTsaKYVkhnMAJIN3FQN6ev0PpNqyX9JfUxIQ8tsRc8OAZ%2FPwd4%2FlfCjPPe3AvVdJP8CILH15MsUjAtxW6ezCjUiKM41P%2Bsnc4hWsJ4JlRfSsvBDgu5VhlH3g%2FapTJUuUJNFZczunX%2FjnzHX%2BB%2BiKZbRDe%2BIhRQzOUgzVUydTOoC8ZYqjmZf74rZ3mZHnYBa0cwgWmnUrLKBYRdDj%2Fy3iGIDht9shmEw32ldV9zNkv%2FUPuA%2BXVfuuXxPl3DulcmavgFv25CgKBpBsdMraNyDguRWa%2FRNM1jUnDgzl1xFWHj0uCIU1XysJ%2FApuxxjjaJe7BmmSPmgvIdEiLd1fTlc%2BFaGs1X8dwoapT9IuR5R2SfdAaxrMsI5VDRAbXbSqovK6CJ1wtqtIBpUTpMOWo18kGOqUBIep2Dj8c%2BbXuuDjwFS7AF6bcogXQWYoiqd0G%2BsE8GepXPRZfgVYBRrqwU1pBhrS8hFxOukBDbEW7A28EGHXxtXJ4xtq0Ef%2FjgI4SV8kfv%2FMxlB1If3x%2FvshqTp3TAL%2BfDI%2Fj3nPmGHIJ3B4MRaDu79JdSLgMS6OXj7TXDSLwnsDn8DfHCqqu4VjqQ0JQMnlnmM%2B4O8ovdVHjIovqcbUcbYUj%2FXj4&X-Amz-Signature=ceb7695f0f3e7c754a102f8b71e2855e1376e8024303bf8157e7f504915b27ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

