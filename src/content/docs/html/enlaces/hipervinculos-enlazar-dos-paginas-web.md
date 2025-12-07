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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUWC2HE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcsutjAvSmRxfHZTOchyXfuKDUqAvt1FIVUY5Uj13wGAIgb%2Fd2qirCNZdDYVIns69%2B9I28gwwp1BuU1L36e0bH%2FKUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWm%2BpWIBKxm9jv13SrcAwgoHFmyoidg0m%2FEOMTQqvOBPN4Z876WdLHGez%2ByS%2FIBx6ughL%2F47LGIcE3vW2UpxC0zdcayqO1glI94UPvw%2FoN6qj3rCCOdBhevrfc2nYr4x5GXlyvlJl5GJIh5xFoRaBuFGgGVdD%2BphWALy3kC9f4aeTsbwEylzdlOcQAOFFySs%2FBzgQPqQkQsmBhO95MephsNN41uWKf%2FITeUvhH4NzuQeUvBjMgyGhuBjZsYB7PmuOy4qtJZhhtY%2BWb6XLE02VHQzHZkw3qXkuEdz4fRG%2BiZsRrWlVOZEZBqanTzDnngBbgWthqIDZorRCLdChhjpxc0jBw3MQagiyuJK2A%2BEZWMQaWIRQbIczV4EvlS10w02P9P56SQ%2FaYjPrSunlzbqhP%2Fi3G%2FpmNW9NnhiKCMHw3Q0DUV0Wgku8D%2FdA4gQPjM2b3xVXoZakuowy4tnq29RIbG%2Fxqkx5YwGqO2n6PqMTmhzAqbkVQnkIZ0dkQQFOw%2B1oWiccqm1f5EAYR1Hr6RHRTE9ljXV6ZElfbhS2OFODgI6DoOEE1MNcr08xm7wG5C6%2FOmrgWLUU04qa5zBp78dPmMMTnFgmfl89NQ7nUUIC9ueJED7F5GJeDnEDXYoXJlQKaDA3Vr20bchjzHMJ%2Bo18kGOqUBnugeHEpXawdm%2FfcTRhLbjuTf5SkybfmqpZsOShpqpaV7CYjZOUkDiLF%2FbPZ%2BVU%2FoW2NhJNJLW6a1xcKz0%2FXol%2Bwj2qtvz4gtDqUUfYm0HywLfjBJJ4oQ%2FMCVoh1NzpQ9p4bfLzhGkz87iLgyl18aZ0N%2FJPQ6zvDerbfWYy5QxN9JjZmBv85xAYSCf%2Fpfmf3KU0HLmF4XmQUyNJaZFCd5lSygReuD&X-Amz-Signature=493e763198b0127a18316ebffab11b59d0547d79f3e2ca512024a30b93497d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

