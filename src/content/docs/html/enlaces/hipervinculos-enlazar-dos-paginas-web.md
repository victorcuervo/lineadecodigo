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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWD6NBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcOzqHMQTmsBht7z19UefivbMx5Wq5I2vhJhSuo4rRMQIhAOM5rpeQnutWRSQp9KPdx4BuSPQYiNqB70Gl4r5xetwVKv8DCHEQABoMNjM3NDIzMTgzODA1IgxHkGEW%2Facr1l3teG0q3AM8kqEL09ITS%2FehQtwRF7aDUXDjuxge%2BEmbMH6OPcgyb%2FiV8tZD0FNenVbaTlU6o70nhi32n2B1L1fYFUGYzrzi%2FzyEbAimorPso619UJNYYg0n9OG%2FcuvOP%2FKyrI7XhcDvqu%2FxVH%2BKb8lcnQMhZLRKRuNP7z%2FrLwzUJmn%2FrB2ooPLQdOVS47zr7LSWyrmRrAfddaR6igMvIE%2B6JXteows%2BcxWFvLhdMPj41Wvvtj03ag1u342ncOpXOJ2C14oIfGgLE61SDZC6d177ahBx8dFni6yK7J8l7EHpzWxPrcO%2B3RDfgiTlEaFqfoZv8UuWdSGDdejuAVdBdc%2BqbXDTzzrdu%2FVFyQgBdoieG3E1dV1f9x0lp5JGfsbBdKOJ%2BKASkQ1BwCGbtEdVVZmhoSEjppNlifO2imCvywlBWRXXZHmZiY6PJRqJq7jyL28ew0VCIogyNLMpbWBoLVy7iQlL%2BgqyintfNza3WelglKC5QAC9IlqlBiHbDoEf4%2FaNuz8Q9DZtTjH5h4375wPd82mzI24MYIZCU3mchfPRCmAmv3xsr41%2BgCjxP%2FUwqjijaOfTxHvf4jCruO1K7n0net9O%2BZwmb8gk8%2BQ4LEsz66ku4YmU1LnhAfo1icRwI7KjkjCmvM%2FJBjqkARTXeRYI0qjDahGQ2kSwXzhd7jfB4YqDFCdQ5UkOgP25Ze68CsXzWxOFHAfq%2FBlT7z9fgZiENi1IjTTXFwl1JW9ZJSXcbGsRpZzRa7D9GyNdel3lXYXaV9QTyG1iPgQVjvQ8mMHz4lWr1Fuj5LPaUEENOnhxWla8LJUo%2B6fW49hMa1wdOnYVYAKpuswOktVVPCznpnXWqNu4D1brCNVjp7SXbg%2Fw&X-Amz-Signature=b62e11087c0f421a0d4510bcedf2ccdce42219f75fb907c1a807823e32b22681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

