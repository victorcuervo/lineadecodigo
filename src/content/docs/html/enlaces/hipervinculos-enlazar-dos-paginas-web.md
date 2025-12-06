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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEGVAZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDu8LbJOH9xImy7pV0hbfSLkN5L2Qco9MnW33CtwY%2FQIhANroEbLJ3wYuxX%2BHIJcxt5acFFkEu%2FeizBWcAYkKCQrQKv8DCHUQABoMNjM3NDIzMTgzODA1Igw2pqTMdWqRYzenUfkq3APEEjMe0pnq4u8GeQBWxSAZTI%2Fk6lhCkXFAiD2tI9NlLeChorv88LDYbWc2wMe%2BQMsqgOYZG1cGJBdoAj2XMkivEgUiKlj8zHyH9%2FB9YJ5nsFLzximVzHl2tynXRLqdj59sMghKE%2B4DCqerRARJAMBhIuvMQU0j%2BEPgap0%2BR%2F%2FapkOo4A9UPCem6Gv8DFXAGPh69ZAxj7qgKDgdWAquJiifM3K1IY4HvQ%2BTSvuXtsOFQ9V0HBa4GB%2F3diUmwIxm18CjQ6gpo0vqKJESmD020ytRi8RCb8eaS2vyNnyvSleEWLeTv2wpaNBNUjTN4%2FWOcvYJgtqHsz1OwK90BLSqQyIM%2B7AxyEwyDyM3xa%2F9Q2vWa3lnLASeDvf8iyqXHfoJk%2B%2BFg8u0n7EuCl1RzSuEP527xbqD6oC0WkeeD5c5TYX2Unj33Ie4%2FBWDFaid4%2BG8uZ%2F5J02TO9suI4U9AFah6KNsGHIHKFLqLeizfVVYCyg%2FWTkMf1mDNzlhrcCR%2Bj76DTKeAx0K9HCroTTwo%2BRpdIH3iCJDd5Iv%2FjGMsoGXVel0DLDXAC3hJ8MVkGjMf%2FfvY31HKn9Tnp2H%2FojSaMVy4oTTP9vDfZCgXMMC%2FoRu0PojI8MtU1zsfhrOrKkGdDDQptDJBjqkAbwvc69ls5kzdq0OiphPTsApig6uvWLfITz7zC0l9MHzLiBjSgQbiGBqUrLXp07Y%2BF1le%2Fq4cbPHn6ceKac7CdnTvh7fjO2edWjp0gqZarFNcjbGnj3nRGKAgKK01d24jncCH8Jrkk033VZ2qaFPvSZRLyhYDNiOsZxPTFUl31g8qJnPAhjakF185rvEosMz2tq%2FlhOFnEPhqEuOeHvVIA79TXs5&X-Amz-Signature=e130a0abaa95cbfa66ea06a196a9c4a541181a89e184a7041ad56432a2c06bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

