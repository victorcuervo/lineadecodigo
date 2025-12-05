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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZH6HWNT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8hLvYDFSYAFI3k2lolKQzcQDwN1vcPaLLP5L6%2BtogSAIhANIlVqK7ZTlK0RnyOS5wHrbrykgs0UeYc2Q34rNy9KYgKv8DCFoQABoMNjM3NDIzMTgzODA1Igz8xG1oWzGVKGbyISgq3AP9rvw9deYFlAKtN1IbP38tjNZwPsY7SMWaJzNl2r0hOq%2BfRDxfCkWEwzJ5a45ykV2RLyQTh2rCSvmBcnKTyoUpnLfx%2F2ol4m7bTSuRf%2BNJgmqXqlcO520gqyHa%2F5aT81wKvT5uIOtWETB9rAIUlBeNUxthvQ4rCbPeinWOegPwUfYcBx3kYb8gnEav6SoWY3gxPfGo1Ub2J5pUMAUcSoukgVhNpTRMm8%2F3R1G9FvBjfAKvrjLl516LuE7kFVAm3PVSe5mouyk1hf1B0cypOLeNa3L98c96FjqV6k25FBJhPSsKLmrqP5rrOYwxb0YZLMcSaGMm%2Bpqnt0VmOaoIRn0Oda529CYkRdzS8IqJzVmeF53mtZdsvyPp5eLnSJbElPAMwjfpbBH6Ds4MADaXmV%2Bg7tB7AcKIj2D%2BztOxGUJCAQfWFWZgkHmNqMebJxY0qMFdifa3YhXVexFN7uX4LITjF1xX2J7s7Z4hHqSylCBuaBKPkrOxH7djezj4iKaz9O4D7hUDBonO9XXSNpzY1YIcpWPA8MVopVswU2mPAr%2BOd07B5057ZdweY85bHWlS1ugPsZotlJeNtbv0z6eP2cDtdgZ%2BDZjIbgfsOXB46X2whkFmtjknrsBuPt%2BOlTDqw8rJBjqkAXAUD2OUoYP32Jr6Nbfz60AVi%2F%2BfKpWvEFL0Ni4qxLcTchok%2FGX4lR7Cj8GGO4ezVwgGqZ1yA9frUGvFfV0CQH7CpIyR%2BYpoDfuCvryOQaGh8mnw5%2FJjUhbS9Mb6kVgTX39a%2FM8Dpf6IhUo4YVK63o%2FXABAw475fWXjPfpqv4kinv02rcis17NxoxDz8317hDnC3vVkt%2Fq9WdeBJH8Blop1%2B%2BqyD&X-Amz-Signature=e0761bcc1782305f8d88233e0d926b2511b14ebdd629835c9d1d216a7952af9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

