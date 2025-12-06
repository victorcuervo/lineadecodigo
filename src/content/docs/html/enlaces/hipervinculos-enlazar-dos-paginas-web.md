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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCZFQBJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1v9ib5j1IqWdKKBRVQDBeF%2ByYVcxj5Pzw1TjPP%2FVMbAiBQegdd%2BbcVyOG1zwYXkqPCv3xLEvmtlTK6bx1plND36Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMGOOR01YPQvf6Kk99KtwD7x8WK6Z%2FJK8JQDk4ToqUPKOh6eIeM8sCgxF8HvlJZXJx3tTacObIWnM8Cqpur%2FiqvBxRVacU3mOR%2FM4kl7COso6kou8LLRuq1YgurSk84DfHqNBULC4bb0IJvK%2F80c6r3j88A3l24iP0wUAL7i7SzeiFvCYYIWhcckUN2ccBNrb6VWJdiYB%2FmBPzyv6x%2Bdcuovi3QzbcQ%2Fya3uYGU4nnOpa6eBeqh6d2S5kJHNOzrbNT3s83stSS08tCmpvEmuA351Cs3NfDEYda1TAG0IUfUz200ZYr8rTLQkpSWaljAbNzj3hlTN%2FeSnrycbEXXx%2BdA2HmpsMY3adXumc26NhBqmLm%2F3NJydNhdvPXhlaMib6CWenDICThvHLqcrSJEhtI0G8GTXfiEvWnd3F0Jm17XPTcN1qZamMcU9UowRH21QcwbP%2BJWFG8pC%2F3W97TzoP3P%2FADDhqOrOxWrfav5badthKa2zcfNZJ1x066xfH0iZqI5uROg8%2B4C7sggZaTumF0C6xA0Xo2aTfCqA8SJX1r9rL9jG3IhxD91OehLG6rIV0yeCa3X1mnpiy%2FKpiUfYtKZNkRCi5Rgfn8dN9GCIc%2B8NkDyuLreBW8viRDyZNvoR2TnUcuysgGzK%2BYzBkwst7OyQY6pgFmJ5PAVOvdZFDIApmGPYemTwmkKrNH%2BXbVu56YTw6ztN40IiZv235ayi6meiX1VIyRbf3A0R%2FTzAZz26o%2FO%2Fft3FD1AdS8v%2Fmyx9WkoDVqqGo1VD%2FxP5kP3B93ovou3GLndcKGvG8uDQGqiAvgd1D6rXIOPjV3VsOu4v0P3C%2BFK3AbrGmYAxz5QeeEsX0VOyDarbfGe3vUvaNdlGYEtYEgt1H3%2BxnP&X-Amz-Signature=889b1f3fee737cb66c5102d51b1e8f4e6f6f00a1008fe26b7dd3a3da6f5f2998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

