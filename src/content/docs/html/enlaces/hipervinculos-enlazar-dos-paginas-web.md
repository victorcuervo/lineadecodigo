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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBI5TMN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3VYeZ3FTBHHe%2FSJuvqdn3ynKXgcF0dVH7DnqxSiaq8AiA2PLn2HGNK142kAp%2FmHcCAOLZ9owCeZyhmqSZXm2SNBSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3ClxAROMISjbEyUAKtwD1YPfffTQwr5tlCNYYqgXTEznXL3z%2BoAkT9SsBWr6MqZUANs0UlSSCTiQ3v7TP%2BuUplKW5XIpm8T4WXNvRDw6bdj7po3T%2Bv7%2BFYxDdkZmK33beLKYeqfoAlWVs%2Fdp4YJu1JmFs%2FIrlX2L2E56tFY6OLcFUZPIjrJD9N%2BEtMkI1tzthJX%2FJyE%2FKrVQKVNqd5hX3V6rJe79DTrKwRtC1NUs0o7e6NIq%2FGjXaw8oMlTbSp7ZuJrY3JzDGYlCsX%2F17%2B9XrQyHqwC3kjSQFQXNkrC2NjCTlHGBbMh2l%2FbGNpWh7MKthDoAljlfEKzG0EgwjqantfmeWQLci6A1Al0zuUe64pRSXgD3F47xb3hCzya9x6An9TSYnd5iXRyuw7w05Xltl644ev5WhpK3tJjv%2FdpF%2Btoiq46LBW%2BlDvOfi8h7rGIUA%2BKcxeN%2Brn5XPIAM3trhvQavmZfYAV7inL%2FYHsBgP4o3RCu2f6ieY9CqZj6jCsx%2FkuUx7wwqz6rvAdhsS8qJzppFoPISoLdkXPQ41Kh3Lq2PouDjTn%2FOyMtZs2Ma0KLNYXBv4iMOfPpdjhjU%2ButPxXsXVnDlsVcTmPkuZuup73iftVwrM3CQSUclxOGWQm3JKH%2FyfYods7%2B%2BsZYwhebLyQY6pgEBKKIUmhAVUxhj%2B1uVN3hyJsInQFr2If%2Fa3P415d5vB9CL%2FH619VzrdR4UNXdmqvSNxnoi%2FmwVABymxCmU0h5AHyni1YBTGussKXZhTWIALQIZDrK5qgADPC9%2FXFLmmGTCTOQI4ul4cKp1iu3JBHKfoYBilCKAPHEK2%2BQPgWgRBajBYymMHf0Fh1KYg%2BAPUXGzUqwzS2bNKkYgRGWNkptLEKsYHJK0&X-Amz-Signature=069782ad1ea995d056ced08983c9a441d91d31214173817517aa0978de45387e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

