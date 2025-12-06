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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGCRBG4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5DRZcKVWd0MBXp8v0Ph82aGZijJzCvPirfXvHCiL3QIgO7xSv2QG31DtiuiWoNT%2B3znNgP18bWvMouKlpAOLk90q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNlOZnxAM1gnu7zMFircA6MxK2HzxUcK7KFVxaXOe%2BWNdtAbup%2BpQxcK2eTTHyXvUrKhJQGoxgNBNGYF5AGl9uKaFH0f24Cn3li6EdZYowvDQnIXIVPnO2Q7aEN4nNjYbZSKczPTxH5sPa1kq9gWn898hi7ZUuaJ57U8ReQipSWqgG4avLz0VaNGqXRHnrvvA5lwrcgNpee49vvv5cXVtXj3ojolyqYLdUyq0DpTY4iejUZg%2ByIS91KKgPdChSuBVw1%2Fwt6ZpkfxBzCNK5%2BLi%2FcaclQRGr4fosqhGJGsyQrpkFNOpyL1ua85oar%2BdFtcM9YBUdMohucrHtKV%2Bo1vRueC%2BKKmWafdY3VzZZQlaJsH5SCwIWuM7xlkodbRjKVEYK6TCFCjgHUYFeWK01A9iX8Rn40cTT9MnuA%2FlySSCtdjbNJ%2F%2FfpHI%2B4Fh%2BEMvoOhzY%2Fpfs%2Bt8hYRckaedILDnUv8iTM7A4VqgCpgqdhv0K5LL9nmoa3p%2F1lqN1q%2FniNKRfo0iykCSf8l7iSv4b0kWA6RuoODAiSORL8O%2B%2FDKOjm6XITSIAkTxIPVk6BPS5yW0GtoM9qMmKMtx8i9V5brLnHpe%2BaPq92gcwmowtTGta1tLnqSsxTeVoNJ52foHa50SuGr9NbDDOVpyz%2FzMOqm0MkGOqUBIrIcNjKWnM8KuOUyEo%2F%2F9fn7ChI6qlvHlMbE4S756aC2RIeBLLn%2FwVYSpa5K7bne4whagtTyFq5dPH42e1AgkQ7n9olLcqOqy15viFPfZNHmVEWQUoX7YzgJo%2B0VHKPZl2%2Bt4P3m%2FNTZtLJvmebPOhn%2B31n87Q%2BUndjp8pjpTODc3TIWuNB6wZBYyQy7OrSBg7d5YxuDhN7RRloXVWXflDS4VZrg&X-Amz-Signature=e1f72d7d00dc8cde1fc1d53709c9cb5c4f110c1482aecd8ceafd6d27a9ee71c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

