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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TUPE2C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIW08MeagHt4r%2BDhpgVNDPFmlHSGhE%2BbXgZilSBrgrawIgb0Hbx3kEcH91I0slp%2Ftg6VLUUDO1y2mueErAFFB%2Fapgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEoFQawBh%2BeGqdLbTyrcA4wARWhvI%2FYjUpNabplZp%2FJ%2B1L3Op9HoSRiONxqDcCYJFFKefu709yjBbSTC9r9oi%2BecY%2BJ9Z6pKxPkW09CKfY55rlzzlTRx3qkTjuoOY4bT%2Fr%2B%2B84X5nwAEiTxjHgIsjfKjwlNOlnAXuVy2kbFUB1lM1%2FDNRhLOFszx3llxfp2crtzDJgcXid77bKoEwlYqQc3nj9Gv1s4zJDi%2FLxRNkfXF0giRSoT6qQ7J9lf5YsDtfBqy950NPuxgD2KWomhPIs4A5wKF5y6bf346QXctiM%2FqMBtzAj7j6VIWG4yCTU8gh5K0spVcsiV%2F9OSRVKWnW175xJQNPBKXKIB7YAGfqAZ0WIuIesVCTDrJ9oJLB%2FSkdr4cSvODTiPaDrMHdqr3iG8mTLl641G6MvajTLqe%2F3SGoNqtIsquvBNUGymqnXbqmKXEg6pZgs9xud3jfuH9I%2B97t8ep1KIK8rz7%2Bw0XD%2Bw4E%2BwSl%2BZ4x1jhBuUfW61NnxlQj3VLezExRZY3MQpLZS5ccJY5gPNDS0WbK0sGjIQEUT2E65wD0R1s7XHRtkZN7ubL5Z3y7hnWKrdvRBsrOolFIwtNgv3HikIVHF2omvxc6TeGOThO9e61zfYSlnewFft5qLVEYFcGdvUTMNSMyMkGOqUBh1eHIzKiWS%2BvdeMKzSG7OCol%2BV8QreD0VunhRi6wqXgrcYS9rVEcOZnwHlcHY41hg5gTgYmnkCI3eAD67oyiCxBmMuZOO5trBg2MLPDNhNIrI9sELwy8krnVd1K2PK4h0EuMbtvvyMby6IME60fqP71hADFFBP77AJjOTzQ7E74JSR9RmPDVGmwUisxRrH55W2gkjllcG1WjjaZmbVMB2sr%2FJtOM&X-Amz-Signature=8661ad154fe2bf793becc7f1f126f620eb57a9c7ce0a9225792409cad117a1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

