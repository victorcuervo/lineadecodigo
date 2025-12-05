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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O6HRABQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIArfRn9RO1hrQq9zHljD5%2B%2F3JSzKYYmTljOsM%2BXW0DgIhAKL151lWRin5B%2Fw4GFOkXqwFcashqp%2B6C7a7n4Zdv0WaKv8DCFUQABoMNjM3NDIzMTgzODA1IgwmFt6SXokchg%2BkvDsq3AMeGqHK%2FmSo5%2FidkVtt2EbGmjv6UNHkwOpsp4ExOFeaaCxzgKBM1xByXwp7%2BQ%2Bf6thFXBa5pKdZWYFi2DPSy6IHNFEBHb5Fx0RyEyJePzjs0zwGlBIwJOL%2FojWIJv4f%2FQSeixATGjLn1duUcHqGktEqx5ZQo9phrgyJQhqwBG4CZGxtbMRep%2FxxWkmkvp2InJbW8g%2BizlevzLaOO%2F1hZ4jXOzoqQd4DWb2ipCg%2FT8T%2FdpOCZwM0G4A8Lrj0W4idkt9AarqyMQoNIkGPRhDcODQ%2BITabNWrkNER15gYJQ45Wb3xKCtFzFvNT6B%2BFJ2IHKuJ%2BL2f52trQPrcuUpiAP0PFkJ0AN1YNw2nPUpFpNjS5fqQZve87j%2FuAlhFPr6cdkCK0Fojc3B6pj44heKvjkmckAX9Vyiu%2BZBl%2B6y%2B6TSh4zkC8ORNtUMCmLZWG1BsT1UhaxKnQvXB6g3wOvaU3%2Fr%2BKoI0GlKyimLpChtqVDZDfv9v95nx2em7KOdi5A3n0B2yBWeXSzkT0VB4jUalxaEGodGSGgjaHTUnCEq5fWotbsCNlEmgBU5agY%2B7XIVAV8mO5gxmXmO0q8Z5C%2FlEJtfnZSBQTfIOuSJJyVQtxZKmTNk%2Fx7JL3HkNODF4IhjDAqcnJBjqkAX2zpo7CXpqDhDoHTO9eekQlosR%2F5qIUDOtdlMCrN5JcIDM5stGLTS20DanB5STjz6eRyrgMhukjsiE4HpzF35NJtkESqSCpefBhKyzC8oWhddl3JPFwhwOv24IjIwCeeRUf0WKelZmJ%2BU0KCmmM7uv%2FYbWFdxxeeLeYppkfOqITQHec4yYXJLvLw%2By9t2ov%2BLT2q919AXxXPuPyxIUA6Z%2Bj9vzD&X-Amz-Signature=d06b0e935dd1b6e04af717f328a92afba2ec0fcc17a965bbb58eb5d66ac6d9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

