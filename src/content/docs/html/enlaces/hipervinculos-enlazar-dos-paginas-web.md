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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MRZURC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdKMMIhrD7DR6SIFVCnZ3qfhDngoel0w8qVYnQl6jFMQIgKVgieZT6xMoFP649AmjnU8Dpmj4eUANlUDFMA7slf%2BYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv7hdocmtBDghaeDSrcA1iQygkIvFZ8roh%2FZmi05pcUAynjbRfA4BmifJ4qd1F6GDmCm2hPWIeQ4wEaKNPVjkZ6aUnpTjZ4wwGmwR8loVAZCpUIst16ueZbHLJGC6ROmotetwL5AkGwVMbTu9b26eQqdIt8q0u2s%2Fb%2FOSEfLmL%2BRaHE9osliSVqlKRrnUNpfqAsih2N6CmHmQVAnJQ7oFgw8GLH95QjN33UXwLDaijgzvMz1rT6%2FDNMWCpP9uut0AMY8Jgxacg9vt8MgLRPFjw0eWk%2FZG%2Fi9pkxtMQwsVUc46EtmCU1G7iXR2gShgkXst04fIoLzC6bb8BUHf3gP6gj0GJby%2F8RuntuqWmwZkMr7%2F%2BIk82vE8AKJWciViguFtylb0VEFKQnbdxS5rQVl9795Irepfy7OPI9LrohCWkk3Orku93w0b9woXSMycEyf4FKUSaBTLp054KPoYNOdrt3M8Ov%2F7ZfL4qofEItX9mEd5YfAM7jkmyuhiT5rxD4DhmaIYW7yT5sUKoYf8xPYQfbOx3A8OS5fZvnBhcPrnmIMYArgJ300PmAJX5PgU3%2FzPT6Z8Yg%2BY6DudopNwhnav7SmCn7Qmx1gRJdbgNtf1jazNn%2BE%2BB%2FTURDFvZ%2F%2FkmWmdPo0z6smmGdIhylMJ7E4skGOqUBtz%2F6nfzrmIJmediTayM2kQw%2Fahu6vgfEbAhfu%2FXshMqj97HzP5ALygLGmMUY6jdCfFg9oA3NpNBaB6Qs7p9DiFO3KJo1MPfiauYUgk4otHNJ7e3QIpwF1CQseMDEV4hbwJnoXN4nP4WCfs8rh5Cg%2F5sxbmpoquhrRlGLWMwHOAC5o6pIyBnfMGJu%2FRjj72Nh31KRpyWdKPr%2FOgSIwUL1CeglgXCd&X-Amz-Signature=61b3adfbb1876c11cb2cc03195b5c69cffd15b34f1f4e16e0422c836c51dc109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

