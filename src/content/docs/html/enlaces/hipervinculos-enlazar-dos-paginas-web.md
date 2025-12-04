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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVGSTALR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDv6UlB%2BbNHa8ESsITQfuRRYtGNR%2FaudFxVXMRz46XtrwIgD3TEsa55AHdm3bq3rWRupK6iRrPFkjvmppWH2R8pCJgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLoSE2bA3791WydOQyrcA8Ej8DdEy%2BEo1SV1jeZKNeb97xK1MwpB7Xkb8uzNx6u21O9U6dLuHpfQihmFiiJwgotdO43E8l7OBt3Qa%2BsD5sPwgC%2FoNQ4x4jI7MnqhUpleX3aHYQMEnaRd1H%2BgqgVejN2MgDqBHfgkjH4zZe8oyQAkCZ5Pxz%2BCq7DyVhKBkMR1zeQlcS317H5Rdy8YZcn0r176tWAPSDH2HbRxeU6Dq1s9eaXsdL3kxXIOP435xmNb4vVEGaOwDy4Ae4MWJcC3qrEgpTaTvyqAjLVVyOF6gSL9VnAXcSDQxGn06%2BZI9Ttu1msbUCGo%2F9w2DZbrXwofGjvQiAD3Tewb0a9yQOxZs4x%2BAvP0L8sc8v0Z8SLUPVmouUW2ozopxGFcj%2Bkri3r6oemOG8TxgdlZUhf%2Fo8BTPv8PrLdB%2FrDs6p4q5yalZ4GEvyKm9K1SjDaMmbq7JVOfYb9LBtnG4l9YXT%2FrELbsrfN%2FoNQzdQvifvnI7Mt2CWOYkdUgh0c5y9C8NkKxsj9fJj36CUketE%2B5EufiEKS96SNAE9zAIt%2B3Fs%2F7OGU5quZ3fhgLKnBT4bQMhCglFcRsn4L3YS9qYy7mTX4OO4P0u4QnSb76wgHSb0yVq3c9OkK1VO9SfF6746P6YGviMIm0w8kGOqUB89UWqeu5p5XssxkHd2yB5fjxs%2FNUXLAP9gZQM97VOI%2Bhb%2B8Zq03yetuu%2F4Y6tyO8pUzfBRNKQ0dlrH7QCc6S9LE%2B%2BtwQqh7zBQk1iptQOPN11WpeK%2B0YfW4AGNW%2BW04tBwHYjYIN11BSx2rklZgBfdQRQumJxCVLZdDycLIGD%2F2L0nu3KW4s4Dscy%2BNUpO0J3424B1RHt4WDHJy9ZrStK%2FpZEgYt&X-Amz-Signature=6a6f2d8877c8853c20340d527ab8db2306f41e9397420e4d773850760658ff0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

