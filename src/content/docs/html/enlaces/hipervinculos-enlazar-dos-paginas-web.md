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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524CQGD3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhCAZExR5Qs2JxjdsEstBHZ3O36lNTfG1Rlh3fiUyt4AiBBhsOOG3qtf8zGRc02pm4XVjJH4KFzpAVpwTO220r%2B%2BSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME5O33kbsk3nBSmqWKtwDRHSiv2IREuETa46eJ4JfYU429GAq%2BFDTTaBtZSIz4Jr9pDqAgfIUk9mmJlgNJXM8EusgkWEAQN9Dr6c9Tvf%2F6DwQ%2BAU9HF9LGk7Xkpo3U4orm8VrahWnmAD3Ejmx4JxK65HgDM2ATZT%2FrgVbkh7tBq60lLPq5X0qBW1x%2BsQPRIIGvu0p2KBmsnTisSBKK5iomieWJxl9KjZD89cq5ejPDsip4DFEKHRUoOK%2F5dMOgs0yk1fWnpxU%2BQXItJNHaPS7b0O3S27l63wZf5eBuSIiEYGyle4jbM7q4LvgOszXhvbtNriW%2BqR119v4ifA80hJins9A%2BgFscNumUN9e3%2B1Zq%2B0n5A9ttj2JcbPqU%2FasuuvypwwyeimWnl6atryqTolRkw3%2FU%2FMBlowjarH02S1rThg9Fm%2FAK1bG3NwxpQTihgVV4WEANzHsn9u3tkEkJs1RPYyAeknf2LpGbkTfX4%2FetpXdpdwX3XKQNVoeJ%2FJoeWf0keIcjXKB7%2Bj1JHAACXgU%2Fc2JKmN%2FQcRWOblY9sF3O0lHbJtv88n68jRJ2Gw%2F0e9LZKEpXv5W73aGEUGXlu3meQnn5RCIfEE%2FasYBsOiC6vlFFA7kAFjUBVbu1xFNnkKAGp1ejweyb8zEh%2Bwwxr3WyQY6pgEek8iqoBkoA7G7%2BPs0B%2Fk7wpG9Fve7UA36zFAb26GH%2BHeZTQeLAdtU15%2FpHK7jyqxxqVWEy854ARdrrOIDaPY2s7VRopudrCM54Nq5j6eqGWgYMTBwKPMd7yf6WjhFH50pDk4IBesqcmV%2B1OpGBIEhghvaYRYJVHUU287j6C%2FjhaI4d%2BLLGsQbIaysJKb71VeWBxvqE%2B5ksEbhIAool1jzfLSEVD9v&X-Amz-Signature=14a353b59028423f9b15629c639ab025f171122c6371351928ad21682322d086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

