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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFKY7WP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5zoEpumWiJRWpDjLc5KK%2Fho%2BCutHjsNPC35U%2FOcIuhAiBtfuYNwW3uHtm1YFs%2BiojIcmsMPmmGlaoyvmASI2QMuCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6XfhNDRix2gNPwdJKtwDlyGAjat0vyrFNRi8vgS1obccu9dvoDJ4oxofliPO98uzvJRfioYRnT5vlvTVTvEfjvoyolwKzCIDcBvbZrPxVo6bBzkx2WYxSYWJADDFRUE3xVIxoRFJXp4Q2JI6cSpUm5%2FiIP3lvRmmwavTen%2F80JNaTvF5WyikkR4swCooTOjc1gf4%2Fc5rBh39YwpskJJBiOQI9pEVBp8G3Or5rMxOJ8t9Li0yj3Elvi%2BqXRp1sHROU%2FKdO6ufE7y7sflFtEW5euzeLkWJrtiKfY5rKQ%2FpgHN%2BNxbxheygRs8aFKI5r2F1hV2fqGHhm2AxGWSGgG2PbvxuWxt3rP%2BaRzZIh2rUhArSqI3P7N%2BVqaLhXYLk2T4TMEwt6oEEn%2FC%2F89QnaTDUje%2FRoHbMhGvRu0F1hq6GKGDQaSnP6SkR5TqlH2FtHZ1IVsMWb7nayTceRtBI%2BUXU4KCa%2BydzpN%2BRKk0rVMzNLs7cHZUj457worHh8j0j5AAX%2Be1wCtsMk4BY2VuDsmcwd%2FzNF6UsMKpTQhh8hr9pxVC%2FlvkwX1sBxj9bRpTY%2F5nmowYoKjOV3MEYV7qIAoQlwvpGOLx4gcH2LoKMg6YeWMIE%2FEevZd%2BaFRW3yFa15%2BcT6SjbttnVd8ZkL3gwrr3hyQY6pgFBjDzVmYyhg1cNTfjMp%2B9GedLcvcoglyMIWNAVBc0fhEhT%2Fj4trC8veDEN7TOvKsBgCyo4W%2Fyjw%2FY5Zbtr7SspWB3gknWW4mVmisSdzLtXH8uQLUplj0Se3UhCJLvw5e64wjIp8vpTsebrLJa2f4NIrSKmsJbwU2NUy9N6DXjIJo35X0hGK6pEjQAMqZPoYkhdh1ABh5KsMenI%2FL6iN1enyNavsrnx&X-Amz-Signature=cecba92e72af9431a9ac962cc902494ebef5e603b0485e3829cc7642034849d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

