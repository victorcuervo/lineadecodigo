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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3PHG3L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmuZkug69JYu14Pvr%2FAH4ZQAoBgAt1pWnsiTH9TWeAKAIhALM%2Bt0kfkM%2FJOH%2BLch6vXKZu1OMo3NCUYwb6lly2otOaKv8DCGsQABoMNjM3NDIzMTgzODA1IgwLf57iN31uV4z9AdIq3AOpC4LbPa7cMlPdp8V%2FoTRUdbROoDMX5qiJcM5QUFLAkBODC9nV7QCH83STu2ewuyyOGZp8u5u9SEMJCH2Xk9jBmrO41GS6JRjWQErvCRktB2dr4fU0cmLftV%2B3xshlELpSPijluQ85bZP%2FqRIKu8qMFJePNVKiKA7C9hJox%2FGT0P3b4pvykMYAP1zVH7jbsZnnvG4ufC2Dq0m9irPIxlGne67K8xckzguGn35MwI8Mg11pMLlwDpLYDfJZoUdS20WBABAP6NWNesQYjlS9xxSOXeR6Ftf5t%2FfLnSTApl6Gw2E4BrzDYPL6aR%2BzlB1dDTH13vVNnlssk8NOQMkXN%2FP%2FGtd6wuT54nMqMNubTGp0dIGATD4X%2BiW3A6XEuVBwMyL%2BT1WA2v7MuiPk%2FErjqdK1sqjfVUSEtzgW3BoC2avFqoc5zXhXhSICMNPO45xdYC%2FYmwMGzn%2FAhNn6hcnyPoK%2BV1lGslJbj2mr09YfF%2FhnSJg1aYBOfC20Xlx0B8jUf93lz9aBIvc2nnt14A1YNfRT%2F5E9HEKQWIemffmo6iTWDh4cEcfKupIxU%2B0SkBJx5g1FtS%2FFU5O1FE2N3oKzsKHFPRJ5cQIgKh%2Fd3%2BtSV4mG5SW2yjk9VYQpPHqReTDop87JBjqkAZ9Fj3FWpinXnDJqKjNCgJk%2B2M7Ig7KN2TDQ8aZN%2FsdLJUJ8ABV7%2FPeemvNJBZ3SHccbBNqGcCPL90zfZ5jj1PPUa158VPMaNbZfhbSziLB3hF48cif7njCRHWb20vrCjxTVmfwKZOIxAr5Y6gzT3cSY0efQxc3WLzfYN0PRDlL1lxdQo4ENOjF8ImIpKU3ag54kOiP31HJONG5L9UX1RK3kd0E7&X-Amz-Signature=95ada282aaf78204b41d651818d7e76f3d88bc52a5aa4cd5e1ed3da42d5d5a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

