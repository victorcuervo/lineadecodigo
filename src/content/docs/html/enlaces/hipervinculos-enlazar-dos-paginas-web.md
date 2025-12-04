---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4BTXTVM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDEX50RhGmnZGCykbc7CCnyxdOFjVql9QxcUMuBgiD8wIhAND4E%2FwMiyF4Qqd3Qn2VcjlH3tH74N9GVluG%2FpqaDuJEKv8DCEMQABoMNjM3NDIzMTgzODA1Igz5gYu%2B4%2Fwg%2FtKaUqkq3AN%2B0ZFGxXHXHC5CixEqWRXTpBTNAnMxYU2o4dGpKRFpCeX1rZu0DZhT1WD7xmtxeOvanu5PKoD2RpSR4ei%2BsOMz1%2FQws5dAZ1a0MZZPifJgekxord2t2rddSbRH%2BWYQ3reTL%2BiNr9PuKCB23vKIAvbtLIgx29ZNm4X04S%2BCJDAPWCaqP588nJcTEE9QwtRyyuNucA%2B3g2%2BGHz7C5IMWSxb5z4envnvQq1bIPQKazFCnzJRgodzm3rCLrnKzSgyiQ3RmPOsV%2BU9Rd908521OqNG7KypsPdl%2FzxIwwz6WyegFtjtGH6NrQBPNrVnFQ2B9QmZOP40pK5SNq9XB6B5rILOWAS%2BJYvH5mnUsF6Gln9cSazb5VI8tbdQlKFBk5oVJF7J1pJvpOdvKYclS%2FXFw%2FktO8b2Mup7fhlBFkK4KPM2l136lnEZUFqwTWJpV7dWUjoGhlsxmtR1TY%2Ff471UT14xJxF42hbQk1O6C1yMnVgCNT7MEu5B5xWnHRFsXAdajg1yS4rArfhZs1KZbAl4UgE%2BrZXFC%2BnnPnLR49PYKqbrcMWBNYbmP6PVRXEBrr35wkDXtlQc3iwir%2BYFiAIO3gXpM7LlDwTE%2FszOExFu%2F%2ByllIzRNo7NlEawgChjpETCNq8XJBjqkAe2JwIT5CcuMW3yxEDj6Pli1cMm1i0i9Ot6BG1Q2ulTNUr95y34%2B0WhjpSjPZVnhmw7avethSX%2FMBipva1Th%2FjrPCM6hnsyVvyCYlO4ahDQrIzLrbInUyWKAhFC%2FKJMxk9IxGeHjZS%2FDOT2B12pNRzbPUNutPjxfphq8PfgRlljBKiXh7JvVg9QmPZRxlEu4DziFgtbg5oj6%2Fbid2cZm8bc8r%2BxH&X-Amz-Signature=645db0b5e6847d62a6a9a5719d42d7bbfb6b660bb93378dc22a5ea44d3ba38ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

