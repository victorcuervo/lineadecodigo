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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFAGBTTX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcaSg5bwzPfCbygXSndQnY1lEkfDkwdJ3eKwfAmqUn3gIgECJiWiuEfWjyR5lRNabtqkhwNiH3dcReadF1IYicLi8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAw8v6sFr6ekoozLjircA8hcUGdc7KntALInAPSyEG7kEF2YR%2Bksst02PMg19GgRvVfpRAqZ9xdbvbzE2ytNaMTPddP7XQUvqwabwQ%2BLmgIYlCmPCmrJXoRzBWg5%2BmwmL47pFhgt36yBNzK8DXwMrBnt10B0Svo2zPbp2stTVl8t8tvgsgkIWBeXBCgIbjfNYktXRzWdWh%2BuiLiYOMLB2%2Bq3A%2Fc23khswrYjTmBodo987J1IrncYuFprSR0UspruaueRhH4W4%2FmYFCG6mvVnL%2BC9QZUdFHbQRwLyd3gzKWHnj%2B0Hv4tAI87y%2FX03tOmzRVYfib2pIpJzuzBrfFC8ibGcJp%2FMkEJaBf7uQaexjOCRtD5nwj8QpRw%2FKW1oGeSnlMQxjKxuFSX2J51PTWiPkSg%2BkP%2Bgihyrh10l8EzFwwEfGae6MP%2BUYohDHbchUMNzXwB7ycCpeB9kx3FO3fSQoCVuvPjQNxjZuAFI%2Bz9cDj3uG2dxCa4nkPI%2FVdrm4%2BPhXR%2F6BG6jUmvbSYOlLjtdOSnAMOTIiICtmkQNCuXFxSKKyHm8qDnaN3qGAO2O6B4PpahPm%2B2R2V7HfkEsbmxt4JYCMj6uktn8b8EYnp2vP8L%2BCEO5Bhwy3FPNaDfFDuxjs8Lw2SI2qM9lDeNCMM6N3skGOqUBINu07HzeeLhAQhwbz1wwfAVv3Mw9puvhq9%2FolmW0swhkIQWs1jqE6SW0IhE6tR%2Bov1kSs4cHmFKY1De3qCD0jJxpx2x5Pl4EfmaiTLdX%2FUU%2BFRmvnwyZ8OWiJt3mk7ULvOSsmxdHVhkuZIdKq6nRjcK8jXrCLA8%2BjKQvO8rZi6objGFNpdus%2Fpkp3QnkIj5mwmKs6h3rbQH2qApAvx6Izh%2BKzSXx&X-Amz-Signature=040081f70df1ce3c1466bc29dfba9cd5b18c61a58503b01a430356fa2db800a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

