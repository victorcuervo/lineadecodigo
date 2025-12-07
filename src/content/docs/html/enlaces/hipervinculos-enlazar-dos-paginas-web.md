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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX4CT44A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4BOftgvT069aNnzESQpn8qPqZc0%2FEcEg2fm5QhmJAmAiEAja20rd3sHd1rBV3Sh0SDDv%2BgEZD%2Bxv52Xjdr9lYVJZYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVu7EYY8i2vqJsYWCrcAyfCTRysGahDrS9VIv6MDKRY5Xo5N7kgd7h0y5%2BLkPTM7IYKf%2BsGQVbDA7cUnA1QAUIPAPMyk%2FK678ZZTbtad36wBXaw%2BdOPhc4oLp2klQUVBceUcD7%2FrzGYRnnbej2P6GVLwqte5VUEeYiDfAmiH9k3En9TMC7GtQar0XYpAlKBuX8fa%2FHvcwYcATdxaS7LWiaKQrwE5i6rkq9unZXjpNe6hwRcmI7xwvfpM9d8cs%2F3vErU68Mhc6u25UXJQGLa8VfjXIr1ikOxr9uo%2F29CdBNCd8Kg8jfL7T3FIfbWo8ICF185m2SZEcCFL73BamSu8ybV%2BuRhgC0%2FU1t0hKhBxatrB4LjdYbK5VHMXKYKk9qt%2BVOsDdsB0jZTwKns%2Fm2NMB5ofeE4sSe2Hi84cV63burKMFzizWoHFke9zIh%2FWO0aq8JlsKioAirGUNscrxNdIdUG%2BdwnMQapO1mfFG4MgSgQxNlxN0FqyN2o%2BfJumDxeEHkXxSbMu%2BsOBDmFi2GQuQLA%2FE4SvkDFC9pRILY4hYJwwd%2BKXF%2Ft%2FOIGxbrcQz1OXP1vfLAWWRxeqo3YuNrM%2B07x3eOAnG15tFkELTWVgGYsshLjmkvcaM7hAFVLSEN1Sgg4ClUE5nRpFvRPMM%2B61skGOqUBx7y%2BvVZ5DXXgS7uc4E1%2F9AU3jd358xXP%2FgvEKKni2JTj8mDVc%2FyaZrnjkeLfe9HJQN1hj3hZg%2FpA8TTUMp3dr36hrEjPNHXI4BIVNvIDb9d0yrDgBeJhmlRq7BvrcYy18p2lzx3vKZiuwl0cAiWoG5w6PaA%2FIaHMnXmiSlSH6O3MF3JUzE3oJK3hi4Q3N7lBXIyLce72z8Xfm%2BVf9Fs9nulh%2FGrI&X-Amz-Signature=3c4057dc9007aea63159e5e30e0993830d4f439186cc6a644ee479fab074e25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

