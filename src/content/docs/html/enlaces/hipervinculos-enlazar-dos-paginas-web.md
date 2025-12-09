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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS6RREW2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI0yxaOh1f4PqISyct1i0uEE6T56qJb2NwBb4Lr4OdxAiEArdKOgHLmYDHccRv%2FufQMcgpOlzeSNiKdPGquZlIqa%2FEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7imFQ1sCC3S5DeAyrcA5wW4yQkiB6jAggv1WTcJwoh1qI3K0URjO30kw%2FAv7ATpsytNo4QU%2FNwhx2gqhV3RzwisCK0jtOsySQeaEeWm%2BKYjcLhkDbK7WMYB6oE8xTDvm2gUcu%2FrvUoqm%2FaAEF1EVA6K98Zy6Wi%2BT3X1Cp3wxusmHwrrd4YdtIkcgcc8EFNlQZ2ajDcRVS%2BHiHUqJiCLKM9HZ87XrbCAVzmlWhLq6A3tcAbshDENjRvX5ThwNFtVWVnu4zKwJpvzOD0%2FepsW2bSBN86ZMRfb18RUuEkmo4RKwNhFD6ROwcB4vFJcVTEzklCa6MJig0OemO%2FNo8MEpIfXMMSQRJw14N6GpbYhsmujb5Povh3OF96d%2FjjxqIU6FN%2BXEgHWVn749sUiBSkqN7EnPuUeX4LhfqbNgPrK37fLzdkke8IPC34V6v0eCCQAA7%2BzWl0covNG9bZiHy4VT9ZOAM8UR7KGV%2BffEH%2Byl4rfF%2FyRqzdAdiaOsBmv70%2B3SlNitYWNBon5BZDSfiraNEaX1o4J%2FlSx7guNdxcWmPMEDxYXHWuxzVRyfdJg6iuDK6MnEA35Nmf9BSbAHct%2FTR3MxUGb6WsAsstKkI3DI8tM5UOmjhWnVenHZ3dl%2BrPUksuPd%2FJFdWVJ3hxMK2Y4ckGOqUBNtIIBbkuf8ly1dhcJnnLDVDxo%2BfExywW%2BkpEwPVGlfowXKQS%2Bnj4O2ofD9TV6HBGwkHeqlY5AXf420XPfYkZspQscCres8N0SaW4a51SYx9l4csgwj0fKuXVzgkpUcrkOfB3MpVevHEJM%2BVkOSaKFdrNSvUWL4tsPVhIl2W2ng%2FWEkDrYY68waiUZT55balrCk5%2F355%2B0GSZ4W1c2eLwpcuJd%2BUB&X-Amz-Signature=ca95319be4cbdd198b9a9053c27ab0f8b4f3912df7cf922271fa308f40f30e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

