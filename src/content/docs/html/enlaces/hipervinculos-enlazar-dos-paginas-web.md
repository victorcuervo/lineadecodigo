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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXIB4OL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAE1yrp8bTFc%2F1dn4sWyFtQduiPYw14YTjiuUtfgAq1UAiBAIlYCK%2F%2BmCK%2B7VjmjXNvdN47amNnu46Pm7iQ7u7z41ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIKLpNi16%2BUw5puL2KtwDeYylZhnOIeXfLRYH90ufGlPPa2lOCZq7qGZohBZhMOf9TUHsD4poqxiUXRTKbIcsv8nJMu0VyV94zd4sNcvPVLIFMQiokIGGra4uqxVD8qdIQ7b0SrsfYMaG2d0GvI4wx3SYCLwP97FMoDFMy5ch1xJpsx84HcSYBypT6H30Dt6b4AIHYxTG6dUVSsN9dM%2Bidcxwgd0tzaG1AmGw7ylMM6TEaz1areXyJJvaIJodaBXvugRPhcD%2F5V%2BGK6BXyyee5IsnljmgDA%2BpdNcqmsN3%2BofqePfytPHAufD16FEooWUeE8qLfaYyEihD0W1hYtK08qvT37SvhURhUfdEQYTS%2BgqXsji6H2Z3g2X6JFxh821%2B9A7puDo5df%2F4Cq74f%2FOKYqlAdNPxpLg48awGRNNQdI64NjFKo%2BU7hvfgNDoB0UCwp2qgfVucJTWNKk5qY62s6oNDy40fplvgxbX%2ByXWV1kTMLm41IPwucpsOp1jP09Q%2FTwe9OkpnHyEymRR2%2B3Abz%2FH8E3QOQqj02jW6bHsJ%2F68HoUNaGlxDcifi5swMJyz6PGMXV74OUwkX79dF9nAI0RDbSnH8i6aTwd7sjurkWDPYXdDOAKiRzPtrKhm%2FLLuYghimDIGXjlBvATQwjZDEyQY6pgFvxaj3FUwMQBMXSpj8e0zJu1LxsKj2YOuvyjVNoyk8rMeokAB8%2F3UuaBdGUXQ8S5o27XBlGpCtq8e88202mXPd%2FtxZAia5ogvXvGpGtqxRYWaKCrieg5rSMMyqabdpGnPR0XG%2BeEF%2BGoXgg0m50egdWw6SEej4qlUkjd4YEOXN5OOeZTot%2FqTJoI1upOhOInYBzNskfR5%2FTbeGvKcjXv%2FyZl6c9KU3&X-Amz-Signature=ba9b45d43d51f4b5fff9273f8975b8d367cd16e05d595868f82ab33cedc7fb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

