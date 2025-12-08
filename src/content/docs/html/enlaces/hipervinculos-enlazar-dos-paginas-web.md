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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WTAYXAW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVzZTNfamdalQWRFbJ9HM6WkIYqM4w9trGriw9N424kAiEAqDlNqyDh3y71NStjVxEqXFMGpkd9QyJgZL3WD3BJChUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsaYuJWI2S04STBoircA6ozkENxM6l7uvmb5NoKDwTrfdPg%2BjVEj0JtGSHtabBN4RXBF6qvIYnpFZcMEfx1sCsC0X%2FN32WgTTIK2QEtCB0c2H%2BJ1kzOOFd29hB%2FEOGziO9mAbl40EpK4v8CA0Q7%2BzGmbgd9UrKObjGE0ArLePMcKyj4x4jkcIi9bZiv6lo%2B8DMNs5b0Yn2xHdq5917ZwAhO6bxaY9eqmwwjkgQlbUxoqQOrqNf0iDnvK5be40Qz%2BQYEhPp%2FJFCGCZilWZMoB18CO7IrObW1kqREclyFtCZ8kgYhGkvNnnlBMeMD9LgSg6ry7eOgHs8Ousbrf3jCjtpUD7zIJa%2FwexwrB8N5c0chgw3uXogBSXkIc1Lpaj1VZGKnmhyFK6jfY79Fv2%2BsJ96b%2FGvYBteajmwMokeqmIcrhoUXDBLoxMWo0wnPZt%2B3RbGC3E6ETwygkucdoE0AbpYmQ00V6iuy0PcjvN9IYuSD8JE6ZbDv09u%2Fx2wBhDM0SCOI53DBKw41kzTnN2J13kfpmdTDMieEXvIhJ%2FZyuGDV5mvidy6pfIjOGObaWZO8jh6PkeC46lqIRueyFypwkHdriUl0wguylBz2ReCqIppDntkojCz%2BDJVRrNFgu5n57zSo6T2ifQdFLF0YMNDQ2ckGOqUBnAjdoy9CnzJRff3TVt6NuSDU6RIrSeTskyO5g3hBj07FmYYumP1i6zwjD3HT9hCIGm97ALrEgsZyKm2Z0kAIPYbbehZ2KRyNiTg4b2l%2BopDgAbpgI10b0UVSAbq4d2aqO%2Fqn7YEuiPRjJ5x%2BEAQwfTJ0tF0t%2FE%2FFA%2BzLx8x%2Brg151ZhoF9oTtb%2FnFOwmwTx32%2FnU2G%2FmAmDN6AcJfio7Q7IqPnMM&X-Amz-Signature=bc665cc95a2a1fea751a2dee3c87e39521590fee63b9429ed973f58608e8c4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

