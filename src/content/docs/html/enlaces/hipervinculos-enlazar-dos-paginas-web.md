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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CS26EN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDw4hL1NjpZ27u4T9OdEA4Nbc4mJfit%2FYQ2QMrRn6GDHQIhAL0QpDbf%2BWv2%2BVghTbDfgiWByPwAK0I2C48qqChJnjqkKv8DCDkQABoMNjM3NDIzMTgzODA1Igxn%2Fu7VWSjVE%2BxrV5Iq3APAmRoo%2B8YXvQTgAMuRsx7R%2FSq8w%2B6PoJO9BBJVL6A5jSwplmcirO79ALeRforozKaDYOcikkikvty8MZzzTtvgpkNxw2KG2Z2GDLPIQBZWC4R%2F2aCJxouueQSitAbF8BbuoCNX9ithjgOSfpA67pmawtPTLEb3pyeAMRhiSb6HaUSklZbUk0vMj9ADV3OPhmaE7qXtGa0ewM2%2BcWD1Nc6WfsjOjyBu1AWS13nBrfh3H6FrX1lVaOMikrM3vDoC31VFEkIVnUXUS2DELW2pDxmdK5Nnc5SZe4IlB0H8wzkesy1A1rrpYOnAD%2FNjaoF9DAmLFo01dIbH98HMtmMO0BUbTgxgg5bGOMqauP0nfAcGE4qcoLIzf03nWkicF59%2B7kRjktLCRG%2FZN8tBSJnWD2psVoKchq%2F91XuQmbeUQJxuNNoi5wXikOKw3OtiYvAYUGMLRCsu28wjRQEebyh62MLmst5JRNl%2Bu4LPvGPb4OvUkiHzHMD9YD9oWyHUYvsPDEJJVWGjtgBvAgNxMqqhuIvo1fJEy5OP8gcwrW8yAaz%2FvOXaR4ZJUUr%2Bf%2FcoATYYBaRi%2FmXu3TSSE0GI%2BtES%2FGfxr18j5l6CYIhRgvosf7DVKiy9ub1f5yJDO1uujTDRlcPJBjqkAXEWpOuUxq6UjdqAMG46HwKytcofO%2B0YWcH%2BwrXNd1HB8UfSOYYp7dD%2BB%2FrA4JMsiYeWjK%2FqsU9qNPbIXaMEVTuIEg6058u1Ibl%2Fp1q18QBtSVgi8Gmv7OHH33Rp6WuzRZkjsC8fWXqRxOq0LPaIeP2GkE9k0DfqVeD0SCPyz45aoNn1Hekr7KgDBOllkCnRRmtVBOqChFGrYiSDQS1ZKM79Wr1p&X-Amz-Signature=8d6b2118324413870baf933f0a096da08e2b070cf731dd7752d6232ff7566b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

