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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZWY2U4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV9Y0cWwOb11mQ9FxCszCmVtgEbisz9%2Foas0wkprOMhAiB3O1O1%2Fn2evw0pEBquZN4A%2F5W3PGwYzzKSZ5EEdGXnTir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMYfgkl0OI4YQxAVz1KtwDc5BZHq6poGm3zofG%2Fa8i%2BWASmFfjOsnYOfbUdIMakuclm86F%2BAEvMRJfA1iSq1skisH08NosZoo6Z3BvWMWmbCGf088JoptTayex0RDK4mA7i3rC%2FQ7ZetRMOHNOIpfMNLwF3TFfD%2FY1Po4cmArRIevvi0HHxtx4YzSBeZ4DptizOp4ZBBk2P1B9dmFXowrSz%2FVgAOg0xXOCJR5aIXqonPF%2FQuKySYUk7GXJD630H%2BEUnDUmcNQusW%2FzREKPJEyQ5W5u1HM%2FwqRX8rLIeCxy8%2FXLnRwT5qfgbufpxTlzDOjzQ12jnZEvxVKxTINkbk1nL1eG2bpi0R%2B%2FeQfnzKhtSBbY6cmTU5UuT3Wpc9Tvhk1wIKXod%2F54xWFPj6JSmcmaO5hTsJ5x28qoOkA0Lrem%2FmDbIGzLOVEbnXPzQwwaqJzBMLMR5NhIuW3PzKF5oXq8ab4hnOPUXVg%2BWQIURhSYtgQSPfd08gs5nvIHropxVTSGjTYqbjuTTR2CfKavlKJpgKj1Dud5Zv1rGozntHaGTy2aVX8CBQjr3aajuK4ZxWpj0KgTL7k4V60GQr2LtiUMNLJgH3Yl5ijCzzMgKYmFdk%2FOBeME9AYQAR%2Fy2hbCCzRjLgMWxTjokQAlrpgws9PSyQY6pgHaDGtAwyyMHS7F07N4WXZjOOpEQyqul0nRV3onZRARKZMhBBhG%2FTtWQxpkjFslyZSiiDEEL2sQrE%2BnRwR%2BN82uC0BcHEJDgJ872Qv04WCrcjOq76X0doIzzjE6C1FUlQT7fzG6%2Fln%2BhF%2Bgcr1kTH%2BYwwG6M%2FMZmn3fu5cShiKBi64kZt20Jb0WiZ7GJGllS3U%2BMWNvzsXUvPuvuqdw48rd95Tmz461&X-Amz-Signature=245f1714b7ba1170786052d0f86a869e61f5291114b9cf74fb8c09000aee6a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

