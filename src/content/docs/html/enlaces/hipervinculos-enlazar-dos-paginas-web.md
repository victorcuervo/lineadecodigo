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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2WTPB6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKTfxWU7wLOuv9cW%2FVoRsyaYnGgy9oQXEO%2BcCP1n9PwIgKCX8fQ6VHl75veFYydw3ETm7HN2AkVcaNe4f4tnbGMUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJuejGSmVD6WqWiwxyrcA4HNOysGytv3HIzY4UjeaGEPOhTtT2rNa%2BpNiHyC8kf9LqdJxkJoBbZMIEQx1LA1qTbTwRi9vav1OaGrh6hB5tOk%2FgtvrVinJs4IpthQtyez%2FsWPwPNtRMsbL2ih7L7Mj0IWbIgAJJGA8lpwuv%2BaA9NceXyENyTKd9%2B1Aiak3UnvohPgZGBvcOi55pll0%2FnDsJD597oU9vqMNrdz2A2iBc8Sbttha5sj8PV9aowT6Mao9a19VF1i1utNq2bMih9mBxgMdoillZ3l18tWb8Vv4Z2Eft20JzDNM05SR5%2FkLzuwSZ2KJnUUu92BJ3gZ6PGBWS6bJCvhtcEktewPjmik5n5G%2BUfvapBioN1hLQOGQeYR98UG%2BE6kiH76kO00HiE3dCyq3eeayJPI5%2Fm9NMMRrOd8cf3VewXm3w1HQvfKdaOB1hcaE8JOlabOoZS6qvBmAPnae%2Fl%2BjV5fGfCikcExlsHzggSel4ARHv5Bt9LJ1UlQbXcdzoWlmxi7hjmQiFR3RnQ4Q9Wbey36dIbOKvBT8IwD5uTffDTt3QAIU9EOxnhv5EUQvuxWaN1oVMXWzuaPkkxkc8j6p2D75R%2Fuc1ISR0oeGb7EXNYae7TAPBAUCoIwauLlkHlQBvUc5xp4MJW9z8kGOqUBD15l%2BLa0MKvUMWbpSq90vX%2FArJSuylC1KADz2nWcGkMLMpxanAFHpKGGx3OxheZ2tALwL%2BDNIUDwhEmqkhKHo2VnC1hrMxFeF1HCXrLYPgkSThheWrdanWBoZJdRq2zaQCFDLx6j6zRVb%2F4LsE4UuRkoYVnhpH8wdLwNBoKvItpJSaxEZxLY53%2FLEOVsxxnqntwrb5zdr8kpzCesQ8R7WteCjgTt&X-Amz-Signature=26db8c6aeb2401da250b0360f5caf9e4e9ceec60528023c9bed6662b4bee3b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

