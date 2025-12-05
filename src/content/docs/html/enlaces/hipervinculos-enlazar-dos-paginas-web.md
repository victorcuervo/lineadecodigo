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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMPYBL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuS25BNAQOsMk%2FfFwOX0ENvfOGp%2BEqCmdaK7F5gfDdMAiARkhSJ8hPwcHdeVBTczUXVXANDcJ%2BEMv2FN7OzzCCCUyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhY5vfUzHPoY2e4b7KtwDFP9AdGrbJvACFBD059ZAe7qB1Cc6iMby4OWTfgWp25dUmTEbOTdAfenDFrawwVSn9B35%2FGkgpXytlMIC9tf%2FIdB%2FThVcPRrrRez00ktjb1BKn6dwRZ2pUGYKiTyAHtzIVQA6qkAJP6s0tXonvxLGmN%2BcztxxHyLiaUlF%2FLZ2HWR3Nmv8J1n5BDqejAEzKg%2Bh8NyLJfTYVCdZje2q75gm75GF04v6fR7GzwYuQeA%2FYDnV3e9iP46vwHglw5%2F8PRPVntEP1z3raVV9dw4q%2FWEbTEcvWcUN0iz%2F4KyfEdlfRv2simjReelTy6JFEVCmb06KV3th1HmWeeuWu%2FTHNC7Mgw6z7ozobmALLCkbFdDxLRDaPA8xoIIyMF8ydxy9IddElPul3uDeN9v09YpiswtXpqrnXw8ZVbHi8eX2E9vreHeotSAEXyhdoY7HuWbidisXYjie6ebHQAfFMMEfmC0d1iBxfXs8Ipz1JQcMYx2uWsRUIFjR59iFc5Mh7hVA1kSdz9teyurV9jGsjbI%2BVEezY9%2BkoxyuD48TOOWMjwT8AWPGjt47dJsfpL6eGklaoSsfoqTGQzpG4qCwPl6pf2grHcmDzQ55t7VQiNEAuwnEAJg6t%2B6t2od%2Fd3oWpnkw4NPKyQY6pgF%2F5uhzcLm5MuM2FiLRJc0WkTYkxfnXM0BBxwUStKQjzTl8M2BJRE60iRsjlhW5JPAcS0C1lmKgtItXY%2F0L%2FsSRV%2FDLxKojnO4KSa81pIcc9pUwLjmhRmut%2FuaaqY1sM3x%2BCcbgo2phRmgdcD7Pq0ZHvj0Z7aLkqNrNx9kwzZrk%2FX2hPS%2BLovvrxDuNZghJPXb63nkZDrC41yTHwuysp1mkFiBvf0Gw&X-Amz-Signature=2e68146531e8d96a92cb83a81fead1662cff4e05c6660f9a4dbc696daaf1e372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

