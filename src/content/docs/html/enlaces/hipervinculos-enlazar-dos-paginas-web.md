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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPA2QTZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxvSXVzEl1NMypue01gk9TBdBb4gLolWU9nsuicv%2BgQIgXg8Fp%2FXhJ1XArRycciWhAEDDleAvML%2FJdzE%2BzNzerpMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhG4NrLX32%2BEsw9ByrcA%2FhIUQQyc0cGSC1xpsIYNmlhsqUSsq1w46W4%2Bu7PHe8mQj6HyvZdDK0qFGtyaiWJoKKhjsF7gPQptTthUBprqxKCGsBD%2FLtq9S7j%2FA54ahLy4UIiYKL17T3jklGPvRLIxbCefVtiUVj13%2Fo517E8svaZINj5wIy9oDc9%2B6q81G6%2BwQ3ojT4vupHjAPS4ApYDJuB0eWsuArrmSvePKSqzjO6WdKWIYJTexOyg6ywd09rPct9VJNcgpwtiUlusfDfEVYltV9jaBrq9d4rvMkVVn9Rr06FiFkUicgtZ%2FdzcdMCzH4Hjk55tfKkIQvQvnAZwWM567RcdQ%2F2lXze59VhBp%2BOA%2BprktVnumMIWNHGnFGWp1NZl6Ayo2FpzW1AuJYFZw9JrF0cnqd8tvbJZafwS3EgXcgoJTTtkcrGvIy1YIkwejufRtrNen77dwxb84Iz6MZJeD%2FqkGm%2FNb5uan2MT94xEM4Opt6%2Fo%2Bf8%2BvygEyuObP8vYlNSe0Cagq2bCT0PJGmyltm6VRTdJWAb4%2B1TjuGgzM5QMjxK%2FU9szEiJ8OeciEpMs%2Bp29owwu%2Fu%2F0sKns4VwoXh9eJFfhwcdQfuivcpQRV4j%2BPdMDOIp7SPgbiSiMbV9LF1Cu4mvbAkRRMIDI18kGOqUBytpMpnM3Noqw20FfZc5S%2FBixB%2Fn9VMNfrS7zt1djcHtpLEBbdx0%2BFP0fl%2BfJcq%2BuNbCaWVQIHjmiAI9AbAZVVl2RaTJ9Po%2Fbk8RogoJFP%2FUAIiC6GbxqLWhhUhLv5SjRv0838NsyVe2AK%2FPlp1A8Zl3K71bdNqxQJpl9UbBu68YD9h41A11xvmVL67lG2m0FfNKueaqSYNxEDhrHQpSm629wp10V&X-Amz-Signature=905b55e759d013912cda475ed39c3fb47ddc4d9c37c54ac465e1fc1c01772495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

