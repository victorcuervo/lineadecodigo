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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VD73KVK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqh1UtxO5%2BKxf0Osz0tB3JYnvGIxVYaul9y0UVbcpZ5AiEAw6UZNEj2kkYFAqe2izQGyLHhWk22moQsy8yA9JeHmjoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKisuVm4dMcpdlNMLCrcAwkBuRXyA9hc1ANL7L83n9J9hY633XtzvclhESmdQGSYHjsmLQn6s0kIQ8tDhKSyYCLDykXzH%2Fvnlu%2Fh6nNjNRFbk3yxJMB3POGwOqfJ7e5afPhLkc1pp7DLJZl36PLlyeH22JfCxjVzTnAQkvukG7yORf2OKhwesf24QAgDStBjVkEeGhRvFrv7ivJCBDNKMbx2S2k%2BGtf0giJNReyc5497YXAt3k%2F42x1%2BPs5zVkTsTMDKJ2h4Z8OQglinQfVXU2%2FM%2BQJmcBwYAW6TcneUakb8rncLX%2FMIj82mfmuxpj43Ui1hvyiu%2F%2BaLttpqrokNUjAjPHPB5AQ5hQastVOTcmSnOXG8b%2F9Rfv1TIHEUklGsSz7nA4Gy04p3jsVr44qwbBfemfcGxFy888IhJLWPfr7Ab1dbO6vVPgdlnhcR0Oa6Mx1pEUYC9KQsAEYS7h8YNu5%2FNbScVV1llM86hj%2BESYGtwUvPLLBIp%2FzKGZMRCmtrWHrfQD%2FP0kjxb%2BAR%2B07PhJU9SjHiTf1vYYsS%2Bqz14TncVO6twuGSZcPkyD%2FjaYXFuyDuYquagVUAoB89txgv0%2BeLJXAT09OMYwydeUvLkOG89KOHf3eIHSCAH2cenR0mV7X6NddmUEm4G%2B2VMMqP28kGOqUBcnLpSgR0%2FkpN6XOonFM7%2FSS8Sb5qaYj9zFExSze699FKQSagmokUANSj3izn0Ns0V6QvyI82ilQ4RvXMiB9CbabtXf0RwCqBTPNAdg1%2FVM8G7bBk1y02Xo4ciAhVQAGBFQbr7iHt%2FHko1XkXTJMB15vtKQvuPsLSHa1YBm%2FlRQqml2nnIMtr7tNdLMa2VcXcrXSdBtqxnMKq2VImf68YHSr%2BZNAm&X-Amz-Signature=77a8aa378c8eee715140c34878e5a6548a0a884a2158f2e6f137f0ebfb493372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

