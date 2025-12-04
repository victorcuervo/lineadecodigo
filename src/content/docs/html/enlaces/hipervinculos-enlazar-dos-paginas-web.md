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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YBUBIL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA2VqJt9Kz0KmAfaLsT8blMIUyGUMipc03kXoZsWynGEAiBaY2%2BdleIxaQC05ErZtrcRNqD1ALPXUfTpMiQluXNNUir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMQzgQ00PqMk85yVS0KtwDrdj81chRXXSmSdSBK7%2FgerL0qN4a%2BsRmk8QSE35VrAjK9XbOey39BrVY%2BcI6bkNI8NMxNNZKAi7wIaieYmLOzULV6NkoMhL%2FxqL76YjYjlRs6xQE8GmqLZiCF%2FQ0eRKC4yl4miISMAzZP8oxdw8LP0hdmpBBMOkeqKmr1CiQcX7b1WH0F69df9gJo%2BQXjvaDnAIJFME%2F11ybAYU9iFP%2FyskcvKFFDhKZl8vIppVrKFgtOKAmw8TOY1Hls0eYK2vAzWJjluxfZM%2BRtWFl8V41eKPkSk%2FCXqInMK%2BUiSB6C8LiJM%2FWJpvribEf7IG8xbyNfTfmgfglIZJqBN1BeW2IMXb%2BshxjvD6vvIAt1r4JWhIQYOWGnvzjFI2xBdjTUyhlZc6gQyRT9hFZxZyvImCIUlj6w58vJILWXhEb4VS7C10Dj4BOF9houQIYMLzbs0kCe60xWTCg0HvgYrMMLyqL023H%2FYRFy3jNeXzABbDNr1P8Jxk1KnKGDO8EG8v8tEe9UdLCyzTe9R1LPE0SkxhpV2nhh51rGU2vn7MgisizlJ66f69pIaEmrrq3tE4tN1ku%2FjGrNnX36n3t%2F4Uuo5SyY0FLiwaen0Ab4YSfS5ArE8KCs6cJiUdjJTXQwsAw64PGyQY6pgHHzaiff8bTnkwT%2FIBmcsGaIDfeURHvHLz8W69hNxyaUVS%2BzcIdvZex1%2BlWLBVdzLvTdtrhAY782cCHiOuUIyxqk0n6VAuV3Y6q57oLRmySLrncy9xxsYatQv%2FMgKgAbA6pg1nBKC9PpLTIhDnHmcMho%2FT07Vz259dij5j%2BmKoxN%2FVuuvx2DXGlt9BgYlHWzv8Sofl%2BvpAd570T2aB71gy6g2t0am6T&X-Amz-Signature=9ab1c8734aad9c3f94447847de266741374095e9bb2fdbb4dddbe8e8bd50c580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

