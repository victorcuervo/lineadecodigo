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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LSZ5ARL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKPEZNBmUA4Pp3lnDMLP2roUqJVikXhn5qOzqc4ZyZ%2FAiEA1SdHcEQ0%2F3TJcm%2FfxnhsPgwJ16cBN7nbUjovhGgDJ%2FgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHH55oryW%2BMBZRV5%2FCrcA846uz1ftM2V6yethwDRIWU0tNCOupaAHJGSOzJqlIHwNXM2vvdoUU4feJHGd8kjFhauEoeYR2vHtiyJ7%2BwFMKjATDsXUwQUBl%2B%2F7aUMz1JXa09Ny5vlwLaFtzM8PYUSfH1F8kMUPfuZyW%2FnONnWXUf9yPkXLYm5Cdm%2BEg3fBOpUYdOXVkVwaiZLUtpVh54Ko2RJfLO6wmq6sevRqWUG7CrmPHCujejE%2BupFTWwY3Au%2FnyUl1fvDOZjCIQGu7GzS7fJoIxRco2wO92SqC2qHFoPuh2kEulIokOx7ZsLKxDQDrIg0E%2Br%2FZZia2%2BAt1%2BjzW4sSJuwJX9qifW%2FbR0FZesZt%2B%2BIp0UrfbZG2JQbw402k0G5g0M6mMgqlncZd%2FA%2B%2F%2FKiHnFH3aK1C9SfOlm5mzZVNp1MEi0iue2XadHSyYC5szH%2FWSOLcDvppyusBYJKORNU5991d3MgiK1teY08Eodaj8EBX8ORDi84yj0%2FON4Cna67U%2FQu6F4sSWac2nV1G2sji2EDlsETCPwiyqhFLDyKWixoZjzHVvA7IFSiLiC88N3PaaSrxRXkA5NAdiIUGsdULHkJM1nf%2F9VNVqLocrV5MIL4RJ%2BCjM3%2BUOFaCrj8%2BkNLvyTZz%2F6NsyAuOMMWa1ckGOqUBBz68SvbzHLRqHL59lyBMwtU%2BX%2FkPYoyD%2FUixhmEB1wxv4ABg1U4pnAGWzo84wCnqr3lsX%2Bt15GHNMrLvtZvWllP52LftHy2UTNsC5CSumVFI1lMQBLl6gpy33pCujn%2FPkHQzrcJb0NHiNqVITTkPfQ4ICGBqvDczIfytYKVFI7nLZc0l%2FDi0ERzocBqBrmCe2WVyBo5LRf9vN1IAyktL9ZT0t%2FQk&X-Amz-Signature=e5ae83d2fede1db538fc97373f7f59457e1512ced71ce73557fbb347f0e42ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

