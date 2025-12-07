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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTIWKT7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezoU%2BUMBG9pwYsyrMfFVkMvlbR%2FiPZ1yeEBF%2FyPIZzQIhAK6Awu8%2FDQnQ2X44zXUOlQk0UQq0XizvN3yfCxZeiuGlKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCL8iuM%2BpHLFnOEewq3AOxNUtYvhH2MNdKlZ2Tbr%2BHrbawWQogq3xbIk9d%2Fr9Rqt8yWNutCyWf5Ktma%2FBWwxrlOMu68Mxq2YajVCXVo2CqaCRAgzGBEymR%2FL7MvBrRykYEjGbhV00LcgFCh%2FB%2FF9jsVM1uQ9yIXzxM7E7qhvJqzWLudYySopAHDT%2B7TTtyzxtnndzejQswYW%2BwesZQnxdUCVLsAGipsyFf1dkv14iEkmEooHWv3DOuxdFcvP2FyzTZIhZekK5pwNHd4f6wf6xWkEPR%2BOafdH%2BmRKgauskLVu2%2Bn1GxxiyA3Om%2B9mAZI64rQhcJUO3yZPP0TmcSEk%2BfrnG8JMm2x6k4ZCkpucxpPbe7vHYkIEOH3jmDWGKw8BjzuQxjrT9u6am2670St8D46W2S5zMZHx8l93J6RFMenkM2jxvMnSJOPjhJQ2%2BnxlqrNr76P1dt%2BxLvMZtTNfdrF2jv4M%2Brarg9pOoOQ%2BoOs34k38H%2B40iM%2FvIrX79WbtzPJRZhNm4%2FvIl%2B%2FjBIPxFBeA87BRvWnJ3ZHj5ZrGS7QWhFrKUGn5O16n0xM45qoiwchyf4ThW4MHAyDeTJgP5snpEEYjQR4%2BOzJ7ayXZECx76mJEmsW3AsRBnNNrAY6g7afGLSXOIAslK24TDwo9TJBjqkAcLa2eAZHms9UKLxYdsz%2FA1ManfAVbMFP%2FHmfdLmhDow0cZYH7QoeyVbVgwRXNW6J8fYvo%2FmAQeOeLNWzceg4pzvxiV4Pft3RHY6brGZk7str8bJSp42MweH2lOlUY%2FlaflVZs%2Fga%2FV7KFLZ9pCljbthi2tNlJ81tEcV4q%2FctcCfLssd0y%2FzGHjJHbtTGQmqH%2BBCKVfNnCzEpyRlZQAAblougMPh&X-Amz-Signature=af5872a85cab691da6f610e30aa962dbad0b7f86c3e8b500ab8428d01b5d62bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

