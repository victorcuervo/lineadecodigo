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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFYMRWH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCisTNiTzVhr3QZpMj3%2BCpbtKsmweZXlW%2FD0RvWI6iS2AIhAOQ7OPLJdtQY62oSXyP2Tw44mWjPleMWP1qjS%2BR06xixKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6t%2FiQsK%2B0YQz%2FDmcq3AOJXnNVn3b%2BYgutz%2B0ZHK4RWqsEF7q36ywm0hUDWYEXQtrPU3WgMnflXMs%2BFIKp2deDBKmAohN7Bsvm%2FnNWgmC%2FDbiPT4XjkJkuGXQUCv0LEIKee%2F1eLvzP0gHDC%2FJCYQJpw04SUi5HYf6ZF%2BJO2XHSoGV16CLuxzw9rnAe%2Bgnrg5jVOt87EfqlPJjLTgKSyPTmBz%2F0aArQLQKNRgReci8787d80tnJ2YHRDeVljMPR27UZaClg%2Bmpg8AHuzUx34EFnAg767TqbT1ywIgxfoQ8KFwp%2FB7Nv33pIj%2BbXk7zcaICvfH6mpmS4Kw3yljKaozuwz442kCgks%2BhKcS0xmYA9TccBoYFprZI1AZ9D0M15OYPC4c0AnQNlx2p7qED1y%2BAKL5CKxjUN5fJXqbHeZvHOL75pqLnAIOWw0GDLHs9%2Bwt0hQOZI31lfQOO4jOB%2BWQcPVxujglaVjhYivbT244ezqyu8akz8LSZKUXrBDPffl9Z8uoekK23iDsayaDE5%2BWIG8lOlhYsPoyBHmda06U%2FRB%2B4zfzxCP%2FuWkHT3FVZIUVZPFyWy%2FN%2BHfrDySC0JcgLwXJJDSRpXrB49rkXbkoN988W9h6A%2BOOTfFqPkv8faOcaS0Eaft%2Fha%2F3T4ujCrndTJBjqkAbkbdp%2FHOVN73jnUbqLX4JkMcs4CWb7Pl6yZLbqecBQFs1TZO9bSVTFYQWKxnUUbhItlmYmNiXqWn2dFDkMoHgPWHAy6QE7Tm0Mq4Q0zCOTRD61Z7Z%2BKFQl%2Bpp8RaCH7nFUTEgAhJS5rtFrwWiz2H%2FOjHg%2B2e%2BeJR2Yu8UoAWVbUsrduJ5L2VMFPVWBO7oQkKQ6q3oJ77Pf7tBlV8PZuHPpKRb07&X-Amz-Signature=0cb46577b97d589ad90fd4ecd2da3159ee065f3810e8a9e4dc5a45cb5c97a996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

