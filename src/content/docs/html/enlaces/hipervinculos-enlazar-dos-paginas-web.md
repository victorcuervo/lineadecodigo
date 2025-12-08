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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBG3JYI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6HbTmG55pBnyWjYazxHtqBrEkvWiJ6Iud%2FBBdyK0EJAiEA6YDU35E%2Bjwgik1rMgL1c3fYSh9wjgPF0duZpvKnSGeYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5AqKgQPr8aP55aTCrcA7dKhza4OLsGRaeuZK%2BNXHhcg8p9XobZ5ZK7iRC96kdINMiGjuHj2VSPnTerel6eSitecMCgTuAK%2BnSrOJUFgPbgwNruDtpeiRstH%2BPHkQ1Lo2m1vBUhY1%2F4qg9gO%2BU31jHe%2Fn2UO%2B%2B7evDU4I98vEuSAU%2FiSq6uFsvxlQfYmedey87GzK%2F%2BbwU8BeOnLjXoLe63q7wPk8G4N08qZMGT1ilIq6EEppFku%2BOFlWKWUaIFQmbR0NM27q5rXWxup3SNCRKhOO4Pm3dUjSViMn1SKKdeHrhY9AmQ5eTQ2jV%2BK1KiF6EVUHNVfQHGyYO9U%2FrILXbrjQeOsAqXEOkrKEDYnPQ%2B%2FY0ZKSGrz0cLiUuhELPY2MvekbfArfylw%2BoScklGxQFvCCEpJNrc9egcOK3epKV%2BKe6r1YllLYSiLJ%2BRjE43RyopXCzedy7z8fjOrUo6x5%2FxneJzIjwpv2o6FLVC4MiVqKLdziTXyfjkCc4kaVKTlXd%2Bae59Rftd%2Bp%2FqcMTTyvz4F2%2FYkuSY1M9SpsaqcQ8z%2FssYgueST403IfDv7bvs3iJyUOvJOVi3NPF8NtybKnqnJzY7MRjVZ4rqR8Z7380NF2n7DCmORDazpgNDyExIzTTl0bWabYfTAnxUMPKG3MkGOqUB%2FHA1IWgh6WyHvNT0LlRYWyyntHzrkCeWUGHv6aW35KZ7D3ZEhoiK36uYATsh8W3lzUUT2t81eV%2B2tBJHdskW06UCIK1eU%2F6PVqFzdZT6oCIvsYZQuAhC5VoETmOxVj4AD6qyL6wCBdyewfvRapGP9W5MtdEW971mnE40d%2Fua05J05VSHVS6mVt2DhFPIRXicoHYkz8uqZ7Td1xzWwtqZnyK%2F8yGj&X-Amz-Signature=3312113e53b4daef9246901f970f282c0246409d829d7aafa2ada3a8370fb8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

