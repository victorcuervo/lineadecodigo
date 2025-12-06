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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDJMUYQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrj2XCEym8RYWcPnJKdhYeWy%2BQ8OHRBDinH10rUUeznAiBAbuWz%2FFkE1fdRWtm8zljgKhwWUaswJI10oMW1tytDayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMK8TZm9I16P6OawqpKtwDovPC3AZbn4vi%2BQUQFa6%2FlhAJWEBT6dt%2Fi0ga60uibS%2FE%2BG5hpGzCbTQJtjS5WQK4sIDl06wRbiy610fZLzASSZJxVX6pqVp59H23fE0Qnzrgg83Xxfg14EMxXeBxaVImDpbezO3SFMRm88x2Y1411IRRnzj57QVdc0ma2WjVWs3cqyYM0VdRJZFlDdgBzWGPeEX8E4R8gXJ0aDVxHK8z%2B82i98NZmV9IVSKHewRqPEe8vshE5g%2BwOMGmvaWjSti0QsWIjLLUjAzLV%2Fpjx6enpoPIk%2B3Gve%2BsyejusFihGejguhnw2g6roDwTTrT%2FeTAN%2BY0lzeB0HCZqGoYKJ6j6%2B8vpC3xssDyh8jgOhdNtgkjbHC8jUyjSyl96Z9I0jX%2FUFSEpQyFsqs0uV1qvlZDCQlxkmFm7oZNorEEjEEi0T4Bh78Q7I8Pr7fgkcvs%2BvKoXLjOlPpD7wnNIG05NRJRXWM2PW5DbHicvVjqHibDv%2FvH3buQXZq3aqgtOJ%2Br6t%2BUbaL7zcyKGAWOyv80cI8BuddObyw4NJ01VIkVd2lRiUAuhpfTkohJMsDanNdEne1Er2AfyYnhE5ARA2SB8UTqL4tKnRpq9e5vE3nTlVxJU4ACOtXpGc%2FKaZff8HqYwnsPOyQY6pgH23qyssu2%2BZmOSm069dr7%2FTRmkebZpP9awXR4onJu2LvA1WaTug3l%2BcuatnhDQ58FPpXsXBlGLJ2QcuR7tXfMar3gXO4c7LiBPIdCYB9gPzVPNfHAoq%2FCTf%2BUi4pB5AV7023%2B5a%2FcdSNY%2FsWQ8lF4HiGq8W3tzUQE%2F66V%2Bq7FIaIEiNKj2IMmX5%2FVlQkT1NlYXjoFSIbDCH2QrjpVsdEpzlkYIpQkT&X-Amz-Signature=356fc50b19aff1bc9ed4cb739f600d7f92cdfdce7a5cb5e96612ea799a7587bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

