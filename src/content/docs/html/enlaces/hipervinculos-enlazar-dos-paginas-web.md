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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITDMOAB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt9G5sEZoRY1M1mM1GwwfwvPL2OGB6gSbKBixrcwjjkgIgOin5OxCyxHIfvR0MyKVqDlIe4D8Jd58Kwk3FdwKjIvcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBZiJcx%2FrpoKCtyw9ircA90KXbxsuu8FeLBhCTx6hfAScINVKkY4eeTMLjXpU5rBrERUJMmmA90g9c6WSTit0CDSWuP0be4VV4ZQDjHl%2Brc6dJ%2FmzBoKik03u0UUErl8ECTAq3JzSirhM0E03urIF28dGwT9eLNubGeoSLqX13f74PoTvy6ASlt8yAm4pbVBRj%2BkSIwZSsU1nux1KtPfIZe29rohLYg8r4eaNjpoW%2BpZoeZ8D3PXRRLzu6hGyWsRVknjJEdlGf0ivaQYAC8Kbz2cQb5Q62Wdh4iTYNcUCbZHmciCYj7pQDML%2FwA%2FJ6FElMuOTPOcMD3H%2BTQhXuYHuJC7K7w7%2B%2B5zGSD99DNNrHDgRwB0SM1bI0CMPNB6Gy9z49HuKj9y6U7BM1%2BL9uDS5IyOJ5dgUix%2F02UpqJyc8CxD02QuQGHtD5FgU3PfxhtUGU0CT4gAFA4Cci53Ql5miroJNNUz01h%2FWJKLDSQpguAIhVaQ9xcmrctnKfhoYeijX24T8hdgzqn61y%2FhZswo2Du%2FcdeNrOdzAujN6MC4aRX77YPRrUM7LqUfzGHL4WeKF4rpRl7GmQ5OU183CeNGMtpDQcbTB8m1g2XForNF%2BnZw6wFe%2BBI6QWyQyBrw6bOw%2BqdigrfphY3RXu%2FOMPGLyMkGOqUBtyyH2BChWkqt42tLNDq8eYl4bHsWSQdBxyEYPt7qw%2Bk0tHWpB6xiIQRTFGMmJ2OWfKViOKuEkHOj01qLxln9RdtzXpJU%2FF9GCi8XFk4%2Bz6zdZFNuoa%2BDo8iSG%2FdxnEHyU7C6PVPlwr7B0%2BUT%2FmK%2FSRGggX040g4NABVYkzoSQkE7h%2FubZGxfj%2FaAPZXzbM%2FiCbpto39FWcGCuw2lpQGZSZLm9bOh&X-Amz-Signature=7bca0ef00e913a41d5c1ac8b7283b8f43800b24efc7ab294da5bf549320eda80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

