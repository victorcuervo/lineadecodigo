---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4IFOM7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQChhoUg6tTETmjRw0QsI9LoGvtdNZ0nIIVrOC%2FQNv5xeQIhANRUk4IRIXZsdnRTB0Z2MoQjS7v12bAzgVWu0hgRQAQ5Kv8DCEUQABoMNjM3NDIzMTgzODA1Igzfpa5ej9wJ88xeXTwq3AOeALRG6Tf7iQ04fTjpz6HLKl0iSc4w5iYm%2B7tQZCDqJvFUYVqQ6Q5dhV40%2BKoYTSbhjgIJTVPzWk4vc4B4EEY%2BtNe5GTD1re1OxLfXF4VA09ChmI%2F%2BEXI%2BU8H3Aucvc4hGc5wUqr6QPaKheBcbGsMfwxYuntJYMpcKulra%2Bx2q13FBNfqfJrZRr8tIyJAFDG%2BxJHi%2Fo3MJFKEvpeylFyV8WQ3i%2FYbeFRPNiwc6A5QhZzec31psxEJBXcpPQNXv1AgCuWde32TkLlLTgoPux7USX%2BrHotNDXcrIjm97ETyW%2FbEKtDsnH63QkyBVLKTeOBnQKJ80P3tKJ%2Fhmd0v1w2KLihL%2BKPIlyQHQa3BStjZq03%2BgrogDDEKbh4UWv3GxM1in53wq6L%2FW0sZP4joLkr0w9JC1q4T5QxwBoNK9%2F7tTnbt73U6pCFm91zLEz%2BODNWEu%2BuSiOLmG8UGubK%2BnHM8jrRD9qAv%2BD%2F4bGUUUtUCnSv9Gcr5PuuU2hzqNAmm07YiWad3TnaBNidLcgxpXfRWwK2T87Ecfl%2BJznyGetsZDqYhPJHScxUC1MyzB%2FM2ZsQxIakNSK%2FSeKn%2BCgSsYFCyPD3KJn4LJ2V6qaWnzW4U4xG86mnwx0DVKtvG%2B0zCh58XJBjqkAWoCNnsZ0LN9EVTCXyaPdkT6%2FHG%2FWlGjiCJw26B4NlXa88Q4MYzWKEe3gwBIps6KnpognjAyMEzcp%2BELIw%2B7mGq4fKXeEajrXn2VhavwIRktLwLmirOLBFhyIrAbb9h190qXPchFlOFg9ZNKSjZpqw%2F8jRFLHcjwh%2FUYznujXieHqT9SYb4cPZsztAvJf5G%2Bykjd%2FQt6QhVYBAOmIRSgzNgEj8np&X-Amz-Signature=b3e1dce2be82a0de501c6e71c1df0667103b98be1d830df76c87881d558786c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

