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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGS65PS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD9vAVD%2BLqw2ZG01vfGDhqIV4Y3xt99C0kHR%2BB5GgCX6QIgGIAvdqkcfDqj0wHSmLEpKShU%2BxjXn7bhH4x1jwjc9OMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOTA3dqA%2FTVgp%2Fbz9CrcA2Y3bga%2Fp2QHpM5HNoYI6RwaazkUaNLKGOosQ8hEPF4iCIG2IQACvT863Caj5nlZHYNZdzvVAyUxA5fTk14rfH2QsUROuxQvEn52ORzC1yuai2Eni5xrnSuc5bWyMFylYD6v5j0BTsNUQFCJx%2FyVls0aDsIfK0BvfIvHlY6r4BYxdLNmyZoc6UHY4TJLFYXT4JgkPaXzFjVHpaH0hvpAkjoIIFkxeZYUl4uIG8ppiOgRQ%2BbyB42ZqMjzQNOJOT1bkq4iSPlnSRmRPG%2FjF%2B7s7l0DSz4lbpRWPUrYB%2FnXyyBHZhGTvJEnWL4YEowSwGb8cuNBcaXpwLNzUsE0qCp3UPCpZnoKp29K99LSRzeXTcNoQ1vo6n2mOn%2FyA5ZZVoglIHD5pCk55ccTFUQljbrOuJ0u1vXgPMX%2BWoNmNtOxXW1z%2FK7DwaK9DFlZgxv7%2FmPDVuePxDedjR72TAgCG8%2BXVvQHiBxyQxV1iJ9dC8CV%2B2O3OKw5Ky90K%2BbgcI%2BQTqOnvrrkW6uu5w%2FJa5RBlR4A10lYnORLTW02Aq5nDQ81bBT2dRyImzh%2BRFkfSBxHN6piQitk5clZY8LUBB4eepDgpO96lUvvG5ZbkK0RFcythwYyK7aK8YvTfQe6LIeYMPOFxckGOqUBrv6CbHatlXg5T0uf5Z59ooRtRjvBPtFjD7uA3H5%2FXt%2F8YpFTIgZXZfRiJvvAjI6j%2B2fWCaEOp4lZX3nQiMDCY2qAKpFcJiQ5D43al8JzcFtwLfsjveie7L0AQ%2FkJpQ%2FMdUAq7EWg1zqMwGv2jIwgM02wVy7Sww3nKvbTdLBLdRO7GIBPdSaPRhV1RLgvUFfh1uVjHi0iEmVhM2lN6OCLPIfEJ1K6&X-Amz-Signature=e76bd20b43095215f82a0a3458141864b3aeea0fb02679b2ab77977bdaa15c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

