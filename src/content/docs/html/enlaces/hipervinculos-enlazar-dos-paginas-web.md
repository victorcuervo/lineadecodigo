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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762SO4UJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5olYBj1lckmq4gOkUd4sxnc9TYTdaGLvkdtjAps3%2FpAiB3qrTZ5d1o%2B8I%2FrNipGqlwGP0zsQgKjB3VuKpxZZCfeiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFb7C8n%2F6QXPTd6%2BQKtwDZH%2Fdd6Cjc6Lnr0e0TFzIbKrr1JeYe%2BNFLa6WCIFecNJh83ik7EH5vAbOZur1%2BxQXi6uHD7jzHfOyK4ftd9LDf87VPm4pPLnZm%2BnmeqqRvkl0ISMGUMqzZppA7KhSSX5LvGefxocgoCZtScLS1duteU7HROQ9rxPEWXk7DIfXDW0g0VYihgr91xMOLkjqVwWd5anPL3vvwwwNL6G%2BKomVGhfLBv8EgWUaKddlG%2Fg94k8hbw5%2FxwjiJ8DvN5AEDWEbcGHSOaLSYNvJ2GsKPoYF6DF86p0Ljj6G3Du765LtT6mh1H3OpUrjITKL4Ck8Q1hN6hODZbtaQ5aRyinwglgvbTPB6ILuopj4B4HIYb297Ac%2BLsoH4UdRnXHZeMBnk0PRgV81QI5xBkbeq%2BCSaI9pTh0wDAAdo1zjaGiMfCS87LBftbGJQ%2BKK2GMoinX41jf07afFm%2FywLXLH%2BwzUFxmZIf2vXSS3szhkOUack3Fyxhn7OpgtY63sBAnGIvkN34UZgTOWwPpnYmDugdB49IJcE%2FuCkkqBq5uYviEVyx89BEJG8zWXtH%2BZB04fg0mFbf1SpLcniBeLmYVDBxrCRpUtbnV8EegJYjkIA0vTMTMg3r28gTR949u29MMe%2Bm0wm8LbyQY6pgG%2BDNXwKGYZmpZpVzKJ78qHmvd4PeGX6MtOEODcS0dQoVIzQQc6Uv6tTDYWav2ds09FVKT2jZmz5Ibo9TC2E6qi1LS2z8urE%2BGrOAzDM%2BL%2FmLSxlFd9uwWuwJgxs2mZJbiQgEyj3lOHFALfTZndWl5GqIbz2lqe7C4hOjpnpqrnkKdtsOONT2TtNEdWdlkNvd%2Fm3%2Bjd72ugfpgC%2FTfcyUn%2FCY63FIbr&X-Amz-Signature=23bf578c838a2b8f04f124f210c22aeea7ba07273e9642ab664e68ac675e81ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

