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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCOANJB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVhXfrRnTauxlalL7PgiaJwmdKcd0r2A68UyynS4H6lAiBI2oMKwG1pCA9vRN8SDYDDxF5vU7FqcgO81t8tB%2BwllyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6NwOYcySxWe1%2BWNiKtwDGa0iSpqK9hm%2BRUPbP%2FRkvNevY%2F1evqWfloAYCJLKbBmxtV8rqlzMqdJXP6HXP%2BuEPuJqajvKwe2LaV82BU9e9n7IkqmUE1Cj9ZJ%2Bott68tiFmOkWBX9tah3M%2BZ5dgEoGf0xWHDYzCt2p4YjkFBPddpB7HNZubwfUO7hcBjyPkEMc7WfEOIabUBGVxsyjq3xRV7dLtymfvV3SpfWYEE62oIScxq45onhJtmxbXJtkOhqr8MScZin2O3W4DLSYe8eZlABJj08LYFBfjXoNcLxIjiKiZCRugvK88JNM2%2B0Vguk%2FxlA43%2ByM6yuJZy0t03iuZwUVPAnY3K8ruvZYACWsf70%2FeD7SFWQV1QC4TjHmaXrpLfStb89%2FCuLyxfr04r9uTkve%2FNkbcyxSlhX%2F0ShWF3%2BuclNrM85mazeoJT9iiVneRYvs9h8BYpn4t0X8kAB9MkgrcYcJKsWt%2B%2Bzf%2BhhnzSGcdT8mwVOddM1JjEF7v5ZAyM3vGMg4sohf%2FcD%2FfmTma8Q%2BpGjTDks2ky9j7veykXrSKasmrX3PT%2BNWnev2FILuDgvXaTO7VeQAn1WmUT7e2r%2BIU4WsEwSW%2F3LJNQo23mVO5mxUSOUY%2BI7MU85ApPt8Fvosi3Pi0oNPNXgw0cfXyQY6pgEa0kLeNstoONqClbJio0QN565yjMEl37%2BrGVZLMICU0cDPBX4HWump%2BFZ7oliNT3XEShI4c8vg02Cp%2BSzeVuGpbTN15lKe96Sq4%2BKaTqLYMdzUw8i6MAbJ0mnKIt0wjKQuMDb%2BD44Mm35RZ%2B0T3nJ2uWk%2BtEWaN5opG1tWT1U08SYHkYrS2uVMdPru%2B01eT%2BYXJn3keSpxeVd3WHWR9P6nubrBBjT%2F&X-Amz-Signature=62e87cdbf024047505323a6a85a3772473f7212259e4797d9a4b5c52a74e64d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

