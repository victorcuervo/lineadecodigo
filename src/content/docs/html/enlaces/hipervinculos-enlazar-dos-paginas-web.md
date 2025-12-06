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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RKJ4KR7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ZPIx7oP0vXDBKHI5z3wcJl6e0ahjnnmpkdUc26e6kAIhAKLdbE1DnGNOh%2B7xIHMluMlPAh38H%2BbEzQGevzWNxawFKv8DCHUQABoMNjM3NDIzMTgzODA1Igz9In3CG7DyrhNAbRQq3ANQ8AHu%2Fd7e2Ez550MymsSGpEX3uHtLXvn%2FoX4mZiBVEHeG5sLZRdkGCckKYEkx30TUaKsbyFOLFU25bUjSBwEan%2BuGRidU54M6rvBCfZ7Hbrtc%2FKc3OyaKwG7mzFz41OwvjL2GuZYf9VA3n%2FZLAt%2BVSoYr6cIsdvlr4SZe17IQF9CcoChqUzKBfbKLPlGNpVgJlr%2Bg%2BQQnsmhZ38OkHVWu5e5TfosszF5oK97QXyZL1CQOofIAkA7Mm4hnZwFWC%2F9n4QQiknamm32ZJI8xaAtUGCfUIpguq4%2B0M%2Fv9M%2FXU115at3SzNCPwDeBCcjMia7hHgoJ9CP9yxT9f1JNkEHGXYzGs12SS3urrUE5ny5hCpYWDSDSA1uUjguGCTNQ9mRFElmlH7jb1tcOuKp%2BmGJYTG1ZkmwFqHCXpISYJ8VydDGvbQrc8SEsy2Wz2LoTjSCYsAVDIzKDvKuJu7oa%2Fv5C9evXueZlT%2Fpi3SCqVHKA9zBvoJkZt2eafXiDGmnZfibQIfGDPaQQ99wpngruCqni0RXlqjdZ4s0akqAMgu3PmHuie7xGFcSx84BtMhK2WCZ%2BV56qzFKVpnq5A2RyRzU%2BX0eJBBcQ%2Fi1bxSxVLNKYmVRk50CalOCuqQO%2BXTDDJptDJBjqkAX8U6LxQpmGLl1c5TV6pyeOIiAKM%2BbWdCfNeHdNlhLnZgLJDUkwiW%2FZcZ35Hp1iLNI42xhi8VhrPBK3YH%2BVUl%2BNlmnHSUeA4ocyvKuIacmeYDjz2P5bFTfdUfGkIzC7vDhdgXu7y9WapvxVUkTu%2B0Kn3x9pu0MZTPnkMqAWOgVvIVEzVR9Gsge5AXCGqmNc3%2BinP98P4e9GhZnl7bIUEUA%2BGD0aN&X-Amz-Signature=b8e21f9b3da944a17efaf0a1c55204c35f15f60450ae66e0ad08f57b3fc3b1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

