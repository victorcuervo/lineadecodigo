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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3U3CPJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuEFFl%2BOzko89laCL7iWlU3hdHKUz2jVTz4NwYRSMxAIhALuajjTjq%2FBXiy%2FZ%2F75YoArO8g0LXF2jWNk5rNmA0%2FwkKv8DCHEQABoMNjM3NDIzMTgzODA1Igx0kR%2Fb0bZtlpzV34kq3AMIYe8FIWBSvuk6OeqqQ90n9qHbG5DmBe5w0aD7%2B%2FmSPmGOQ2rOOG9j13L3p6iX4Bw8qPveM84Ta17dtkN%2BlbgDKASLGWaJxxC69bTh%2FkOzzdr2h8UyImI18VUklwJJVo%2Fz5z5lIf%2B%2FjBsIRWgvlCTAmMJD5uC36n8HO9P3kjVejb57DQVkEmDH1Xkji6%2BWa7YcpD1jEIffYhqqrP%2BpFQrGnQ37Ff40I8HLIZaow%2FxItHdAR%2B16NS4sTMYzmXxVCvC0c%2Fb97epkw5RwDmuhjCbt9n39X8pLYHUSf0%2FPftSPcfxYFq1wlj3jLyyCkiVPTdlZUWGXNaKYIiTTE%2BT9hQINxt2DwD6sp4Z%2FDo5tU2L3XZJnc80bj2iI7qPTb0CqSEnkEjp1iPq%2FABSAQbu29Qfe%2BSqmknFWrJLAsWMPismJ1UYhb%2B4w2h8SwohHYISs6Dn0%2F3WE41Pihi8rjj%2B6I5E8dlA2RN03njqY8hmsTxEJz0795Ilr0nf%2BVU0Cf6Jiv8PN12dVSPzysm5XqmhxSjHkrcCtalnYm%2Fnf6csKF4ysbweyH4bkKHvRsiIRKUu3Z9a%2BVTytIcQxn7bR4JiKQpgkFOoDARYyRNpBhAE4d9p%2F0O%2BHex3hfRakmjX8IzCtvM%2FJBjqkAeJjYrdaCeTD87GPsA2SskZNtaibwQ8AnecT%2FiybhX7GRkvlLh74BHEnouA7X9vL5pENwV91cHPBKCTn1ndmmVTyScBaIwYFoEOvTGOgE1D%2BeAhF9vdtaqpMszAALXCiopyd72%2FqcH3dNJAvdUHjvAkba5wJDzmD5NJewrsvPhR0xAZKxb5Aaj%2FPTs7lR9DHHx6uP6HFMp3qe%2Fv38obSxTCNWttp&X-Amz-Signature=e0362e681bc95291bc3775236d8f562eb15b457f179bf5f1bac8a00be9f5bbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

