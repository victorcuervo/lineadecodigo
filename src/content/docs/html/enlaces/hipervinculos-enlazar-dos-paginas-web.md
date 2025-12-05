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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJYOLTQU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5u68aHubHJxKuXna0LRDsx9gJ5QdkDT6lXKA6ZwixaAIgV8CU9KI%2Btn7Fo0F8HllsYI28hUQJo8m430IbPu4LBfsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMIBNuOzeF8gC4OiQyrcA7NZC3DVQS95H%2BVEQc7NBir13OZNn9tfoEiWczmgyAn1wrkStDQzn9D58k%2BCXVrDjOOxYn9l3nx0BK5%2Fz2mO9bc%2FzMMdjcUtTb9usVGoPUZv3E1zi7DHspKvZmJUeA5dyYfOrCmJznQ866bPk66WqnQ8Mx8PdQGSbmSi4KzNzeOUZn178pJjsDjdfYCD0qu1bGUgzCy%2FvPXHfe8CSVi40onAsCRP5VOExlADivpuqyAD5mMfdYcknBtJJjNAgPJM7YaGzgA1CW77dOxTpvdqgQJSZPnPP7GRuRUX%2FOqh056zPrTu%2Bd8kT9eaRRe4jwLBd8ZMlFhkYR9BL%2BN5%2BV7ZBR9XN6PETtP8iBasxUXtsob5FOVOSnMiVtdlYZKWiOKeT8BpfHrQRUzsASNPWLIO%2BLHydMv7Xr2g%2F5xBJhI6yHotPuheeTfWu2EJ%2FIYmihiazGlygOqe0EyQMPTRCt6RDZf6Is%2BHI5jXQm8crKPqADWhsVqCcIYwB7flCbV8GoSi1q39gfhPrKddLhrQa1PtpG4F37FUTVIA5N%2F%2Bq1IlzOMdQ5YrtuI99jzTWOA5sU4Y6CKt4olQr6WzzcDFjq0XVf%2FA60sqBsruiqRAd3itmNvqRidb9w8sOIUmXAPMMIKMyMkGOqUB5NaI6Fh%2FicGcpQZDgfo1BoVOmJ4opop0evNNvfYPOWMX%2FAND4JepR1w7akARD8cYp3v9dbrsq23HeLc1lWNE0%2FYfQ%2BAFoo7ZU9l02U4jPwEEcEorxbyRm7hAqch3Um0RcQAx74WjOxAP9%2FhghsiaH1UNMKxs64unqgYY76mSTOYQvj%2FlXozfnFh8aaPbVpf%2F%2B4LQNAERuy4ZmWZeC%2Bli4l8wnwjc&X-Amz-Signature=e479e1bbf3a1b3d61e6ce6508d8827d9eb4341aa0ffec898ef7f4c27162c6848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

