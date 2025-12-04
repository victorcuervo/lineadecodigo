---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJYHJJI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcEDbj8XM2LpkP%2BDmkYTOXrKJMU56kWGnsotL%2BYAaspAiEAjGnLNdOSydgMWHI2tE0eHxf1EJGD%2Bj2vMsElDo1JHu0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPsFSh1zrsSXuFvh9ircAzvaMZyIXvzv3mp5zV8OQ0hjAWhMGUi9rXe7%2F5Kqdmm3IpSfAjw1yQv%2F5A1ldd%2BPVdnGtXD89kb53An2yxwkMmrx47RAAZM9hDCIUPEIyicdYIBYaZp5Azu9fp8TSNI5k%2Bmr%2BVs6cGntlBRSvLv38A8MdB%2FwKGZQPQzzTytOlofQ5%2FXZXUpapUAR9MhBBx%2BNKaMgguSTvlV23bL05VsCQsPXyFGrlM15L2smgEYoQSRt31pHfI1aEO%2BfXW9bWFaRXe8tm2EgSIHJA5TqLgS7fZC6LPE3LbwdKxnt%2FhRgKlMH7Nb1yI7UY4bc6Ib6nhWQbnfplWYpAIA9cO%2F%2Fk2cKV%2FqFeJa6m%2FwTHINZ3kfsd3GxN0cIVA5tLJjG2Lnep%2Fcgj8suoRk37P8VcJFV9qg9hPTMgcvJUoirL9maQLJJv5mB3BVLnUGCpqDFooe1Qe%2Bl8lqcGGPOtNVZ5agNms5tDjh6Rs4QW0KTcqUUmjEXUw6bOY0s0ukv8DvOL6HnMU%2BvLyfGT%2FtdiC%2Fwd0JhnaX7R1zd3ti%2FVoq%2BYjnURBS57NP5NVUlsSTt1dPDmsKtWXK4B1hmPmXSO0bfYitLV746owblPZj2LDrDQTaIjVmO%2Fu9TXnBm192txT6OeGLGMIncxskGOqUB9KuC4VvsGhqWEzBQ9h6cSBj1JuQCIcx4e0WbSk346eNiPrcsnd1PRVC3%2FmTr3mfehKkPWjKwUVeoFtXiGj4gjmMX8BMLpBwXyKz%2BCKqopFiHD%2BQuh8CuqD3zZ6ad3bt6Fe4qZtgX49UqTaliqjGBku05zvRO%2FI9u1IN1YO73eXWaT%2FFm%2BUWOQDe2UK2oGtL6VbEjZyXkCAfxljZyMUMa11mOKhQ%2F&X-Amz-Signature=3b03cbd0e7022a9eafd168efff4ea47469d13efba9087837aeea75f8e2f420a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

