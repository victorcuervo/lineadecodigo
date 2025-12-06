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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY4OCKU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCbjmEo5Z1OQo2vCqy7aBcgD2eeLcqclyWB0AXKlehuAiADlinHC7mBCe1yUVqEi7DGpXSmZKp8ikFvTl3csevx7Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMj9%2Bizyn8tLTJfhz%2FKtwD6E3L6I8t%2BHWiGqB32cjXa5xeiK0QKouQ%2BR2MSCiNPo7pnxg18HRSSCZmS%2BiTGd9DpIzh7Xk%2FdH0VpTaJ4lHxCpVbmYp%2BZXeIZMP4UG9B7PXhzIKKZCZzICuJConcqQirMfyaN5Vmx1CKTZrzOCQzCpCYD7fD6PcOzFcv8lGI9ei2N7T2VMLjYQabD%2BEH%2F5rIihVn5pUX7phIRrAW8kELZJzi1gF59n80XdX94pqpM%2Fn6aEmnAzsd0%2F4g1lthILF7pTGGGTJHfvgGx%2FrtQpxCoBGDe4QQYmy4zyf6t3ZOk4jwmNIPVDNjHhyPUAF3fdoASeIvwk5mQySr0y4L7N8dItIcl5%2BsYWGhuGaWX0TlPvL7tvpHuL7W9EUs3KKeoo3AteJcs1e3m1pVMBlnPv5Y4QTfPmA1%2BIQQcA0mCywB6m2oH0qQeYhuvs70l7RTAfgTsLCvCni28lv%2F1SNiFDCIo8lel%2F52aqTc3XBaoZXxz72fkNgnqZSvBvXX%2BNcktPecWNFBMsjbLAYKzfAptrRoEGx%2BOHbTzxsZt%2F%2FLoafTzDsVf6H5N5%2FNrOkDM5Le7hA5Arl09ZrJI9Wbj%2FZ9KucVYqyNiSy0n6hg30L%2Bqyfqi5M5dZrLkslJtATkX4cwqujNyQY6pgEZ9aSvwYgT2jmKbocwJ2CdY6kpkFpSjWCHdniPw6uX9GHdFT5xclKMQCJ3p26JGXeuM4E9dpDCXjvoAsRU0h8itWkIAZqpmRB6Urpc%2BVU4%2BLyLhE7ym%2FkLmBZyZq2UHASnBIbp0%2Fbmoo5WqxIzl54%2B9vGAu4wlbt6ACoTBGvtsAdM98yah0Qh9wS%2Ffv27CY4POFcmir%2FT4D0dpX9%2BNLhvviixxfDsO&X-Amz-Signature=cdb20295f93a05596f3fc4374096aa56c10f0de161d02edcd4b1f2ad04c7681c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

