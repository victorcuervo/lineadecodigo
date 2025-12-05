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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTJTRPJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAhRGtL1Qw3D9kqK1m%2FA3v%2B9d92KVYb1leeRSD6zqNugIhAJ4QP%2BFqDR2vGW1JUERYIQ6PIKUNkf0QMwHjqI86%2BjvwKv8DCE8QABoMNjM3NDIzMTgzODA1IgwV9omN2qGyBSy6goAq3APeKJ%2BvvqDNtIk0JBy32myO5UB5iBVyybjaesDesN0QinF8vTZWwKPGhrqFNZA70xufpQLibJpSBM7zGGKk6NMtqjv84O4vIYKXQwv8iV1p9X%2BaPxb5vqrrsq6yZiNBw%2FPwCPveba95dbxTo8L20%2B2JP9B2koxCy%2FfYOE0I%2BG71UJrhayzmXHHWg7Pt5Fn5l1NN6wSnOaX1lnvt9hx3R9IKwaOfWWaPvkm3bENbT%2BqDvkRyoHy%2F4OF%2FD8J8grQkhBupXP8NJ7UIyuXTpWfON7mqiN1PKW4fZtVXrar9H8thYBCgXR0ZQ%2B33gJ7%2BLeK2TD%2BecwWtzK%2FRhyqyD8Ku6gZm9cTXdyEXo472JpjaArYl8CUeC6f8LLsaN47X2iUj%2BffB8mS5SDjDq%2Bfnxo0FkRtHFL0G4YPoa%2FK3QQ6QUk%2BStwUPHnv3DKC5LIMYLMKmcxjHTIIJ5DRf0eXcnExrNV1W7vWmQeEIjhrVC3SJeYWVQKZ3%2Bbf95wov9lPuOiG7xovQv9DFZ9cDZG%2FsJIBdHS3zv5XDj6OXf7UuBkrLokuN5hh0FhpwgqE7rnB1tGb%2FFEE79O5Rm%2Bs2ZhB3KtiEE%2B4mEBePigQz2OO1h3Pd2VSfCXM%2B3b7x4n%2BWTXy9ijCrjMjJBjqkAVIj%2B7z5WLJzqq1AO4NRuzk%2FqhRwn%2BCR57MDTAqNo6IJVcCqw5apOpQ7QBvSW6Z6bFh%2BaLLdhCzC1yzMAFAWj%2FQz8mckZ4P92OlXclNwtKGRcfrG6A%2BLxUaz5rscMjlUPVKUAvzugmeOKTcdalSWMm1N6tgfouRbEAbKB7HmFkrxdKx%2FKdLRrBfbjPeBv2hB%2BsRWApMQhAPienyBWtIeQ0z%2FGVyQ&X-Amz-Signature=5efb908eaa52a4ccd94e4fc4b92d62374a7b9e191b0e2b72150d6793be9b94b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

