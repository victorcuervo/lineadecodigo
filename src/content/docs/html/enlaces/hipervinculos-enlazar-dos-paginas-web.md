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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6NVNNT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGUbVNf0Eng5sJXbeKek9dGNf2mzM2jXqQR05Bvs%2BkboAiARPkayj%2FdruyPIxvWPJusleXQx19%2BxnZmYPy3%2BGRmVcSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZ5%2FhTxTlvw4soJ3hKtwDqWWBkHuhF4oHj7KPelNmVFLbhdfQ4kb6nPFBVcg3hbc%2BBbCDvaHARl39zh2Z7CC7nPt7PpLzXfjfpuCB8BVRy%2BuxasPzeKrRt2Ut1iIRCPGNj7PFPMqPQim4id7ZiMd8Ur6HxMGNihBnTohsoS1evCANobHjGV0KswShIr7zz2zYfHrcH8Fyxz%2FrVdgpIOyaf2thgGprdry1Rc4N2aNm6zbSZWXaY4DURLZbLgK5U7tB8Yd0G7Dhi%2BnXZrlJopxI%2FBlPiMSM89izegz7jhGXwG%2BiIpcKyqKXvHa%2B6YK%2BR83wULXWVuvXQwbT7uNkZEQEK%2FU5LLvjnb3UAAYc6vgb%2FljewG1aeVF6OaLJgruz%2B1C4nBolrJCtw5BsJmT5UPD%2FgXYQ2dLvMptoynjjomBrARjYx%2FzfJPhThLt8tVeIZnSLwBAU2vLYGg0okbFeZBPZJGtek0UveJHtIeNBAjG4IkiJJdITIjuFGc08KozC9gXg363R89YgtxvXsoAT4Kj3k97T4IEE9OlVxT6B6%2BG%2BsYMlUIYP%2FCJS4ytUGbyA1AiuSG2NUZyXmDKJmkscdS9VnuQyc4NVbD8NxVVRVS%2F4EprBIZ%2BKFM1zLOQAh582ozIu8c6KFp9jRFP%2B5bwwubXDyQY6pgEYoMcg9uMjOXmB4Ai7ZG25uXiS3J9HwpsdBx7tH5LdC2HXpZ%2FBwGhvQwq7HZZHrftxVjquYZMA%2BC0pdsimYRJZeCe%2BcUuHsoZkWPOaWuh3xtSXMr9niICgMXYKr%2F7CGfhtTZpALg97raLRkq2a%2B5G%2FUdl5%2BJhu52lICtKXVFYPZydY3URLKcSy0sX2ggLUqPnUZ0pRmaw0mqIcQXxSeUQupyQ54HR7&X-Amz-Signature=3a1d6c9dd38406ecc5824c88610a69f49b44f3a1380ddefda966132ebe196afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

