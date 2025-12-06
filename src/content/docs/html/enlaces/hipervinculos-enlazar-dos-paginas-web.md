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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVFSI7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGijJgyVvYfrqMRSF2lwxDdAsXcUJnAnAnZXXdl3Cr0QAiEAiSP5PHUdB8p6e52Tq8w%2BHGfbaV%2F5ieUS6KfO5ffKoE4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDP57393Fn0PcPSuR6ircA63pSivN3p8aYnwUmHRkBEvznqPYJYWUkOBQsfU1HfWVyHKhyaiDiYAFVdf8HRMX6Vaja0tcC2XHPKmWjl5VfKGlPI219Q%2Bv%2FU1%2Ff7%2B6IipSVULAzI9dZ6DO0tsl%2BjowqfKbJjWCNCCLROgd8SlXfjukX6pvsX4H1qhKtTvAxA3dPWWkrfQt9Za1QH%2BsekWWcr5dH2vfJPFWU5JyXcdA5SwlurpWMRhDvLuNeB4TyGceBetxqyD0O0BockPZ2PrYeN4UOwq%2Fhos%2FPngWojESoSRl%2F2V7ZJcxfQi2YJG0ZAJ8zaYn3M9%2BadyghHihxhvUObdpGxstZmhSXFT%2BfvftV6tdGEYvxn4Wsa6uc6SKJfenNzKSxStEr5gNLTtUD38pkR00f94C1LjaQqcRXWWbqfLBbgUfIDhG6eiwNHWUg3DpZntZoQDxoTUWZmfjc8zgFlGLgYcNh2BXD0K%2BUDHG3vpTziP62Zf4U6cthJsRhmAU2L%2BQzw6kH60p%2B9W2weczg8uQn4cTtqGdubfZIhwSyQ58u89mZXKclrb6KPKy53XeCRNOANVLYTatjnKXiWoDIDd4%2FHr%2FD6qdqVqrh4ngRiZa4PsZRQXUqWlyOiToFeCXaeTmLIw7KNIG6mplMNrozckGOqUBt%2BcR2krhaFBdl%2FXniAgmRjtF48K722hk9mfK%2FuxDVq2wt%2Fv493N8mb10y%2BuNg29WXUm5Me36lMXM4D20Gz7R60WhiTIaXzNOJfbG%2FJ99977%2Fg3xs5iK6MVpMD6ZchVG4%2Fuco6j0EJAiervIEvOLNcYEIAm9py%2FSMpQ3GVfZ7YX49Tx9njGKKTEvh5e9wjn%2FqCAhZSEaZRBY6o8vG1OD%2FlKbF9Ara&X-Amz-Signature=fe8e9f6bb856225b9c6421e9c523999b186af5698e727036481a4592a02934a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

