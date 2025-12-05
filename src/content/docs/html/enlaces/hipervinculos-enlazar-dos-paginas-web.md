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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3QGKTW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3oFO60JDQnBiVFn35EeFoYmJP1P64SW62rKrE6ABVnAiEA3K%2Bruu9NcQ3VNQAlsGn9SLW%2Bsl5Jf9Q7CNIBOmRqXjYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHE9E4hTAfrYmWFM6CrcA%2FFfDV9siWHKqYiKBUkWeQVMnozg3ppo7Qls2JU8xXfRUM3384dXmFccVWo86ypoShs4flcowAKXlQP%2Fb%2FR%2BXFiNQoStnHwraOIEi7m0mSOmWMz0Nn%2Bc2PlfF8n4sULmE6NEAAbMRB2%2BcqPyUmDIQUNXDp6P61gTu9KgFw%2F290xASkKlZyXh7yoA6uBp8HVAywXyQlGN%2BmM9o4AqVSAcKXgfRUFyEjbw9HfPY7BQhe5JMN93U0dnfsD7uA2Kd0mF09TMihnhn1%2FaM4t8dkiSutOTIFQ7ITL2t7q3czj1LJnppKpuLPVg0JQAfpXwSWsKlOxvlQk8HP%2FHsskFrP4z5BuUWd6MDY75%2BX90WkjrErJTKN%2Futzb0P5sHbLKOSsHPR1B07%2FP1cRCU36pou0zGTFAB35n18SAUynva5CHOSpcZKi0CpVmk4w4UVk4fdhEGIiS12SKEfbjBxzBl5sqBWWhQJfhI%2B2vKSN2D8qa7DBGg4CfSQr2OgsmsmpyF%2FFK5knrzDgmdUlPFgiIzbZs10tiSMZIMLQctAmPPfYplgnKdTMMiWrd0ks7gzMZRI%2BiOS%2BRjH%2Bk%2BVYPZcYtaf6UAheqm6t70l7I0SLz088CtvvirW4toHotL%2Bsy6O2SbMNrJyskGOqUBFj3JQMtfpCWZLa4NZlgDQLUmG2JjgnKbZRxYyHtQrMCCVUPIO5t%2Fy46dIQ3jGgxLXkgey%2Fbtyal4hthOt48Cf9L%2FBjXibsDWIxP8pwHgN2L2%2BxNhNQTotnp90qb4OWmsXdDuXEd28lqUvAc29NJWNk7Y9UQophuOPeGel%2FiirHaGFJKYf3UUi3zNglkPJpxDBmdm9vE1YMD%2F0vf3FexbDNAddVjx&X-Amz-Signature=7ea87c0f1967a345e2d10cb7980d65aef532fd9f59cde656c47ef40555c8e23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

