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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCC6YJNT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbgzkCXTf6wss0DjV6Y2FK1IxjLDcrbjowrLOfz%2B0njQIhANyOJz72KBz5HNSJ0FtiMTdIWwM4jCXGmdo6332z1B4sKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPz3F3cUwBWO89wXwq3APtilwK87wwgFXlJmRz8BUYWGjYjayQATZY%2BIdMj7uXMxLUxDqaqiZLKAxhNnLfKoFb%2FYvm0EaA7ENU2DT4tfgwfijoqiCKVTUL04hSuffaxfW9cUy90VPjkV3kC8eoPL4hZbObibkFf6mp402%2BFE2qE7ajOkquMWkNujeHNPbMIIzMIxyCoaguo0a1Q54r%2BQlTxFtScqdCaM9RqDT0W8aheF3qm11tIraDb0ppmt2QmYyQED0ciFxeGMlU9d1%2BxOlE5pdfp1SArr7Xnm00MvCL7KZjwH7MD%2FsCTqccAyHqyR6vK5zkhympBkwxWPha%2BBmAwvgYKBV8KuouAByf5usw5%2FY06BUZ7tdNPKFw9LKY3dHrmKHrHwHiAqOf0GeEvACFB2bT95wLbSBfg8YZ1uAMJvkYl7BMPTAPWsdfOPvB1E2jh9qHh6UwqyLmG3L0p14Nnn9NsRxWbi5uoICtSpBdeS1YPHuv1GodzkImbtUR3wj0pzRB%2Boj86gJUSzdrL85Hm3GI%2FlcsfgMV1dy4RLxDbBWn%2BC1Qr6MCGTgce2yh%2FYvhHQoT%2F7Lnok2pkrQOzOglhSG9ILXFdwJSFE2Bnk3gpLxKVU3TS7kJdKUWRr62P6ZqJNGaDCjB%2FR2uLTCHldnJBjqkAWGvdCG6EV2ZmgnKHei1JmsnK3j3ipH%2FCqxvkk%2FvExqv5Sd%2FdK7woHByqHVve0COFbUMnkEjOYCBdyL9uJB8ePtHSuS8ObUVNc8s06NiqzUuCFhv61Yj0ctdza4%2FRExj7M3hWDFeJTlham3sOUBhHgifxhGAYHmJWk6zOBk72na7JqadrQgAaB55POVjJuXE3ehsIGBLU34%2FkfzGL5tEDSsbDR8P&X-Amz-Signature=a48aab7959820a953de6f77b8d10a738ca1fb71a796522c16c21a1765be92c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

