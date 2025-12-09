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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USKVGP26%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSlG%2BBdL4jB7iHqpeAwf%2BfN3XK9kxIEuCiX2R0mdsLCAIgYqycR4xNdgEyhD1qKUTzRj6BoRGJwcFrauVYdFCLeO8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqLTzLDN8S3iJ2N4CrcA8HnIpztSVYcc0%2B%2BCGxLaN5Ev9lEza9YM%2BLzV9PcO2qiebytfHd9N8jjoARPUSszS8kg4v1yRY2qnv%2BG4jwI0vJDcdVsS2pEDSqqH4%2B1KUDekRVvU4q4lWOgVngNVulfKqma%2B6tpe8nri8x9k9%2BwbcF9PWYPnC97hyN0f76Gef30yi8DKlfqs0kjkI3fmFltRhqtdAXxl1xSuBRF80vwrPPxq%2Bd2nRfOeyFbXM%2Bb%2BdAVOaVyQS7MSQYrfNwKIqD9%2B9xYlO5FIYs27WVceP%2FiMrT7cu%2B0Kob5NPoyYX%2FyD%2BGxBvpX0NlU7UUYNSEGDzt69J3xWTsAarty41kRINZLCj5RttHiFnQRy7s9FZ68ev1kfkCPlMzmnQxEA3AipoJlsiZEen2BZpQUzoWiNYqaxfiwj%2Bp4JNwUW%2BRYqc%2BLmksVO5XoK%2FxDp3%2BOg3RvEwyL6M7RPYl4LeprzRfku5CGxZgCOZXUgaekRmO%2Br12BwV2N3OUAb%2BIWIHh7rEDBM4QCkbfAbEDCVxENLm21UfR4wEnDnGy82LJ4FDlwiUTDdrcLvvVkEBdGUrurxPFrF7ubI0hOyOyWdmrs9tPx%2BmeYDxe%2BawPpAE%2BXGO5gXDNj021yN4ws6nRgURE3tlulMPnk3skGOqUBagf29iahSTxUlVp31ibHtpVgMo0xDlZO2ioBg7gpqiY%2F%2B7D3Q%2F0A3UDjQTbG0Eh59LIM6srD%2FBWC%2BdQS6LBkRen4oXX1bqPD2azcN8rQtsLv6LX%2BE1ahR69eaihg68rx258e21pm%2FRobjylgZKeKuFoprqOLOPmQMlfLb1SJrNFOayBBfUisDoLeVQJVRg%2B62rLvMo3VzL%2FSKLPS12RGdZhKcyTO&X-Amz-Signature=0f85e140ec70bb337b0ce64be426f003c19dc14ee7efccb35123264226e0422d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

