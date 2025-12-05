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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVVQVSS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvUXN%2Fqc6T3ebm%2B8MKm7QlW%2FNXgQ4g8cqJpJxPE3%2Bu3AiBqpXB3DQEbJoR5PTtnbP3lyHjjQQZ6vxC1KKGteHz6FCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrukpEsNg%2BEoz3w0AKtwD6V%2Bkuw1xdxUyDmoF091sRjmMP30XrUpmhq8vVubcyH2yLvzMMRrCKzn5Z0zkQTSanaFImvXYQtO6QkWwC5DIvqW4mlewCyF%2Bvgd3vJzECanfL9tGv3YIZ0mlUgdFJDApyP%2B3V7zGLZhGniYgCtRdCvXXxRnH62nDGV9CuBjFoGNw9t5w88l0gPFSWDGDbdu%2F3bL5upTHisas9uP%2FRDo0z8m4NUbf7gBmx4uHT5qfPR9b9IiRXDfMx1cksMA3Q6VTU6Iz9Kir9hiPCX7QirneeQxFuZbmrlB1odxt4flncylo7%2F32F%2FhbAE8l3mEA2onq7TBUzeM35itVugxeZiu0RJuTjQsXqcJOxNbz%2BQMqjrPjwEFSyQHUpYKhJOZkIDmcDQJmgsV3WakKhJG%2Fssfq7r8WOOic%2Bsjto7Eja9q3ERY5rXiIKEf8HeBLu1bRw96Sh8q4BDXhvHFTFJLsu7ofjvBs7qi5p5D6%2BXLYj0T5E0gZbnPnzGes2T6c45kKXMKWB0TA1loONX7gHsyx2Umax8SeAJIOejJEvjS05MQo48LGwdIneBn9P%2BQEWchlWFAcDk81hYoGWTtMyj%2BvJkDq2EMym%2BMiBSvOuc8eyaqFhpH2ywhQ2P56PoJzaxQwqozIyQY6pgGxPkv2Ns%2BcH2oeuywlwWvnJ5iJjI3iIHHv3XAl%2Fyayx4f87NmGJrM5ZN%2BQw4owfRjq1Fdo98hd6mrS6mK0re1xzn6Z81R1i8U0FTWSD8hmHsuYF%2BXOBn1fPIF7rIAvr6P38ajOB9CJ7OHz%2Bxs9ed2sOyQ3%2BWyhfSOHzjLSTdadfRaGtOdIxgPZarwfpLesSiPUKLufvNabKNdG%2BTdtVxpNQqJ3lE4F&X-Amz-Signature=34439d968ffec26fb71ca963f8b212988801a202ce92d32945a6e489996c3458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

