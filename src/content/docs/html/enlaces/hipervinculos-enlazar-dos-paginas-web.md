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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7CUVZW5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw1mFEL9rYwosuBg21j3gjaTZzuMb5Z4wV%2BvPP3bbyCAiBM%2Frdfc9TzcVNsiGfsPY99sHBNFy4hfKFr%2BuWEi8iAYiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmxGtlmPv5%2FWemyaKtwDOx%2F5eOdVFgUlOqn6meEhSX%2Bmqaj5jHa%2BSae21KrVmWLZl%2B94WsSFLx23zDdCjwuHwznHgDJ%2F%2FG5zkIS0vDPiute7sDK9RKVruknL%2FeCZh1Vko%2FJutOdQ%2FsQWoSufO2N%2FwjwaytOVj0Kr%2BO9R5r%2FxHaG1zHNSxcvVkEiQtEWVO9hsMJv9pXu%2F7aC%2FAUNVi7tX4FkiDaNw2bvgt%2FBHn1bzqBslLgkYmFkoxRN5Wvkjy%2BVCWmHUkXLydFlk8e4Nh4sNt8o8bOypb3l%2Fx4p1%2FTNWNa8CwFzNoyzaCdL3G5CW7sZc8TpRNGhzqHOs9PMe%2Fr7UpEmzyiDr2IykYbtfd%2BzR%2F9ugMIe5MtfRmRRd54v%2Fxg4jU%2BMO10SmroKukYMsS2iH59IrqKoQRjju5Ybg1nKZyxE6D8zKdgo2OQCpQQmCGXVeQJd0cxhkfWdPncAiP9hbmuEwIUxMNQVI1ilDOxLfWGPr0bAp4rJGU6p0HNBugGaQSHZTtmnll1U8kbTMR4q3eKIqq9T%2BwkxY%2FJ3rSVJRox9CdUQn%2BojFTGbuZbobXb0bVF7q3oiXacAqB9leEBLKRb%2BvoMqd%2B9rMxsbJTkltWokBSQopsuOZJ6X6f2uGHXU2HyLyAO7o5Ct%2F588w7ZfhyQY6pgEJxoYDtK3O9QoUtVeGVgiLz7j41VWhNN%2F9V1%2BYyjyEahn0IC%2BRM4JNrIuuvEocUB4bX9NsK5A995XXLh2AQeIF0bKDRz4nxdkIORp99Jq10GnL11Vo4hqhP55Vsl%2BlF9p2iVnKY8sD%2BoL8wZo9%2BbtYdGv0MWifiNuh2lVlvQyh%2BxKw%2BZS9UOqas7eXMyziMPxOYk2aCmuAVyS7IGuNuboP1KctuyjO&X-Amz-Signature=a0a5b7a0b570cf90855da84a5ab00364a1dd2710af907c6b6ba02a82e596d85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

