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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XOP2CK7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGumQxtNmowEWVxquxXTlnVqGI50eNcUU1YQNNNX3F5pAiEAjAEiiXmPyBlJEoK17%2Bg%2F%2Bxu3ldcT5FIQnYn%2FWH1IGzcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoVqrY37JpypaTqayrcA2PkX%2FMuc5TCrPGm2MztnPgnKV91LVujUizIebHR0f5KnJCObU0%2Fxw6WbccZsnx12IjNgutC7wZDBz3Zz4pImImDzkapcAGVZKZR8jfHSaZ8kz4e%2FVPeybJF%2B%2FCWjfDxt47kyfS8%2BqHASTH4r%2F5g1SB%2BlK2BhPTViS4j7tI%2BOnw%2FGwlETx0d9FdGOLWGfr5NZ98vwIt8fi2xBgHECgYp2V5sN60GPvsOslJwiWZFO95OtBYnED8L9zUSliEEd0sUDIAYruByTg5YHMM3SPCl2%2FLPdAqChadKftdgVlwD%2FgyqphZSA1mLaFBHJEn4BVnM568Ax4UFpcqTxv96Syhhqo4dc12XHlJNZkRU0wDCo4TrYcNP3l2dn5MwKTkSRQr0uc6KrGE4oRZgwliyt0qZpB%2FJrfurZvMzGFhjIRBDwDq1cA%2FQ4LppFhLm1RwoOoEfnQtuvvHIWO7xj3WYjHWpPKrv7vDdu0Tuw10Hpvv0ngsJ53U5h3MGt0vYxEsp7HpSQJwRZRnXnFnBczZctdrtisXE6abAIgLSmEDp9wu6J2vwdr5JEy%2BR0FExruVH4lsCsSeCwvt0dt3lEnj4RrgHobxXtbahWn20oyB8EdRRmrI%2BYkcEtTU3KDPhs%2FUsMJuZ1ckGOqUBWxerKpz92p7isIbfUd8jR%2Fv%2FTmIyBrKk4ijd4ceMWYEw4wfAJXnea2H1w3wEk2qk8NIy3yzX4N9LkDQ%2Bd8HfaDkOY6oD3wd4RCevmINOjLfoEVWaepShD4KyzS6bsw%2FhMuPl6iiGxol8qr2cs7mGFbLFi0UgBrLxlLp5QmLigj6%2F4lmlkDhZD%2BLbtWJGjthV8X%2FGnNMXYneL%2FI5ksIWCuQ0HxMJi&X-Amz-Signature=b2ae03b28bfad2af3bea1d876c5cbba6cda63cfe8b60e965dcaddcefcc00285a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

