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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESU5TGY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCckVrKjnRB5A2WIk8wWuZimGxVmoai6LknRwufIBl7vgIhAPC%2B4wHr0LMpGcwfzrU6hd99ejpFtA%2BRrjrO51pqqrjRKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKZYwv6kRZbCOJD4Mq3ANIOgqdGnd4NNXv5zrdsOC9IDMZTJ6y57dnBXM%2FHaesA2VOCRUTZbwqSf8Wn4661guq%2BVhhRLi0AIRTBdN2Hsy25asxjWpupdO8IcBbJ6hV2ZnTSv%2FJVJJXOJXRC2JiY9FIGOg%2B5tOj0zybtkqKhHIR3mcAFnGYgb%2BbUSOXM8i%2BrVPvMNDmctYvKl9ozgd%2FhYmBny1AjJ78J8V7AYJJ6pvanYoF%2F%2FWys7lKJy329T5QoYTzfaRgYHQ8v6Vr6YbpTFojJL2uMfi54EP94Gwo811765Qd%2B7%2BRtBNhHlE8%2B3QV%2BZqQ10DRqVoLwewu8BbXOH5XKcEWMJfPSScqdqPqsA7lyeS%2Bi2V2zM41Xm75TE7Yvl%2BRzEYhUuG%2Fpbc78BBF%2FjoF6lxQUuobh%2Bz3wKSYZFhsy%2F4lOoz2iCoShS%2FP1DGKqGLP4nRNrB%2BlnhJ0ZdhVHu2Qn7Ef078XbIl%2FPMXAxl5DffF5fiWfEQ3V6WhyxOyU96UR6fFjNRdDPOe7sCyIcQZXxUrIc9PTw22EjGuMpU%2FbvWNO3LOaGsibov032q8ElddaHvdg%2BkcATawem1QNgTOlDg3Z85z1jsTx6wQ4uSWRZAbd3gi%2BbWmvKUGyPyZUHgLPPJ4L53iq%2BmA%2FqTCP0djJBjqkAcnZeIZQmJEOzMtzYghDHM5GfQPf%2FMRDowcdz5yNz1hCxfRb8yI33lVnvJao3sN6C1G%2FY5Xt4u8PvFD%2BmsDsqDQrxtr43d%2BiElmzDuTYQEtlLVYhCrtCfVH2yuM1eNgdD%2F9%2BQkc2VBxvPor3TAaVrbnKGtRkTDa8TLdVC90o59Y5GVqKPdgknM2zs3hELYbEiLTOQP27km22URSgpgwuXJp2oh1g&X-Amz-Signature=217caaf61fda82dbbb0ff246167300c323bad49ffbb98b436642cf5c63300a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

