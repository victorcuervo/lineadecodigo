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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AC2RZE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxlTYfAPps%2FgxMiYmnu%2Fc3egccsOnb5q14TWRNq84mTAiEA7lPssgeMRr30wg6jN32S7MXoO%2FhOu6YMkDTAmQQ9x%2FEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXPi%2BUFBsjc6Lq3vCrcA6oBRVpIRcW7bu3bC84HYOhfoQchgAZgcBKsxHHaGM4JL%2FZDzuIwzqU5QSqXHATPX2OyXmFh4F9%2BwSiNjas%2BGFYfcvrNcn9GWjEanXpdAPlcLmlcQfMCh4t3t82Uzn1hkxpA6Qm%2BaMveC0pv%2BlJnXU0ZaiVQIPqMaqFMt%2F4EmVcxO4biLZWHo%2BLiNgq4URIqBaADUUWHKIeEnxNUIJtZ%2FqZWAAxDk2JwpBB5Sq6DOxgcAZJWPcFOQK%2FzXpWjowVpjcNcwbiqF%2F10e6f1ZiQVW5WaKlGU4Bi7t9xQGqEshGa4sm0G9Jq8JmF9AeH4baFYUBXE5T2PkPjyHfanvDckH3jf6qBsvSMvI32DO1pvIcoGRMSSkDQ%2B96AxNClyU6jtovIlEgUvrymfW3vJsNqZ98FMnjwXt2DIaqqpqRbQJx1kRCP3OHzFY3n8xhyTTdtBm0HuWAPNojJjiRp2yoGKy2aHHh4y7iBitOKV53PJuMuf2DSGTWzEUF6%2BFXEFJGowWiqXb%2BXhXaMTQURhlWN6sSOFTRZtTDfWg2WMJIXTktwOtWz3NJ7ENfDBmmTbNi%2FWPhoIy1f6pK%2FtbFy50Vpczoc7mEpRxkGFoaPM1bS6oJ0t4EB94z%2F2BYfXQw2oMLuk38kGOqUBstVS9Gjg0fIE7VsWU5pd1FXNXo4FzqBf%2BnW2Y7Ylxz8ZjIirFYARhH8IoEEJCaOsXfVOhmagOJg8E2kcXdAkWu2%2BY6BuyLIbUm9%2F1v%2BioQ5ysV7EHFB%2FBQRDKbg4Hnk6bEBlDocFxQddXAtUod%2Bg9KuEaddRBJto1O4a3nuj9RE3tONQIe1TRwW43fu2FUhiUyBCPU3ccZTrkY0A%2BWSKR7Fve%2Bw7&X-Amz-Signature=1bf0cf112a5c107a69eda1ef8e7ac653d81ea19c024e666d25988f5b7e9db875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

