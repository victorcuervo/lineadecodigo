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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYRP3V2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiDBpumHKPUHQOaynMcwE4s91Yp0%2F9tcEDh3TzyofONQIgOzRgQP6WIuadKZnSAeYqUH0sXkBxOGg6rQRTgPMpmPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN5aMQqsJy66egQwircA%2FXABm1FjMT3FEZzzhAlB1z8xwclArPHnWcycBWOUIZ1uxba%2B5QGEjvSv%2F4VInStpHcJNlbIRWO0JysBbp0T61oG4L%2FnhXfVIMBL7sEBdZHWHO%2Fd%2Bi1L2bD3uRb2Ze0bfbvJpoHzHoKIqwtQ8pzPEgr3SAhHYx5wk19pTn8DL%2FgDfQsf80MNrDjRu50XbC6l360Q%2BeOXgTKfZDSadXE%2B6J813cfg1N2llJikMt3g06S1p81aHym%2FaFRbysZ6oPPmX%2B9Xx8YooK12l1cINpjxqkzUyBdyI0moTUmRX6kLgCfqI9N9o5jb1N8ZznNHNL%2BWqUxorGYODqQ7vkoLhwS7n40sFE7xQKv%2BvlC7vUp8sFO2NlMAlZiIzR5tKFFEzBZynWciu6O%2BlR4hYhBnfjLwbwXhYbo6fK30ml79MqG%2FPPcdmwxNWmR3qwcxDhGKmbdle92SkltrnuJgXPLMOc1VItmGgqeU%2BdBVlYPZWGvaKHvCSYg0M%2F%2FWMrNeYsGIofjFid3kqDt7hX40vghJ8n%2FcykJNrKBXn0QZ2oF5IB%2B8RtyB%2BNEGJtzs8AmJxad8AsYGRIqCmZbuMyLUu0jJMiCt5eunIyXFn16Qm7%2FH7rz5mAaeIaySAtpXRcWPxqCBMPH90skGOqUBKCtp68BXDdd7U6mWVGPH6rQX87MDyASQkYiGMWIGqPUZgOkw0zaSsUmhOqB3n6%2B2q6LhaXTeBi4PAgmWPh9EGAfoTYaKJG7rID%2FYtwxuRCGFE5m8abuh%2BWkuQdpYLJdg1ZpOtRNdJVtMdnCX5XwvwfvHV8RaUsgxMm5h0ugF5f8LYfvwEOcN8cjENIiEhnpJ7Va3GW7NvZ2vh2jt7cpE%2FGZEBT%2FT&X-Amz-Signature=cfe5da15af2ec5d5a879fc1b12cc76cca1d90586ec8250dc7a3b63a05b7344a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

