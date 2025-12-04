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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3HURMU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDqAdS%2BSCni70l5M9RC9KTQXwghfHUuA6gIF0ZQzZ35%2FAIhAJb5WPZGIabdiMMYj0r0dYUs0p1Th%2FfFnNJUed0Vp%2F4yKv8DCEEQABoMNjM3NDIzMTgzODA1IgzS23kL7R2p7twlkpsq3ANOW9DPTroi2yYAQAoTRxsYDvJKfnEyI4TlM6XntqivjcFJEDRO7PhaOBpgWVVAOW80POE1D2c6lqhw%2Bg0OlwFz0IrNAcHXxxGc2eWnVEfN%2Bn3N8D2q99mfHBfXSIEIVsT7fEsFsE5d28KhZCwtgH5pVDj8PQJPadjFoouMLUILTesOzPXzBn24n0xZQ7OIXxs0srAndPviUHop9gGAKLlj2TQ88%2FZblL%2FaLEL%2FH%2B1IPQZNsGkg%2BzMxQSwe26QNTE33NVsW4%2FvziJuPf8hkj7OI4mmjczjmauItmEDgfAiU2bJ7EYTBvsKL7P68gX1oIPUSFje6W1gyF6KeK04Dlg7LP%2BEIqjV5nitIQl8%2FfkavZIJyGdAgigC0nkY329yYVpBQIp93tW0YKKp7OH6xpjWAbJp4Pssp5Sb9YiwKFzXTZlt51yChpcjGtZg5aVQx1Z1C1Sd9S1xNeIT%2FauR8MKVz5lCRa66I%2BZuoP%2BOFPWCXBJw9szCpyA%2Brf%2FxD8Km0TBo3QkEy8rgb%2BfNipsl%2BdZ%2F0gdXVkWHFsAYvQujppicIx0atOREQ3O%2F5LPK%2BbIs0%2BI4RRYozZ0r4AJkSM22BDAVTfy4j%2Bt0ws9nKmdP4F4IIN2%2FlYtNdDyAx5JcaODDChsXJBjqkAbX4t1Qcjju9bqvCQj681XgdubL71sCw82YollKM30eoAUzaVLxh4ZQtCMTkddY5XzECxpTYcKNSQwTMa5hJs3pJgpRej26KYPeR0n7ckTiqhlPKVotwFzUxnt5RqjCXxgQeXuLYWCKGOGvSmW4ptkNWO31dHYKKP3cZNs3Cow4mQmeMhTLy8bMp1yL%2BhNDiIUVDRz1ihmUdnEqFyPkRJVDhI5P3&X-Amz-Signature=0c7f3c2d08f2c3988892d0bfebf1282c2ee4a79610ce42feaa2d36c204a0b5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

