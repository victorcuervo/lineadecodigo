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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VTEZ4SQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHmupnSx6yQmlbLHaJFjJTdoIWKqxnmVR9xnfHuZpxfPAiEAl1QsD02QnHiYC46wGoitDa3TngAhuu2JVZ28yDjNQHEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDfh1bLcjZaDFtuwnircAzV4aK8iJjnVXEfzq3W%2FfY29TX7T%2FnHdfzX%2Fi2o3fTXByEwRv7JUdWDB3Kt7bPLXj9XmGPyUjCUqFroP0VrC%2BW08%2F5xk2JuoYsM9Llk3d5580VbdztA9H%2Fvcbfk5XmSoMmO2Zmcjc49j7eQ9B2KBsqugFCE0L%2BvBoSC%2Fr3rjb6UcKN2nYx4GQuWMUTRRBlXqmqINdO5c52bHrj7UElwCwcxa%2B26ziIL15Mhqw9qfDmSSplz0zytKZ%2FB4SrIU11Ob7YMkQttRf%2FiCVm8tS2uFA2JcylNKNoDEti7fVSrMpAPcYSTPZomxN%2BGvKefnym9zAWG3bx20JipTRkPnPOMjHPT5BNDbpRKJEK4y%2F7Q5kMKlTa6tuu5mhK2ijhTgbMmrXvEax3u0xb7ssev%2FnQfD2kHe9xC0qI1gcVXbalpFmV2j%2F8wz%2F%2FxH6WzdGKde1xfwQ5RBJrQkrrK3638nUe%2Bpjd5Y1AfqspC4W8SNV5ySp626LS7bsnIgXtqSY%2Fs2I%2B2jESj7OIsbA9pMJT0oPY606YkfBZffR3quUzUHULfjoMDknYPh2YVe%2FJns6qx%2BZcZR9AL3CvekcwtvylmGNpVdanJf%2BpPfVx1iJAsqBMfEh4xWHeEkNe48U3A3Vp5yMP%2BqxckGOqUBDb%2FpOBAd8CLtFBza9ITICgdjcBosmhiWssH66%2FJy1lQAkl6581muScjDGVbl9xWIVbF02sjrk6STZaKEP9PMUxS%2BN660Ks2MDpWrw316VOxUxEoIla4XzVVgj2tUxUN8RQg2Xo6R1Y36WkQkgqByhJLaGTqWnoAJOapVmwTk6kXG%2FIICrRPocOEfzbLjkjzchkJcmuXGG50DaDrSLQotkSjQaZja&X-Amz-Signature=f5050bdd293e81cf7813d6cc319507236a962075ba505106dd4884724b4e2f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

