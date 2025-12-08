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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA4FPCMK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUdjWsYQ0jpGaUsYoCrBq48ndzym%2FEMhLssjGmNTnlYAiEAy%2FdhgOrBTk0W8gSQntUyV2jz0wCxnNF6DKNxVvAQGxAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt3NxmSCIQDt%2BlxwCrcAxinE9hhQ111Sbszh0%2FABAbS%2BMFul0vj7dHrZ7GF0Bhznzp03%2BIVODj7SbhDPoarttgQYd1js9lOE%2Fl%2Blxw19fV38g3aqg6MQE6%2FJPpZmz%2FzMm%2BNx2eR%2FNRwv8ShdCcjNesFfzztmCoqSmlcmSj5nsfysqJf4ZjDTiirAaXm9AihtZBtJwR2zf%2FnAwt8RBZaW0H6zngoYnK%2F8zInRC9jfnX6LAgsQ5lo1sfAs6bGLd4yDW8hblbLZvEalfRhb%2BLjSqiYR6EZx89oQQT6qp5GL%2FlSLl1HHwQE4O5%2B4ecqIryuPLIn3l0mjhcj1icidjWqU%2BF0ge5hHYoEZe3udD1mq5De6aeamNjFYotWUrO54w4Ysq9F8ddE%2FhynjLSeh%2FSdSBVej94pv%2FoXVBCfCOzzdtQ7TdsBaqHr0gK4qVDCJrwm6wiVvMSvZ%2BswOXqoZTxMq6ErEQkxSFCVZN0cMemq7zK5JhswapwkKcL7vw722WwLY2kkj2d5Z0F10M0EJmx8s%2F7eN%2Bbc9fo%2Bu5%2BWYneWF3sf2zIhMJz27PXEyxOH4qvBagGd4NYTHrOo1GnrA4n37HVEoqJoASzviiquZBpQBeUiSDdkyzHnNeQNxc5ZS0gOXhr3%2FRT9Rayo31ZhMJ3v2MkGOqUBxI1DwYskLhftCTm%2Bbc4AOMtCBufD2fnGhnJZsGdd9O1qijVHjtn%2BjvRmQ%2BUOulWBPeVpTZKfTWgjZnOi72x4myQ4izii%2B4FZX3mFvK5uJ0PPkpH9QavJl%2FnIIU2%2FgWl0d9rD6JPp3F5md5VDrAOFsxdMeI2IlHbYTH6%2BoX8gn6tfKeWLQpsBDkEVPjuyvaDoXvFy7acHeBRqe3UE5nd%2BFOIW3KwH&X-Amz-Signature=58fa6ac853eb55c38a8c39edb8932de2eb73a3fc30dd69cc1d3804bc58a20163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

