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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLDENX5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIG%2Bw4HNn9cXXQXDpt2jVlOq%2FEv7yKjs04NDqJfAH31qCAiEA2Pd7LlyCrdMBi4gDnE07tIKh2c2o1SGHxNSd5%2FAtIuMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDH4lHcwoUyf8I8NnCyrcA%2FHXpaRJTSLOfxzXvkvXxq64L77CCKBkRnp9r02db%2BDuSiZ0ExvMFUwxKlnXEQu9Jf8Htnn1PhL8TL5dbvtuVYJnOxTNrvHUPf0VeIeBNlHfz5q212O24rJQTiOikBc%2FdnIp7mVIexhghGxT%2FYbzRDXl1iqr9y8BTGlbRqwlqQHanIsHRG63vJoLKi23m5SEeJdGQAekcnRKAA0oAKgZTykzOZ2Axuis5ANqGEwmMnyuAwYso6fibEgklMOxLSCTobxIdwac9op2jK4%2BmNzYc1pML2ZQ2iDEmxNDYQ6YfVarlkueXq0ymql0IADN3NeDXQdZ51kXkGjW5G5NTjtQNJP96gAfXkgczl%2Fka1svt1lAHVmY05p5tw5Dkvp68XYne8IH0v6%2BnSl1xCR9xWuWEWDax9B%2BmLPZ%2FfJx53SGNamti%2BDev%2B0sqsEE0YljaBHCzLsV4ApxxEzTkI5ZA2SKSFL1aA3Ei%2FkMjHS2Es%2FgTAbXgUXkkTWZ588aHGIcdEOFIdyllHmMrF4d1t2tm0W%2BxmL1JHqzhpsoJ8qFJi1fucoCxXLX6cxZEz9vdKYN%2FQTnzNariVVDo5Pgbb07FNzAn%2FeO0btzniMFzM0LXg6dxhMAxzPVna7t61m9yf9%2BMParxckGOqUB5IjfhYI305Jr1ywOc2i5dnI0e0bNLcl2vqttdHGPtnch0Y5SU2fzaIU50m6SAhGEpvIwd68bHt11wk8T5DpyoDg2L341hw8jkuiSBvdxzDHb0hDR1C%2BWEszjEfp6xZpFjVZKPPo%2ByktFUGDQrZjDeM4MQOoJd1%2BOhnYuqBcvaXV40uHUZL0WDbJ%2F%2BMpB%2BOEELOG898Cr%2BzEf%2Bcr5AQtmIV7F9JSr&X-Amz-Signature=e1ec0a1f324da6cdc4759ae803ec0c1abc165a3e28b79c81c8023e507c367480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

