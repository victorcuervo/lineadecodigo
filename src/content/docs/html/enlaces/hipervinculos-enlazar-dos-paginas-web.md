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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFRIRCN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1yF6uySQGfC1ODVlXrp7%2B%2F%2FyqGife3CkJ6RpFXGLwQgIgDSfOV5HhNCoNjVPzPoBtVqCWrpK%2BI3bWPmltNYB0yCkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMz8zH07uLNmblqhwSrcA0san%2BsZ4fGs6HeaLhvFFi4KhfmAcnEs3Rk%2F6frqurWyU2CCQBUhwdds0B3cZX6TnRwo%2Bf4j8Se2l0l0qBNqbPvq4mlKnS4uHwNvs%2Fzgd6ouyrhqp58A3%2FVWd2UAmzDZOVpNXcWj70mQbAAcn%2BaBxeVsBxGQNo12F1MNsWhLuyoX9nrZccMyu32yxrnZNhaUMa2Nql1qd%2FWOcpK1sMjPXfhuQ4CmsQu9Mrh8hfY7C%2FN%2FKcelGKzsHFgFpNXPCJM6fRDSsvJlRMUxrtyuZT14PhloZ5Q6Q%2B9GrCGf5u6THY2Twf6xfK0vPfovKjSNaLLMpnBRmZPubl%2BWg3VM%2Bi8bQSpQkDHProimg3Q%2Fp9U67RhIgGXY%2BRfIye40C0ODglYjbYZLz9K3TchvQErTsPp%2BXKLvVBJKB6B1WqIVSc0aBjX0bslsXCAD%2Fke4E4IO1XjPc0rdkc1qb%2BZRcNuA7%2BSFnQ4IoMbXQaAr7W9EBfhi8TIPrbnlRfUA2P7GS29aDCUqvMpDB2x%2BVyLfSpRMsUKj8tWtypdSBvcDcB1SIEgFECXj005inQyycFyR7ngAyTzVkB4U55wV%2FOm%2FIummAAcBkuSBFoS47zf%2BpXAPYQdgfjZrY3XEpoYXXiMj2NnAMIbu2ckGOqUB6jU0b5T%2BscLfS6aW5yEHxXj9ZydqNp78oaRbzSq2ddj%2FD9q7wj2Mm%2BvXqv7xkzwzKuAg4qWNtCURdkmbB3bzaXXoaqWezoib7sH4ufmBMo1UoV8tf4Rn4uJ2kwmyh1reF8Y1i94L9EXTVRwSjKXYaMuLrpzEAjqpN50Y13pVZHySg57QUn0HeMDXKWYQBVFJzLHc11SrQfe7IzYt6oQRhMvxal%2FV&X-Amz-Signature=ed53d067142133f30cd9e4175a8098f9f09ef23a61d0b9dfb480da4356b35bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

