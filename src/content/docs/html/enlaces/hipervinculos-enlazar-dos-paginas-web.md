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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAOGQQ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBBMzRQsAoaYGAQ8dB3JqZlH8ooW963sjh3jDy8L2hnAiEA2LNc9SINtSPu8xn8TODV3ZZ12RJC52%2BPa1Yl26Lem4Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJiTb2jQI%2FzmM4zVBCrcA%2FVp%2FrNnIku7EQCMR%2Bj0%2B6iTLSWOP116v1JjmC6jvDeSlgCJLIV%2FeAZ5HZ9NHGC61DLcCGP1BVf7ZkwMbvQXlvUMTQyTgxH10LUXHkChlH7MEg7%2BxQDiWS%2FRRKDTxtYjAZtlN6gs%2BtvqKsXv30A8gQuWN1nGuZNc7gDYZlcJdLVUPOibEYXcFxC1qsDa6TLPQB%2BvwaD%2BqkhBwOII9rV5qNFryiADwub6XAyF0Ia%2BJgmMXqDkvhfr6UV7QQYv44Q20u26D7ilpxpTHD37XyltR%2B%2F97Ib%2F%2FnLGOy4hohTvHk3Xr8vFcf%2FTvkHffHgdNRsYe67wQLu8OZsOPpZmwH%2BawbU3q0%2Bqo%2Bwn6uaRLagrcyUjy4VIF4zLOqOBRXIKITMWo0tvT0FAA8uy8hEZlyr60BjTL1h7L1H3tU08V0vhf6ckp5DI9lGJ8eZcm%2FP%2Fk0SIEbkS0wvs9V1SawjnkgJDC8HR9fPlGe40tDh0RhVTQgzPxm7tVSeo6cD9lUjKfLML4AUqOn8oQobWgmogtYnsxONjNw0KDqylO2nLfiMLLfx7S9lkkLFbHuruJxHLMp1rxmbzpPfQ1bIQsHzq4%2Fpgb6YMu7mSHh2ZbprLF7EnTSR%2FNVaHTgNB5ZNVJDmEMKvKyskGOqUBz9QzS5gcxg8bXRe4sfTZFzbM6lJn45dNLs4Qw5o%2Bv8ZJgSdE6tkY5ICQoX%2BN8JKjiIY45aJ%2F3I0uM3vYRmlb2TZXzh2qmUB62BuEaESAKxNzMlSrCHg6boScvakaAptwjYt8Zwc7HzCJ1rqmDnkTV2NTndr2smhFzyXo%2Fk%2BBgL6SXb%2BNgGlIXsOq%2B2p6U3Mjbn9sNwEoAIryMfEx3a00e68AEe%2F2&X-Amz-Signature=9ca6a0518670d5a52143d2fa1fcaca64a9e06858926d3a27dd7319b17c346bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

