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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOUWB73%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgP455EucBugsgMm5F1orAeTnEtMphwUVKzjF4NE6VLAiEAxTlwIqbYbuBIlrFPYLLYn7PWEhQkNydLG3AL9fP9dukqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWV0tUkVhyyWahpircA65gXcFL6mIghA8I4vwKwa7DWvriI58PvFTWBZz6jezgVN4uO4wNP8IT4X5CX4PUAkh9CirFOoVsGHmN%2B9455JJV%2Bn4yWa%2F4L0Syy3ZkEHWGNP1unE5%2FERMmM8R0%2FfLmP7zfTxKQJXJh%2F6Vvn3Qdd7IBhBnit6onkl2RfyyBkNbCZAzFhQ%2BRY9JqsLcfOulwyrG5OUSrYAK5YQg4zEHskfkQ%2FQk4p14NbOl7KCkGtsA%2FwhFr%2Fi2YVtwAJ%2Fwm1NuPojYa2lYLaFwzRiiqAwJHZKh4DER7FJvelyj3sylQKmlhJKkEgPbG07onZWBK9Ty7ZVCNovN8Os33qPnCIa%2BYvsp4pL6cKhDl5la%2B%2Bs8X7Q%2BGrIj2LY%2BNyTumJ0%2BvmZEGsnAfckanoFILG%2FHNT%2FgJMLMvSj%2BMHaVBXsRPPGBrz4992w%2FJM2aEp%2Frgn1Oat9L54mLU8RluvDwlXBLtpBRJGo75uVsX0OAyX42tAFZ5h4LrGwuQJgYwGZQc7MDaznG2%2FZd2Y%2FpoGQTfa9vSnNV5yFunvXOoaKlHcql%2FutTUGrb77u%2FPgJVovQinjEdHVJnBt3crO8MliJw2EyoekD6LQMcTaU75Yl1JflRT5WTgcwzPert7m69VvDPV%2FuD8MKK02ckGOqUBoDyHtOuDCnW3TH2X3Ij%2BIq2NS1fX%2F1ipNe8T6ljLHd0mP0Nsiva%2BkLNRPL4VQC1wTmL4rWghu%2Fl9TluCiGPEFzGapIvOpyPar6a%2FaOe%2B%2FoROsKcF%2Bfcg5am%2BBkqVlI9pI0%2FXyVb533l%2Bi9ugxXX%2FKTRuFYpiQ7o40E6MGxGLVxvZQ60pSpfC1HQP%2Fn8hr0ZGgSuKow2vOkQwdp79A3kgogIgKE%2BY&X-Amz-Signature=61e0575d47c339c957c24a66d70dcde86b0b4f0a629bc1f3073de91fce4c0b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

