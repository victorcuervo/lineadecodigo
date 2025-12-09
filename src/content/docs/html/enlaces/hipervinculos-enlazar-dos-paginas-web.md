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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB6YLGZF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElmaEo%2FvoPIRBM67P1CR5cTlcURzv3DDg3NNsbWAG%2B1AiAC90j1GbgY56Za7RgJ3eWsxFE8ZFyTtAJD13s0YnxLYyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2M%2BFZLBv82Q1CwrKtwDeF5XzSZs6v9nVEuM15099tcDRJOT%2BS68HraiNJwWH8lG62kJQtHxuj79UmZ3Ds1rwaQf9EJeVcVqLc0I%2FTB3wXfBws61ftvccVraBNkHNw%2F9J0OGUtVMd9%2F5lupoxrPm2UHfFe8Kjnet%2BwaBfHEjrt8ox8zTocGghYZrfkDJWdTQC%2BGp1prwezatkaev5XtLjqwYqO8mwGzyfQGp%2Buzy%2BOAuM3IZDzSlZ3PkzpMJAgNH18BeHygzG8g3GiWn5gJZORPq7sEES6QJ5NiQdiGs9fhHkHuQOSctv4ggnxjfSybRZzbqmN54ppvjxRVErOvNx4x8Z6VdtH0edHoNNRmCOu39BMcYAj3WaC7dJvF8CgghOfB7PFl73kWMhP2EwkidT9p%2F2iFWH8e6Je8SADdYE3UtPAlZez3hdksO8inVx0XBq4vQ%2BqFPYY4oBF5i4l5w606ThfNLgTmVUypYo69c8frXsQK%2BLKOZAgMyGixhWd1l%2FmdFppohwrGTU0MtUqIlAQiTAt4TuNuL7rLq4g3T2iosj8hB1rrtQtzDBYEU4lr8stMgOSilIcfZeUCgTLgt0EUr2sCbuCzgiWghr1hgP7KVokDFbFmNC%2FCVBgKJ0TncPBkmNbN8rUwbfdgw%2FMLdyQY6pgHrgr4CjlUbrewkuwTCqyWcgHPVxGElFeC9870enD7A1b9%2Be%2FnUgXbh7qWo3RWK5QIWObJdXFB%2Bk423AkPKsThFzPQ1x9ISW0S0HDKbzUBeZUru510Tt1wda0I8ULU%2FTonywTn5NYR5FK4Ip6PVlYmXdbCm3G%2BgjKQjwwyki9bxdtGFvV4ir5xtFxwfk%2FJ0P4GpiDAxmKUl1KkfVo6fpJMLa0uh4Iaj&X-Amz-Signature=1623ec8d720c3c77b9f8e4c579d3a22f5585e4d1d362165c48810b2041e1608a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

