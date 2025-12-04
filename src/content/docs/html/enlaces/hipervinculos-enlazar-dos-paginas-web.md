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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVXIY6C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHUhJyjn9QLrRw1Ze%2BzGSQhxisZ7ZD7sRhIL4oyUh0KQIgIHjcEvfubw66RzMWXHS35SnuzWIqGA1VQyq00c3XMO8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHMNZIkqbXTx0ybZkyrcA%2BXuLilVhwaKa3Bq3nu65pk77ZrusTt%2BLD3M1WsCtLHiakWT3CMcQXKmCwoUTo5o0LB2NwYdfFTrVyv6xctcxlTkq8V2Am2MaGHyVRlOmNxHKhWLGTzxUDICC6ZahZLucukmK3BZ3JCvhLAS2qCTLQPhY1HJsc4%2Bvg60bPKnnQnG60jqsWONC3MWyaNvQByu2XeyQD0l%2FoIpZ5%2BL8%2F2d%2FDCiA3NWG4wKcUEcF3NneRwxtMYgrYd8kzlEzGOa3%2FsaRILNDQJaDjKz1LqaOjPjJlyNZ%2F8PZE302Zn3FeowP4OI2%2BrsgboaYN2BOYBmJw5Ota7kadJqJGvsyW4L6GHYxYfDLlzLMJicfsFKXSgDSWyNUqVwY%2BaNv65xRhoCiECRO3fT8Fyk%2FIWm%2BBxkSL7LghI9vuGtX%2B0wr9UqiVrXFyKDS%2FTBta92RA7Yia8WSP5Wa1q62n6z4J%2BJqy8GD4d2CVufibEreljiNn906zcdD5JTIHdSsH3SX0%2FSPFpwDHdmrYUE6uR9und8%2FPLYojvrSwXUfCIH3LMRngeXvy7GATCoSoef2svwK4Rudi%2BJfmiAKb%2Blrub23S763y3NJDU2K2YUirLYjA86N%2BzrDinpmFjJX3qDmyWmpCDVpseHMICMyMkGOqUBQnPv3HDg1emNTXZnwJbsL3LneMRHRfdP4FMqXlDSXE%2FAMkzuIZxxNOzqdUF6UjLkTYyIjtceSKa%2FWNHwQGsMqkU9Zj9mpM3BwWTDkjGpFcM2L5ufGP%2FvicQfcFIo2YFhvlpOKWTsqr6FmuZMGSYKJ64rE7%2FsZYe5AEgov6g1r71llIlA4ANcnbzX5904U0R176KEJA6CdxJjgnaKl4fFXMKqbJCz&X-Amz-Signature=802d03f26d655d051d0f34e2f0704f0807d431ac7b09c34ac1b66cb5a5d9d857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

