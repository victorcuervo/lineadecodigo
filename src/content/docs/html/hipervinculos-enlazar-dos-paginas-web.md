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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCLRLGE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDMZcDeCq2QVIM11ZoZOqLaxHORtosozKdC%2FfesV5eTuwIgGPAhfTnWnTgZqoggFFavntU6XtjuNbeS1Lb3KC1m1OEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDO%2FiwX6LB5GH6mXK6SrcA3xpdHfvCj77BlAlwRzO3kazfvHmeZlaEIt71%2BNY0Y%2Bn3Rmm6gbM5xgwc%2FVzd9I9deWMBCnqV6cxy7dWfiYzw%2FVuLeXS%2B2Nm43Wx11X%2BaPMASbKifyV09Q5e4FYz592Qug6YREo09bkY4Y2rvxim0gCx2VM%2BMm%2FyJ%2BWhBAQ8VgPpchGDN5k6bZOYqe%2BuZ9luhbXB81sKymwK5TQ1XVIetIQzDSx4uid1mb43dD3Ht1aA94Pd2AyD67fVIY2y6x%2BQ2lHbnDgretb1oP%2BhtKFVcEt65CrGGhQwlzosYLGwgVP3loe4pVKwGr5uhm1nd%2Bb3oG9NP91frYStb1RsmxXWaiamBXdNL%2F8LrTwkNrhd42G5tWsZf%2FjSV3SpVHKYAFaWqle6dQHLiY2K11PYTSbpjFwI3HKrMt8q6%2FvDLRA2QgUhRCp9VVeJqrrxDwnXFJV3ZPZn%2FDaIq1lL186jm7ZEsIyk2ibCMO%2FqoXCNUPIrssgVYqeB4FNMygPHQozotV3VOFHpA6fVRpq920bErRRMBrhgGciGUTUZh8nR%2FvzgVzFcLaXrD14wQj3c5J550X8QamuhbqAh8hGeY1Lo7COya8rib6mTghJcKuQw3bPib5Ad4GzJnQwQNWxOUkTvMIO%2BwskGOqUBF7H3jhtSLpStOaU%2FnggiweolkuONiElR2phdQ3UYXhXXSjjc6VLgGZryEAS3KPNZ%2FbPoCQHpksP74avSgjapgP7dFYdAGHBUXEOn3mhNbVI%2Bi3Cf9JzyjTi4npnLPpHpiCwxNY7tpxr2E76wmvYKqslaJ8vjP9Petl%2F%2FQDVg3lKtZlsh92lhIbPXsV%2FGOyx3jAHQovcrMQr2gpSWg68yaPhtbvFK&X-Amz-Signature=cd5f7a7c4cb473ed349da3bb73bfce14ef7f7b90522c583017ad1dec540f3093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

