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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYSGAMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQSg2bUbiST%2B%2Fgr03vhdahZyACzFeDQYJqS2bOGKd9rwIgEfqCwEKW4tFH2DcrhE%2BX9%2F7C2FcRtT7MjgrurFt4cycq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHgiMN0jxHuMLb6aLCrcAzlQOykS3Zrxn%2FaQel6M%2Bav4quozfwNEnOuJPje7Io3Lu0xP9aiSfa36qK24XNSmWXNfxQUCO6ioGDJuySYI50feg9U1VjlEG7rRqpVlRJJehtn9aZhTv%2Bhed2rWTYws0bTDYUM4%2Bcx1tE%2FvCFqAqgIe2rJpyZyi8ndkI%2BCmBIvat0ZiA0EM%2FNE4wOeppmQSCy%2Bi3jfI7%2F1ltW0WDMQhjqUPcgtpW4S8HYl5srttvu%2Fij8Z0XeHoMLySisFMnU%2F3dtDClbp6kAqghQ9B8Xi7kiWa8yqsHnmSbtSkkJ05mJvmWrT0Hpl7J0uyQh%2BkYvrwUZz2l1qactslhtF9xr3Tr%2FQtg6EquUSe89rj6QlQ7z5hgLGOGAO%2BiST9m3IHYncqAmGWyBn3Km9W8Pg44bktltk6%2FoCZ24U5iANySiRbpnQdKQ3XPY%2FQ%2BjBa%2Bq0HfgD9ByVhH4c3qenUQs2rQ5ObeKI4V%2FjF1T4E5L%2Fi2usK3SpkS22ZrJrrJSU4M0UZ8TNWYwfCigsPIqcBlsONzuJ1oSGRAvKgFzEtH1v5hwDl9spvns%2B%2BPhPNXIgJt2FscF01VJGrcSgBfzfe18lTuihVCb%2FYNwkwLyqtHkUZpSWvLPhiAfBm2HWCR0cxFkluMJ2MyMkGOqUB66b2pjRmgIkEyZuvurdCfklZfssXgX9TpBmgQTwlnyyvcTZVL5%2B5LMKMsw0SnnRiIzKFM4qxp%2F5j%2B4hBm0auJyFBbf6vTC6LPdfHEXgNrP1PqyW639i0aL3u7f2Bv4uGoFw4K9rIpEfNQGF%2FHnmQ1uMwk3B4vOdCvb3qAkj6VR0LrkfkPQj2HWVJ1W1wuZ5XNICXQ9V%2Ff93d3pQF7AqoYmcjF%2FOq&X-Amz-Signature=9c3b43b2b49856d0f50d1084adef1e1eabcfb2d9250c9b03f00582ab9e6a6bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

