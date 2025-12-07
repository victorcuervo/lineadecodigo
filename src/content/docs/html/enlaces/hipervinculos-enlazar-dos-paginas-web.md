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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CKB2R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR4g091eeGa6LJN2J99QUfx0Co5X9p54k%2BrgpgVX5GLQIhAMqp1dxWdEl%2F8d%2BKI9yOtdVnW9mgqr%2Feyp5n%2FJhLS2o%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf5b6Fr7%2BvyIsTtdEq3AN6NdL7ew3ife68xGT9zFAJr3F6ukzLXxdH2Qk3d23GYUcng4g7K1x63gGPtVbsCUoLEmkFJDjSd4rhZ2v%2BJTmM7DKGr1u4aAyiyAP0b9Og9CtVhMKoLa6mScP6RFwK9x139n7vG%2FuDdNQTjh1k26AetfR%2B1JZa9dW8RK6chyTT0xf4gyXvuA1NB6wwVpPW%2FRFtQWH3ZsvqhD9Yb3I5tGYBZ0s19Q4e4iFvgdccJkD8d%2B%2FZnj7Uip4aFPqhg4UAt%2F4Vc85a0%2FiEcehLhepVIMOwubateI3G%2BiMCxVerYyHZffQp3qnvQefDdhiPGLr%2Faozjc4Y4QjrgeJHBhvhEuLMG90nkXmPlQDCwdhpQe2qaqZdWQ52jmKPowxy59e7d3PsBKak5PmssszthatA%2FygUBKIh1m1xkeXuqt2Q4mhK8pbB4QL7ZspYoEFxlHRIvrSKv08sJeX64ob0v0wiim6PWx2fkurBLD0DuGnZaa2K1lfgDdHUSqAL67KIH2Koej306ANuo8vhbpjzzCkoVuSRvulgIkF1VrB%2Fh0Xsmb1naaDg5%2Bqm13gr7SiglNn5%2BLR9KdV2ZNNGOZP%2F0TLsAbsGL9UYOPdOB3BgLvaiZX%2FuqfUso2uw40wNLVxRGjTCX%2FdLJBjqkAalgJZee5S9yBszCYkH5lwsf8PJ8Iwqg6CtlvLBmds2J5lGERhOUqlqqklDNc9lxX9ZGnj2i2zKl8xkNyxj9%2FGrcTrqA60lmdTrhzmYW4wic5DZciMg%2BRK6CQec1LVvCRnUxJwtiKBhAVsCwzasgAqxF2gTGNA1eaIczdTkJ%2FiWbobts4Nven3YEh%2Fvn45LOH%2B0Sb0%2F12HmCqnTHjvDnLa6E5aBh&X-Amz-Signature=9f62cfae8069d8e665623b2983cda7112e6ae6781b4e5c35cd60587183e2611e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

