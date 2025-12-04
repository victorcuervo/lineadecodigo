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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBCSVGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkp7%2B%2FV1UCg2gT9ddJl5T8OGRR7j%2B9uul6wS9WA4M2DAIhAJGnq9Y2ElF0P0PYIefXBSOJzuTP4japa0ABzsg3kzbfKv8DCEkQABoMNjM3NDIzMTgzODA1Igyq%2F9INCGt%2BWxL1HYIq3AO3P54%2Fy0ytLFJz%2BT49KMCYWMOVQ4RZeeA4xEaMrZqvoPUQzbyhCXRYu3gTp3RYYt84SxOHppqzClpT0Dr1mq8U5w3RK3hFyivoWo5SFEvwjoZmS0vZ73d3KYaiyPG3EeNUxxjCymaCSkh5CvvGqVkwf2UU8yklGL9mnUiEQZti8CstdJWVzA6CT2tPpr3gH4dftlMzJ25GGkHy91WEs%2FjmB3yWTuQucUj08tx4Ee6aTCyNoxSugJd7U9FTjkLutQnKYBGkdjcQ6JRaeNL7EiqV0%2BiEIrk1TikUUlXP1RNY5MaLhkfpCvXOsHeeQYTUYz94AY2IMcqdTaNkZKNg7QbSmF7LkNBJYTjxla1G4W42g0jsn2ZPLhddpMdqJfX%2Bhfqf0LRpgbziAxCugEavSrauuAPRlWqXsHPxhmFILNpDsE6JdsFaxmAKz%2Ftb7DOeMa0Uwr36scVkIWy%2BoyYTCOBkCk%2BbjrNTHVplV7TpcgpRSLtPNsiw7DOPWQIFqkJ0U5%2FI28eG9Cmey4YN0N6GMR684FtU%2FFGavoZry5FGQ%2F3GvS7Y7ne2K71K6oOVVAHKtmggdr1g6jhurplALEX37k5p2mLVpLd6%2BJdcZoaXUZdmpKjjL1h7Nu2VW9FtPDDh28bJBjqkAeTN3MG%2BYmK1HOEAAAi8AqzKQ3kbwN%2FD3djbK%2FVVMPqtSQj8AsyDrlWalVJhzwGU6LrVO%2FT26Tcemo0bXhf8G2Z8c5RS%2F6MmGCUDz9VMtGywVKdXItGKDngGC%2B6lU503gSaGL1iQ9dTm4sVASH21bnT46h6RsPhRsrS1aO4tjE1tvn9TeY9X4vrictbz2w93J%2BBqxmVawbIFI0zaO7tjpunmjhLG&X-Amz-Signature=82999c75101ff0b41325ba7c71e543af1da7d9c4b08d890094255d225000e84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

