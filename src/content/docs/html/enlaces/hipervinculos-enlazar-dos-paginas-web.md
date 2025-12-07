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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU6QY7A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM9MecpxTWFTQsEOzQpYEhhdqaBupCWfqXA1tGvXsptQIgJnZVhjFe%2Bh7EGxr1U%2BWZg2MHWZ7gUWUBJ42k2wCloGYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKGOtKfHnEll%2B8O3CrcAzKJ2NgU7FYc4dfq0iVnmzUbsJfsVlH%2B0DRsX341AgFNFkr4D%2Buleh3XxOQvnKhS3yUTRLU1apjUPjbEAgnztdBrwUBq8DUwyH7J%2Bc9LyX35%2FQnLyZYQeCbdF7MqQFusBxlsJmdV%2FAiqyC27t2fOAnRamNV7vBUWVC8SJmnwUSdTBRrA7Nj6H92ndbApGrx%2Ba0WwD%2Ft0jPZ60STLRIi7MiMxOAB0uo%2FGZT7yubbzhawjna0PI1EEAm%2FPtw4ys7hakmT0dx%2BvX3ORQpRJGiT9Bv0qqtZJixteK6sWkmpW9ZiFUovTRGGk5H%2FJrxvfkJPTQfFkksnLrYiWDFJwESZG%2FpnJAzsk7yzai0ZZIjr2lRceMq2LpiJmztU0JTLDD08xklpkS%2FDJtGIy%2BZ3eSoV3WZpjLKaPMr4JIhiaprm0BUP4SIr2gCWIo6kV%2FTKRrvBJ%2B5JaG8ceYz6peTtk1scqnpUpdqamBvoBxMmr86Q4bqJQ%2FT%2FU0z6x%2BcyYrIEEhV0TNc9GR5sCe2tJCqvTikNNzrolBa3YxHCBehffgrIRFGmbsy%2B%2FrIfEZm9DaYqiNtnOwhX0%2FuMfXl3ZFs9ew3jq%2FEl4YJh5FHcpH9hgji5ahLClcpXPyE2mee9TBEFuMLD%2B0skGOqUBpd9Rb4jS0eO%2Ftsjzo%2FU3v0E7d%2BXZsAb7LJ4sxd57TmP86z7s%2BHLHMf%2FtWYLwGC0AhMxyw6W4ssc04jpw0Da2Wi9zcsJ2Pe0m7ipDBqkSsNdaf2KG%2B4isD7t5rbKf%2Fu9MntVPfA%2BIsIXwS9kcNXFTUW84ot5Wl1ImnOzWNo1S31tZyQJWmsJx7MxmMlCUHoXUF4dzQtx65W2bLEXf4UHC4f1J1QM9&X-Amz-Signature=a730cf96aa25f596e07028ef4023cc05b13277f37db63b5c83c5542881855be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

