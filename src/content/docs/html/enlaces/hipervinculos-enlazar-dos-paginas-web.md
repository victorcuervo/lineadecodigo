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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SP5OLSH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjuuuMrAQ2rgLjX8mJznNeV8rUg0KkxQVxrcaqw9cqZwIgaXlV7%2FnfCWU3ns%2F2N68%2FdY6lZT1%2BncmlbihTfMy11RQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcY75%2B2MrOukynL3ircA5o95Bf0FexgKm%2BwB9csKe6oNuMJCsakQuqZLGwi9%2FMjryv5Wah9GF9we%2FXZcoFPuvHrZAjTaDBZM%2BXDS6YRnVh525aWOsfQNuphOUXfCGOhtnbr9UaUk4dwwkz6vdcHzVAY6LRv9VV25P%2Fl9VoTlyjFHXwK4wSqKtSwqAYUPWa7y0dFuX%2FI1dyjwKLaRKmt8l3m3DQ2GZeD89bUmGqoYA44KYoiqJbB0FVlbhYmavQDJVqUJTAsr67WcD%2FrSYSYznQY72dsAObLqeXdpOzfGDS7WKhtDLYKOF4lxXkGzi%2FPFp9mVBGrrbC4c%2Bf9j%2FkpxhEwE7lu3FdBn3i1dz7n3NiLFW3KxSvUsuhvsm0TtI3gjhONtOE9K3Q4JAVuMYuV%2FMC3COz7B6c905qPwriFf%2BXUs%2FZiX078Mm%2FdlMwhN2bI75cS2PBGCNwbdMQoa7aWEv8TiNHVUNvWIijba9FQYigbFVLWtKGCSthpYY%2B9ZlD2fWwJgVwH%2FezWk%2BBI3bhihH%2BYiyDUwmsnrLmxGdQyKG20wfi6ojFjuWiy7z%2B1UsgczWtuQQelMWHhWIDkrdggII10tRNQbrnUDMIPe1qLG8UiyEJJ%2BFrWe2jqi6hgTKCgD6wS4bN36l8tY%2BCEMMyh2MkGOqUBdK4KIfd7IJUCBhFLNIuluvzXEgt8eR4cB56bZik3K8kJVAY7NrxqhmvpCFxwwBt6cEUrCWzyhfmXE0RPLPPucrD8znxh2pN5UHll8MT5L0Z30RKlvqOJG84NMyGr8j1rZJSUMrkbL23u8PzzC6NcylBxhel1oMhmtsWlv0k8nQU8ElFiJqRT%2FJO0hu3tIVCuJ0MH%2Fb%2BuDzUWN9%2FmZyjGQa1Xry3P&X-Amz-Signature=36c8801f7daa7b28e46679b2e6e60b941bf86e75a2d76595b69923a461095e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

