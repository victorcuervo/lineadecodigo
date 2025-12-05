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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7E2YNA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkN7BJyV0ocw3A1RQq2fzWqVdkJUWxqwZhFrqAzAl5sAIhANoB7sbMWGcUyUm34PdwBWMbbIwgdwf%2FP66VfDV0DvGPKv8DCGUQABoMNjM3NDIzMTgzODA1IgyNAykKsjPUWpAgs1Qq3ANN55NMjFOyn8YULKyNVrGmXfK9ZCtGBbqnrwVLtneYSDc8HAAswm8jnqKDVysjiBnKo0pZybhE1LztkWUytzhQtHDw%2FPDnGKzL0P7S8Qh%2FsdJqWukcouCmkFkxI%2BgODiPHmneel6DL1Dbv2FTsJ%2FhpSdGoyc4zdig3PURjytrN%2Bi%2FTVMy2dIs%2B9ujg5Il1%2FgAbVtMkjadgl7cfNuPKnsT2F3rxLoHFPnd5ZhcaccJxDW0Xy6sMkcRFNRnPNAEwOO3Jbc6oahsCFizZtpp%2F3kshpqOiQO97nEYW5uIIeV0V41mp884yHjgKptSDzgnl3nsuLUxnMaAnP9gXMb1GuaY8vKGwz11ZhzYeSbXZDiLAUR0%2BcNBBLwqg1xnayJH56hp6u5xGMvXMGPqb6Ef%2BpuvD%2FBm38YnpZuaEBbkvPKqj2IUF3Zy6qmVWN5gU%2F38Y6DvM9EFGmB146uSAZApFVjeq6yXDh17Ni2BOjQwEEAY1Ui%2B7Y%2B%2Fl92AkyManVSU4C31qv0eblW%2FwmD1NQR7wJhuuDbtrIrjGsXRLBActpalecvX2HDRZtwZ%2Bgfw06Z%2FAVpXxs4Onf5d4GUBYmP%2FxP452xel2QgAuLEOIY8vYFP2OwYglHhJCi2apUB9iijCx7szJBjqkAUpWP4KP8bA76XPxE2Z7A14w4qIg4keDAiBiNKUGnUFn5D4yylbBDjwkq4AW6h3n2MrG2CDGQx%2BDPEpS6p7Fj3QGFSWLSyY9qd3u0jnZ6PINmzl2NSAqdFe%2FJ2pM1JGdmks3GzVn3lMpgKkuD6%2FNvQVYZbDQF65lU4nhaINUiNo91%2BaxJk6S1yNNtwVBetpeLYSlsOdUhlZ0RV%2FHr3EOzXgPNQif&X-Amz-Signature=d5f47fa273893712caf69d0e1a4aebdc2d74b978c74d13d02c4591fdf972c06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

