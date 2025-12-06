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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57A5V5A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxZFoIAGyR5aoCBk3VRRcH7yHLrY2L3MFHQdMSUhVE0AIgeddz6wZvvfVjELCIVSNoGsan6HkhyHi4WmjNkmZkuPcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLQJH4nVQkvUUVQ33ircAztGQjpwrlqSzosILTaleMX8XkyRs461LzfucIzneMQeO1pzfxcCwml73lrCIZTeOkj4IKdZWoJ6TkdCBtvlN8AyJ89Uvs3TE%2FFH33%2BawH6QPp94u4E3zKuvoJ9v84cvKcwzmAQPSwDFryIMA%2FvLoz1bdP8AKdHLRi8q5KK5wNCzpS5SfHNhM61Sqr09yJgqLBppwDM%2FVzvn%2BRENA4miEShcI26VNgFb3EcYHbgUKfmBf1Zy7asOWx6HDyEqA78UHH6F0ShsYeS6a6EwHaP9WpCwMUYR5IdQRat%2BBQPui2yR9TBecUZrbhxzTdxE9BPphb1frIts8jRNN4EA81pS6mcNcdOnO%2BMboaSxh3pqcOBIVJOMuAglqz8sx6thE%2FaFgDjNlhWalKWFfDDiHNzHLzbfFi0esO0Khzo10BabCqTFbsmJqvRvqlQklF3lSA%2BOcqIk6OSMTNvj2pKmv%2F0OdgmcWFpsdvHUlGruYuzQQXt2LC6YsGfjwua3t1z9PNWrMv2aw%2BAAaIDJ7gzRacPq3BfL3K0CE5%2BW0CnRan%2BBeCSvA6j4WmKRuKb9PGN33aztSVNaZJje4dvExGaE23uy6h4r1z9ic6gP21wg%2FaYTtSduFzHXi%2BjnrFXwlD7BMJCJ0MkGOqUBTYUFzrNI9maLBDNUOrjOpPjz5wW0zAbCoNKhn4GqqXhBbrf%2FxGsXJMWz9tSLrtBqdoctThVmj5yHPjKormAXMfAwDaJSrWEvAvX8scLo98YGBSiO0u%2BZKop2yZhli4XaJ6N0saXCH9gBcJp1etIYrSPYHHXo%2FwCr%2B6q%2BSKMOMh4OUzX%2BeZgqtWAmkFwjDyn4Wtd1s2CoHDYqtEfQ8wTffDhrw5l%2F&X-Amz-Signature=537e3607d2a0fc77c68244332a1c2d36a752dad2503568740ebb899aad2c3386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

