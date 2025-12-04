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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JSNXICT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHh1aSj2lQTxSU%2B5KSZVVtLrvzOurz4UHXX59MpJoo2PAiALpgNbbjbeOFAuLypHTTCsjPeWPp6ic6pA086Kni%2FOayr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMVukyVuqjAhgumIdhKtwDM6h9WW8Y2z%2FRrONfBEBAJNAo70Zr70G5EAOCfpUmrNx8xDG1dR4scPrpTGjZv1H%2B%2FFAax7OZ6YYjEwIkHnzjiej%2Be4WXBGYIrfwZVsTiUQLmVSWXqIcTMBkej21vw7qfdscSEthMZ%2FOSafZg2Pgl6lu6trvlbggx3dIdo%2Fob1s0eZRiE5JPZRyKB3qPRj%2FbopoKd9s3WwrNXoVF2rnLUX2jJQ0Ir9sqCQYF15u%2BFOZ9PEG2%2FM1HWLvw7qKGikeUxkXki20jLaVxNoW2i4IsCgzjN7Rtox1GN3o%2FHJDGcXONz4nduOgj5FVjkdx8I0Kffh3d5BxqIeSQagQ1VIy%2BRBuypqHKNrI1k%2Bycpe%2FQlbj4y%2F6KMliTcTGGqDUhsNR8X5v78Wa4D%2Bc2MH9ba9xkXBvQrLg0Q4ch405tfeIVjEUCI0JkXuGZMVIxaR4Ecd%2FrXxPuAwLpvLzqEPoE3%2BeTPvMJbssmj685%2FL39Dg1rDQSlyxrVSfsBH%2BokptcCSkp%2FIPog%2FdWbUjhVnEwYXD9pWaWq90k8xWmP3UKFIvVZgu2X47eZCMjleN0fGFE%2BaCMS9gCYL8O0qPuevteLqyT9i9X%2BN4MySCJ%2FJcGXUpKqSoUh3GfXITqrzxhA3gusws8rFyQY6pgEPnJ9HHjyzAO%2BtqDXjuLV21%2BV0wIF0GqjkBDcwD8DDYnLm6nccqiIEhnhj6QpE3qWAHAC%2BNaRIrrEvVBoMEk6SusR%2F%2FHEane%2FLycc%2BzHJ7317wJDm61748ZUslbkALwV%2FXLYPahDs655zqSreRjRraFtotBoluNHjoS6oUz3VpMHnyfeNNyxnjGHAuz2DCSPLX%2F%2F3xpiQ%2Bv%2F2FATFLiYTA5uXmFZ1j&X-Amz-Signature=665ec057603a2e717ae23fa28dbb386e9694b4528d1ab8066419fada1bfa721f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

