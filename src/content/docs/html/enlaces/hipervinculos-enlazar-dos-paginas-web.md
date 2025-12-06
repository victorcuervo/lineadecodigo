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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BO72QCH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgwt5K1JfraiVCFOvQWaEDAmsxQw7%2F%2Fo4Ql2IyNv55oAIhALQ60Q%2FKO7WIYsTW4bBVY9kfYewdGI1bEUuK52xYrh9eKv8DCHAQABoMNjM3NDIzMTgzODA1IgxkHayTVTCPtSe6Cjcq3AOK8XV4FX1DLts%2FcDGXtbHNnH9ihnATpn86EMWyUDf9sIsjzWb3uuqq7ITfv2tsmuI2ViHvuejCdc1q9QzbHDcTnbAFRyLFv8fbUa0XKzisbch0vQv2Yp%2Bv6YgX0%2F7F8ThT4dqfl8wAMJYUVcqcvIMxcwBn4eWhJ2V7WxUiVpXAMInnSOuHV0uIbxKspA%2F4rCOZSosDmze4fjB5y4TnF7WBCr7TK%2BIsjWc3qNuwA9LhWMIyXWeodAMm4US%2FUV22Qi5aXyiOTFyilwHMfzHiPFfMOuxvNN5oyRZiS%2B8EnAr1NKY%2F2BEkdI4o6oizfRfzTLAXpfYZPCT3w2UkjeORmhQg60OTxa8U9bOQQE9Q3RIIt7xy%2FTC32DTTzIA6PeIEBVQgyK%2FT5vPkUeAGvh9nvSEedktNPcpM%2F%2BZGRf5%2Fb5bXje3ILX7UFaj27ok13Mg2AYSVl150SxAXdYTYG4i5ws596Wy6GzBLVUb1kQ9eA4Lsz6kMJVKQRSlMD2OiSYIRHZ04U7PcrJLFF%2F1pmcbf3srV%2B6M2PzW8jeCYfKn00021C%2BUcMrOgGsM%2BrW%2BsolNefjb6SvpIO1%2B2yGEb5wZ8Uly9J3wFaByjdbp%2BmKJ8O69%2FT1t75jmhNaAY%2BgxafzD1ns%2FJBjqkAay2AIG%2FW5H2BsDSJH5k8FdCeeyiu1kuAhZfsc94yK8ev21BEZMeNtkuPiDM%2FjfswBqFEl21DoPpBAD4Y2dFoqSabtW1DmxjiFH%2FUAvwjyDqkXpYbnq3ATzsmZ4XDe244iB9%2FMzsi6jfMckoNRvupHk5jJc42zKbq0zGNr4u0Ip891TMuxpxLz7vgIJO7LwY7RoWMC7ouGVcbWHqRs6TvYhlZtQG&X-Amz-Signature=c7a6970d71777d8e96acf1bf36888f8ac70e68aa01f1c4c3d6953450913516c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

