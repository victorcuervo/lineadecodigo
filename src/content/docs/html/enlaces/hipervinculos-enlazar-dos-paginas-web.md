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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXV53SQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5XcAFK1lXN4ubQwpvIgHYPHExMRWXctzDR%2F3Xex0swAIgeHLXvhWSjL09plA2PyXomrEz6i6IwqcyJANuO%2BJpxW8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA%2FjSht0cljXQCuLKircAw2s57o8mmLhyVI1Lnpr1Ee68MYO4oCuEpWOLWgZrH2SgCzjiDMhvK3oTJokN%2BeVpKekFlPkYnyuNdS8uriWp2vlzBVHiCKgsANri6fEdYfvOLj6E2tkCCxxFA%2Bv6uBI31%2FrQDdRTYurZiJ2%2Fwipjw0fg8WVqBNDLlVhGK3p4%2FjnxnaqH1PX8kxRADbfFR0NdbOgW8T7JCm6MeMaJlrqGuNM9t9kwy5rWoDMZl2tGkh1tuMlR52jLfN68Xg1c%2FGBQYOiJ2fX32gywuT3J8bpLQKLu%2BAyq18R2PWtJHObMMbkepmrkQpnbKkE4Eo72lHvkEbnygrLUAjjL9Vkza8qtUBfSoL1bFZlCKVsWNJbTApLa%2BqbAgx03Ca1qB85ZY2KzokM%2BDLRsbQ%2FaAinCG4ZQIWOzIhp6uSAbaye0z5Hel0z4tiBd%2B55S1WGcz8YQfkGAdiPUPDG3APyvtOTWhruA6p%2Fk%2BD696YpQ5kswTZtUk%2FEL66sPxrm5waOsAd5K7a6igTWLKU3WuU5YDzEEdvVEpxwyNSxhea9phZ82Zuse7b1FDscB%2Bpg54%2B2077ESUunZ%2FFlpqskQT%2BUuLQrY8f4Klfj340MCk8w%2BEQpht5dlsOo%2FLTy%2Bm2wKeEm%2FwCrMPWm0MkGOqUBGE60cOfRkxuFrHcjlKp6DZq0HTZHegMQ4eJ9z%2BxTdN4EGXYkeInTFiJ9m3JjI4B%2FoRRNN44ONiNVQ5CNf2IZfScEyhK3mR7%2FjGMAm7OGJmRS18zeqOSbjJt2QMItqg6lgm83RQtaJ00VFKDIC9yWrgGx6GfZtiKuqO6IzhxI9VfdPhu1CePGcJGoPyZuTrD63ixqy710RDqjctccgPBL2hh%2BjFQr&X-Amz-Signature=3cc881aa15889c3a7bc60b83141a12639e2c398daae2c0436959dced11c37ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

