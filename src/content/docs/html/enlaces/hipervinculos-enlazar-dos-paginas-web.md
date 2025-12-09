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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q65EIVT3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr6gM7roakrsuxNqz23K3eHgvWDH4bKnpzZWXx25HpOAiAh2B%2BXMuHRhtN5GzXDBxdYKCNOYqH%2FvnAieybqXc%2BXoiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoYBLiwv%2F4jBo%2Ba8zKtwDlDcHBdrLSGfGo8MwxgkieWp4x%2Fncu5uJS0MgJ9%2FB%2FsxDIDAE4kjxW276Uql%2BWrZFpEJyG3QRgR%2BJ45u0MwtzaJGBTlyi%2B0tzz9UA4AzFkprLq6tDBIQPY%2BCgEhSPFtlwknOPmtotsNkBslxtoLWsoDBnKoah5uSxDpA3SMSV%2BHubiR4HoNuKHQCjabd100q0sxkFcpC%2FCNXcvfR9t5fYt5wbIQ7YAxFozY4%2Fw%2BBkW1z%2BR6rJ6fc3VupsvxiIV5C8gJNzIiXa3%2FqFqUIFpupwWEqanZ1X%2Bn%2B2KOW4eCrcwEhRgu7hCQdyH1ZDkT%2Fb0POvYzdSJ93KUsHoljxbXY2kItcbKiusy%2FWNFifHzBZNNWk5OGVlnCPIsIzjWvT9jasc5Xrwtr9yQWMYCts2%2Fw8EtH4zngoUaUoW06KxqXINreKacNtnWAcJMOvkkiYMMw6k4fsupSmE1IDyBYxXtOhbzboRSN8E4GlDi8JWFPNDQDgkTbpZwKAsVBtBd0RnPZpIcGF3wDED%2FR7gJqxxWx59z6LacBL5M2Y0Wf%2BLZLeEKdmBVnj0fmMDqFh0AJIze6tnsLub48UTY4vn2RIuG9RGdxcyTERdBSjIBXyw6%2BDEK3ZUZVtby6YVQzWIn5sw8I3eyQY6pgG0Kqki8bZr5WSRyNUctyQPNZeLBt1YnaG%2BM0hAobw7QWA%2BMo%2BKHdpUOlDI41i%2BdbXGFGnh6H7cCgu76p5InYzLw%2BoUJ2I1VIh3Mb0nmpQTgYup5vVw89vLyghEF0SxB5yPfdRhFcEtbJjm3n4n3A2XDT6LwMsNyw5Btv5Kcw0Etl7LFePsX9Bw0rmw%2FAzYcUAD0Q%2FwgnESOZZHjDCbaOCCe2sDABUn&X-Amz-Signature=c1c3ff2593b568bedfd1a731510d8bb18dbdf9f6256cf35544f1e593962bce19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

