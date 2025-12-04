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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGVVTAF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFHmWu3M2Zy1IsRZJ1VpS39dJ39ra11B%2FCDjWjsPCvQ%2FAiEArBKgSG04Ji8Y3247%2FWvVBJVBguwKVbq1QQbTazSMuGUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDeidPcmW%2BcHsefCgCrcAyBzWc2kZhtln%2BoVxV7KYAV%2FNmldvos0v%2FcG0%2BRSmM%2FE2QsKFYoSF7FJ8%2F97SPw5gsTw5GtsSnaRIIn2IR1vGgwgHyZqJnOQOQR0LefY2fOF6RpRF%2BqrPCfFjPdQOI9Pt6crouD%2F%2B785GUPNASL5xwZ7p5vxi77sL9%2BzpyuG9JlK9EWd7ydNepb1Dvuxuk8fLeIqemefH2RJis5m5BIDK9UPAo88Xhe3z%2BxE2xZo09Iw0o4VruM9DQcglHw0%2FMWVu19op9UYNlAyzY%2Fp1%2FYp3KNCezQOLicXv0emD4Mhf0zy0c8uKr6MfYqmnwfS2Fd3uBEZldbCkWGQy3GofO3eOF711oGzrIDaCJtX5zf%2Fy4o7zlQPweiqvq%2B5rhflTCr%2F2gOg%2B%2FsIl22nVMoD5H70SsWKfOtobi%2Bu32zGv7fT3KE5faneh3x29Q6FSROXBdoARb%2F%2BLwBUwkbevuGQ6YAENfJHfKTj4XDjRc6hp57OJSrDcL%2FcBiy6L%2BP0X2i1wZLS7F6C6TuaJKyXnuY5bWfaSYgCTlGocbKTmTqV8p0rzVtDFS5mmux3K2vSwSLBFb%2F8OWdFJJca36rGgCf1oQu0%2FwDzzwAYQiFfHQkHbIGiRvANIcITK5VLQGJd7sNkMPjJxckGOqUBlAHNOh1CcZ0g5HhuaIEcLvV76ELtCbGlwANkHgL%2BDGYKxLrDdTmMIqGiBwyGkovALKAQFLwss1qs8KtZ%2B5efHAMkKFiJzuHc2yDfqIACpy8AirOGTIBd5aSZRwo4Ytuybt9HuWv%2FazkbMvrdQGSSGEHaoV%2Ftu%2BTvmBUuiPmqSpt7HmK0TUCs%2BciBpNSpzTbIh3y2XA32M82SrwWB1oAYrCUFhcJl&X-Amz-Signature=d85ced06a4fb4789efbe8ba0fb899404bcac4b9b20958d5c82fda133de4c80da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

