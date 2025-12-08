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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMT36N4Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO5cM9UmrivD8bBnt38EqYHEp6XxkFO3DY9vgMVw8QfwIhALrZ%2FyHV0%2Ffim%2BU2FpWUTpDVQfyyhhPohf7FxD%2BjP458KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjQ%2FIW9rUIYicrEC4q3AMrkAUYo0KEGMP4QIhHMIyRiNlJu2TWXbrL%2FITPZrkRwFYF9bpxhMc9AszJY7T%2B4slRgwTBIioCRFL44kW5OrtNl1zaNiNLywlU%2F3nQpu0vIyd05wKsIxx%2FCLdE7W3fxaYxSJJE%2FDxsZ9oeDgK0vv%2Blz%2BjDvODWFGG6FiSMI2Y0%2F03OsNvFCrZuJb8gLTWCic1twErrnPdKm38T8G9RrFBnaCuuiIlMEYuPb%2B7gu7dGu%2Fy2Q87B4B8kwvySKLwMhkw5N4P%2BxyWa2d8OqOt9vhuxQ67Xoy4lzGO0H7eWhmXrunm4vwcn2oTYPzHndei93syZo%2FvowG06oIQXM2UaRHCi1xqAkad0mLuHo1ZQ6NAjHKILe06hDjstmK%2BjCL3m2lKF31vM5QMSH8oNSlQw%2BKzqs3oCgxP3qYDfvQ7Ka0GOU9ny8KQ5%2BTEXeFPv2aykE0Glu0H15%2BUDFFWSXNjrGudtueO%2FisGNFN2fobPXD8zXjrwOHSNs6YqjsZSddkYTNL6JiTsd7%2FZstpKfn1vQehMAhIsk82pKI28lJQ0FolHFDkqwYcqgyYjQggNrwrK0OCsnhBL1uaIeeZxzeDiFqBBtwKA2rV4gf15NRA3qlZRpgOyPN7Lnay84tztSpTDRgN3JBjqkAYqMaeLaIEHPA0pqD%2B3b0dvj0YEBFFmYHoXwCq88Wyc9JxGtmzUkQ3rqSQBRRLDfNsSHtVWPJRmjYKG%2FfbExQzH2WfTZoGFpHgFQfKdwmWHNE4i%2F6MYIheO%2FB%2FKGGzT1SMqkr6buxLxh2c3pfpi2FcpBRcdcTdfSpbPxPCcbKrPRu2W0Q8Z7PMGN8yUiV%2FBT0AP4gLsHt4ULXxheC1T7sFfKjKiX&X-Amz-Signature=45c006748bc3ae78eecdb5b2cba24e01b8d537d981856aa979616039f8377b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

