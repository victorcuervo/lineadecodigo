---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZJIXOJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2FeXzhIRIm7hsiFS%2F5UhX%2B3aMgViCj00jYN6dzsIsowIhAMmySzpWnWVxcoKJLBrU4X0eu9MQtcpuEyd%2FBd9lyCTNKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfG3656JXF%2BM26F28q3APwU0fOP6RAAc%2BEMddw8kLMahimatMwaNywu5ZC6dKGz5AbxcjturQRpWE9Vn6FYbagGaw0OV3Uh5BRR9mej2fP8lk7RddK6vaz8%2FGbeqEtaqtjQxCZtWw3HXEdywjQ8jvokFs3vBKo8OJjpgfdqqRoPo4vmcl2KN484Bx1yuxCoz1KQZknwwQ6KK3iT4x7GUpDBqU%2FNIe59JR80qnR22D5gT1InWCA8ZaSQc5eSLJe7vf9gq4lygzNBaVkujTcc58RkmFUgKkCZ09E1nYN%2BgptP432W8%2FphyyoCUBzLv1Y6E2YfZYRUkrGHNHG0hIkC7B4G%2F1K0XZt3%2BDa3ZYyKmqUHZTJ41CvoqWKWLUu5jyJvqolwWDa95ro2pIW1%2F1pqyKZyMgOdJv8Qisa31hiETJTzjvkAy10KNDCdW%2B7NRF1%2BCIlqKOMiqYROkgS%2Bw0atvott46jYFUsTduaQjyQW%2B0SgFB16Y4aOHt9%2FFbncfnaP8myw6gvlyp5YzI5b1yFf%2BgvLPZUaE6fzJVX%2F%2FqoOg%2Bxoro5F0yIPV%2B8Dc2ZKY8JbQ%2FdlK6Ksr%2Ft8y7QsthZ9f%2BmVd0vi%2BKhYKgzUSQYmZ8ycZR5dn4galmcin%2FaZiS11HmcDphrFQjzU2SS1DDA%2FuHJBjqkAdX90Fhw52wVl4WO4FhFGM%2FdqTdVAZA5uacGtO85unZ4SoyrrjZ6fxj6seufe0TtRRalKKHGABgqXLsDMTNGNnelC5frCCvKAR9xA%2B84zrDdossGitkJPonVGHmkf9tnHLozSNRjfqAWIPwL9sL3PaNGnoqlqtxjabpTjXl%2FL2fINNWwxwM2%2FyBJGRcdZYu9NVJxwpHdFHp5TGBbswtNth9GJenL&X-Amz-Signature=1850609785669d1381412c18972bad807df71a18a614b0ab45a4c480a16b8c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

