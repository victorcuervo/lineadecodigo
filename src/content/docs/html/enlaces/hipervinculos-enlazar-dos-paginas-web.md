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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5DAX7Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNyPX5PfLwVOkbHYklo9INvU0KVwB9coZ4qziYOO78wIgIglQaQch0vEj3MNd1IF74a0SOMlr%2BiaWN%2FjD3s3lgjAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImwXkDg5bYv5b5CMyrcA%2FQ086TGh2aFZy5xnDoSbudHVMHnApjXd5rzS293R5JjKji4wmBBJezzC%2FAojWbVIpjpMd5P2%2FvoVReodDtJeApY19rsBVxQgJGfk%2BCKRmdUoqdOOnuJlqCovVAmsB1AlP7HODURvqN6XeFUCwZJwd2tvgwRFsFecec%2FR7wCR2dZOB3TsYepiwGrQy7n%2BHSyfRYNLHvM2R8A9vQk0A5Nqwqbd%2BrcG7YBdx5pukxALRZlNIqwC241QqtppLSM38lUiajMGSNsBxpQMKWAK2T15kM4shi%2FTR7xzJ207ekVrEXhtcQR2nHsUFAQ4jVthPrflPUFEh1OKHv%2B44lk1aP5sXG384XSjM%2BiHwVPEcRH5ywvbXNJq3pJxcA4ZSJzN33dGSyxJxIILmxflZ8e6hDZ%2BP4FCznKq0wTHacJc7mf%2F76wAynN8jWZegGK05RCWvI2YAsSSO%2FltOhb%2BYKxjNpG8ZD7zjn3TwWa%2FR%2BG0TDhovWE7W%2FuYMY%2BlDYt0wzMyObuiyx%2FIRHsO2juDbVak3fwbxK11Ce18LVUspGC0%2FQxYPMiNJUbatHD2t8uDg9PHy5zYbS18oZuBl8e5g3W3DEE7yNEC4IsYH4LQg1UStP4lplD2mR2%2FVkykWMJP4kbMNTt2ckGOqUBhmCCFFKF%2FKV%2BVVSXX%2B3VSyKenGoBY3VsQdDUT%2FWU7nYOsFUks5vdqhap5LS67dOGN0vgvOgSTKCF6vNJq2gJ9n247yxC55VAVWfMf06g8MFg0djevqHQqYdeoLvTBsO%2FKDc6qTCkqMVQMsLTZUe27%2BYEKKUYvrrAaA9XKXtu2LyRhWxHUThp61PYsKN0y2TjUKcMZWCYw55vxZnK0FxOVR5s%2FoGD&X-Amz-Signature=08c29b2703a19420a780c4672d84ac3be81c7020b3ab188dc2ac16700c1b4eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

