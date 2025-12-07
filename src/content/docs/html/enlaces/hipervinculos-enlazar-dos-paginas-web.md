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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOXANOW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5pySGPpH7JMpmSt7O45wr986DIV9%2BvMTiYMbOx1a2UAIgcN7BEjeery7ZdqE0JzARfoXX7iUrbtewr1Lb5vYNxloqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUB%2F%2BLsmbSLwZ2UkircA78Psh6TVuOPlGrmg9wcl3wRBzzt2tVZZ%2FtWFPwP5l1axFK2YkH2VuQNc7RUPwamMv7r8eINDHmOOcQuIAoyXMYv7id00OND2hrkvLC6GSVkH1cDxe2diO8mrqL39hTjwBJ%2B32PUay%2FOcXlLbrv2fvCdApzofEA0eSB31%2FtjPOVP9xzlOF7xr2j5quasMtkfPjYQRzzGQ7iVOPqmqg8Hehjvc7cnKctEPdZUXrItUIRZNOFXedNvcXa%2BxJ2Pdr6I3pnzB2WXKg%2BsR1Van%2B2Ylx19XXuKCYr%2BnlaBo6%2FSCyKntt7mGZooHLpEXNqNXb1OJ3vZkZZbWE7hYW%2BPpcuxC9hUeWOO9TnCGQ62kOfyLokw0edO2lj7zPJnsS2BKUkPd6Mp2%2BO8%2B5vAw9IW2LgEz%2F1alc4vYN%2B8knjLCqJBvblQl45GFjz4MYtE%2FLiM18yBFf4Bjk9I19bLcVStVMfHUuWbcS95a8b6ZlaOxres7j91WYlG4pJPjVwDUgR8h3pqzyP4tTXzVG7gTXKzuts8yjP2sj1NyxZwOOtvl9gUcjhMV816nQvrGKmoaS091FiwiHkqEtAC3ZJPIF61EueMWLhh38kgukkE%2FKiHCmBwGtO9JffsEMQoiP4lza3HMMrH18kGOqUBUuWgg8LYtOw%2FjWktZz98KwQm1LdtX4LTbtm%2B8ApwLo0ONLH6ibUPwY8w4lZOmOFZMX%2FovhJKXPBsvaRo8mr%2FEjaQUGptbTykXyi7P%2BmCPN9trLfENPcvmJS%2FKN6MpNXiHK%2FJYTU0E9SWroEK5dLGTddWE20uoHd1v%2FIFvChE1lT7jZ%2BYUoewmhQhbGCuARDNk4G2Ob3Q9TFfr0fREBQ7oe4dBYHH&X-Amz-Signature=b1674cfafddd1035114a0a0c82ad7eb961ad0f1c711b646b7541c170d49fdfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

