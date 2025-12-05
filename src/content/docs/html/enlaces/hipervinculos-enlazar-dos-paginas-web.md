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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IICRU6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfk3MP0iSTYPc9RM2JV6BIIMK98pknCEELI5DJqFBHgIgXHLYeJL%2FbmC0NMIGERE3SNw8CkAlj%2BQWLwfcGqVy2fYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPMxwAyBfNad9R7eyCrcA8fisWCV4bWQCPWYDGxI4I4BxXMOBjgiX8wJ7nhS58R1p3B7u20dr4IDdGXvLLgP1llTWBUitmHyo5cGMYfdqIZmhviRo7VD3V0qOvLVquJmdjeYHSzywnrSRDfKwl4VLMgksn8C9XFprHSS%2FaiASiwYaURfgT6NxawDtDw3x5c5IPrY0Iy9jRb3cglzgnbinR%2FMuwcoZdY2RUk4v0UmQu1gXJX6cOeWkO6CYzbWiCc9LXFaKZCd1nSlADyLnPIN17UJ%2FArUHu0xVG6XKyBqzh4jCmt%2F5XpLr2tVL9xxuUYywLCvE7hY8PQpyNVoWuFmifQTOYErvQdnAS58vLydulhjdmZGMMX42KrAF0sYLebEZ0EgpeoeyeI%2BXGfZpkTDJZfpLDeZYWhLl3YPeJQx4z4%2FKsAIvZePgzUYRWXNFkHSRpEOQ599m61shu%2FrwW2uDIiSvKdXPGohkrX8XqizHK1loXoRGnSmr%2BhZA9huF5OWf34YAfWF495fCzMOVJ1F15MajvJ4%2B3odoFCzptTq94tP42poT9%2FtT3r%2BUp8yO2Am3n13xfjgmAfAUFt3onMOejE0OOnADrdQehZOPHmxlXmb7HRUK%2Fc333Lg9mdagJoOblG8%2FrtH1mnbVB1VMLOoyskGOqUBE%2FBsIBzsVP4A3aCQfd%2FoCV%2FaqoAhUv1zPXBSVVxcob%2Bs76quEwx5UEJHNz5ufTHHUxiL1YOyYq4E3EgeqbHf1NrBEQVCLnTboZcpXzPKcLn0UHKKXeoGrzmwqKw6ZoTRdy9ULXSlxSy5s3C27kWL4ZZvhDGJtaiyJhN87pjJnBenh4fa7TTZjkmQoTKqUKIMyko15zLzG%2F%2FD6X4iKP%2FikV0fXKuQ&X-Amz-Signature=89cc4852007bd6b48e2a5fbca84486e3b1abd3b3b8bdd6c587e7f4400dfb4720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

