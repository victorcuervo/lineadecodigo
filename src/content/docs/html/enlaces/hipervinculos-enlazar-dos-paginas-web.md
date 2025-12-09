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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNFPYKR2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDzPwMwSzTMWb08NB73feDuc3PIOu9DqzDKpktIHwwrAiBAbu7UZBPNX9rfny5D%2FkKgN1AOa6zeyO%2F05plGJyGTDyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79YJNBx5iiLHhNVQKtwDrQKLudk0GkXDsCNItp5yqn9nLLy9nEOtoo3%2FLv2rcbSqxUFz1K42lz%2F7dUU3J8HrITATSW3O4utn3z75WPNF2MpAHOhHz1Ak8hRNzjblEw2ChACKWksJ%2BoKfoi61VLJqe072pp%2B%2BaRO1N6x5WlJ8xSgabQWig6tbphyNd%2FbcZvLsAwThBLorHgNrD27zMyB81YpdyjusPz0xy%2BT6QYlj8lOyw2aYJ%2B9fcygxnZLbeMwL%2F2NUYjUjlVuuwVm6e7nzG2rp8zeaZ4RnfsM4mzpzHrhw1ImgrHro49G9K1KuKo4uuC87I51uo3gl9hnhI%2FAujNdAFGecc4Eni6YAscMLiYjOtAgldHkJLS167iMJ6QNVZ%2FzrvW7O8KB71YKCVbg3%2FcPrboRwE9gEwL0T24M0AXewSMuwOuI96Gv8h6P31j%2F1gFQOcyoRhhVXCN7EpQX%2BYOIELJBT%2BieBHVYuajApQ3zZtNhH6oo5xV9LP0pdqO6JOW0M5OlN%2F6zsIFYUAjE6MLIF99q7lQfvRh6tQZnjRyak9vvsz2HZRtaLMb8VG%2BSoOuj7polZS2NdtQaCKJv14AXxsJl%2FHxzRnet8Jq36h3ZACt497gwqIelbEtzGG3Z%2FhV4jeRskn1vnyUIwxZ%2FiyQY6pgGfM4DnjraV9N1PHkJD6vu0UYoSNn8pSXZ4%2FRNKbpcSS9hQi%2BZH29lLjrknr9SliL27YH9JcxLsKimCb%2BlhIjObUQ%2FOI5KyllS%2Bon%2BslM7damtzcTWmNFmtCt5E5Xb5zFZEJE0yagDdSgguE26p46JfHvqav5Z4umlerWpAWXa4OZFOdXr33gPZNHMfxrHgvyp%2BWuWyLefdRuY79wjOgG7ZWiFBd8nl&X-Amz-Signature=f8d181cfd3324f930445273f7a65562baaee629904f2b16a2d12ee3c3252dc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

