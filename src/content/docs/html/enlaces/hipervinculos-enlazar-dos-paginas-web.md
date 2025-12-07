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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAFSLL4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC6ycPRUehot9Wh6JU1eQqvvNMV0AzTGrEZeWv04HiFAiBcNDx8af%2Bez7LQrro%2FfbfM6mue1K3hIlosWKLyEVM5ISqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQZX3Gvw4PskiScgqKtwDSz%2FUgFr4zTV2qkm%2BOR0wlsvr%2BFQYmPJlHYzkS7rvHKdT6CsHOCNSV4IHvWc6%2FaROaASctxsC2wdRpA%2Bt6v%2FQYt%2BrGl8dk5WpE7mEtIkVlOBD1ja%2BGVz%2FWZPoDdMCXhEz9Kh%2B3Lp5H15z0B0K5r6g27%2BjyohZqv5F%2BOqqF%2F%2BSpLQ6%2B30YbWBe5Oluq0e99lGfid4UKlIsZ%2Fi17MNHWvuao08qA07S09B8RSMurYq82WdXxAYjOMu5BkL%2FPKEGZWW0%2Fxauekm27oq4fLE30ys%2BaLownevDw2yYBiC5YOrDRRqfQ%2FMjDK%2Bj4CCVqndva4kKAplT88kvvdvKadV9vvR862P4fE8lyV81%2FtOlVQSA24lg8bROJgS9Kw3aqo5QbEHU82xCDSIxj1DjdybAp%2FEcFQNA9uMhC8p88yeeUH6mJseoGNPAQyvvtmziNW02i%2B8fvd2AI6oX3gz6fe4gpY3XSznLE%2FYAXnNqEbdY5d7aPTFR%2B4Hg%2BVdPjES3X48Na7dCh2NBADWzKShrOLgN3VMRzjxwPT%2BLYLGVts9mijhB3Fc3a72LR2syxdOqUjwDayy7wSqQ8k9MLRQhMhlHx6Ok4NRc3vLZLm8gp4WI%2FNVvu1NJtJFWJp1foBEkVyYwov3SyQY6pgHlpX1hSfCCrstbTpwsRThc%2BT0PkL8aofLkE3e%2FSKBrdOVEIx47VJiXskEMLhF90MMvzko%2FSnPWHxQSopuCfeW36HBAKPZqTpdVFnI7kkA4%2BGo%2BsG1f2AA0bG8tNQRfyma7ixXE5QuNHuGnLzt84wz0wZdaSr%2FJxuzplP7DojLXyzqjJA5MyAuOQpBo3Wq7FxPE%2F4DbknRigaDHRKhQ2jc87wFp3a5m&X-Amz-Signature=e3a838a7ee7199bd6a6402d89aecc64cbbbe07f14a8cd13d736a195a62bc4037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

