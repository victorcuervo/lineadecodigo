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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHEXT4I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGoMJOtzr4IR%2FM4Sr%2BnIJOK%2BjNU6VHeUwKIV3WMPGB2QIhALGEnT1yqLAnkw%2Bh8zWCr7uSaa5Gnf4RR7zhXzgVVji9Kv8DCDYQABoMNjM3NDIzMTgzODA1Igw8fqK0RZFAMtTa9YIq3AMmXl%2BgNKwJYjf5pZmQh7%2BTEKITUSRy%2FgkgNgREq%2Ft26YWwjT6Bx8xbaJy%2Btgjx5FlHcLNj0B65QNWpE3XIfKa%2F3Mt%2FmkQNXBuorBoLfcokYOSHtgYSBW%2BtCBaPyMMrWdHGnfMA2Ml7ysk5WUWRnJhW0Sj7JmehCZiqPV4wsYlFlARODbgzRcJ6Oll3%2F0RGRpMKEaJYMx6nD6L9tJV9T55sMbFnSuNJykBS14GglsESxWX8kl1QbAN2Vjn7zmrsReQOf1nXfGpwWVUq1oJXwwpz6%2BFrQFOOrFTGlhrLYSgQPcryaUfWWT0nVOvt4Xd4l9sT%2BpL8FqEYu6fqoLUbabtMMuhnhif0tQNJsBk0C3eZ3S1RjQ2nbHkyO%2F%2BmlkSyMFMy2DonFhkyWFbSrluDCBWrujbWFUjvaxcHG14PIIftsxyIfXoGmbaK3q%2BOm%2FeFz1JhxEvdRsPnHDiodpeOMYnGfV7A7jTc4ml6hN6m%2FPQHaODzSgaOTVRDjXU7DA7eFsTPE5oEimV24Mo9nbh0X2U1RK8%2FJawnd16ouSIXeRiL3tuhNcHSt5cYhK8ih7jY3MZckx2qI4nDIboLe%2FPkZkUXG20GR4eP4hjaOGucdrPrlhwV4sFfeP8SOGMe2TCCvsLJBjqkAaOH9Vgj4oXPc12jv4dzIGONc1QMTsYvGuEeC5W6OCs%2Fb3MSdixYNOVJp6LZs6fI3OvMl7mTY1A3iDyU2lmR1NaKNWYBjkv5T0pKZ95%2FNqXudBBLTQirOkOZ4baksYpfnzG%2BfJuDiyPoBHpVXzyVzr1TeJB96VacP0Tp02ycFRnQRXMEpgmAkgsI5n3pjhH5IoXXJOcK1GGpLL72Uz%2BZz6D4yWm5&X-Amz-Signature=aad30a8af14869bdf8edad232c0028de3beadba5939578d52d0d0a5edda81746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

