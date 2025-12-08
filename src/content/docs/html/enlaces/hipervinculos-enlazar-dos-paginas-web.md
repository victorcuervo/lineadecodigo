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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYGUHEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6nfx%2Fi0kVFFXTPJrPrDr%2FqWmO8w4A0yG6f02nqhJkDgIhAO%2B%2BIkiCoA8RZR9%2Br5ptikVtWmVdZSkxfDYqCU5xtPzaKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG%2BEFB58JCzmCDi%2Foq3APsayDIyZ0kZh1EJje5ntjb72cXM%2BKCl%2B4xOV9D2XXsUi2ndAWdhDWwnRkKRfB19f6HTzASfG4W4WQ3SMcUHoMa6XwAp1ycBrUjwZnfeYu856W48x15moEsEqyZy7pNQW0WlpKX0VPviA8wvLEGdPO6w0n3M19PElU%2BUwPkvK7rRHADE23QRMgXiHPJ1sX2fDKmelRo3%2B3PqUsXQb7FE0ukjxQEPNCUQ7y7%2BEf%2FmywY9FFzmAF3TaHAsCFrie3NP6Pn4qmweDzP4sgeOdVnr7PGuJEahLpptA5DWk3c3aZbkhBwvaRGMz905qjXn69OZXpW0aK0nOwDXursen5vw0l74hs%2FetZ%2BWVvGxgll60m8QBugLo4WuSg9sDMAasICJqNqTz31FjBzMuoOFzi87jYSk%2Bp5c41yGf1GKdiuSroKhtzUf9k%2BWmv5YmdNiJjBXwRw5dgJu9mYHTvsV2%2BOuXfw2YZckzzSXryLblTfa4hFDuagIxsTophC%2FOPvWR2i%2Bmrpkz54cjN2DSFBBuACYYaLqyexsjZAcbVIifjez3%2F%2BxpePc6qW3Cr%2FbmTZySaqv2ByEE7WFhKtIjQ7dxx%2BSZNhUhajUT4RbSBlGrMRHD1J%2F6Eot5lAtTk3pszN9DCp3NzJBjqkAfsUZyEDEeuL%2BEVimyHYMUWMVDOSEZcGdZJVljFa2r2s7BTK2Z3BwTGvGiw9SuV%2BYmHTIuRh%2Ftc3V2iLRHMuFLgC2svI%2Fc2sgv4ViHLQ8NpK7kJJZrsMfJj%2F7M0zGlrysuD%2BPiIe5BMcRGNK5D9EfuRoMgnclMivjRrPdoEc1bnsK7EGoQ9ZqafAdGs4oTwI%2BScx0b0n6o9UGqGH4FaqMfi9nCwR&X-Amz-Signature=131b122b52e6d17a750e78b4b078261cfa9a879c5237e900137c5dfe4d7f5030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

