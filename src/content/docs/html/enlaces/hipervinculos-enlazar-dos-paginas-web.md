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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOCYKQ4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjGfs5Ap%2F70ETjq1f59%2B9RIwUaZlhW8O%2FBB5XENG%2B5OAIhALwX2JKc9FUz4nR4kWUUFDjpM45A6oTxNw0Aqyb2YbSiKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfmYPQdg0zZq5re60q3AN65nfYreE4GOlz0zMXvAilGeyGHOLKRBKW%2FUj3qdRjq3PYTpetCMdthSpXuvrzGDo%2Fj3bmgE4b%2F6t5%2FVY0AjN3gUaT3XnbA5KY%2BkHDlNQCc1l%2B3x2w2p9O3MxSFXWAL5B3%2F4wb1jpMAz9kZTa5DV8%2FgWFaBVoxNGHP2No5ZpO7EiV%2B9O%2F70h4Jkx4haCyY1lPX%2BISWkQ4w6ghDhqycrOyS8rlYTN4MPP6I4ml4iuIO%2F3hC4ObN4IyDDQQv55X52Dr9cfUkrlrWgwLmulzdPMHbibASOWQGDbJFUC9adUFYJoVsv5JavhYS19Co4kub5lXfACmujNuo7kOaC357dhB5Yh%2B78oq4J0OzTaMxMQGWfyZ1BFlgh%2FDBENvuTlh2ptjm2k5wK251ruQCUUKyxf6Q621S3sVXw0SG1leqPeg0FwmgeS0zqrWlPlNmfXo53SXtxWEPdTE03%2FOyh3LYN%2FSPK4uWrWB2lBdeHs43bbXXCGCkbImBEmoAYq%2BIm2UmLpTjx7kaJiVp8f4szIX1OCO2lT9EPafUJ1o%2BPqyg2Eo0mNOW%2FaQM0Rcm4VVLIgdq8flGnNicF9CC%2FMZT0ZKfVnvls6qnxCL7MrnKto%2Bivm4uM8wWJm9z2YZfJLotCTCegN3JBjqkAfWA8kY%2F5IDTwoNynwQfhn1G8u7tEwaPNUM7PEhBoKv1FgMxPwzuJzuLxpr4UnWirGfwJ5mMU2MzoDE%2BcjWTc8Jq5VRQDHZD%2BF0e7qggHa4jKFdDgz%2F3pufRhof2R4X9GlZXTxPR1JmMORInB1K7bXR9EsOOHavhpyfvyUYq5mICDf6uuOL5i74MHcXET8%2FeZrcw5hIX0NGCsqYAvUDXJBhCcNES&X-Amz-Signature=b2ace0183dfc6c3a1443c5f9e0d0a586b40d991417e9d24569ce2f9cf76ceb3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

