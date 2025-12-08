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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S7SFTHB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc01q%2F89fzTDyyBCdSiNo4EZBhzZvAqMgN7uyoB51CewIgYQ0fXVIDtO2g9MCyf4imdpe4vqLqhH9xb3kYpyqkejMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEm6UDEhnorMrPd2PSrcAyqRCxb170BfyyTwVO69qEeCOCe0ZQ%2BPmhRgfLBdWzgPnib9D18siZeUdSGe2D14znVW0oWOuSwUXidmchIIofsuFj4QVFDb0qrCl8IjBpmOGfByuO%2FKWuiQ%2FXPFSJFQ2xu3qEYAuvTPXhIpt1gLXhu3nOuI281kzbzRVBv8wv%2B1kyey3yXqzmxlv5A%2BYSXXJMugjZL3kufPfO6OOfkAegh4JKuTPLfLYioIdJOf8ZcfLdjSpqiMqEeerJ5Ynyg98y5idD0aIxEZVfkaMa5BwJbb6nKCj6mN%2BwQaXD83p5KOhV1rHGUG%2FzTznWSMx%2B9azvev%2Ff2OraBOuVqccqPrFlbGk62wy4eV%2FtreYctGG9lhO1BcBA2yYs4QUMdVpjutGrInvhlGclNxcLTBVTiCQRh8I%2B%2FxUIIcZvlxGI42KhWyeQYEFZ6m%2BO0mS3HKIK1XfdyLHlZkp9qFaUc8RMf2rMQxI4Bdg8nEaN6ShTWNSoG4akSPfxTpw7rrXWW6eo0X2A6aLWL%2BJec5NmgKZjfgGo0%2BWUfhqRWKmYlnLWKfTBHk%2BP%2BUc1GmiMN0oO23aJMX40xczpcBzy8PZQwjsfoh7m%2FrUhTrFL90apsFx9s%2FMJx4RwXcS%2BBS%2FU6qVNFuMNGP28kGOqUBPqzrYdFcd8A6Mun9HfV8kMVxaxBTeIjrprXyiLdrgwtTTF%2BtZurgTzhF2sxbJQzoPe5JOVMxBAvYL9ZzZHp%2BqJHDQ25AJxqGr8o2YfGJLo1xPD0zWvGxHgGUNVovdljU6Ep5No6%2BpUMHP3mC1GHPN%2Ff%2FDMc%2BtW%2FTDu2SsodyhdM8qPk0hCn%2FlIK4ZWLAyNXR1v1m9KiErZWfIzrXf%2BjwVzMXDeJ%2F&X-Amz-Signature=0fa11bad3a3691a60422a4144d59d98f9453c93c9ef172c3e0ff3e8efc9ab6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

