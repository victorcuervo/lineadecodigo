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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AMCWH2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH991%2BqBHGbCczD0mXIcTAVdFPcRfVGxScUc46E%2B8y1pAiEAwLhYY%2FJIof0tN%2BynOCmE327rSJe%2B1da7dk%2Bab1jhXUQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLBfsvr3JCW474jLQyrcA6MD9DkKzM2Dqdvbb4M3Cs7ZN%2FDFLZQga5eTsry8TY6e74MtWo0u6Wh7FHc%2BNF%2FKrCMywjw3KNvMwLc%2F7sosG2keRL34GG1vwhFIjcdF4zLf8nibayhxL574JW9gSSUBKmst6hH%2FRd8rileUoYbi6QEEossr17Xtm4A4Zjf0%2B4YxzM8fiaCp6Gxl4rZ3kPDcUhY7i1WfJInGfKeErZ6BRMRVGxF1qXhbEBvJLY%2BgPsPGm3CBKEZQe0uaSev9Op%2FRpOW13xOW04fnJ7isvGgIJGXxP5441j7um0E5DAh2snZpQvhsekpdPCSQqHruy4qIIdINaYJMfj0pmHVsqwvUlHwPoBhXIWDkHOF2U6Qn76DgQS6DdCZqnQinrsRFgz6HX%2FtrSIJSGpkHWrlrI49fuHUB70pEsTd%2Flt5t0ft92Ca8JuTCqCkhYkgZifnKBY9AKOwRmUw%2FP%2B5ZNlTiKmqYYG5f%2F%2Fwa%2BsdaeXByZDgX9c7D51LGtAus7n0zriPZD1xsqzc3tL3ktnyeTaH9OmMmKoOWkZFRDigtUI3YuTaZnrRKtgKHZHza4SuWSpz9hd4nJVluR6y0ZhiZYdjXK5P%2BDZao%2FduwS48zPHJK080r18AcWa8CO8scR0u6fNiuMKGJ0MkGOqUBOJuyH6JWyAiCp6LbDHd6OicmE6BXYSulZr%2Fdc0zn7HbKBEG6ystexENVH%2Fq3erTdkbM7nb7NfYNHovaLsOBI7mL10kvz56ji9GKY8x7FBfNj9Ly3gMfYcJtIj24l%2FeFtLR9QWeNgwLharKyZQ7iBemFe4uvXC1GEKh0i%2FKMbPYzvDbCRKN8KhXxyJY8FCuTIGf66LqbTEafuqDYV4ya4ndFscz2R&X-Amz-Signature=01097781044320f7652b0d4de0cbb356ff06542040683275482061d86754b7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

