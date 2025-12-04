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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVZ4JBG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIA7%2BnNlGBHGOkMXu3DsgY8mFL%2BJC3tA1vNVonvPIeAtuAiA4DBWTu%2B6R3nblx9%2FKbqPjmysfwMe30aqXfLjrv8XktSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMgudaha8xnkvw%2Fg%2FbKtwD9wuZrADWztt3Aj%2FKma2iFBIHMuBJsDymuuEsH3DDbQulrPiyBq6fMeu0FfuXvakA41V9dmuYywiPzdDRzz9f9516szZWR%2F90NeuC5RlYSqT6W8NxaBnKHoE1WhPewG8092tZq5VPD%2Fx8bLJPyu7e%2FPricuY93%2BPi18%2FH9E99KeKBJtnbKz26qQ%2BpYeS00BBfLIs%2FWRaPaDg3nPA0ymW41UjpGJxdakdq%2F4qyISjsZeRZyJlzzN9oqIwWsOmagqA3J0HOn8%2FO4jNW99eWIfjF3hyhvq2fbAljlzcVmSydr5PVtxSF%2BX9xnVdOM%2BGhYKNKowoJnr1HI0zxCujL3nJtwgUNuvlliLqV1V%2Fp1qm%2FrUmTdjs7zAQjTJs4QeblKubUHjlUebKTbaUneLxqgINAPxDKVO3MIpnzapHPOTMkNYx2PwCc7wjMyD8aeByhxLz3Wxw0NkcAwsuQoh0%2FmNmrL6I3k8ekjjqe7g3VAslURfKFmuXb7OJOVIB5KrUULrYKdXCLwNPnQDouxhqhmN%2BYRC6%2BPwYHWMc49Qunuh2yTraouPjU%2Fah9jNGFvjP85qkGCVL87v%2B8hJnFt53Tg12RnSO6BZrq04%2F6AjmxoMQW7eYRhuv%2F32u79GnAyOYw6ubFyQY6pgGlkoDtS56L5YreMMni4MuWHmZiyTSJYj0O9jdJbdyF62O18rMsluIVomNtaCvIv3wHXz4gX4hU%2BJsQyIkzg5x%2Fe3CgglOICIN5KcsyxcNJejj1C0BgWlgDNv1XpFPZSQ5NLbR1MNCJZQC1P2UXlQPCnyqKdSvlKMxX6xVvuOVE68VQGFd2VS82sNPMZ3SVLcE%2BodBadMxYfA%2Fy322Qkld4Rv39jbiG&X-Amz-Signature=db65908ff91af4e5a16b2783322bbfaa99bfc819643efa24a3333fb770ade030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

