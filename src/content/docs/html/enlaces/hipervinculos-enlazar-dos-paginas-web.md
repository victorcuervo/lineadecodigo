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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKC4GL5T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQtV1IZhsoZHJ8sAd2NPKfQSAKEW6tH5Aak%2Fs3PQA%2FHQIhAI%2BMCAeuEEmn3m3ojs0skmY3cutfuD4sM82TbXBqjoo7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxptgywRUg6mPE3fp0q3AMvMBalobYoroBaMT8OX7Py0HMBtczx39F6zT%2F5B93aHJfftmGyLVgjjpIobhpMF8ZcsbI4KKRKcBiA1BVCp%2BQtdbWMQ8ZWTdDV0zNB0ohp7B4YREAHNkqvPfKSmRZ%2BpqfyUBQtSWUOPi1Es%2BLZPTGtxiXLf74RmfL%2F%2FI1Rjks75q%2BK9cehEwBi2chTcWzSt0CSwj1A8YQmvE5mf3TGTH6k1gmXDJUCEzgJoudSJnFEVigV5jxYQztgG3WqBEA%2FPPjjTzVh1TwjZ6eKvyhCyGJ9ykF730g3jD3Sl%2FjxK8c2mjFlfwtOEhVXhfaFggJ3uxpF%2FxlYm3zDKavDbRLOtmgj0JpMBXY4teIDZO%2FPVbuyOmHzhXeVIDKou2YL%2BYXkfMg2IA6y5ZduMUFoeHgmkuKOIce9J32K%2FGaKVJ6iluiJAT31YBYxgXTbmH6w1U7Ygp4V4QYpyOVBd9bkMIuWVf%2F%2B9HcaqidHwk8hjSo0xfvtZZT3E70QSS0R9qHnuLHPMs7M5EOEocdSAvDlNpH26nW9sTgexD8ZwYXuyCeuASSL1NXagK%2BmEfiN5rCFVrPp9mOu87IoXqLaCNreiVNehNAsBlBun%2F0bA5%2F3rTB0qmDe%2BTx8nhhsQDX3bhPvazCG%2FdLJBjqkAZUovVvAgHF3H97umjny0dPo9WTpGh1o7k3nIYvRS%2Bts1koVK3un70hEOwWIhOLHZQfpyL5H4sVqs2SBqGDDzIdgtEpi6zHsSWhEnDruMjCdG1TT%2BSORTrZ175rlROaoMOmsuB10Xnp7S%2FGaGh2NceNkJr8lLBv9Fj4rG9%2F0j6dtgEN5C0b9q2VpVGbGknWSube%2BAVAGHjE0Ni8ZS4fYVBuFCyJe&X-Amz-Signature=86ce6aea05a1fb7ff2397c5feb40fedd6f01f4833cea2fa6e6058ffe6060fa4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

