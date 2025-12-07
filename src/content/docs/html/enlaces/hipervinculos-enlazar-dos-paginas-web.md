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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZWZQLL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUccCaxPdNAh1dMCoOplgbZv9O1WkfOHujpkcwyt1iDAiEArl3f91GYySzhwewZYdmecNQ5ucoO8KpZ9lhsGbjy9MoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT%2BF8p3UuH6DAQiKCrcA0DCErwzs30Ro82%2FrDLb9T3qwym%2BqXZ72dpcSwCWSMgb6t2vZP40HyOTMVqNU4VJFkwAf6Y2KUlLPQmS3sjFgN0s1Y1IbyCMWuk6ba1c0oACx65wL88woPcsSFkwjE7xE%2FNVB%2B0AaQERM0FEa%2FILwszOKUADAuSzCjw7MNTkZrVC%2FONvBPpXk4Ck8yzZYTe%2BxunBRnF0w2JudOwLiMh7wqDzEYaVS89LLYKLmJ9O%2FFgoRTanRuH8yvCpRdWN4Y2%2B927mklKc3tYhgtQtxrLyAKrctQdIY1pwg6Ym20RlzbQXMcf9l7h6ocLPeYV%2BKb8bh3Lj8EMMi4RCTy6K7crnSucZ1PF%2F2Bz2yWX6wslr0RLWC3xIqSr6fszNqLAattkuWCriMetKLSBwAz6KT%2FJO%2FkRabWNugNMY%2FNCu5pDsir1B79356cycxyhfRva%2BHhQQmgpNreFP9jllhO8h0tZn028fTOt8LzPSvaeWNi4dMB5ert7N0Vgz9h%2FBr6MjSyCgz712UjHimDzHG7rAnnkm413keYaXA5DGcXhRMhnbLghektS%2BZ8B9jd1xhrv9%2BwonJs6utIKdvyTI0mncTLbtZ6setXCoKEdMMcR2WpeVm%2Fx6kEaaEEIZLfOVxJmnMPio18kGOqUBQKwBEt5IQO7elRwW8xLyLRnx0YQsp5vz%2BfyC29pzCHlYXQqG4fyfsPhTCJmkTXL8U14mUaJ1TG94hRsDYc6BBbIV0yzQsVcBcXUlWSUCWQ3q2cV9T6mtmDh%2Fc1pD5Mb9WlM9S6zCNE1%2BInzEdNw%2FScHXeFeZ1Is9jiemjFBiR5TCVSWsZBeQ2QkIcwwOzvXxtpLGSYe%2BrOmhLPOyns6f%2BDZMFlgG&X-Amz-Signature=e579c564385656e9aa40dc7a1b74193a8d3585f619e55f8974add1f09f5c79ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

