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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOO533CT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1NyQSw0TnTsNXdhAn9DZqnKgu3xIq3UjMvzrqp7CgvAiBwJuAEGIIwRpJG1zggwHCoiYMvKuJ6bCtsbM7enfwy5iqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaXVmFCybUcU1YUA3KtwD8fXFCX2MDC11Dtt%2FJwakt6i6zUW3oExtqtUHAqtBXFlelC5MPkP1QGzh9GZoWr8tY7AL%2FLJqOe7yuWV4mn8FRAVJrRE9DdSQBYmzbYEf8sZFGaiZ0NyC8icsSGMtN0wVZ81STUDh6WjllcaTgPOrIa%2B7rm2YkAknhPCFvsa4pzaHJPLDaVZb4XhoBDV38r5D9fXIeW0Ni9UUvnJpDBBGY73KfyniNmUWH681uTPdc64AeW4uev58%2FA6ijLDBUT03050fUFV3VBCPjdVxxSf%2FsRBo8V3fVm2qkHodFMVY7IUMU5Pcr6m43xYFcnQMkd%2FTzF%2BtthqRvg7lpIJy21ykGwF4dHQ%2Fi0NfSh3Kzk1r3q1OAL8UKAnXyVaSKXYj3WgFWPXrb682doRB9IUr6E4AauhCt7CFR5RDKK6HgcoWnfFBHFJcecfaSPuGiyOxDpFJQQL01oW6S1GFernTfZeKPFPPsCG58o%2FMLv8rw6N2IUti%2BcVnvknqm004K8%2B2lFrnJBTTx2uuQGagciXNOUIXT1ZffFLuLVTc9renFz8qJoQk%2FEiMw8KFqd9P8oJ6o9P5al1JDKFHHyZFFh5VawlC39xifdBiULoOV%2FrGIjhF2sjpWspG7f73RPongeQw8K3eyQY6pgHECTrh5LkZoSEzBBciVlD7xLiEy2gsyAdI2V%2FP4AoCObZunSML0LB67HZ%2FVCimvI0OKfN9RtHG5CQxo3nRNd%2B4Vya5Bmpv5mEKQ7CRH15NgrNUQEPT2aN2e%2FQAD9HGj8L6ivhMIu7iEPX384GxUQ5oRiOlQwoYrdkXQn6BWZD7UtdYRDX1%2F3OOiuNcFnwS%2BRfrYFn%2FNr2rQKhTEOBRSLi%2FnhtqCbp7&X-Amz-Signature=5b08fbc78384c028d2037a4c13bd45d56b84a5c0dbe15e52b3eed37a5908db63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

