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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4RVUZQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDztOP7uKxPotwDllSImvBT10%2B65xQuUsEklf07P0sI1gIhAKcFGRdpb0mFnfvEKgxB0BF1aWMu5I099yk7rgRire8WKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBWu4TQelbNCAaRE0q3AOFrrLBXc8wxDXuywDfu0CrlQH8CV19OYr4FcCAIuB3HZYpq19RVZ9YhHWx4c9z87RhVJZtTU%2FJl7bzVZmpQh4NMvL1oZXRxs%2By4oDMB7135coYAhXsJFA0ZbjlWXuwGX3GF8CerWXaTahRwxUpI0he6nNKpQUV84h7tvaFo6QwZcYrak1pzvxp9JUO3FA%2BegY5D7d4iBzKQ9smj3gssKtD8cnbwgM73zr7h4L0%2FL%2F1ymJbbrcB5CmVlcskhAPQpMnnzWkikQgfpfMOSOV2iCVBemlDD%2FXdIlU6%2BEdr5%2BeAZrTgXIWYX8Dsi0JvHW6azgYUIWW1dBeCk4XQZggYDtmtJU%2FjHxpPYvmeC7%2FQcQ88ArqCnYfpImUBb2U6wlQ1W8zDahXz15EW63uzzwpn9oPkADOZ0W3uImJbojauWiZSaZir8oMHPc0hRIFWW3WurdNfy13VwFKsJecZdHAsh5U2lQUlhvtM42YTLKEdTlviAGEXV%2BZUfffnyhw%2FzgsYka8skwW5UqV%2BJ1qi1KpD4l7hfTJxZxT0cOH091DpxwvJ6sHgL6svLuZH0pQy6gDIxBzsiX0I655kwRZu4bfVs%2FJgCQCW%2F3iwOuZQcQO%2Fwdd6Y48H9uoo3f6Ho6YCrDCHxOLJBjqkAbDvaeD7jtzDFRS4yhM0OWGinEXaTp%2FJTbhektoYbQIFaA94qQKB55eTwNK8YZbaszWTnvGRN62hUVKLwTbtBGItFYeR742480lBEKYkR54SjxbUms9mtdvNFK%2Bd1SmaLlb8dAjDmtWwjIvaqv%2BoQW1qfaBQEinxayO%2FkKMl0gw4iR8nWTj2b%2Bo6xWP0PUhNfacN9YYM9ucsmYmniMUQq9u3TDod&X-Amz-Signature=13e97c3de5d952c75c80877e4dfa3f5054412f5911b124bcdb2342eed1acb234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

