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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFR2MNWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO82SNiSMprunFfrGkiDvssbEgzy67wPU8WAMa91RxbQIhAIQ0ZXi2RbiHhnKYPL2qcHpt861tTtpS%2Fe3ErTsgDCMiKv8DCGAQABoMNjM3NDIzMTgzODA1IgxDCa%2FDRUj0C2B38Pwq3APzKvKpUkeekMYVSHQB3QdmzeFAX7GrJEJjdGhIPWGGbhIHPbd1algNZ77dDjMeDXtTRoBOBV4yClRFY9p3j2gqVlRrP%2BVfBbaJPlyHP3KjcfvPJ8MbqV89Hd%2FWhjqv6DvETqlx5UaQFXMOYMLeyCQGB7n70B51VCZpFWAOecIKIJLHEq2EFrpl53xv4n%2FqJkfR07iZOfmeJVnCWyAOlxvhy9ZymgO2qvE1ZawdyNJ08HPlG4tObpExhp9Tsmog3XCprIy%2FTRXhf62Bqtng9nEkB8yq39wQWNJJ93LnUq8kEGqWsUBtpxqdV%2BwjRInA7y52r40UVEE6dOGYhBkgB%2FtW5%2Fp5Vv3QrLn4eHSfecDT3biJ8DNah3af%2BE%2FvH4Gq1JLb0LWmmg3WSJTf0dOimrFXZRBsbU3luA8Pmv%2FN4cUO7Fq5CIubx44blaVl8YQzoZ6L1VHzczhOtFMCo3LHkTu3pGrjwzdx07XvE1F4UXk%2BhPJxmdH2tkH9MZYb9FkapW2b%2FsCFfEl5MWBZkv2UdfKMOanYNGFAtWku%2F0766Yo4r86yah6KUx4n1emc1wVWBKFK5ArvRmjur9OuAssglVMk7MsPP5bLktXBB2qHkdUAMhk0DcAzCCbdpcXa4zCQ7MvJBjqkAfiZeG5eJa1Yo%2FI0NBgVxJ4ZReN4e2fjGBr2ZjbOeuNUfzb5a9lKX74bIA73MuGFuop8iPpyj%2FX3FyQHUeeRB%2FJ2pm5%2Fk2B7WmA0J6uEShn2%2F2XVGVCXUV%2FcuCicIBkolH3Z6QzfPp1mHkhRvreOjPNPe8o5O4SnsuUy8tlFjGpyQlkilOjdwPCAC%2B5YGt%2B0A01lcfcY3F08Apity5HBJyAC0yGx&X-Amz-Signature=648c9fb6f9426c8a41334a21c560228e1450f2e0c4badb50579602095916b413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

