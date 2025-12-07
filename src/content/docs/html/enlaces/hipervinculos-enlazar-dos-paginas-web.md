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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSW4YHZW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf1asUUrfSQySd8t4aWgORenHCEM1hacXr%2BffHVpfUzwIgVN5bHtdX5jMk%2B6TJgYtIVqy%2BMto2cHUIBgXfssar29AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLegraaVxV2f3uwAbircAzbY%2BRtlT26xrt8X2RVlBAWj9zqUJZlc0cLKWegWlzEOwUXXwNDCJfLC71%2BHQ%2B%2BhQIhbPTEeUCQMKOAUHOxDB4jlpTSDOG4LgoOL1lhazf%2FfpsSlH6UoM7t7GuDQYqyR9t107EbNQu7W5fjP5ELUGzoqg%2BF0ELp6APqUcEv%2FHe1%2B8Yz0KYUcgztTR8iGkS8CZvdqzmei8ITeH7HyEex2LaUmcyyThBk0fZilfw3jxlCz%2FQVKMG5Db7K1GvyM4Ukh%2BmNXqWkrTCjvS0PGBc7%2Bg6b0Q6yX01DdX2z9Fqbs0OYzPmASQulxV3iWtBRx9alY1NcMLKsfxxBnIbytsSezTfRbIiHfTXHHnrcPKqNXEU62pgMJk8oue7haW%2Fi4paf393yVBTsAY7YEAKtXS2L69LbRKG2P0xxjCBb8QNCqGhxovjW12FsnoOfEqG%2Bh3AB9i5d65qsqif4%2BJOyIzEs13HyeJzGeaOSWk8NJOvESoig%2BYtGF4g2Vbt70wu0jvpXKfvVUNxk0uwku%2FqwLXAdukvRZHh0x9Br%2BbzBs4eIpm31L54IYymT6YxvelyXZv7Vb6jKsulH4RfG0EL8nwvitenGyJztrerpoXsTh5PGpOilHcsVzeaPEQCBsZ8rnMLy31skGOqUB4TNGcv4LC32tfyRkcK2Q7mzKYwebQiGNa8W0m3y9t02tUeSIqWS%2BTK%2FyT%2BlLLMeMD827LTD04%2BvD2LWE5Ua4Po%2FDcqvUBu3%2FRwr2DV7Eh4GkYIcYX9IsbUVlVLgOhZpMOQluqs51k7uXbvIlsVKv9dDx7ixP37jK8QBjO%2BgdLsAkcWGgbEsU23SQmpx3vgC4IqK0e2GxwddOCWQiu%2BXdjZNJlPbE&X-Amz-Signature=8a42de0d383fe8f9ff5a8237c027e5798688d82adf4457eb238aa6fcaa5770d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

