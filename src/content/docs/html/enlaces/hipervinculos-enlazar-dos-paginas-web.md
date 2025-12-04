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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5U7E72%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICAjSX3G0c2tIptA8XUjAzBI1qN1wqT8OLO7VTjSFrglAiB3cRWzuKdGvX61lPLltV85po2tG6sTczVQx5eT4hlG7Cr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1EMbJPvW6h8gNHyRKtwDMrin0fihdskeKRUHxTe%2Bc2EcI7XAuI%2B6AI3VM3g%2BJIzDJAEmHY5T4NWhKlEjVu4v%2FOIRLbMx1fX4Ib7tOxlP04oB%2FJr10xVwPBK56hKw3yPJBmGfcy%2BKZweimEZ90psBwB2m7dnLdFypKYqnfjDW7yVa0nxKW%2FSzsV3whjpYupCRUn9hqhio6F0GwzFYTOqX8Eu3GDh0Tg08t%2FxVt6VgMSQt1dOmFD39eQpcMXTf1F6CceKKgW6t8XfyYn6d6ikrOqdVDwaoNopBpCTZ6RO1G2tAtyAD0e9x%2BS3sxEdibSXknhnWQXkkgQHUH1%2FQCvrwlnAHt6Ye8%2FOi09%2BBCY3Ul8azFWFJ88Wo6%2BAVLRHFpZag%2FdVDxoHS3fLrTJqMiRPQunYZ15i3UUnG4AhDeKX%2BBqdHLg6z3aEpulvm56l3ky564weEBXefacIgTk6BEp3T2UhT86I%2BeR2APe6kYZtsSYF8NPTKeZxaTyNp5ZGNvbJQljSP6jP7hNZ5lpglUBm5lvxIJr420eHPusg9jALKP8SI4XAmj8eAXnPYUT5bFNPgN9vrZrN1XpIwFxCybof3Ck2JY8zF1p5%2FvAhA59tu321%2BWDzizc2B9QgU30c3zcdF9PnZp2dFW%2FJ%2Fx24w7K3EyQY6pgEBaKNvQT5ydNvuQ9fnoffOo0jq58jqb7ZO2maMIy6Os6%2BOE3N5YFreCkkVeZ%2Fwvvs8chEjo%2FeEcVV96vpzXtlUjQdSldIbdwp2PVElg8sFdZxokIzQIukcvivDjeT6V3w8TuzFKFTa6p5jb82sosLHCYYHee3hwJqlR0HQFsRcsgowr%2Fb2jiogBnImLTR13pbkdfOsufhxfSxT%2BHOQhp%2BKOTWku1sv&X-Amz-Signature=05420fe5079dd4c04a7690aa96f62023d7675bdc98841b153ce070070c183ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

