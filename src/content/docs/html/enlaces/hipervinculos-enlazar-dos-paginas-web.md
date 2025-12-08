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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPWFWP3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOHMjNsAFqmgqxwb8fQ9Q2kw1McTb1CyQtlKxyadkWNQIgVVtF2VxdsPcpLP8Wz6oKSHDFy1QxWiCvDfGbACeJqdkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPheVlVLc%2F%2BmFevvmSrcA62KuhT2KZ4k1IhioPpsuYplT0shqPgKgKTv216aMPGcsz%2BJFIHl6pFKmzsm5p9Jh9lLOFNP7pGlC4bp0M2b7Gn%2B%2BW2GLB8qpUZTlqwo3Cg5f9q9%2Br7dwV4Gd2swON0W0GN3hEN1sLA3AVAtF3%2FperoRPgOPXEdefd18lASbfgAHZXujN7r0SdbgEbeEdAWDEMhF20z1OiwRdno1HuYZkeF3S%2FPUk%2FopJMPeBJIoR0PNxs6oXCKeyClwqEH7%2BTN1cPi40R4APJo12%2Fd7SZGUt9KXqkhD8jBmcqhn%2BDuo0SgLNha1T9NIVz1lxKON9f0HZdsCbMxAelIWaV9%2Bvy3za2uCIboCmb4O4Wjw01bbCxtKmGYP2B%2BBkI4qbNJSXyuuMFK5wzhSosC%2BCYX3EvjOrZBnSilcdU5Dbh%2FOadLlQ2GJNihmUX35k53VozZShXSVy2TQiyxUtu%2BVM1zgzwMi%2BNGQvnJI96aHwzbRGe6iP7oamVTntRYdfyXbc8nHqI7si1HhxIWSHWXM7Sc3tK3XWL3cJtfrnkfzTIlyYadSkA7%2FklT0ms4Xl%2BD39zzkSSkWnPKuudPa3wqFUcuektJ%2Ff8GU%2F0uLIQ848mwpijlP%2FS1Nabw53FJk2vy2wZbMMIe03MkGOqUBsvWj%2BNk5%2FVSqbWu0NO5imqrm8xMK5VdAvCsBdhuIbxjmWHJdt%2BznXOw6zr3vz2t7oTtehwV%2BZMm6Qui7OkbNDElRrlRTpY5C5m9Dx71I4tbbtOQSiaD%2BjvtvskhgFI3JDsryLJ%2BrwlYPHRLIPqJwk4VEuR%2FjRDemBdHJ9gNTtWZlVdqhJ5GlYXcwK0JoigS%2B86fYnb5VeFFW6hY2nylXWwDo00UJ&X-Amz-Signature=f2f6e9b825ef57d0efffbaaae1e65875d307e6dda9df0e6ea5836cd52ca4c574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

