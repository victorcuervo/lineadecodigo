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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRIQV7B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHABua3zjgus56cw%2BUpG%2FFDuYIdVezaS4mL0QkBitYGCAiEAlwygtQk0V2yJorn85jczpO%2BhTIqyqtWHX51FiIAlSw0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLN43huMzgEctpcIgSrcA1WQQDmrnz%2BSuvDA%2BMEnuiTWBldd87Ytki7xmN8Lp9C9aZFqhUW%2ByFTsLiY2m%2FfqUb%2FQYAb5qM%2BOt1Jah1rvB6ZqoM2sP1JVWEVevcsXpv%2B3Pjl9N%2BqmczdrO5Y8sSTtzv8OHnnBN1dw%2Fr892i50M07v38mDkGifFr%2BJcH9zpCOwFOTA7u7Z6V8jEkXJRAEFzm%2Find2c798RVOMj1eXngr0WVVMOESg1jbjyKVWnf6aUOE0Mr5EewpuZLYy59WM9%2FfEtkxybwstaKa21MoPWyb9bllaSOEhHr0SQjDVYTTjXCH8PlzQpgMnPIX1kGJIQrgohTkKU2vMUmHBdst%2FTDhvTsFbEINH%2BirbGA0s03xLZV3rgi43flRxD9r1d%2FDFQQPGJKK1ADio6oAyv2Qr43aCia2lYHFyFtoXrnz2aGvV4IpL5vzlq5UpyztGfb%2Fp3x6ZuKWoLVzVxg47MFiu2YlnxSM4cIA0GI4bupIpGAm%2BcRdf7hqH%2BR2ev4CePwSSzZP6QQKk6HgtuKeKsBL%2BjIrJM7zS2Vy3cLtS85mE28eWTaBrM3nJVjg5VQbHvtrL45S%2F69bz8wmm2Q%2BlponGIU3uRIlmfeFb3qvcFSA%2FBhi1kSoeLa2z9%2BpolrnzmMLPD0ckGOqUBt6QPGho%2FJsvAhUYBE7OuxtjQybTuIMQ4Edk8B0xQWwWCDgwHFcPOFD%2FP0DlMC3or5QehIeZrRpb259pT6n46c26xmFVsCcAru374bebhIh1yNr%2FJrhrYXD07DtXKe%2F4wk1bDumpgaGgk6CSUkRLDwC6S0r0l4HmKWJSeOYWoJXJD1KJf88q24NaPV5IVaklio12SAjkt2wpLXug8CQG5c1yQt%2FjF&X-Amz-Signature=43dd9aea662735fcffbf61d364a3270d0734533c16973dc8ac11faebaa672417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

