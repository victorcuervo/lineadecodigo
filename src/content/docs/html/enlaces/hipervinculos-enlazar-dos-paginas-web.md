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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJYF7MA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBOVsX4ysl%2B%2FZ5TmcTSdwrvyzhBfukgD%2F52zx4JH8ixAiEAl8lMaWJn%2Bqd2%2BPZ10vJmMKGmyC2hy7X0ZEvq%2Fwbg3ccqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfND59AmmY8%2Bp55SCrcA9hQLH4ETYX9QsewmEiMn80kE7vY5w0KfADyJwImP6QvqiqUuSBoR5M8jWCqf%2Fil3fxjTtYjJHJABFG46tSQ7WJFDKNaoMv1KdqQc2PRz1cT1K2F49%2B6iieJQzkayKKoHilOq%2Fj57btb35TMcX18KAm9blzoa7I4wkPIJkBLbEa0fUadgg90mgqpH%2F03bF36etS7gsHo4Lgo%2Fw3BwA5icylSui5KSELAFTX5o9TDNf5rQ9TsTpeHcASMRPbK5Ueny5nV6maU4ZqcZm01zmdOw9THxjEbtVVwtCTC6R1Pvfh1vVl%2FkTnFJDABXw2Z8CXN4QNQuGF20RG1D3KX5of7gFlBnd5WfkLSv4f%2Fy4WcqXobm0ABseS0%2BL0CvkwyGZrIlus%2BTfrcw1T4VduUTrcid9ucw4Tb9bWnhm444rTukKcjF0lg2jm77E6cVlr1ASlW7e1o%2F39KKu7r67jAF%2Bba6pzifWScstCHQwhf6FTWoLOBYtK5UYPtQl3nhHRWT32QRPnWmmI9dgsTi9igU0pvLhROhX%2FIQD8ea1xaw3vQXH3JhkAJPaEfdoGjy8iaCEtwUGjmMlPVOzoqqQ9jW0e7Yb0n6G1ValMPWrHBD0eRCzqtGpWdlkcKvxxaFQVOMLy31skGOqUBVDVyhY9cGc7vvk74hzy7zxW7%2BZCLKh%2F6h3mQVUPvUdiPcEkjAfTpa2Ar9%2BGobV0WnXzeN45ibVvOb9HIftXiMdXWWkM02%2BuzPpObQiGePntIXBnJjMEwAdaJMZv%2Bc17sGH2Do%2FNYf4nO2sSN7jTUWcAvzUb8ZYiayEZ59bWX3I0XfIRlK%2BoHKOVFr%2FXLPEJtkaB2sGLI1LmfBlgcBqCsp2d7%2FmMo&X-Amz-Signature=2463db96132b1f4e96ae754fb6a2d4f25ace37fd96f6e68ad8f978bac6731295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

