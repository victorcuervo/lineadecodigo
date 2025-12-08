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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S4E5UHW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCUp3FyljJqdNEeD6EDbP6wIwPZ1sqGO1m8iBxOxzKaAiEAvE0ywSmdBhi6hxxwdUK6u14aRbJ04MSXAcVK1vPOTYEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4BXHQk3mAkqqVlDCrcAze6Q%2Blyufk7MbXbYouUYHkjq4scTJeqQji%2F0FxGcXC0TPa6fRCGzkSjv56GdX8gejeVcpHVuimhKYdpL3uIAesl2FsoLvHPr8NbTAyHYhv8ut7TVAXhv%2BQ3gqQTwW7rBb0zY4NU2os2tfVPqvmUPqKawqo08nkAfZepjNuZt%2BXhEoqlKlbAA%2BKOYnbuBSG8bbrBgs6lS6DjvOlUaJDY6EROw%2Bj8per9E1laCNXzyVy5gFqu%2F6Aoqsc2fybEnj6sCgCriZwU3t36YJWAYIEk9gn6YGXuSIICs6TrtMpsNFx6Lg5vWPsidyLTVWFuSWQFOHpDncRcX4BtJfccvaG2C19vwqLl9BpeS8XXUdfAZfoFBX1FTDanVfnZ31AdNHtp2vL%2FZNpuundE8OCbdeF563seHdqylsRDEVC0Qee1x6oCCS5pOVfQkz4zCh4iiyhk0CozqVmsJyctp%2FwqMgzc06ulMMzPIfHP2fkjcNh3MHAO1lmdjE7RVedO6%2B66K1%2FvdWR2xvDNR7gs9FwtLNQjqNvJ7PqDYhma7zmh4ON5rJ8coq5ddeuk3%2BQSk9c9x%2Bm5Wgm47EKiaFVCMCK4evP3WEUqiax9ghPjsyO0oLtpuwvUWrnWtD%2BDTR5YbetnMOiP28kGOqUBxldYWq9%2FPqkd52Y3mF69wrO8XyA7uplZiqhey2leqYtqypjqRFnJT1iujXa9a3Httz3U6mYAGV225MintPZz04hD138YmfoNMTY7H9tWnZPm3FTHrVQ%2F7RPsXZ2X3SnoqL9zNGbkZqZ16YISvdvNBdkufgmBlQlSpfgoL9atGebcw5ZaDXZe0P%2BftNgJnDFWw%2FZSBibCaDWXz44HLPF9GGiiPlJ4&X-Amz-Signature=689cb7b2d1078d4810d8fc4bde2a1867b6bc5978ef60e2e6175481e8d3aaf03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

