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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YL5CQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0bcg0J142BLDEU3BULtIewhqgHFSeGbiCDRnB%2FXUqwAiEAxZI7ustVgeKwOiMWicU57LbJg40fMjP6q%2BeGLhUaPsgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAzxuQzM8vD%2Bwwq%2FnircA2ylx%2Bv82BazGGSE714unago7FcaGn6v09vN6uat8iK9m89o1bbCYn52RNfHJt2sM0gh5LpI%2F96HmgWjXr0NRjZvifcgOaIR%2BVboLnCq0ydkEmSYxSdEr2d09E3HYoNeCWgT2qqjZa5DqddxVaLeaKsrz3jtB4Jo5newqG%2B7a9HdD4b1oHxgJ%2FLOAIZz%2FWiedPE0%2BFQl5%2BuKZIejT6P6%2BBkMQLjUlR%2Bh%2BUWndWS2LbXPleEDIAMM6E6gUoG4YVK7UAmUDKBKTPqrNnSUp34nRAToZydKKsqu%2FIKonlrI8cFISU9ZGaobSr64qRk2YMB3QEzXJMlW3JeaREhsYm7wb%2BvAU2%2B1%2BfKJBXW%2FfVKPjMll6PA5kjQPnzsmtPXjpK7cUeFNL23KPtB212z0IyCVvmb8qyxwzbwrQ1pnnlN3184wrcBrjLYgSnaio7%2FQjbvEcoWR8ame38sQ9EsWOumaSgmNJqAI%2BPM4%2BGuiZ1G9URuG%2FIP3wHoTQ6aZn9e0qzhsmF8%2FQ7LRV2iSm8W4GAL5QegiCGPgHVy1KNVvrNL11jGY5gB85adRZXpwVQkke%2FUQ8Bmi3oYXXXfYYE2MJyP0GeOxh8osXJeaVk5ImwHk5bMHRpX8FzOe%2BTo%2BTfm9MOym0MkGOqUBwRP2IMx9spuiOan%2FHfaArYVe62djOJa4FU%2Fui4EaOfJuNee0o0nQXli9qne6nKmntDEMrKoaJCQVf04ikmGfiOD%2F36koMPLO4ehBgOFRlejW4qdfwZCoDgWzrB0pb7jCAoIkQtqDxbb5Jzo%2FSt%2FxGSKZ6xJvAJ5KxGNTwwEjzX5HeuGJ%2BLeBasi%2F5NnPqkasEiPVnXavmex28qyI1wBS5yeY1oKj&X-Amz-Signature=67b9ab7f1692fc66727bd75db0bdafc73c4c7f155a0459bf334c5ea6c3b8a6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

