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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTC6TRH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9aE1zB0YY24UHghX4NsXn0tCp44RNocn7dKwyGcZf1gIgH77QAcmbE0iNKzCCWch1UxOmOqBYgTHUak3G1G%2FsdOcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFljspm6cLSLEfsghCrcA9up4jfqYYPBDYbg3u1s%2BkX3PG1xWn1dkD4C%2BniQQ7pPXNA5PQ4cIAiqmvxjOBe7Xp%2BV0o1ld2dgQKBLFxrbJpTghjUMvK6Dgs0PvIWHORMQHLwokvCj7fJhIs8YeG0XdlLSGYuTCr%2F1gMGZTgYlDa9fcyBL2c3o79vcviO42kKY5f4lB8o5ZYY0EbbqfhDNqS5rcvzRp1P48Awjn3iwVWqOySYuGycsJSIevzoPHpbDWBBncw1crQ9dJ%2FXxnB1fzjTFayejxKSVtJtPps5S3eyMC4fK4NYb8ji27u6Pf83WKtokpQoZ7X0t1waqzdE2UUVL1aJN5VcGqCJ56PhgCTp6zT1ARloz4g8emq3KDkS3HO7PJQ21ru82bIBoxINv%2FdTEcuD6JvjA22qZlsAWSbhlOBm5dsO7atywjiZu0u0LY1RjC0Cd4jNpHMJU1oPmHrOcCfixNQn7JNHAmS3Ib3u3fynFqX0Xd%2F0QpeITbip%2BNxQWLgJl1UyDumvzMHMosiJ1Ftu3St2VTqtUY6po7gq0wQ%2B3rxmr25rHD5SkZWNpASYacpRnivC%2F2DotlsNj4%2Fn%2BShgdd6xJJuDSJI8mMs5oyH9l5svlwFcZSJ7VU6sXRsKD56Fy%2Bxrrt5k6MMinzskGOqUBWAOr4G5osLox2LUgxylvUYAZ%2BhST%2FJVTt88V4%2B2GYNDK6qsfx8XQhs1lUB%2B5kOKvUcpQ5M%2F2fcaMQ%2Bd7Hm1xxmQ4TNep5E5iTuTj8hQZBTsuhas%2BO3met%2F89w4E7glZKNKJTNzaMCMJr%2FY28Enk4CRhRao%2B2dYbr4Hw72Cdh7CdPjir7JJvgNUt50i%2BwoKoD5hu9srKdj2wiOX3rYLFwbop7%2Bm37&X-Amz-Signature=a0538ee4115bd656c1fcb81eefbf4d382a8e39113c6c35ab0eb0c84e4096479a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

