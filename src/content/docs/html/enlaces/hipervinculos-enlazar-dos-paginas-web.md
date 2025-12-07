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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL4KYEB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYc1AV%2F2Bxu3mPHq%2FGfXXsh54CyJw%2B3Z11ssORaUqUYQIhAIEhotxU3dbN4ECT24Mg1DxdHPwqxT4qtv7YlAMs%2BVVXKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR4ZwNmAQQjgSukSIq3AMPU9180UiLeJGN2bZVOCwfIsaAWHPsgz6lQR2kzoI4xR3xA9sEvOgp7GeimESQSYve2FtbCPUpNuNFSkbD9bUdQviMXRlD3fbrg%2BoZMUaHH0mL5YgjPMlhtEbW3Ijyd7uwD%2B2tiXy4Ho7NoE35f9eXOP23GAHZTf6Xi6Isl7eJHnIPh16JAeeiAwlVCpoMX4muznYzUjbcrPOx2LI%2BL5dzloSfbpUmdAbWo8Wa6B%2BnnBt7P6LGXYN2r3LLSi6FAuwFCQpBe2s1mYjV5Hf%2BJKtlp0ke3ZGPSyC%2Bt8N7VbOFSRnxbZyWjyPOEwy8vdjEEUlFlgUq%2B4%2B%2F1IKCimXgrm1wbEFeIYufiSVWasmXdE2c0BTmf1GSmjHF6vc9pagZeG4FgdAjgToGQRl7X4%2BQkE8I1WJ4kWtVi%2F5k%2Fz%2FrLg%2FJU3yAjoqabzGUagdiekp67ehbLf%2B23ZxPuOnnXfHk4wUVrBbNgaUciBXjIb3O3m1TmhIzNI0NfyDrzPLZr7ZJyajS1Q0GB9UHOODeKaxTtvh63pc7%2BNoxGYrku6uPg%2F3P9sIBz%2Bmj5eFQT0S53YuU3hnSpXIrLKwWHMp8%2BUqGJvxmtUB7XWoGXoCcq2hUARO0eZAvZh2qOUEtevZvdjDCodTJBjqkARxQ3Z7eqzreHDsSqarCDL2FkzXxXCJC0%2BB60O95gWeQ8UQ%2BSUpfUm3DK81M%2F6YNrqFN1iyW3hgUHkIxSH3XPDFbJ%2FIjV6SP5lPgcMnPb%2FLQumvSFCfP8UskexFDN5jP5ohAVQ6Ku8G3cxTVn7FIB9VyW82RRXFyHyUZwwMEPEfRcWY0VKbiKJPXCq%2BR2cvfMjrtHW%2FKOMbx%2F8NyDAdC34pn0yl%2F&X-Amz-Signature=6fb4abf26fb6951f3a99ade75af9215269b20eb12c068e9892a203895e503d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

