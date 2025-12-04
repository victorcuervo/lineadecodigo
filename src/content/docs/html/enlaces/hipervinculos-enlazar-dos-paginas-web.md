---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627EG6OEW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAiuQOKlgDlps6ZwqoSB5Xu9YMdAi%2BUG4n3%2FJ4HXgWUBAiEA%2FFAu0CdmVu9vVLsDhHfVqTD1AMe0RLSacVktpAuLINAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBkLvKt386sivPo92yrcA0oJjF4c2gpQhJEVYDem2Vxi3kvzeq5UKG%2FZT5LpvNeP2%2FmAvDmUtu5jd7jfo4EfsjfvCKxVphSuN3cESuIosJ7SwpzYkliCarJ2xTOxpqHfAh%2BlDj6TaFhoiF5IkAg3Yosxs%2FTa6OdnIg7bWc%2F5pqZmoijI9Ge3Jgu18APr8zqoN5qJmY%2Fe7dCquVWgW1ivBXPpIYDB9SJ3opnbA3F%2BEk045yKG0MaUbvbPa%2FigwTj%2Fh2ekcp9%2FwI8MtKV50APx%2ByIEydl4StRohrPI3mw6ykW%2BKAlXMWxWBAeM8dMWT3Q2noprjDo65OkRArQ3UQRPbci%2F6iNetzWjTMPUTbVici3zAcZVVKsAolJFN4FSO3yI8HV7eHYPeRg0YwtPShrBcwc3xVsBjNP%2FON6HhoDkA4%2BSzcVzn0di0MeiKq%2FK39yCALMUTa9rKTHCyYNfW64EcKWHq%2BbgSIZ6CyJA5NSdDbXAlY81MxLt9UhxEddutKIv88D0LH7QWI58gt5bMPVs3t%2BHvbhlaXAqB05zH4PYKNv0bEb%2BqNauGx%2FAZxGHchFHlCzG%2F2lc09QRDWU6OKfIKsqbkNjvXs3b5V7bja6DgjLtEZlmdOPQFXmuX11yEA1znLO9nGQ7O181aVlrMOSFxckGOqUBTRuib70BOzNHI%2F28w9UN0fx7h3S6PC6dKCrNcyLtRuQ00%2B9zMWVKN%2FxTUKjhoaFb1NW%2FeEOd%2FvNhM%2B02RgMcQIOLXQpN7MiZ9MbVC5berHKmYojaUT6AHzMdX%2BRZ1PvOy1KsoC0zGcAdSxZVLPtRUT%2BPZx1XWbeg1BR%2BAl%2BO1TXwoZgDot7y1ufFvk1jdClvypZWyc%2BxwypWUKwnzSXmP78hfc8t&X-Amz-Signature=c917e1dfb66027a6ae77ed1a94cbd0471182ba08a7dc79355396af4c0575524b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

