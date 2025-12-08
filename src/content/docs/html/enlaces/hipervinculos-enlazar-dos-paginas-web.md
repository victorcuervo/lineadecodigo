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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGHNXEP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSRf0NuBm9xakmoaMLYlcsNJtqJ8A0HksfpumvF1wpHwIgcaMUfkJt%2BhaPNXSyJ7rhcvWq5Jw15MWscOxV2cdqbZ0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDukY3SkeLbBixUx3yrcAx8d1JWkElDh55sw4kShZPNT5iVJbwOngrcSmBfPNt%2Fn7%2BuzY2UJbcrMHqIxg%2BCUy3HGh7uY26wz9lHM9rIo%2FUVWrQwCLwrrqF5cFcuSUrX8ZDS6L9zMvRXXIhICFXWRQQUBu8MDjiVDfyEvxlP4bZMyKicFNzYMZxFW6%2F3D6FzmSTrVjcdzjwFYjcbgHX5lbVo2ImDAJ4LkWgQQDKZqE%2Fup182%2FnrU6sdv1%2F9vMQkkU0eqQj0uA2%2Fe8kY3IVWmsgYxVAI4kXoITtQmXnYZzRzomYWEypaHOrzt0TMZPj0HwAng5raJzVkrj%2FFn3HXzzk7zsioOV%2FqnuGQNzzKIQT7fXqrgX3gixJ9D8R1N9kzuEF67vziCByApkYUJDQ8mVSMcoUEnJIz01LHJhkv1ZNb34L43Y4hXlUIXemCxjfpkAYlV7k%2BPPeYxWCBJanw6Xfh7y9Gl9m5j%2FClTl9S7vOBF4%2FqBDdjze1VoaBWCtTb5OwIHRG3H01OLwLik8amtMPrcsYalk1yog9Hs42zJuzoVaF6xL7IK9U36mIiMjA%2Fxxxcz%2FvWVxyWV16UOz%2Bqv6cRz%2FkpiGqMWpTPsD4VjN3eIzHLMDMOD48HvBcGSBKAJQcK3qOe4jvQaBo0KAMLjD3ckGOqUBWvZOngvuz1jZz0Em5hQQBI2ymedEJDLATcZoO41rIv%2FDhPRIEG4IOk1%2BdwZmbAvmy5LG2G9pUF1Op3kHG7nxPmh8HSwZ1IvGFDVGepXsGjgRvScqWYr4UrnUg77Syr1WXbFl%2Be9Ix%2BxYJ%2BisZ6HOnDgpGatf5DoQdX%2Bh0W9TorJrcK1mIG9fvhmg3PUMWdHYXTFDHF%2BFhq5qHgIsQK65pmkW35PG&X-Amz-Signature=bbab98a668dfe89cb06a45b9d9705ebfdb6cb61cd7f5b03289bfba476399bbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

