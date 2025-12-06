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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6X2FLZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FougGBiGu28uLelhDzjnzZTcwE1FWXi%2B%2F7SyfmMFSCgIhAIP%2BuPtIdiNWTrERWz1mtgvHb%2Bl1wPN%2FQrd22x5ilL6hKv8DCHUQABoMNjM3NDIzMTgzODA1IgzJraQ0IiNt6nC7Xo0q3AN06XZKCx4M3HBCR2DaBnb0Y3DYuBGdWTGiSvMGF7ls0MYne1VGo0Jzbk3XDvACE1fGN7M9AvpnB3lDziXZcBUTxHMIAS1JbhReefIQdcxE3ZpUZubY35llVWAZtUYH3V%2FZTPeDDIdqebHoUrVOlfbapHulb5VPtk8J9kw9eZO3Ut4ucMI4PgYfI1flTrBNMvkgythqH9NbGHwCPvhaNx7QsS9h9r45KIGweGrrq3Rbb7clOr4KNqaiGZK43WK24v3jOSSnEEG3NBmEOBAHbsd5yOD%2BjkO%2FqwR8Baa6gkwVfJ9AZEPx52XffVPB4GzUf0uLKztfnmKXc5FQD%2FQJXNEaew4G9RgbOnC9ME1wYQfG9a8PBFNNe9%2Buec1ooQas9y9LbVR3vmS8omgZWHqhj1klAGqTyHxSUMl%2Fq2hlcjnPSZLx2wfCG8upmelLL6pxRKNoE37wUKgZ5BQkQ3AUZiBnjWnt1%2F3bXJWggAZ6FOO0ot9EU8cL3NiUxlPfSSgnnEHQHh5ZArEiTgB5nyEjOyehnFGOhn8Al%2FVNjDjaigsdiCGFh%2Blmy5dAGiF%2Bh9O0UtYB5N5FwQp6JdEHuSTYQBbl3%2B07ExxHAoXiKcblv%2BYRK3ovjlOaBR0YNqRvfTDiptDJBjqkASlgcVFHDdUdylPUgyIMGxnyohyl2nQRF9GlQ6WPPicGPfvt4kwDpdR7FQLHLQKH1CyOXjwy1h1e%2BBkaUvvQ5yC6xCYyJ7chlD7snZr6owOBAY5HaZW%2F7hIumI4XbV%2BcFh5aeV5fjPAhmHYaBeid%2B6kJuIMzvgRMEOICIa69yVYjef1SvrI1kAxPA9zHxkDMOAhMPGxHWagWCguq6nQZMhqLjSoM&X-Amz-Signature=e34621434d5615bfbd09c1b1baaaff21eddd65949d45e53071cb1ef068b5a8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

