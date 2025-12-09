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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPFMMUM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVP9LPtyEo24QTL1v7DHQ8aJURMGWEDJVqr7itWWDSPAIgAtgfyS%2Bf3nFTwz4A7KO1PJsZxEbjY0yOBr3G1a9tI2YqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEEiG%2FY3tcyrNdz5SrcAwyjdKSIeNca%2F3r9PchhbfW3bS0ZSXGaykua7UZhF4M4FhBRilk5q4X9dSMf%2Fbgug8VIq0vDUqxVJCxUzJYtL5vgGbt0TqT0AdNkgq8Z0FXQiOdNq8KqXGpvkVonqjEUfoIrwjudQabmT2tObwCwEIdixXc1%2Bn%2FtAj1oGzHKd0hlckxiXPBihZol3qBQGNgodPkkDsiF%2FSQZnaPHY%2FKpFZtqHsiARAed6WfHc9mOJEAKmBw%2BZ1T%2FJcHs3CAFH9evKu7nd968jb4ed4AIJ2C2VoIuG59AfE4zzEYVb%2Flq%2FbbtQ9ucUTEjQB3at7BLq3KM%2BAJboK4R7m%2FhJ8FPPwK1lAI5cWsETUdBhs6gGlz4ihOYZSwNgVGTzyf9NwYK36Uyot3KsWcJuIDA3uh%2BtjPrA3btmJDkh%2F5M6x0zw3ULH9Di7t5oAsA9LjIPbPti3FukSRLfkumd748EXPjGE%2B9aVkGBBNSMEvzYWtKUKENUETV82RUyu1a0j2baHIP297HuRZZUxR3hQo3jcGwOydyhTG63%2F2stdjA%2FoZK8BElPbqQafeGlDDBszerNAc4c%2FpbZMGs4K7jJryUvAIpdJU2TgLMkMDzWNAYA7WMwm3zxo6g61ALtiRh5K3l%2FcHw3ML2Y4ckGOqUBM9AkChmmvwEJlAIoufl8a9m%2BDTZ6Zc2t3fHjZ7OpbLozjqHY6PyuWJLd3tBntlKJe91Rj8aGrfZJdg8bLdYTiUwGjtEiDd1QFAc2YNneSDMkq%2BQAejT1ISvj4IF2XQe3C4uHS%2FvsmxdiHsRjNX3J5rCcVd4N1vmGYf7pSTM3K8Cy3CWkskNuYha7u%2B9q4pFg9rSmwzLaXsTWXI3l2c2viqYkMo1P&X-Amz-Signature=7d23e4798e938695727dc85efff5c9aa4bcb3b3dc6d89a7a1d0b50916eb6e17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

