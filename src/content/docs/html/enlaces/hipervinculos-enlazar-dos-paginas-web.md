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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTRRGEE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFG%2FP7JuQqAihjqnD5x9gizUdrRTHHDqR67NWwDnnPdAiEAzD3KY2D7pHbZiN3rLi01I2JtVgqTikXwsRp4oTxCIiEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMx29ZVlhB2AYaMNRSrcAx0ZxA5uYLrhTyG5q9vwkGUT%2FMauuDFRH%2FlPZ%2FJRMmgrLxBFXdlc%2FoGJwnT5m7msnSKbeioFVEecMLmFSoTPJM867Q0RdwOALdsca84wLsIVxEiX8BJc%2BEpv4LyskHVYQcnntg8gbTFzj7tNgodfhGkG7x7dlwInMORUaL6x%2FYkGb80cCTH5TnPlTA5XDQN3%2BPqdzOQPr%2FhyVeEfEKWPpQJ3oWL8nO8Vfc40HfTShjmH4HUll9ggqAB6k%2Bke6eQIcqbqNH9x%2FreLIRBgw1OFpGWI0gtzHCRDSVOwotr43SOV9Ui%2FDhGWCE5xIR52SSAYxcvzcL7zZyugvbSkO2mdfUrHdZR1fqHy8BSPYLwh%2BTg2o3N7pNKbqUK7dtWaEBbJH%2FYEVV%2BrRmvMKA3YNIJzZ6cv6UlAFX9iZ8%2FAne5UqNYdRCP2Bvetcv2z%2F2%2BlEsB2xc2TVplHXSHTwEVJp%2Bo0i9O5LX9NP3hpgUd%2BQaqV6TPx7mRQAYytNpXlyqo4jxO4MUeD12q2E8CXdnu9zHuLaM%2B6GPCP7E5EnedJi3qgmpEj2B%2BXm54nWanmr8aiDQurW11yvGVnWqyO6ir6MicP%2BzvSp5rbm6vl47mduPzYbbo%2BEM2TQYh8ghsKXduXMNetyckGOqUBX519B22q6RXZR9Pm7bvemSMh6vYTftvG0YUG57O58gi%2FTQWRI8%2B8wcaEvISdrw13%2B6SR1heb7EKY%2F9L3TPI7dEje1GV5H41%2FTs0eDYDw4xOC3S0m7UDqpcJldClzl5LZVb2I19EwlcxDZOqfj8DCCLNysmoN7fOSMXCFXHUXC%2B2WTZ8x%2Bn12uYnc5JORhDmI6xXbr9GoEwO2FeMG5PH%2BhNcEC2fa&X-Amz-Signature=171e6d7f243d6358f5d1e5856ea0e68ef3ec06d2d4fb027a145008630b1768df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

