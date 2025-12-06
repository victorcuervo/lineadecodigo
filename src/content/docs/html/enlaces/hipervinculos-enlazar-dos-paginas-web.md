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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LZVAY6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbNjKO93CR5LqtA4a%2BjNVAmo2rwRBUU9KaqX1XYbrMsAiEAwcUbiTYv9%2FjFs8WmnrtTgq%2B5wPOxMH%2F3fHwVW5stkn4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOqT7AKEAuSS89ue%2BircA6ah%2FM3yg0f0uLW8ElXpWHIq058btl5TOw21JYt5OwmRoJ2xeZn%2FO2OX6MNPaSFQYuR3jIJf2rx%2BJqbrvl%2BMttZuWRDqRXDFkbPThLFdJCsILhs0cOSoJuWNPzfhMq6UEn4wxnXQ5WdA3J6L%2B7VWulmvfpnsRpaNK0PkRRfEaQCbWh4vHBtRDEEa2aca7TXWdzr42v8gk2PhAc%2Fs%2B182GHb3zew3rlGSKaqnbOY3%2FK4%2Bc0a9zT3ZbGQsFZxGSx74%2FZmaxgxV%2FHzL4B1od9s9Q51qhioKilGp0Zjrr%2Bk2su2bVPB7XmiPcZNVRpPpWkuJnG32tPL0aAawVCxcn%2BgvOQxWtxDAy2W%2BoAWuXKP1o6Pr5mjJFJKAd%2BCQYUNClQR4Gh43MA7dndmhmussLc6IDUu2MmpJ6w%2BT6BB8gBnL6pUmQ4Lboi%2ByLEwHoYHsgm6ImAzUsuVqRCuDfxPwQ0i%2FmotBocSqaWEig5fmJo15mE%2BIXdOqZbV3x4e2AAGawZgagP%2BKoxWgu%2BasoWRTGQVpLFyZVlmFaxSK8GlfbDChMD6SfAKvIa14ElonkDf5lOIH89dcS%2BSZ7HYc16ps%2FCHi%2F9U%2F9rb%2FDrYpKoAh%2FINtXRT9eGz6dWITRL8R6A%2BIMN%2FD0ckGOqUBKi%2Fkg%2FF7HrnHEFwMcbracITYQm%2B%2FpjJLjCtHILuvKZHVTi%2BmYDryCJlz6YCG5vlEhjVK3zIF2KDkFfAuYeODIM0IdzcmlqQm%2F8JP7XEySJY8mEDuKApkGlRhwW67bRIvoND6foEiwBvUYrhqzIupPRx%2Bl9jvV8UmREUuxKfUXhRz%2BM8CAoJMBDvvcAI%2F5z5yCF%2BwrAGXiLvkNA%2BX6%2Bhc0GDwqT4D&X-Amz-Signature=5d3039ce9c381177824801845c86af73fc705c8d51dc5e7b2ba23812f4cc89ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

