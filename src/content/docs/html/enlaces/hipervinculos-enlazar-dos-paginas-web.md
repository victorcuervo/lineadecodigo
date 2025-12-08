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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AK3XWXR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL4ZVNg5czQbGyIU5iMyQr8eWZhhFFmSO%2BdRMkJSKdUgIhAMueNCebXlnDY7ZaVF5u3QhB7eiU7c8UMIkJfTHkTth%2FKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxItjUapgm63SphUSIq3ANj2ksfeLOcneZMQuAelTsQdBmSS9ZNWCSW1XNgORqnR6lFkZkxiOFG3BE3DNz5W0dddv8fpixXWOAo2QAnHuUgl5uQSbPBuw63xUwaksGYaISCreCt0U50PELATExaW4n41L24twtSOetDJQiiNZ11u3wGnEcr5sLhBT1JQPfPpXBsGLRkdscVYy7JHGEHofBsKpHl%2FU3R%2B%2FLwPnKZseQlP%2BM2yFmNW7kDtMrBxNqVmkOJRmzRyklWjHidVWnqPYsqIma0scp8ta6cJ2abZzHl%2B0bRxjvfwZ0glUsTY8Ld4P9gdNf8p%2BsNbhVHZJtqSp8iRzUuis8AJsvAy6fRM3eFkSiOMYHK8ZsbFBpC%2FvnidlWuh4QXRUl%2BKL9zdffnWCFaT7p%2BwECX7IJ3BRqIfHXKMQfoG3WJSQSqko9X8L0fLeKLWLwt8MsamVcelaDb0UE3lFG%2B%2BXoWvMl3JRUkOuEyK6dO8nIfxYqHfiTcpi1pdfowbynj1pX2tZDlMivpenIloAIs0KIMEEFCFP8HqS4AUYjzKY5SRFxExRIByk%2BpQXESsphyHxjQy1QoeSWXpp8e1go0emvOx4Y0r2wbg7iEvUiXzRt7nPAxPYmsqCiKkRt52ymuWrRwEZVuMTCPkNvJBjqkATNF156sx1%2BxSvDd4Bn1CyHGJf16m3R9HxZHxCJwAlKypi9q5Vfslt5wzVtlh0M%2Fltvioyp9pMuX2LfzeiqW9BU7kjyWvqAwjjfoxrI49346xes%2BHHgVY4MpY9gkpKNC1DANh2roeVLJnow8VcfcSBCr1PN18q5512vbQxsnJeJnhB3HbgCwO1QfEf9w%2FpBP37XsqUnmwOsXkeEyT6WlLSqoQ10L&X-Amz-Signature=69b68ce8048a5cc732db09272b376352535d1ee29fd203a4b9f0e4c082e64305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

