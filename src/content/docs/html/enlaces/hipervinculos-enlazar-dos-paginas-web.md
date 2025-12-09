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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHBW7JL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItFHVDZOc1K6B2OQ1mw3eKSuxLXq4mF9mdKygEhhjWAIgJvpIZRV1zBp6hHhlUpRHhO%2FCmqR34K94xRHTTu1A%2FukqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCM68hFKGSD3kWIf4ircA0P6GoASmI7TL0VXO6u4j%2BfCE%2Fuv%2Fu4Iq3jwVirMQwOiTbBa%2BQJfktMI4dvDC5CW%2FMjSO5i6fjkw91ZshLnB4q%2Bbo7hFjK3UNPtjT3DZOzt5KLnsSTXSB6cq%2Bz5VXu4tq368EjpCB9qQgtwoRG0pBIhxNrQ2qKKSf%2FGL8CMUB5MKqPuIc39e%2FTm%2FXj49q0%2BAZ2QcTPEKu0QDKVjgxblMv1nHGBxLu8qHnyyAQbqqY5wHtSvMpuiXzd3aKApWl8H17PExqM1gQh94PuZaQcGGKrxi%2FkOrFT605RK8eMLDM05jeRUVLirWPcei%2F1qbwtXSipwvrbVt8RbNemhhRRciNJO%2BssCZbTB4ldZGqQ3dIyR%2F%2BwOeSHj1GT4PK%2F%2FZEX8HA9lnpEuqpO1XhljVPJKwNQKVA3N1N6ejSygPpLb7q5Nye9ZHPWDvbewYqrT%2FOJLL3wX0gLMw%2FV1lbOk9DMs2tdECtI6vUjphgAR%2FsuMrkzbqQ9e%2FLfNAQKFcTC5fGtJlNbKrOm6h0xm%2B795fLNg%2Blto73lqqaSdneEf0lvmNohLthcWW%2F9H2e2Iootkpgvvvpa0mQLVViKooSW0yMaXKVDuuDrPaFvF4n2B7hjy8ijK2JyFNOe%2BLdyaov0BaMOfp3ckGOqUBxuBxa32KqBMnWGY3A0%2F2EUMJBpAFzwSXcqWphUG%2F%2Bdt63xeDYKO7%2FDoaE6YEFnO5p%2F6qbthE2yYbjv38kPu%2BQ1%2BTrQ9GBMl7ZS0qyQjM2FqOvvEkHKI4FDfIt0T6pw3PdMZBluFQFa7%2BPjfTawIPPNKRtLTj9u5HlcDac9QxrKiS0TwTP6iGJNaLNF67rsFO5%2BX3eLyxsbqKJj87Fn7yP5JqmhqQ&X-Amz-Signature=12e4ab82ab788cf8818fdd42edf84ead0038ed0ba703d294d04a54f41a530752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

