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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSM2VO25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEegCHhA5gJd4kvWkpZ%2BqZu%2BdMZ7hpLp4HmSIiANzVQIhAPEV6jL77MYn98kXMKHuVmOQFN%2FXSYGBb2yMf0DEyU8TKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyaaluqd%2ByU5qCSwssq3APVQbIgTnnva8yYUbaDEm5gIQD6fb5j9q9GQKbOukV4Y5rAdN48rW4jKE0YA%2BfTpIrFW9sqeCD3NnyKvyEzqh%2Bql3dOG9rAJsruxUcrxvSnfcDT3rlB8eUJGqvwFXaujfUFgU4bfcISv5A0L2N%2Brzhx3q07C0CsZGcs7rLECkiUgaCgTqxGyffIn0H6lw3Ekv7En3kELsNqF9s9a5cbvYgS9CjfdsTiPP7q6Yw8EvsdcVjbll0Yi0O87fcv1LNGrND%2B3OBn4R56zFd59%2FduXfHnGG%2FptylQIgXzWMfLyG45%2BWSTUvIyzn7ZU0FKbvbBgs5zwmgLye7cGoBii6cMCmHoHIJ37DNtYZxGSqFwxbtREPBazKIbftprOVMlP7GzUHM4dAUUc0pyNF9OrfQgL0D756P1sHC%2BmUAkiViPXhma3NfvJACOlQgMz9SUom1ofGI8tkkWMzwQZ91RW%2BhcNeUSRZWMCDKbxIEZjqwgxARve18pbHFSsliYpfDvqjqgpXJ2tCtUmkSnrGwOMqb257UVtgTmtyx9YoDcNtsf1B4lKNd1VKqmJop6DiXL4Jw9SGVHMFXiLgWorjJ9rFlIMqYkA2G867URYy7jHDnsgaiIKj7y79yXd3ENxBTewTC2odjJBjqkAVU5RtcjDhq7Ohsrc4r8kONywQA11XkSCEx%2F%2F37HrH05Sqou%2FljXED13gW4Jhp0YTi9IWlSKGyBc1kmCR6HU8Zq54RFgaFo4QQEq%2BCbHkzcUt8b0E%2BzXl35FzZHu8v1746lIDNotJBlSvY7V%2ByA7z0aXHbMUnTtMOhiYGG10Y7T10cp%2FJlxZEQJUkCBUNr9%2BTSawaosDgdl1tcx7Je4%2BYpzX3Skk&X-Amz-Signature=7174c252792b6b8d0561cc17070706b63e88709e650777f386a236738dbdc1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

