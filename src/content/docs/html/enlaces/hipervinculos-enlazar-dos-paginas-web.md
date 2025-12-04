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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJJSLYY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAJXb6%2FZlu%2BxJSfWnGaCDyeq98cUkMzPjEBpA39shSzQAiEAjIboSpGzcYzrWmATrZE4g5UQ3XxHSBobdy9W2isRcf0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE%2F7Qbrln0%2BWMGCqlCrcAxmsS8xjxV598elttnNPBbQY6rMf6Kaks0yZU9v%2FGdEtHe5mxgl6PcIbEmUt89fy95zyc9AHSH51Grc88nXWmz3mwJyJ%2FEa98CX%2BbCxpvHOn4M18KhA7HHMc66gjINuRjhRtkW0hxtT079fqfEaa9X2s51DALNKpDt89lHU5h7y8HcnUoSCLEOBgD2C%2BmEgmKlxPg5yHaLzzRO%2FIqvQpcI71aT8hb164VnQ3ZDw6%2FFgCG22FOBzcK2AtYY%2FEg3TeANQNkbjpcxfxj4OQ3dL1OLBh7Fq7Er1FNUCKjWRaYlJJD40fFzu0JWzofXCDmj2aU1ygCygUCPiCJVeXu7r82%2BFPni6WpQeiCWC%2BiKuWflvs8O534TgThHin2dbkqUHACEwN6cwnbj0PhOqhNKMLF2P6ZxiuY%2B3T3cBSGwUM3rNBbKPnxz9ptD3MqDzV30LRG5krSHjVa6KzeAc58CmUE8a7OMmpl8M4xr%2BPyZ3P70Uoet9CNlUpLVNF7kHikunh5RyxhFvJRO011vN2TTeMRIBNwr2gskYUhScVColO15bWWzLUEHS3vmBuYmtXZS8%2B39dggzyKRtLEVRjjNZSWyyb1H3d15Nhn8Z7OyGiy%2F9HQeh70OD3sKi2%2BE%2F%2FOMIKhxskGOqUBzEsxJurjlt59ihxAhqnEfm05cKQFZkgldfMhKsXGSC1dNZSo%2BnCO6LHs29HRTW%2FIO3kmVH51jdPiTb%2BFEMTifaQgU9E7m5qqK8vpcA5jDRSXR5oDBYr7U6lCOSl80UJV%2Fq11GJ%2Bah4Ea3Am4GjgQ9DzbGJAoUov7JV9Wt0JAV7c8u1tdGUZVKTwthvnd4%2BrGOciBj%2Fey8exS3aJJX38nTDYf3z3y&X-Amz-Signature=75b4a29dc124c103451625b058f1addb7af1dac2bfcbb78c2a6829cc00d3c3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

