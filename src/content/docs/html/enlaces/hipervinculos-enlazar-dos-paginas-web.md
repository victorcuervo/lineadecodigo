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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAYFWQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRZAi%2BwQjpMoluMc615J1EfIH%2FmZ%2FFnY8YemxpouKvFQIhAJqR%2Bw2x2GwMJjBHj%2B%2FTcQwwvx%2FwPvOEhzcQcPNiEZdgKv8DCFUQABoMNjM3NDIzMTgzODA1IgwLXosAhedNffLjWrUq3AOXAB1UlHnJd19f9g%2Fpbzz5urmAZPCU8rdR4bw2v5kaRzdTtQpahrcYhXK35P0E3CHbhQTFh7i9TpKFSzZy6zYg25VuhyRSvjt8z5TH9mPCZyOYcoa27u15Wlh1Fkm3atIFDj0Ber5FJILD%2FN5mvJovmomwDDDY6mJqDYlYHHqpLCW5W1PxVvwaA%2FTii4nvduPzJGMCNkga7Ytnf1OPAQAp9hIqFChKEo%2FKQBEF6gmy29Zk8OG7%2BYpBg4MpggIUSyJRZHgWTob%2FBnjPl5%2BCWX6kvQC%2BswIbiG3XTJ4JZ0%2FIj1JIFYVtuVu1%2Bf3Yx6Hy9PDHEi6CSeJLvav5hcR7ceMoSfCgyfqSTdA8XmJoAq9FJFUJY%2FSCjHbHkJ3fr3U%2BcNSd2hDcnQArPgSfPdsuXUzX1OTR%2BXbEMfUh2RQom50sZkNg3LUwtr93L6PFWEcIrB%2BmoNY49fxHY7MVzbEbPq84k5d6GXhE7Wns6wmgWy8x3v1ODCnohUniMkQUGZLkg6483rT%2BoduQ%2FZKD1lG5CSbjDG1q6W293DuPf%2F947xfpQmFYn0PzXP9T3%2BI0ZlAqpjmhwPwJks5bA84H1C8P%2FPo3sqpKnGvHX7%2FRNlSt%2BzYFR4NxXZA%2Bd%2F2TTkfvATDAqcnJBjqkAQASC6%2FvYKLC8KlEamLeRcAR94P639F7fgrqrWpHl5copQ3FOlAinSbrEf2HYK1X1%2BaBMhBDHt%2BOmzjXtM4Q4sDO2%2Fdcs4JLS4j7GkgT0UASZBcuRsGo3RtQr01Vu%2FWNeaL32%2FkoFf2TjTB9KyoeFfwzWonknqATsA0oo6011pHlxc52l9l0jMow9yQonaM7LpDoujggfH0cKuZUOhrCZDeeG5I5&X-Amz-Signature=a842206f1b73dc04af2022372aae00e5e4497ae1907b6745a4d30a1059fa5adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

