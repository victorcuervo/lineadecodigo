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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFJ4CBQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv2dlbB%2BwSZhdCe010uX1GoNKbX4SwmJ0B9VKH5DcRFAiAOT47BRSWODmdHMUeocu6cffK8EncAh3Gpf3BmzjKWfir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMpk3lETVYAwBWZlQGKtwD7p3QF%2Fp8fALRob2zbVNvzeqlG6eRof6JSbhLLm1YzTLOLIp7QxiFSR9c3WjnQE4e4nL5n5boxXId%2BZtLQ543ejMGP1VU5NvG9VT%2Bm94riamxWKnzR%2FAJXJlOFiY85wIMSYkUh3W6KpVnI8moiSmntU0aUvUbAreFY16kYmVvo5M75FKIjPG3eVSecbMF9ljfy%2BLSBMQusA5iS0zKCNeDheQrCoBAu8RXQTLjbIoSEGeWHpZPaZt5LONFPzDIrfvBFcRDJHwWtoPs7vX%2BgeE173lxcN0etXHYbAB0YplPJSHPpp7ikkVlOiawUn1Ja8q5f%2F%2B1ijMs1f7mbWw1DEgudHpHX2aS3qMoyuW7Br7Yeo7xh5VK4zYOQuW36BMcLWAqHW5Fc%2Fkdd2jikxfha9hDGJ45gTk86zwfwd79n2J6Jafj8TsM0H7wGuzIyyu8AbDn3WOpE3STIJVuEm4pyOVD%2B%2BeqczvoWP6M0WyugjReY5cbwmR2sGq0Xt%2Bn6Re0TUpZeHnmEKvUe6usxRCK%2F44x%2BfTf4Qw4RJw8MV8EDybRc2Y5TOAKZV6KW%2BCXc4fKA4mlEKdHIvgXeb6s8IuQgdeC0frlCAa3B4nHfoHOd%2BgXR%2BHMQGRnm%2BXFwcwQ%2Bp4ws%2BvPyQY6pgHv1n3K%2FRDR%2B401H7jrVbhNP79DphosQBnt4ESd%2Be%2FUwi99tMHifpupG2NUyUqdahe27KydnF5ia3SJzCmmbEeIsQw9FsEdpWH60ZowTnZuOI2V9mXdMQM3KdfiSAiXeHc6GgoDlIT24jPMtyBbh%2B8WuxDP50DAjuqFuwe%2FkFwPETQa9CD2898LiXDMgriDEsg4s%2B%2FT%2FYUSBmlTgRitgO2hTL4RMXAi&X-Amz-Signature=f6bf66a70d51b973a64009530afdf4952092c4c0b20f40749de1bb508858f973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

