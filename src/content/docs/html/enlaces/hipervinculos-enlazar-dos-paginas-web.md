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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKFJU4U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCb%2B8O1PE%2B3FpxNwNiG8nze9lQnaO9LkR3y4iiwW49B%2FgIgMe9cJJJlLlPFrNEQypuTw1qiarshCVrumKE6RjCrfqIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAy2yFZm%2Bnr0oZhdByrcAzSU0zNB46dbfIeMh%2FmdfZa5CHv2HsedFTP08IS3czsj%2BSI5dOOrcANd2HRek%2Fr74Jm1P%2FwRmfVqiS%2BlDE45cp0h%2BZ2ZH7qsI4Wf1K79lbQYVWjwWuzvhckxbtjWGRFQZ884X7jn11%2BeYr8m1ibXcBYcfsUWzi1WoYBn%2FIxr4yAMawDuSWaA2tO4NmFpivQ3g2s31IRYsIc6eGApdwXlFhatqpLW8gUMhvWECLLjy1ne2sY4hN%2BV%2FYh3tdtKTMKBaAvtuDadydP45oL%2FN2NE%2B%2BUQbYDx1ov5pmOO72OOrajgoY%2F1tFA%2BVGQvjX%2FMIBN6d14YcHEGUTFvWTtnOI7Yd7c7sZVJIZmWWLeucNfKefXFlI6D2PQ6b22uFSUycD7GLVCcmT3Kk7g0U3kJyjZyLFjPjdT0etwCTLpmZtcGQlZ6MI8N05WGfghvS6ESzyANsWviZRBGsKOEJJh%2Fj3kLjEQSuZQURkaTO1S2zW5zN129ZNeGelkr6J9xmcz6Gexrx1QevpG2aGfuTheab4CJZdKwQ5YQxT4egBfTI1KmomSikX%2Bux18jWV%2Fag8HiEKgG3XAF1xoUH%2FDFZIB%2FiLr2OlesQs6NEc4DsnOX%2BCLTcHxapCPMDJELe1F1%2BGWOMJTLxMkGOqUBAb3WyarOId%2F74xq7qlPR3UjQ2%2B1bjYhxpYpRZumwuneP8FG%2ByqyLsNi1ywHxr9K7dExoTaWNDgbdNE9%2Fs3NEU3A3xjxgZZr2xoXoN5ikYRAWd3aQ4Ii8I3F9ClDwL1SElrzEuIfHETbbHcTAY7MaTFJedZecUq9hIKJwrXnZghK2jBibgb5alQWlfB6A8TosqR4Isd3ICHcdsv2JZ8UsvvnUxbbM&X-Amz-Signature=d8b8085ee767abf0f30d0ebbb415e2ba46d1db2fd78ebdfc10cb1bff0cfaf332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

