---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAOGENH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl1lwV%2BWxp0fLHSvk6SWPUBMbpYS8CiPcHaE31CKl74AiBw8EbeKym4HXn0fJ9poGqAELzY36DNfzzJelCKKz9xtyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCm2LL5QMAhwL%2FCvKtwDLQwlTm%2B08zMzGqkrEmnnxq2Og%2FoHGGJC2Ro9Ij8KGxkv4lghP4A5GHGI1Emf1HLc%2BH9ggHSyHSTo%2F%2BapbjpU%2BrLGOo%2FPIKHLOLpUQ0xYMdAlb1kW6AdBirvMmw3EgSB6DWVVr36SqWcjoAVDJNaLpA%2FE%2Bfmz5nh%2FAH5hpxZ9flCNYLVXATYJTKbg9rRLNjpyc5yYFgUX29uU3Sxk5icVcGwpIIxbo9hS%2FHCxU8AS5JO5%2FKxaWn9%2FclG%2FQ%2FxAiDs2wXMv%2BDK9X58Fdj7LxrCULzp2Jsd1%2BeVI54abo3QF7TXmsJnWLZZvK50q76EyWqhWfpB9kuP9ecnDiTwu1IyDtgOigyHcbdBxqMoNc3DoeTicZZbh%2F9CctZVoTXGojE7FAsBfftlJaWEJDROQP3wgJNwVxOHlp9UK342dCuiPVEIqeBxE7Z0AGPbaE6LsZapJKXFcijzr0lCnVl9QCi5bSuYvHV%2FISyBe2QX%2FXF2teTPCvRbmm%2BtmsU2hOMtjFE8DqEc0kzZl6itMUFIP3PWz0PntPxl6CYZkjcfSPVij1qlI8iR3Jysk22K9EMN95CUcDTk4zUBf%2FJuxlkUwr2CUgiu0%2F5uxaA4pQhJCCZgiCkLuCBt6uEOByOek1Lgw297hyQY6pgEoyST%2FW1ny4BuHnRO26kwc%2F37KOIV9AZ2BvtoCUB%2B74AYzzTIJeNWFO0Ldp7buP%2FDIQUHElDRGb4oSl4aiiNtvYrQDwBHY2oTwuPDwcIJmUOWuGEcy76tJ1J9RbWIZmHXe4bIFG18JQChb1ACOMMZJL11d9tUu6AdrSEOSQFXAs0OjGPbbWAil3bXDP78h3doOxp7GvCA7sMUI5HvvUBQd3fs81HIc&X-Amz-Signature=bfadc4cbedc643126eaf37451ac271e4ab28dbf897f87b219b5e054712edccaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

