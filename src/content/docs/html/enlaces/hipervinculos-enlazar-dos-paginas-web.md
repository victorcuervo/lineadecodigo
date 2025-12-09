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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQBUPIXN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnqSkIvjBZawQHtSdC8XUwq1k%2BuRpXooeQt1sRSvM2RAiASCOkU9yMOmCokU5hHxP68vsYunvqU7mXxPJRuKs4fwCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdTh2Cor%2FrwuPF0B%2BKtwD6oEsCN8XALErwbLfkgGGifvzsfiH%2BZf82igKkCVg%2FLJf8%2BaCxuT%2BZFFXRNyo8gF303HPBvAxiiWphl91mfEA0rZHxwXYidJyrg3QYjFbR7pGxPUuc4dNimbqTJ8eRI3D4SZ8yhvZhm07Zj2z3WRLN6KGwdN0fdl6pGX7rs66hGUKbGCF180whtu0zTlO%2F%2FjTxtMfI50EK4%2FJRkI6gsrB6w4Gg3acRFGEAb389ZTjSiGJmU5ShGke46j7LV8mSan5PfWgSvijhCkuwlW7C3emmM%2BYMxrSpKliZ01vFQIdXks%2BbCWVeVszXgszPiq8w8OnAiR3HjwI73EJ7lTHOx%2Faqd0klc581KPSA5BB%2BRofD%2Fw6J88zAjOFRUSG1RkDpTI3KskL1moCINpVfF%2Bp%2FQGd3mMMr%2FsUggR7bdFL3qd%2BrHuM6reqMvSYNjjwmJC%2BuEpbRGEUAIt%2Bigsw9cfWOfrVOHkdMT1wsz4orZR7wdfr4yuO0Fgdo%2BFzYgH4sH4wevZeudATsn%2FBWEnrbYJYKWTkgrqcRbU0XciyD8F2grkMdTeja7%2FWAb5PZgw9HEf2pLZ5sT%2FHJsKncguVnWK1ygcld3Q%2FL12b6UeE4zqOAlZsublZk3pMwkGGLVi7ShUwqJ%2FiyQY6pgGNrnpf%2BTJU3J4BNYY6HS2kn2TpPiSJS%2F%2BxwvuxTe%2BPnPxrJ1t3CuatrKmTWTXkTRrGkEZREpUtExTpQtQOhSJycEO7avlgQiRTQbIFl0FUbsVkokN%2Fxmw7bXgqEonYDLHPtDu%2F43WB3p7uKfPw803ndLTHUNlqBVXfldpbDFNX5Emm57S4cVfYfXmh2Iw9OY%2FVebTFMCEd3KGi%2BA8rqPgTwxGQL62E&X-Amz-Signature=0b6aa67d93cfe3bee8150c0fc4f4c2e9aa8ebf09a9db791739855fbda7b20a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

