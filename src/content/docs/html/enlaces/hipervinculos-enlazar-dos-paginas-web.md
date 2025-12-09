---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PATNTQF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHKRmkHjB44rG0CR3A6Fya7GUBcrcwFD2P7DVv0SRSPAiEAzwBg6s5bSG7q2YshFBA4tNSS%2BiLGf3juFNkEmjLmiPgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBK80hj5U6zTEePY9yrcA6Xq1vJ5NrLl%2BZIrTv%2BfXpxYqgJWAgMNw5hx68jKwL60LdtfbQin3yQ%2BBRP4nxkT2r4BK2Lz7SbIeujw4pC0ip%2FvNSVuJLJM8Zbknb4ky8diLMxsJ0I9RWi0VTXaD19UtZBxRwk4ers6wd225nb2FJcoSZRWb254VR44yZDQIHChit7%2Fv36Dt%2B2YlmJj7ZYlX7AvQ4qO3N7Nxw%2FZrOH77O9h%2BuQEC%2B%2FFQnpRNINhbisoBl5jbd4G%2Bi3MCOgVofvieSNh5uSdjAuVrexydzJOzdHu%2FBMW%2FEt2ywBSLEchTYM7OOQeL%2BQ4S261ILPhMJ1sIvGsrUr4h98miBt6I0V9mp0vAnnEVbo0IW1NzVI7IoT%2FjUI1%2FBvLauWWK%2Bd9pJaEtsjV6bO7HXAXx9Q1OxGNMEKy%2BhqDmLPDmGBoVCO8szBwgixue5W57HU0tMpiRBfPkjve%2B9BIyqKYYaF%2F0p%2FQt65T%2BO4%2BcSzFsfoF349NXBw2t4Om3fWmrUrV40GXjG8kewwmY2w5w1ruMOxNWl9cVhiPqQGZHTqI86%2BTUWvA9zlGFtSxJbV%2BisBq0O1FCVvRZxIUktbQKtII0%2F6Qh%2F5w%2Bhc51LJWQB0NkdU2uGnQLfiYyQC1w8Xo%2FxLQs%2Fc%2FMJ%2BY4ckGOqUBNrblwojXa3J2lUK4U8WTvkdshudardMUawjyJYrZHAlpQXK7idn1pqe7gyR5KfBMqEHBr3eGbZJ33XDeiH1N8HQhL8wF4kpWlGypEShsZs%2BtDRj7%2FvI4ROzP0Nmm%2F5ORqUrmTCJgXqYDcc%2BcpBwwAlzEJqNcHkgFp%2FhsocVXWkKRt7JR0B%2BJeM0O74ZC4yJ1pSFtz4gZ0gYVBPYFkuE3fdT%2BvBkl&X-Amz-Signature=bf7ad897aac878678e9057b6af3c8bb617796e1aacdd8924e66686b6f5f58613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

