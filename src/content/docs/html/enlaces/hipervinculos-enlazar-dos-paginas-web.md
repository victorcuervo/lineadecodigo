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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X37UTVRT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCjyaEdWtEtSQFiF49CyXXpscbqZU6kYLmZo8sBq5KqPgIhALIpfC7UofQDcNRiLHkUnv2lHWtxCWq8q%2B46bUDnTeuBKv8DCDkQABoMNjM3NDIzMTgzODA1Igz777YS6gxnGYvvDswq3ANOjx%2BJZOMSdhL0LBTDtjgH8ozfa4eS6Udqn2deSXe5vxi4WmHjnVTGqofxvDRgbCOwTwBwkxQG8ig4brLUKC8F0GT7QKocCgTwFq%2BWGXZr1LTVLosxgsXE9cvq1OZpy%2BVHmoxMaLEmuN0F221YRKbkstBs82N1vsEUpus%2FjGicdb8U%2FzWZHwItLHfmPjX3Ldj4CDhPOqQIgmem%2FE9BJDk8uG8%2FGhckN7rsU%2FzEGb%2B%2BuZyD7%2BgBx4Dd%2BQk1Q7W%2B9pAMYV3JIi8FKAZ6iLzOkcjFY8GM8nGiTvdudJ7b7yiLOmggKPFJNJj9vdANdTJAn4UqIyZm9I6Z8OfMmlrtCPkqJDR5eq81wIEQZIsuyvZCa0zoWiDFExsCNdhvVU%2ByBve%2FNiS%2F9WQBeJIOAPQEYJahCMNKbSHInqqpXrkxa51%2BtjfM5xGJOiHcLzTUGKom9h5yxef7ScJoVujmYgXvZzvi96NwRWOQuu3nKO5aHmaQ3EbG41luYVRXKft4ZetyRe%2FOVTefyniVxAN9g3Of3BcFFrczGcl1GA4yQaGLu7azfDWLkyO35yxMM6Mbr6%2BMu3vreTUTG5jGPuf0ZXwWG3haRyWVAQVb4JegvNSJYkxmCm%2FTPXUKikr0chbKqDDLlMPJBjqkAUB2roMZeHvWlFZoTJd3VwMMiZJz7%2BPL%2BjpOft%2Ft5%2Fk9RSTEzvGehk88P6eu3MO5tKW%2Fuqc96TUuoDrIY5jmj0OS53b8hQbIeLhjkGXaL18RHv84ppnrb8EiNqqdS%2BgBIUyhyZX%2FX6mOuqK4KNN5SoV%2BkdcuR%2F%2Fd1yjT%2B%2F4h1oh6izYs6A%2FrpyV9TtICgJq7n5I%2F3rfHLDDftEmzwVPtKyn%2Bskam&X-Amz-Signature=49970288236667b8295802c3e3e806e3ef669ba06aea83e89fcab76d018c9022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

