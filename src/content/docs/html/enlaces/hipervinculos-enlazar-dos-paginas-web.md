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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJWYX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHgVmEq5QWbH21PY5l9BjYhTpmWBx9dXAQb7PBdKe32AIhAKLEVYgoKEB%2FXqgBBZ%2F18kYQAYCIo0Xlo2vxKBwN0BktKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0fEOr%2F9LD6LD10a0q3AOKjt68iwienCbCeZfaC%2F58zRx5AgqbKLTgFJMAdECziQiniYp57BsDlw7bxnSjL09%2F1DEzR75z%2FJzIuRutpIA4Qu0ZJFWfWdxDIbzPdAvl%2FQlwkWBkt5UiQk%2FlW3EI9pJ2v1CFRPKEtgEQ24W7PZDR%2B%2F2fzTwGXKZFk4tWuknO1kXLmzWRHzT30d89iq3KWkSVioRgXto6nLsrmrow0wgainl%2BLpRroPNkXwkSyZc68gfl96sGZeqkSSlbcstEL9jnf1JTF1p9a9%2BtEjdnwhRhQ11KVpDvW660E9rwY7gAQ12Ih09gDY3CZpMn9RoEpc%2BIFthD%2B%2Bk3FDBPlX0CZ52GN1OIDbSTeVNhS%2FqLnn26yPKhs0WbnaibYXQyAcUUI7kWZki5fHAAny%2BogmoZQ%2FnmKhWfsinwkU4o2ZRGsqD%2BvvLkFftrHnFvc5EvaxSSxcmkKdE8MEPL0KZx%2Br66Pi%2Bq3i%2Bae10UziIVoV2u2IqGuKYfYudR4B%2BN7RCcWUcg7me0OSuoQaDaHzPAHnW10ykhEOAtlaS3FZE1PEQQHa6sc4qmCMm9AvrSln%2Bb8ixMiqNnA0yQNw6dgPRiXVdZsZgUi%2FVlkXkQ%2FCerRgntso8cZtfoxVY0CL3nXQiCQTDSlNnJBjqkAbrkGmCFsOIEfK44mBnzCDep18zwUi%2FjxWI8wfBCgSeyXsF1e1zP5krdnWJRvSsAUhocVKa1pJ6PbktoXwrhzCiBdBQmdIwwNZWymX79%2BIGmRoesnnhzafaaVQdelkxPcrJUyfkxiFxRpBLh5e0gq7hI2o54pWJMSN3r1nZhs7kcTQ%2BtUA%2B3h8pGbWwbkotPEDCS9joblOMlFV7RJMwFHO%2FMJiU%2F&X-Amz-Signature=5e1ef0ce583a3b99ade31cd4f609b40b3e3910a8ac141678c3918244456de981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

