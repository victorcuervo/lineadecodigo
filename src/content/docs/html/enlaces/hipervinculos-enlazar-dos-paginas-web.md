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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHL4LQCI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngKRq9xe%2BEcDlu8kaaHLXgpt1qiZZS6MGKxhS2rQrLQIhAOH2VQz145%2B1eDEAZCEeVUvYMha%2FvLBoKnmAy5MqkROCKv8DCHoQABoMNjM3NDIzMTgzODA1IgzjenLXaA5dPbKIbEsq3AOs4fMten%2Bn4KiJ5BqK5UvRlMHe%2FwSaMO29ggg13QlbmycyDuQ03zqHUeJ1hhAUQrAgCI3T7fU7%2BTlB%2Bmhyy4LGo5W%2FaDTMQ46nLunrd9WU4VoOLEUkNN2Ihg%2FvcKqTh12qZvHQ%2F89fFK9ww7dVySZEY6C41Lqm2LgbbRdoDfp2MnAtRvAPPlFR%2Bh2AZaBIVKopmzPCQvyKdOfhGE0kdefX6pV7FpdrXG8KsfsOEhkK0d3sXVPLnt2W9wqiPKRWqg4sTPY0iG9z6owMn3CIN3WqhTaM%2FNCDWJc0cTal2V1Jw1RA%2F%2FXZfwNijqc6YE4HfcD02UmJHLz%2B%2Fk0lR9EeNr70RlpuPZUGsP3kQ1Osa1YYJsDN41WcDmEpCo0Wt7MIATDiP%2F8WJSZ9uvzyGC6poUZQtjCBpBbj2zuY1REmtioIFWTkqmbpcZA2Nr9g8CvkmESeqg9iwRmOfeC05jSGkLbe2IJIIL0RFiub8kViBFnQsXTV6hz19mZtSnEgv8GtB87Y6ZWr%2Fz1cVucDAqR6JjtQ69rwMTRVu%2FsWWYIr3e40z6lIhmYfEVZKm56YYc5S1hPdZxH6olWGUNCzVEdMYPpaYK5zjGlEVgOn8N3szjZ5ThdghjO4HQcnYVI7pTC%2Fx9HJBjqkAaH6mDMfO9XVY6u%2BpbozRmfNnUq7oRMFlq%2FZXEFC7gYGwC53g%2FX%2Bfebb66MlnZcEE47YllUfRyUA1MtCZ3Nyi%2Fcj2laUmWPOJNO2MqiAOhVOP1TCsCkrQ7HzMYcrGyziZawF4UPJZZt0NQzwSIpoiUiGEbG3%2Bj%2FZk0ij3ZXRoSgmdSj4agJ%2B78XmIl0wAn0vYgVEE7N9l8YGAgIY6ReXOEmnD0SV&X-Amz-Signature=5c5165a34a1783b5e07ab2a57d5609cbd042ab39a8769fbefa9a69beb15f5985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

