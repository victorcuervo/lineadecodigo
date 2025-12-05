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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZOEFHP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh7AbuIsdLgM6%2Byj4wtjrEh6xMRPn1fT9vz51ShGtD9AiEAmCHVxNDtVoDmPx82OFDCxVIiGPb84qLqk9d3Za9sJ1gq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDI8pOV9fT76Hyq511ircAxoijUg%2BmncyT9qWYFlOyW8UX9p39Ym%2BspXy%2F6zEN0uvknmv%2FoQqLvYr%2B6Vp3gpSgcAUplVnY3J%2BMHq49vmuLp3HevqtFIxbaMPrAtut3Tbw3yqtAcwxtZOzReHYY%2BP6%2BNnjkFjXFMEXV7NiF%2BBp%2FvvQoifLE8zm7V%2B6VCVaWhsHoSvdxvUMBmeEM61qDBPHD%2Bw9%2FBHQWorXKKrAfgTj%2BXv2CXK8FQpeYrTNpVIH9FJ9Szpef9SFkfYOA3jErNg0EsdPMXwUdodcVm8Lh%2BNPYxZ7duq%2Bw%2FFZREjUjGlCW57tHk6cSBi0Xxz9%2FGH%2FXlWtpU0tbT1BZXDECjp6gKV7azJqbiqvEbAsPatX4JtV8xohW0ihflkSBSYMIEB%2BLm6c9ZpT8V0Qu9IHLsAF3V2J%2F881J%2BI1tAeIeizhP%2Bc8fK6aoiXf9pjdnIh3qI4MXjLOWl4eP3LoGnWyHs7Euj4NZOHRHfKp%2F6peIB5sT9JAq9BbfhNlzsdNqCceqCZdcjZrbRAxbLavzHpbofYu7YV1bPAUnwcAyu3iDURu8YWKZtzaSVYwNAS2KaQbSTTOnptXGfm4ziKdfY9v7CnQzkIcc966rIMNcsUBhUuHl5U7yzL6bgUYRaIV4e0KYXvuMJ6MyMkGOqUBQlSSyKClwXoELTZOUu4vPBqFH81TIiAVcQDrmbWCN5KpSYs36sih3RG9yyHy4deSZIp%2BxpGzMppK%2FqhCMozVZ9iZGuo4OVZAiLJ9SVSxWCWYyUoOHgqK8P%2BXuGyMN22fHNOVqm0nZNDizao5Ejb8baYu6bukOK0qkRRiMK31ZZtY4wEesD5VEQuqkwkh1VXJkEk7navXx0NfDaeQunUVrGQbcCo6&X-Amz-Signature=e57d65080294b93e74b25620a4380711a71f47061c40ef0e23bc35c1c8739130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

