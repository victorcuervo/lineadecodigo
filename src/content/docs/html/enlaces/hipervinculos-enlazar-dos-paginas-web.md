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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWT7BUYQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGYFBNMf1egF2cSi5OPHEn0WrSvBKZ7%2Bpsw14QwyiW76AiEAuXehJ4WwqnKYFM9EzGqKKWY%2BYHB9IrvnzfRFieB43IQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDE2hjhOGpolYO6jYJircA7iYHyARlKCtLKxpjt5Iblt388dOdwol3e3fpAzAiBf26Xn%2BVPopkdxhaIF2rzYRUGh0ondtBBrrzgZypXlvp7cezz45fKSGKpd0ZG8kVW16zyQ2JIcfNuCseykmh0lsREPB53JDjSmOaJRigPUun8ruCMS6%2Bo8C1jM6DyXTNiUVUN7JflqbdXhyZao9SNVm91Ufk2OcT6cRnCvhdwOHnv0K3plwxRJGx13kOWryvFh6SAgXR0paej7HgEg57o7cjQNLLggtru1MEZjzQfpBgQLlr13QB5KWCypIgNygc66IxTVRttDDztG5QYx29OSxXe3eadwlR7Fg3c0092tbVF1Z2CVGhlgJNTyreLsZThxGiPNIDjyzLCdLw%2Fh2%2FQAAd8CjMdGRUDl13iyNS8awKOOSeFPT7MNtm0ddUcBL9BMbPK%2Fm4L1ot8%2BX8nTXUgL0IHvbztWKtpNASrN0vXc%2BeCMQbp75KQTUPhV6m%2FHvfUt2IpiIJnglRUEPFNRAiArrYVKG5etHbrkpMq3EM3Pz3iVrFahh7me4ongO8N9CG3VYTGsVa5meAa2xFYD0YR7aSNJa7ucWb%2BjzN4omYwpKoqNHXlwOC5IPcZ309wjScbvWPomLPFkraEJG%2Bl1cMJO1w8kGOqUBsL63n18aB8GLbvnudHs2rfGNOnsTUTNR2J5Yos5zR%2Bfm2E0B3V%2BEYivfDmEhzvzFgxGim5ZPoDwTs%2FnBxjIuyvbtcAXKl3ffpkAypMbUbW1KqTRJ8rtLy1sgKPBjYzks68MkmOm0lzEoNACXbdW4nGyG0ihIsxs03LcKaEtV83bXDmUBUuJ3HU%2F53BNPqWpnaGoN1qHU9DimLG1hn5MbW%2FkRNJd8&X-Amz-Signature=4b4e4ef4b328b0a1305f0e5cb030a1757f4c4e054791ada46f57e5c2fe166e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

