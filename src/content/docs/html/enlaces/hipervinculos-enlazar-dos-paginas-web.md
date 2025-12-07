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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIEHY2H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7N0YmEvTFtFYrRMb47QEHRILWkwpKvbe%2Fjeyhb6LqdAIgLjswRMHO1cIX4gLxMlh55wTvDwARY7PnCf285D6YSewqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9VUl6Y9LPgKPH2IyrcA6ZafqK%2BlXCnT3%2FkJ%2FPU%2FWBjFU0bhlpbOdbIfzkHSM70G1Mr%2FrxHmjHLlMA3IJCrxsXYuMcA%2FQh1AUP9DILZxbhdgkD8tlU8hYsvXzyFG7ImTj5j9l3lOnPLX%2Fw%2F2p%2F0Q%2F9vBV5Yisz2K4lQve5WmjfK1lf2qS9QdhdoQskBzvJeoeR5zy%2FYIs%2BNYJj76DsJ%2FkwpjqAzYCMITFQGm9%2FgA%2F0E5MlMr6ZJs5vNWXnmrvZpRK2jjUMTwJF3oKRiWBKpXG7J34btPwEqULW916sDMx0EjRYbmpobKokYUhhZdjtBtd7szp4QD%2FhymqfnIjg7qdn1Ebrq%2BoCnCpFx35J9tuNJHpRjwdIe3hI9sKrHxskxpKdXd%2FYRF5TTFC8GEpQWHtErbKKWfo%2FnF4PkLDniapPGG%2BYv8RBCptPvFJAkfO9bfYdrV3qmYQ%2BOhhsKgF5m%2BzQAMx5lcIiABNb2empg50Y068Cb2XLvXv1wdZYXJhV%2B5un%2BMBiqj5%2B5q4z9MBnl1nToufOxG741HEB%2BlwKGkLgTJwceHy6hB0cBNRz%2F1v9Oqev9LoW7clYmI3fl%2BPaFUIxcOP0BOfgYyi4YmM3VpuE5C384H65v7OJZWouQDIv%2FXH5vdLXAqG3dRdscMK6g1MkGOqUBwYBq3LkEk1mPK8cxNCNMeqfqvqR%2BVN5pWtjUMS2wMSobiWpsHG3ZFHajhWZwocWLcbc0TOL%2FgNJgCOoyu49xNlnTrNhBwStUWRkWNb9qg0orEAcT%2BZ0uyq7apnv2LWCUoU8%2BLuWWOwYiMMyUtfSYfqGC0gOySii2acc2goeotfZjGkDIKKJE8cKdk3X8dyTL2D%2BSHsZ%2BQx1KgFncf7uxaxt5ASpu&X-Amz-Signature=1614d721e35264f70ddef3df7c63897a2fa48aaa74bf1468c4b3c8d61dd8b325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

