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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS4EE55B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbloWEXpW3YVe0n0H0e5C6eZ5tayJENlfAMUb05uREWAiEAx8VkK26fSbvXSHQvagQYAKzD2nKcGQeLQlbFsJtYW2cqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHius64ocO3YUBIvQCrcA7ajYah3U%2BFMC82d4WeKjFdbvS4sDPvPhaDzGJeKEyMW870g0FMBQAqX5L%2ByfHvvkmWSfJdpX5r9ybyegKqEKmDzBX19jZnIle%2BAVTAhQKBiTIDMlEsmWc%2FC6bqmrxm0AXxqXT0X%2FbJsrbHXlWU%2FaqP4kELoxmoSE9wTMYhRrLc4AJIzVcN7BO796ui7HJ8%2FfS99cx7vNP3drurfHTF8XbbCM5tQPi2wEKzhGfM0rD22gJyx9CtOJkG3OKRgezLLs9Z4%2BE8j6uaRljqKL%2FQrWeNXrMg%2Bk9iaB92XgqsD9wEkyX7a1k4SaPDtV2Yg0l7tYZzOAavoGEpaTtJ%2BUTj%2BsXSqsHauOgh2kEWEl1HEv3%2BFNvB%2FJOlf6ONA64KJ8QiLe0kMnKC8BQ38ywVKN0z%2B4qupClWrqB%2FqYTYSUG03f5gXOUUXVEmTF%2BDbXlZ7JsjSQ02k7pbHvXcPd6T2bj1SqFdAFKmelL20dol08PcZjrmlp8C0umSjXgc3KQ7pVpqblhi5g6moQplnXlbJGssiTZ7DTpzDAzr%2ByzSryie9oK2vz2uelSgmYg6jvzYiBymH%2BYVAaZHfV7%2BARrgXNzb0%2Bpuih01xkkXclX7iWpsoxbBrpsybTUbPKoI69KjQMMDE38kGOqUBvavKnqeWfN%2BF08r1y%2F7V9VSOjGSJcm%2B41J8yKOK2krjH8JkMtFYd7nd7piuPJ0w5c7JKxcJyZbH19kmzVXYwVkkq2Hy2bJkPdAsgwEKCY1BUGv46o8VxkWDjZKhahY2VmBAMsWG5ttoXgjf1abRwhoGLQQ80k6h4InF7ROiD0DHRrU7B%2B7H7UuH3ksLWMA3xlnkJ%2FvDafL54NSdu5abxTADxjxtJ&X-Amz-Signature=9f319ad69d2399fc3f905ae13eca843214d8d542201997c7f0ac3bdfdb399790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

