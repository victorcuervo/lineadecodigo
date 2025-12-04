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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5QXUQV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp1Ey%2B7GuF9MHPN345TZ7IsO1grBRJEQwCHcZe3i37XwIhANuq5TunNJllXNzx5FtLm8rsxHjhFwL5KAxJd0uh4BDxKv8DCEkQABoMNjM3NDIzMTgzODA1IgztmHC4QIC8cni8HqEq3ANvCznvjJQ3sqMuMNg2alH4NGiCJynXQRK4eBrSFczH%2F1Whbs0vCnCwxTI0QitgfFCfw2SgOdiMjWLoX6aexsXVLKyt5EbM7BBeNLjD29AJGNIYbT4q7IN83zkUYoj1SaPr9ZbJDWkuWtvQIe%2BTaUUCS10Dzphjjt%2BsLBslBCPm%2F%2FhvFkNt2iZFdsn%2B%2F8HkNZ4cLPGif%2BsrcBbQlGVz6GnUS1pLzRAxfRasgG68fCS3KMn3SBMWq5ULpofDhFO3QdcDWSQPZ239vJiEX6eBMYWkzAW0U%2FxU2qaREYcfeedj8TgQEjiywxQI4bJZGMCVvb3EhlrqPnvW5iLYCBwqaTwqhREqMHbimHkc6RTDlSNQ9KEj3dWY3eQc4ccKQa5nxBW%2BuuI%2BJ0ty4VPUV6aLuFEF7uIODZqdRsd2WLRXus7TLe8O7axNC67AMGPIcMUTPO0E9ihwc5hlFpcaC%2BiGsL3jx8qDOLKyULApayobuZswxReK7o9t2B4dO2LxpdfbHc6wUNXU99JiWP6oGiA%2FUmr2OgYjJ8wegdGKoNrnzvThkzkUNlkh9joKJxAW9h8m2Sz4QUpMsd%2F0qIV5gcgbnZyK35zvklCJb0YKkyQ1gYeBed%2FrTsD3MbdDS0MJ0jDh3MbJBjqkAQLeOxHSIbg4oSR6TmFZ4f8EwloPaMizRO3W%2FLnBjn6Qeh1K4zNOjYb9zjshQFOZBLcvWLAMTSF8mnke1Gtn6n6MfU35%2Frqp5b28O5mPuiETDrQB9R7jRws4SHp11SnmPY%2F5t%2BZF41pRpd%2Bk6qMWsqPAHCI%2F7bKOrxANw5N9eV7ZqI55bGtb5%2FyokxlEx1wcR0Pkd45p7vAjVj1a%2B%2BahW2r8L3l0&X-Amz-Signature=bb9b40a4d83ab2d2fbf04ca9bc913c8af98ff3cc363276890d012abaef8e2341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

