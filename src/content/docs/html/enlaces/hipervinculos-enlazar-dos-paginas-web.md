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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOACAYPV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRtq0irqBayOOS1vDABTqdaOH0q4cfGAVjL0%2FDeVt9tQIhAOz%2FxVy6xniODeMdgVAIdNAvA7Qji2IrtZAEHwo3aSuVKv8DCE8QABoMNjM3NDIzMTgzODA1Igx3LjAp0NS6pKFBRgoq3AN0vlVEhne6OAMZwZaAkgd%2Biuwr%2FfBTcl1hQCir%2B%2BP9UrBhOD3MhIBGkz15Uy4aVxMOlevfbOx0yXBnKaEDnJoqzawMINEoNxH%2Fr4zi2qp9QINJuQhtJo03HwkyXAz4CiufIeFcolugF78iB0WpTXXyYVDsuPcXIcXqmToZI9oCKPB9Cd%2FjdxobC%2BAUoCLPaJlgncvhqeVadErfcfbjNbSyK3NK7kMYEJZpqniWqFHyO5B%2BStGvkGyTfatkIQwLziWfyuLLVBWGUXwQm6bn1N16FTHHkh23NIlYqgkN65MadkUPchPBKo88rh97VjT3cAKDMfPQfoLgtfUYeF9qJA14IuH93iPQoLqjiA1iP0PKVzxSxmerU6rmbWKW71ydA3LwY8kqRU35MioaTntX11tFQJ%2BlIWsQWnH5VBdcf2VyqS0kL0oEyZoPifFsiaxwugfuD3gfUnFBjSFzTzbCCmus%2BKWsurpcf%2F5da1b%2FURLOxgNcqYGgoWOVcEe4hWyyafdWBEG2bqi00jEOkEuzl8j2Npm01JZVaoJdP9ZS67wVVodqZLPE9H6hwEd3EOEc17jPqt57s0Mp%2B6YBg3go2B5%2F%2BMbL9dIRSt1BMHF4Uhe%2FDfOJv7qPBd%2BPOeOzwjC0jMjJBjqkAYV%2B0aNxZAsOOuO0RvVw%2B26JqioLsLnh59ntl5Dm0KYVr3402Gox7CnEREacy1KwhBQz0Q0RJBK0moGipN3hiIW2Z2ab75eIQpfqUWylY8GaYvUs6jedskVGWJ9Sq%2F3fTIsq41cmJ6U%2F4g5bcZwnbcM81NP1J0SfmvpEDxfTYQNBBEWeJ0VdD8ikcHTbVqjCHpiiGtCHQWjoa1ibkayflLQAtTQF&X-Amz-Signature=dda389334df86731f13e9d032103cd6ab0e714bb849c3c16dcd04c8ee40699c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

