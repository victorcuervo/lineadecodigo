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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6WLEPK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCYPj8jfVCVCN2xr%2F%2BSgRfTy7FCs6AONU3ijNHR3ldPNwIhAJc%2B3Lqbo9RnA267bV%2BTbuVhhCeeAvi0IVDjxRWpaCF%2BKv8DCDkQABoMNjM3NDIzMTgzODA1IgzfqYMIhMqVG74sR58q3AOsj2dHlLTWm91jTszS28yxua%2BNKxBocM%2FH0mmLFwlRScV1H2BkVU3nkQ6MYcuouEKUrdf%2BupnkxA8eAazMYwgtJrW9QD1TGRg%2F78axQZpuXo2nAUDBAkcIpoW9vvdZ1mCC8ZLZF1XBznHxfidAKzuxvI8%2B%2BZXekNEgrwdCGbPhRCUzolNVoray1mWYWcRmxHqfj9AmjNFzrmUova3L%2F18L8N1ug8C%2BNT8AOp%2F4se4FcxhC4RgpI8puwbvkcmKGz610IolaovOlSuGpPGDErePbYCWh%2B%2Bzk01lYMwQS%2BI8nXpxvbs5V58ByXUrBdA6ANFn5TZZvnp04OEy75BHScTZSoTaO2fPD%2F9erCNNHaO9CCd3EkW1R765gj2Axp2jM9txqZUJSCVPR2DpDw5vsiRNMxbKYYWG5N6bD9xvfXQbT7rB%2F%2BPNKYcz9k4XuPmtcURSvR1p2EwtAcYAjKtkFTaycIMSkqIBrJChLdOXGagqDV7zcOBRFA8uy%2F%2BSIZdc5rG95xfMDfoTdwM8P86pnhpPOXg0MnQxedv6Q4dPHAJuIsmxAG2Vx6XoVbaMbh2MArzhRFwYbOBU3GnYQj8PtqRG3iZAONR8Yb%2B20EDssEY8pLxQawu3TM6bdpbGiezDhlMPJBjqkAeO3qhdsCzuUGBR%2BjhzczbH82Dnl4mRz%2BLfpm5OGRc0VKMlhbnRKlig%2FKwliFWfhMu7%2BGBTdEUOw76EIl%2BLWfW1JABh95Wbcg74npI1O825ALJm7WAnYL06JiFXPGNY5kadYlsmfNeRH4nYU7tsVcZwhR8YtPDeQ6fJgDpywdsV5Dl1oPStN%2Fa9XKc9xXA6V8h3Uzm1FSlXg%2FQPCnFBovnYO86Lv&X-Amz-Signature=91eb0e27def0eba77f860d410b450c415eaeef2f9aad5f01cdf949ed9b406a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

