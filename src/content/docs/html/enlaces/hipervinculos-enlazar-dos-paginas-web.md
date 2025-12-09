---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PEHKKC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg7V%2Fl15wCyDYOaGLCV%2F0184jqdw0DAhoZP%2FX2W3sZQIhAK5zjsMTfkwrcXnKZgH4n1PSZhq6EreYcE2VaI2sVXvRKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw03AnD1IJQPKPXQp4q3AO%2BBZZWug6n%2FY7VsT9hFfjoLUz2rQxbGjPjN%2BidLb9BXH9gfYxHdiecCITW%2FCaCNgkCxxMTjCsNvgBznDtRYUjlpRmdflKgeYfDmIRGlxMn61zNeyoHgvQmbugJULchphiEXh6yxRI3nUA2tK%2FELYEhhlHak7vSZHY0jvbU6IZHmAArEiHQUJfd3ri8vu3FYueHTo%2BvQwlu%2BGlqxyDivZd%2Bqj%2FSwg4J6EugRKV0nNv%2BcHARAF89M02eA7gAoMviWy9iPtHWk9GxwrsPcKcgDn2ueDB8Bap2Bg1jKTP%2BBf%2Bh%2BMX6saVzHyPgCHlKUUk%2Fzuk1pOvrUVA2lqT%2BgdrHwD05QH2tCXE%2FdTVVj%2FpGQPC%2FzZbY%2By3PPgNA7ok2rezdL5EZIRjLf7hBDy0RXRKKlJvJePmLkTRZGwHlwkPxUl72z1WSXROfa27G9g3SlnVvpPA6mehpWQc40Z8RcZBhjhUOWtyfsWa5prNVhK6K9hbTfCWxSSMjkrU9EtiZAcN0UJP%2Fsk%2FtfKWl%2B9zrFKLSQVBPm2AIwGo2cBrAEF6%2Fgt8yo2iXItjytZN1SoPASYM9v0Z4kbV7D498dmTQDpXTigXEu%2FzKjrJUbf3bjECPUjjv1qItWJ%2FoJEt6qwkbwjCOveHJBjqkAdiYLcQQD0b%2Bi45mqanxxG3Sv0DQwe%2FF2NkowGQNbsrVmvFyWCtMKmdWGWFt442SN5AulM8fBzRcAuAllv1D92egUlq5Km9rMbcH7daZtUs5k3XV69TUyEHYCkCLttdyUPQGK1IR4FuTN3paTAJT%2FXm6dw%2BHqo1pjW9x6SrCml%2Bt5J2I2a9qIrdu6TF5x8Et4XN4Uxvi%2FxPGOMz1lLF9EOk0LlHp&X-Amz-Signature=e6680c64d49501f317980a604c840aea7b73fe4579fb7f02e26b183c3ca980f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

