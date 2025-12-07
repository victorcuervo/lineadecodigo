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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVRZGRU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeljHMGWwTOpCcHkMtYsc%2BVxGn42cutP1KtR56BTuXKQIhAKjWWO00o940mdy%2FG0oWGod3nmocakqS0mgmtd2mSLZwKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfhhOIAWkbwu6QKoq3AMD7eUxBMbPY9L9MLYH8kw9EQIKn3byAY%2BI7sX2%2BywOOrRpgEZOK5YWoee7gzECuIrXMZM9kJXdStoHfHR8rrk3SQx2mvWTaKcF%2FcvEq0kmtsE%2Bngy6J9N%2Fn4oldw4yQpo9m6838pwM1rsLUrz79pEp3Z3N%2BhxYt26NNz4FNL01FE%2BbJ2uBbgYWylg1QmE%2B%2BthWjlFtIdjRxchxWO65YvLYUBYKZSbcTZHfnG8uNT8FzbkEfnrVLvvXu1Q5DTEVbNOo092va49CrEV%2F65jpYr%2BfWB8UVJmui12kwaNSLB9owwQqK69BNKiZS%2FnEg6YhNYOzSX1RN9OmlJ5qvD0L%2Br01q7DnA0IHY6vOEL6s5U9ur1qZi780SSlBvCxlVeHkqgNQbBn2dYtXBpHVnQVLkiED1jyEC%2Be5Hdza7a5EQ4ywPPcil1GSGW6NYvpXhsRIzdP9PAID%2F3dT4mYc33MHqe3mRT63kXX5S9Kbqrg9qzrsWPis5PosijVW7FQaUUkFoktzuiAcCwvGsW5FBjIK1sftGN4MRv9U%2FraThkPh82D4X8xORFsItFdYz0vyXzHT7MiyZg45QBj8FjNTvMwDSVjvsCy5%2FVE6%2B9EakopaarOr6wSrwJMXqWgODQeYqzDQhNjJBjqkAWcNUgjyZUDGOjKHkq5CQRdy0y6NXJ0tsHYjAXP2r9i1gJANAV%2BzyXFMt0V9uzB65NDbBNS8A6pjezEX85X%2F2zN%2Fk%2BYrjCAx7sNlFiT5fXj2%2F4BwgCD99f%2FYqDS%2BJsn8itH5zhKki3CEirA8rws83j7cQC5gui2ECI6LsgZ9gRrY76esTVVbHGKQUhLGHEUzmCMxuNTLr2q%2FOlIK%2BSrVN0jHDq1v&X-Amz-Signature=4cc2fb938f733a9ac7182c6d2da65932c127e5d38ee927b37614744539ab4d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

