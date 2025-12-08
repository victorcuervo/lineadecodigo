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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OSZ7UN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa16oru8e9zBUTtWbZneBVG%2FMcUpMRAERE7gIWviprLQIhAJ25Fe3M024Rfoyljr%2F2aYQzwx3E%2BQcMCQD54SpqItdoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWE5kdQnkdNDHwz68q3ANlsXPKPWM6CGgRM21qRb9ho1wzWPfRmISbnompzSM%2FnRYQWOtPyyZJs1NJAg%2BRi6iYJCSgVM%2FoVdVxMw%2F3WnrGK1IlmZ7TLt2FFKetJE8bgGUIv3QWilyvQezg3LXOu8U3Ds85zYP3p0rH4RER9e0iKc4G%2BxkaAd%2FJ5UQSnd1TWKxkh5uFu6DFKsSi8Zngf9Id8DHcXM1F3dG%2FHnk2E5Rkin1MFmF%2FcqCb1ZdnKwMnZ6cm1%2Fc%2BNs2QSQXi98wf8h8g1big3Q6u9rohVoPS8ZsutzrdJVqPrWHtigHBUiOAb26CMcNZH8WivX32psBk3kS5GFIGNnXVfMe28w928mdLriao1XzMjuKs%2FL%2BYeITg9yhKZ7P6WgBpCLS6%2Fg9H7T7YF4xR03oJX3aV9i2KyuDjTXw9rKnaq7R5nT7XUNBOx7xfusxh9%2BrEQmm9rbhz%2Fu8p3z1%2Fx5oGxQ2VW%2BayHpQC0kWrAmP2SfXcR9E3nnuW2%2BOuzmmT4D0hidWXm0wQ96%2B%2FZBTAtEswbu6nfXCzAS1PzvEZnGvO7Y1244lQrvMJm5dNdrln3lzCFHlKGOs3fJLhiRcqnwb4YArEUFZVYYludOsAjs5nhjvayzUA3VwJlaR19tJkB4zhxa%2FeZjCo7dnJBjqkAXIDABP4GcQIZSZgwuF4b67aXZEZG9XuMIyzmiS%2BTcVFAw6xgnf5JaNQxWiI%2FEZxuiTho4evO81q8RleQMct%2BktuTlx7Y0yLMQt7oQtCcdR0ne8oMrbMz8KFdfx9jWrTC%2BPSakVVHZF0qfA9WRTdkLXSEAwe5a%2FiKtK9%2FlG0XmLvdy8vbK3s7TLiMWMYX0lGLXu4qQxXTEJrMqSVDjB54rUYBXab&X-Amz-Signature=f3a2e2b693316b2c1c8a5c9d2b1d23cff1516d19f0bcd3b1f34cd67a84a7c8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

