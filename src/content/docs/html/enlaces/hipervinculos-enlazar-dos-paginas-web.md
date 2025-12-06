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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRI4JUV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf1OqA803%2FjA2pvaJSIVPAa7CFeduS1GWifrUC3WvNwAiEAnuJZFwnK1FuEpkKxkBV7rnC0ZesjtEsayNSSFMGIDF0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBmJTxpKzTUjHZ3PnyrcA1%2F8Srg5gMtbPcigHHETZhe6u5zlzA2Qp0%2FMzdy3KU6AhrxLLA9NT5P%2FH22rfejvU%2Bb7bqYZAdiA6HJWBPmYMoIAFTvCr1TPDl%2FEu9iUQ8JEsxhprrrUybvHx15f2FyydXiPKqK9eAqf95wkoF9NTOnfbk6z0pL%2FbfEuChU%2FKrZgI3BfH%2BPZPttkPKkvIrbkT5MO9Dnwzb7xq0em2F663CvISfbs4VwbmiXwvhctu2PnQI7S5BmP1eUSxKtqL65ofRZNjDX3wlioZBjyhILFcFMpaPUWXM%2FZKxzV%2BhKNQ2LaoaPFrfHnlU5irUM4tYUQL%2BSmrT64WH3uEFtaDl9t864sP5oG6UeaPyzZlI%2B40EhS8LSkLtWJPD78B%2BdMGwaDMOHza9Z%2Bay5Vn0G6HC3Wmsn4B2GS%2F%2Fu%2FkL2n25qmiAlO9oWXffPFqCRF5%2FWIdUNopbyv2%2BdW38LpnEa4E7HWwpyn%2BPBs1I9JWSLJXnywqLOF7KLjAz1neXHzaoRVxuvzLmXMKjhpJ6MRYa%2FXWvglq5xIK4OPyJ%2FGopQZxCJ%2FI5LyUPiSZwhR5f3OpyDYyhFME1Xfew8uLbWvLPm5zcAq3n%2BYjSDT%2FHpfN76hQRsvhozEzySw07MqFwWE%2BmImMIC9z8kGOqUBj3edJCH5H%2F5uQZPk8JZp1%2BPleATANZcH%2FGerbgp3nmXMBxHPQYdQ266rQDjRxUOeL%2BvxTRE%2FYwvHPDTW2YRy5QEccILFsSWP3jd2vjsOBowhGYdzyfHmoZTtEwOSKZszAsxWORWP5AmwFDcOa%2Bq1r99ULMiEaQaT%2B2ZCXAhLMuar%2BGBQZOsjyOf5256kh9v%2BTTRf3%2FrdxaKU7Ma8%2B%2BbyBTlcWKTY&X-Amz-Signature=bf52a167043330f3b2421d23271eb2e5c42f2bc74be0eda99a02fc4d4859bafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

