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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJW42Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6V0IoCKoVg5rF8VDay4MYJ1mSKsrgNIpKnHl7k21hdAiA6fbZ6Gwq6pExUrLFIkFZQ8fybH%2BXBkQijcsmA1mTQEyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSXUEwUb8x%2BdVg3MzKtwDiy2%2BMPZnayxclW2P3hrFPgwPFBxFlx%2FIp%2B7wEKcwLKzumQEb0GajCczlRvSb3ThfA0f0KJ9LZ1NDoP6F%2Fj3iWyX6SZdPCTbkxSfuWVKm3xwPSHm8tbtJd1WIaOq2d%2FkKN958cTLusj0zV%2FTT0fiLvNIkyexLcwHUOX%2BJvnRd7IAHeiXic%2BgZSq0ZYC95LoGjijkojO7D16wLpW5Do27czyLtPqGo4rICXGr98O2XqrxVLg9B3VvoqPCLw25NKNdwv3NwcRYbizdKdcudMcT4B189ww8%2BH81TdBgUrMBYke1lwPTZJlFS9WvU9FRh%2FvybLZA4%2B5YwjHd6RcehJSA35vbrnFbVwpw%2B65R9QCfN8bYwGEnM0%2FlFOI6OPaGOXrLiD9CqoZmO7wM2vomR0JVmMKaYimfVgAByiv6p19XlF3IUBMs%2FZHv0Ilrw%2FQ8B4j3I34zrH0IQkI5vE6iSYuzCymbolluUd6lS2uvtV%2BBnEs%2BWw%2Ba6AMUDPK2dVhLnutnmGiTaJ1rDKrK2VDe7Cbf%2FRlxX0%2F5lROQYtFIP6BhejSeB5kcPHZAtimBb2jYUHzq1gIILA0lyj0mjOREIcJJ7vhoCopU5yPyjVI99nOB%2FJ4QoOso6jQcwarecd6cwptDZyQY6pgFgd1t5uhhhcwiP%2BIuLLFjz7PXrEEu5mChxCpCTiNqy86YvZJeU5aeCtSghZkooh%2Bb%2BgfE4T0SWF4UJMMmgOae%2BvEWKdJunaLho2q80Y%2Bq%2FezL7jK%2FzrTfDHuqYYNHvqVDURoESTKHC9f%2FAo6C8HHDw7wvqkJzzN49hRro4ebS8fuvLx6S3vRrTR37DI%2FcmhBa52SwRl%2FROmrsqQzZ8deMVAcL%2B3HwB&X-Amz-Signature=4f02f30bc959a1f9251d552f9d5868fae1b5be1ed8045e57f9b57d33eb17869e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

