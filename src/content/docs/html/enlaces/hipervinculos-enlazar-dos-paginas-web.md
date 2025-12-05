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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F7RO6P4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqO0q%2BrPtRK95ECy8iZFyoU8rzSoEs1D%2BrYNvzRPIioQIhAMoGV%2Fakgnj0aorPz0rr%2FRyH7cmSGmITNE8HBsnwjnVFKv8DCFUQABoMNjM3NDIzMTgzODA1Igw5%2FWzD6m6oEBFZ2WUq3AN6iIOHjW2iW1hSNE8tYeR6rcGyxtCoDYCPFs%2BYGlxYNOnBiLrJkAJEEpyQNlfuV8HmHqIVTbBGABniaQuEoKNFL63X9hW6O%2Fa4xvag16hdpA4IB0qOZy4HVeXuDDPMERqc7vTafP1l4CPFuJ10Mw8REPpwzA6P0%2BLVhwC66Gi1FLaFfjcyOOgSm5sJba7966PkrnHrg4iAFYO%2FEWLn0J4czDi0FavAwlMyJldhtCZxraO%2FXZd9hEa0RSQ4Cu2c5vWP4W%2FMeXSoQoDO2noB8iOZTibe9tq2K4mEU2UMwFDU7tzTcsB9s9F4JcvtvStu5kWQfyC90L%2Bz7n1jHvLLs%2FSIR%2FbJ2TaO1UHLh9n5jCvP75OGb%2BUiqjddh0atL4nDRyv6neI8rMUU8AWB3WM%2FEx4lr9L5PEWdnFsuekxCCPISfvZdxKM0KEHe4Mp46FwNWIX9%2BH%2BCzG9E2W7bQ2Y9EOejDbsjUSlpsafLMbZZcedduY6tEwcTsypc7E6bvZTnFh8mq9Qeur4PRFSjWWbgj60UYlim4LamJEnPYGbyVGwbOoyFoBGrffOQfhcbbHiWlt110BaToqD40xN7Y6ahlTumvXSazMACYL5ptD12T6I9%2Bvxu4ZhCjDEpXmzDtTDYrMnJBjqkAQqZFoftf%2BgvYZnN9wTHsZJ1fvG%2BIcm5Bs%2BKXuOGHbcfqgyGnSvGhBp72qTgU6DdVizB%2F8g3wgaehx93w3N9o7%2Bcv9EeNwMmnkBf9OGFnuQr2ywU25vpmQdMilowO4%2BBW9iCWf2vD4lrnLvswhVOJDI3uCByGBq96rcW3mPol1mwTNMgiIRdFdkbEyBVAsuz%2B6fszVsiiJtG%2FDQw2%2BUnQiyiyTgI&X-Amz-Signature=f87482c91500a1545a0264282cb6c020e157fd2d39a10f84fa83f31b21207c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

