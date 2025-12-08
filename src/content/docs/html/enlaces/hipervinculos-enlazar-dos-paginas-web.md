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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AKPVYVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5VvVtWbVO58JgGpPKImyd5jq9EvA1Zk%2FpOnslkXr2ZgIhAOVmTOH0BFlF3%2BzSSzQQSIe5NX1xyNgpGwF9ftyu16GRKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziEZkU%2FW0s5Kcc5y0q3AOO8K%2BC4sTn7xD60JgLnre2BBeQM9RBYyPYFMxix%2FL%2BUmFX4H5cAsH7hZEjqI5LeNyNzfxzH3GEf2a1om5YOsXokZKkkaEPsFcWtbB7I3qlAzZjnGZjorYw5pgl6PMjaWD51VVdo%2Bxu6MRosfRVuMkodxjTqPBDqZAMgQ2HP71C3lzehGFFdJ8FBdQgAsqALTQZ6q2fXa%2FVDfRUui1yU26MLvFCji%2FNBi98gPdtS%2FlDsZ7MagE9ZO2fku4Gsi4CEMq0cdVcn0ZY33joRhh4cEI05ufhnQMQPWeApUYJo9ho8eyvL37kaAk4Ilmapno4QXK0drg58K0I8Yte1LBfulwxtYDw6Q%2Bz48J91yX4%2FkPy1%2BKnd6fRAxrU9RZ4leBZFoV3kKOh8i1BB%2BcOFBu1jgAW6VeOrcL%2F4Ru6zD%2BX8OrCA33Zp%2B3vOvPA4wxGFjgBAIz8KOI4sw1XT9ZkwOw%2FmM8msk3AwtnHw6abu%2BWfdOmUFGpIhJZzdXanJ2XqTlVEe91q4HlHaiElwOLZ%2FCMQfVi6nTnz5w5UUQldmZEU1KhmP6Q8asQDDRPCftkud5IBHz2Szgoomik0RI%2FiAPHwKcYNTILN4gMRA7AjQK%2Fgy2qqbxMJ2Vl2WA6xa2o9TzC27tnJBjqkAd7gP3iVOp7dxUhhZ3ljed83z8SfLFhlsQXi12z%2Fo6vkz4HfO27u5t7Mm%2Fq6ZSuVBa6DLzSfnNcT8jHPmZga3ligEjINTsM0%2Bmkr2Nfbo4a0eLCH4zUe8zavloIFQz5MgT8mVt52GO5V7Q%2FigmbbrB74Wdk4SxNimrPKQ5uG7X9adQFfvs3xH3eLRS%2BwCeS0z%2BSIUcRJiaYpukIeRWhofVsOylw1&X-Amz-Signature=20d4af7a9c6886099e1582467535f8db8cb2006073e7b7da252b25e1793a6e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

