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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEYRUQQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDZFpWzUuPMhPmzFCUQpgxfyMwBr1GRYbYVNA%2BBHE%2FVAIhAOs%2FaLqtsyoGAxjo29n9WDcKcxfurvqeQgWcVgg16l%2FkKv8DCHoQABoMNjM3NDIzMTgzODA1Igwp9i3ptF6MGscCtTwq3ANb7ip1Fv8DPBbUiBnPbE5Cflkkzf4UgNE3fLf23JvDtD7ZzZWb4GIH0rRFkY%2Bn5Yo0uvP7Ini84GvZnKXpriqGI8LjOwIsn8Bxz%2FJ%2BOVWDvrfWmuPIe%2FZUvcbQC49JzmWDqOjF9w8lHd%2FOTHTLsVn97Kw%2B3YEf%2FXgcammYNS6UWtIAvboPU1E5KuInMrVIB2TTH0q4n0BTK0GLgUpZ2YDVnw8m8CcLn2GuxgK%2F0NHMU7q0Pf%2BFrAV48TQlam8KdTm4vYfQPBKrVrT%2B6asnq%2BLZcU0g%2Bw99vjOBIYi%2B51jOTtrfeVb8Bu3L28jiqMpe%2Bx8QJFiZXn84C%2FFYDa%2FQU2uexCyX9VyES7Eg1HzxumonUk1Eekog7xDCUyfu7JBgMhYySurh09YqgB5QUMqrJPUv0yuuUGMbW99jIwyIuHdYkqBIReeS64Lz9%2BHlKy76m5a5keftPtrCBb4usuEJwBDii6IGBz2ckBgsmRIfOSyxLGmv%2FJUVyPdXARmDRsSjZ350lx6JAT13MOi0f2ZKn8DckvhMTx%2FMnK7FKst1MH7qhUW6aY7QCeZv8Z9LPLwCy0m45uWpgi2KWU6VmyJ9WkebnVNeSMCoMZmq8E59r%2FJSLBYGClbdIQegER5USDCcytHJBjqkAfBshNxt16L1hXq9XNON4pfl4uMSjv455x1%2BCcpU4ntfCqCXUWZgGYSNLx3baF0%2Bw0Z0YA4UNMD%2B0wm5U8Hq%2BFx7OfMrzTqI4FgYas%2Fog6%2FCSnlPlUkGLKQoNMizBZSOywlf8LpT3lwQqoXwZFnmR8vzyTP0%2BHgiXPIBE8o%2F0g0%2BL%2FbDC0e8LvL%2Bgigjwk3hciGoaSBstjS2yKAHOGkfVijmRHl7&X-Amz-Signature=26681f84d7147e1048654508ff5838b29344c8a21fa9b8c0d7b47d583e5c731b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

