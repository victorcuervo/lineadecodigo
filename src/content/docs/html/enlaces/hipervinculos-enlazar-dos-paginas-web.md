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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQOE2EG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Ek9yO48rIntUSYTYYUX0sC6AckkOIhPiCjoDlx2xWgIgK1SJ7yPMC4MetNXNYIbUH%2FQCvZHPvS6EyQraCNmARfgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZM31v%2BfrdQVjhgRyrcA9U%2FO9wJZi0CUdrQX1skNusuGH0du%2FvEJiZewH1vUTFTibQLyKH0sb%2BVCuFBaB3qUnXpJBZjXLmX6p65LhBBIu4LIvNFeb6hUZSheZfythPjod%2BrlzoaSicpdVA8AYYBZyZqsywMF5gIKpKuX8N2md%2FQQ7SwkKoYT8919n3sgo%2FFRBgkSj848acHVSkaodYtqP7wl9FhFQEdzhHRn3Fx8ZDpTttoPZqYIsNY67BSlLVG1cvVXk7Wc8kO4m%2BjnGlHuD9syykl9FRGzInZ0HS5sv4sNG6miD5kgctpsAlcEKgzSGXmhAnbAur4MTM69OeYzczZ1Jmf5hz5F42SYga8e8d1pNu47MYta5f0FE4Bdg05PM5WbA0JwoWRYuGlj%2F5TDZKq9RL4oJ0dYJ7NOQ7zL2tOxbi7pwwPZ4nhq7XuvETi062SSbQjBejp%2BV22OlEEVX5ZhxZ4Sh05AKAipEufefWO4oyl%2FZT3G7aQCP%2Fs148f2pUZIIlEHPMBWCvhbgOx97LV06hVcbqVnbQq78RqpEWkWxKzLh0HxNNzP6eSmf4NlaCiPxpYo062V5hyS17oLyRWXP119hq73KZzqgZQ3h38bgXgZxV00OH%2FKITOIFqLna1VpXjQMclShMmxMOnQ2MkGOqUBWtQLE2T6koOpKYkFDxqbmJOtsthNxK32Cuak639A5262stf6lZLzkCFwjcLMGyq4s5u8WkpPCR2Dr%2Bg5A6LG92vKgVp%2Fzv9tmXy5qBHVqxCrX1iZThtU9w32I0CsZFUFkfpCzzGSl3%2BSOQPQbV8ijnq6b4QVTO8bx%2FOcnXy3GEUy9TayiBSQTDaf3CCrRHNJzDYeOHMXxglX%2BhI4MTwZWs1oZSUI&X-Amz-Signature=7f66215e7890ea515e5f344037e8765fe71867e12a85be1eea33549df15f2121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

