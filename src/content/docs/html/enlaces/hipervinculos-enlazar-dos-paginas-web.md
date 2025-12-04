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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ZZ5WU5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDK%2BFuwTHUfPTRLK0rJTBZrB6IPOkW%2FbSQJb%2FcQ6Ve8owIhAKMDMd8snZVi1xrQvWuQvEhXNjZTWEHZ%2BPVQmwOXKd3bKv8DCDsQABoMNjM3NDIzMTgzODA1Igw9A0ZPwJk%2BNtOT5Zwq3AN2g%2BRUDN%2FPXi92kyRjcpXTUUa1TTMu1ZZR1ietEQGVaF8yzjWtXdtnK0z79Ik9lO23JiGC6PuQ8aLTUjbofdDbiqUZm%2BRY5OPJYzksv0L7H09HE9C4O32mIk%2FdlNGNs6tkiDn%2Bv8nqn3SXUeWAx4Ac8ZOahAP0xZIIKtSsgLHvRVDhTgtnCB3U2AH7KCWlxrREuBMlPbkyjB3YdVxp%2ByioStjzo8TPCc3BP2TDss0CkMG8q7iYi775cm7jgk4s2SWjniodBB2ME2x5GNC1rb0oEbOWRQeRdIxPO7O035VyON6a5SsH2wUBZP0P4ZcH8QGbpmq0SoOoLMJx9bRu8nm9CEYcZM1cSM3z%2BejJn%2FyrewCVhyvBcVxLJ0wGHnMu0ZBPxWHiAwYYJVrFKopdi7JymAAo%2BoNmzer4yd%2B2jv7L6H3Wkco43wehajOm5OFRfwON4m2SRat0lLPwaL8qFQNJgbX94lj5iro6I2tfQG9obqGslZMrlymAlDLulyn6SHOrXIotuCt1DVLCXd1t3fXJ%2BOADYbLRL%2B%2BPlYkTrPUi5fL3iRS9MSUK8Hu9Flhv3lCqihokkQdBPmAOzH5RvrvwQmus%2FGVsTWJKwHxIXLGaOSHvoU2TpfCAfzBq1jCv1MPJBjqkAbILjyZF4nxBjvGin9oMK0ahsI8SvOCdcPGVo3XqVy7sy0tG%2Br9Dq0FQvsb%2FS%2FfEyJ88YpYX1RsynPcRFlzOFmPhNGD9K7r29lCCAh4R1lTroeMC30iL7ij0a5HapGG%2FsLHDP%2FHj9VS6HXiRPqhZrH5qkw19jsB4y0LF09ajvXATE8a1f3VCJ%2FpqRgjfEdk32O6d47eV%2Ff40NKjtqKI%2FP6X7%2FXZ2&X-Amz-Signature=9c900424bda84fd5bf7ab47765d7d570cf54b0920398b01a66bb2d5521dde137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

