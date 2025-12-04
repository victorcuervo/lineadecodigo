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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD57VEKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGPNdaMscGVfD1eglKQ1OV7sinKGaQkQeZBwav0xs8TLAiAfNGNXiG6RspGYFeZ9XTy2RmzJdYv386Yv0jOLPD%2Bfzir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMxV0n264ntprgr9heKtwDM%2BFaWgZZskGY%2BnXLXoaiKkRf%2BrhvUyZIpXr0i4RHRTjq1leJV3KgGJrYs8PcN8or%2FP4%2FOUooH2m531xjRcyuG0Hxma47BkEv8pt93xOhU1FK9JImVaPw%2FuE2VGa%2Fce6YezQ7uTMzOVtUYznf87hDJ1RE5tqa%2BbLKF43Owz3diy75jY4PEHKMnvxfw7MruLenwxbkl9PVqfMnrnMQrVMhc9V6XNnsUjSpecmWLbqmCGToBJLl8QWBl3dNQzggye23nxuun3MFpBgGcX1%2FVSMbd6W1q%2BejX17owZUU%2Fe%2FiOsu%2BIPu1cY0WvlP%2BfMbHMhIEC%2Blis0TGncueEvs%2BGv2O0tJmNaQrOJErsP%2Fi1H8oBXSH1WZhJyKT4jbJn%2Fvac0AfxbE6Gvhlahux%2FHLhSzTgu8QobdQ82AlmTLwq%2BjVsZxMERFzouhRhJWOWMj8KXTho7CXSfvjksZrgcIq%2FDDUPDU%2F6q9%2FCh7NNlaN4F%2FlCZ520DTTuN%2BbY6kv36Y2Y2%2FDan58SlSFlcWt1eqym6NW7PHIohMpPoQnIDN0KwIXVLptZCN3nm7wnfFCIpiS5%2BFPLQFYOuX9jlqPKCGk5hvPp8hEIW7cJKtm65fs3a3UC4KsSXYLq%2FrJdRI8VZXMwwrXDyQY6pgFfdj6VO41PR3KWJfCsAtZRmyEiGr9onPiQa29gXnFskG0MmwgqNVunFa1E3IZt6QE1EI0FfjEumENzW5rarQ5eFIxqCXTPuhgxeFKipjQO2EiEvJnGAGDhFdPJGdcSsdO9BC9SebE8A7P5drUg60OnMu1QW8T9%2BlnGTJ7sXAoWv%2BfD0dEx9wG3nVOu%2FQLv4P9XT8BnoMThI1ydAGNqqaPzmCTIEmJ7&X-Amz-Signature=29db6c56e183c4f62a835473386c39934595dbcd63f224942541dfafe9e6a79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

