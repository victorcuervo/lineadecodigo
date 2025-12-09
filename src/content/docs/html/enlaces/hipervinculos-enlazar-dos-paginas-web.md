---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWMWJXUL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvDy9xFNyWc%2BQ5DV7oLpU9MTSwh6eDkhIg2WtI7Ci70AiA4AGtXYZW1Zcf8NWGTSHWezaYhrInQgu4n%2F1kCPd7xhyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhGEZljg7BmMJ7nAKtwDjQbsAVuP%2Faw84iDKKIJD9nyNTiKxZ%2BTvztMLKfI2BPPmLHjl7kQqG8XRzACrJtcDU7%2FoEKr6T4VYckxjHt5nCVH4OAzK5OVA2WNFaZPr1SJXR7O5yWus9%2BNwWkDqG5HRfUrFlJebjHo6v%2B3XNQK80J7jvaUP513wD56C13%2BVRI2ZHv%2FHxuti5r4X6Axg3quhpz0wXvuM8PsqR0m%2B47KIsGGMMxmHtuo2RKygqWIk%2B250JWPzDO5EvGfF6AGCh5CUAFzC%2Bqc0yRR5K9YoDLJXefDWyLFqgqUQEgenINeBKRG6EluzBklvvJp5oVNN0LpdZ2dzSSw3ZerUec1TKT5TF2EffWc02JkC9sPjnIi4bUr9XGYH6Xzt7NtgnmY0egIYgDGUWyuQ2dkjdAGPbnsdq7RI6GSNChPWrkwx850B0MXaOo8Edvc1KXYnT9t9oVqzwE24VmjDSEVFADkR5Q5MtW9%2BrAdjTul2Y8sdeslCfE7ikYH4S4iidF3mf8ddVmWEWB94yRg6OtIMYGBRytT7aBOraa5tn6fYWKhDNPGqBic220pUBDXqLsL%2BkefJTf%2B3wFxsWoyAMYijvfI6x%2BZIke6eCuLkFb4Smbir1nYYJJZNUaKxF%2BXxZX%2Fc%2Fygw2d3gyQY6pgE4glDDyoqG29E9FgtVjvvmPXhyohVPelJI8lwdH1PUpXHzx9qJOtJ73pj7kIyKr1czFW6NGaV8YERexyvvzpt%2FOXYXT5zzLs441oZqy7mBK%2FW4eQengI0iYpiboDCGeKhZlNck4RC7KAFHVkp7ImQ82is9igmG5WNlXLCrYXQUl9WWKBDR9wfxcoJI1XfNiL9oVCevx34axpAsK2V71eVUbQLOHsx%2B&X-Amz-Signature=0be1c1cede0646db1b214f4bbb78bf4b3de0880d0e2a47caf7e64eb6a27eff71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

