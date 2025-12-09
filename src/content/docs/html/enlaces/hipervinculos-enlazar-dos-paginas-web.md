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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4ZZHSW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqKSBUJ6RCJNHdUOvOOF6iBBqSrZhIBQY%2BopE9MBMNuAiAiwjk2ahxugv1%2BahyNMBgAUpdOEbEcRWkF8fKmP6OBaiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWe9OtFuQpZ2yH2m5KtwDD98Ur6vOm4shChhEqImukdsJsqo2b2cbRR%2FQeP54P4eI%2FTBaPG0C0iWaIjowsIBIhJSP5ezJwA1L0YyvFpPZU7UwRl75Qd7cjM1mDy5uOHOgWadNQyqxzDuJVXCX1EJmRlnqUm4M5Qi%2B2r3xIpHjyPI2%2BmvpiApeHYr8TemBWwf0UVJslyuognxOcdNOQICvhLoEcwy8z92%2FJYbsZw7lFTzuGYlYqw1ky8XPtmKreznFZRd3cXlSTMtcJTjRB8xSkLzqmx1i0qonFUFFQB9e2ngxyHqPVVwfM2k6mSjqx1d5MuNL7QaWDEPb8TQw5JhAsMm7Dbke2NMrE6SkOuW261RswmUIvRTS0RTEJJBiSI%2FN5bjl00rn7eI1aChMGmkoTPPI%2FxcqJaENNHY61fnMyzPdopyar%2BzJw%2BWzfVa5CiOIX1pgXM8X9ZM8sfjaB%2FXD5XE5%2F2%2FowXOLo9UMmPgbhWer5ueeIoZnqZCpa3yMEOMqnK88XB64mtBG54efHC3yQoaniXIOTv4G70WJ9Th2Ag%2BXzEqOqasDSQs1KmMnBp2W7Qu%2BY8oxZdK9r5EmlvXT0hwNF7J7QgOXkSvLV%2FG7fVkoq3PF%2FdDdCbYfvbUDkRV3w8Uwz5d0whbRoNow8offyQY6pgHgUnaNzjpe8e8Bg3w%2ByxT87jO7b3bad5b48LhkLkGLHiAPD2EAg%2BQ4NxWB49oGvpreeuF8pjUccII4T0cuSt9NrOBuXNFxZXQUqUJiKvPng%2BrnGZ6PRZFi8MEIEuryBKXqtMJoXUs1KwRsltu9svqTLJPqBw%2FO1sCEQcuXIV6G7ICRSlUtm%2FmGPnsjiNy4YKENTG0i%2FeCXU%2FfJ6L3%2F9fV%2Bhp5Tui%2F3&X-Amz-Signature=d560cc8caadf5a96f65b758e004aec1e136406c03eddf5abf42897f83ef37871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

