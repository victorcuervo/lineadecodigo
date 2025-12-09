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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664WOF7GG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2wloHYSyFIGYpCuy0SrOXBTza%2FUa5Lt77E8VeT2OxFgIhAKtRJq4Q12eWhHkBW5huRChdim4BzFWqKijH7zDCE40oKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNdvNONJn2tIFskEq3AP0eYM%2FqkC6vrDZ7vqFMyL3O8DLXO7V2s64UzgZG0qNvIkFLgaW1U23t4h1MHSl5dDjN2%2BrgEVQdxJ3MYFVnXoK3e4eWO%2FsKKBpdsooa8JGyBMQ%2FoGTIyO0OdU%2FpKbkBCCbQgxkP%2BvHGxXDjc1Anw%2FVA092d9DpLKfSTd2o%2FZjwPjNHVfxht76qgtwGHTLVc5wK1epEsxDUbP6CFjY9QCiikT83flHC4JcfXE%2FDs8Gjlm7IUIlRzTweFTZbvdAkOBrp%2FYE8d8mtJKBdmeNrJJVSHwnSrv%2BFAjvkuJV9nrVcXPCQialFfj1cxE4Uo2QATcSHvN8V8AXhBqqxx1Qk4GAm2y0ZVv8143e3hwRdxHHGz0j0A0eJ0NglAU6gd1hoLSSCStpzQND7zpOgJWzEb%2FDO3MadLsGbId7t4kRgvehv%2Bl2SH6UmKmKJdh7M5QpNIah1lV%2BlZSZKkrEf3hoz3sa%2FgJPLyAn7pQHT435FLZrQPZwNF%2BfEsNtkl%2FSXTMtehMFy5XebBRCs%2BsLtGsCFi1CrgB5jo8T5ogxTMdfZP0Rq80%2BkeWu4K2DCxzfEuImSOhQLcOTZanWmh9VK2FCTuS3qsOEU2qge%2BZTTqBZXrsHl2k6HGraSjcY%2FPPQVKjCqw93JBjqkAWbI44WRVEyUoC6MRFdwMwQYkzQr10wlQyJlq2Avdi9FeQqmFpbe%2BS8cBozl8I2cl6Zf9%2Bz2sr%2Bv5L5MEcmxsTKrrCE7%2Frk%2FdcXV%2BBIKJSrtjw0kuC2KhF6b8JNmyYWvrNxEaN%2BPUfTyfnGjXuWQtT%2FWmQperH8lBfTjJJ9zeAV%2F3Vpf8AERQZdVe1uxgigLN0GqJ1n1BlF4FObYUxdS2CmRVAXD&X-Amz-Signature=2f2fda3b54ef8bba95db67f357505c10138fdb60d40b91db2259f1d65d15525f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

