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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPL5IQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoxjiFLzDR6rcvjy1msi57sq64Cjg4ZemKfgjciXN%2B5gIgIywkZw8lid0iStwtJJ%2FsWcTtft5CboOLOi7JaarmHTgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNED9aQpLy9fT132ASrcA923K%2Fk6AbR6YSYi4bdHN0uCF0vVYM4ga6ph83xC60DJpstzh%2FPdfMhkmXk%2FN90lFKEsD3jTJHo5UwFQYTnL8gn6dSjabllNyBrqZe6wZ38ikPNwGOswvN66bzpAh%2FjlyHqWa1sbHnIGLwZL5Cvq0ohMWPO5BEOlIv3vfMOUjoj7t67N74rAJ9pDqFCtv4%2F8vh%2F6wn%2BKgouSknoejzLXZuRznN1OHlEoXEJSpkS1h%2Bl6FtE%2B1jIQkap%2Biix3LkB8tx6F8j6brQJ%2BY8oggKhApxeiRjHnsBm%2FzrqbSfTXrh1WICD8N0gmvEfz81bfEsal5rBmAkC57f7bAb1U3RT9vavYNEV9AsC2hKLcsoKBcuh%2Fk%2B1LHctaV8jlooMF0qm9ewkGs8Ycriob0eSDRb4z0mhB2VYlhMszo2gYL0DflIFqDFOW3cKRN0ieQK3b5QatzBLnimFTCge1Td32weFY3Vho5Svnb5%2FDJOCVtPZ5vZY5u%2BGk%2By%2B6Rs%2B7d6Ji2BuIMYLj41UJTSV%2FXhi5M1%2Ba5cd5PdIKb%2B14SeLUuf0%2FEDiKW80Y8khKNB%2FDBC4GWpPtpB8hycJPw%2BqkVzAKVtN1rkDDJE%2BzxHPsg4yp9IkrZdSfFYGrv18lnxkFJQ8ZMLuQ28kGOqUBEelUZwOklp8njJ2OmxLyBU84WyOt%2BHCou8S62GYKjq%2Bp66C2qrskEHo5GW60VVtjo0JWKk%2F7YPZXRHp6WnHJ%2BicrVlqZMfUhymtNPh%2Bp2u82SbJV33Yegt5jnca8HuiEy3yjEqGsnYwS5pKPcFfL4RNyEgUZS4MhOgoo57tdeCAnReBRucBwfKU2nSp6u9Au6arvUknZbkzZknd0jIt6wvSC7urW&X-Amz-Signature=8573ccbe630cc43e0ae3e097e01faeee10182149407c2a2b9ad01d9bff2a47f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

