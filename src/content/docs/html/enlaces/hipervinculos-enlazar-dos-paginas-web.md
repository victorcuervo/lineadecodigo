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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO4NAB7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfagYouf850ncHeG1KDnfGyXiURB0CDwgUbR3pxQNvjAiEAl2YxuEXI4oQTSETyXoAJa8GP33u9YXseYKFsj8E3fj4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxOyiH%2BktG6eJqDKSrcAxjZUAz6v%2Bz4%2BjvAawn1%2FXQcxj4bd6Ru2%2Bx5YrhcCto2K1PItmieX%2BE3SyKpOWWrjqHZdl4wzd%2FXHeJEQCQZHSiQwh0CPL2etcZXcxIDSkWmd9t1EQU77hpVoxsZ5rp1zm6wUb2jqjYeOft%2FW2Ode0yHkPos9R9WXx3Y9rn2ocULolyvDV%2BIKmGHqRHl8ALWT5QJ3Hu0QyG3FRDAR%2BSm9TikFfwVacjtPb%2FiLCQXdkk0wRUXkYySOgY6cvJlsrlqnAYvw6D6bQ2yFRkxawK99msBHMSlBNBZovut68NDM7%2BA%2B2%2FYCxBhFFQ%2FE49753MbUTcHMP38Io02dnrL9AC1HYFHo3Ff03VgiEqSEQJbBVN4TntYC5yyRrwvhIEh1JLFIcGY2qXuR3WiDYdwNFCzyBTuu9G9Inbr%2BH4%2BMYn03Ei05tCj6%2Fcj6RRowBWb%2Bm0VTMaK8B7ltfZGiQOv2d74onFSTChWNPqeZ51ahWSzvY0bp3ujKG4j2S1BlT6%2BaTB%2FPcEP6P23RJc5qyRTxgoUwx0MxQdElEn6Rm9z5%2FAehRa0GC4mFg%2BwYFVwomXqeGoVdFGK4HalABbOt9tjz4nrxFI%2FnIs229Kf3qvK2Vycjjx9V490cw7CA0wYjQHBMPPC3ckGOqUBm470CQ2rjB0lcT0RqlDoadadRjUC4yOAJ7iuwsA880UCQ4M8uHkrwZzpjNQDa52Y%2F7drDHdlQ8%2Fm4VgJDUDLYj4NGVPR6ntmWSef7yeAEaPO%2FjgCi2%2BwYqbfwJLtRPWotJ4qRbQ8312v5MHCa%2FOlGWMITU7Eudix3EJ%2FxH1tfJkx8Fx0q3XYZ6vh213UYMkMZ3mEeA3i63MPkBn4SfEEyg5%2BZteB&X-Amz-Signature=cd121ab5ccdd26c1a9c9ab7c40bd960566438627ee157d1c156d3cc0a517e9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

