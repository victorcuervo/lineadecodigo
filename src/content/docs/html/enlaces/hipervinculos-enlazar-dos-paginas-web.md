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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRMI7C6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8YXv72HbIUTM4fusonYEodQQBr7wr%2FF7aX7ZudYkfwwIhAIbFKuMY5qKoG4QOvdc4eChIMdueMRrTDIWfUiRjc9QuKv8DCGAQABoMNjM3NDIzMTgzODA1Igw5%2B9tco0C82RfEqzUq3AOpqz%2FnMmpemSK9stDX030wpAViUGSF3rGW7mmYAOXU8rI63OAcnP8HCqtrb%2B2R412SCchCmu4H3ooWeyy%2FhOP7WvyLETPfrL1nxiMpTtKLhlmjKvk1Vj6rrIWCpDZwP3fq1w8i3IXz%2FOBK8YHzkQIUfxX9jAVN7aWUGIMIt1A0T%2FB%2BcakPA1Rquf3p4VbzVO4YcFrujgbkLozjwiVVxIl9Q9pvItUP75BOtC9G1nBYSxpkJAkp2Q23rvqzbrpyVgAf%2Bjb6ujuXgfnH03phT4JX3lZ%2BWKzLkmjvss1kz083pKYu7WMG%2BGNSS69yvaEpwGLYbOFDUuOqhZRGRQ39RieKuWhP0fHlUkRjenMHsBq9Av7Lb06W6nX0tjQMAbf%2B5%2FCf%2FlnnKjgRLFQBw5d%2FCKvqSbpkipJsPlg6tbjda5vOu%2FxKoiUUuCzxdGUCrN2qA93x9QqTrIRZ4bIM5KmF%2F9YWIS1cRF1dfV9IPOear4GVllcUn9ymzH6YE9HzGoDyDBZ0pAzHgBr1K0SxbxiOXmc%2BJVGYxu1RduATpvuPME6DKwmDGALgjDVOGVp3U%2BSOEVV7BLSkZDKfOy%2FMjriiijg4vg1dQqsGACsnBKTyTSSSsOYMRRQK%2BIUtam%2B5hTCO8cvJBjqkAfGstlJeG85trEdr8rt2rQnQkdpHxAaycBxgy7EqEqCa9HrgjeLrY3Gl1qX%2B9GIij1nfJ9ZdWjrUfL2WwbNVi2FzwCGoEbzEZ4GZreM39bBr2F0TPEUM1K1eb5zp5CNnq3eoBBAg5CAXHn58NlqyvR8FQutiLSujmVDsgBhnzch0greFSwYjfCMrlsxmJzhnwEaPyVGItAuv6KxJCPk334LoTN%2Bm&X-Amz-Signature=59eef95fd799960597351aebd947bb10071e6d61bf5c251c85a6c6f92ac81499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

