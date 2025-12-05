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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXDMOAK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FNlP%2B4jBNK0EeKI7GZF%2FAzT0h6BnDkt1KKpheKruqXAiB6dTMoRyVeOZwb01WgiAyRiVAK42o07wqasn2tvCZwTir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM6uzoIMHt%2BbKYYXqqKtwDiNPFXSSOFLlqE3Jz89jUXnwWINNDgp3%2BmionqWxKFyS83rp56Q98xCMilUf2PJw1WuigiMpWveZBL0ukpN7huyUc1cba%2BACT3AW1X50k3Pwi1MgMTxAyarlYkLRHkXOVuebt26L3zjb06Q8gi%2BVvumDqL%2Fa1T1TtZksEGX0Wl74eSiIhqONxOMkXSCj2oeL3jnUFy%2F6nHWbJxIztLaLB9EYtBx2x%2FiXiA9aZi2FbcXroexE0eKLkIpKudzad9zJyAZVU4e3oDr1GGi0TDQyQaVcqKb7kQwU5%2BIp892K%2FICq8QUWtZgywWRNe3OEBPItKX8qnSLHzSHpr1P2%2B0eDOXMMBuVC1PpO83RYYnxTdDDLao7bXodF0mfYu4jSe4Q5XwJIAgc2DC5WTQUZjY1UNDkTtNFntiB%2BlnY7RVzj%2B4x61h8CAhVRySWOjQA%2BSJv%2F1julR4Xa6oFKW38V7a2NGPKMPVhSqjQg%2B3A6YfASWgQVTpkoVQXpOQpluwrseSaLUNSPXNqmPhSH%2B3qhrW91QW5G6KXeOuVeSVr1zZ0Mr8%2FBtrLHgLYzXVvhc68PquBJPKS92GnMqKR3WVxMFFIrCZ4TCPmIMevBxCwXSseM2jqs%2BpbJoUxaCYiLX4yEw2MrKyQY6pgF5YtFvaRRiU8VcrwkPFZtxsYLYR0zc8XyHeA845vf47SuQu4qHPUKo5MwoCZYxK7bYD18RYiDg%2FQPfs%2F4JMU4NmjKTvWsHevya5HECr7uVBh9znEoPeRgymaqiZZcTj1bWPBIIYFMFtYavlyHvX0bLSSDfz1Y2L2KHb6ng0aRK0ymHzVQ3AUyP0O92lsqKxUhaQNAhiugbAD6lSpUuJwTWW3gk1LC5&X-Amz-Signature=107366ad2ff75079e78b4eb17c997f6335cd663d038e13b291d85db14ef82ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

