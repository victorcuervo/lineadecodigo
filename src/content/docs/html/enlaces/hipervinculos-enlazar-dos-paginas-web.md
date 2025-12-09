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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHQE3XP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN0cDRLFFwig5qlOkBj7khw7nLfWvFWtyJ%2FJNMP6GqtAIhAOJmY87XNu8oq%2BuP3E39aZFQBJEQcPbIZoApfWEOQXg2KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxet3EkPiglqGPWyuIq3ANt31fWsQLzmYDLENS2C0rUsb4m4ar7xf8aEj1TlUd7WfLW%2FwJ6z6J5JKccF0fqZLBIdB7oPLd5a5JGIZ5igaDJ6TJJc6ymkTUkBxyW2ev4FE60DUEzOKgEdzfINBW%2B3taFGzHqIundC8Q4znIXJSq%2BFRz7TmX5ywGeq1SqsmyLn8uTgWIWp8sC2HAWgHM%2BTKfFO3AVpLiqYe%2F9%2FL4lT0N%2FGJ%2FHnXyEAk9BDyXC5OxyrQ5adD34shVB4U%2FilcqypQBpm%2BhGmisBEkkRvVJNWqxR8sPjoqa8zDh1TznXlMfp6JzC%2FUvscpceD%2F3%2BHLC%2FzQj0RV2fCzJfy3cIY3vwnXHCio4yhsZv8SEAontSYNKrZsaKOwtmvtsnXG%2B0GtGrfXaH9HYNUPzMMv8NolRA0Ug62mRNrOrB4E5vbX0o8zRn5gZrgvc9qQyjLmRCCtt6L8xwskDKvZxLd4kEqGnWha4RsHGdsvzHXyDxr8UwC8RhQ71JbUeHY%2FxfSoBY2B%2BXu0HJmpKaPTUvv8qasal4Ozlvnkl2HrOyzXlLGP7P9FE7B0Ld0wxAcGX%2F6COweb6JyWxXRWohpun10U9e%2FWB1KDjLSXEWun97sSV5dYOA7bECiasi1IZuaoavy7g8kzC4xOLJBjqkAaKYoKH1CLIH51KUkh6q1i%2BSElI%2Fic%2Bid6U4uDczDbioGbS0AkmteVgKrB2Z9VHf0LdjAyZ%2F8FXc2xpRJMrcIFktn0UOHLQJe8ze%2BjiklVgk49%2F%2FpLBPvheqz5RJSRHKgNW1fdqDlKuCqHVLW0ptzPlXdm5%2BDTLbbncuaF3utAlCjz2X3%2Ba%2BPpMahLJt1jg6Au1QFCAqSoXoanXg9GrU6qFXrFpL&X-Amz-Signature=3fb256dda4392c9f2631c399bda7c20f8291ce53ff0e0c4664911d828b1e63f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

