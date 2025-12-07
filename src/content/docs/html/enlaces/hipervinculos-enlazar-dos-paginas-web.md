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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAR63OD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltynKv%2Bfm%2BOkhqmoq18Wokhk9JxIiK2arzxm3ozKVSQIhAKHWx5Un3ZOZzG0W5ZtnnVzOOCwK7gY3XcPfJEROEjrEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbXsIu7nknKdqFXUAq3AMocitLqchMMe2Yt6SJjOZaBPa3BfaUIwXcs3KjfI9fBSPGJW%2B6iVA2%2F07SDzzhkWH8lbs6gixpyUfV9OESOkwY%2FjgXXFy8AWdNsQz965UlDGXDj8vqQr%2B1mEMeloANCSFvaGegyqGhct2b0cuD5tKo3WdzgNyWT6Oq4wH2dgl6brcD7hdt5kEVJlnN8t9BU8PUcurIXSs8x%2B3J7pxrH%2BDs3gXngaFczwlooEnN%2F%2FETiJmCKRIthguXe4Pt%2BNu%2FGeIjkDgbGJRDDcoXpq74poeoHtZDPBnDzcHsrN5GYg38c5EpYMGN5NuXRxJ5rz9PChbJRQhIBzHIfQyHYAej8bcpekiXvBPPYIvhhqzjSLV7r9tVbeI9rrcfhNVgfouQ3u4k%2FKEqxuwUxfS7v3oCMG%2FIT6ZPjEouTuu%2FdSrNNq3aj4KwsUaNLhnUe%2FU8kGUtstvwEZvKnfpMooiGTzgntfzHTB86QqPXbeSXjYuCqCJ%2BOZ9jfsqUiYYrujJk5pEztX44l1K3W08QBhKH34htvyr6mGCDIDoun5Mn%2FVE06qQ3Xh0et7d3GNMNnX6ZoVdujnsGJ10beAd%2B3XGV%2BW9kBEqR7zjHrirzBlhSO%2FGqyTfwc%2BfP96sFfJ1TFTX03jCL%2FtLJBjqkAZZJyjTrCdK3AmiVMtAbfacvq4ag3FxzZfuhCb3iwiCCSDKgm%2F7tIC8TLGOdZwYltw%2BWui1JVnRystbj5qQU45M5ORBBe6mvHaRH2AT0Ae9lCgFKmmzx%2BYcQIUG0uG3HeGUQHaeRlCqydZnWjOzRnWn5Oz9hfqEg8ZnISszQln%2FF86EcwC9y8On8QvhEla5mQUY4UfZ3v1%2Fz3tp3LI6wmzZ4zGNz&X-Amz-Signature=90ab8c526a0023c0ced665bf0b0abed7d3b1ca2ad5ee9665871a1c892c89a127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

