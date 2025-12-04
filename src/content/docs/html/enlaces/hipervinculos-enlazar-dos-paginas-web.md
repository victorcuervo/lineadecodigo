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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QBI2WT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDVPtDbVUH1V75inKSqkKa4Pz23DaWmKVhepsKKJvjuBAiAF6DS7iA5RwBrKDIoqesX3NxWvKQPYd9RVX3zq3HJQYyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMW%2BV9uWB8WASzgNuuKtwDrOWHg7QcqrK5IrnjKpJehRPun5PLf0l%2BzpOiXXNAPxzSSidsSa%2BlIfjAHVt2KJTPcpn0SnOUNHg1NT%2F0vfdsD9pobxlN0EXhu1dcFau57%2BkkI7ljXYXjB53UBSrqWXRFqHM7YNrj2hvzwU9EAd4neFErSDuJZYON7UXDSnVKSSfnZ%2BDU%2FYx3DmIUtsgBmo5ULf4SJBQUZJQkR7PRJD6MAd0P0xuIi%2BX49UOy1kQ1g8oaoZIzOXZyl1huX0PmpRvxEB7amgONx3TCeOjzM7aUsUcQ8PiKRKvt5TEbnuAZXeTkz6CSdsopicldKxkFjs1i4EwR45LNuV0bI%2F03LYocaJzCcPdFOSvvSUio96mViG6KpnZ%2B1PN1YP2td822xLwIG45aZCTccaAQyGEwacDmQJEUt%2FATMGzWsEYZ%2F7kDM0nuoS5LYtWSh6knXIP3Myh%2B3T6DW%2BglQVLYPu85%2BBljrU2KdkaoHOdntwhSdKiWPn%2B0oY2MgZiQMk83PC4OHDB9K2tusR1QAcUXZLcxKXw5PXETS149vPTeNPs7vwxDvszOBvt5bOVy2rbpLiGctXvwRj19lQxtKwzG9gVDwlpz0Yf7ebYKIkhn%2BImRxwUiVr5nm3WGnRCbPWYOzuIwgcvEyQY6pgFsvsnC6TPEZofJphoJskCKtHcvEka7WfG50K%2BD6FzpkdvCgj5Itc%2FaH%2BrIoLk0lYeT51G2DqMPPkUz4vrZ5CHt16nCLx5ONqBqznbn%2Fk%2FWwZniMs%2BITvI8Gj9ixretOeneVTcpVSi4k2a39XRD8K1GKa79f%2FIht3QkrAvSoSij4LNSgid7VeYZBygOH2otTCMArVk0UmqYCehxE0JBOJMdjJelIpDd&X-Amz-Signature=87dd725fa3db28d5656a9c8abeb6520be69cb6ce03bf7023880a66ed87cecb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

