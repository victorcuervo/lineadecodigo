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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLLCOJ6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCtx9tjf6kT4dqNhkJcAf3Icq2TBjrS%2FmiWMsIPh8wYIAIhAPR86eEmW5mCzMkv9Cs7JkJHdZNPQQgoTN2p%2ByvJWxN8Kv8DCEEQABoMNjM3NDIzMTgzODA1IgzfVjPO%2BOapds89CUwq3AMEgCpEX7hRsxwOnLl7T%2BV%2BrL3Q3%2FFt80DVcapG9dDIeaN12kzSPHlc%2BtHuuanbHeR4Q4KlmU%2FutDL0mjXL%2BlxCz69zMknnV6mdcQOEAopAsSAyyKyE%2BdRz6U0M%2Fy7TQnAcQN%2FG2tWEW%2FdTU7Su0baF8VYVl5Xg%2BmF55nqA%2F4qM2qu6pQHhkV8GKBM6c0YNnZ04RPy84d%2FZQ2Hi9NXisU033xGOzAkp0aKwcBimKZx6GZGAzHKrO1xL4GbWXH82aFlDsicg0zwe7dyPLaOlurH36bFginCNKHVSnc0LNNV5HobyaHokpBIXIPnVPJLs7ExhW2BDCDIWR0BC3EMEykcVatrS9xDmyeJHAavrm0LtxJ3HIF5Rpe8rHoZHu%2FRoz3HnPJjBz%2FutM8iA2%2F1NIrNBkPvR6TOOnD%2FtGbcAh2yvK6UOJ6d%2FMMo7oDTDpZ8e64NzbN5Vwfc3bS478NOYman%2BDuNJwctuYFXo1X%2F4sR37TcdXrBGrIKtNAZpVKe9%2Fej%2BwF68o9lLe7oEQOWXmfcbK2qNVvHYybB3AGPEAYX6a3PifW3vHFsRFDUCPQLJ1Ke2QsJCkPaTKCw5vt%2Boqzpl0z0OQ8wZiV2ajMiYOuz%2BI3ZzGok0VJl3syJCjNjCeiMXJBjqkAZ7xRjScIlhZ%2FabsWaZ7EgIgIZwxUuQjhRTngJ5zc5OgyIrMdbkVTPuakloqZ61Y02K0XvrlyjmmtN16z6ZsUw8ghcd1n%2Ba1UvhB3wYd3q2A33BhB1Z4KiQ6XiU%2BiUGT9q3m%2FY0TlamWsGSVoLqpAmI65S8MwwlhviwM2S2q%2FKYJRla2QkrTK4%2FVVW%2BOEkQm4sPv1VQ3vWXiLPpjYRrxOhu%2F4qPd&X-Amz-Signature=9f34f6f1c51972d89cd814e559f26d2c4079df9c81d2c23c4453fdb12be2e8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

