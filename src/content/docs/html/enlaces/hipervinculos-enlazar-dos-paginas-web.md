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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PYEAG5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNfqW%2BMhjLlV%2FqynsMx7s8QVxKhUayIvXcOlo8%2BCANCAIhALQPczv%2BJ%2FTfNqWAy74vdnC3oGfAX1r3ffx0KeaX%2FiPJKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKt%2FvuiWdxyYdbdiIq3APtSFjrD2rZSY774nODRdl%2B%2BRygOFhs9wAb8D189QwwWm8osx4hjvjXMqEWJG0fpQ818TPsapo3On5fv1yNzVNgf%2BK%2Fqt8ZxQWj%2B7G5SXbQmC%2BZUS70RJE0yMhvYfEcf8ZoIevHXb5sBKwSUS57YJVwY2R8e98zTIKzX3NaHxGv8T91YAodzl4ZLi8vc0q4fFY41mJ%2FrhATOcMvduvvrulDb2z%2FVb0Wp%2F%2B4GMwrFnflLDYyg423FJsOnOtxcryaYz9F48dVHNhBt1C0JV%2FrWWJhSts9%2FrJwYyUKkb2mwrGgPxisGwYJIkwaK4PdghysNX6B2qamuB8ZuzeH45WCP8rFtN3ISkDkvSrm4OiZgPl%2BiVXvNavdpzOMdxz7Ifvlu1yf%2B%2FclWvqlbD7AhFPGvSmyl2eisz56%2FOERv4taZ%2B%2FoV8a3lgMGCEDCqNPhgZU0BDtb9hYxcvnaNcKuG%2BFHRd%2BriVWK04sD18SAu%2FI3EQogkuObqWrnr7awFSTV6Qt74nEOv8RmBB30Ed3pMu0lbUqRvakZaVlC4rdYOelS288NoUKSOTfD9b6BT9fq3mGp9CQFikUzJ7utsmXMH%2F4a5xPw2Nkz7%2FLDU2p%2B9eJirw8sHAmW%2BSg4ozs%2FmMfUmjDjhNjJBjqkAbLyEd4xF30v2%2FY0j%2FqNGCb%2Bv4VAPGfMEaTVi3qDOmJ%2FojO5DfciqAoMlQgWpSO4RMgkhBPjT6Bab%2FoXJ%2BwcMS2sXjmG7RwUCgwsQTB4KFtbLCrOwEfl%2BtkwCE0lmm%2Bvqp0fnmutG2U699%2FPmKpEZyZbes7iXYJv2u1NcdqhE5WkgUszTOIADLkfeHGTkbWtJhPS%2BthjvUX8afYlaguwUKdVt%2FrM&X-Amz-Signature=a0c228e5b596a13695289d09284c85a33e01f7976cf047f54a720a7ed3709e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

