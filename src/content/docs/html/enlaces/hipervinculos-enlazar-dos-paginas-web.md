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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZGRGPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt%2BOXYbRgzjtRqHQ%2BTc5AB%2F2U4txV8YdBp0rGDK6UMBAiB21wlih1150tSZWFJjpAkScb4bmpbLrxUH6UYR3FIrmiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BHVL%2BS5kZIeq2G0%2FKtwDpWFKcOyMUcvkB8joVRl2RCYVBL1SzRObBUkCgQCdw6KM9%2BIUdZZSL9foLcKav7isWgQg2Jmqzs6ICPR7xIza7dV36VfAuibmftR46RO7162Odb4nuKYf7qOvZbx8rrFSXIeCEoklxZgI6Paw74xWkCMeoJwwdbeMlPf0fjfwL3fY6OkrKlg40ulsqQ6JWUNG8U0DpsgHdX9TXdftvtL%2B9idM%2Fq0cLMf2ZDzQlIgQCxzW48LOHaePwKuqSojBDfrL0QD0kHvz1EjqBl2MohrdIpzdf%2FOEphG5%2F%2BRc6UkhNjWe%2BrVSpqrPQPqKTZBTeqaHadqegjPhCbF9kWfGT0AUjgqWcShYv75iLezp%2FVkoTbSZ7sYu2W%2BdC76tUh%2Bq7bh8Rr0FVmQms1l3t%2FYdSGcBOXBCuojoVHMvdpNftPfD%2Fu7CIY7Ci%2BLjaeUype2bM0Ykfqftxs9uGx6J0wT6hYOx%2Bl7MxQQMhK%2BdDb1fruQMyN1S6GX60e%2BL9Fg667vmiUxytUT%2BmVK0dES99nMJBPx%2FhL2GNhPybrhaB6J%2BMfiR3hli1Ju1y9i62FOBHPBHLuMkSZUwbp%2FVkbkwr4AkMEGVyGHsg9XYf0CdgyS5D2t97STM%2B44iqZO9wGs0C%2FAwuJnVyQY6pgEdtBywHH1zJDKUePKg5F4w3jW9wHtx5TZAF%2BiE%2BkEa%2FGUyA4temqcH9Wl5voIc2h6Uq8tyQ80IskOlwk%2F7iyT2BfGTWz4GNw7zZu1m4tWNq8NtBzJw4rhFCuVAtxlAFgW%2F7APraT%2FUGi6U0JlNsabloez%2FXNeK9EZIexSwaEcZ2m6CVyR5cvGd2J0H42LTDOY6%2BVQqPmjOBa2CwwomAkYX9ZOVbdov&X-Amz-Signature=239635131eac0e70923f40be63dc1ea613645bb0fd36f92bd03070267dcc513c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

