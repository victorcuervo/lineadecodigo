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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RHZPYKN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8jBzdfnf09e1vCF5%2BE70qr4VbkVmqRe2frlIIBtrS%2FAiEAgoaQYy6JGGP%2Bfe3lJNyEejJZCBkfhUi0BhS%2FrrPesYgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCRiJxA7Q6bQz%2Bj3kSrcA%2BO23RMUyOOqKrU4eJUnwmq3or%2B5kYnVgn96pN82V5JpolmPLzHPBGBtInXoMOFVz79xY0ITEveIiu0udRCUZWpqRt1hsKr8IkNS5xwaPKxQMNNWe2CaThvPXSjjkgdFRw5xrs2r38j2g7qcFylhFPw10Bw5WcFqrbr6pDFi1WfDVvU9y7es3DUZen6%2BNW7e6GONA4jq1H68zxK0YyBDwcDLoF7fL6UGLtkqxPwsYgCjsI3oGAtRC2saGR5GQoTOe8h7MWBaraibWStyBUuW%2BVtACR5QIvngox1sduKYj9yZk6Z96Ju%2B0Ab4WjdP2%2BGI1ZNxWc6mfaLkduwHL0OVupVEnmCpKzSZRwGUGVMyG58vBiS42%2BJnu2MhrR60kgHdP%2BnWElb%2FcTmN%2BKnjhZe67VN4rLWJXOCajpQItW5q7giCF6FM1NsS0k3AZKkHr9bxn4NRPFW%2FL6NJ0VINiHz%2BkcyEQcZemByj8s7%2B5huCZ8qvPpinNaCDd%2B4AheUydmxBj9I8KHMqPdG8xSY8yB37EOKb0hSGnfNH70QB5fnw9aIq2gq854TI%2FdOSRyBLtqoQPOYK8q%2FBvhTi2%2FfNXz%2F1WIrblUyIowpXZaWqefxbah5V2kjCZps3m9oYD4trMJWqyckGOqUBOi9BhlwHCLxtt5i7WPw7swlfhBT8Wub3%2BGW3jxiwmMpJMs2nJ1NG8aLuGcnE7fUaRJkCcLqY1fBOZfd%2BG50dRbOIIhZM6wUn7mx6c7ZX5GTrvFK1Mv6fPmtawvheFEcRBSpoYfy1ucE2x9dcMAfJErgDLyAB1iSMocnXMWFIPBNWjXnAumZfcPt9%2B%2BPueULhNgGHCPSefkmxaSDRc%2BNSSGoqhBXJ&X-Amz-Signature=a415126eb190d4e6ce3f62f8bf23ff1ebf8df9f2e2650a4dc26a5d77108ef48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

