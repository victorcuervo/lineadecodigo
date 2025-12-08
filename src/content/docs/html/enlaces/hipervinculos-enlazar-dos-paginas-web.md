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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVW3QNQ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B4mwT0ku2EcEdW63XYJd8SMc1%2BPvqneeNl5OabNcKZAiEA%2BuwpSlXBnCgxtJKaHwitHNBRKaf62JMohISQ7%2F4EstEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVwB7baPF5YWwW1UircA0yVyaIWMZbYHPUYFm80x3tRaMqnWelAiDVLz68UOGrSWAMcIP1xeGg8z311WZ1s9lMH2NDBtg0YqWH7EIcnVxc6tL4UkW4gp72dL970e%2FPTbO2opdFUJscWnNRVxX3zrNpBJiuRK5Vv8UXInybunMUSMlyYM4Wawme7fSt5LHJyiXLFzJgCEZHqySgq7I%2Bqoo9pMsCqasSrUbwOe%2Ftm6axQkZ1SAREwVZxRUwZoxvDAxnarnw3jbYkuSXMQYJxF%2F6i4gSRZc8d0ruKL7BReJLhJ5pF7Rh1iVxR5TIfvC%2FUU1Ymji2xkxtM%2B3csOUoAZ9sv1OSWIk268ZgsDV5Je%2FPRwxmz0ni2c8yzDG3UKbmqULKSnCy7e%2Fc4zJ1qhBAmuVilcdUQWTpmdl%2B7dSKaqHVSdO4gzDaJdP0JMMdWK3V9GUKwUJF%2FKxFU5OABA%2BTixKBcbPSl8chqUCBaBri2H63UBSDL3lf2yWCMgScRqXRDAwVct7LLB%2F5gKLXl%2FLJH5HJ5i%2Bo2Czop4CUwYpf2WLCVTgRiTXePuRJDagMMV458RGC8tSKimWJEQQEBmn1A7r4fxCaJ%2BcOMT2v3y173bbqemvC2pQC1S5PxgMJ44sZtEfek8Heq%2Fnc5%2BZARGMOeP28kGOqUBKqW4YBycvIdQ12iVOUf8D6Zf7ijohZSVyinVPZnz40urVqIv3RP0FiCcn%2BhKeyn6qVJFhs%2BjoMe4sayg1hp4r0f3rZtf01xnx21Qun2C2R6tMOJo%2F2pu75T2ukoPLhfHDJFwtxix1rtw%2BJlFepmWPUkFYo2%2FGCjbb8fKfiGsrumixPJmlxcJPM%2BwKQHaqE7AL0kFZBOQ%2Bi0SL8R60vghj%2Ba2obyM&X-Amz-Signature=5b8f10625eaaa460cec4e0c9daa12525c1381b4a28fb2fd9b7174933caf777f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

