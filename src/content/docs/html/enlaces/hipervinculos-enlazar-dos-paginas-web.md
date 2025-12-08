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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQHMOUSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvgTkKDjMHtZSyavvDb3zBxf8zY%2FC8aePG9XA9fRKbkAiAXr19MvI3HfHHZHEYLG6eUNOn5m29X%2BshHtoagtLodjSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZAn%2BGCAndVRzHN9lKtwD3cfU5ioCoQFT18%2FI%2FLFBEEIB2AkTLm6GN%2FQCvIPLdDlKrgsHnBbA%2FCBrPQAtEYQhBrCZHSqtPvepfEEk1TSFFQm175ZI6svnbD2Uh2LWNKdbnyXs5ZCP0oTQLcVfjLBXjSZXBGgoTmlRCz4sCAJuhD8aJ6IXMPygtEFNR0vkdQ62M517KyzmATr9R1Ooq70QWlRCaycvnQWyllyJd3rBnZqA2U5uXsKHmn4yiVQCgGIslrv%2F%2Fq9fPb4Za0Z%2FzYFZQazTK5qHgestciW3SIygO90zieOGwm8vxZ001FMIPC1IaPsCFjyCTtL6WmVpjv2Gk9R0CxpkplwwfLRBgMpVCcAtlaKGwvieyWTw89OEB5VMRmjvqGPdLRym5Tqx54IapHh%2FVnUf5E4orZHVCH5%2BqLDavFwTUWP1kUpQdAmG%2FcAupZhxBcGQGJ24MsuvG54OP8t8%2BpWZ3pCOsGvCLuZy4LY1eeIEeCCpTaZc4Cqvu%2FQAWw66nnw0YuksBLvu6FEmDZFpzdSLyoa%2BH0Mi7qr1XLeLHyB9WAi3ZxZWTePpJZn4TgiWnbGGjdUipQ7Sv%2FccWbb4f4AmKGb80D9mS0Bu%2FiToKb7D8N8HZJfwmVlrUDrKv6N9N0YK5n90TEUwn%2B3ZyQY6pgGe6IKPsvOXPTH2FjfpU5a1NBpBqfI5Cf3wngJ8E4YQU7ePpYNREqAGu5p%2BYf0sWgYaseKAL4zpfKik9YOj8IDNDuqctQrT0ExzFhg3a1mAK34iyuw%2B75oPQCES63AInjQYeHGTlr%2FSF%2BKyC%2BngCuJBQLK4h4qvuGcQb%2FnP0yAPhah3GZaC1Uw9fcmaPPXj7%2FgDQaogTYIb6RDSmh6KRl%2BOHfCJwrWF&X-Amz-Signature=b9e77b75f50061e7d79e4c3bbdb0fc03a8c4f3f31a9c6e1774d17b92b73edb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

