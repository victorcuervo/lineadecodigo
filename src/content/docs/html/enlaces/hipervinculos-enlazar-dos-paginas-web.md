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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBCC6QQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQtjWr5mMbdJgCNoxcx5XroNusFj3K0Acu8RR0U3jN3wIhALLlWTqH30%2FjyXe2LtfWEpntnWUroRE59O6igkpyRvzHKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrnX0JUGPzV2H%2Bz8q3ANCqzMMeA7GYZNCGNdEUDm1JRLRvyTKTQu0nYwhmlmp7IXRRdkFzysO%2Bi%2BgEbRlnEBHlMvrAke9eS880q5MH6R9dbN%2BRXc%2BixOjxaEsvTeGkj9iv70SNavBv2x3lHt9qajrt4Gv%2F9eVF9AuBxki1jnA%2Fq%2FkqLjqujr2qSkCzI5Wef0o68SRiUmLCZWvVI91uvCrDGQAclCMHV4ABme%2BkRlfnAkkJREalsL0RwdzJWD6QneHMwWVkWSIhrWIjmHo7I%2FPhS3aHW6GRu9ly9D%2FfjfuVAYnLiV60jYS6holu5nHidzx8YW%2BGCYcJoPNV2WD%2FU1NpIqFzWhiHs1Uawd7EwpH0RfvjbZYoxkLO%2BE3GJeWvFnOT5NkoaDU3anRzTpxlXf1adkm73LcDj%2BJoL5FS4sdJmdlIsQaCMoNwjzJN8yQGO0%2BgTdKwrK%2FAcIPDAknkd8iOEly9KFLfZYBoQRgS7h4amx7cmllc%2BAxx65JMhzoe5AH8JOtdYhPGSqb2F7m5SXPaXpdjDmrR1iEAqhTs%2B4wBkFWtqVbJIsVAq2PIXtwSIlOpT3hsTXwJo%2BhHXvdcKmyXY%2BSlcFgde4oWqhlLCN3nJiuXcbgMVPA%2BgRNd6WY8piyV%2B7jLyMLs%2FRfhDCwwdvJBjqkAc6lIljWOOodwpRhc5Q38U183Ev%2B%2Fu5%2BVokUq%2Bkowdp02P2IAvH2cotAu%2FxqTJIWvJhb1uf7QWi8%2FmMkntcgarxJjapbCnd9Yr3hEztNnBpcVPjJyuXlsAXoyzZ5x4bEidcW6uwyd281sJJS%2F6nCCDbdl%2FlbveIFghKePMqZHn6AI%2F55jSte%2FVrnyqpMnOeSOfRmMGdTO0KZhB%2FouqionKXhq5qI&X-Amz-Signature=de96d0c15bd494c792aaa926bdf3fe9b44fc7374d7d07d50a1abe3e36d482bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

