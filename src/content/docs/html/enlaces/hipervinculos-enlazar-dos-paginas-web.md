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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LNUBEM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOel9KNkkrNDuGOEAcqZINScWbnUCdk0BUFy1xAvgdOAiEAgUInB32ywxBP%2FSh3ix%2Bbebj%2B4aiXx6PZ4gKhCS8VF2oqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJHT5ZMrq2IjEt3DCrcAxhEMhp6HvhDTkOTBtoOE023TkSTzs%2FlG9dyX8A49uNjOixGL9pMlAXwj%2BCXzIyZlHOGQahIzb5pdcnrp6DbiKT2D3D%2F61gYKYSFyE%2BdgxWKODb7v7QECSJf0cop5eUAQcuB4RmgpiIgSCwSpGe1ZzZzhxtokjyJVr0dWPhymC1KdQbxskFrLxeW34sWSdahjbdE3LmhUorsDOnsTzdXDE5fVGyaLsycmzsG0M94TV%2FnQki6X0sZWQTcn%2BnYcPfiolANTVOb7RkXzYdU0Z2yZYp6HvdDlpRAQxQJq3aSLvi2eZLtcD0IDAa0O5wsiOqZZWrywjXUP9X8NgYALQ9Q1lyf%2FkWcFRX1yWUEOWenbVX62Sot6tQi%2FMT2hBULxW5%2FmO4z7B5y7gx6CZzxxQOVJpcaQe9suInt59ZIJVyTu9BzqC7aQZAHG9DJ5dLmnqb2tr3mK9vNIPX1WBpvaDvM%2FjVBti6S7Fw9ipXMY8BgH7RJx6%2B7aVFSi0nKxYL99dI3gLUmdOyNC%2Fcd44uiiF4TXP2DiSielwhMOSED15O6r81ff%2F8lhe4MLXJUkY98XGBGQsarU9W05JPr2cHkdH3leTW2zS0c0rrhZgcVtBtYqtJSQ3Ra4zvO5zlyRSEpMOqh3ckGOqUB1xB0LJR8%2FSzCwCl%2FmP4svIo%2BNBKCDrPJNobaeeecZ8MCPwP%2FBVwgHGha24w7XhlRpNqembDvFjhUTaEK%2FOlOcSCW0sa8oTVOrpeU2AOLVfdnc14EpFGK%2FGsTDzJwlx3uKksQIPXFKmwXfYYxjrfi04ZJPALKBQGtHp9ASZjFZRS1DOO3jtYXmzzPd%2B3SGu8vjbkaJo45D8uMnt90n8uGONDIDQA1&X-Amz-Signature=7a455b0e62e02c3313fe464c1a56e56cdf5aca9158e8b7728b5ea8c7ce86ea03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

