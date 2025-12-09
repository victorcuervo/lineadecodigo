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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656IFPWCR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRKhUQd2vP%2B8ow2s9leY7H8%2BA4e%2FneyterNi7EKofgZAiEArtv9z%2BQG%2FYdvh5apWTsa6KN2oOHanRDodRtTwOs8J1MqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImNqyGy9ZyC8YR9QSrcA7VAWcnTLcFsx8yD%2BfJ0fX%2BPk0tt%2BkB1i0H76wi%2FgNM6ZDkhgiyneeXwsIe3d9JTYYMuk5UE2gO%2FLr6jULnQedhPc8nVIkwyPEpOkmBT%2FW0QwsbpofZFQyFG7QQvAaijdjiS1bImZUxScmhUXsipbYzs92j%2B%2FZ4V9aMw0lyAUg7jVOK3EknsqEyoyA%2FtQ2bWJC7peJvAkxmzhDQpcnKjYri5zHFFGJY%2FKgwwMPy9fn0dBVykUDD2o0dLYh%2FW15YyCMNDYNJQsn1APsm6n3zodV0HL%2Fp2quH3NEGpPrbslsEUJ6GQSdgW%2B87jwF21Oy8AmQeREJXMqOpYG0XNOG4v54YRvaKC1tKjvgKA54GtypWVLGtBMuYoyAafiNuWjcV%2FumXGO79aEXpWHBJmy%2BDejvWQ7CBK6lz8rk6PpwrLvIefY%2F9Qa%2B83AV%2Fgr14aeTmVO0xlGHQuW2Ti%2BQ68q0Wd%2BjQMp2WMwCjNfC1I2dMZ6i6MaQjP67BvKbPpRQeaMlEiCFuCfL6tKMI%2Fu5uKtSXfikTLEiKiIHJWXNVUrIiEMgXuNRNo3tsYE2TGSSQpH%2FS%2B4YJ2PA4fCs%2Bp8XAosVi7I6noUGmb4CvZkwqV3t77hipe1d20E%2B6w9Q8LW8aMMIW94ckGOqUBmcGp6pq7TZNZzFZAYMksn5uNqL74d4iL9EksVfX73A36ou9T32baAxaDHJyh9Kj3Qazd6bdo8hgSqkfr8YuVGknIQJo0nutSZs4EZWu%2BNi11cIX4CSIfolhxEJz43zWUiiS%2FxHyl5a8A%2BUnz5GYQDPfAMq%2B1uPS%2BAw3rRuzw0Rc%2FxelWjWMJlUSb%2FxZPu%2F9%2FrxYd6n82HaLVwQsnq6mI%2FolY5Kzq&X-Amz-Signature=3859c2de9f63860381634ff0325f2e0e1f012a92e8038340fe7ef171a0b8e621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

