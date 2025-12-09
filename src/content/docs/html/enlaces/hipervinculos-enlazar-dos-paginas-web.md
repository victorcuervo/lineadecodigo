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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNF3ZME%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDXwaz7U5Tqftutx9IZvlIkb2pbLIhzhsY4D27u2TVNAIhAK4FQj%2FWB3TsXkK5h%2Fn%2Bc%2BLQLmSLuYgxw980NOaE1hTTKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHPUHCe635%2BP9bZz0q3AOd1z3ouF%2FVanmevBmH6t6IH94%2B9EcPm6FnAwtvitcdPjPf%2FAaLF4GYedqDvfCvGozrn07GGroTiU3s87IpZiEIdnVWmRT4Vj7PI%2BmIKpwL7z496FY1D4%2BJKFeX17eE78ra3Dj1lelqEQbey5EAFtr2Kyy2L9JkBmI6%2Frpaa%2BrOhRsUz1mSwOfFHABN77HSpMArmxnquNsmhX6knHsyxz6el3GlyypIGqnZj3dGyUWSBT5Dhc1gvA1Q%2FSBTbyzBva3IZS17ptRFS%2FRCOx1EDU0lv37QkJw6Kf3HhSRwh3AlIXXVS0T915YVmZtMqTPpIhZbdIJj75d46cGbUfJXUVzWnqymdAvpTNiMUMOXzHxMYz4%2FXzDME0FmV%2BUlImqlY1kCU921u051K8viSx0ig0koHwLCYCeLkBM4OLCWPVWNj51MwFg%2FoqE2gQBa4MSqWopsEfFnPaXKDP1ufbBwul%2BkJXGIM11a288jrdoZBS7AmM7ySI956rMfCveaBsHy3oL4OTUIklSOgfQaHgPACb85kGWyIoDO29aieGjG%2Fkltr2dB4H3VjOkwAcNX0%2BZd09CyGC1epCRglVOZO5f8vA4nQkNFE1Vla4gAx68R5%2FCQReghRQeNCipBR2jb0zDEiN%2FJBjqkAVlnCLqwOxhYAE4nLzICfjfpUG%2FHcpTj4ZKeUtKE4XcZqH3KEXXwZXn%2BgddaooDhUx1hbu31iYfj%2F91ifqqldr7GQbdOPKAgy07w9iYY%2F3Ylt3HLBoV4mJ0pW5XKW%2BPfYv7aAFXrbXfmsFY26QmOc9dVLXFT0NawiADDjKekDTzYrIZYc1IvavsgYD%2B93dwvLblJRxvJObB3ug1VyZqcWfko3vZK&X-Amz-Signature=1f352ce35ec3d38e0416a164a1ca22a7266d71eb255ed44c6b96505dcedcc2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

