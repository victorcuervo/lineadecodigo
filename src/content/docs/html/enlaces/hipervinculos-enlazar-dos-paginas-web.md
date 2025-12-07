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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJXDWM7Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzAy5Y%2Fnoy3kk1%2BdGihY0myoTVZOnKDJfqR%2FkP%2Bd3srQIgMUWrCPCdaAxoY4%2Bf%2B1B3A5alhdVKSQ9GA3cqvWqMPrkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvU5EKs%2BlxmzjiPkCrcA10s5%2BO%2FD8N8QjG0mt8r4%2FVjdRXeSVDpxQ70vAf3pgnLYIKI8djbhb94iUEiNrZdahzDj19K1FnzwmRF98Jbnh42AIMwhXBD3uj9IZqViPzEvmw%2FrgSsuxwPPMBVtyI8H3st4ePEUX%2FmLOPXUQcTPBlCCOd9OoLJc2sjhDKAcTaP8iNOKRCNbUR1LO2LjeVS15s76N6Z4FV%2B9zoBvVUf0WfDl9k7ETHQHZLYiofiSYLHefPpyHCHoy%2F%2B5BwdC9KzfHHrFdPz1goJwqC61n%2B8iL2PdA45MJJ9mHgkKB%2BB%2BYRhaN9%2FLDb7P5Tvrib8TL5e%2F8sTxXagevfP4qW4CUOAi31mhbikSbJIHWQ0yuRLVj0BRw%2BFDKIAVBdTe3uSUYEDlmLjPDTUldROqhYBEzveZM7tZcDY0ROhhp4F%2FCPXKD0r03VHNBSuaKFNHWDCpFGKh0hc4fvnls%2FrSRuKGr30XbzlAFSbx1rS1ksDkA2Y5VROlzH6fhLpf3JVRJSSNViyy249p7aiV8xfPGkYR%2F6%2FBWVL4VclrXa0wZPOpvXiA38F8bP351EEP2Ymadg7g5IJ%2F7jv9L4nXiUL3C%2F5cYsDeaf7DNrScuPuoSS05UGPTpuTXL6sGbHuSJqkgcIAMMGZ1ckGOqUBLn3D0meNNojZL6%2BKGzKLZFt%2FYfzxwVjo1sud4PpL9qbfbFYbblMDiXdTLNNCkzTuFToQZV9RzgMjLyTWSgcXwWOWfXJ7Lzt3VAnqao6%2BfySWeSLUgLj%2BzlpfKGQi1%2FsslpX47M1yGMR9cTwD5M%2FoXKT3apcreMVlGUw8KDOHHUFgMdH6UlUh3pKHoPFQod%2BJem82a%2FvT%2BAK9HgLgn6tgBtkZpWnL&X-Amz-Signature=1df15bfaa615245e3328a2eeccbf09582072152e0a3664c3d5a9dbea4ca4d71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

