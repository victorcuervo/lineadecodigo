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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3V7DRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrz80th2Kosp05ux1e5%2F00J7ZRC%2FBDNd7RERj3Q%2BZ8ZAIhAIKTs6tHbRtaDB%2BZugx%2BmsSLs3WqrTMvb40mqzzZg2ijKv8DCFsQABoMNjM3NDIzMTgzODA1IgzFueobLRS8Cj9rFcEq3AOBKCwX5v7lQSC6hUi1chmuJDUJinp8TzpTgNfV5fprcNZsN9CMtljnM0shQmgAUsH3YO%2FCQBuuT1Vjj0BS2CSCLAh0uSAg5QJCZNQejJtKLIq73yRRV571IjMqwy1twxjr3NahEHGUoNMWy3Cqfr%2Bayno7D%2BT3w2omX0TTKJaX8blf6FkFLNB9HeTEFF8BwBy%2FfhcYGhtPsZ52F3cQwvNyERMea0VpNxBvNen3vK7lxAr505VybWrb7Kttkr83J9gcJdGEzzeQb%2FT3tK9DiKLVOVSy4m2i6cjkbD%2Ff3WalpS8ktzTjQeRw%2FH2M%2F0zGSx0HwIV%2FDWMbi5W3TrCUnwzaIh2dLvAMi6M4er5PsIv3JQg6VgHqFC%2BPKp0o7DghxjSC7iI76GT46Gx6HQaXY0XHf%2Fe6Wro3%2FYzov%2BukYWOMCkNxLCmQ0X6m%2BUfwsgVfv0cCPD8MKLKKqj4UCS%2BaZ9RrWRud%2F0OHtoigejWulQaM9UVCtww5ugG8SJBTEpQ%2Bk0OnQUmnqLhyYSY9DsTu1l3MncVFBBmYuQbXoubmYi2sUXOEDMjKs0%2Bm6%2Fy%2FNhnBJTe0EeFXRCsj7B3KKDWFlChaOVgf2xL342RMirhe34LBQlivUtqch3WdaFE%2FXzCqzMrJBjqkAR3TF8VAf57sQxmUAj5bUMvy49%2B7mkmg8DPPpjwUBvAMSNrKg0b90eg7%2B1P54DDxlexKaxBM4Tts0xgFPVg3g1KDiZGtRnQ9Rqf6LhfYM53Vex0cu9lx8AdbAWDpxV%2Bb96nvi4TCKX8wnGNPl8wZ%2FJvAhZ08qE9kJ8UG8S9V%2F7ko5IvVArT7VPHKk7a2YxwivO%2BgxfTksZ99UgeJmOv2ZmpJCjgF&X-Amz-Signature=ca0da95d87fc0960ca123a3f91da99d52521f4ec80a9cfeca7e415e07f8362c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

