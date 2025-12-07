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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFEBT7N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEb5mIG6L6sbR4K2iMDkD0k57XhGA46JRO0L4FYiWjOQAiEA4wSXAztq2EYSMFVWjRQd2FzSWErbBV4Y8oCY8J8ARFoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK6AHUDZCwI5Fb7VSrcAwXsY2OdzktM0d1y25%2BEY5eAWGopY6aESa31nw1jU2gTcl8BTEroeT6VIP4ermfnRPNFCMnKRXRyXuGy8TqyX00R9wC327lj6Feyv8qOlxKkAljVN5Bv6YQ%2Fexx04tkRCHPC2oAWfJjNCxNuPmUHt5gXIWTf7ZtELDwkENp2IrcWO8l9KLRJQSgJAzUrQ8JndCN8Wjw68dD40rqa87w8M1o5SH0sCqVA2NS5z6z2F0VfxTWxV3Xnl1Pfws5jX0GNNDlsn7V3pRs3FfpR9%2BMrGsXe6k3FeYwTqsNwyytqM%2FFXZk2lZ8UjfMDvifHcymmyaM56oW1Ydp%2BnWj96AzK4Fc%2FwORR6fkEjRTqskGr2qReDrxmgZvM%2B6rUIha3bIF3OQjbvf1JGpPPKgD0y3Rnlpw2PhtzkR9KM1BIxOe2MHhCaOVvcA7v5uePWUAHIW8LdQUlq9baxlGoYEKRBIS1l4JKoCT6HoLX8Atl9vauMckIl%2FjlaBZcC%2FCM6KmtJ6HeTcPnykwmC9D7XEdeyiES3TpPDX1N16UxFM%2F5n4jRuCJwOCwLseYgFjWSErQByIUaZD9%2FT08pLptJbNjcFCkJpr5PvVScoRfUpTqRcl5jhjFkaW326GVsfamjrx6heMJGd1MkGOqUB9RUNRMzEVlcm1K%2BPTgoDoDcg7UXXFWvOkGPgz8stpmrr6%2FTmCxxa4ThrrS0PmhlaNiS0BuQoh1HQghX8JpMPL5owclCt30H4UyHVNHbZiIZ%2F7fIT%2FnrqOXwTUtsepJFehjUZuT8MOPAEdpAZxK7BMbjlPrKEgQ%2BbwQ2ypYJlMNL77DBcY%2Fw4EXOdsDcJdr6e0qoSrj7huFchaDbrINAaSXcDlfB8&X-Amz-Signature=e5b6fe62ef3c95ef964794e53ab8e103271d6c72e7871c6fda2afc7b3475f1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

