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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKZAKGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Cw96QE6kFD0n451LoULrxUtyT2QITSSro4MgJjUE1QIhAPfKzBUz%2B3p0xbku0WvIT9DfpRONWrg%2FynTYFuwRCpDUKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmtHhM9eO7uAkQzUgq3AP3TiPD4XGHQ6pBaDDJ66qdpA1Xy0dzKSjOyqizIpGFZ2fZ5oSeCQMI24iK9HfyV0ivjGbWDkb7xynHWtncY9f1OsGiSl8SEnfY%2B5JS%2F%2BsipBKd%2BVgyk1Si9zpqsqA695cT2qI662FmdKA5%2Fe2huqnEiFzSu7TBx1bGKm2mIGuIOx9Rty6oOUqo9AT3lfVt%2BnDQzOFDKtT%2BRMWDL%2F1DOJ2gz2L9QhSwOX%2F3KnIEBkxhY8aCczsDFontiO491fwSsSqOgabsyGAEdQRl2JQKUZARxz%2FRSHM2NsRmMqCffZnqJTNLpv5%2BhRAcf6MRJpkfzXe57QZ%2BXWBFwBpo8NwsEoH6CjhLzE8A6jp2%2FfmhMCcR4IZZcZMmP5LAXIpo%2FWlb%2FaMXCV83SPcUEsLjb61L8fk7ALs2tmXRAeOlJwbRC9yEfDvh8TdqeENLZU5hVGqexV1FBzFQEQmAN8dqiCMyAuYVnz7BTxJmcW8pTn7lc1TvTK9DNwvvLzzfq8RxpZPBrRUyxYmOX%2FLDGLmHJXfXnsHt3swMzXLL27%2BLzJdD%2BfAK9K2%2Fk%2FLXbO31X5py0c24qCNvZVblglp%2BF3Daz3JJjciFyqkhC4m%2B6c2qeSO%2FwFYfFu%2Fecq0UH9s02n%2BD%2BDCC7tnJBjqkATrdv%2BzZa4ClFGJrgE7jY1KlL60MB377VYAgJhfKhlLazaCnGvkVEegp4udn%2BWZ%2B%2B4mJHNX0IL0vdRHyOT6Gnp9FiHs%2Fln5JRs635nzeiumB3cEdV0yBu3xhpfbsR0XefsG72qWW4jb9t77fp3u3KWuhE1C7t5OdamOeBLpYvRO%2FRCBznucSZtyr28iYcgRBLW3dBzd2CFOs7fyHjmK3EslTzt1i&X-Amz-Signature=0e05c409cc0c6258e5801fe2f0722c8aacc03cd25b273ef3282d98c991980ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

