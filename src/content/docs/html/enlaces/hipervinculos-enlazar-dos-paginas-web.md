---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAY54U7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCQBJow%2FUEMRDprF355wATIYXTSCO1KH7yFRqBAJcRQZQIgdaAtt7q3KbRpYj%2FPXZcee2cbYILCTCsNvHIFdpLaYwYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAdt2JulWJvgBpxUxSrcA65Wi4cxHmyc%2F2has5Msh0geMK4%2FUil4bczjSok%2B7fbkH183a5b060qJ40G1sQ%2B9xjGMBsMXxpsLgcLb9NKLSrb3OHWKBnPtuG3IMDj1Fro34lE5BJddtLqAvOFHBHOwoDcAkdtLXd4FTw53ErLCH0%2Fpn2jCuaa%2FIaB5Z%2BWUKkyKb%2F6YjEcvXthzLVEQNMC8ryTEz1fiAPXff1fb%2BXIrhP%2Fm738NOvDPuXY9Em6OeeNbAEInEgRsBFOT2O5QjSBooEadqHVwL1rluxCfy9hxTYouBxNmxpUtNSINsmwzbxqnUnXH20vBPjcy9cAxoV7op4QiwxY3bWYcXAslwAz7vGbkCsmvwQdL3DIeVAT%2BCexLXAGbGxTqAwa84UD4Xl91YJR9FYKongbSog8IgmHtOh3euPI7NpODYVfEnFc5tqEB%2BxG5CgV%2BTLVwHI2JQcVrp5LOUWW5ZZhlYW6FuOASz9I7tM0yKL1ngXLwxwP52JbSa4WvAw%2BMe%2BvZmjjLm2e20WgVQYlurGcIOKCzSHXP9wb1aZ0RqWj8HcVCQkbvIf5de%2FGrm%2Bl2KL7KyBbI2vxEt7aPbOy18sdevgF3kr1zOZSeH8MRRuxOmdwW45SW24gXt9%2F0XMUW4eHyI3MwMMSgxskGOqUBeP5mrsR78AltEPDd17%2BCykP3MAhSYMGtop4g4wY2JuyVrlm1mAa%2Bs4h7kMVwe9iL5HRchhWT3%2Fe4YetthBeRP0JAPJwJYB20FTYouJuSWhziMCus6sH2dDB2yU71dxDYZqY%2FZz7bGvne8To5wcY1EwPnj45YqsRAXKRT8IYhxmSXncrzUqXStF9I%2F648ocFJX6%2Fx6CCM3rD9IpncWX7WQmwthwA6&X-Amz-Signature=c75adf72d37794617aa6ca0eb259f73d4cceb65a64487bf7c30f90b82127b881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

