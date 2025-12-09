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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCAXHEQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2ya2V%2BpOI2Q%2BQFYKgPA%2BNaboQF6gs3NcsfV1sueEwqAiAW2dWuuva2bApIQ6S1fuOeFLNNLOn2ddeuiZgZad%2BxfyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtAOuL5ehW4CR%2BaK9KtwDsIPAs09%2FS2xj4j%2BSTZ9NsXzPJS71rO6dhuL1oF9HQcoMxKq7HcSqXZEpYR0jLK7poqGtW1c0Tnru1wFT%2B8daPNLRVTrbCOcODmG35sUmm2%2BVzhjq5cFl1IEjx%2FQ9UPZ%2B4RP0pNmpIcYgxOAXD%2FzjS6u89y0ikugwC0SUoPmUNfUuYHujuYh%2Bq0W8FwePo%2FlzA8fH7xLLDD3ejKq1rdvBnNQ9NOpgY3zNDSLdDjQiRnlSBRZoFp7neGZaWEyW5VxtLF%2FexfBe9gJKXX4pbheeN1q0JECkgOXv8553eOb8ghJEvsHPmpAkc93lSSgCVoRyIZ1F7HpXm1AGYUGKTCYKV4R%2FcX%2BklHd9wguIk4mj4kCbnGGCbqv8WiKlDgvpwSWznrAVK5UcsmwFCnuTe1H94Jh3GSuXLN2ticVFMW7uzeHjAmJ0t4mG1PtTkPw0D4l9ZoU1KIZLIRBxgbW4oCZm1Zxkdo4JynZOLSywsWnmi2a3kD9%2BHGFTPs6r8HidKyerdz5Pt0Wxu3pB8NYvaSLYVPRSSCDDggPfsfJcDKMfDwyxqZ2oHjv%2BAITPBWkVvpORuvMts%2FRoB6Rs77tEZjtcgPggPdDmNGFoX2Zgpddev%2FbNRypKXmPSdWbCZyUwmYjfyQY6pgGnnTzZTeJLsdeW8K2NovdiDZdr%2Bnoot0LMaG5o9rqh7orpAGnUpkEseR9ghlM4Q51qptIMW339IUxT8%2BaGVVH4ePyjSJq9iT83YpFBOpCCjnYg%2B8Q67ztRcmTze1qBJ9M%2Bw4BtJ%2Bq%2FTr8eU5F17AZpws82AaqhZt%2Fs6QwGwAx9sskeuYyRbNhadIKKw3bWDBFjEfUJM2XB6Srz2IoA09ejZb2CzGPL&X-Amz-Signature=f0685ba61b1bb2a9ebe1c6fe1c45aa507320e57b9d9f90c1cc0e71ac3204e38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

