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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSGT4ZW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpFLj5XYYnu%2BEELhYdn1e603j8Ib%2B3Cg1dMVd8JA9IwIhANrIFTJOZr1TQQ9hg22BTzw8fe3grDrMgC5%2F8l9o7wrcKv8DCFsQABoMNjM3NDIzMTgzODA1IgzdqgWigGYYIRhh7VIq3AMFbI2XbMmRlSTW9DQHYmgjhiZiTlUQvwIiTYQqu1wHzN5zKfUW%2BUQ5aYlDz%2FXhKkF5PVHkuhJB4q4ICMuhSv1KZHBKm1s3G3pCU6We9WTuumZwC82LSWk4s3BxZ6kYUu%2BCa3uUgem8p%2FvAIFWBW4MEJbX7z6zbbR4cVe%2FwjjZL7CZmeeGQiDoUuUaAl87FU78fUZJjJ%2BYsMQSADwA%2BdLoCpAgGgPkR2XSmgeKfvARbMR5FPjMLt0gH%2B6jg40UCdkHVl5VA06NLs0r9FgUzK%2FMex9rjxFyjboBkra5KDiVQiaK%2FQtH8axtAf1HUSfVh%2FYDncfP0CxSj7ptd%2FGyFZAYXtCSnanYq1DLOemb%2F0fQB6QyoiBbEO1tb32Tp2nMT%2B5RRnz98mVZzM9w%2Fzgj6YWZR1HPDMZsVGGYNnjKH3OlYEALC%2Fn69XzON1GKaHeNENCx4aYgh5DKS0GYM%2FPOgL91IGwtx1Nt5JohNPEhHElO845soYZxUpgNybSfuOcAORnlsR6jS2fwwsixEW148ogjQAHJwdQAYJBBFm4Rx%2BoYWUvdHZa%2Bx9PzmXD4aUF31M38liUZo7RheBVPapjTmPfH6AWf4qOrG8A57FZun%2F7byydgH4%2Fr6GqDyK4TeNzCrysrJBjqkAQe%2BMHlrGYerSsskajY3TB8riIWKAZP66dvvf3ME2uXd4pFMpx%2F3naUZGKHn5H7QuI0bKKmsVHzyoqwogelY0AyyXhZa%2FXdMdejPdw%2B0ci6UBi7S4fA7DQA3VyvYUaEJ01j2B6MK065SOeDnIk3GIQqWBTRp7y59dsRk9okVVbz1DhKwvENzFmVe9eN5EyLfpskihhgZO2CGvjkG1dVZv6w39xt6&X-Amz-Signature=74a593784d1165a7286e7918e39018817c29f7ac6e0e1f25802d523f5bedc98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

