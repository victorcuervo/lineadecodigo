---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGVFSQN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFKoXjkSBXwwsIgxg2S8%2FDjTu5f8%2Bpxmreh82cSxiGbwAiEAuxcI891%2BJoEyaRSIswITYMFMZAmVLcsXMVoYppiD%2BEsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAHhuk9hFsWHm3LHVCrcA9%2FCkeMKmBFz43cQRc411PMR2b%2F4WkYAFT47N0RruvIZh1P%2Fxo0%2Bkk%2FyOsrsBwAc5IHjev%2Fws9esyLBUZtb%2BoMOQinWSTzg%2FoKwCtLy5s9Kpsx8HAsa9eLxr%2F9vepdWpszNxX2xm06RuNLr7Ai1to43PlFpmGxLEHOlTDlrTJZBTWF%2F%2F3CuElBnavMClZvNRGjm9%2B5gc6%2FkZVx9ba6Wv7%2BDpIiN3ZkLqvB4polfi6LEBXzacOtXaaZZAXQeI%2Fiwi2k2qcDdmasj8Lorcpr20HhJDWxUhj9f2lgfyJCqnLVmAOuQfdKvMgS7%2BRAH%2BDK3CPoEx9kXug%2B7hbM3MMpkUTC488E6EmJbAlv2En6%2BYPXcbH%2F60KCvhf%2F1JAgIbUEH5zne2gp4hmWu5RdAfM6pFzdW2m8FPRpTwkNhgQENt5HpeUuG54AaONmenTiaeCkQYPDzMvWO53T9scIro%2BC07bHOqTfo5hUBxcmpyuyAQ5xUTlPfiemBT9MTYN1%2FWzsUgVa3t9IYMc8ni6PpVhWqDCfx60H5OdQ6rA1KAEZ8Iby1UdaqLCKXj0Ues5lu%2FQ1229mk3oUZMy8pteyF2PHcpWbU6xzAfOvfR86o3p7j%2Fob1A4O8a5sysC2VJXYy5MMW9wskGOqUBNLyzG0YGWOVcIfl0rByPvtbzYh5JuGWigPLecwoVuBJ%2FScGwaFtq1lVyB%2FtsPRjrZ843R5a4%2BzAQl2qNPlqGQddvlaOPs6DSY1wDky5ISQ1OnO3MvtxNuDK5LQA4oXSaToIMBR5JvNJG6dd34t5aTIAuX39WmkLeEEDYyOURHs1ghYzlv98z9i6MgXTpdIbIPrn30eAO5LFnp682MoJsNjPA%2BY2f&X-Amz-Signature=5cc46c8d0914963418d32738ea5b7d7ebb5754353dcad6850d77b987bd7a0ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

