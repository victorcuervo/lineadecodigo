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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOH3PFH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF5iqKBFLDI65E9tZqc%2BHssMbj90MiNwYbNhUrCwW6lAiEAq7pCMxUy6vwsL%2Fd113OC%2BaZPfxAlzF8neQAXUezUV1kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJX5q5q28EFi2EIDjCrcA4ZqIyPaIINEYbFlLA1300iH3PeH3tRph%2Bd0kL4%2FBH1RuJN2zUPRhBw5MgEYwwsXjBw2V4PX0Cn%2FTzs%2B1RjKvAb8s4xqrCjJT2yxkgNq22GZUPqXRBugsOSWt4iCqa73nrJsSgk6%2FqlwmaXGxZOQH%2Bn2NlSIzR%2BcjrV%2F1e5HhYA7qt9ZWig8Zhnoe0a7UkUTHb7wXHK7QoFr8tmCkARHmvTcbH6oMbNAD09FaoPKp9nJjcQSl3jW7N1ct56ohwZFtQHqfN4MU8XOkyoRuId3Z%2FGbcAbLZsHDJ%2FTRHmJmv%2BCOXelg17oHAuCoIIQoUF2X7%2Bmkg2%2F1JQxW3I8zRK8oIp4qKHax1gfA7fSsMjWQl%2FNc8H3y6FsvTF0JYSRiW0r59vycP7gXKp15qYLm2o2fC65my2f67Q%2FJSor2HQSR%2FCM%2FUewF7zOJlji1hGKhK4%2FmKFDb6OzrF%2B02OTS9eUhiT%2FyWJ%2B8STad7bRMmsIt1f%2Fjo6BUN3%2FQPoe9KkR79j4d4%2BW3JzxGz7%2BdbBn1PiOyc6WWzuk1wlo0XbpceGI3pY4pCGHP7Ex%2FGBFk3CbMjoDm%2F0UqX66IRFFb08QLuuOqAZpnyFk8NpN4Npb0YraaDDJox3F44dwQQ6ZIi7gfhMIqsyckGOqUBvgBPAaH1OC1nNTROw%2B9gcpcxXISUEaKNmio0dunno5tEU8UHZ3VU5CQrfdFq9%2BNd91ZZUEUnfHX8dvkWS%2Fj%2FvXVY2%2BbjOSIWxaR3D7jb4e3j9y8ABhu3VgUuZgVg42W2fOZygmhozek5QlYEkmiqg%2F%2BEs%2BdEqtlcevcBINxDFyclkbfD5BXsTIzhrBfKgaYtA5rzl%2ByAxAhs%2FvMqlRrSM0IRbme0&X-Amz-Signature=f81ad7e949fab46777b4866b71a7894656c3eddff1f523836594a0932725cc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

