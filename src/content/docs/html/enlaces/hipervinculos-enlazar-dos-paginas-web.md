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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRYOPNW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqdPItDZVfqz7NaHO%2FNBEl7c%2B22rpIju5eAvqQzqt5VAiBJN8SZOMeAOt2gzq%2BaIL76ayPRGzcIoeuDmx32kGJ4RiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeAi%2FuVjF21TP6vVZKtwDJxrLDZ5bRqnepMrLsGOjjtKaOASVJee%2BfeafKn%2BoHSPq5Et44xaNiQKjrAr4xQm08d4ADSg%2F2uG3PJihrGRwZbPS4fuuZcHQcm7gr3wPFqMDTL%2FT%2B4R0DcdQIGDjdpXiC89P14H%2F6vzi50oJqM9jy65DYMvckg6JfVrG7CjJy8cizkGfK6FMdHT0q%2BDdBiusP1hdx%2B4v%2FUedXW7GwxV10DlpavcpvpNYJheJcE63C0e2PfiJ8eznSdmpNXs1IGOSQ8%2BYS2i%2B43feO64Oo4%2FE6GLj2TzhSr7NmKvPSPEO7DUoRCAGxXJHwSBV5TZQYFCBk1%2BMwm%2FaCBQz14A92quqHlwgxd2dJmv7aUoAo5KbpcZ0%2BBeRCC4mWt1LOlVswD1V4yvitZc8De9wkWUkcOmntYQrfmjDcsm3QINXAfWalOZjG%2FQo7%2BgwlHm7DZprUaRJKmoSNvWJsfgh8%2FKNPdFBkU1yFwyeWnJL%2BkXWt3jwex1zw9bubFYvI%2Ba1OXpAKSGX9WKAPiXUCMZBLTKhYu9oCZvhGUePVusqV5RjC9dUK2mlO97o8Vmoq4bdLkiuVQjbkgxjWJUeIlnq36gsckv4lPgMENOpbQUSzNdVsof8F2Xcw2vwWcGzqGHCodMw4bPZyQY6pgHtsKNBV3v%2BhPd7kHAB%2Fn5xFcZQpBVwmwZpAr%2B0durCEYIunjvgUQw8BcXcrgj3wntyWeteFwSdVdna9REYH1J3zsU%2BAakgevGGE5g6PwbH43TkyxeRpjy3cMwZldIjFW9ZArrYbSNKCOt9RISzIPCoN0H4AZryULWou2iEB0MqMaICIFCIF4HyYFt5nbVDOv2WosDK%2FXMo82YrMcNYed%2BvYma%2FB3%2Bt&X-Amz-Signature=f475b169969897935cdd63a3564a29d759d39bf9168c017c30b9f7df08849e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

