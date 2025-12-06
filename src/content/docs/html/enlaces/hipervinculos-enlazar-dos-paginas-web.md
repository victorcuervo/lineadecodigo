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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQZJDRT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXFyNkpwmmdLuLOs4gdHm1uNwVWLmzz%2FMqcPbsvQ2WlAiBBwLTQQ2%2Fu10RNsrYNVorCY8LoUPvTaxUZPpOJBYcqzCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMUKUrH9Gf5jZcAK0rKtwDE6g5oFU%2F5RT04TP9b5Aw3bwv7hRX0CrdsAETsbV8UiRJwABE2oPEHIeLu%2BSnR4%2FfJYiyXiRRcudVPuBQWBYsQLx7Fy7v8PEu73zNZCReCwsTz6GWg%2BNGUuil1vf0%2BO%2BKzmtXwWS7qTTkUGtYQBabSEp9Iu6l%2BLVmzOTk%2BWpm97Kc10O%2B0zF3hK9uPOPbQAq2nqsxO3ohax%2B6IdCRSpyzxNELxaR0ug3D5ILcUKKA4jwEspI042dlCyf376WI2ZaIYNONfyTqHWyV%2F%2BcKD98kU24%2FPPlwC4dTkXAhtbxeLVIk6k0FHYsEdbhQxgVDyE2zCxRUk6597XZDOcVkapvSK%2Ffk67DvHi1rMBuOJLRbJi%2BaT8p4nqc2dU5HAevTo2B1%2FIG20d%2B4wBsEOcbcCURbpk3LW%2FeZjE2ugP5AwwazFV24y%2Bo7%2FMoww%2FNvn6zokw18rQaG7lisi8YSmn0scH4FeedF7kvfPR2uCoyJ71XTjuU2TkmcUr35qQ%2FC%2BMNGdYUvtk71Cs8JHOzhBVtMA0WeUs8c9vNHilfClDGjqHMX%2FiWTbWF0%2FvIhiZkVqEY69MCn9YFdGxqqLti06NdClfETyYSY0xvGEAIUaQaOw0B6XfRL23cZwIlAjUAuwTcwvdTSyQY6pgH7Auj9QLSkZHkfe0QdHW%2FWaC76CpQz5XaxvsT4byQOSI20ULI%2FR55oGEF0uFD3pU7GcY4zFSmh5CzX%2FX8K20A7As900su%2FlwDEJI3YdOL0IQMJS9kYdjcC5dCg3mstCtceD0pCJIO2zgmNr8QuEsjCDQi9SS5kog2%2Bf%2BsFVWpanE%2BfX8mf%2FKTHs6GpmeG58xDvdl%2BHT2L2TihIy5dRq0Um9sHuORjK&X-Amz-Signature=99a9f2afb30fa47e4c21a4d8caf3271d10485f4269bcb48c67b5277dab96a041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

