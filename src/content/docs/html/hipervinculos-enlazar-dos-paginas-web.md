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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLYB7UT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDXw8TKeDvEmBL%2Fb%2FgE2zGkBHOAvvJWEL6ZvgBw1SJP4AiAusk%2FHUBnMlgwZbPF4a%2F2n428eq%2F5kZPvpA0KSPohN3Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMGxG8I9%2Fapwr4SsbzKtwDxt5yLNRfpIFYwdmhTAh8OCJnv7Px7qr75kO4oXjIIhZNmKphA7kMI1rxgoLsrsaPWlCBQoTH5%2BFc%2FcBD%2BKFPSHc%2FrvBSmsu8fiQUJ6GK4CIzFjQ2B1iPQz2jsA%2FARxj4IIkGQJcMvc8IUr%2F40rRDrjo1qrORWSgA%2Bt8Lrkpgl7ZtO8Y%2FMlvcZu85Da2qB%2Bbp1S5ZGMdWZPhnRGhBVrOgIMRvUFcrkpIXIbzzcOs7v4yVnUwmbP1jqav3yh5R4HyGAEIgZOOARX3Opeo9avFbCEBjvPzJ9yPa%2F2kqnRMK5AogSNk0N3HjrTetkg9A16cTNEXf82FNsj3K4wvT992xSFJ8CxKyRLWfH2znWtKljEY5NBxWkoy3fhBdv7DgA4XleNXroqYXjISzhTmTIYoDAsDBjLVtHy7Sbta3M113%2FkLxDKRc%2Flb8Nc8rzJYMW8TOLwSxZn%2FGY%2F3pENZxozNNqcALAFAlEDCtkoRIE3AIuoQurPVSPUaw5Yo13p6YmzpY2SpcvzAxElW4ATdwP1jndK1ockLcggamWPgH%2FvMsK2MNUNUwe1noYp3ivVBCNmDj%2FxAc%2FKS7sRk7gj74FddaaqrMgQpw9V%2BENyadVZr%2FcIIjjOXwmmWgR4wzgtgwo9zCyQY6pgFUlHN7Np4lIFTN8bnHqjl2RmhzMGwjeToxVOzI0K%2BMnEn9EYj3LDT9xofiOl5S7pbFttBvj%2FbdTfaKbiBb5SU658s39Z%2BTMpf%2FsKxnyWQqmvh7sXhqB9UclGHD9J3ot0%2FcugPOo0miVgTDmpJqOSgg6ThoPkPySJciB3%2FZ7inwmSN2LaBw71KaaEVh5%2BvJJjIOo4R3YymCBuxWpSDg2x%2BjbywRGdp3&X-Amz-Signature=b40040c57c7e5422727553fb5231f8b5da746e94060cdbc93543b7811ee2cb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

