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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY44HTQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4IH1cxuDA1H4yoIXs2Z99tzIjvo2bVt2Na3UgoStyRQIhAODTtobWnDCDhTD2kO0nAPxHXedpgZovxkaaJ4qH3C%2BYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAnXlRlqdAxwr3WV0q3AOWVAL8UzfBZGWLJNe2upq38X2hfsUL8KMXr8uHknb6zONyDzGcCvQIhgY5dm7nKT91aU3xtmHYr54SYuCxcMZcKm8tBQyudUPKBpZ7Q6%2BafbDewjTlESo3hicmXLXZ4%2FuLcnfzuUCK7lSFMFnP1UDVX0aqKgNx6puVImXapi479aMq1eWC%2B9VyAPn9aNiztRdCWWb1NjqIb5TVaNDbWkVpjyRbLLBELrxbM7BTlyg0plEEayUlxqpxbBUBcCLvzwbEaN4%2F%2BEWLiQH3qwbc9o3pxHXscdvUYoTW9rYszBhvPLAuKFzC%2BFb%2BfbqykkP7W2ALkCIe3zsuJjJ8sv21Ww6WZiJcPKcn4aVZW2%2Brr5wMiTs2Tnj710pmGa9GH7ExvP2%2BRNQpBKruhmuCtqChm5IBOURazxxLTZf4pp89mA1jTdtB39oL5vYdpc9uEf6eHO06Iad3GYX1XDHVmDJ2g1OMEEtOzYmf83oXNHyucSUO5FVlKIaRZ5WjctviBl1FNTZJXmuybxtlQQ2lUCkA8SzsG%2FuOeYsIBSzIxGgUzE%2Fiybu6truJNTy6MOAavs%2BTqqROZG4uBemVDJY0HMkDWGSuTddWYt9yf3bnCttEDyCNrJdByEf6CWB5jgFG6DCN79jJBjqkARdahgnuBTZCYHd6fgyunba9C2nGLpB%2Bua22vovS5wAkHHawTL7k00oGqqnOzkAQLDXk5IOnblS5W2lQwf9wT0uU0l%2FsLX0KXYE7ahB2fGBofbuqu%2FbHObSZqpaDQa24T6DtH6JTGjxUDwBnJ332ljEshCBlyOGfyMweY12G6x%2BvhbRLU7lbK8sXWVlGQH1r0cNBgYy8vIrBD3PXE5hyY9zIaGgQ&X-Amz-Signature=c632e215f7adc0301c7865aa53ede66b1f7f8cb88863c8968aad25a746b8c1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

