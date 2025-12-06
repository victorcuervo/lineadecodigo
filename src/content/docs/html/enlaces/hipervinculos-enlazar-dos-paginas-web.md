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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2WLF74%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlBKDvFt0F7qSdMqPzgRfiodRdpx36Dymd2tNec6xo3wIgFLBHce5W%2FonZHAq1n%2B4FgA%2BoOdGivpgQuowe5%2FVWY6Aq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIEBjwUiXMGX4r4LeyrcA4koJgp3YNwtAjVAI9q%2FHCoM4lOmciGUmOxx94GUvRZXxzimq2kGuawRXGRiIk5zymH02R2zyh5cJholWSMrGLRvLLiiFzDPQNAL4IeNi3hz038wDXdtB05q7I7QVJpi8UKEnb48BYy%2FeBLG4y7cWE0Su%2B9CgiCQr5UvYJENAUX2oee3NqsoSeX3OBiajhzS9uVTghLw0EklqMvTOlxS8jRJ9BIhV2j%2FI8bsuu2vMQ1an01VDd2%2FQDIDIkdOilR5AI347xnPexCi4daKiXcSVDUKILEqv1RiExk%2FXX5TGMps5vBM%2F844KbewXmVgoc9f1e5LUQovB9e2kf%2FsTzqjWRc63VHjp2zy2XSFfdYc%2BtoaqB7xGvyZtpU6gMeyE16jl0lPHv9w%2Bq%2Fmj0DA0ZUavUlADyNe1CutFmDlEMKV0PBAtm3WBiqUaKs4rIA1disBngZ2LSLe9thz08gup1GtxOBxIL44sgcEUgKpATinek%2Bm%2FoVHQAXvoCA8BEEflR6pepKyRXqlxCYgP3jWmjd7%2BIusIa2ibK3sqEkW8bgt%2FApZ%2BzeyFCpE5LzfahP9MFWEoO1C%2F0zFWaBefCrOaF0FJMAH8JriFymuyQGWTgzK2YceS9SOQ2HGLJcBiFteMPqez8kGOqUBp%2BVquLydeEWB6jvefs8Sv4%2FcYRdiyfFJkTdK3%2FS6VqMk8DOhh%2BlHUtT2kmPi9E4kjH6ZFqYGq96KcjXvAMubn%2FtBLLxAHOHLWcspahn468xyBtFz2zvy7DayvrPPqn4EC8QuWXJgiSTzxCSYr4B%2Bh%2FWrrYG%2B3SGEx7OHl1x1qCwoom3sWAp9QjDAG4Vi2x1tGxRugs%2F5dctut2y3h4znmowKbco1&X-Amz-Signature=f763fcd2d6c2c38c41331a0ce16f677cce590c053b3d5f7b8c66ea03b3142a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

