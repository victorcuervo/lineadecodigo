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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYH6VVB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr6u90O8pe%2FtfLGSisSU5Ybhk4Zz4%2Bdo%2FP2U5bRVUsXAiALE3sXV8YKK1OK6hFmxqdY9iiRA%2FKDP1i%2BFC3GMMyrnSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW6cZ9xj9fN%2BtQeC8KtwDABYqeJ9TIfC2BMKzWP4LWBs7%2Fb%2Fnx0Tfwoh8Al1qwN9Mftrp0hjDwLWplFJQBjqayiMUlEkQJnp7yCDTLCLqJc5%2BgRy%2B4FKHl71ZvfwRiSSSYXpxIx01yJ%2BbkdN6M7YxUAt8LUuKKYgB5EsXPYfk703ifz7MoXej%2BtR9TCnGXI5tAY8pLsjhWd6nJ03njG%2FF%2F%2BkNrg%2BkRIZjRF8Eg9NrVML9xU3hMoXQ2RnrcF2tXmacu3qsJr8eMxITxUqhUiFYKQGITBh1%2FEZ7x0PiBYaTVIiXybKlfUf6%2BmqeE2bF5C6jQ7MoXd0NHQ6VwRspVV1%2FRDcbiw87%2F%2FzYZbwZu0KXS55ucwp82iTSQxf7ySI2v7ISUz2%2B7pqKiWzT5dyELe%2F8ZzgguZRnyUURa6lWbAqJhHTKwNWTuxAHnrETwiXGNWFabM8iKccqH1xJE1tWEuJ5OQcaBDZegV169LQkM3hU5NLWKSxblqo1NYBmWdpaU0vj5oO4sY85If28fX3Dw%2BI%2FWNfaJUgn7m6xpTdGXWL0ZGSkKaV8ucgScGsoq6VjP9udBmgfbkNZm7nbi4SpjA8HN4WQzO%2BKt2%2BdmAT3rsBR9IcAtika1HKmKGwv88AI5KtcIAhRjuSGLV4NcNMwo9zcyQY6pgFOG6t4k63WPSZvN37jreRNoDrwlVuC3dA9WoIZQuhRsgjHIxCK4YICfXCyJFTVNgdyltkBWPhfz4fiiZShuUffztFAiVvoea1KT1OHGCerT89fMeYJ65Vssa8ksHgwzlxzYdyC%2FZy0I3dXMHbjC71Xg0bcL%2Fkxbv0zG1jyXKr9EJdm83ppXymTgCZxOsDvFEb4H0L7BeIZ3zW5wZJhgOshoJM4aNjG&X-Amz-Signature=da0043adc69931087cfe0b1ca9312e993c5d4f7a450b4392a3a6f8e9c928e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

