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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVFER2DG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFfEHZJcIDRHd%2BzQ%2BlefpAxs94euVB3NgRfwjPXbTkLAiB5ip5iYLhbpWoZQL9w%2F2Uji8E779kRejCiZN1aThOUMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMSioWI1AKmppqFXmkKtwDcEBtbwbevobUS9CBQRPnh5s9g%2F5rkd3ENiO%2F6uVpsFvGo1xfEY%2FwP6aZJaIq2qk9KG%2FLQOjjon7LJYsPnnGvK0JSyoArWMUL4uymdqWL1e1%2Bmo0fj7jspsaI8ItkJiDsF8VlbX%2FyFSw4DEFTLqe1j622vAKSpOq0jxCu5GYT55RzBXFjci7HoMA64CFgUuMv3saJsgkoCj6QgtblMFdBBIlycVSlEKjnJAT8Uw9VJqkaIVsPkaOCs0%2FWgopNgJhjJI9YzKyUXb7H9K643zzafqdXCZs4QWaTXGfTTxiDjgX1ywNRKedGq5TEeYqKx2aiEIxK5JGTTf%2Fzxy480WH4hRPBtNYyGC0gmBIzGZpJBq%2BrOIsBeFv1pzDUmTHvxNRVuW1ahg36AIzbVME5ly5GbHgz9rKe%2F83HacVYIutI%2BtXdd2RRoNsJq979NscG6TJbhVw4cOaiqu0uaGcSilYj%2BGApnKK%2B1dC4FTepjXRHi6f82jo%2BWJH5pC9K0I3X2cgV8ytKUE2rlC3tHHmb7A5QSyXK9eeF55M0gGOf%2FDizRv5LdJ7hm7L3R8r8sO2HnffWwbGnoOMCO9nIedEn4r9GLzDkpdLjxVfCUg5hH6gDUv7KImAkc3mW8QxWgWEwvabQyQY6pgEuODGTBfRF%2BGj9ERRwtWpOmEYiZ3KufZ8674NFHJ5zuXVXKcnNEKNZS3efuH18u%2BNb2o7q6R2VQdEJpeI7nSEbP9gTrWVkHTFCJjWrgMBBEHeNeB2JNWlMG0LAx6FJ7lO03xARHpNU3jMvOhDx5EtOF5%2B9Qy3natr5ngepGJSfp5jmxpUB%2BHI56lKDRmPQp%2F58uqSPgqm8yQeHUB6UfJzb5P954EXk&X-Amz-Signature=18a6e9854c0ae04273c5d3e50e4088a2f4cc1ca3f787e6cb2fb63bc2dcbf615e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

