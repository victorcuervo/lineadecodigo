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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPFYKLVT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCJiUC2vBydIs5u9nEHcRb2kYu%2Bb4eqvtKA5CIznUtwyAIhAMm1c6tnAFbB%2B4W68SnB3UHxxm4MrmHlU%2BdPLB1mb%2BPzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyYAN%2B%2B2WZUET9paRYq3ANEp6y7jQyxM8aSmXEGSLsFMC9oI0ja8l61so5p0cVjJ0uDqNtr1UeuUsEwJGWxVavEKB8BXeuzNJADRdI2l%2FPI1WuIOIRvykCrgfv3OU%2F%2FKb%2FHalrDsNGnPF2UJ6OtX6BogvIvrDzwtTlUg3zbiBEWy1MvTHN5aJYnX1lcHbRIAE%2B8I%2FzTVXpocqLZkRZsJRqntWBS0SBlCxcNuKb17GqN6PLWILxLYuxcJTxBiaKJ%2Bz2LTIopEztYfTwnn884%2B8zttli9nrtsLcT%2FpZAhJtqiHC77EOAEiGZJkjH1JtPYHMe%2BIBH2IhXDcrU7e%2BuO2Rqmps7jOuI6%2B5gp5m8e%2F%2FmVDqtu5QTVT87Z255quGsdxpmUnD1Zmd3Ni9WbumMaoveijLX1zoKFusIUoznoaYABNBe2uLMX8ksyrK%2B1VGqkubewt7yKSCkkr%2FZ2VtQQayTyOYe%2FNRQL4cXl7%2BO5PUwNklXANcOmFexLeeB88DxOJ34EjIsKlvDyIZD0z2LHysq%2BJ0hSmAASBKmk%2FSJ3JIOfP4WoltEeYSF0H0a1gnhb%2B3V9I0jeaBmdQ6o5AF42GQXOhLB5jwtJfe9vv%2BJGyidm%2BKvkXcK7dpQQYi6%2Bdq0N4ljaSvBlXQVB6bSKUTDglcPJBjqkAV3DXg%2Bdpht6B5CAX6Iu%2FViFkx9QG3YFvbN39GhIjZWWdTewXrFUMTLBAwuNEsOAdhtr9rLRO9nJRpcyUrhEnhoksXweCi5eJPuh08q8fA1sP4Blnyc3nTQ5k%2FIz6XYA79j76sL2MUkdWxW3ec4g%2BzmjcHx2DaZpDIhRMrZoeRecX992s0gX%2BiellYo0wHczij4YYxIi5s0V%2FqHNMhKcsEahoTj2&X-Amz-Signature=7db2f487ff4ac1a7deec09fbfeb833e8f3074a0b40c4a5ba40f296146618f243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

