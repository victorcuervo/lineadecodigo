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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD5OJGAU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEoadl53q9PpEhMlEOGddIXDSOoac0bgY26VYY4KjukQIhALBsMg3tl7sA5upIHeEvYOA66txSkJvbe0jF%2BaF9CH%2BFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwF6Rv7i%2FVyAKUACp8q3APmFiWSXNr53ndlHCwsLQZ80thVoxeTb1Uh4aC4SowzOT7iooVl62AIvJSOa8GX7%2FHZ5igjzx%2BJvHTBLmpCfh5u1M%2BiqxkxNwvVczsFIdNAL1a0TpF2B0UST2MsFORejW63h84AC%2BZkPgXjx30Yr1OgxuzDKdVuhmi%2B1I46ESDdzlRlgO5CZTSUOJ2hQDsXXTqj5oM%2F0qdnueeEmjIyO88QkxxP24EFuIcFdQEfdgdzEKisrSZmh6ulATHkJXBkPVGlmwIJvOybtqs5%2FvsBqEndPoC0bvDXswNnpN0CchAtx%2F265u%2Fa4NavAvcCtIYekfVbE3TLdxoAGAx4xFDxX80SeBVOp570RgGM24e2gBoI5%2BYG%2FQfu5fo0y2A%2F%2Ber92OY8Dk1vZP1ed91cP%2BTzK%2Bw%2Bof3WbZTuTMhKIVRtgMJ%2FISY3Vo6%2BQTv9UZDXT8GlcxK6Sde9Bw12Ekxhm51xjmjAYZ%2BnJXvggyPjsNRBUafigqYIiQLmcOc%2FsjSzfV6INc9iKyWLAu8ayVsxeLqNCDDBbFWP24d6TWPftnmOmwNAnPQvSlJPjAL0T5CLoVQMdFchu7UFjP4N%2FqjdVsk9LISUsYyIZtqS%2B91pkxVMLwbdQgUlpzQ13fhDKOwkYDCYzMzJBjqkAciAU0ZyEKN6zpjblgacEZotKuxxqmORiO43ych%2BgTRjjYBumwOx6yKlLdXWkds%2BQdgYjGY5zXtYCREMbjOc0gCrZdU9S22L1sV8nQuvWWs4N3zICL%2BaaSdj6LP9BgwfzAGSOZXYzYeTmH%2Fzu5AQl2gB6fXZxzQX37DI5iBXqmC21mSc0WaV4oQ8CSmRGMw%2BbtzhVCwLMTh0tI05YlXIVKsGy3uB&X-Amz-Signature=1e5702f32fd6e304eb230f8852f01bbcd5b62a9604abe636dfa66ef676ad09cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

