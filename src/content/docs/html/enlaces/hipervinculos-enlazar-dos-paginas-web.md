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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD2MKPB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkhtLQAxxl8hR7R4sMQJ52ifBYhJmBvu97Ui7rNlce1AiANlWQiYk10okAUTD1eur6QjLzn3Dre7t4x%2FThM7Hx%2BqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9oux39lVb9BTEtCPKtwDG7Fy963mordaKWnJ2yGVRe7I1ywk1MILdjD2kUbeUMd3%2BzN67lqOoM8rWm7KGweF72YiGUKTWt0F26GvcYaFGN6N6%2BoIFiUS6dQNOy9sP8%2F3rofx57WpvyAGB%2F%2B%2FygWLwId0YObHZzpiRP33OhFovDgk%2BUaiG0hGALwG3LkX%2FDOj1cp0Ec4jKj%2BMRKmc9xX3vQxrBciDlzgyD%2FD8a1WWAWg7IOzEcnyyemvl3JSnWVSV1K2KZayzhOVfZnsJEO17Ed2joSi420Joud4gH%2B7GW3vti%2FeAA0ufZIJ6Xcj0yjmkzUzO4dBDYWoD74SuZxed6nBphJtvnCfxNIHpeIpD8ObkgOSGq%2FlDhYpZBDIDsMxhcaO33BsoDcV75bKOl%2F6iUtvLgGknW1vw5JjKm9kSQhxwz89b0EE%2FfXSBlfkiE0ocemNnU5CAr8qT%2F6WKiheanVP%2BJdcJAt2S20a0%2B3ANS0x4nVA0vwpm%2F3Jy6fGeJ30lnabKQ9QC5vmioSfIh8BdacqEnm%2B%2Fb5E5d2%2Fb4Ci0yj27th4XXjFr2rATSIdRaMEL8m05BAqZf6I5ErL2DKFVK1MN6lqs4wa3aNdXKkP5CjEnXuB76B%2BD6blM4KmdKo5W9b6M%2FZG6tBPGKXIwjbzPyQY6pgF%2BbQHG3X%2B4Gvln%2BoY7EmeFwkbFmdwvVVPZm0UEHjP610rAxsM%2B49SfaCCKRuYY02kkVsaNgdpj0p0D2%2FXk4ItgsN2MUlbSN5CtgbAvmEdQeWIuLsFkoREk5uEZG7qmAZDvbSBoAGzlcS186BkG3TITONFsoyAnyNQZxzZ0QPfLeimDc0Pz0azwi5584hyx9%2FXaLTJAUnzDVMy84ZdRq3P2oXO2r4KT&X-Amz-Signature=acec79390c8268d22a1eb7d439204c6dbe4392de43292c5ddd796413d5309be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

