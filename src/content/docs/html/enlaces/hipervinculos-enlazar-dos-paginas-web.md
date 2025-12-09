---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CDUACG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvhsYRSKEPp2cOE6BTH5X04bXU1AaorZrP7eAx7k8KNAiAb3VZjMQiBD%2FDBfqPZek7ifydBL6OfQCMY8UH2MKzVFiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn9UcJSHpiBjCnnkjKtwD%2B7ZUlF%2FUV%2FsgWXkTTtm8QtFnq016Lef5XJWPekhkrEw1GftxHq6kU5WF6mNL3ihtc5yyDtyPu6qRrhP6ltK8kbj81WjLqHLSt78L1F0HBEQrwMuM94EBGj76yi9miL8rdGrdUmP5F%2BvaICaXuIh38Bw7Fp3IvWKQIdRuGJjcoPcgTygR7Jx136doeHHI8XXTzE9xtUOyS58wU%2F3Knhs5V3Co%2BDic98jUxPlU0wDbBRMSN64nUL%2B%2FH4yXqceMeKXB5IclavFDDrhzLjRxm4PfPQ0Nxow5fwPpGDToiunmM%2BAVQhinM7AmY%2BFr8bIhmJiU5pcCHOFVoBPN4L1JDJGgXBwsF8jlrKcy%2FGtt2sCRXcgdeEXzWiAT5iNXN0CNV4KghGqjlh57gQWd7fy31Hmdp7VpXilkOtgx5Dj1epKfZV7rq8K04LL7NQRmocXzOdKpxOQBpAk7i0oh5g2Pmahm9QSBK%2Bhyd5l%2FJSQJVaYu1%2BFxSKQfbVR61zNfAO8pXXRhOV0jHcaDSUTLpqP07IBf83ooEJAbk1spcfiihI8585fPDOv21P3jhf4ngGTgu%2F%2BqqBXLqeRlIWD38RSeFH6yFhOdQTBX%2Fp7pQwFzfCVjIOLShIhGtnSRJM6RTmAwj93gyQY6pgHW6CRGsj0jOAaCYGyJhpLDv0rHvKu9XyCrFzql8dfNdDTu3IAgARYM4pxUNmQbuHngP5QG6tBWxqAVkDgQZa%2FKULNDBJ1gztEF4mSN5%2FRy%2BQlpQacLCLELccHWF8NpPW8yR60b14Pj25QA%2FCRcJyPE%2BNi4NY2PxSXoLpuWSwZwXkrgeZp1hQfMN0oFIdmpOuFy%2BcaAmLKkNXg9agmwfSnnfrQHewc7&X-Amz-Signature=707bc4c58bd211de99bbb48d2f076b51bc873f36cd15ef4eddfbc7265f0269b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

