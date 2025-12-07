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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFHKPI3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwNAeLRG36ppgmEPof6qQVFBQpLWwgDO2a2rR4gOO%2FAiEAkz5JBuowDjr%2BYSsSyY05isl71wgutfwTt5n3SCI8UFYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKsZB4rIogpFla5wircAwIqor90VENvMEbjKVrpdjTkaDFvco16R2QsHCZ2zWJx5q0xmIvQF9CNBoG7%2Fk%2Fv3qSx6kft3KlPO0lkTTFoU8J7ERj7ygSzIU8K%2F%2FLnX%2FHuMzgwJy1Vej3d48EiwiNv9T1C%2B3NorH%2FXUAIFyfppuQVMgw46C75UBy%2BpQuST0NUIhxEKtq6CetKQSKnqIKEgd5AFSEvqM8WUaJjnum2elTXy1RGYdK20az58g%2FrqdHf2XadG%2BeRYXv8WIzdbik2WZBO63sXKnB5mit%2FP1EMoldaOeG3P4yTjmC3tgPDX4NszInMRrJuNZdDD7VrLQBY4ycHlQ%2BnZNxAC0nnnXSHgthCZM8YH7a3cirGwnFPuvKak9C1irpgz9QrLEFfgDCaATN2x3LG8PQzP08AaHGGqWFC3BRjaU3B7T34vMIQ4KN522jdaigZ3LHAEYYbiOYZLFSiSDLSEH%2Bopsv6uLm%2BdgMtRe3Q%2Bk%2FkYBFPoi%2FLwPA1gKoSc5RoaEwTlCHHVmh5Ekw9c%2B0UoBfRKeMZ5bSJ19YpF%2F7X2xtt8pRKWA73gFWJnuNutImmd7oQSqzhBf2YXp93knNo0cp%2B7x%2FIpimSQrCT0YlPxXb3b5cC6W3fqtkPybmY1nQ%2BXZp1VEdnfMNKd1MkGOqUBnTxEOuAuNsmNmWiqIgVXctJ%2B1DYwvhnZkkzg6k6zJnd5XZS6NsppySh9J3sBV%2BWIFKhMbkcVyZs9SXRlbqO142oDy21hxun8hQuyvWeJ8O5mIAm0hdFixUkailUDLCLya9ceqwKqdeNHwac8kRh%2FKzEno3MbHFUWdB4n51m2XVJAXXcN9YelCWIvW5tAgw1dk9y3JbphzNljssoURfCnCFGvOpLD&X-Amz-Signature=6bba790554cf060cbee5d3010bccbc184070dd8e1f1b98c29daa01bdb667e8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

