---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGGT3ME%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhCTq8dblHBi7L8xnawF8EsVkuDMNQ%2BteL537eup1bgIhAJIGpEDCcMXwhKAIrBVto9EhyzucKBhkKylXiEPNudWIKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoX5kr8BVB9KPTANMq3APArNKsSxv4fv%2Bk9yvnufHS0PtIx8%2FNc4jmgyBbJcIze1BEoA20yMaxnwjKN%2FGbrUWo%2BAhkInP5aCpr8XyCZFbrlGJOscAguPaBxNSf3KgIxHceeWMZh14hHCj4wU5a9sCnDyqmWbl4gRM0hudxeT9vJ7Vg39bsN45wnAhNtK%2FU6DAAR7GBGKpS3Cy1zc01Q2Q74AHUpF4gL6dlfJMXG8zv9CQrmPzjGgCiwR0uwJ2ZoB9CGv3bI%2F6Rjbb0yJLTiavYKY4Dd%2FSBt1XjF4gxvcJpZKBWxgvJ3LF%2BcjRe5Aihwr1e5QnaA%2BO%2FIYvap5tCcNLo9pM%2BvyL8Ho5fynjOOBr0ix4IGh7KKbohiA8mA6csSsDv9cwHUPwfrOvGfb7Rsd28T%2B963RTI00jmNqrWgOxpwUWRussoVmJAVxLji5u51Pka0P0eQ2OircPF%2FVJkf%2BIGdZapAIdDeT%2Bg0Yp79%2BiEwhZVx9NGm4YS8nRhUfRaEzl%2BY7%2Fyve7hc635SIQUi4e7dpgTQYnokkpKad2AoUzL9IMD5AnVBspZQPy%2BPvHrfZoz01vQW7QO9KFmmGTFf7voWIZddWaTWhzYrLV%2FY0aclbu89aqbdkvx8AB94odds%2FQxMJsBnEeC2Q1O9zCExOLJBjqkAQdDEpg3F4%2FRnzIpbArirrOzzPU%2BYXa2%2F7Cs7pvmc5jSXoNgvvcYdXwuODNPkyfLcDd3HnVJdYREfYvxS904bT3YwIfaLEJni5afceoMa1BTys8X6SYaReXM09ldBN1JrW01kvEJ1J9aoI5kCUK8dr1J6KmQ8qKg5YvLEth72R0Wnzk0R5jvn9yR7ScW2bqC5Az79iXVrA4aADLoGzl6zZmYRLGR&X-Amz-Signature=b74ce3ca5749a689df3523765d3bad33a0bdc4c9bce84e158c260f85c8513e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

