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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDPYNYZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRNnVJgybQzwyaqLefqCqn31iFh7mJFuz7%2F3jPv%2Fwc4AiBl9ZfvxA%2BDzlh0k4TIcmCYFXevDXwFgG7OymLFMm7VMSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8DD0Z1%2F0OpTMAbRqKtwDLbwagHk%2BfWTo9z1U38yfRnJvSq64L4c0vnaU%2FPljA%2Fo7qixeZ7MSweKtBoP95g%2FlplXcyRSaU%2FT50qmQgXqU%2FHxSFupJ4ljBT%2BOCaD7P8cB1GGusSKPFtXea5RsAIPtiYLyf2QKP9CLQT4RxHWKQ9twLWiCloHTD0iOlNEjPXRQMPTB4BEl0YU7BPFKVFPeYoN%2F20yDCRR5XdRvjnzNBo9Cm%2BH5R0P0GoxmtHubYm8e8u%2FpMvVc0dHfGSX6GuExxRig1eMlb309jrDwDEIcHEWfO1%2BoZ4g%2FzuumRPWTCirGaKNL0uUXkcvMTP%2F2Zz5noeJNf%2B3ol8BGr13e1IFDSbHa1hFjPDM3uAc2VQ02%2BZofJCMBjBZPfuUmSohxZ6v8OMQRbt51zKkY7J0qKczz265FFk3PgzG2B8BLWPwdKzNqbMyS%2F%2FqAPQ%2FsJd2VnefZYyl5dfUq0jY%2BmEihaon%2Bgvag%2BPN8dyDVUC7ickYT2RS0IaFOtsC%2BFK2MwtVGaKaJM5bLx3aJ8FtLCUCaBkwuiWL0WdTUkFcoiNUwdSGPCFYAw9GjrOD9at9nD6Xbrm4DT9HmvQgJrd121iDYoDItNMtyhq86bdiJbbAfNJRJfHk3BC8eUvRUGtlJcusIwkMPdyQY6pgGz7ybDXF7i2YiQwAFcPQNVxcpLTSte0UlG81Rm2svUh6FeoICVwcO%2FR2fuqjEw%2FaYRGXq8GV8EAuXWh1bkIFzGyqQqyeDQDRsK5vAeaKH4lN19QN7Z3ZfgOumXLrcR9oH4gDRMwQ2cELcIh2lYzf9a01xj1vlsW24GIuxOxrdApbsGPSkWxUmS2mbC9UFe82IJfnOcmUYk3Q%2Bs8laYOXFqKSy2di8M&X-Amz-Signature=4b3a106a6f44faf8c8e7549008a7ef06ddbb8d1402fca30d7c77af67046e9fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

