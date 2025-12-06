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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITNVJED%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlzj7UliFnUj6wHxJlVAhgwWtJjRJaEg42tq6hHFqIoAiEAhAP40KgtRyW2aSv213gndVUa1oSbPTpwHXfrnk8Wrh8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDML0Xt9V%2B0vvT%2F7EPyrcA%2FUI09TZc5GY0VV00eIlazNR%2FhHWf5AJflRZhSXhDZ5MdENpd5ZAA8VBmB722%2FKi1CiazYLQoHXHV9TpfNZgpBEL3rg73PK0avtcYsdv6iv7FwnuvPXQ6U%2FHVioqsfQN6gY8OIZfDDZXJp1erpSsAF8kfGCK%2FScb9Cyry%2B3cMZbins1kWI2ym8J%2FDfaG49nd5ra8NXvDkoP8oytaEJ8vovZr0XpjkYli4zVUT2phqPszR4cGG0YgdSFvRdn%2BiyAGn5x%2FVzfktuRhIq%2Bqav83pqYgRxRPCRvaHyrtU9nsn6faqSHiVHYByrHJ9KeXaFzaWjWGaxBy%2Buj0p6J16eU1ykU2aAItpn34qBlsePpZ0lGGOp6HbhGFx9m6BtGnoF%2FlI5U%2BoNUU0bPAerEaIrlo2rKY9YVbuOhKlb1vUirzsITWtYMSYv%2FB5aukJk5h3PTfoYYbAn1pBb1cdrAk9ArO0eyo9u%2Fv6IBzK4dWS2TPHdEL9fi6NvvKa0cHmJ00aMABarPgo0WaWkVrZaP0AD0vcSnyyNOa9RxHjlTZDL1hASLoSB6f9HVVJP5aD7GVN128xFGsqWhk68H4%2BhUV%2Bxdcm6rN5iImgKmPIsdvZtGuhhGAsuC2oPkaOmrDtuQrMKDrz8kGOqUBbXU1n%2BhRWaB1RxD5jJV9ZOQbHyCV%2FzmhvGTctPjcNtZcPquVQLgtY8PMD7ooflhadxKv5Yobn%2FnTSOzPdGkAU4TKVmbuJjh6xF2a8ZbBwBbBS4vyle6x4CmXHmb%2BatnpeQCV9KlWO1EdUCJoJ4QtGWnP7kBwpSsw3RCVxrBOsP2d366h%2F5QMSrHf2LVCLwHIizszav%2BOLbN6qCXWeHoTKSS8wanv&X-Amz-Signature=0c8e881977c50fe680397dcd6033a143b349c9fd9233efe58a8415a4f37275c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

