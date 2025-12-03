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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZEXMYO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDVEWVrxGb0jlogVDKIZ9aBZQ7Xg9lxHDvUIJVjJ4YIxQIhAOvosRmem1tTQ09%2BpVqwAbUTpAZEgyY7uhAxE%2FPRBfLAKv8DCDQQABoMNjM3NDIzMTgzODA1IgxKnx22MBplg8h%2B2G4q3AMhb7OAhNi%2FHQ1vGwInQqrW5cNpwpRNUeaM0ADu7EgjlPy8FH88f9R946smxlHGQ%2BVZWAVbI9YTwA6F4f6PlHwpyPHnxEL%2FJ2bKclWVZFU58CntjFHG%2FL1MTe4aVtAkBx28sP5bNaLlU9yiHDzCQ1fsMRTRvFijISPn%2B6hgBx2P1klzdlWsW%2BGhI0ZyKoqqFREODQdWkOiuJOllCi%2BWm8AXPPpKQvBziep%2FCn82k0N6pYNzzGUNvgzmO10S6Kuqfkmw1fntN9oNr6jtWzBAcmaMZ%2BoII9lbzkstL1N3E1tgWRui%2F2BhVAhbhAGZoOoVUz2DmRg%2Bo5bDhSUSt1HOFlN%2Bb0BZOqfSSttigjwPv4l6k1tLBc2aSTRACtHEf1FNpDH%2BLkeLgMx%2Bkj4%2Bb56WN9AiWyho3ELCKjMm%2F61wObpfVs%2Fz1u3lLrxYUaKWaIOyzIHa47CE7HMoDAf2HgwUlwwH12T9caMEQDn6ypd9X2EK%2BkVTvkHM7MZU9CaF8droH5f3iSalLshfdetlRhXAQ%2Bk4T0MRxOINq5tIYes3X22Uefzu92SSBatD2e2C8APjrTlOfk0yTehRfUKD9SA3aaoLfwEQueIEO4Jpa%2Fjvbuj2YInz%2FpjOHiPwUY380zDqkcLJBjqkAVvK%2F5XUA6TvuZ5rd1ogauLtgdmkX33a%2BcghVqXt%2FEfaBu0K2ci91kXUC%2BIHYq7q6YadIwg3P5KRdS6IirbXxaXvVKmYqktzszRMrPWMv2vPb2n96skIAepiqv8LDofAvrsyHhe%2FQI8GQ7ABH%2B86vKmKG9MY0ki77iPw%2Fv2kCBmKamfSSXJ1NwZsook2%2FXhA3jlyltQk2l4eOKg1oloZ0BzoWb85&X-Amz-Signature=97d27584075360c70338ff9dd6bcdca15d5562cdf4b45d5c7e289c7564c51a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

