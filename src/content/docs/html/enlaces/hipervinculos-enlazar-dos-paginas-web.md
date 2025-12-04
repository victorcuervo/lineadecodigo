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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEX5KY7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBliyrOhu7DBatWucvXUIvS2HRp3pwbdAAxk5PRCtZLAAiEAyBEqbMduePuuOErbvFA%2Fdz5sCMtTSFmZc7BPQ7hmVSwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDH%2FmTKDew4r6di%2BvYCrcA2m%2BscY4VFBzwsS9eLlIDUfLBKCuRlKMraSQC%2FU9JDwwF8%2Fah40%2FzgiATRMGNqzPkYXW89t9y%2BFyKdR2IYFbPpq3rX5x%2FplWtAaq2ZzP4nkx6jtMMwewbeHyFxFgyZ%2BjDACST8%2B8my7AQKn5mGM4nIK2RqeLyUXDPVL8sK4QX2TXKn3dtDLa3%2F9rjfl7eGIZnOjxO%2FDW3uzFMj6dIar%2FLEVIPzc30kVGRNU7yI72C7V%2BIas0UbmOsOSPDgN%2BBK3R8aapuFkgZyVqWE8WuModFLNAEjCc0B8qCDaT45%2BFa9PGz6AsD983Pl4eG0%2BxHod9MTzrwnrhxsIbfulP8u8eK9s5nM%2F8AfDEjNnmbp31Nfs8yV37Y8jGcFWbtfNPOt5ZEbrQSkONAhzLAjvfrwYfyQE62B%2B4rejmpTkaDhZFgdOXVdoXsuBMosqZ0KQ%2FtM%2FkIbUaaRlihI%2Bw0vA4LvTqM%2FXeOEgd9GaFaD9bdmBu3IcfsI5MCWJ%2BHmM7BlpxvO%2FTjhSn2kHXVtt9ZkHpfW3uOfPSqt7XJkmSU2ocdWktDilPWiKJSefHqeFLNK74o%2BnRJ1SFrMBubofNohn0Yo3x3X3RSgmG0pGx0%2FYPT0ngwECFM%2B8Ey4yF5CTh699UMNjmxckGOqUBc3zMR0uW9p48KQZygM75aeOLjWXHitOsBQ0d0gLtDjZPMKSKcNAuQfX51cWEwVvU431nN5yehL5kQHl25t%2BDM7yGxBJhgrhEevehG9I4j%2BPddLIbvxvQxMJQtibeBWkiCJ3%2BpzjMIYMKHJjmi2gscSiiZveFSKg0Ba5M1DfbQosNLyGWMBqV53bTFBzydZ8kKFVbMu%2FcXIVfzcjyvrB7giadPRXw&X-Amz-Signature=d28f4bffe4601834c8db7a6e6fd3c6e77a3457ee7c5d75e2f2ec7c7ab8a3fb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

