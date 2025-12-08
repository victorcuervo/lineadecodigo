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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP3UHH7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPnlSzBnbAyvliozgp2UbMKqFOmA1iuly%2Fb7sqeHJOjAiEA7bQH5OEGsMTiAOJ3P9qHPwXBaJpcnrRFlou7enfsf%2F8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2Mw%2Bbi1ZbrZxa0TyrcAwSj1yiLEqmBuUpaIgwDl08lhRhHFEz4bq43Go3rVgy5dcT1lcHdu5d8ZYeyNbj%2F5GU1WMsUGOAt%2B5t1pGdCn7obUcTKOxb2Y1XN7GtAz%2F6pnXl9pnGGybtxok1Y0p1RRD4ga2qLoiAMNFKuSjtWbdlvCMiYvbbFHJOMjxmGtucF6GfM1KCx4Czl2XZXgDh0Vf5gQWahWQTNJB5C%2Fgck9NK2lP6l1zdEKrfQQVy66X4sLL%2BwRD3hYSt0IR7bdk0oND2VIkKIJW14j89cDVE1pPBiNib5m0kR%2FGnoRtTqkmfi1nN%2BC5VI%2BG315EzHTt%2FWhnyWNFNWgyZ7S8v3R6vhAduofKHPJtGa1Rc5hWbb7ufO1NizOFL%2F5iO5wyMQpizcw7dr2nidNx2Q933VroqnGe%2F7PPqwpvrevNdtMYqeEZV6xDMpCcPK2TI%2BppfkkVK8FC5WQuyODEf%2BAsz%2BBlvo8ihpKAxD7s1JUwd10qViPfF6IFAC3sYp8ZYlddcRwJbd3HjLAlipcFRGljuyueUpBWzxiE6IX14XBYD%2FRJB0j%2F7FVNMzaPyJt0xfNK8tXao50JRV5TY02qx%2BPq6lV32v9Xm5aCBPu9WoCTIYDmEAlG7E%2BrudUKhfI6dHsqrBMOah2MkGOqUBhrR9UjyeX6uhSYfAz6hu6tim5SaRp92g0nK13udr1x1fmpWUfzTQBXqRwrRNWG%2Fin1L5g09XA1nOOm0WpXihf6LuUlp8aAhjYE4TY7z2zV%2Bpm58EcdufgEGj2O1i9UvxJJsMJ2hpEO2vS9EHt2%2FWj8AsXcbr7TDbJiF1kO42b8smzbcyPKbDwrt%2BNAaoE0kkVi6dpSKdFIuyaiwtZaS7U8UGCadJ&X-Amz-Signature=1eb5d4249c7b3654c2c630a873ad1279307d075848d5c2d080274fb15f9c6e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

