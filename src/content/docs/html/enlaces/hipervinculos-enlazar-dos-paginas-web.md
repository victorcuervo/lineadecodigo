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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCA5EG2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCxMaFQ1x101I9fNFjgM5Oo21tNwQDCt8AWWxQMJ%2B7U4wIgeJriRsttahHdJxtG1I83q09%2BtKnUZhir01FBMO20RgUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDw%2B7lqoyTLtRJS21ircA0dSYdfsEYxoTVZT1TP0Maqapy%2Bl8Rx2ZcidJt2bj61R1QnthKsr0PnD4TUn%2BA0W5ttDDaLrmA7yFbtC5XiuOZ9JLjvgwd3eRbqUn4HXyS2dI9xzKKa9ShwEpGiUEaFS6Qg8oszcpVRWAyDUve9YVa03ZFpKly1rNIKSvawvdocXGu4%2BPXy8L%2F6L10oNSZYuFPbYcbPS1MxxhUZDPpTsuWLwdBzAXO8N9eheRo5MJwLCfiLEO8P8aVrzv8CKzUnK07Kfe%2FQtxFwFH2Rc3x4unOHhux%2BtfgIsDse5c2FtkqaWNIEoBFH7Ed6GK5bYEsdJybIj0n7DVBJ1z82kELRdLQDO5%2Bt%2FxV2f9dhOwLzPVxyhdEM61MKS187LjvSLZYr320po2hRoMjmX8JyH7AR9pkOMssH8fInFqvHBtST99bLvpPUhwA1WFEBO0ozzuN4d9kUQUVu%2BO4DK3Bzy13Uj7qtiD%2FYSEa%2FJEC5vxLtoH5%2BHx5caS0LhnjX8kDaZ%2F%2B4ughiS%2FcrnDyqHa1uQxcB2S%2FxnuacEcLLFqO7F%2F%2FyUoJOniDBgbO%2BlsWUQqGuoIqjb1GAcTVSnl79vBSSoFvlF3vDWfau0Y5xYJi1noi%2BeC1iCSK31%2FXUI5YboBhWSMMPzw8kGOqUBZbgR0ZoK2NCkaIKgII6dvtzdLnV8ItzzmUaWRGktbDEVvDB0lFqLECe%2BnEOm0R5IfEwszZgxaQa2W%2B%2F%2Fd5hubPOhvf3jRT6ou3ZpOLdhaOUme5Upppu8oqOaWXfqk4bpFp2YQG9PkXZf8EZTPSF6JjWQAhrmU%2BDdRHJ%2FVKWy%2BCKXg%2BURqxLk4s44tkCqD3uv06%2FOU7kqf7z%2FbULXez3QvY7BiLBn&X-Amz-Signature=79ce3fc73a5bf2bc3ac82b93b5a4036ab5901abedef9bfafd301411f51c755f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

