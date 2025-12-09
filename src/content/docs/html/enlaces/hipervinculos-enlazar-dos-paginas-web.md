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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2HLG73Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxbX099OaRY6Uzu6IbOHqe4WeQLeAOawOvMisFuGSTWAiBXJpIJSPUzWhZRlDIzuBfwNo6KBHqV%2B%2FDI81fmNdcg4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjr6WhZ2wETWzI%2B3VKtwDfnHY714lVyW6EZjKxXJ48A238hNanvGC1FkFNf2Ppet8vi45n%2BZwOeQDtGS5jFohez3B9hFz8P1EpJ98Bd3oXGZ3jDV6oIdXU8B7NIDL%2Few7N4hwj0n2dYvIJ1Iy2dypOGulmZscIgCQmXJ6uID49AYKI8jR9QuANxeuzpzzVAfJ7WHz5UeO67GRmDHqaQ5EO4JT4PsuPAjXgUXVBl7AwwJjzRD9tS6Ef0D%2FxZ1CfWzlz3ydepVemnLJfhynWp%2FVDBhXyeSaU8BS1nvCWrhUvGh9QsST0DBN6zURC3wgmaJD1ughSY%2FWycItX7VUDiuSWnEJX7ICiAAckW%2BQ%2BOymRNcvRXNuw348te%2B8kjB6rCKMq8zKJVec2W9BRcS3cF87hHKRPAem8AK05usZAW959laijHDsVSL7xPDbfgAfDgTA%2BlUpu%2FG8MKv3AxtP%2BJ8qwB4Q%2BAkaYZyPVFTwNnHuOWxlmqomZpn%2Fwws%2FM2Pyke4vqCwsQc83tJtsgyYf4HqQn65fLW0bJQVpnUmpx2J7rEW3pXX4SB81sWNfMZNaO9OYZ2u3CPU2fsnjP7bLoLansy21xuBABOllz%2FEP2TWbmct%2B5azQz9%2FGRpcfhyLnlOynCtRUKnnC%2BW3p4ywwurzhyQY6pgFrYt1ONR3A11fOsYiCc%2FZgU2bbV7j1CP%2FD%2B8QefP7hTNh7a6WLGPMg7Bp8vgfZVxrY5gIrhlWGjxmMDxxI086ZynCmiFz3MR3ZL4DnFepcYw1kq%2F%2FAmklF4rkpYzPDD20XqW6vUsrOvy7BL4owfywrSdvdaecqLY3SpOF70tdUwTfruxbyQuU7p7bOFt%2F%2BKkNfqeQVGn6aWbNx5gswtoboV1I3L%2Fgi&X-Amz-Signature=48e1bf4cd57898d01b08805cacf9fc4cfe26bb98b092eac110137c335f3cf324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

