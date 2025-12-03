---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY7KBAS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMWYRHSX1NsdU3O8Vw%2Bq4QuAqsslgLjXuvI2Vi08HeZgIhAKS%2B1TvHrm42ouL0ApTM9jVURxeYOBNgB4NUikXV4r55Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyVUIdTlU3twuMKTa8q3ANmCOGaBMu0C2URyK4CiEFEX6HeeOipbsz96uGnkzC%2BcawPgUWy%2FIw0ZxmvKKfTGzw%2BTDPvQ4Osk7VByiu3%2FNZ1OVzhlhWYuy2YJvVdnCaVCOWKpblwbKhLiQg9xD5B8nqv%2BD2J0t10RCk5VPzIatA5zQGYZIbMSjedsmTThGOo5ib8krX4Dn48uxbtVNInZLZeUOWx89BWM%2B%2BqlRkhOyHHO1YjSfXevrncyeD1FCoOXhVNXEwnKynRgKRLhK5V5Y4PDOp2ALjwjWwP%2B6mJaDZtF8RKayxhWhdoHDIUXXDkLYwAZwDUakFL9P0OeWIGtkYlfwLy8J3%2Bx3X6Aw4ft4CU9%2Fwl3Gw6u85bX4ZLUV9X4kT3g5bs3cBNz5ttRSJ1KUJsGx0fPyReQEbOEXRomHI4N4PDMJ2%2F2eiQOYhkPyf2OgK0skMVTfmD85YLUJt73Am1MdSHljTn%2BjbtzVqJZdMd5TQONiL%2F3RSXDhrFJvQxl0s76po3DC4VDY3aAjPAU1S5TefiHS54H3YROtg4aNDoRDPRuF9sd%2Beup0I%2BJxx5KfBrupNJ0KVSjayQI8EXVvvJ1iwe9%2BTrBI4e39CDe5%2FsriU9zG7bZqM6GjhTzygI%2BO6fxCuVW6AJBrJ3pzC%2BkcLJBjqkAQvfgZT%2Fm1wCbl%2FyY6VAkD1jXxEpNec5kzhmqD8YUOidVW64w0AkYFU0sx0NA8Nqh4mxL3WBWFSkCcQTcRDPAkhDH3QpiQvf7F2pP7G%2BpGg2dVFrQK2ZVltStf%2F1%2FGbJ3RT6BJKJRjSjgS23vro6EGeoMjEv8iCTOrYsrVrkT0HjxykGrt57NqIxru7RM3Z5%2FqKI%2BqP%2FM3MoHTRR1xz3rRSy29OP&X-Amz-Signature=815e6e3f8e331f56e6730612c6febc2177c064553102bf93cd465bfed03dc46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

