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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYEFLWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwYpeEbRDQWvTaesTnKVfbJ%2B9qViHoK7ZHHG2kdXnZBAiEAzJBWUut7uY3SMUbXmfhEj5Ta%2BJq6MLXyINQhLGCHweMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEFOc1UKsnb0y%2F%2B6VyrcA2cSHCLWkv6OPl%2Fyuwj5ht7QZUGyIxCVo%2BI0eIVvjXbp7EcRfk2Q9j3lmWOL6NsxR35lLl%2BrQI77rc6CtMhBzJUTBZxYGtQmC%2FJbg6LB8A6%2FtKtHApSc2W2LETRopnY2xwgPuj2UtmZ4mgdGtruzwXThdnIrN9wnb%2Fpt5n1ULbEPmhwDAAZaR%2FQmS1hFg%2F%2FTmmvETPCrfXPJMgvyIVcbk7tN9t%2Fc8NVmQyIfbDFqnIfUl0%2FVtQ3pBo%2Bt%2FZw9GG2arrJm7EeSSFsYGCtJgzMFEKDUIKKMAV9LB%2FrkuysJMiGciam3kWxznj8%2FtvvS3W%2FM5kxyhgY3YoxNmGhgO3bX5%2BL%2FowSAXc12jw4sog%2F5isDb2V1qSxEBEiELMjlAPymcXmXB1UQwoAZI5tK7moAbJplga2ZakxmJDT0%2Fr5EXllyjBTdhZZsToi0EzCoxlLd%2BPti92OyTXOJipWJ4c%2Bt%2FM%2Fv6HiXyWMWLq%2B6BvqrFcJsoKZC8iltgk7rjkctK%2BWzz4mI8%2FIh%2FUUQ23C7ddgzgh%2FgVfzCWWvKN9007t198OMworF%2BPF1XtiZppNpEqYykIxJnmW%2Fhn8tnzd2%2BvUqmEPWqufuIxdBj%2Bnq6TE3ZoHwdqJWgNNF8YSfyI%2BtS2MKGm0MkGOqUBP5KqI2DmDIA8nzeaqfWlTsCR2fpKUxy3I%2FZWhrH5VtqfNxv9azGHSTMKJ7k8C5Mz2f%2Fuwm8hsnY3z75aIoonWUs5kT%2B5kXe8EoOsMH8AbrK4ckrnCiIPv3LJXD1X3eMiStnZgZyJXHcHajLRIElVxDWdiJ3HLnaKUtD9ocWCxIx60emG2bQDq5WYWxTnwyYnhVclyEnnxUjnquNpIEiBnWCZVoXk&X-Amz-Signature=9525c05aed83bafe4e7e3a9b96416206ba88bb35a4ec1a8f8e9a2a0ec02eaaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

