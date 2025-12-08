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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7CERNY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMPG8wQJ6wgzQDPv5cpKkQ3M3xUZ6GhDx7mijYh8CcOAiEAmZ%2FB6zxHBnGZLCTnSgCUQbRK%2BbWD%2BM2KJ90Kfqco1z8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAGAXeMYRaPXCw4rircA9%2F00CJ15eEtIgjn4bnRHsnH227Dy%2FSCvpGx256rS3r5v5J5BQ1ypJVLY9L2c3UoY8b0M8wA8d%2FEC9wV%2FhWqARjyjQs79dgaXwfymPNWuIT3%2FlQRK594qvzF9mZ3UUwbiRHs1Hr3%2F7qOYBfdIHLxhh2vbqZq5QhzrYXOpTo2quAg71nB4oGxxx3DpN8lAsU%2BpnIV9WgIC%2Ft1pc0UXC1KY%2FUafemhigCM5AOb9cKlxFvSVczsEoWTgxloY8xBTy7Q16FYU8iMcUHP13R%2F21rbc7rKKSPk9lwOcZvPufcySyvFrCaedsnUbjuI0ysq1mwBiBKTye%2BgJo2TnCHK0FxUQaH1IZ3smUnh7MmQ3MYsZrR8cryAseMNVTs%2FFIBkq2jTHLlat%2B%2BnvwDsgLz%2FFmhP7KXXNnWMWUs9gwM4tyAI7FdGxMZHy4RgSqjnIsPTUC%2Fhmo76qwNFW7%2FvQ4hDhcurEPaAWayGS6UJDrB54GTFuS8wNTjiDC5m%2BX9hZPQlaYogrOQAYH14LaZ2KRBxKANz%2BYoSgm%2Bbr9Vgn%2Bvoc0Vrs0Z7qQF1NgG%2FV6grxJyRdkg98UU7JmSZMvrzHG6TxDV089xgv3fyAqlXM5r72t792WDClmelrKwng%2FA289W8MKrc3MkGOqUBvoCh25Q1ycUK0egBG%2Ft8ocgnQop21DmJBc%2F54ZA9%2F9%2FoMKSoZVAHmP%2FaBMwFVsJe9qpdtAdounalCImH17C9BA81pVHQLaM8P%2FqXpufFL%2BWqnjHRKlhj4CgHDBtaJbyFeKmEr4sV9cl39pOWFpk7TibDuFeI76C%2F9ZEoc2QG%2FMKb1dG9ErcCDK1TnRmMB%2FHtylKZGb8AhqpovNMkI43ybIwdpSBw&X-Amz-Signature=385908fc183f2dd1a544b7ad68015b6c3c2f494a674e63c5031881f209055dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

