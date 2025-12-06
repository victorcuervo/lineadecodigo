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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ISHY4Z7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcoCc0goBDc%2FU6kvMB6ghv9pGpNPN08YLRSLW5rdo0DAiAbSju%2Bf6vT4zZwda09c93plk%2FPWgvUoNzsP1tsDWIxeir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMG4PQSBLX4%2BC7clE5KtwDpzSG94rrVlgPJEzyZSU5psC2jyM%2Fnip%2FVomebGD1XUEL28vyjwOAyDux%2FJAGd43MAmMXGiPos1yb7eclmfFAA6AXc%2FpcRY3KUiQE2aA%2Fo4tYoEo0I2TfKVz6RQk6Iui2aW19QJK6siz9BFZfFEFNxWqHDUAyL2ZDWgRx9zSnuSPEosrFUAftl3Goebb9%2Bwje98N5GvRiOcXeHjnnd0B7OZ22lo2TyLSObt%2Fp9Pnj%2FnUqynKJ1eFhbP3gN%2BKUk9eUv7YLj63p%2FvLNzPLk6hft4TWIIACWfD28syoZpObUVH4QLHisgWPZbIWPgiPpe6O27BpXoi2oGyGFn2rJXPg5DHy%2Fkr7Hzq6yPiu%2FszZE6474KcIi%2BK4W%2Fns9L%2BHiPp1gWDAm%2FWicjc97BTedjRnGb2AQNnJZhS6qkMrXL0KGVIxSE6R15PQV9rX5lva6CMlNEekOYQbBGHm0ko7UsqGYt1qmCG%2F48YCoA8LrXcPx%2B%2Bx2%2F85OyD4SObhzuN1IR00GwTyAJfEjDZi9BM1uCGNJL5gCePXtHwgK78gUe9kDEgRLGj0ftXMXXoGpjJPWGEv1k%2BaI7LW8lzlYmydXq%2BQJmzHJmid%2F0mmmoGPAZSXY7rBMrE9LmuIoV1KzrOsw%2FsfRyQY6pgEp5c4qFl7Fjz6%2Bz5QGFEqXK2vc4TR2kIgPdrIflpodMd38Eolo6dV0hoxdYZolfjvpnfDekUTRdr%2BDwH5PL1zzQqwTTl3z2%2FK39PVgPZ6Pnsobxh8npOgB%2FP%2BfRNUTazCa3UEqpSHCnGubwRNEbfa7wjcUmiNbJAetTYW%2FbtZ1rAS43o1numoJuD1L0jsGZofNQYKwc%2BeU7J0v3p196exp91hqa3yg&X-Amz-Signature=3f059bd052a9276006b9e37ccff032abc15c4ef5911ac2a12c6b261a45b6793a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

