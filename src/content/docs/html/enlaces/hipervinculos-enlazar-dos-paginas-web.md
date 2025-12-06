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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666WEL4ZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEL%2BU1mbC82mPmJzWefR3YmxjUp1mjjDtWMy1KD1zkdbAiB8%2B8D%2Fkd6l7x%2FGOZXHWMnbzhEqRp9%2Fw74qAIZxVyEKTyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM%2BG5P23HIoySpbMqqKtwD0FTKYFryN6sgyJAqdT2RRbZigB6fVJwciFWgGCOITErtIN4slqeG%2BEXEe%2FByHvs56eLK2BGkLMo554ZoLqrSoY2NsUEdc3SzUDkevX%2FSbWvCzneTvqlnW4%2BwPmuqSgKWmUpkIME%2BLgKnenC3bwihDjh2coCPD%2FU2yt20K0l1iwLlrLovp0yjYw3sJxNokt%2FUfKB3E00atMkGQaSTRAhxgN4%2FsP%2FBUC%2FBupNsHI9LuUdNNwFBkC6z3GoUfWLV4cjP1cXY8dp9Z%2FvZnuI2NlnFHo2CgHr%2FQdNqfh3ghievrs8EtqLHti8I9XKS%2Fg2kF%2F1n7fd29NZ07R4%2BqZryAu39u9094y3qvbqe0z9ImZ71qNvXeifzd%2FfvFLJhe7CFxY9D%2B35kGfnQyOIHNH7wS9pjK9V6cDjD4CI8SCY8nf5FAP3CTzBgsQqu6Yd7AiGCEqSlC01u3D05xzmbu8Gto34w8xYXjaUUiPy1n6nTyqw3JtOxJ7OxVTOiTCpLej1ty0A3VHdDfaE2UaOF1Ie6vlDWLXESB9HunToLZhBtuxNn8JdRkpce5kj5XLgvf8HREYhUTX5l9QErkN0e8gPWHSsBt5q%2FdEUEGdlUr2zJ0N9Kjmb3eo4l5fdEMS%2BUe4IwueXQyQY6pgEqsTHcodbTsCzEmFK7Gxrv46OKmCLz92pbObR0XLrXkXLsVN2JAfeNf%2B3DAQ4hOltxIevyepHDkxW9Q6gamfT8h8V7YzqOQC3kZ3InS4DomqXeaRq2Jp6JL8HW862e%2BDILrJqO7mWW2ZlhK5PNWdNwBGfkRIdBxuExqEX75fDrEdh%2FrRXmxWW1Tdd99xQA9TdKP9gli%2B187PSuphxAPBXPaxXBaLjh&X-Amz-Signature=2883493e6ef8e71332855e496d03711256ad065f6ed4945e4c6a0930fcf34467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

