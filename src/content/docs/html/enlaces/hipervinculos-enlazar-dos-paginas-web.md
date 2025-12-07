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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKTUMFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuactuNm%2F7N46p%2Bv%2BzJovjnTk0UhnTCFGMRzh%2BOSqlIwIhAMmbEWQUzeAonOvSByxkb5uZrLe6LRKTcxYlNJmXLvc%2FKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5IVHoqVVSZvXAUm8q3AOU8uvZlj5287blqlovkT6P88vPkbc4prvCfx7o2CttcNH6kQyteSHsZU6xf8qHLAN0eCmFAT9YfZVLshPhUaN8BhnwYsti6vzcc9W19KV1a7TScl2lCs6Y6uOQMS96FWWYUwPWaIjuNiaxQ5S4UopShK6tbCfXy3Dx%2BQhbf0dGQJXnRuk0%2B%2FRGigIWFJ%2BEFzKgGigawHE3Hs9aJxQ61ONCYIQ7ZWSdGLW2AAMI3jE69zYqPvxZngTAJlFFcdfskYeTMHPdF1XAApkmN%2FaeCEQg%2F%2F3ynk8VSldcdEMNaKUd6AG3ZnawNOGTaZMsMklbeTdg0EDaatCazIxPbqmIr0vzQL5i77nmFDjojqOFB%2FutR4lQoXovv8AejukryRESZqSQZXqfIAHwPyRXWQwpD9IzqWY6jtZQqebTfJoL5S%2FmubL%2FWASjNirUmH%2BXLEEQ9boeiVY78dBcbZHp4x0DYdb3Y50rfpVukwt%2Bjzh2ROKCZXMlTgaPCy02F3yvYfZF8PjQLoefrGXNuYx%2F16r6n%2FokP1ZV6HU8lTpvXO0mUuBMPmHQYRAlBqnvNs2nyyKxnraB1qqLVPx3rr8JKle76NHhZrrNGHB2nfI7HyccpqbOhVb02Yz53WTythBrZzDLmdXJBjqkAYvSO2ZPBxuC5X0MCrjggtcq7MQ2u2kZaPpJo7HK%2B3jmNtGh%2B2PxS%2FrgbXdgs2V0ATxpo3%2FrCK8XNafXLIo8V%2F4x3DKagnS5Rcpb47zNick8WcJpwlqHAAsQCf1jWsa65LzblNTrgvk9%2FUnuV6MqggBg0uALA8D541fm%2BsI7bsiWkqtXbf0I%2FKEtTsbDbWBQWVVt5KeE5dPde2OpqqhNQTDlreuw&X-Amz-Signature=5f020c74b2dca0726ba6d569cdcdca73cf7015235df51997635c6c06c60ecfec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

