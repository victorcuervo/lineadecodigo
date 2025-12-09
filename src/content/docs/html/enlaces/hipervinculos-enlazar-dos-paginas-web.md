---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQ6L3VJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCr2zB2qYJlzAB%2F7t6x6qXd1sUQEy0XHHY1LxTjf69ZwIhAM%2FVsuSZf3zPVurKIhtmkHj0K4O8LMNBxkOQHUc3CCDzKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdnHgT1U%2F6aNtwp9Eq3APDwaUEI4PVBQk6CCocY1nYltjHECNv%2FMjHNvdrFWhoTUsXtluo4sQ15QCPpwGCf697ChhxAR8PoflU7xWLlILAzTq%2FxOulSy6epXV8D2vH5Itlxa6fCv4DYUrVF8RqfoV2nn%2FUptd0CCfUGA%2FFlU6IwAEyZT2NQiBNw39orQExo4Lk9oCKRaFpUC9EQ6%2FiJTlvMH9z1OLwtiY8rokfcLi%2FMRm1gGqLeMPDKrjdCzNJn5SR6LVgRgApAFiF6pBxvZyBP0MKxGhwPSlm%2B73Mc7a6mbWR6Re8V9CiV%2F9dhnTIam4P3ncdFXqPaI4%2BUjqvwDXPZqvrp6kVp1QLH0QRmqtN8%2FTG7mQ3E4UPss3akbLAV1JasJBZDG1AFj22HcwuBch0LG9yngdNu9Fnj7BIBggKjye2Vm%2BUJ5LiRaNJKVohah9sDMYADUQOgRk8TwZU8ai%2FpqM8u%2BIEDhjdKaVxTJLUynFDkLS9Zwyf3qg5XLTBLpJiXgZ8SkGkGYADiHbdL7NcnG4ElwqINc3hhW7hUf6JL6gz%2BSOTKniyH7m5a1Eb0fFOw%2B9DcEteLNdLXKsYzU1yeuE0HecRlhQJYQZJlhnZdyqQLiXe%2FXCe0cjg9tcROkMlUtMHncpVEZWuYjCd3uHJBjqkAVGFKCMGsO%2FT8Bur0H4hKDfxauhVdhDA1c8lI5n9AmUkmOhWBrRuzg7XLQyRJD0eJ0Wsx0Qee0NSx1aL%2BdEDePNFvhR0TIizilHHQYoeYqUoopFi%2FhAIi7lrsjs1RHG8sOIX7tOyb21UNPORS45GBpNhHhbEVujttzO0xNBT86bvWkBHS%2BngG9tU3cyUgsTJsy34pREs4AOeIDrmjxMysPMS%2FS9Y&X-Amz-Signature=e0de80adb5ac1eb5a7898e7636cd1f1f111580e00352559aba6a490787c71439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

