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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XV3MXJZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD6nmTGxk%2BmpQZN1qD3oLU6mu611Nl3zfm8Tj8A8G%2F0%2FgIhAKhn4oLT%2BVJ3WCwgt4IKbqS7vOGXm5S%2BC9zyDyvVmujNKv8DCEEQABoMNjM3NDIzMTgzODA1IgxvuGaEA9KjVqm0B7kq3APFqK1pq5CZNbmLy54PVXWNLZ%2FfiajzMsVKcPQ849EJC9i4ifx9rQlplIy65z9UKo0Sui88ySUUNBSObuKKKYJn%2FwwsOJRrVOlXvZaAPR2VVYm62Lzcy789QqAODGOr53mGGbmMzjgW7ucDLHYVVN0qkF9DLqlPdJDM4j7AqbwKDXN9jp0ofsYyTskPHax1A8Y8%2FOWKTGUF3dll6j469N97TyEju%2FDFVm0bLvk7VGeJDCuUa%2FKXA2nyOTd8hsJ8MqiCYb%2FcZYjIN53DM31ON78DwCib1a01Pp%2BsyZHT3abZHf1KsZKj5KGgClY%2FWXzjJB649Y3%2BV%2FbTJhUcKUhXf3%2BsMv%2BpgtbjT84GDRAyZSU8HWd%2Fy58n6j0HlGrtnEWbBAg75qyoR1m84RZFYd%2Fj0j5ve97KD7qwjhnWB0R2B%2F1xv2jMzW%2FJdAFDO2liQzVJxHCyVT10T9q0BIqLyUocwqYbwcIH3S%2B6WQ7Xg2VzmAkmbrBibAyy%2FK9qXpwmQJCEoN67QVHPkKrSdZUFqZHvgflde9C1%2B0cC%2FakQ9zGZcyw1vwiPoPQylflmBGLShvEiqJSvu9P%2BZjGI0rXnovoqMrP1H5ZxcswYRARNM8ozm3WKYdsqTtmUm7Qbou13FzC2hsXJBjqkAU%2FJW8VgSh3Moq35afMXA5GX39pftvcGBqh1X8hzrmRUO8lKBFbTCSNEN%2FdbCc%2F2sthRWW%2B3B1GT4%2F8H%2BDQwo5IofTN25xXYUZx0OoGlv38Bvs4tevegA%2FiQ9k4z2h4rAy1Az56qmiqTLZrHu9E5FjQjBl70YJIvM5h7pZEQegmataX1XckOrr1djjCXMqytvFEU%2F%2BDryQQstuCOXB3eYlWClZQn&X-Amz-Signature=4a07b970da7ce0a3e92eb4e3ff2419441bcf875441cc223dcf39012369a7489c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

