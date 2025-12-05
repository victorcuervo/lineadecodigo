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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMX3UBJP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCBWclebkyYtrXlud5CoWVZQ4J0x%2Bk117zgA0SaMaJdgIgdUWqoVZb4v1rE5OCrZiH212JcM%2F953XL64tGBHHTdx4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDB%2Blj1R4GiadM506DircA1U4oRIto7RjwQ5daP7TGibaNblgr4IUL6OVq3skUlAZCNIn0fu8LDgDz%2BS2ejIAT3BDZI1JmBebsTWN9PmmSE4vk0qdOmA5Sazx%2FPwYesaViBYZ0wGGddB65T1%2FGgYWfD%2BLpi3jPkOi39Jjqjyy0uMAH75clZHB0xHrzwsQJToG9bcwTp%2FOr6G77EqB9h%2FvSCTWZJvAwzfsrshaxPhcm8VoL0cGKvrdzoA3UBsu1wmw1C1oD%2BW6Dmys6aWrnDLN%2BdDqCPIPtT7J6rI98yLAbWrETmc%2BGhyI3XsfQ2s3gLpTR96fq4FLKNgcp1SRHuQCqJa3MT1IoeEaku0tcSipQ%2BZBv%2F6SXDrEy7wVG7b35KVIZzH6lOH3AwaK89JiIyAKTsdHLkJvdEc%2BI7u6u4IgK8sHlV1fFqdR0UkmzDVsA3GYJrZ3kcp%2BcwkLcbsru8DjeTlRpg0ulQAx0Id0j2WnYMSA0CH%2BYvvaNTHB4x4oq2eAvRl01PwKPCCWw2xgICLfxYRGp8cf0fGxMPUW%2B6xHnOVyfCY0Iun3dOIVf4S3f2t6Cp7uo1YbGCAQB9tgpU4tjzyztplgu80T0PO2Ea4idzjVJqAE4dDsEV9pOjOYpVuKpJOZnAYsTuHmXC1vMJPPyskGOqUBmHY1QRgtBztfgVThACXep9Ds6JiNJm2c2QWTZNkrCZ41SnSzgreGgE4275LFo1qOFoRjMO93h0p3esh4vnLLmBpmXeTDEUf4rbGNcF8uXKfb0OKT3zpfK57X%2BFCRurhiowTw1TLvaP7jipJ3MG5t%2Fpclcx7a29Tr1ZCebtx5XbRN%2BMboHykuChLxjq11mCTDuu9ZBjlRRKERjPihBfiiUXCISaC5&X-Amz-Signature=2387d022c0a229fa07b71fcbfd19de7015972ae2811568e70314440d351536a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

