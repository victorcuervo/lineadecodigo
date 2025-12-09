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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRAAE3O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJxOgNJ3M0R5HuVPg1u%2BKGwyf88sjbgLf91xbUlIptAgIhAO4UJFwESSZiaZjHj%2BqLgALw5BItvRHnQvbOd9vhiy5PKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzds%2F235PVzkki37X8q3APN90uebvtDmATGWr6s2gUqq9vz35b9yB4yJ6jmrtFy4ofvkf4umdELvZfq76B6nhwvtXi9RUWBATLASN4MCy5bWGCEZtlQYLR8AZOXfZxpd83c1GLKLBQn%2F1bGK7E%2Bv4VY4hbKAnr0JIatFiftKkBYpE03nqNtE%2BSxe5t093b51LJSREc8EgpFZ7uaEPqi%2FHqi612nbn7rRomg%2FmX%2FuqseRrZgScE8Ldp8P4dLxyvZ42kXkHslGyOa%2BU0SkIOiiPMV6L9j5h5quc%2FI3p0WfPJmVd3cCXAqEiW4e4krt0Bcg2kSPZ3xj9QZAkD9nOQY7o3NZ8m7J1xyQOUK5gDyjDvB4z1BYn39Qzr%2B33hxflFI7e4sPSSeAZskzptcMOW%2Fvi%2BZRiEO8yOXZk4dZNwKIdEJtrpP7KOrB4%2FtCHrtw%2BJRr6mWEKF%2FsASUpjBfdFAuT7RdtLSwAMCzPjtDPPijNILqyVwfvihL%2F%2BsBFH0kC%2F1OmpTsHmMetzpcLi%2FHt%2FkmV0tDjLAGtsUrpwa66T%2F6qnOdqslIOPj8szgJTM%2FWLyDR4A7kn13aD%2B9f2fPMwLW0fsF16kA392XndZHpiXmSi9%2FfYZZb6zRu9xTreh9C4rIGDdRgYomeO90NaP53HDDy3ODJBjqkAfxmchUiyOhhZ3Ma8xwJhDNkaOO4uNjRfN2eliF2q%2FairOJ28htLGcd6%2Frpm21LLraXZmo6sYsEigknQk1y6MfPSUT7OUSMmd%2FshpoL%2FVLzbLZs5ZqRj2WDel7pmQ8UH4WW7pp9pJwNGylLQ9v4aFpeBVWqaij%2BfEkcri3a6x6fE52XV8h%2FOPlaD8Nw7DfGkvz4K8%2Bue07Qtq2rB66u1AgijgCZV&X-Amz-Signature=9f28d5a2963f7f710a43f526e06b388064b4e1aa2f3cd5929b2bed26ca41b982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

