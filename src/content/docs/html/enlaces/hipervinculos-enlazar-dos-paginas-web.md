---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF3E3S5E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDxzhxnMOXujanNnmaxiqCaNcml%2BcgKR%2BwL%2F4Y86Juf%2FAiBouZdrum7ljObi7q9t%2B4uCudN7t77coEAgoMtZqqkLyCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMN%2Bii34bDGzWTFCDWKtwDXw2PLJgnK4ndeQ73T2%2BXg2osLDUjGjHq099Nb0NS37rb4%2FpfaRRHs2L%2B9omdkBvXKa5m2wfL0xUkZC6b9lEKC6VThFmWxb2SJsM9bbAq4FwbDX9ZVqkoVOCjWBX6OCF%2B24gVHOYbQs119b1%2FKFgeZCs7QdDnl75XS2kclmdILcqWo2ar4wh2U7DrgBedcmG6rYWDEVzwq0Dq7E0EwRn8T%2BiaVPvlf%2BcrZIefaiCoatS7I9dcTv3YB0%2FDUiDMz2m1SXRURp9RFWeHjpYVu%2FnLt5rKiNjad8LUqh1Z0MseWehTBmR1sr3HFvbHszoJid9hxi6fAWLNqwvRfxMBu8dj9o%2FjpiQWs6FlFbP%2BJwnn2hB4ZZ70%2FWik0bqO9Aw%2BpOdmV5L5K6BmtPg%2BNJjxsQvx5I6b7J9Jg8nxsRjcfsWBIzeqK27%2B2pZxDx6SIjHIJ2cX45i00a6rF7R4kAIv5HkZDnQE%2FtBWnQ%2B6zZR7ylF%2BGpN8iXPAQXMz90nF3WIbL2%2FtgqfL4VcqfKXLo1tKZ42EL71RbIRoNeH%2BmYpSoO1Ma43QOxc0y21qTtGWH0vLEOtZMACBltBPbjt4jrPzOfs7RVMmyC%2Bq6WBDItrAA9JPFz10KXfEvsTYBCNEEHwws7XDyQY6pgFCJPa6r0xLVZBroFn67DIomNqtqTJgtj3eZ2hQYOQTS%2B6HwSWvlyqRgfbgFkgHZqc5J16gOv3A2UP%2FlHTgFSEi9OmUkyi9uaz7c1Al3JHBtAZN6sHWlKO%2FgzhfhYZ98xcbjzL6oYfhg63PR8sRJoA362I6V5Jsdmqra9K2hbRo6%2BBmZYWNs9s%2F0sfNChYkM1fbILCuptHUy4FHIrCS9lta3c5TZG2r&X-Amz-Signature=64fa05946fc742f95c7389730f82128ea407f3e8ce603e980550bff3a9fd934d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

