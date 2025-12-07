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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKYJFXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8cnHx2pM6kl%2Fi4WWK8TUL7FvIXnNAHOlqX10vxOIWAAiEA%2BHWswDonlA16k63VNg903p48aANTtz8f2zYZFfrbeIAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK56dwnkJbv8g6C6YCrcA1PCNJR9q7LJQ7fGgMmlF%2FD4%2BtqMQ2bApFi2l4F4fGTgsmY5J8FTYqM0ZyDYy0Z2ImVOpE%2F3Rf8po0Rosk7IzYywYMPxM%2FS4iDfpYmPE8duktuYHfkCC8JAoQjHQsaP108Q1X%2Fmn69KSBQbqVfF%2BdyNOacwWiUOKNPQr1vyKdlhNWx0FiDhldU3FRLUTOTUbPViOYIsygGKCpkFfgr67ciIM6NBwJD5Q1HAt9vdCiMMLZXQHq%2FTfIlD01g3CyScLjbC2bff2tXVQUTSPSX3KxCesEriZcn8v0Wqa7xjLL0GzJ24LRjHqJn4y2w9jquCyFUVGrgkZrcYZ%2BX0KUnTqX77rZf4RTfVomv4qFwEWjtFGiMUbTTL31dUYHxQjh2xLdedscsW9HVQIAYxVcaihJ0tiQD0oSCYihobLmrtchVCYSkI%2FJUJkV2vmH5S3jDHkwmOkRRCLW6WL3rDA9M0iEGIe01bcx1VPtwoN8bl6SNvfU4oZ2LoCztMH%2FTB82dkQUWm5rHkMs8yBXTFYbR3G2WS9%2F9kYuO0t7b88yhfaZdtYqcag99yKkLNn1c298fJx%2FfuPqnJE0xVOC9F4Sd0x0e5BKhIdDKTqj8P%2FaYkhcpTdIVsD3vAgKZq8ntevMKD90skGOqUBlX6LzlY4jSACMJNfz3NpVtbMUCc8E3bf3pmYLOvS6psmWwgX79YBHeKVGxMbb5P37RGYD21R76RQCVFb76FvjisJW82aplyS2cxsdOjHKb%2BfSveh3IIN5rKHjJ9Vi4RszY8jHGt5wpBZyCx7qeHt4zZp050yuxYpmeAmU%2BgfC2jMTJA%2BfVG%2FQ6RArp2Wk328kHWB0yPGYyIhDC8Q%2BBFZygmw3EdZ&X-Amz-Signature=0f11347fbc81038edfdd92313092391dda44670a822bb8a1e4f6dbdd1f849951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

