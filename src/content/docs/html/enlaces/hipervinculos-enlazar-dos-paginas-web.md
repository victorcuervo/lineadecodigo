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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWR6BTHI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIXVDqo9drkjl1VrAXWfVwz4KvJxQaAbS11G5N2m7VCAiEAgHhn0IzIzxsFnAUIskqAHynKmetavuuX0qHLcm0oTW0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsIBfuMcPR%2BJGIu4ircA9E7fonJh%2BBxMA0Wm7eW2bSgAdH0n%2B7wsYzyD2eGhGsK4%2BQ8Knd3NpvvMgk45BzkQzekqTyDAhoCDjCRxssfUO3BdLyxBJ85%2FKgBzU%2Fuw6BzGpHQ5l9s9y75Ua5s7%2FkdOIKUgiKiyRHpmdEZMiesND6Fe%2BCxCQB2nGL7RqloHnDobu20RNEFRZatn7fZDRv7ld97NY2yacT48%2Flhxhvn4MhKGq0OBF0kOn4d8PQwESwwKUIkLgWSAuBRrhU9%2B9yU8DKSbkqHiEDDXZN99Kvm8NbR72WODUaVW9yw5giXuTDWyU8vPGUmzUxCKCTqeX3ac9yfqI6V%2FuvB1Y%2F0SJx5dQ0udcY2IbVWHib5WD1UXewJ70KqmFp1cLeknC3lmhp%2F%2B%2BlVzU%2FI%2FsSwjSrGu7TvQ1rqgn5jIxmjViptigIuGE4j8JvPrqRZjby8fTdFmURxAg2hvwvh91fwiqVfi%2FPVKKqr4wrdncE6DM418hqfYzKYMzHcc3s%2BxeytMZcQqFHchn5rHiMw%2FuN6sxC%2BxBgLBNhHW9w9Y5YUaOVL0WiAMVYn4zM70QirklEGYovcu%2Bx2d9sFRzBYql5j%2FVoDGo%2BuSLZ3QPaf8h%2FH8gbuXGSHqjE%2F4ghp5fddvvOmJEL5ML2k38kGOqUB7rcUqZPgT%2FQI38v3O9rZ5u5MAv8gNwo2JEysZgY4e%2BQJxA0wxDYk1a5djpvLsS7PkEfLCJ0SXq6Ivblrx%2BPM9uWSfP%2B06o3tivWI3dU5mElXc1jXLTt1vJsu1K8Cy9o1Cb1%2FT1%2FgeomL3b3faJhrSrP7ULSYCS%2FaueAwYlfi0OBXl5XOSqUPemYOxRM3MLzOzFq82N7TDBOt5nZegeHsuXZeVwFM&X-Amz-Signature=f85b68178addb9cd56bf76f2e9757d5e836ecfc8471b4258f3399d379024114f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

