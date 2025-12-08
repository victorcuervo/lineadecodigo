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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZW6GPWA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn9eRoJ1LzAqST9NHdc6UurvlrsPeVzwnkn6BudPOuIAiALst%2Bhv%2Bn0SIeH5IxWsiMzgwC26cA9Le%2BUePYsWbYx%2ByqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMta95LmivJrEyEerpKtwDwRW8%2F9wwsVoVYuln9xTWnYd5csn7SFotGgqREF5S0vpLaw5vxr%2Fpn9PyuAApP7Zb99IH2qJtTMmS%2Bo3GqzoOnIAUNcXaIwsK0ogJrqETHFXUaOam673dXPYPv5Jmr4FkzV6kU60OGOHdVqf7lqSwlG5LaYunmzmvcA6hg%2BtfWCn%2BJTBsZTcfIHkG8OIpjDF%2FQmOqXYQbZyncEoWVIfPvyW970%2BRi%2B7qSBpKwYx4ICRZzKRPxG2tv5TVyntXkfKfRJZI89366n1LyH%2BdZKLeIeHpZOyMvAbwMHBtPGB55T1xJc8r2cSixHypgWrgr%2BgIiD2VLmnXXBWHAvSft%2B541Aw%2FsxkyZR%2BJLk0tbpjN05K8uRv4JRlTKG%2BHbBuIsSub6V3aiEO4WIhW4gnLf3mkhDIl9dDY%2FaecuqRBm9ekq%2BfcrbH%2FVysfPY5u16JZOY%2BVC5bkFuMTLl2cKmoHA9JlfY9C0lqMGibBSjlnBpjwEp4xIIk4HmUVYQ4v60Dq953oHmBHiP9cHDj1i0XQ0W8zQkILxy9x1PlXXQa7EdV%2B2%2BpWyEQ0PWcREY6OUR%2BmmQaEW%2BhJCpeN%2BG2oIIid8keLBmE3g6oBmBunnQQXW0TJXSQgNzPfrKFabGxMIAZEwmO7YyQY6pgHO%2FXxRVQKu8QURt3jmB%2B4uL907tl%2B1CCO4iAMol7jOzolfqiQefH3fU3MHWYck7vi9iIhn6dmqxs7CAsXfjs6LBLcfyvA538tepxDwRb8yDXepdeB%2BRsFi%2Fg7KFNJu3gVyaVtBaOG45TGPnzdQA5bFjPJb2Qk7WwhJs9M6IAX5BiCDQu1XPWi6TipmYYrleRx9l64mrSk1t8rm8Ekz5VvPQ7rMnImX&X-Amz-Signature=e01de28ed24924ba43707a9b96773d368d7a1086fd82de6eec6e0659961b2639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

