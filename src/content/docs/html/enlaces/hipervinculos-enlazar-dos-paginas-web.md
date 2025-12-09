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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CEE6ZJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwo9sGNDm5hstVjJn1IwLujOvmnLiiESY2RiTydR8dogIhAI6%2BsEGqo%2BdD1oIFn6ACQAHnNqpmqfAnhF5r4N0WY%2FUVKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy10%2B%2FN%2BJAhwsHGzrUq3APHjSgJUyyzQBXXTHQtCZcUpk2E%2B7b7%2ButWFjGKgvwt8cJnOFOJZkiKFRqDQU9WKSfFiEOdWemt7A2upbHxqVObyi2hotlROI8tkiLnrzSj%2FK0DRk97JcAczG1a28HAHok2TA%2BYxgkqWtIOrle9B9r4eY7jb5HHpkaA%2BhPRhQ2ey%2Bgetj22PsLpIeLBHFhPsXRkSglXEXpSdB4EuH3V%2BI0lzEnN00Xb%2BFZza%2BEPkF3WGPFSsH%2F8vnk%2BNcb%2BawrDaGc8Pv2FETc02hbu1sItaELQvqzzODispcmZb%2FBo2jb8iR9qqqeoE9nONNNjCa2o6wPoRFTApteyINZQfjGsDFZRHMUSK6U3nzS9Y1OJAHwu80rSscflxHwGH%2FhUICIEMpnZnT4SGuYjEFWlZIcCEMZhNx9Lgewy2qO2etm6QBZGBLA3YJIyhJ6zhjjx2AoQPIK%2BfYFvGjCrk7CeFSf6jMyZfW%2BVHyYcx3z1ahKP5JtlA0rAALKC9wVoxhBe6wEwXPZZCtDTobxhTqorwN00fJ%2Bs93UnJOflZXP8gSSiEUTH0FwF%2FJ5ythuV4TpPOMBQNgB%2FtI0of%2BCypX4TDv9jPp%2Bofvug2PTWBmPzgzoOb7asygOdf1hQ03wVDa2lZzCOn%2BLJBjqkAUjUnitoVEhsUxVtpQ4PzKgTBuHyWE7luwjTNpr%2FZtpqW20A75lZ%2FVzjErfsLiTGfUQ9nJ5tV%2Fvg%2Fd%2BLoCvnIUu0qj00zNKyUbwcBmB%2FPiV4dKJAg%2BxZxJdLH1iAVEpy9cJwXLVbERkFgslb1DxM9c0kcO2a2O3UuxnTKrah2DZ0Ce2mSeNhrLBgbDGUS3GhRIAf%2FAb%2BOQCYKKhknF91v0vxmX%2Bj&X-Amz-Signature=efa9e70985c6932abd96df7e4b9d9dae483eed814141f0b30e993e2bb93cfcc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

