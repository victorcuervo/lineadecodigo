---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXVSJGGK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFyO%2B%2FVwNSEPh%2Bj1iJ14nq1k0jmr%2Fkwr9SzVs0TU1PVqAiEA9et%2FzgXj8Nji2usRSUk3gkB5swkTYz9P7rCHy0xz%2FlEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCTh15t0pt1zqAuZPyrcAyKk4zhAKFuBkCETUcMYMRCdRe4YRVTAbF%2FY5oiYMSUIQu%2F29vP7B89pn8cPAQzUxIFvAgg7jggTvgtGP6dxOiRAV2WVLPOZqHGA7Io%2Bai3iO7yjmsO3MBTE0Uwcxp1S0Wo6f5ZbNXvgPLTmXIsoJLvadQGwTTP2qMyAEtzkXlojUO1C0m23GAoihTVD7VFG75kn4PjdnAIiZ7zFieA5tej8FuYDb%2BqGJyloj35opvQ5wI4nbS4AmE2Ftf4YINenQg7tiITzvvTBSxYuoDbidCN9ob2u6a5j8ywWUV1xIZj6D4oha%2B%2BonBuHyLBpjeRCsC749U4kxvJFt7f%2BpTgouxdIEhFxaeZXbFHI5q3sGw9ccnFP%2B9ALvFaNrSym7BnGq5eCIqK5G8yK2wkB1KOeR6fD7w0p%2FtQIPsZYxF2Y51nIq1n1woMjvxyHizoDc9Xs9kCWfnOtjljws7s4z2%2F6z2AoVYefIe6o5j5gerHHQigh6obkWrO2wpXESJCMgEO5mzxBhzQHmxyP0CgCBrNbsoFqQBdWZr4oUuD3sPaX8pxn2bQhLX3cz%2FNzz2f8sUFNdR%2FY4vglAJEQ0xVYfmDUwKVjXLWekXYDzA7J%2FbmwkhlQWrT5L9j1FlsDQ8PlMLmuxMkGOqUB%2B1ybRxh0cdIT%2F1WkD99neT3LL823mczb3GlkFUGgBAThSqtpnYSbc%2FPjDSJy4JEDjNLXd3JstF%2FcvZ%2FWVkSEN4KooIU0VfSQ0JqSeTZXtoueC3iWuZGyDIr9n7k9rzcTnOCibDz8Rg2hY1Z4xJ1%2BlE5t1mLttbe72fFadK%2FtYvhdcO7VEYqTolJ64jz5iqjIEX%2FdyMy%2BHfBeWsQDP4BfdUEtCj5E&X-Amz-Signature=0d7824eae820e58f77eaf37ad08a189917b2234a01989ed6a585fb9716ab63d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

