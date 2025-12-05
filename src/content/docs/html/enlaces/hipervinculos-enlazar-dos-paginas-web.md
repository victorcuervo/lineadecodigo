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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53I73YC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHziHDOgURV1C7AvQ2NXoOcEk%2FVBiy%2BvZrVrljo50jNcAiAYUqQnZpYc%2FQZaX17LcBzcZguTwWTrkA6V3NqSNx0P1yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM9d%2F4ebCFj28nzTM6KtwDAHqPR42j0mTGXY8dA9xBv1ZHXJgnlcR8K1wA%2BvuJKeVItyLRt3blGoTMa9BgZCapdIBwsU%2FQpXazFyJCjrKpgUSVdBuJ7jo2xzY9fiE6QnZMuCTSF72iOM1cPb8ws6xRSW7xvjdnWBK6AkxfHNKSY%2BnwkOsMoU2qVq5zPv1QzDBGWguG68pLQ7t137SUy8jBu%2FZJGj13V1Ei8pNFcWGx9AKrK56%2BCwylvj1cXqk42bGtFGxeluE8vcKXoviU9veDq7U3rsVJSj9xHUUc%2BfQOxKtjAKPvsTpLx8gNBWGGNv8SpqEEJpy%2B6r0JH%2BFAS5aBRJoWFzHmCbLAuS9RmiSBfi56g1x14rojXioOUUdbOGdGolxJ2YK0odPaPWG5whCkIBDKpUHjGbNdIzKFd4fK%2BCIgV2uEs0l0sP4AmzUD3L9XmGOFsB3xjV6RpmWXvJKmGd0EVh8tGbfOmlH43gLRLs2aj1SIxGSweDhMEzh0%2BZwtQef9jPV%2Bbgog5KbCdFUDULOLdyXOvshXALRfGOGUdlQNn9z7A5IyYpRKpxt0lgQKzsxpdg3LkaCsP5qp%2BPJLw43raFMUXmzRERFGL5LrQj1oLNczQci%2B%2FZciytVG8BEAYcdnidV6kXryMgkw7%2FzLyQY6pgGhrgmoXAVgquGBZ6ddjLdpV5945Mj18z49V0xNRRmlJN1ObWSy4FaLq6hQMsH9m2VqhHE%2BhUVtVoR0V9v4I8soDPcrkxttOgZI6LtBdWujEsrOxrlXSiyVKvjPQ35M3PYo3%2F8ARlaJynlKMn%2B%2FA3FHpmtEVY3hkRpdpjZODVQcuXKrddZlVFhiqnfE%2F%2BXNq%2BC1M6m6Y0Dp7YrTcVmMH5XTFyg0Nz%2Bu&X-Amz-Signature=d3733e758b933f82c3f996366b5c149cda05ed07994930e4ac129b270d22d575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

