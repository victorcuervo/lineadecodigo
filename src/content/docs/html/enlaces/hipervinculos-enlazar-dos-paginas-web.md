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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UVSA4EI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCpobYN01tkiBXeU%2F8gxPzCvDT%2FtMe%2FsiRha9gKPQKwHwIgUJmFv%2FgI504tLiAZa%2B6O8qlAdrgP41gmAQUCs20edPoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMEx8OI0w5mXc1gZGyrcA0SMa6raUmj5J%2F%2BwziS2g%2FaJre5ROunW7an10FcbtBjNgqLf4NZB9AdwqNtniNsiQxzGvILB%2FfKPeSqZDFfMkU5vmefnQq03g%2FRUO7NGW1tSU6YWXSoDMZJHdY4YXH1PZH3fUHDWyZBv9suJzhk93nM0bLh0%2FbDq6xuXJ9eaR%2BT0K4%2BQoTUuL7GXWR4JOV19iBOq%2FJ5qTlxaz0PVA2iLvPWf1ct4ovBlsW0N4qRVs7wZ0K8ORalEXhmm5tSZCuH2p06C%2FOziQgeHGx7Wy0gMhInWc09sW6fhF9DDcnHTEBrJo51MxZo8B7%2BR42kpX681zB%2BLxSWCEOZit5hsqTeASoZq6Av%2FL71zlsCct6r%2BvqzJxOTKZGmqLNc47OVA%2BLjmNqswSZjUsWsTE5LWL0m8aOIBAqeLOySNoH7JT3cchlUgY5cKmOhmkzC%2BtaGItW1rTh0szkGTeGQBMiz9Q7iL0739xfqXtYR2KEP%2F%2FDsxuqQjG3%2FJw%2FcdeSiBuX9ryP47sc2hDAYeIhzdr1gPUG7FZlNyOP5HK6S3T4LyG5g9YA8IDZC88cOREiVoFEKBymKs5ld8izdUkHslmXoTIPDRl5%2F2yFUJsYhrHBZP7fpeATCJnxgN62Rc0rvsABvUMOSrxckGOqUBQbnmGJCLAnUHHKvJ4LHlohcaJMDKx8vmnrxIIW6xQVaeUDBnOlfMY7zA8UfhM7dszb5KQLpZLTH%2BMK6WFLzjhXOEptj7XK4bq0aG3Emo9iI9uOehoh0paXnMSr4qqV0WCmt5w0J%2B%2Bbv7qjqXW0OhpsxnvqM917b2pfyX7sNzsLBX80eRaArYPW7iE1o3PNhihtuf4oPI09v8TYNUt9uwMYFcGO0x&X-Amz-Signature=fb4946f76315b5c7d49f5ebd923d744f4039a5903fea7002ea78382864930d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

