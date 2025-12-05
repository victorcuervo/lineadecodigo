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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWEVWCLI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2f6bCPdwAY2c5wwSTASO7b8m8CQSdAxBn9IaNpAQolwIhAPRwHmsZG8%2FvjUV3l%2B8pvqt7Rs%2BLUFIXyk4F9AIJwgHoKv8DCGYQABoMNjM3NDIzMTgzODA1Igy84IMmJdu0TriMmHkq3APmv6sZqBc0AUa5OdGN%2FQIuNyBpWGaQwlbdncC6dEdV3DYBJJNMeleq6mEH0%2BtDZ%2B9uRB1kvr7S%2BVChJWea%2FQQV81oKP3r1%2BnAKd1l6e0YvxQ63TF18odyq%2Fl0mU45yLc7ZfEKQ4%2FiYkoxG1bQGamEoxhVKaPfAVhVAzTrAW7%2FfGMa8TX1iQ4B2QPHaAdQNYusIOw5eQKCclVC056qyq8E92L0zq3ScBUX5WzBsj7EGmKaJ%2FU8RSUNeuAIhEwr6Bp05m2auYnlsvdj6fGtYvCZ1Q59zJtme7x2HbttKTIKiTdeJFAZi4l0s0r1HTmwFMim%2FjWTh6B%2BIEkYOPZuJy%2FDhhP503E4FKr%2FGUv1DC8evhza66of6sSrHAGtXKYZ2J2K60DSLxCPjUCXuJBwIb2PbHQQROpG2j3Cmid8TpgqiLqtGcTLKFzK8mdbRmoqAZf65n3Jw%2Bib39Bom8pb8Bf58j0bNcU0mc3PNO872K2Cj7T6GyPKOlfuzChid6DFfNNYV3nGtUZpUQ%2BzAFiT1ae5d2XrUbwhBwJHDqIAsbsulOpI5%2BB7kraQYn%2FRUrNxfCUPOju2aKs5UBBcE7UOXkwp3uFFLAslIvTJF%2Bmu8VNtvrV4dTr%2BQXbZpiv4G7zDSkM3JBjqkAbbkcezc7e3j59EtrzFzyIJ6VIwSoOkCFKEPD0mSqgAw8e%2F77iVR1gkVm4ujeI73QYQTJGkjDWVYsaALldCiK0tUWxFjPjxpf0DVQA92L14Tb4afdQOctS3vt35gtcl%2FIE4d5lngH26u8S4KKoZb3kuJOo3XiSCn6%2Beggv4API6DnwjCSPVswKyCMp1AnMwelKNbb3GpvXznv0rc%2BRLsRTqA8f1S&X-Amz-Signature=59320ed2afe83c13718848cbbed440be1398999f2c48a7ff9561949af939edc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

