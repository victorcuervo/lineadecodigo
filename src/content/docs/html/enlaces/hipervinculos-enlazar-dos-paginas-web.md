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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YS4ALPV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJWV5oN9dvPsyuONKcuy8IfhqIxehjN6KqdwqCjLsv4wIhAMDpwtLAZJOXyUie1xmhCjpWY5ZUJHruMYBGHumSlX0mKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpqrSMHKnDRF%2FQ6F8q3AOnhYDlyUC1VH1gnJ7TzrVO12M3t9z6V7fCIe3VjqMWL%2BQEnYSQQ%2BO1QWTGlwwzdyJiHz22LQtm7UrC%2FjCOpuKLoJ%2B7y0YI4zt0O8dZV%2BxVM3NjvOR4Yle9OaOptMKK3SJk6fKGjbDbFvHV%2Bi27aVhdlxILzuvUbw%2FuF32FH39%2Frg62Rr3ydVUyvSHfYG5akF92fLIKYwAXr8LXqWPzSi1d5V1u%2FEg5W1U22%2BnDyC0RzmbJHrLN5QW7OwiPrUVxexdvYUK38RCz0f37DX6QB33dPB7XD2qhIFKdYyIRxkV7FUxnvAsoqzm0sKWdVzxjQ9FMagyqNFCG1ZrRtyy5AT05it6MR1PDKXzaZT4RPbJKSsyCEn529dPJPoDQg0aYL%2BpTwDKcRcjOFeiUqMcplUSK970enTuJpEGavBW2Rd7TUgDLF05MQtzfPnQqisSy0AtpZ0%2BCYZJDHrsJQd%2F4aIKBq69evb7lsq9QdvR0Oj0hSwf%2FqpeQB5Fkxtiw8gp%2B9QL2PUsJnpV799WpoDUxAY5CJW3mgwHv002z%2BpwdIyOC%2BDSFJtvnsd%2FLccW%2BEo9hMJS79YXev5rySZBqsCw%2FpIY58aGdOPQ1nzwkiumloeijNdI%2BwOQei50vxtTaNTC4odjJBjqkAairDaSIDOoaxv0pb3c5xVzXra4pUFu%2Bn6QDAmI5Sd7oZ3QqEzUlQndg%2BPmvD%2F%2BBrQADK04LkhOw6GrkLOjMRzIYas1eSsNiiNiYDWpejAqHWA45Lfr9H1WDBjZ6M64bK5xP2YEz6IBHXe2S8ixgaIq36yqeR8wnrIaiSGWUNxVfMPtY%2Fn%2BqqVt1jimSqdBz38BncoUCjUpaqRDJSLzum6s%2B32Nt&X-Amz-Signature=01fa4c91ef979d5e33338278dfc021c767b755353faeeb38c75e78ed6fd7c967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

