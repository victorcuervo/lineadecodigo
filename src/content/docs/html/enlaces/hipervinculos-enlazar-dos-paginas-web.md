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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QG6IGR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBROxC1%2FAZ9hz83PI79VCWBdkmQMCD26epdQLzH8X9wIgRRrZrube9Nt1JjrGl0yx6n%2FHlHKxC39Gp0DPOqRJ4QQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQCgECRECACSHUZrCrcA5UjU4hawDEvBjuAkMNrXz3FW9aEhr6rkRMAySh7ThmAkzTqlOLMV202dST%2B8XFulEjuqPSguLIWWC0b6BRlM%2BghScAc2rAV2Q%2F5AaUTFr1%2Bv1ofo%2BlORRgMn6NtxncKOUaXPF%2FV0NVBPlJ8LSWFn13iOEM5%2FEOPqRLxSlJZX%2F5T8RMQM8RF4OSLM%2FkzLN6BYmP2Ed73bN%2FctE2Cee4piQcM3N6L9Klaj50g22avudCJelti624x38R2JGCEQYNTqJetFGnWBopa8YjpiiKJxNnq1LCdVXTec7dhbPMsYG7GrroBL3LEXzZ%2Fo6XDnc8KuzN5Dpl%2FRC3yRzf6rfM%2Fn7dWJcMFrTORKeWPePtCVLDvHICYPEJw4gzdr70c3FpE7wlXovsdn8BhoDzP3BQNY7DKogg1C0LCUvP%2BftylFjtn4WW4VU7Tgkock0pywqtyczCBsNlkPvUPT0IxkEc%2BQMdV3HxEGOflSUEjiVU2if6mOSI5gRA%2BOScalmyKOfJkHPo%2Bq4ub7F%2B%2By1S0SiVExUaVG2Aza%2FaGWLV%2FoBOwBVzOZER9h372%2BEc37hfc4S1mnlmkaT8Sv4xgeJvPyS7mWFGO4z4lzW347PSOWudh9SNlEMkT9PSn%2BMX2QCutMK2l38kGOqUBphZmQjJXFvOTNKH239SoIgFqE1od6OBltgLYnk4OScA3shOj08cpzjPnsTRDJ0Dt6%2B3sxbQAutWx%2BE7NPPoguluWCCyLjqUR2M1Xi%2FQ%2B3MGnSeCaU2CelbNH7KEiUurBU3Hl1Pg0XMsAf3LtstE7sW0C8bV6FtAuEVOvh%2BUHal1QRPVoX8YPzMdvNlxRUL5ziNuGr9%2BnDjUaPFbISrlxQqR5zTot&X-Amz-Signature=8b30631f2ce5423cc9d56ea9f120a910dca8c0a4fc7bb3e3ca914c529b237958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

