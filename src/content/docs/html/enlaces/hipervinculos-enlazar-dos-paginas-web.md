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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5MVMT6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgEaKd8ZxWIRFhfKugo%2BDzC6Vzp1l%2FTpQtvOXhPd9DVAiBFiZKnjY1cADd1UKGvx0P0nnF%2BzxDwZfC0TnTgt9uJhyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4UZ5C2e68eC2BdH2KtwDJyFy0gB6L5iaVqpAFKOZi4a%2FibSMGv7q6O3qKYuaKeoHXZcC7VEviD4OeX8Z9Ard2%2B22NveOff6Y2DJPZ8GW35MsnVzv9RiZuJUxvOFI%2BUapIY10rRNk8a%2FQNiFUqTMyVuWjN%2F%2Fh%2BRshTmkfH2G7WhGg9tUGEXhRr7QMZJ9YSRIyVVNM5A2afIy%2BxPBcQa5YA8DEabTlTAKDF4GmZg6PWrdLI4tPv7c16fDDdd%2B2UXVMvajHb42kM9WbK85x3r%2BQG7ausLW5hmCu9rXc2bga8Puvp0%2BC8FpZEY11eC8HFiNkdufE2RVrdD3VCTdWwO1tcJIdr%2FKqhQdbFiAWrC96GsZ9scGAtJAo0w9G%2FXtiq2ze4VTuPkNytYEjLLnzW0IuodbM0tMF4dqA3LtqcfbUCb1Uj3bN5ezfA6z4%2FRJxpTjMfH7MbGKMki7gm8hUUwzBuAzfOj4nxqNVX3fJ%2Fg%2FO9UVQOd653DZu331Od7Q4Rqv8JOBBodzoeUS9D26WLNiv93OzXypyBiAvFdUqWCtjPAy42xjdVS%2F7xgbJdr3F8MuW50rIxXNgyJnFVtVVzKF7swxQNrwWC0p6MfpYlfxyNDDcJC4oNmsFgsctXU0P0F6MmPSEWe1%2BW9mk%2FdQwooffyQY6pgEjUdv0mmRyPQ0vPCajP%2FoQPvqYUJ1lpL5%2F8ERVMUBEhDeMH3OvHkhWLfUcgnCDKDZHSKOrt3A3d7%2B7LB2%2B4pQ59FJqa66GywZ7ktkJ2%2BMzVrZA%2FYTij1GrrrGP6RDEFFGq3fqNAeN0%2FRwRjGT%2FeXU0btWILdg7TI1MNQBdPwBpgfYMGhMVHqmALvw%2BT9s6Gibd2OM6tq%2B6ZY%2FrHwaPNn%2Fko1yLZ3yD&X-Amz-Signature=ff751a796ace2ebb1a9e7c8bb7d989a0122c776449299518265d0e0c5006b7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

