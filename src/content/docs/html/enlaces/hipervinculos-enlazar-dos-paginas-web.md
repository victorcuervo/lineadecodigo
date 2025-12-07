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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LV2BJDQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdvlNm5jQRMvaKrUztu6JxtA%2BYQ%2Fab2fxxz7mvHecE0AiAp6nE%2BW1wQMIRyitQKWSPrjHD1896FuMiNtGjBmFRaXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI%2F2dVn6sQLzco9xKtwDnDpAtF%2BloxB2gxBawQtcsYF9KCQvriF9OTVmBY4EqTR2X%2BSpqMmUWlQEg8yGnaQkT2tNE6XQUsC%2FHyxiCvtl46m8l0tULswgeMJvMN1llmGjDjHYt3PlOHpWlxHolellPEZn%2BgEDKX2ZW8gRRMcVPBXIBgKcmQIAWUc2GRhTeFja%2BCuwx4wno5OFYJViHX2bv2kPMYLOiyTbqCIhsi3PW5H7iZAUAG9tjulXV%2BkFGNxn7NA8XI5%2FfV0e0RY4iagYPZF8Wvbc5Kd8HdZFC6XeOvftXh8QzjD%2BF8A0mpyoexWAYn%2F5s7GUpB55a%2FqBl5I5DntzxMNRaOplgOP8CfJgz%2BV%2FvoW%2FM0GCcoCQIcWHeXxg8%2BmEko0XcUVqhc0vhbH6hhtzFbtuGA5cbElRDfCGGjH8FYg3wgf8LYWf7fZ2FSgwGA8fKNRa%2FfvV%2FJFyLjlZIvDrs6mDjzyL8ltwZAEdvB2aFjm5a6BXwdMC3ak4DmTGkMiWDwUtHSLaPVuW9FnUdXo4pH%2F55nVYhvgbDDQQGpvg8qjdIw5Ko4NU3hbrwPHTvYxOFLaUoPTBTeX%2FFvb48OjwB4MmVMqJ3x89WcPNmoXffBaFoXfm29DrwUdcx5Y%2BvDr%2FjZ7WzspSMc0wrZnVyQY6pgFIlfeR%2BgbX7ky%2Fut4CU7sBrpF9XM%2BOxhHZkMf5zETrKEPxf1X591S0vv54QOwHYkgvg7NMVTCT6U1Xdc8oO04oAUusJENOIfn27tI1RAXBSRKZad0UMEp3kFgVcPKQ%2Fy0eMWKO4t3eDeAa1rQltqVOvwXUhhP%2BiEuWvOVtEhJ8C7%2B8h1%2B6oFrpxaiqHCszA0OUqZtFt6tBxWrj67gIEqW6jZqJRUPu&X-Amz-Signature=5b22f824201486944a80d000b835e4a1bab8ce455d6bb3f0e452c6a94989d397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

