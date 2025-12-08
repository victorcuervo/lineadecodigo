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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA6XYCK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl%2B5dyfKQcXYM9h83rdKCauIGQDkEGBEV0qZNVZSBDeAiEAuNw%2BzA6tccC173oZklNUnsZQDeeBdeRzq5wMaoAwi%2BwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV1WYWfGPS6YiraiSrcA0J16Tm5Ls2VqohdixtefcYWMxt7Rcejuc6ekjwbXU9QELpL2ByjcT%2FyX6Fmh5VjglCh%2F910%2Bpsrnbn9WAjiOvZcMO5PbfwKBO22dB2X%2FBAgKDGNiGadAGZ98tQFZLitxAbZqIDIeOYGa8%2FCW%2BDgQTfJOPxZqSuIrK%2Fx5Kkmi2xhlfDTnbSKWaQ5NAWWsvp9pJm4Tehz6G0PBiJcIaSVUXPMJSgQVgp555pJypoPEwzHxRzytscWcu6pk3jNH2NqWIHbpncCtwCnetGQ7lGwRHUXFPna93K7YqXVnYYAjizFlPZPxZe5Ee6Rjdn02dhJ%2BzMPjPaUVuBwhrEC%2BAvSnp1pxFrnCo0AJ%2Bxf5rXLAoiaGpeFq%2FUTegG7hCEzkd9oYpCZ0tFUxOPXxonkd58Ks2bABCr8NExKRF9kp5LDx5xEcNxiVtOqZxaLTqy6NL%2BziriRNDB4wf%2BZkix5CRFb3x6WBXpT8xBno7W7B%2FUWKnCoeRRC3t9YvQk6uneY%2F697Qz7L29UY%2BMFY6ysMWUqxINi9oq7rzVT6u3L8XYk1ffHvk6m3cQJAhpnhUfQXby9Cq661wyuW13lTq8JAh%2FNnNaHFqB6E8oWOSPVX6MmLao8EG6ugjhOUWaEWAe1zMI203MkGOqUBAHFjNgecUUoTVXTrNv0kwo0oz38Q8GGxFj1U2g4GFPgsz98xMaa6GxhWgc2KWDCWDHcA4LS8HE6YeWs7%2BWSqDQsW608Un95a1cMOalWxxVBugyeC0FcwcsD2nn%2FxAwHWb0A92D5om3YTz2nHnWpDUL5nbnEWf70Yx2Q7c%2FHnA4xSgkYWgu6ZuxH4Mi2bfzCF2cwXO2SmDalBaMS6MPjKpLXHF61u&X-Amz-Signature=f26b7028f7418ef51e3ec04f386b0e608d10249b1952931066b14b0839f7b460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

