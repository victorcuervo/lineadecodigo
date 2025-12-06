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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4UKON4Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxH5IRKUjdm259GDPQPMX%2FnfXdSIq%2Fvi7hQZAvjlraRQIgdms0iKO2t4J3uXEwbOboruv1gcFx%2FCTnw5Qx%2FqaRYVQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMXxjYNAFLDv1n0wfCrcA8TyXvyrbsYpXSs6FOlIw664QDe9ltbUPblP9Km3d4ebwHIeeF1vWo2dQaF0zu0unDxWkUtCqsQM5Waav3WCXUoH1vb%2BN7WkLOlQgvdUxxuBHsIH3cVr6BFdgkypcju5pf79rcbXtfoHkfNrd1nPCGMti6zvfkQ5%2Fsxc1vMGrhw90ZD6wvfd3RXVt67PA4nzOle5gLP4buhGyC9Jh%2FvrgOTlYDiY%2FfRB3voQgMokWbfbIfEM3H1yfel7fGoaDmdolK2jlFK37HNdVBqxY3dWr%2BRW0NIwZCUa%2BnQMmZ7%2F10bmeZ4yfnxeyPpF9rlQYmXMW63xSstnm30HQQSpZAUdyt4TxJCjQCCgQTPVCH2ozF30f1rthq5mvWbyQV8qbIjqJ6qhRy2Qt55eqgSMM3t7L%2BeFFz4qLkW62dEyDrUBwrOFbY7ntfeqO4zzpeyNGR1ygFhUWEBdVrRSoN3Qsw%2FYbUnp8mjzksUBC%2BW3S4KFpA%2BGyjTTryK%2FC%2FF%2B4or4C%2Fo%2FlOBFv3M%2Bwr%2FHTCct8UdxPmC8lrVeAWuz2kyMB04pvMfmgCzLI99%2FM4xfxsWB1L5%2BON0wpEw3Za0t7sICjDSc0L7%2FpXH5FKvpHo6yMIMXNpD5RjrxTa9Awt1NYeAcMJ3ezskGOqUBGmhc3UBnZOlbaKP1aIo8906I8vkV3jOoCQmC%2BUxWudGiKYd2HPYtsQ5e6ENzOLpynlyOyU2J65zN%2FzTdtqanLeYTOzmdatduDtnX4qz9WclMMrq%2BfOqE02gbVLjTcMOVE5P3zS5FY8fHWkRGnMeZG96y8M83r0MdIpCRnWvA5XSGc2wC357ARxxFY3FkwvKNT3UseVlZVLdYrVzaqdy5%2Bf1N0Ezs&X-Amz-Signature=d161b44676f60d99768e66f6a72dc5d91d36043bb5c02a47972f89ee4b7dbbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

