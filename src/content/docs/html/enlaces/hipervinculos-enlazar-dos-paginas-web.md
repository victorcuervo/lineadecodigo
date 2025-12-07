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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRPWMND%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQQcRlAQMeY9vE3ib8tQaF9pqXa7FhWX8VG744WbrNpAiAO%2Bz%2FNrcVomBuHmk5zEHcmvHxJjfDeXoWe2lhuhWQeAyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkzGHQ%2BWfJkwMz2P2KtwDo8BRYpc4ftVd3sRqeZ9nPOhUKLgo9hKbXSx1tiUPcQJUjJ2UPfkb10a9rSeVZQExXyfnC03Vf6OVFUBJa08Y7yptnKgaEs%2BO2%2FgL9P40o34%2B6yEGdMt3VO4F4AoxUT0lG8XdzaCVN9Jy8D2w8UAY7zfL8i1LSPABkO0%2FQJZ7m9gacOAUk71M1QXWHOaFRI7Wq3CAKP4feSNEr1ppG0n%2BdCZq8CB9kcaeuZRHEMTgOlItqZVwAI5TlDccxKSCD9pBtjZnXdlmLR6NvU%2B%2FlNwymW9e3PjWJF9RukG2ZBu7QLGGyGu37tk7YCkHDGG%2BJPc5wodJQ3MH7DtbmgbMuG8Vg8TFao6zMTs5qN8fGhh%2BA53QjjCGYZrp7MtWGuP%2BZomAh0vOM%2FhFVGCOllt51D4jY%2FduHchHe1AuslwaV%2Bnn3PUU1z7saOmg5GJSKMK8m0LTLPqHQbWUFfdfLZIfUXIujfKvY%2FStICPWdoFoFWyu%2FSUTkw%2BARE48f0ICe12g6t%2BQwCeJTZzb7KxajxsAUypPtd1UBRBJmzJtFssM6O3d4wMGAf88FbcH8k%2FKNMtpTKB880tZ%2BqEF927OXRWSI0LsOCcQYcgkisDco1QUoGQYuHEJJq7PEk953uyKLYgwkJrVyQY6pgF%2FF99Urmf30wwcQOcSoSiuR5Y9xc0xo%2BLHzBqRayT1fNzXAohbRh978lsZvI6ma8BSnFse38avlLVSZ0f64vCqk%2ByMrOxcgSTzJrK2g7r21JMCqW7YGXGrthZG1yuVuurA72trddwWacHcwemJ6%2FDiba2zHBIcs7V3w8C6QL0CPu0cnD4TSCeOTLJTOCuRtFgskcCMv6nhoCb0KR8HYg2zH5SvSaak&X-Amz-Signature=f0f46d229163cdcc70d431b7014f98a338b0710378f0d9d8459e9c78fc124b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

