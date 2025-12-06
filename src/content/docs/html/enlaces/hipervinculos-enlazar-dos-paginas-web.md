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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTNSCSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqYhSEBNwOXBn0HY%2BzobiHmOEz4fpPQA18yVxiJc7r2AiEAzwaKDDh%2B92060afKXLc%2FBKqZusuUB6SQ0Z8DPPep%2FZsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAOtEloZvxLZNuRjircAzpGoBybSw1KSAqb2E47A1ZSFJAnlPICCk4TPtIbMlcvXs1GmnzXwk4XWtNXQ4fHdrzpxJUDJDheI5IX%2Be33Bl5Z5OK2277LoJAT9sC8G7ZSUCnFPv2wulDVgBG6ZFK5nHZwFSACEu6VLUa%2FpuuyyGC24eB47sCHaYkNYhacm%2FY8MY%2FSzRHKEAvk5lkQtZhIz%2F7VB7Q8cYePe%2F8GY78%2FIWSoyPtp5oI1zmCS9P2MmNdyqIYB7cIyeQNO7sIhDBOe0s7jnTgHvYlkzBo%2BNhp1N16gc3A80NfIO6PDinHt24NYajn3%2BNbpMgINreHsRYx9vEJq9u93%2BdBEhbZL0MFUnDJlIUiSpHzuV%2Fun2yDa6CZvGNPxinQZjUAa7tSNLkZ27CzahRMbakuMQprP0UITN3rn8w9%2FujcsxhS%2BCCUYMcOzv%2BWSmXVjXuZtg1u3Rj%2BohNg%2FOvJPH%2BtGJjreegCaALKviDWysoXGpvLSICZbus6sURG9E24sNl1T%2BAJkE0ErYpp3ixu9SMz5jMqWq3jflkK9F27%2B%2B9Th8p6ti1FpbYPqiSS8nwo05nZ08JqfAX9SVW2ahMdgg8quH%2BuaM7OhgwU4tlwyJ7ttMYLw3KbzBv0q7VZOVMWuDxtF7FnwMLLM0ckGOqUBkBka6ewQm0TTS%2B0zqR9DjDG1I0jvbWaraewbW8mTLTl0iEKCRrTJfDrwun6NsybRjRgmCrSceNswusx9f%2FsbcdTtVm14dDMqsTJ3iij41wrNH1Kmk%2BDBYrOTETvbbwFhe0fc8s8lREQsafZwXR1AqWWqjh%2FfOFTSgqceSz9Kxhw82X%2Bln%2FOF%2FvjUH3yahWCz0KCVLYO2Xkrv5gvff3uq%2FTKDpG3a&X-Amz-Signature=3ec699e6955709649845fe877ab39c091848989e0aaca4070735cbd80fad393c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

