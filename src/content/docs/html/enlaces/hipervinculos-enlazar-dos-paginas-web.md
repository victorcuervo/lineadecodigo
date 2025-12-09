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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIN7RL3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC16TtBPLXMJi0Dc7MzW1%2FR8xUGcr4dHJg5PMq%2BYoL0dAiEA8CobREExDSgxiI%2FPlJO5D%2B1tnIs9tk%2F%2FL5PjaBFshjIqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBQwe6RnhNVH8CVNCrcA0g5vKZZeJ9W%2FK8t08QhsrcM0TACEhjUNiGJgfmCLsWm5dwxej3y7Othj84SKog5MpD4r5l8ylIzZhNgVrJfEFkCYVfRK3oUam9by5vrcVbefj1wRk%2BSc37L6vpKXzS%2Bjm3vSPG8etusfoP6NhVCfcU2%2Bm8TGBaitVPzU%2FRnF1UxNtN9StNM1m4Y62HX4oFUCZ%2FlMHwQ4RETmqjo8cpByLZbnH%2BypTlwVD6JiLFmRIZmvCLaEWGQ7j3xzmZRrjAGQ5XK%2Bf0gtt9BD2RNtKcgwq015DyseXpk22E3iuU%2B%2BFSBOQ%2FEAYDGoZtsWes9kXPtmujOZWhoFf1ijSWC4RNpdsEqyAg62KeDXryS5q7Y%2FnP3v5KNYrWx23OibvXL2xwint%2FiV4ysUBZXV2ktskyNNKWAa8O8phsl%2FBL%2BEfTZqozULX6zXlQGs3ByUjleGL5kt2vs17fiAKeW5znYacxMEAkuvvBXyvNTSBtFEEcezN4LPGmxgjXxVmvzhYu25BPASXMbFvv0WuXRE%2FrZYPsmnVNwAn1eFtRcRHmLigpJsojydrzKiAqUQEk3heIyEz70QTZY7dmMTO0H8eXcj%2BN4CwyYtJAMrEWtqoaNPtGNinaKmo8GMfOUy6x9g1dVMKXD3ckGOqUBcotyIjz3Px5BeVv6JSjuIqTcl81PkBuPLfCGn5GMcKC3c5w4ynmBKgw1TvAeh2kT3g9eveabuF72NhLHGcB2WPNKFWOt%2BuCpdg26gwsWIRkSfjOPIWXfeAMIf4aKXPhEh5XzqpKKFHNvkFfcjsEZbIi4%2Bc2RNkVJXffiYto46tixQ77S5ZnEQeJvnLJhRw2cAUuTtT3v7BnmBfx3BsW%2FYjjpARbS&X-Amz-Signature=67193077aea74aad0dc05e8faf2fd736efed992ed790eb16508c08954570405d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

