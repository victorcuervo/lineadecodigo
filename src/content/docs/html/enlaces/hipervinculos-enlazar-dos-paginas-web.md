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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULUAC2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpto%2FBBu8VzhcSRowo%2F3GnssFMiBb9htI0UYLakDls9wIgS8gkDiupGrijKp8WoKoZiJktwfqI5DwHBQxVoje7CTUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHP29pDU5SvrfPESrcA%2Fw7FW0mbv5CEmnlLxeCK1YUmIjv69PmITSXQ2Oe34PPWrwad4x0139MaAuSEDK8kRyxyTRaKTzCgGGH%2BYWretj31%2BAYQ4TY%2FFFCe%2BiJbX10XAml3F%2BCfsumkV1RqCdpqKX5Jz0yopsvCbYosj3bmT4gBCRae0BfnmkqqcCuVZ3PB2WU4XdgFDHzHI1CWvC9TOJxbfzyjjsKOj%2BwPeGmpFMxXazCmD01C4XQvkdjWxkaj0qnVoFbbbWhueARl8LSj88IZd0lCzBzV%2BYrYKvvCJ%2F9qqvSxKfCGWbX5OzPKg4iS2bZgcXjRZJFfckIkblNd2CKWtOXWPFfQKk0tUdQOu3TSfkW4gG546IVkmPPicbZOTXrr4xZkyC9aQapwQPIIz0cTx3JloWyEmMS5ljRFAa2feZhy%2Fw3Ph2OPCEJ6aQ6GcToR1FLY%2BB7N24ShSuRgOwL%2FFYSLYnot8Owg86nU%2BnPCbJc2mQhaG0jd%2Fb5mMR9PYbvhOPulFdA2%2Fk0D9iyR8YWuyKX%2F%2FUEVMkAAfUu3wZ3Vm8lmFzfbAEv2umwuMXnd2lddcdiaXrkM1qmvS2UyO21ZR8Ii%2Fr%2BWqnoXZ3gp4Zr5xbDXQYgO5fnoewwzXmIRXhBYc62Ir10qlHkMJHl28kGOqUB7ZIyCjCwAZp8y2XnLPplVygCvnb%2FTbh%2B8d0KQ3g8bsJGkTHxdekXapRmK20wvhnj7lplnMOyDg1JTwS8oe62FGvhhs6o5Uq2FJPJGekV41%2F2w%2BSFK4AHTIv%2BWmhDwxiecbH57IHTbAH2jJmsId5UOwSK%2FEt9hJ%2FpZjcn1JFmI2J2ltfiKecG859uNQVowwyVIhf81j8eCIDQ1oxL4KN1%2FtlWiUJX&X-Amz-Signature=0a2fa63abd7c027b01b3b80557897ccc20136341a598def4dd89e6bb094a3de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

