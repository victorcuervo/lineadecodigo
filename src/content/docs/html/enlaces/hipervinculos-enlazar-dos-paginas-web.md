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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNAJTIL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4hZa9SwfkAQUIMgRofhs%2FHC5yYdCgLdZ4Fx92X5j7YAiEAr26tCY5ZHEpfa9wItfd0pxeUoK3toB8tQm4S2d%2BTR20q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJqKiNCc3pNKsM1oyircA6y07PPtGBfpSwnKbIlByrcyBMXpXCf2y26p6ky96x9mLdMacdbR0tdqV5Un%2BQeKQgbVjrOhZmXLrCRAcCK6Ovx2socc7gRThsBYBVy0F3O0WB3riGEYuevfZz9gB1vbf%2BQysLTmnnjRI4ukGzBwwQ6W%2BcbJI3E%2BurzwrfVAp9TrKhPoMcYJnd418RnEhIWw6qWTlUI8R5RhVxVXkaJzfFwGJ%2BknBb2Y%2BrT5fPHQ5vxS3Wy1UeKrJhhssBgEDBf9SweAhqzxxGQRiYm0rLmgtFXmwFH0Rv%2BehZMPCViYG7KPWmfnEFzjuNNhV1n5SvcjVXB%2BPJMoqBOFY4tQ%2BKlthPS%2BDyIOYXoYKYOZFpeTcV8059YNVlGzBqIIV2xwxkkNL11cMyOOUgQlnb5hsXlFXFhYiDZf2VgtxyUvux7PxXWaxiDC3sGHVk1S%2BiRmXbqLWmgUksSsX1yYkaz3G4qWo7TTn1Iiaiiutq7UfL1lSrfX7QZZG16KRhV4H3s3t8hM%2FsyzqJV%2BLnKuH6W8qDCh2CJSKTvWH2FPRt4mHRH7y1GSKXMSDaNYUZH8TvvPy3brjRw7rO2xesQvbRfiK9G3In8daMqqIgGoffKptAxh%2Fl1IEzCqvOpSvviPt6zyMOSm0MkGOqUBAXgOLO1HtE%2Bu%2FpqO1vjqQtXzeiJ8wkP8zDpGWRclPpBbdBZuggJT4p%2BDmrX4MewlTrFasq0CPqpwea%2BiIA2qYScMThF7fcEDcM%2FzZoFe1aJ7BPhf5sTBtHf6TBB9Fw0AunaUTrgvE8es8%2F%2BGaHmjY2IGdJe4CgoQddK9B%2FhF7s8PSr25A%2BQzd2QZZVuXjqOahyNvEseFsi8VJgTJ%2F03JxNb88pAk&X-Amz-Signature=f4c533c6d4bed4dfe12c12d7e64e1e083661756dcc05fcbfa7cd15b7ddb51111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

