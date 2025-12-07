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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NZMKAH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd4kk%2BKv%2Fk%2FDTXruHFFk6VMCe5Mt00zAV5qHyFPRxtlgIgAQDNHNbCx7nZWxbQPtN0%2FhXSRoIHRrX8qY7k2U4SymEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeHdD3mPEihlYdVCyrcA1Bpkbv9kBy9QPG92WihfC5F9FTt%2BHE1GzjAw8SuoUeXmEPx0x%2BKo%2FutYUahPgBmEAR0M910tcamg5nnlYvnys1go1DX7IzgoyVjb4wZyF74dfMEV7upaRH84T7nAScdVRqzfzlU%2FzlEo6txJw9DOb9DfFPKwTzN1qfbvuYlFe4QM6dx8SbtQve3eAIGtWbZuuIMMHPfyHU5OY6RESnAZ7rP%2FK7K7FBOLMTBByeQQJut8OgZbwBQJ%2FZxniysYgUwXBxY4rKlF16p58pVJIX4Viq%2BVExGl8ZQyUNnd5Cm4XyJpd%2FDGkMrGASxVRlojkkj5NqG3FTyOw8Q9qM5vzG10dwuQRUD87YYWWOqSr8j7xWfkijASpWrsJhpi9Cmxs6kCMnqfNRFTKWbk6hqR53SBT6Z6WvAFmhWBQA8I3USLXrdD2a3QVE1YjL0aRlq%2FmY4X4a16mSQUI58ebPf%2BdqJUDDRrlk1fP9%2BO6SyoQJ2yfn6i8Aw599hzYQBmYM0t7G%2FQ3khzo4PtuXZi0euR1V8mM1bwlyTNqsH1eNt9e1sLN6mbHkO%2FjIF3PzXvWvGvRLNQ%2B4AUVqKHfP3vh6IBcjAKkdtA3y1rrgSnzAha%2BH3IqJ21H32lsT5R%2BCDgwCXMO6%2F1skGOqUBaze2IinncvNw%2BpCbuk9Xca4RK2bBS5oxs6Ae8wKqM9G8pCxGT%2FS%2F0zYpdlfX7tlRuq0DCHwGa8d6%2BMjaVMcZr5RFobUTsJtomMQm%2FqeY7Wzc6y90%2FRqMCwr70i19YrNqGbxsJetCQDF%2FU1T2PD%2B3UWWjPzEbmb0%2FGqqyNa5klEAyLfgbmXXsJTqHIyy4Ji53hOPy6KV1BZ7okvziLeO6zm0pwa4i&X-Amz-Signature=106315a46cb7b6e249d8aedd7b5d30f2bfd6b8408c3eb966e01fe48f8b7646cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

