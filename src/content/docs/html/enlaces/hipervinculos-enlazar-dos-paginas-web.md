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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PH5IWFK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIATQZP%2FMR5q3kghksf5IJSlgHQ5HCuNYBJfrNlKzxRuhAiEAvVYjncUD6u0Fs2fZRRjJU14Uw%2BezhaAqHhgWof9tAU0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDII3dz3Ak901XBN0kyrcA5gcLOrVa00iMsSkQASxEQ1eF8iCTuj6zW2tDIqVdTm2JKV%2BZ8RVaxta73GEhAe6xuwoQMp2%2FyBWWOMdVCzTgFyYrl85X%2FKxzHH9kUd23yu5rikHDYZVPoWGCSNeaR53DJgXStWdZi6LAyW3O0uSQFDvQMfYvZuPh6GqdGhCz0ZutZmduwOTK5eDBcorabRa6G4%2Fi8%2BhFHoMhZcsYrgwwYRbmHUpOjK7rVCE6UivgcoOFNtIcZMoGHOL1yWER77zTP9SgLgU5cCEHtyrL8bX5gqdN937sRAj84PGIUQwSvKF8LWErNg48QAhV5zt17X2818dfQL%2BnSB7fxo7%2BWEWM31Q%2BVQNG1XeYAdhbQEtmg7x6RF5cG9jHlbtn%2BBdKS72WfKzPBkJN3gTiaO7bn77UOA5uRVScR3cGnDMD2N9R1klBZ7ALd0zBtqJzQY9UIYPzHPecOD7Md7JntKqYaAjnAgEtmfF%2FM0SHOaCLcw2AAJPGA8Sq28h4Z2upSwu4c3Hi18K8k%2BnJfFaRSGI5CG5JCtnLQCrs%2F8bE1zsa4dKGT%2BzqlpJ53ZkQQ5ZnFVqyraOs%2FgZqPWcrs41mHGlP%2F1ZYwd5B%2BJTBK2E4Lb9luOsrhSv4Ob1YocrcDWoKcb7MLauxMkGOqUBB64cEpyu0c7SzmNkSPhKmTUOYJDUdyfUNX4nolhGF%2BKczJBHHN3d6WXhfjwG6e%2B2Jht2gLdcGQ42lGGHMUJiinXfIZr90woTYMU3jju0oXRELIqG68FaVppOSBmjskfuFOdwBSjJrPpR4zELA%2FQcqz3k1j3DrETJMCWcJTELeXbRwo%2ByvTw5KLs%2FJ1c%2Bvw1%2B%2BGPGvgZoxeIFl5qVSnsy7pprI4Uu&X-Amz-Signature=6a98529d502c38442c156261ebef8cdc4d3c701240a5c72cf4e71d2a143c1eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

