---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIT4ZYVV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuRCoMoqcd7w8djSQfbmIFXM%2BxXb3x9KBWLL2jZdUmLQIhAJgklDzRT5RaEB2zjk3NOjtAjvbCUt5%2FVAKTaIgX%2FusWKv8DCD4QABoMNjM3NDIzMTgzODA1Igy59EzZdRK55gm42icq3AO98HchwyxAiF4R%2Bj4dKKED%2FN%2FIP6h4e1GHl0060stRhoYWl3lk%2BD8LiyMv3UL5uDKLjyZx4Y21q4sHyU%2F7c0Jbws9weM1iCeDGYxraZ7zTN%2F9VH1HX%2Bwe%2F2JpsXRwRKJoqUGKsQhXNGpEefThNXspSJH%2FAry2nMbL%2BkfyJCCj5V4y0o4FPGUfYtoomMK50nf5hkTsUOMqgXDWxGh6KaYFnJerQp1mx6GH5w%2B0cDWGxA1C9mUcyuFBv%2BctYZ1F7Uim%2BJnTSf8%2BscyK0JaxNTCZzoRlvMSUmQ%2FZkEYlhTg80C8Nk6KuA9Tfl8vXc9AMD7Dqw%2Bjn2SvlRyufHnYyQSVDS2nOLrJ1BxxuttqnExXyUQRwRbwOF9uqMPr0QbQ9xcjYV7NzIxRIfGkjUplwY1Lhn4Knwe3uxQLpClEj6Ozoynti628sQH8NoidTQoR9ghvixooFok8Lv1ajIYif3xVoil1fTgiwiWhtwR3EADg0vwjcOQfiIxwdK7LV0nGu7yEcWzLVUC6xFiDBTe%2BgWexXLzV3b7QIY%2FUY1O1cS1UefoULILpR%2BEzH37kun8L7gJnfd5DTNCouE5BO8GGoB6L8T2APOKnBTc2ZZex29FPxXcXKUh2QadIyz1yGZyjDqrcTJBjqkAUDQgr5GebeAyLSngiPUvFVGSZs2ixgDxAd4mw5o9VRJIEieVQIU7fpMZRJqzkYycLeoPNhBo%2Bka8Htv5GIGxJRXGDb0faS7pxDAH0DuDRp%2B0VDRetei3o2%2BcuoErfbyYGU55V%2FTcrmDpovm5cQv1MRvMEa6iNWbkTmWWCshkPACDO4Qu6l05VLYYTUSKHwo9urmXJNGagHAb0SVB%2BJlm2snlPlf&X-Amz-Signature=5f6647f8280b1338e1fd1ca622536d1e743302e162735e34b2acb3b3d7cb2ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

