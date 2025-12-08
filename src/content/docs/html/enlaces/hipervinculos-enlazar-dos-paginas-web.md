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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULNXVLLA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3UvOpqmUnDUtQXk%2Fggh6CIpbsBWMvTMjV1ZHDlenD3gIgY0xrBLiZJbzvIDm%2BNUYhZCt%2BBxcTqe3trmBCUZ9qUYgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn7eUMfZXJIlygcwCrcAw4o3zb5TMtzTrGj57TcsBVopRg5PyytQqsxJbS04UbHp%2BMsjB9qNk6hRw7e%2FizSIzwlHI75ltgyMp4qYjCFk8vVb1IATzGdgv%2FI68HVd6%2BWbnMrspuS5L2SYfO%2BVDKMyJNuA95dH%2Far7hWoJVfVmXpXovNPUjgTTV0IJxyo3OKbAigEnjHJJu7GzrlSrDKi64%2BJrIgV6G13VvsrQ3rL0mY7%2B2ucgGQZp9dWZXKmkPAboW1WFNOpudx4u6OUa9TsKLv%2F8v73AZYR%2BqSM%2Bo4MpwpCSmPFftV6X92yYX4g8blnoiZMLA4aDoDBhyDQCTuxMz3jvYvM7D5c4GWxSFnJMfFXDBFXA%2FPVtcyVUHcG1tBJoJJFGR71aInxRx21YgQb%2B5fVIrqBFFWuirVbNkt9VChhh1t%2Bd5Xusb3K%2Fp8LRj%2BR4Ov7uB0NRN1D7Jr29g11Kq5W2%2BQkvfiS%2BJHYkUpqalg56UJBfaLL%2BaVHAGZ7Bcw5g9Xg516L3%2B4sdg0lDnapLh9K5O%2BIgF6gQMWK05iDXNiPlqCVruiRznVTVlUmUC6k2C%2Fhiltx9gKDsWlcqkfjNmqunkpTjB%2BjXKLKRZ71v5HUa6mhgkmRs6LS2xoehqxx6E1Tgt1bCjEGWqnSMIzz2skGOqUBDzjQV3mUgpTmtEgX2JukmANYdVU%2BdnqfH11TcZjHATFemc7hgUmXLJwu3BYoevrb%2BXIoqPrcPKmdssDdfp7gBZgvCjcOZCSYDUrV00EZnh1vrIidyGT08RiLzWFpQJKWNSB1ERxnM6cnF6a%2FzpMTvXcG4ucHOOErrub0qmosrelbcjqcLDCZp3vDXKIYv%2B8dno2h9oSf1pO9ybFfQGm3bZpNl9Sd&X-Amz-Signature=19bb3708da0bd2deaaa63e4e2f6c94b8c66b229ad071586f1c3ae436ddaf72a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

