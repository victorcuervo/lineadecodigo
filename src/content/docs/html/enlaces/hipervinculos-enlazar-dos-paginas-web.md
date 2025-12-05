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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WUA7O6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbGqXjldQVFkjKF5NSuO%2FekJaeINB%2BJaJ7PaKq5CwIyAiAwrsUmPHHL2YlZRXWgHV%2F%2FveSP7ypbcCsYD1ny9LXUgyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxpiUOVcETEC%2BNMRhKtwDCM0fOrmjQ0QiVBjUdevT9ThgRhMpNa3B9kpXcFETZ21kf3Do3Ap9iLy4RJqPDOhCO9iNFXmOFweKYhG9AkAjhfffmxnYnZpdLEc5WlArbT4oI%2Fn8P8pop8l5PC%2BCegIxf9TKV%2BuQH3NpLM0sHzflWNjZckVVbLnPRI9pzWk2zet%2BLi4F18T9iQlBBtlqb1FVVf%2B0IRk6wc55lEH0jXFV1T0WaMaUgF8TH7RwlUVFosOxS6LUxPoAO0wD%2B%2FD8G6%2BeE98qwBYlr8nw%2BI0mgOLuqhzRUDmIlJ%2Fb%2BuM0qd0PZze4%2BTmNqfIalJD5byjjiKWg7ONrj5Bqf6TVk6zGPlAGsX5lFiv4sqdPY%2BUm1NuWNILciOFUebmCrS11PllkvGr4jO%2FsGw4bgP9LMhPHAe%2BFBo93fU3mD82fyeTpBXsHWltL2YE9qD55eEmXX6y2Wa2fWv1ye9fIimhuVVaWcZpFEV973HKSL8xj8H3Rhv8NOafaGTVvX%2BwJroj4Eq9pimJatgMUdeuHrt0SAm0jxV4iAHGH211EOERSLVN8pk7a42HPZtjiA5eIh00F9wExQBCuOUo3j3tbvBfHJQ1dI6xtEHoAmXGoetteon%2BJhvBQZhz4jZLIKoxg%2BbfI1u8w0sDKyQY6pgE6xWyvMcL%2FOczU5Ws3U3exsz9UQwQAux9a5JitsNNoK50Htk7G5iKbGnNS4Ts4rBA%2FG%2F2G7xz1b1e3tzvtetXVpQJ4oOnFltPLo%2BDxhty%2FQewbQg11MPgDCEba%2FrxZ63QEJwnzsjfeJ6Qt2be%2BKaTNT9OKn6s4ZXWxUXS45gLDlS2vDeXZMctbGml68APZgMc%2F5WNjwMdMh6NHCo%2BfH%2FBbkIkfhyQP&X-Amz-Signature=0b73b2f563090a20fbbfffab9e779c723ec635dc21dacf1742eb744a612e7e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

