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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQGVAX2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwL2YIRvT8bNRw6Qq0UudLni7vCJpCL7YuajS2%2BtgkiQIgbcIoA5UqksNwdWGSpXJPmEn7zJr1xEqNua0uECbfIEkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq847rabKEvkKi1jircA0Jt9K2w9ukD8J72t8ik23EKCtE9mWHgUtBJL6KKAOsVRvrJuswqN8K4XaYJ6IgGzHUXufb4q9LOE0Ay96nAXClRCxL2ar1L22Yj6JYjs1XWkeG4bbQZPc%2Fx4L%2B3MVXJs9dm5msqPWop6f0bkpTNGryMmAayAdssVnaAus3kLTr7yi2Zc%2FswtZOyQe7kxBEjLgFwafgMQFYfyZ3VWJ0cu1K3Vlz60R7JbfCm%2BkePHMQOx63HPdPfv56X%2BX0y9GUFLo7%2B15h3qvQ9RT4lozK%2FXBRR0BWvKYAZA6VdnMOjwxbFeiZw2qahbhVgx1NxFqsdA7oNXJL1hg6Vdm%2BdmOoBaTkTkTPpFNx%2B8eaXORKMOi%2BgpHD4MZ6bfW6aYkQrQrQJ8%2BWgsPeoXDl06O1JhHEA2swE8XTdS6bGPWtfnlMDXmkW40Mp1RcyO6ae%2FOJ6t3CBnfBS%2BcyfILA%2FUYOX6yvXBzsYOBVR6GmI2wba8MKNLgaDoBlf%2BC%2FZjpt6aYZaMs7XQBk%2BTXTQuw1qLdK4YW6O28DgZzTRQpykwKIlo02bkvC834%2BlILuEc9xnxs70uEU%2FXH%2FGH7jHbVWQ8O4R%2BRV4U0ux6QSUB8TFoLd2crZ8OU2Nr7ZLt%2FOI8lCiHHLwMO6o18kGOqUBm0sL3%2BWhmyKRR10KAWJbvTABZ7LxJY1URUWmOiy2nRph6dLAQ38NlYTzwAcJ4Q1f8oGJ%2FOSnuK4qaVSTtFIJdgnmCt7D%2FowpB6pDwmpUI6w7YiKz06mPw%2B61kAQjR6khabWYQKxRIiZ8iHYlnNh6%2Boz7fA0Uj0ig%2F2W2UQeP3oZvJVB0zRIC5yomTCyXd0IgHuLyWEBNN6p0kTONqNg8ssKHYAfI&X-Amz-Signature=8a5d5a5bb54d832e0bf65f5596624f6c3c82d0c72a82f6628a05a8dae50b9d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

