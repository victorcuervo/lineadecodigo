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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZSKFPJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD%2BwXm9Jr62m5cjEQq4XRJo2HqDHyF4EfZEUlcl16InwIgasg1gg44okVy5AYPY0ign14syOn6l%2B9LBk4PYRcR6I0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi%2B6mtVAInBGZdfyircA33yMZqIjPDD4yFMJx0t6gOuymcOeJuymqjsmjhC4ZLgeTINisYZlpSRnF8LSKyuMyyfg%2Bl3rKrd26BZQOBqvrGe7phXyguV6abyCGmt9DIhVz64Pa3lXEFeDF0mlL5rzB3pPYyTDyIrILwr6JTPFuRdq6xNNtEtg02nlhO8HDxJoeQTHCeE%2FnO%2BgfXgLvv%2FHimxlp8slEo%2B1cO3M2x7IIwI3AFhtkdAaifWBAdN2K6vr3MM%2FGfJsOiQxM2tLlI%2BHNkXhn5CvyzWu%2FghJgsyQ08mXs1Xw0UvYoE2oS0ZjBTsukUNiKLonmlECCbLJncEzz3ASsPPFlqoVr1QsleX8MaUYCtz3xisdGzx6rELR%2FYyc56rqRjlLIxy3rjfXfmmW5wC%2FUQVnTLbo38G2vo%2BpGLY8ryA%2Fyzk1pptRHLJlCQzv2f90urw%2F0SgT5%2BuixkbO5%2BN0qEQhqPrFkmoDxYUe6Chdt4Zx2obgII8LY52zjMC0Fzl0gzoLipZFzMbmqeJxpxeumDXPS32oy1y1MWWK3FMIKJa05vGUYRt8JGZ4c%2FRlcI3T2emMD8DuQ28MTSi%2BZ1SBqBd6XG8XtXAN6Lz7yb9cr1xQg8tJFM8yM93E4tAU5vuibSMm6StXM1WMKHu2ckGOqUBdjmkgmbaTv55xVUbefrbm9WhY5YISf37GTqaftHynNtQv%2FAcr7pWZNTEB6rwQ3GJXRlDWUC1OEXG8IPlfJLCmp0KHXZ7oYo8EPw%2BG%2F5xIY9CmbijwuO%2B%2BxP5rv0ZQDJpaW6K4VchXecxC2dl5bIThMouyuOyUYjIPzNor9cZ51MnPF3vm8SHYf%2B1UhXUiQCa4WhyY1JQQ2eHsa9NkCuZwsnD8Zs%2B&X-Amz-Signature=ca48c242347302fc20f5ee1955104cc8ebdd42bfc74c7294f8edd9ecf228a2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

