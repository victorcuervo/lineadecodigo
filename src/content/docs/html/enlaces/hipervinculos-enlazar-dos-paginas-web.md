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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWMQCKF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0fuxyudypLevZPeV9eFSUs2UyHPHjiVv77J%2FRcL97QIhAIfJpO7lTsnSbE4vv%2FisQnJxBxRzkVEigCpd%2Fw0xtEveKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcFN3E3j%2F6gARVT%2Boq3AOErrDcBDt%2Bg1fmUSMvm%2FmfSjnIgv0dGlBfWG%2BOtaiXKdRWhpXdgvRDY4KzPFmDj1nS9mNDfBKQnkSwQxLrsIEa6931C09UMK7jzKEe%2BXDrw91EeOYLGwfoplaNXBxHJQcYxvPbYfl6gz0zbYt6egsQSuJt32SvyVKjhHTWd%2B1i2NXepgHCCT2TQ5YPgAnPKr3YaUveOPDO7gQuMrbrBHmoILJMttDxXeD3niZx7itISaAOU9cQEXcwz1ky7bzsXr%2BPggtdYscK89GeB%2F19QT5rxiVUomLZktj4LTIPUjgGyhIARpcKqwIOzFnkhBTjdLikV2o4iBjf77MS1EbAltShO2ZXxvkI628B1%2BP9n85%2FDoVHSNnZ0iosaG8G8H67iI%2FslQa7%2B87sbbjHNTICQt0CjTyJftcP%2Fza2TkkonqxlWCjPGAtTFHbjJrZCO8fKLCQ9Kb3Yy5dXbfi7i9%2BcnlEHMyEVMVhpCJKuk%2FhAjVmse4Q1g91ZEHNndRxkd68VWdiDG%2FBEpxDxLiMSywnR2i5GJnoqBsHYwWlbTXD1NXSOs6UqKUkUbY43u19LdhTwYK29IrvO%2BF5aesc2dCTB3skkWtCaBc%2FRS%2FQ1%2B4nbAWUzoFYcRK6i6%2FCuVpeffTDxh9%2FJBjqkAafQM262T043SKSSOsaXeVC%2BE9A%2BuOe72Oh6D6dberePtf6D9aqFFrfadCcaw%2FQGhp0d%2BYpHJ8%2BAb4k5UveJ0LCm5y%2FvK3XnVr8n%2FuL5exlXK0ZQ541M7wcrm7ASrpy1GPV5Gtwf2n4HYpzcVj6YGVOB9TZf%2FX4rFDNbFSlaa9wMws4IFbWN5dlD82APAE1c4m1Vk5fL6YYKUnZONU5lWoxxQKye&X-Amz-Signature=27f776bbd202c3cab4120581e3924c63118ffc2019aee9a7dcc056ddef13bd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

