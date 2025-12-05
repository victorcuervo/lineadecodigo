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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4JEK7L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmeozMQg1vj7rONGU8CCxsXMmqlKIna1wFKTiWiuZHbAiAq2ZloM4vkjPDfEQ%2BKpJEn5g1pwzwPRY6wJpEQ%2F7JkICr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMExw1NQWYNgopSkvwKtwDZaTVGSdZQiGHClYp8q4%2Bm6lh10QI7Fhb2A2y9qTNHM168cbclMtSY3GWRDkD0NK8wdGFxJw6v37wwzYyswmtK72xISgW1XrFhtCWUdCFeNrWuz3vLHs4kYBvmRuK7pEHgsJpHskmKNFfF0Xgs8dVXbrwSQsEwU21O1p4xi8t3A%2FnwsCzcWNDkzVbDN%2FupB2TdT6FZ5%2FPRd7SaVE992JWPSHTgSzO9pRucQare7XbYY9K12vBY4cZ8OttU%2FG2gWhhA7FeILgjVD7cK3VH1n7kSDUkCqg9E2EYeQKmaHAzsvjY7DLiIEzZqG1mAwDfDPmtUaN28NOxS0UGvA1aM6hW9xK6oekNlooPMU1yyg7TJk1DXHxrMnTY1DYMWwdgXHiKPSR2YVDkPHvGPFB1SZpubAyurBG%2BJzTAFwC59VyjgbkdEvFeOt5tei9S6OI3ot52bMZ9%2BZIt3NeqTOpQkPXVuZJz%2BWtT96KPvnRX2jg2CHZDF%2BHJXjmOYlOKHfZSkKGEWiAQ%2Bj2%2FL6Ip3R2N2i%2B4ph3nrVNlhC8mNSJf5Fd7G0Gnqz4uQaogxpYNb26KEUOWI7PhU15kDRTZ82kUHx0ShbLPAlNjRXiR4VpFNuGk%2F45Hm4OCKqR5yBbq0JAwvPPLyQY6pgFkBMgstbe25nEPDaRylOmN2moOm2cUAkZVUacp42HpO4DaOxpUKa00wMo9dV2slQKdljel7MtjirRaYCHCMpxLocC9HKG1uqFWVO0HrYMg%2FySGDUBN7gnAkjPmvt5a%2F9rTWJgU2IJjOLXqbSB%2FUu3UQmbLQSY%2B4PyAxhiTWow5D72smYCoUx2Ix6ZfBxKunUCbcZ9wn73TiveXelYoAomyIGE0En8Y&X-Amz-Signature=c29d9e3fbec850908667d417cac72eeba1eaa99d0a78c5bb9455278fd25a99d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

