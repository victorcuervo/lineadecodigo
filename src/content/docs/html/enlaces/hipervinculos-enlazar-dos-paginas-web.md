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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73LO34C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFm6rac1zGGOmaUQdiGA3RRcgBVP7NR8f3F62Hymp%2F%2BDAiBXejl64MiKS0AXDkVeyUV5YPz6yEexW4AQF65BRNXIaCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdgh4JiWq9o8EKNFKtwDpkNmAe%2F1OXsUR2NJUhbJP6RcuWqJI22mIRH6lwpUUyhYAkcA%2BbqDzsBGu0fySNe3nY3K3T7rupLLgdun%2Fw7Wq%2F1cPmz1zsKdw5ExUcyBG1GlgiDwfKOa2VQMdJ12GL1PSreSUkQMM704XFScxpubcrDxfSxJ1EZtQMCsQoYplF66KzeL7uCRipRr5XahcQlOGU%2FADwwgZU0AhCaXsonLnS%2FkpMjGSbVsZWBZ8ocuSENAg1ggee0HMAxFYSTky15IjUwOG8aokafgFtJ7XkJtlqaqa6oYDrkFAa6hxXTC3loPFNyZtKblsvGbzTFb98rPw1F2qk0Rxx70bIG8pASdZktWwt2gr45bt%2FkQOmmZBbGOOupHJPkRqxmg4raqPD7vphBbrlww5FTBBZDZ%2BZyj5WUo8mFWB9FcQm9kp%2FHxBxrfl8fZq1LaVMy2nGHx2D1yNSI53xlJKeSUlh9cdhu3orzkGpawNW8o%2BH%2FUa9hnqz5OPW%2FBAoZWaalRhAkFiJY9bZAhgMojfX1OGL3PFJVJzSAU9%2BPCx5kFOqCIvvN1d5HSB2ipdinors%2BUs1eZrovc9neSUJ3umKrfmojd65sRw7Ic4l639EM%2BXejun%2FIp4jxvPtj7pGa5wa9FMfkw8v3SyQY6pgESmfDIY0nV6XzTe%2F7wYTsWqBwwGtBoR%2B3SozqS%2BSPSm2RCJZghDDrKHTOFqKiucHFPhLhftO6cwqvQnhb1joSCTD41YW0D4KVwY8FTYl4XWHzldvVZ2Y5ZT5XVbG6hakH6R%2B1FuRbHYAabFsD6EDX1s1waCJ1l5dv01A1QtVGOFlpFYGDPGL1vVfl8RL7gwTtaXY20kt5jcaYMzjquSbLdR1Alejh9&X-Amz-Signature=89d4c63c80ffa3077ff905642911410fad33eaae284a9aa8c9b887d84bddd483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

