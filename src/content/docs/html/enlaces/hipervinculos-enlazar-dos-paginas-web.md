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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XCAF77%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxAzNLbmgm89HK1po1Lo9qXXWecEiy3jHdATASV1DfFgIgI0VqdIi65wa3XY%2BMZeuukyqO8kuDds9DUZgmAuSZJfgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUc10VQdO8H1GbwoyrcAwZF8Ol%2FS0tsEta1CytwNwnxjN4yb2NTVTMz5W9ro7NddqnaEW2QCwljlQtEtRNNRN5X95PRMryTqwC4JkpKf0vmY6NTlmdLjqAJu7%2BmG9%2FPNgBo%2Bj17O2xM%2FLZedcpSoJv3LSgdB1HCmIKxuBs8pQK%2BcNDj04n1afWRfi8dqvR9GCAQSCV1OFMl62Gdq401m%2BGViBE%2FAfAKwRb%2F7rs%2FX73VVOArNDwh%2FG2SUUq3Dt46HVsHq3nDXbecPVGAI6CBixWOKqQ2ZSVMBYJA6Woq1DzEkOQKT%2BRiGxTPzMhOBQh97e3zc7SLgDkcrhibk8MGjkRg6wTJsOJUaBMwM%2FD%2BeavEKInibQhPbsQl38%2FxNvjp52RKb867ps%2F2FSq5wX0Y93vJ8DipZIZQ1uCVAECfUmHmPQNbXizy9HRCfRYISn7cVZXyX9jzQW7yZ7710ZsW9%2BWsV6L5dew6VJMrsqZquKXJ3fkUWHKRhWe7Ar9BhqCAewbuZ1LQdNnowJOvZvCPbiavH6txoxA%2B0w3XhsJQNciGmG0oFI4GDEpIecWYVjwmxFQyMjTLr36e3WgF9swIs8rsTU27DjoMldyzJqNAJyGU85ExcUedLHKRAmSqKSnKkFeL92DJx6gtn8ZyMMyz3MkGOqUB2dQMPrYe76U5VKsQA8A71EF0Uew7Wj5NUtX%2FXCVHjMGl8pEGuiLXEt7lxSEh%2Fj04EXXHy%2BMaSPpI9K1yzQKgyRAEZhAOjAgInEc0qfj5JszgGwzNW%2B1hlBGhpMFWfsBkwB0yRquxTstKHlo9yg%2B7dnJwZb3dblJ7XO2vrX3R%2FKnDWpslsICe9Nst4JiTh7LWPmQOQUQOQmrqWTHzaRZ0BYZ%2FhaCo&X-Amz-Signature=51897a5abfb6129ab5c824cbed98008e251ec991a4bae286c27b33986018d2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

