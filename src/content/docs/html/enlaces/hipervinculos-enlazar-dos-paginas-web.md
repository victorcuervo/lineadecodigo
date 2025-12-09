---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OPSSM2Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKFU79a0O7HV88U8GxvzyEqveIPw7vCQd8OXcDLnGsRgIgccONkrpDB5n8pc0C2dvN81JGVGQoAt4mEcm2jXsldIoqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzDnvLrqsERaOUbCCrcA1w8FVMBspvYGFbCphh6qDzSeNi%2FtUmnxFB25ZaNOHWVD1ibJLd6qeolBi3oX0BkDSARTmyIVbhA6RWOQT4aqNGndiRizwnc13UGUUA7ggbnc%2BGgKf0dthW4srvrCV5esqelVQnfNzFcm9KHxMNzf9k7ycM4FOjLJtUvMEsKdsy%2FhDEiqXAwAjDGefxHlL51MH8uiLVfgOiqNNUYdCDHwBklegc69%2FNdVmB6wM3DJu39KiPUl4P0SZ2HagTa5Pzjx28t%2FpoeTe0obgZH4fzs3vs7jlsWdR61gsq3m1XYe7DxqZwoApUw9EQCpNNiosxHntxqiYOFXvN3gXaL0f3bc0sMdmA2LJQPTWZKYo26atxgJYW5z%2FIlVr6gWSvsvomR2xxUn0hkJxZoCM4yLoQEqM%2FEVCPdpTwe1tfBC3aZ01%2B8kBeGUdIfzdmKzi3LbqgrE1dHgoNcz54QJPhurph%2BaJSxgdWAQPOunj5atbMj7UOatlLG2s19EI7B8jVrRxcBWDTMPA1TpHu4e9gx62Y1DeEWVNK4nPOOnsE9cPx8XrapAnAdCfIkSZ1cXOoGpCU0kS8osBmUvi%2FwWZi3XmNg%2F7zOppdM9cejR96cuFskfpOSM0BbzQZFSfFxE%2BPuMNXD4skGOqUBj6UVp4UOoxkHaCv0gpOhE3aXrfI4u5cYkDYE1Gn395ljtZMWPAwXzMZE%2Bdq%2F6a9ftBMOugmtJ2h5w61zzElAY1oVAZKJv7z8sWNZsigUO9Z9QdBSWLKPp0rCs68QL80HbbBeHCI1rv%2BJRQ2eFS7Yg%2FgZdEXxAhMBZ8QYLWiUVgeDdwH%2Bd8sC88p2uQVqSGtZN8ybSM3J0Z8ldQOzUFkL6oVMEjG%2F&X-Amz-Signature=3ebea761a771e420928e70586bb564eb6e29a65d6163c2f580c7ceda286ce7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

