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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634N6ECL3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpOWGWQjTvPPWEm5SS%2FGG%2BLWDZIi1P7fKdTkHFKq0NoQIhAP%2FZh9DOwv7jbjVxDKQJQV%2BzpUeRP5aIcxUeGx1QaEkjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBwiu3emeUiVfwPSsq3AMP69r4WW5IZQYWsVyZ81A6KDNqWHv35Ih0nbXs6qNPugl%2FP%2B419o0DVpPn9dmKENVeMM2rXzE5m%2FhTuE8dUV2G6YdjolT9RN%2FEqmcNRU26CXkmjdatZrGXTuo%2BDITMPBuMoF2ZlO%2BS0k0Zbjasdl4YZ8UXr45Wha2oNwEvSH8dGAmQ3SPeGh5nL3PEPvb%2FcDieFrcK3IVEuQvI2x9nm92Jf%2BFoxD7Pv19%2BnMz85iRbEjgsYkU8DGAoRipM5Tu0ug1DX7Wiu%2FdM99mXb8xHQltGKxzEt3kgP5gYyf%2FqRdn0jbIDBRqLTRqBXKF3%2B0K5GU5V79vEOlS8RveF8MWFMR1mcSyOAo4JKwX3Ex1q%2FAl%2FnRyaoAc1FlTokFYQqCX6j%2BlJ8tyrqPHQa0WouD7pPhS5G5k3U7XSHuj5%2FwqEOe20jz4GRmilq5bM4lrvQ993GpHJP8%2FFl35ztm2QtRG7Lsf%2FmZkLVWyZjEJ1DZNTEBukwJFpeDjVh%2BCPYFM7hBWw0pIxbhijAo0cMoxBy3JBK4%2BUBh0IevclwUuUP%2BFHpMNx9BEZsi8K%2BlX7h63X6E6vcAesWjKEKqd%2FAsEGgKOtwCWih6vJQyDS%2BItX0u0OA24JNRS5yG%2FG1tTMrm2vdTCXwdvJBjqkAd9DkwTNu%2F5fPXdaRZLFH77wDcyWYxfZuBw1aNlurpTcouHaowHE104ufQ3YgmjT9LPZNAHSYvHm3SxO%2BbIui4uelXDLKVZDPm05PX4IdxcdpNQaGZ40HY3qhhpLZJPzQte6CsyCuAO4B08Jjbi0069wK59nfPnAOm7sN70HfhiAPrfc7t2KcqY54ekzOL71o9yuYzvPquhviv4tUiWqMkJfJFux&X-Amz-Signature=a22e61e495a1360e37bbab07e59eb099fe90fb0867ab5ac11659d89fe1694c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

