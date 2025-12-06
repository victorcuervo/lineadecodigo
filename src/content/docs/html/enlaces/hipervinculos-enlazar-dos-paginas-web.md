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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625L7KIBU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhAbnD%2FXZwQuCYmIgNu%2BgCnLbtuxHernwHgYMWfIbr6AiBFcAraG8LWqo%2B6QTI0vaCszV6eeu1QRmVDIbTCrGYktyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM60666eDt9KErh6NPKtwDUQusvlQasddEemztUzeJLofvKe7j%2BEe1oIkbkx7oRC51cBWDdU8EJMvlcfPR4XZql3sFehlIrIu8VZdvvT7hA3e7t7BV66TR%2FRGeqbNsuTzl4ix4dgGAIcO%2F7XfRt1MieqgsTMdeimbTt95IHSOwEdT9TMLsBybfwM9bS3jv7OMSVxWPlg3VfULR8m3EZaJDTs1pzLWohomYGHiXP8ij5a4TEjIaLVkaHQfz8Av5b9lQNWkB6ribqt%2FapcLoWGZm%2FdRWr49%2F8wHsiyuoY89ROiIhPn2ndt2kjcp77nyXgDYHJ%2Fr7GejKpSIZfVcxcWz%2F%2Be72k5LNEAEA%2B%2BFHz3KQG9O8sk1A83DUA8xCyf0XQSb2GBanzYI93wsvzQHJ6SpXMCC97iyH%2BQsJiB3s8Mk1S%2FNVCVRW%2B57W58Z%2BxqddS4L0woFfX72VjUrreauXoLZjWkecdHaMXBWAaUIk8IGhKszIYI8o21RLCjq%2FX61U01A9DDStS1cWPlSjio9MdnLOXFWGJppzvkkEf9SgSLGkkAvevwJ40ns1cigtbeZwCuAFTLnRlnkG%2BwO6J064JRqsK3EB9Cq6FAd4aFXrtjLy%2FcrXTF2jNbjy1nsptmBDShPBtB92lLKrJndptbEw0OvPyQY6pgHAgCq%2BfJeNTK5cqtdhq%2BRY4mPB9OAM0uXuLgZ3lcNtgxGoW9%2BPUQtgFZl23sA%2FWiAR5dm1AcR0OU8c2lYfJ2ICnNqL%2F4J3eRab9xi4F%2Fkx%2FmnOdzvnGwuvaqkwPNfo%2FNwxxyzbyZF3H%2FHQcQRcWdpwKpi56BVKjGEft7nmG0T4lG6arPXgcAx5IeOI0f0ymFVbLjN%2BWMHdU2K0sf0EaUzAfvo8Lspv&X-Amz-Signature=d3f1a60c2fc6409ef65b7c3e6e4e184f4982cbd74dcfafe511b54601e6e1ac8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

