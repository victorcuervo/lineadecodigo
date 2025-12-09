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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKQWEFF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcP8SM2ZB%2B%2FFHBivUEfTy5P3Y6CdDZKnRaRLotHZ86dAiAohgpycgFERRrWyc2w2OlKbdfWXN9f%2BZGTW1EbLvrG1CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3vI9amgcVwMNEgtJKtwDIpUsNjm5nd8rhURoFSVmJFozSreqnIDZxd%2BIOe%2FaZrTj3Ein9SaEttKPshu2%2BWTzWTouJ9%2BAldeMoL%2FhGixSMcFOlQF3kdCSJqdnAwBerc60Xt4mbW%2FfC%2FUO4aTmZg0XGAOFMOFpmBOxTKM5ep21ZLxeonWpH1uMkFQyKPLQp5X0nLMaXnRG2O3QWO5tCM7XHk6%2FMjlVge5ZEAo8OIObgk6Xine4TetY969YcZGgLe34ptBqouHGJKuwjgVz9ikfETa4%2Fx0rl4YdZ7KnbFEo5OOlfX32zPoBn5KKRA1vkhLVH0m0vrudBsyiMOZGDtg9OxXRIWJJL90YsaOz%2FIuOZZx70R8q7xz3%2Bn99VEduSsAgR4xHu%2FZ1u%2FyKcV0SXUyjn4XxncnyuNvAa0oKe%2BLvrisdgshdk9oAjfWATEykLYH3wpQ3AZRHL51ZTTtshD1Tpa3FPwqNwJw3CBG7ChetZkO6Tw9h5T6sG7TBZUZ8aKoOZ4vni1Wpr2VEmQKggx6lfOeGrfiaE8hSlUT5IM93uR80%2B1gWSo4TzvVLDurC9mVC08ARtYf9oeXshT0dqzoYB793%2B5jvtBNr3UlTAG0JRRmG6Vy05kmnV0Q%2FfBrTK3iEaXiQVea0v%2FIpWYIwrf7hyQY6pgHhtkjROCJLux1WtUYh%2B%2FXwUjfVe4XXbKfGahYigb8jgGjDn8%2BCE%2B7Xn%2F1OqQwNn%2B%2FeIRoSZEHMzbNxSOFbx7nKb%2Blsnwcws6tetGuMK0200lB%2BJDmOkLQVi8wWxvopPyE0Y%2FV2WF5EDPlEECfWUz%2ByiHgEbTQ6xT4ibfFvm3yPd74gn6c2%2FIh1rMaRRs1O9fsgAHe78fQymAcgF5p97ZRQFVsxLpUs&X-Amz-Signature=74a3baef698ea16fbd4346c11fac018b2f1c29dee889309477ffdd931e10078b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

