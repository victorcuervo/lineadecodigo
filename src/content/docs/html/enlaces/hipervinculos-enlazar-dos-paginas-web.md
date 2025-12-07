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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOGORGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTsOZQa1EC07C%2B%2FB9yn7HA0EwokGKF8PoNUKx%2FdnbFmgIgWLi0oEUfGNt4esGFgKCxSa%2FCPF7OEGFOP26lVatBns0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGX7zvfCW2F%2F3l%2BBircA1%2FrmbkrpTM6aTzeVKS7nYRWd7iqCQNU8XYZec8%2F9V0%2B9U4DMokksIidLh9zDwUEsWNAcaj%2Bqo6GpW%2FeY8JQoFtK6pvzafCcDh8Lk3wfAglxVjrjhBr38K%2BRpLvV8hULcih7cO%2FMt4fVHznzsoVZpfdRRib%2BTmInjk0OeyAtpk%2Fi%2Ba%2F5uxCvrLOhSPhyvxlfxsvP1n2zIzD%2FDp6Nyb31jawCQIB3PZG9duFB4%2FdkAdWmluyoevYcZKb5ZYxZFAdAE779eaDI5i3sbxWY0DiSl%2BA8yRRxk4bL4yAMKMKrSP8mJ92sa6wCYo%2F5MmrbyhHw7QLCnixRwgQ9VWK0QeQgD7sB8v1YvfYMv6KN3tFI2Z8vL1DAarKk05rUwnMgdvVeg6BS04wBeYTEt8zUA%2F81kc%2BaUE2RBUPGCBiPaDrlIYUlqDda75vRoRZjwX0xVZitgGaYyoAKxg6MiKGfIO9cPJzv1IPys%2BQcKKt%2BFS8Zum4hE4EEe9Lp7cRg1NKk6SRRQFNNrbkbxksLE8wbAhyLMHbjV0oPXIc8Yz404BIk1ovkkqtbZtBEoIfcbpxyvOkzCJt2LXwI2PhyaKmwd%2B1khmA1qJ%2FzW5FZsMyPlP6Left3cN2zDLGOkBr%2Fl3LLMKOh1MkGOqUBFVNRKrYCUH2kLxedv8UjRsbhlhoZO4fF%2B9Ke5z6iw4dqcjXHMIPVvRzF9kPJf5F%2BNiVfbqogep1LKNh6l6pUuxTNMM4OVkv%2BG265IyMsVb%2BJ8tf5tyETGG1bFJKM9vqcmIQmaQ%2FMFwVeRRfgENkV4EDMR0fWV5ZhrqfnGaHVmO9TFeaLfBjFDCmx9uo2CtDFqNBnPPTzyehQNJDgyGla4OKjX9%2BA&X-Amz-Signature=3557a4e1f7fbbe6dfb8c9eabb81c4eb98de95656be9c4876bf7ff6266f88cc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

