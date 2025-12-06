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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRBIWDC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP3OFqszjJop7dbOX11eWCoXjZcRN5Xrpeh3%2FuNEXLSwIhANTbw8Tx3RZl4wQCXtM93%2FzlvlAwuuFMVbJrQdCQc06mKv8DCG0QABoMNjM3NDIzMTgzODA1IgzzhBa7J4AC1ho6GTwq3ANeQS%2FXB6%2FlJOhiIzdFux1975T7K46HlGca5OP2I6KB03bVDk3NeDcx9xnr6Rxp8E%2BQ%2BQcv0qhR8h8ubJt%2BuVTdb%2BppfDwEXL1OgBYny0RtUhYQgFqdKDA%2FYw8AOGkB%2Bjz2Ye1NLfwKoF9BhE2ai78FN621atSNd424N7PEjFgptTe5jTwYpOxl%2Bp5eD%2BPq%2FZRu3uTBcUrWoz3P%2F%2Fu5nbrrot8bnMBQEjfq3IOn8Kty4ep2UuDbnwkw4uLtlioZRiQNdtrOJhpAoYMf2ldoA89Daeox73c%2Bo0T2F3UR2RGdsXAR2Rs0mhKEaR1nHnVEvL%2Bzf066VyDlPCLl7RM5DLqdbLa7gv6f4NuoSF0kWZRV%2FXAIF6Unt%2FFUKM8cZRxWjEAeZGsQKlvMDcZSmwdcI2coH4Zhq24UZ%2BP%2BiKh0A%2BZ21XeO9Yn6wGCCtysNyE8Va9zcMeVApGb9C0KYUNJG2RZv34cDkZ3N3jRRFpRWMSKFdF6BCyLLDeRrSqFTccBPpXMpm8UflFwkl2XRyH7j%2F1XpgdDnQyT2sKfQVPC2Tk4BZVhtuhNSHd%2Fhp5H6wh2IfAhJIfqqWmnlGU24OMwGGj9XARcTW8yp4mPhcb%2FVANmrJfcbwWmahllDANKGdDCww87JBjqkAetApkFATUpg6QBoQWK2b4Nc8Vh%2B6mBmuWUUPD%2BiR1bwTGB3v7q4o0YTfo0DT%2BpSPBdVgQADK34ZVI2kKUHyuB5g4Yqi7%2Fl7VoOdWIA%2BGR%2F3PfPbxxF7xj4vSDzU5RleTXhc02G2bH2MLZGGHjBYNF%2BeLVdJl8lvIJ%2B1gE1te6Gq9FOZ3sspVdx6LohiemLDa%2B%2Fmc%2FBKZaHY2QZQjQJGWUdxtqu2&X-Amz-Signature=691ced39de2f44effaf7b2451654a899722c0e379bacabefc13b447026fabeb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

