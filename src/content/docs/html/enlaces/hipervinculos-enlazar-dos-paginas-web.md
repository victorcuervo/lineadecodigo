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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635U664WP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaO%2FRJPKyr6IvuJZl4lKfnBuXeIatcq2MpCvftVoSkpQIhAOriezd3r8XCZKcEL7MVfwrKwFzN6Hnu663wIHfkNuk1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyNpi5zF6U%2BIhQ50VYq3AN4q7MhQOcpm90fNKzgDLA%2BM8ryi7%2FLCJjuj5Gpv84QgyFGIXT2F0Wm16ZgwyNUpy6PfTgFGH2WrvfRb4QhAHlP1kuen8gONOFYeV1yYjk%2Bq71ZINXTwUgxqGlrKdSPVD4PxAc1%2FlFxmFTcFfEI9wqiN9uIN4BzbcOG2ZeyGwArXRAmAJ2sLRKhNAz%2B6F2BJcgEr5lWNRdMiMac1Mgi0z%2FLO761W22yCEG6X5E16ob7PoAJdztiD8NMTwKmXkaN9w4EdR7dMH9A%2FKIn4wb5i6KbdSmmgTNBLgGNur2W2soQk75WIURci031uja7ItXI9vLnjNGTLflSW9SOU7%2BHgLdnf35Z9hVMJAVq%2F7XEs3CpF3Geeu6rs%2Bnk5Eg5uPLbhG5wH%2BDggOcttQfdTLbCqqQ5jkCCzqXZjBLTZq6Sc0%2BAsKeANihanqUIOsMTNlHZq4FN6tIURSujliICVIwat4l1D5LZSshoYLJzfcJ4OzS%2FzGF0prQSAosmaKoPLVjS2Hdyr8ewCstRHs1lq4r3bRSxuDLCXPFm9E6lGjQkntI5oF7Io2%2BhM7NHnNWxxsC1%2BoXFpCsc1gz16HHAS8TiTMzB9BIfQ0HCphu0hWmSV8lmgwqxvNMBR8o0z9YOITCb%2BsbJBjqkAYxKzCRei%2BzLcf79H25LnIhcFcSWssSBGSvG8NTDvV%2FJcx0B8qAV0qEdqeNub8y7SKsFW1Kq42rcqtmce0LMw1Xlro43CdvTB0QQSCdvOMo%2BkRFCwxXLkXNXCCZgH22Z%2BzYmQpVvbygV8eLOh5q5fCFdKszK15YdF45A4psE0Gqbmellg7wPeFdzW4%2FR5MI%2Bc4HVERy6vIw77bf78aMaUqh6oM6r&X-Amz-Signature=5698a31e9af7d75b0a773971410c1c1d60dc076d5b5df0890ab0b534b7e3d09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

