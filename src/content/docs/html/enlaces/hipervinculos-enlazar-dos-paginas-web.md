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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZDJ35M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdBB8bnqNN6eeMEFanYMV1%2F1zzaF1FcY4dmW70pT3AwwIhAPberPWfEm9gXsgjamEsMi8HUi0UA7YOGxOime2KPDd%2BKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHkgxXuqSWNuV9aAkq3AOy%2BmLqLbdzl0k449LpbDIfQ0%2FIBzurgvryt9mIfCzIZ560Sx4MScFtZHrPtt4XcRAozXEZmnER7jX53XaVUleeurXPw5Mwsd1JB6wSvlsKCD9wiw%2Fh3zgQeJ%2F%2Bucm7C0YRlDPkSm3T5KxZ8EEmenL7VNlqm6brDfTDxHbEkUEtEZZMZB3KmgMaeQ%2FSZg9EjwGtJ2sTvFdl1d%2Fm2SvcKVYh0UrCsTksvYrnN9p3rQVWeSAZeUkc05h0AFHeuUmFLFm9plHaQcbA7RjNp0ZMm%2FoBG82DEnroKRE8HSvXrpOmtFwMNktZe4zc6FUbURn4hHoxXFou6ufvvn51syRKegSM2wVJ2I0S2wgPlPZRIku6FLO9gAStmjV2QAH2aMNAkBl%2BjfDFCQpCY9SSa1NZ%2BVoc7wvN3Y%2Fszchj%2FTKtO1W0%2Fuip2NFvS4OjBRs0lwiNDblfACXk1EyFRmEhIB4x9Jm7UvcizOwEoTPIcTXKszfvsK%2BAHtTgu3ffVolc3LDRjRsTDsARVTwYehZSw8f5OTp7u6UstWB0PxTicTtIk78hpGRcWxLs49e9tNEk7xthf6pwo40k%2FLxcr%2FK9Qq7kbtpBlR8Q5cOLC3zG71VMjffILRYEnjClF4Z6LCoACzCXlNnJBjqkARlzJ63WJ1kNl7ccNESMws1NPxPFkt2GwefVvakjRnkUOiK%2BpCbTK8cE88%2B3INBav9FjT7U1aD8LcfrIHks%2Fc7UBCNglV5d9DL6I8pe%2Fl5dAeC8nYm0CprFr8PvapqEeZKg%2BIHRdewmWw3ToXloYuRw3P4THgkOUS7RMyyl8e0O1BFY1cz7VIRYm97tecs8TL5g09hw2%2FyDPS45CTuJ4zb2mYLdI&X-Amz-Signature=d363cfd48577514f2b634c7a6c83035a931961718fe2750a923758b71ce88b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

