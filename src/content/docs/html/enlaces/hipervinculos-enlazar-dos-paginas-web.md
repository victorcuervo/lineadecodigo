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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE4PUNJT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo8M1XRpuI4hP1lcuBzkj9Q0GmvEFYIrbkm4m97FR3bAiAowveheesSZBFpqrF7Urx88EydDu2AEqFS7K%2FPw0t3gyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEBOVgKQKeyy7j1bmKtwDM22Q2bMlVEu3V2mN%2FuXVsf6iGKApKOEQv9I03BEGcTGOc2%2Ba5Z%2BRxpveri7xT%2FeiPwyN67grikWIliGCMxpHVC2xvUKLgcGO8fJhdVPmHM54qPBQz%2B%2Bjz%2FuPEaH22lPtN4lKWGyIJ5FJIR8CMRubvORy5Ww8FgeHFzSVvTcJYOLgtz3r7tz%2FQbtNhyDhBbkTqCZSXYljQS1p11j%2BgkDjp%2BCoR8BJ4DQQcNo9%2FwqpXj%2FfYMZpGsttJ8T8qW%2FQLFf9TsmTRKv9l68rhWsE0hMDoxbB%2ByCeyoL56EKnoqcnhsT%2Fz9qO25AvtB2QXj8%2FfV3E93MYpOJVn9%2BNFnPr9HywJtedgS4tGuqiN6A%2FaerWWhrja5y16cTANJmjI%2BZMBAuuE1kF6W0%2BOSFNr0adrXKg%2BEZkh5ePt2kGM3%2BJoHm4cO46wRgEEn6XBAn9W8W5Xik8U%2BtmQaLr8nLf%2FhSKyW4LOUE891J6P00SmrJGvHB%2FB27rc6aSJQRPnv5X3TKG1987zRbxDpFedSv0iiZFJW861kOlfPXnuPApECzx5FtdqP5Km6Jeg1DNKMB6swybcofIoxODYqa5cBT2qY2jcAH5yYXJ9Er0L2%2Fy4aopB6RSbuy6PsVBn7OMdZz1m7Qwq67eyQY6pgEBFd20PAWzQBujhbvatJixQj5ohJuRzI59TqK1TexQgh3S8SzbJkdQLOUEHQaarbfGQjNP8L1sRrpX66mPD07mYRbk8VJ38wZ1UBK5ijJCbOJN22EbLqvUOcs0v1P5iLpL0Z0fy%2B%2Fo%2Fng4ydUAQ6D4jq%2BeFpor9TdjF3Zu5v5H0hccmHJjfqJjv0RB2Zcjk1wBTchNAEJtnmyWSpIHwoDTNjiv45hI&X-Amz-Signature=7bada8553dcc085a9b1d1b7fc143da11641b636e896ef7e9ccd927e43a9fab94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

