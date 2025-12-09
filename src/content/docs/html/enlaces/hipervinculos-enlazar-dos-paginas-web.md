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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBVQ3NM3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdE3JnY00gjsrp8fdpI7xDY02z7ne5kmB7Je59f6HbqAIhAJChqloOBzKa%2BuXKCjxEAvd%2BFlyKMsep5TrVaLv1soAEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu1%2FHGKwTmWDaIKeIq3ANkxvM8H5zCLbkB7DvdeUmYfLwG9xAfMQRPdRpeL65XrOG2Q12ZqTJLE99U3Zo%2BSIG9PKMTJd5%2B3v%2FN9kAlJ7SIiZfApm0Xzsxq5s49g7KcCtJ3XHLDqFRgvTTwvX4tzNYU0FyYttdUX78N93jsjwlYXzzhNlnv%2Bwcq2eLMMvtI9vj85x4wcbMsymxsYj4y%2FLO4dtz3NYaC%2F1%2Fdec5aYeII%2BTx1yW4fhtdc8Ugf3C2mfajrV6KEkFjwdhRMfKmvCez6R2v3iJ6r182S%2BKs9G0d1efFyg0NBGVvAhiqgLLCIXx8v8rvnyjyL9giseLZQr%2F%2BEj4uQAr%2BNrvqAH4ShJ00K%2BVp8j8k%2BB2pEBNycgW4IvP3VwOJSiRzYluOqSCXWmXCYE4t8odrY330p46HpLm08VSUKfa81CihrAebyV%2Fgwip1ll03xMnBLIdWTGvAmaBW69A2bgcPcQYaXBt%2ByHTf4dc8xFIRgVB8mAAcZnBy1UTXw%2FovWNwTGQ3dcsNrGiKILeZa3zPuZU9Mmt0HWXT4aYLn39LW9OLGo8u3ihX%2F9qQQ2uN4ZhfBuZ3HU7gpXh6CO4Xaadoep37Mj9LOdrG6DQQEYNClA023hctMKuKGDv7jP6FrAYLLu7lVopzCUxd%2FJBjqkARXbC5pyhZ%2B8njUaqljo6ejXesSZHD1F1z1TB2Hp%2F9WkvnpPtkIGPOtF4kHEdqLqrk64c1spR8WbsRW6yqRbgF3b%2FOsPh1PHwPgKMREhBQ9v1KZdkY21BrJhYFpEMAI3rdxZVLMdubeGHPNz7TPuF8F6y5pq8i0hOMCORNfaV1yKVGahImskPQnLem2aWzciaD%2BYk8a1wl7CyIa%2FuSmhclwC26%2FV&X-Amz-Signature=c7bd50969de366cd441b6549ab3c6bed58d28de179c06d8276e8d4f400370eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

