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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SHTBTT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANcDmyNt2LZyHajylNNVmUxyWebTU2h8mYgI4hp87avAiAp5ncwkL4FuJ%2F0vuAhlYvRnauv8pW8StXo%2FvmbeYa4Gir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMCt4SJxVsRo9PZMWZKtwDO2ttya8rb9dTjmwkN59ag2zpgXXjAuDHEWrQHxwWKzwnoy0b706lul2GEYq456wCI%2FrQkOJ7orHB1IZjRcAmUXumO44uXLf9%2BGBgaCbg1Sv48oh1i9GwJ%2BwMrvZvoxSqZAihobMCQelIIoxr%2BRfj2Uo%2BXe1mUynsfYcBcZBE9gdMrPs2gefbXw%2Bfn3EEWr1DuFJVcMlAAOWkb0DVtk58TDPMPCjSiDmLhE0OClJASbfkJoexyl73zkwHA6yfC4zdV6USFEZvRWu20n2z9DefT5yxGQs2BtCAX2KLrwwhBq1eUxVq69bnNP7vVWgMTkRb1cYUo6vk4KljOUSgSu3nZKxrmhO1TqtunyJKGak0HLS%2FJR9ap1I2HgrsEf2KKkiFKYQH%2BzlkOrzFqQE66qJrWJk%2FrNz%2BmxjoMrsKrCg%2BV82vsU02Uoz0qXhCgyPHXtMmtcQXIoeWwngch5bp0Ok%2FAFJpklMKZm4elFIq%2BOWGJpbeM3ho9Ua%2BgnAHiDFp90iVRQwHdMJWQlNTjWJYlUkpgzcqtYrL6KC%2FO6SrMbyp1zslIMo8yuaUjKeGPHbsbPmHoaRGYLN1sNPqONZeqs6EhiiDao8tJ0FyFUQ66m4%2FgguI%2B73ORdbLN07HqoowvsPOyQY6pgER1j45QL3be1kH05DqOK7sAcBd%2ByvmWGDgOWi82N4hIC2miM9fsdaPsDJU6X9s5IU5avZYS3FyYFPdExI7dlDEnPFEV62TZROaV89YH8UFOItG%2BUG0DId6yxF2LkVaWtCN%2FYNPl7bY6UcFr8fSv1bBxerbJd91L8qBL4AKC1HbJqbnbkbgTd%2F1VPbh3%2BgyTGtzOpI4AIxe5d%2BI6gzBjJgcbjStM2o6&X-Amz-Signature=af01a0534a726737b61404a71c8afac6dc1d28e3b5ce1ba36617f4b0d4fa7657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

