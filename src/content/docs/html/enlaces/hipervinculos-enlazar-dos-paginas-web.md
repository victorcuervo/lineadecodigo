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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFLGMHR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ1s3Q5sW9sD4THKX1HzAxvfoVxHVc9ZmU6TZxsI%2FxqAiBTffVJVP2nuyd4ovcmBZx4cfPxb4NpONedcKgwTSx5Xyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM72DZYyox94d9vIJ0KtwDJtdmENa7ZBNMdVy1VTa2pWjijXe6EjIYaybmGINHKmUxdmExv8YBDStS5wRv%2FizbubFJjLh05OpB5VkCPsy7sCl9I8rPEkPoH70RW67RA847z8MMJtEuV%2FIVeFg8RbQtGnTJJsa2T897iJ8d3j4%2BVv9KsyrcOwzzPcybSsDK%2Bs5NP%2BQbvuQ%2FkPvf0afk9VHgJK1tlwKeyzxh9jTXOSsWh02EnhyK8Msy%2BO3Dh%2Bo9%2FydDOJhptGjXlBNAa%2BAip6svPhyapL8fry03cMwpm4131a%2Bx0Ns%2Fr%2BkD2np8KOzyB5GPX1IR7khJNRNaOkjRaeWB5w2IKYS%2FCqIRgfYq%2FjYSXChhbvEE%2B83co0c5NcYtkc45DXxHZzlsajW%2FQGIlkpf9BrCud3qws0LgKa6v2N%2FsjpZR4M%2BmvpzbOqwRTa70wVRaSZRGTYEqIUJrP6IP3qLoldgm5Pg6iTrTkvrvmjCeJSBsAlpNz3HOrjgd2xjto00JiZKH577GVpkqp47OTXmtgurTqMge4ITW5yipSRe7eEwNZEtM2UiLQf%2BcNU26Mz1u5sgv3jrRnhQT%2BqLWjpvLC8%2BefHM0TgLL36xHuss5jpueZqbsecBStvHTYAELyqCO96%2F9KZd%2FKu9ukSEw38PRyQY6pgHDnlP50sjfmFma5T0%2BFEcwsKRJxT4giguAYkviw2KZq2njHj5tD1IumYRESaE6jjq5%2BK9hZ3s64H7DwdUHMrSlhOldfyKbvPfJQnZ3csu1EAGys7hp2%2FdFxiBckLA8kK%2F5SOCcxuvtm40MgmFNBnPALreAFIJ%2F5mqm6YcG7H9dybba%2B3JTlD2jIWsGUM%2B7VJJKFQAVJsVPq0fJYkeRF6S1nhs5BWdg&X-Amz-Signature=702167612d11f6ab60a533dd08776609d7fea2411a5197d6faaac68bf2443643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

