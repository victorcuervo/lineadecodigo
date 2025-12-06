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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4IZJO3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHINoYN4Y1KRwip%2B%2B7im6e6JWng8%2Bu8AcGY8ELVap7rAIhAI290ulPEMRahJpTmuRh4l%2ByXoNHsSYhV9Rg5uon34E6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyWZ54UEaNujTjcf3wq3AMdFyPY9FgvLpYsuRhD9d55eeRxPopuDRuw0VYjZWd8WEas5V1G%2BWf739fUDPUm65qLzxr%2FLRVv29lKBYH8xlBR3TQ6p8herJXklGEksmO0r0D9ujV%2FI6RFnNFrvhgP5%2F%2FPkDk15elGvO28BROhidFiNr6EDGeGR%2F2Wi9naaf050LUUzNpgdX6w8JPSmdq93SbSofqeyBcanYH08yZiWA1pgEKVCk7tby6dkAqaTYzxUJdBYUpsjTEgFijGo%2BGETln9LX1%2B%2FDnFpL%2B68R53ABVq0dkB59Bw3fsMMTV45tNHjss2Y5C1P39iMuOqnIAuZwBhzQ2n1O1jmMuFAr2K4xECIS0PSS1%2BEVDiSKkLujGE%2F3stRgwOApUUE%2FARybZZvTdyBy7jS6m%2BWNL9XW32Zlm8shzmBaWKP%2FYhgZ%2BuUAzDId8Gz1W9xvt9oi6P7QHK4RZ9v5ncufrxJoCKcdWJ%2BS1Wm8NaVaeqvZiL%2B2ZwY7gx33z%2F9P7TJDPo6DlUuzxQcgbs7ovTgHxIV8ro3%2FQ6n6rULl8dNrrbsmfZ9kl7xe6S3HvjV3J5mpo4K7gbr1z8b3uZtekgEe3rEMFkpPTufk%2B89KeFhyqMmtPZTEfxxxCWhHdWCIslD%2BlQG9CH4zD3ptDJBjqkAb4ci%2Fuw%2BEoj7ts%2FsTe55sixbVvCqKwDpnqPziI9P%2BP8WXGPr8i4DVBpJi7dgDuxXKrdqoGAIeZR9N5czUMGDOgVGAwS1l0TVD70TVu6rLKPX78TVWEHjY6%2FLJS%2BUgzsTV7YAN%2FAaRa7ztra24eEO2OmU%2FqXlW48rJ5V6mkDSNZJBSXqKBS0opiJhB3%2FX%2BBGkYXsNxqliQ84lEdT%2BIn8XXBFBXqh&X-Amz-Signature=7479c67527a4a477fab5e0932975a80e459bc6bfad8cedd9f3c9af166f38628f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

