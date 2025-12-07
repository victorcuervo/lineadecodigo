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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWKRKET%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B0qxQOrbNC4zS1kGa3m8V1jcvznId4DPI4pEa2KUxcwIgV4VBu7BRVEFbymTMXSVi92qr2UaJaecirOx%2BzDpLKAsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPe%2B7Mbje%2FOE5ZxPSrcA%2Fgs4vzcVjqNR%2FYlmbp7VmzOit%2FZOqVkPHbUthW1Zkl1uS6LuYgerObK%2B3avPofhe9%2BMX1OwStU%2F71WY71OA6HqK7q%2FW0tfTWWjU0TdUcMEhToOREe6bbl%2BKJr70Oxv9tZTRKtePOL0WUXiEZmdm1RvUBdrwebYDn%2BOZOVuOeWEZhP%2FR2M%2FkSur2FGpIL%2Bny6cw%2BVbSIiMs5nDdeJbOAHQgkZVhGUPT9if%2BAULadWtaLzKoUNty5o5S3xrfMpw7EhAbYczYiJXV0W0ZdtyqygcHmf8Uy%2FGEkZPh86i6NL41DAiioojnZIPmggCY1iuD6ZfeDqAbwAhSOBVmT849e3sfjs2u8ANAukXKjuY7T%2BlXGPAUSKpkSUI2gLrj9s%2Bo5tiUtQ5WJWYL7elv8kCI%2BWo%2BIyOYEgJ96VZLcAwCC7k02VrMsWa6RsBVaXxnPLsco1owipYy3rUAX1U%2F%2BllngnhDbhw08XpaBmwBD07ufo%2FEqmt95F%2FP3ijk1mAX%2FQ%2BJTMJJkIvDvUCH45n%2BG7AgzQK5Iht7zkxAfKfzS0fFOspTPME8KpNAovxsRylDCQBPwzdX8DXthF7J6vviTghk2UO2J7R5MzJp8een0gu09v3fOjSddZwz0ysNsnL5BMPb90skGOqUB4BzKROj3firgukHqFS9OuXYFcjVOhsLE85GGflga0XwHyqjMWyuFBLEGxfSAAtO2VbLL2N5NliAH%2FIS2NJo979o83sIRb73FyAgfy0CKxNNxuZqdXzgu%2FLLjwkmPcbGoaZlZNKZAaUaSkUXrSfyeMdw6ZFit0ypsfuScDgcN4yXZ8AOe0aEmYcYTJlJIZBiDzRqg3RTwOy%2B2kE1GWHV9xMwtj40q&X-Amz-Signature=2d4f69a66db30791cc3bd2430aa5094c20ae605ef88b1b504f4a37a9c9a2f50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

