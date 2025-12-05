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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5XIBXB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Og6e4B2tMRTKzOfW6SZ9Tv836ZRdGho5Ur6X2zbzOAIgbPs4klUCyzIAYihuS4jB4T2uGvP8Yd5gzFeIdFF4lcgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL7KBjtUWle%2BZqKBjyrcAxCj3MHo9YN0OZJj0CaEx426q7mFHlvc3vgoljT2c9%2BvNKdJligjeYYsMJ1wwrgst0Eior8beuIuXKfQVT6VYScjBBdl7QDZwY8hDhH%2FRjfaCv%2Bqb6ncSf4iOqqoERw9F1Yk7%2FJVcx6U0Xlu2cer0amWTEKESF7mi%2FO0I%2FODyy5z8j6P14Vnr1fD2ldZHAJy%2B8XhcY1rU3VB7wWtzqlRGSnutInRd020m2AN02AkFirkZrjLl2Dd3H6rmy%2BpoWYAzD5prTsqUizdIJL3Spjxa3qE92qHsv%2Fhts6M00jaVX2T%2FOxeu8o%2Bo9Eesc7A9NThRZo8rxfK60NP%2BlOr2Gkpcde8qUo0xjx2wWZAAZ14vbrVxAFghGXOl%2FS2TNdYHrD1kW6yRSFtG2%2F75ZTtj%2Bl6FRunL8DAriqCj6aykXlFxZ%2BSin5odTsPlhzliU37KMzfqxnLgNA05uzB8l5GK2ZnzYu%2BcL%2B6l%2F%2BtwE05Lse0JLN0dMmOYFO8X2fGZCqalCDU%2F6vq2NC3i5%2Bi%2Bsp8ZZWAUTSELUEkYxtrAoVZsWtSynKB7oNQOU0m5b6FfBTW8tGtaXnZ1cXvtZRjHR6GT7pQu0JG7VN7W9AsRph%2F%2FCZyqHd7opPNSChAcROVuPksMIqpyckGOqUBj4UIqSkMIkND%2FZmeSVKJl2hEj8Pj3RJywggrIT6NfFj9%2F%2BmSB16GT%2Fekulbw8L8cLz3HRy62rq97oBOBv6yewDVOAilRc043%2F%2Bw5HkJyW%2BpApkhoUna2zqtEhyWYy2SAiwNVoG6q0AGWZHrRtSaBCOwvFR6aDfmXma%2FmRaFrDWNJSKW9OWDeBnVS8ZjXcgPpKJOC%2B1PVSnaUw024JgVlkWQc%2BQVd&X-Amz-Signature=55457e5c5d409cd5ac16fe1a5faaf6665454db5fcc16fed4c4e145c3367c60ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

