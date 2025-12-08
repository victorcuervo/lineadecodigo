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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYL6VGL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxUnd%2FheWCqctqTse1z4KK88En2DGwKluVVbs7Zh54uAiEAoH8dLZR0FyNBBRFr78gLR2aRJecLdCW8WSy9bRTZQKMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhH5J8F4BnqZ4QS%2BCrcA5fS3owezs2kjvQDOE60rmV%2FngLO6hx7efsPQgnMSaS6PcwaO%2B1sMcs%2FhK4tIccYLnz4d7GcuFPU1htGKwphdW73vHcMrMhhCysAMshlndAQndr2xuXxL0RKmp6HmzcqMy1npEWw%2Bnoj%2F2IgMko2FqNfcN0ATytz%2BYHOm4jAu%2BK3K43XC0HEKMA9RHYIRCZNWj9kPfdeTNmhJ9%2FRotnG9CBfzzyTpqDGbUEcgrGh4SuaPZk1Y2P97e2gG0PNakYRGg0bcGQmXxHh0HslBUcZHbZy67GTgYcrKt%2F2AkPcOigtZwW%2FtUdVKtxGhMjzMb3CtfjM5GNaQSV4ig4%2FENnBUcEVEjTRCi3SqEebKHpDAYVMk3J8FnMqtJY2EGfOqWHD0sIUfTgTEM4zCUR0pc5Q3pll6NyWxB%2BO3mngytuWJUbAwyRUxVd%2B6FENUkSX6xFIK9x5hOpbthXTaUJptJqpDXHxq%2BwBRVJCHq4blRbAY%2Bs9V%2FBFoAoJvzLSW%2BO9uWH0o8azNRu2P9KZMDA%2F4sDJEDR82x%2FghI16ICuA%2F5dkD15zIUvzg0JLA%2FGQgTPDDfz1xenpx7MGXO1jVfwcROTfzL4VrKkC146ogWe9hgrosENtfF8ckGhlpE%2BoUsI8MMeH3MkGOqUBsZSNlPAbZ%2FWlQptib8c7D%2FEhKOMQRfV1xYtOFkAKPDLhhvfUg3Ipj1qzRT6AblouTxeutMRq3TrMY2Z85NS%2FUStn25Bx%2BqO9yBLIvWAFu81thALOJelKDUWlcwPsgD7IN242IKzt0VYoQV8YAMAGg%2BoqAG4%2Bwkj1sfQBDEKEoaGl0G12DuUwvJhiL888fTnim5SlszYppsG%2BMcQP3yEvtfQv9tSp&X-Amz-Signature=8fb8ae9ac737973e1ba1bf401b5fa319a2a8e0d4e9dff59822cec905eb8fa11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

