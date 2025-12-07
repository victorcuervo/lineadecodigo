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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4O6GESG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNYNk4FmrBQpe6d1jjMpgZXcYEqULbMaBAHYnQoxg2IAiA7N%2B7Yt71UkAfot%2FfslxHlO%2BXMSByqXHeLM6S4XJyopiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZl2n2EPK0ZJ5H09KtwD%2F1WVzfX88s5J3ymrqKSjtaFM0aIhm%2FYlJwaEzXBw1uxiH%2FqFv830hf8VSrEwo72r9JTVPY40E4q%2FiGoRY9zt5%2F1LLkPTG2zgwS3JYGsDOaxkEUzt8QGRyZkmXIKIbH%2BpHIl8JcjMRcYvFsUcV5M77p6OHU9ySVncIf2RMoARErALHHX2Gar1MF2RayUJ0yaB1UIAnF%2FMbb%2BXiaz1BGUZWpZUNTv3WoUmfL5xw6V9mLWbI9OVxQNQGTSnH%2BLvG7x7oKW%2BLodC%2B9VpU2211BiTgwnAKxT%2BnCfn2iqhCq6hp1pb0qNwyjOK45iVAhSH7MCTk1%2Fi3j6nj6ikhh9UspiFZJ6nLU6QocDqCMoXgcipimXAgVfWuBqlgmBzH1rj87LiDMM44R3c2EXaFt%2BkeIoaaFbAjtxRtDlkcYdr8kfVXlwTZAAPAvYLXN2pTA4876TYd%2Fx5w7Kmsmh5QcxBvJAobEH%2BGsCdSlSLM6jCVlTk9u7JT4n0m4UHVeP3jNqJwmUOa6fs0igxj6Lq24tALCU%2BxyaqSPSTXBON7fjyiey2%2FnrlKAHLC9gOPiKbGS3JVM47P8nyitRKjtD1IxKTVdKE6YX8fc%2BYzpFFDDmG6OYRJD95k3MH5%2FKu8g%2BW4ggwpJnVyQY6pgF2YozEs1zjD8VfhQAx3Tay3usn0z6uZXR3Em%2FRRtrYrWBj%2Bt9jtUPgOyr41A0U1eCl1oQlEv6XGDMmqRuZ1k1sBdDakQ9qJ8%2BNiirT4JHupxmWkuEVWrGQB%2FAwIpUf4xcDOcPKHMU%2BTT%2Fr1SSWmCOgqQ%2BfPflYymhYpjaF8VeAwxONTqUGVIWW5LxpW6tUlMSAgbPHt5ebGsyOPlN9wWVWJXswcWf6&X-Amz-Signature=a0d9a3f4c11521923383fd327a56582c70a667dc42dbe07efd9bbb593d0e414d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

