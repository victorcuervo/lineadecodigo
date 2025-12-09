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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2XGOO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6%2FFZ4DLTW1yd4fQ%2BJLBoPHfaD4V%2FPrGur0ZOEvHilbAiBHT51WpjblLUAA5%2BX4k7tTDTNHUspPTogq4KfNeDISCyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9sbZHjlnEkUCMtsdKtwDbuHB0BbLVJbqt5dS1YwVgtGDyLSXr1dRKNRYuMdtHBCES7LGRGMhy6jkMyyRU%2BJU7z2qus9UjeFNdnjAzo5tJpBY7BKdy7yvKUV68XMme70VBSuHww2exQJsWzlk8wmsvtIH7kwS7i1RXf3%2FdTjK1aGJiHgNLj3jJblqQLdCqlpGW6jF1lAQ4OD23kXfDqHUtO8eT0m5BB1PIC3VwCBQpBy1aT0Ax8wCiX0%2FheE%2BQhHoXrWxxZvoAFV5LJmn7WvUBSGpQK4W2X39QDBWntwNtF1lb4o3CdCak0peUrpjK1wS94aCqEJG%2BRTqoBfhyT5LoJR4EQZNN71pgTZN5722tS2ZtgdSEYCUVjABznrCWOmzGi3zUzgTfAC7qJjpGaK3RHHYpxkok6hSuSk4BECrWSIAtp7NscZ5aabpVTtZaNEiDrjGRUYNtnW5AhyC80%2F8htnt5idHBj8JI3ZJpNoKsWLCca%2BxjkdDGnzzW8DAPVFtK8JvZMG1YAL3%2BeDQVNO0iMRLVTVea4MNKSV%2BRvwXxtU4%2B8o7FlpsAM7sR3UgkI6EEkl91owP88ua9brrZ9LPbVrb1Yx5CDKefDhFdwo4FOmuShUnptPjZEEcRJfHNKdBuSR3NATqXGYrunAw8offyQY6pgEPAGZ5YkNQb0lHmuKPFmlcjeplNRB0%2FUhSafSYVHzSfZm%2FR%2BDXwmaOdPUsnPwQIDaLB3W57OaB2eO4W7GLNEkw4VMDCuKaFF34lgoZyViTP3UH15XRaNpOMqxb1yrYMB6odwZlD2CywCyjIXjo%2F4ZFH09E2wLgHULOAJCdIG0j8gmsN5jkPAsvu%2Fd7Se1%2FndHp2gwMwdCCFm7dFGoNcXqBoJlYA6FA&X-Amz-Signature=4b26016413f97e0f8c8879808a4e7f452932da14ade0fb0f9d2d5b212a88eace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

