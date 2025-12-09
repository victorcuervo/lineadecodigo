---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7MW3C5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpuHrQBVbl0mep%2BallI4j2D7pSaZf%2BbqGgVcnaAWjF5AiEAtH3Yk0Dn1dqn%2BDgKC8ZiisKd65RWKOXgxgupwdC%2FxFsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3H8RcUrHlEbPLTOCrcA6NLWW%2B1%2BDVPlkfZQNG%2BdpiSOf9qgoCqjURnpc9CNxQheNZV5WmOG7UZMva2DROr2kgosHqbxvhQJPa1Rm27UrfIZCAM3faec15fPw7lhs59Ur1DaUjaUri%2BB7%2BThtBUPLF3Qzl2ySD0qnCR7KZEhXKRnxxShre0qtsYM%2FnYiVcH0H%2FE53yWC89uHxIjB88Q3%2BcXxcwy3Z2Qer%2BM1g4ERelnzH0hPPHXQ6yekLsOnePzjIP9RGY1oPbyB4LNjQ%2FxsLhaohBA%2BGj4Cfzcerh6ASAiPo3JtGsyrTvfzZYezVyE9pUm%2FkYp9obdokGNdGv3nzg%2BWBuwS38mdrl4FUJV4KGNcR0X4t4o8uJ%2BCUDNr%2FNZ85dzRTPeiSntPfMZFCcphHJn8TR41rswO2kpQAuBEXcr81S0B%2FQ%2FnKKkiHYVJxfFd3z9vIeQPrrt3O5OKaRcHUwbJ3Nt5kmKAk3oS88LVDCtDTFkac7RFFrOwPz0ircpeQRGzZmGq5ySiaTIjZc9F4o6wkPEX5MZuINb5DSxyiL0uuLWFXRq1PRs4drfjliB5zvjdQYvJfwGYGCfPfPPCSJZ5MfcOZg9WPmpAleObzd%2BUdAxDT3a%2FqfiahyDzkUyIkmkdMfFehnzUgdbMMrD4skGOqUBjTR%2FBzYhvHEOSg09IT4a2QB%2BlS8xZu04E3rbnSjdVPnZY2UccV1KrvJcs90qn0jIrPiaYc0H2QM5y080%2FAbxT14Lc280qofxezfIt%2FrLrCBxLDzbTIWgbE60xrZvVjazZXc%2FXdjm8pD3xcdiH2k25KoYROh5irBMvqWBSKqdYGEw3Vqnt6WJ12rp58MxkoyxVTlGehVI3HCvSvLjUHnmDnfQTPEW&X-Amz-Signature=6c49c6875f9621a4d03d738fdf4f22f393b2254cf8247452291c68b5e9c70951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

