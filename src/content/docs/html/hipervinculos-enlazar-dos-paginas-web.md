---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MIIVU3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHfNsNpFQosKj8ouKZi0%2F1baj1IlVgRa1Nm%2Bz4djS9NWAiEAsaStqG3EcOycQD5%2ByKIMpDRGFHgAeRbqDbohT1ZHbrwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEoo%2FSHZ83irAg8r6yrcAxP1ahdANbjozRrdPbtOyjY03L3xIbmK8cM28ZzswNSk%2BG8hMZpKhwnTVw7pFSV8VHoXqcdZLgSih6lD%2B6WFBeLV1nHoUW2RB7PzDIr0NZn4b1e9Fm7z%2BW4jpDoYF%2FqjH7WL5EuCJBUQqbJQUf6lVzNtfqQSqbMzK3PTwxcBNLsXGkaWjUpQ6%2FtqMbD2XQPMDliyl4jw5Tcd835jmKxgQeXS5Ope%2F8jbDIXIb%2FC3DPvSsGW2cgHCkA0S2N7tDvWwTIvwbwhCcvbygW9GxqbS1XFhCqxW7RCdVkKagMeEoafuY3EEpSGWlMC907jZ%2BmKRjRapuuBHm%2B2pdcJyjtYv4ddpgukWUj%2BuDbt5NTUYxw5YZhxwX90Dw7v2iCf2IKkleqWiCLYSWC%2FeW0nRl%2Br8OHvd0Vc13pb3DIO6Q2gbBs3OVtAYTwCQnz3Iw3PYhFvA43ifiRiOAOIaXWTN%2BRCLDrcqnPAHeNzIQui%2BK90RExHdVbXtyfGQQmqzdzdyolE4sIBpXrHvFlL%2FIiq0y7pWARzeIAaL0TsGki6tW7cDLDEu0Qy8OMXJOBJurPuZnoZn7dqv9Upc5SdmOnejsgbpi3Vyix1G8TdCq4%2B3HLwGZaX%2FOZh8IVSN7iTNOFoAMIvcwskGOqUB8MJbqWCWfmohVpmhRsh0V1KYYO3uUsh4r8WUAA99uufI3Xm3o7Hh2q5Q7wyfnkq3W1vr3hZvSwcb3Chez7VNKuu0hl37zpqKBmwuQ1i7UlNch2PMwYIgFq%2BWNJsgDmAhNC4SSrxGArJRh8xRnc39pBL9LVQdR6Prl1BuvEaF8d7s3DqIzVyf%2F4EmaOUZekeOxWpxS3x0yAxx4WYJjPMiA7DonESS&X-Amz-Signature=36627bcfac972d35d527c9545d9dba6a88ce6db3057f14f2da304b5bb21982b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

