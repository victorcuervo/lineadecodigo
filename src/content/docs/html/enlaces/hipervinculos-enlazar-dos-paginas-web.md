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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5J5CGCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwXF6cc95DnnI62%2Fg61g7ALHGcTbfKVqQ6d0O6R3HOAiBgX2gRESo7iPLcIuV7GfTUlq%2BkC%2F6DrTEtDKfBkordWCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMDB3rr5vXB2yP%2BRT7KtwDOyBJ00xfcFpTKKr2yHWs7olWfYD2UbePNQL3%2B%2F0RzPiAx4Thsqp0pe%2FNEndK4zMS0m0dyCV2P1aEq5KIIQEqEQr8dzdDhjkaeQpVx2EPiJXn5b%2B9DadsnNP46OhAon35JUK1rmf%2F85pf496%2F7PC8%2FsJ4vMplKqnLD5Kj0EcZ%2FjK%2FWoIQ1Fyp7dd%2B25mkEtqrXYap%2BczJM4ZdINHe387V1IMYFoKKaQO8BGl3syY4JBUr%2BU3%2FkCO5Y2cn7gpgclHpXZ8T3b0wdEDvjOnUIjAhXoU3q%2FGA5NnK77shIP2UQUsUEanRJ3qcdVZQIYrjPwf7HfQPu6wBDvhJjywTMUh0WCYSyyc5xtQRRRPZSL3L8E8nIlXNKAdsswIxsOt6YGgdKwDNemmvVddsRa2K%2BYbCM6m2wTs3UGlrduYq%2FFV0jnOJ4XduI7L1j84YUZsGT44PknydnWPJS%2BzWm0ynsdWuJa%2BC2hhiGRG2Rq9pqz1aKe%2Bt7T08ilPDHWmSN5pQx9CoNFcUjd920o7llxgw8DU5n%2FgTFDAGa55lrnIJEicDt2bYMaE0wb3iygpKo5Mm7MBflEBmFQIzBMdoGeV8XBTMBmKuK2mibnzkpLRJ6v5J%2F1dC3yk1Kq7fvakR4nAwp97OyQY6pgF31rIRVVVi%2Bt16L7HZ%2F2630z8mDjAaTmIO%2BC6j2fVx91V3y5HGPGcL0v%2Bjk9KzHAqKckSDp0buo%2BkSv0XpD1kWD3DAHAZy84cdrY7R7ShbRBGe6mhcPQrkacDB%2FCxS7EKkWrzqByE222fhAFz2yfZHGD7rFPi2ci7NuTbkVVtDqAas5xkJxa3SrGa6MpbS74b0UH5H7rejzuPNY2Njxk4jqyt20uSi&X-Amz-Signature=6b4d1bf72412ec29ed1307408eef879885fd31598a599fe85b5dfc888a23fce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

