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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3FQLCO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGJU%2FDviadTY1BMsPlAs7iJ7LmAbB4YTVV8oaGe3RIIwIgc9AAfGA5BXWgtujfPRSoQc7RLHXLPDB9HEKduQjXXqcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvh8YxOI8e3zGZoZCrcA23HmZ7Tbc6bu10ikjJGfHZm1egr5SjX2xkKfWofozNNWXoWM%2F18UagRB%2BhxkorO8s0fW2NaE0AtLFYRpW1Ql5gaNlC%2Fq7W%2Blc25C4fV6BdwvBhO7WZUk4lOn8Z5%2BuCEzelG%2FVM337PuLA70KiQSBu7QtY4QCwF97BLK1mZNyx59bvQLclAfpP8gHxoXA4RP9AyRKEsvcSF9xw7aaeLp%2Bq7EDdVTlsRLhPrBTHkRI1PwuiEtdj3Xr3wI2RGfhwbLsfNOT8Exzcjxhdn%2BU6j1fddWV1i9ZCzWM7C1%2F5aX0WB1rEK8cCGAWxXMj0rgLwBmtorI0e%2BqWY4RoNsCC8VjoyPrNiMldzLxHyhLc7RpTTS95KellVANNl3CQ7j1SHxQP53gMS07WOO1R15IcsTWwRfEK3jzH9Vc%2FFCeB%2Fu5A5iVjCAyYLWwd2sXdX55LlFoVC%2BEynCZ1JxR8tlagWvYvpAAWJSnHeuwyvv%2B8Ik02ZgmCtAy4hQ2HvvPuV5UNyrNEHLSuZV%2FdqIKoV8XvXijWpqkwetPf8O9rZt54x1VyX3tOOafqkidNNGK19ncLkaBGoILsqx3Qz2AKOJqYvND8TNRAlmn3qh4b7LP5qxhwJal%2FljGR3paYfUy9K99MPLG18kGOqUBzD2JFloZAwynJTByb8N6UTevL5j9DjnIn9C3s02kXS8S3y3f2fV8i3LrH55vLhv3PSCZIzfBQbluc4NBfyLU0fOwTNJa36cvDgjnvtn98I701Tn6h%2FHUAO7yw6r%2F3TRHZRCMglrtoD%2F5W3aUZAwQ422bROjfAXlkgLDIxk9v%2FWz%2BFhCDX%2Fvp0GLWY5dxfUDMK1vfxO7QPERak0tjvCDJw4cycCgI&X-Amz-Signature=ffe3f40dd561aed22e1b2be10a647a1350f68d2cecc11b71f279865ac3c74397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

