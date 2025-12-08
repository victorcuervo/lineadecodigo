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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4DII3G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDgS%2B%2BUD9YeswuozOoB1LvTHLPHr2M2ehRB9LtjeLBqAiApBLo4C2t3KBxmzYF44UXwR39%2FQQOV0MJ04e7WI9o4%2BiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0IBK7a54L%2FlVvvKJKtwDATlbRZFmva9nTwsoVwP%2Fi58PblWgiBn5dofhHEasSL9h85jO3T82CsXlNtL6xJtZA3rKtKbONj9citGZCduTk7EKhZDAVI2gddemD%2BJmIsmHSQgFkPn4RMOp%2BEe88hBG2uJvGZzMboIi5ccZjt7ySTy845LHEdHH5tQ%2BYx8ptD0j%2B%2B9dKcmzrLdWFtaC6WwEHnSZ1YiOWD0W6HBy1c%2BZCMlasrFhZmL8HJ01D4EjYXnjuzwITuc%2FQjrtiBZtaNoSWdfKTgYeeX69rhUyTSUrXz9GXXwF3Wv%2Bke0dEb2CfhCdceUhXSJWhS6xBjnvNx6aTjgZsvvD5O7JTLAyZBR5LMvI8aM2ebFJUPyCjNGO6RjcBk2yzZ%2BPgbiSpGrQWEaYTc7LQ7E%2Fb5gViMyNk9E%2B8PJNCpRTktm1%2FXjpwgQwMOujVYHettAZh0RnO2KqPMDg3vWSnxQ4%2B3ynucIBEERZeXXM8JD%2BSeTOqPVeF2CgZOXiKL3uMcQU3WgKW8hzi8ZjV98KmPWq6VnNnG0tebfXBvdxRAt4hf4%2FaN%2FC6LJDyWGFaGn9HtcqWMIjaHSgmLfcQhE3QyJyupEmAUlgRspGoykjxfHdO%2BxDOcjmz1oVVn4OX6HtfoIctqlmca4wsoDdyQY6pgFXiPC8k8CqNazdNHstl77jw9Cl6hBAx4LY9psDzUdaLObsmy7wmlns8XPTxPmwFBjf%2FJRY4HbeiXVILWMsJQwbFxCBgKf8YDe8GeurxD%2BL87GYr%2FGwlLHAd72LKEKcHLssHdED7QXB1bTQVVT0AuYCHJ3JgjSuJvO1JZpTjPXYzuO5NeVm2k3u%2FfUVi4hEyD16dFM1FwgUVKJne48HGbP%2FY1fZbhhY&X-Amz-Signature=14bc7e4fb8a1287f7059d0bea7100545777b5d677e2f4066b3995b62298a4e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

