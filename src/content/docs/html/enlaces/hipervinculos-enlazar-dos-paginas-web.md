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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GROMZRP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsh%2FoM8lEbafAN2nP7mcSA171N3fJCavmCKN%2F3MAKAwIhAMcmf2IFKjbTPlQgDPYWRlYMLHvckFR97xuZR3Ep2u0gKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQlSXubnZDKw%2BMh4wq3AOUSPzRTeZ4515RuE%2FdjlTRW9Y6JfhrULVH2CXOyBE5j02muXFV%2BEJokAHqKabM59Pyqp4aOB2rt6Tm9i%2BA%2FMYkFzcokptbaCmfsWkErSFlufDwzMWPLlel4shCMude8FvWMacPMVd%2Fs%2BOUH7rDlLegAKCeTUQ2VuYjiu6vP7b15yRsTRi54TOKoLYhJC2HOBbOGg5glzq7RcOsRtBxbkrTOHeU54DmqQCo0TolAwg45wcSS6FCaWJoBCT1e1ddACSgtftqRU9y%2BxvyvBhqzdmgGkM07CcYFfn5zNtZxnz6Hvkl7uktL3Rm2FmOA5xBDV%2FiIoIPxlElGLgMX2RdvWdDzOJ64Z1lQqr1O8roNZ5FPDYxtgsXiNQmx%2FHo6%2B5Io0MB1Rg5RrH%2BmDNJt5VDMhY9BBHnXGQnz%2FmruN555aJjzJlSJOZkSIKjDCxdI6k1XGbnfJTQHCJnu4skyjGVv670msrst1S7yw0IFgs%2F%2Bn%2BNZQkh4fKpKTmCRPG6U0ETCyfBzynP645va35ucKw9hbpWxz7GXA3OL6UXqVjmNJ7LIaXl%2BacZWXl6nATU9OHIg1l3F3CHVXpuA%2Bo4Xuckr7%2FSvLwMfB4YCXJz3H0Y%2FvXw%2BWF4c1TKbJELJ%2Bs5tTCL79jJBjqkAZOTUmZAJ8XiclZkdWHZkwbAz6tmuCrq7TZQJw2xr%2FjbJA4WH%2FxHUzb0Xba3%2BYXAAekKUukT6VcgjvTh1PtCGQ3IrvSJ1oyEQLbR8woNqIDtXoaDkvk1yLDPMupXI1fr83nMrGJ7BwTWeA%2FmsAiHbfv2CRH8khp4eS9C30q2o5dyHHMJcQjtsMenU0CnTFrfrWkiEkq2xSR9uuqGPEL8zr9FlvlL&X-Amz-Signature=dc05cc6ab61cb5ebd5ec89f223933e5e58cf493cd23004e6b89707c7c19ba320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

