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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2DB4HW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVv%2Bmfnefu5vSSyU3xYOhCXbNYAJsRgFLjsm2isdDp2wIgA0h7zhbWCYWjLduWmEvL8udJLhCdVAx1Xtgk7Pdzwo0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTuyOEL9sePtTbz9ircA9z6GyuBFWeLnfV5AB%2Bd4UamPBCXomZd0J%2F8LqEJ1tOYtlUvpy3QeyFTHM9fKeo1xCjCu3k0IcWcNXa5%2BRI1KSWnZA1iKdUewG%2BGXL9oxApTuQwVbqkPgs7jBg2eEEKJNJRprFJoSqR3Ng%2BzgEYu%2BuqKYk8og%2BSGzDtR2Yvzzs%2Fy%2FaZkiYs8eWHGsmzoXCwz6baQXO5F2vxbfOCYwXG%2BrtyVxB8VGYzRcKimcLaUFBuNHwPffSATEonlptHAf1F7RByCCAjLkZrIaSPQS9EpjRJfQYFByUEMUN1Y8UrXZLo8a1gdcda%2FZmlTyWAzd%2Fe0oyNEi3jVjd5D9Vc98BWU2NVpqNWqcNxgGRD4ZWXuBGWmB69aXTsl9QUaeZFWJJkaqgZ%2F7wkOdQfc8fuuIOf9amDqj50qrQv%2BsyOnE07dTNQRU4JtoigeworQdP0qsZs7diBe%2F6WMBIw5IFUk4M9x2a4JXXCP0WJbx0A1REUq0EGNtiQN5DeY4wWf81YaxcPjHDSTogXj52dvDVcGVhIM799P2t7JiueUN96IrfyyMKfSIn%2BBaHwTJ2O6LQ5bRhxMpfymjcKx1CXGSwNAvJGe%2FaDo3zMLRATDBaEXHVV3JMZevLldB8xgPyoAQgkvMKft2ckGOqUBoK%2BMgxNaE0Tgf%2B6hnYYytScU8o8Wr6zwbArPKoHkzeSC3R2UUn69x8yPo2Q580SntmsGE0VBTHQ94qwroWfvCCRckEWKnQu7jzc%2FHps8xP5QUUisCDOIzuZfNf2%2FdpW8DDPZSxJBzGUFybmz7BPebbljaMWl8G0V2u11aHExRsmWzyiuB%2BaLmhY2zJRXJ7W19dpJwSDrKxhTk9QKzRNENCRQqCAx&X-Amz-Signature=09ba4441cf7d763c85f99869b17bb5dd3ff1dc2b9cf42159a56133ded5cc6ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

