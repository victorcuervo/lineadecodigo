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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AQ75Q4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWFlX5YBApHj4%2FPgJuF2Obe9gmund1uOWfLtnDbUcHpAiEAyEHbOrry%2FJ062gQxy%2FMnJ3myFMouwAaTBTNJXaJ6V7oq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDAK9%2FPzScRBVO3anCrcA6VWPw%2BXQPD9526%2B2pCNEKM%2Fhl3gNKsms7HPIAgc2o4BFFuNVNOoW8y2JE9eIsAnddUuT5zZVRwnnO4Wlh0ZtWz%2BuWJgYzV5vcRSo4%2FuJxgMug5Zdk6m8agMAAPnfLinflpePz5%2FvZssbsfxHVu%2FdQ7X617zddpv0FsTghKT4g887rVZol00%2F7zuuuCFcx6kDewQTBCxcj9GTpyY6IMZ8hDmaIpZO6Lq%2BVnVvXAHw7wMnzvlRiJ0Aab4TaayNk%2FeBQJhU2NgeJ5%2BXq8fhaYaiPhRJWFqESovBsIxfsRqDsxLuND5t3k0xLTisutHPJIGPujYtXp1MKaRr2BbHxkfeuYGmI5QQPDe22Y9eEiZAZxFyHWfgn6J7VNw4Y7JCQUcVsF1f%2FhsqYy8uGTl%2Fn12QFvnda5hJX%2FtCisIN2plX1aznOpnqXaP%2FIB3uGXOxs2uT%2FXj6OZkHLhCGoo3jmWnGAQ6gKqUpn9Q4jfBPJLg%2BoFf4UfZq2L2BL5tW33N4lny62LmBk4hkA8nFfoeiKybGiuBfxTesMEqdoYZdvmWykozQi0oIUyNLVbPA6juCOQers53hlVoeOZ704tZSCGhHvZ58WQ8q5OAIiTsKlBA4zvSdrscXeT5t1jmPhRKMLzzy8kGOqUBMU3bdgX9ZqGc6GQ8lrtjBmVvD%2F2xiKlPySbe6eSRm3xoQJ%2F1UKqauObXyigXOqKxYEDHWu0gFwFOfaqTUKllHN86r3mkRNLqqiRkiD%2F5SIlLHOF99UcX%2BbIeKi5%2FL9UDzE%2BmMnAYheq44ksS4qVHEJ61gHF%2F%2F0m4eq5fIGYpg3YXqA9M9PRTqxMpsngOWtivLjLufgH2NFg9mKzTD8ytpwlSCTNY&X-Amz-Signature=c8d3355c526daeca8a250f1f379a30782f915c992fa0a0e90dcd554e7a47b22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

