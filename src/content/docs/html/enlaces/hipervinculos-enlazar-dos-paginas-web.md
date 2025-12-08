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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RASJO4GS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoT25toAge6rM25UiXbOaB6uWWdR7S1vira%2F7bD0lxOAiEAmvHllxmUrirtqNMUd%2B%2Bt61ABuP0umzJUZk06LuP15H0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVeBrm0ggsKjmn25CrcA4zbO3RU5gtxl4kj6qiKCTcczdTODvgu7JxdreFsIVCX1EeglIAgcwPSoiGEHEMvVSisVGKqVC8HP2%2BL%2FW5cdjMaVGUZHE98u1uedoCKG2QoaXTCiDGJfW6mf7LA9isvzEm2e6Tb4cKzh3EpeG32I5V%2B%2F3gNP199NCw5z1TNh49KU%2F1TBEDUemFOu8NS9USTrNisNfHgcJPz6sWHNoqgXBDj1j68RvaqDkRh8y%2FztQwBes16yz8xzLQLwBRH7Uo3lSjYtxm04m5Go%2Be3pdC%2F996vzc4RB6PzLmNZZdweAWeEJNyieKPqhfXPZ%2BDTAdJLJE6G6f8jHyGKgw0bW9Rpl1J1CIKiePIvdKFD4%2Fsm4sEKNGOmcUZtW6p2f0vRG%2FWGCRCF5symqLaNIBQA%2B8fyOo2%2BdLUsKnFStpJIujXp2igmKRHtcZ4gLlTCmlCxFGWqAVrvoQ5aWF7xrEitKn%2BMIXuO0tXarOmdq%2FnDrfl%2FU2J8WBz5DRL0oAbB2kI%2FJyq0MURRKXpeGF7hKy%2BAKhRlfMpGV%2FcrwMJoIWOQcnp4JVI9xaeBFQg4f2Auj44TSc7rt5WtzkskGlsN4oIN4N9iLLSwAC530Fz%2BLXVrvbSnKkwiuaTk2IMYGrQ2H1IxMOKz2ckGOqUBwqPS2ewUNBIPFoACmJof0Ew5dGAu5jngfMR%2FjOCmIvUuEUc7HqHMrlxSbQj4aKvf2NELDxMPNlgvoZcFD5pVYXmoNWLE6y8T9MLB7tZOgknXN2zc9lCI8W%2FME7DGnRmXcm2oHrTRLU1YSHTBmaeOK9PXgeEslHU0NyewaA4uK3EmIzsrI6CTuQ%2BIiDn0UVYwU9WWi5hWNEDSHCp7lELdtfynMYdZ&X-Amz-Signature=031e3671341893e3476bc312e30f717d2292c7fb7505b69fa841059435a34529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

