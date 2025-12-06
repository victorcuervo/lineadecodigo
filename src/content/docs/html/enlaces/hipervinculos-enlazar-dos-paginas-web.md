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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S3QM3CC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQ2LbMbhv%2Bft0PaSSkRNbni3vz2lBScndbLvla1KhLAIgTfPzkqI3AxMNp28cZziT%2B0vQ8KGPCMdQB1x%2BeMimwIYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGfb6Ba9D7X6kE14PCrcA5b5EcHrQ%2Bbztolew0JjM%2BOX43t5rqTFsbe5AGKibtC%2FwlryvEbJYrLJCRDgBe%2FJ4xUTcLCUZjwhUdY28gz1PBijaYtfinzGHIYJ4jc81cPlJbR2Cmv7pxspVJnYdfRMXBVWE%2B9J%2FMBW%2Bk7pqoShKD1t3W1iHw%2BvVikaTz9poKRJbOrdZROqAWe12g3rByy6yax3oBaNXR4AGY6IjOHc9HiY9a4UajC6Krz1SVNjxobPkJPUMBRVtnrBVK1ppsbJkzkyS%2BR2WFewHJ8oXq8h3EPJtfZDJS3LJjnRQznbcwoiW2Y5D3%2FHUTDP%2FtwvNLdzW6xN2HZHSuaL6MuQ97da6wTaYhIWpi3AZ7BRYZYH2ub8kbpEoLja88g5ZhShS8iXzknL1w59%2FVZ%2BEvTyXXWyMKYuXL4uoB4hYMpQGDrPSM43tsW9btI4EIN1bU2OnABjPJk%2BQ74Nio7cBqOrpOseHReWxQkjNmJaioUp0Ji9Fd6ZD9l2cHkM92jAxz9bXcZb09KIXqY4aIAFwaXMiTAPZuRRonvS61VA3FjwsbhKhK3KplX9wbZwVyvn3k9kNYcqSDOu%2FZsCbVZHqvXvj8tTmNdPbpICVUvr6O6yS77R7QYedm9Q%2F%2BsQh3t7VqQ%2FMP%2B8z8kGOqUBxLxMkil0Mzu8LyJxI5D%2FTNIBfOajfVPE4oUNSHDVaVcOIDHzqKh3oY6zgqZTFrDU0%2BgFvPo4y8hyuENTkXJRfE3qd%2FIkTrXq7BtNjHYiZY495qvMyPhwpwT2fGwCWPxTumT8yXu6ALV9wSlrjhtzKGtRa92UpMr5jKoRFy5ozI%2BBC%2FGuMgLGJg0L9S%2FGsD%2FttjTJLeUhf%2FfPJvpHEJp2NJHWCxEj&X-Amz-Signature=67d42b1131d431b231e8de8ed422c76efc572ff14c528114af141db18d1b90be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

