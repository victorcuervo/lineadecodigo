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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RL45GB4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlrXqzY68P3F7bgj7uLz%2Fxi8awF0C9%2BxrkRVkmysNVqAiEAs%2FTHA%2BJd9lGpXX2Xg8d5ICiC%2BXMtTCoFZKx8hFsfbqoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDECFrgnTX%2F7WNo7dpircAxWRCQYc0eJBTNyCkvk7M4VQQT2YkFB6uhUGQEw1E8nwmIPMYZ9A007%2B2j3ZjGMgW%2F7AkGezbxmaIylTFN1z9OtZtv1wADjScLs1XHSwAdMhVCWhDxHBt%2BfS%2F4pRG98LAt5Fy%2B8E48zoIABwcOOhagAivbBi2bvNBei1BmwuhP5SayFeIhkadSmY9j9%2FnT8hPOZva6LoyXUTLXUkGBgwNiIs0Vl46OkAnxOt5INk379tgSsSCCT5TMUuliC%2Fz%2Foutag7g8tV0PHhVlurtiT9p07fbBaQ0s7zyokYnmSnLH%2B7U2BsF2Rfw%2BUPdAbcbxo1rVpPSPtdLcXBbzYnpNTqYFAcduVoisiZKRYPh3lwhvIMkhw%2F8B8WP6vemZyhSng4OZKM2%2Bu1kZggHwiTE2PKpUJxEDCDr1orMm7t%2F9cmMctkqKOdZq2Wqg%2Fym7FQoOwwTBhPLHGFigG9CjOj%2BvIeEMIY9bL%2F%2FWSOOEm9Bs5AmwSkXx%2F6fW4ySukeK7%2B1VJ2OS0UH9xt%2FADRxl1xn4avt0lSzHVbEJslKFp61rKlJn%2F0zofE2OWq2XQupOm3OSrSP2RRT9WzeI2zBZyReXvOj0H%2Fmy8FWV4cT4UiyKmvCONTMJBCI3bbXdDaRc1%2BzMJbozckGOqUB935w4EQmCaSRZqPoQf9Txik%2F2eZcpHTRBtRX9Dfxo66xyZbq62%2F5%2FvZh2LyNRbEg%2FJy%2BZAgowNRKR2e1flcbrhvw0Wf7f6uqe5%2FLl5mTOGDfm7w0dkBJu57c2zGBrQ9Kw5DoGPcnCFqZFYl1aGqf1w22GCcYiz1L6QzULprGMD2yOGyEWr9Nb7JT%2B%2B53nGlrkKtzi7TS%2Bwi5gr7elhlSsc9G5HvV&X-Amz-Signature=bbb398412546c89cd86c9a2afb9d1c097d1ba482c2e8e02ab089453cf252f64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

