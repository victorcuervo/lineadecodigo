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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNS2QEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6Crz%2F8qwcQkiCHVQ1JW92C7h0Z7f5WzD6qPTPbBHILAiEAzVDS9%2FqRIVP4Tj4WoFPuL317Ovk0r%2BZhc5bIBC1A%2Bdgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDALIFA4XPLb1UgvLTircA4Qr4IS9U5Vp1yatei4QZj0mSBtDYShbFyzsW4PHCFZxTnq5FbAAJWeJTKLND8m%2FB4f2uAFdfnJbQMmc1gSf9nE9rODke6W9Q0rikIz7gztHeoCQptu1s5jnMwJ2uWagcnm1pV0xVcH321ItvjbiNGfRLZO7seKXhYhR1%2FZ7vAxIT4BHBUUBexfBA4Y3eWerzdCr5jPpPAtQJVz%2F7R97M%2BmXGL9m6c9XbwrkBQIhyVnKNPvEASna5GeaXj1E4S9uQ5CNFiVtn2exLdfo47gaN%2BCTH0HhmbvYdCEiLlTDRHQMtKlLhBRL4M5ziMseKdSpRPpr9e9nOL5qbkR74W9sdRMjBr9et0JsL75wxfRYH%2B75pfk9OeKRXMu3q%2F5QX0xTt7aL7SgSVvxw4YAvn8j5vHKatRY3Jm2PYc88i6s0fe3NVPsZaXJ87pMdvc1mJ2f5gypjt5zd3goO4DdMZBv0hKDBrtXv2mdPYsNkMW8244dJB2TA6XSqIQgxwem%2Fx5bQ9vRYbj%2FiH%2BamZgkjf3u%2BLS7QqsAp7qANRi7Gf1B5gCHgSLUl8c3BMwblhSY5qe65eMOg9fHtUNJwsKnNdMMnojZ4eARR30j2d5H%2FXCbgt9sa60rDPxL9j%2FKRS74cMIG10ckGOqUBWkhmK3m8GgfCupPBaz7%2BBj4LrTNVwQLWyfxQUyhJtaK1RTpwTPPbWP6zIOobjKTXPUrzAdGy63FyHTwYORYF1KTTBWgwL85tJqNhZqRK6FqYrRuaGVTaDRIhHiT7VOLjyJBt4p5uB%2FMeG6Tm6hKK1PCS7tKR1qcQoxKqzezVMln2j0XOmS2XJ4bKhNWXMg00mYWqITGQtRuHz2mlvooS%2F7KDDJHb&X-Amz-Signature=be86b81452c27f615515a6c306f05a54ea54869a7cc6057f816a02f7ece7b7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

