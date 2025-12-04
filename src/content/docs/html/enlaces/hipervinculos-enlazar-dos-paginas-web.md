---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZM56Y3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDqdkaB%2F0r7MPKRxTnrorZjVnTx%2F7NAvPcWPEgdhW353wIgeL%2FZEiJCGghSJhvGrHAcFyGoEnIKFKAj%2B%2B6EhXxlXE4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG1JBCv8hJvimJ6JwCrcA4B%2BSYNq2qsOSlweBCmzahsZCalDIYtjAumH5yfjwe70RA8MHaXbRIda786YWM021wcdq8eq5iYdM3uEltsp2jO%2FPaT2FIL8jfVGirJeOPfxyraTTxStnQwbOOasy4XfjSQQhi33PLeDf02q6YVc%2FlQ5xPn6XdiHYDhrh63nynbsOQ%2FduhzHRyToAoeLVmpjuxosQmP3k0kJj4jp5GO7AIuqsZW80xi2yNcgQJ9THwH7s%2Fm2%2Bop%2Bs2QGD%2FUllbllussFFpYjpxodsvcLinFFjnB%2B5pX0otBNkDHebjbic97RasXykhTY6XFFIg%2BiqqgE4UOu6B%2B0gM2fTKW5Jgg8FXdGvyxGRBz2fD30nPr13QrOEFuq79HmaY2TySd47MX8%2BZdsJ8oGSR3vWmxZ%2F1NBbGotGbF4QlU5uifCyRWs%2FcTuxkt2k3Um4dy8rgo6l6sI2%2FdH2tpTe%2F48gNZuj6o0eNjzafn6cwpGtMCDq0mMJLOfBnNdlQoZJxzT3rzAKwuVC6gf2Wrce4njxXV9Nzrb4NhJArsB5pnO2lAjfSIlYtUZBiyyOjp8Y8AL6%2BEpWfLI2i7cEmMdIgJPc6or0ryFaATiJ4QfXXassD1CWbL0%2FfuM0%2B2DTEmL9p5sryF%2BMKGqxckGOqUBGKEoVZKLEBlkMjeCL8xtrsxW1Kmb99UVwbdSuRbdQJWT7aFJ%2B8gdpG2g2Ak3%2FUTxpemwIh87bGeqj3jW7ICPyZt4Atdz0DVRirsif3Miu2FCvHl1SrqY6qRVuRt9%2FEmkF0hi0g0vTvAzH32MZ4TruYBEalK9qGk1GwDW1F8r9INTSwiPC8EFRmE2b8KkUTf4m0I4o4jiWyjcgw%2Fx6JADYSjOMcjq&X-Amz-Signature=01b6a5ecd2a3363132078144cc4bbb5da6394873cebabbd135c4f5a1906da43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

