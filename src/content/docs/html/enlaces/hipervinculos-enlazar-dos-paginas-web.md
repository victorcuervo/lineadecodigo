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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFJV4DG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKqfNTo%2Bc%2FrPSwhgAOXA24KjDcWq0IzXLg9VIXiyJ7IAiBQOxt%2BXQ%2Fesdz%2FIsh3BSBJViDrNmZZx1xqxK4%2B%2FRwyriqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkidzzclUxWnwC%2FtKtwDBk%2BCX5QhrR7naTEfqmxA706S0PY8U8YTjArLGCkcJuwVsWne0CNKksovYW3AeL3OJg2%2BIlQXPp132%2BFMBhJ17C1VajkfenNqR1S5nBeKdiPJZQZbpOGykepqHPAXEamB2ymsbqTVX%2Fbiaj4tWYXvowXp%2FKT%2BolZUYaIax2zFafFFCipLWL%2FY7s6n4UEhObvyoOZfgprZXXsg53tglNkBBOlQDnInGz6Uz4HsK7HGdbMm9V0JjD0%2FBaGmkOgRzrKDkY4zmjWble1zX%2Fg5Wp9kbAnPYdVs720TQHbx%2B6oYvoc2NGOX9vurMP3GkhhzNjke8qtAu5fJ1i7rrRkxLz1reTXKP6YkpfVYBNY2If8anm8f6tibbpMtvI9eE%2Fg0c3GM43jN3kTh3TCh4jbxknCFDkmrHf7LOOsnFxyew3HWYr3yEXvz2DMbnWE38CQwINZVebX%2BDoE%2BXul3N8JE4zMA8Gs57%2B1OzfflFirOgXZo3%2B0Iz3L8hbLONhUnLAsHjdSeiBjgPotXu%2B95OWGEeLju7QwTR6JXuf1W9WGLKaGtH2621xwhHNsntQD8HOxrETR5Fcfa8seFse5qygTtVadM%2BdhhDz9HmNWjjKv%2Fm3E102EuZUtJLmU7cEVNfB4w5O3ZyQY6pgEanJLLUAdzAE1gU7%2Bh35rbfY3wsXE8QaHpOv2SS1JpgiX5U9e9WD96ar3g0QJ2UKCNJq1EWq8%2Fm0IAO6TKFG%2FTvZ2XxKzkM96XmFql6gXLSXAuFrF2HdTenLuW%2F2s0ILqtQgJqqpIDj3DNoblsMF8DqQ4Gkr2GVP6spvveOSpHfFD1Mg2OHSnBFh3TQJg4t6I7mEuMM8fZSKOed92PmmHRA4SOyU1%2F&X-Amz-Signature=ffa47677913c916d0a8b5f719f1c8dcd7ed282d5c76fde866c18176c9eaab357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

