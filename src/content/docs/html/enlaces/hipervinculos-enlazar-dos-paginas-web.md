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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3F3W7UU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmvCYBEGyVZQ5rakdhYAIhmDyEhJgfyAIKDLee%2FiMp1AiAJKQfdEJIDeWVYAsjCBhyO7cziwz8gcG49ptdekMTrPiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PKHhlIHaWACX2qlKtwD6%2BfrKH8vDhBCDQ1S%2FQUMtwdS5KBTp4FxoRxRcCMTF91h560wYZ52X%2BrKtbmZwu9XhfefESNy6pe%2FcL%2FeQ3XiEYp3cCmrox8kzG0GKQ%2BrLHsqfxGXS7JtSv8pY%2B2AiQ%2FCByi0MvHVF1Zzqcl3Yv5CnvDKL6%2BnEl7bEEjk15w48tQSeiENIrE0LaKYemlmfS%2FhXuwSKclkDxs9YZZQh0jL3jWT44y5a2POOwKhh%2F%2BhI%2BRvv4sg1Zo7SJppgSTgQkzzH53Pw7j0v6cdPl82tIg6sJh3w090gUr4GPssRD5WyFFRvIhhmzkw%2B3KCT9EQXXpPvfzXyPG4nf%2BgFKpshKJtGs19bp1rZr9hUn2nsMbXkohYU0iNSCYJvoP%2BHgMswwRKw09re7ZFRCsobfB%2F%2FvZs48aDUX%2FsV0XA81OUD4xCPpZ3%2BypXWIj3Sq3ZDc8rNnwVINYfGGe0r7E6CHzX2QvyuZTx2oqg2wRRcpgfk8yy2a7iqcCcheWkQT2DPj4pSra2LW16YgKiZS42hsCbMsXSa5r74d67bSMXHM6Z8RWCCYHH84iakyzHpYMMyg5RbnaX%2B%2FGtkGkMOQys1Iunvx4pYXIcntD1SsFCkfUkqJLmtHKHPv2Yg2AOC29p9aswjv3SyQY6pgFTSfFoUaFlXyD36HG0owaLuTSHrkyG7nbob6xEgSzvyeaEqFKHb4l84frTwzuraYTP0kfragm3C6asHAMn9Ayk9VEZLjBIZv0OX11vpmpTU458%2Fd%2FSpQZrpCv2CU%2FZ8Tn%2FbpzoXmvS4akShMJ72b1Qlj%2FS5mcseifnPdQk%2BVkfGJsawjwXbo8Gf9387bVrGgKUPRyyd8v4NpU8APQiBpQaBoKPcO6n&X-Amz-Signature=d719a8782db3e54cf6bad3a620c3382dadcf50106e720c8bd55c2f85b6762301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

