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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666635UL6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQjgcnGLm7zZDwRXHIW7wbYDj%2BmthFerf8JQfP5KUA2QIgLPNe1xy0I3KWHtDe6oYenQSOCdcHoMslJYkQaQmSXuIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJX%2BmsS9pf7S3TCcmircA1LgXXRva3xNC50S%2BOzJUri%2FwxQ8UC1ySLJloXw8a5gqxK7AFKfi%2FVXSRHjOQb5g%2BnprRS84ACubmISmajab6NeFa1xXL%2FnFUt05UVXeKrIQ015ryQCFugp8VcAnaEejFEjeXuRAEcy7i1oHGTAwyvR%2BED8Fipf0dLn2RnkxlGJ0H1oBYCNbb4ACB5PnELTfSrmXIEO%2FkfwxO%2FDPDJloieWr3TyvGmYIJGP0MNk%2Fs1bH8Vxw0MCwV0W7u2aa%2FMF5zcZ2nq78AO3SRX%2FMfGE1WJhfsrc43Ei5MoSSXWMPNpk4lrms8E4vS9ipxaf5POMGkg7qGstO1aGAq8bqEXqX40pzIcZTG8tLG1EJEInfMwNj%2FyQuM2HaemPx2aJOsTFNge0yvHIeGWlUt6r37RN3Hg8brsuH2DNI68wZrFUDIG93PLvbOm4DCt8z%2BjvjcLxSZkaK478X4Tx%2BkffhYbQaaReTTpn7aXT7nazvYUqMDu4CUrV029QBYphxI4OJpLiuzTHQJ7BZ1dIpqVhyUytqAU3L%2Flxsstd5AOdbdwa1QQjZ1m1pBSUJVxnFN5N4mNAzVCcJiSKi3oKkvRNr5IT96Dfss4ozav07QQOA6AaIURgTAaMFwMS5m4EjjLtFMMCpyckGOqUByXvOqO2XDNPOVttLvfqt7OkF9OkP%2BmRMoM5wlZmBkPJjDSyV9LsKJOpw6y7kox6rsiOeysa28QiEsXJLTRxD6XUU6WIeZGTPA9Bov2p02EIN9PSo2T9%2BXR7YTaKantLAjQWb6%2BH09lA7NihUSQHIk64LMganziVh6v9lwcoclk58F9beGZutKOYRfbdPpDS7kLbga3l6PCzwbqxdayE6KmlKwXNO&X-Amz-Signature=baa03b19f12321fca08808de64d2740f4733037c53231a38249cfdf2a4caf04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

