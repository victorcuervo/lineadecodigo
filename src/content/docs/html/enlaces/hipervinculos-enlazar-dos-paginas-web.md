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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMVES26%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6w6itPGwNTcGGeLTao%2BXPs%2Fi9q%2FeUOQX5Ywo45H52SgIgbkmYBu1Zve3aFBeETptmhYFP34weFGmocydgOWVcSG4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGTa59t7I6jwVFRdCrcA4XhpidIquSSQbEuuTgh9cUPHg0MjDBQOaforTAZdSVEifx2bQFoOShBPVSUMSwvN9m19o1FbcnWa5zrqs6bBupnqGdPKABP1zo%2BIUAf5AfkMVvJB%2FXWrahUI18l6AFgzkxvavaUpejTmCLRZCo%2Blrsv%2BcpFiVOLcA3kfJWs1gmU7xNk2oH8%2FxXADHHe089MZltsEsxCNkVKOFxOnp2Wg0a7CeGLN5k3%2BF121imdrXahCr%2BRygaK7lhQ%2FVLbSN1a%2BqB4yH2DQDuSxrPkkeGgzZmGf%2F%2B6nD%2Bjlg0WzrBynK4maTJZjuHsea%2FyNf95y4FoYGcpDqPvLukaohAEB5O%2BUuqEv80IbmnbUUA9UTwNoHz0EIOZw4fAf%2BuwFMf02%2FewEgLpJoyVRc5ZG%2B5xMA64DTz%2FTWHP9ktkOn%2BxLOWgxG5lJht7sXgc3%2FlL4l%2FcaWTv7EUbmXoPhDmaR3U2ivMkB0Y7VgOXt6xxNhVeUD2b8sroJ6CBIuhXOSBpclc%2B2Rvdwh4AcgsDlliz7R9k4K%2F3VjScC1DP6WY0kZB43ow4pj4NCZ6AN9pXI7MLESa4PprPSyE%2FX3XaAZxCeNyZ0T7UTw3pYmXOKSUpbAgu0XimTRnIP8%2BApl%2BFj1MH4J5NMKGZ1ckGOqUBiij3WhqTYLgFqg%2BLQCU9ODqACNAElX2EoW6XbggvPuxeJd7vPuxNsFCO3bATNgThpZtnNZDRYgS6TfgMKECHBOTWjxAl9vZsZaeeMT%2FurKfnX2gd%2Fr9HKK7DvUqfJMoczHcbKW5HjqHDuNNT27U%2F%2FMs44GlbDXLM%2BXC1FAeVIUYZhTvJz2DZRrDRnTEu7zXEAi%2B5O1a2UKjzDDFhtBlwH1olSHJ3&X-Amz-Signature=4c250e7f55d96b91bd5647aa9be8427aefb32b97468e001001fc3d219594b6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

