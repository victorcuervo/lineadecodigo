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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625RZAVFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FOT3T%2F8xhc95ZpogFEHJTJ7F3DRseXJ3jcuI2tHRdHAiEAx8Jze8SvjrKFfUdPkQq6vilIVQ%2FtKuC5EQhXJlF0F0UqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmsnLCt%2FwpGhe8ojircAxXoMkFfDzxLWEVO9h7Pmv8vIQHyj0L%2BFFot6bif%2BM1YKGfno0xAJVpqyaSnN%2FIT51wlWk%2BJ%2BPbWxqZhBXS91ZAbtiODBIHH19XTwKw3EdzeinjZqO3kMB0rEAPi8wNg5Xr8W%2BRVlqKS7t7oU%2BDXVoJ8BtCUjLESm4x%2Bd5i28AFj%2FQ%2Bl7q8lGX51BdM7RcU%2Bj9yzqm2Tjge435UFUvBJ%2FOZlc64b%2FoSMoQRy%2BppLEJjG0Y%2By1ws5K3y%2Feijp9bfhsfWhK9rA9Aq%2F1TeJzQgcQ%2B3BoD7Il8yx8%2F0iLjtzyaKtrFyccysP5RgmtODLFFQgOMRJu9%2BgJOIbZHtPFdVmLmzzcXMIp2OmEpVDvrtiNyuepQSst%2FVSTy0ANDGtrE%2FBWG7Lxw%2Fe5YrB%2FNsu9CFhH902NtW7MiRlAmcZNctDC3U6EHvvZWohbWRnXRkyDSiV1t%2B78xjQaBqEvErpjt2Wb6TaVyWjy1rBPWuH2SD9aMBQR9Y%2BDGHQcW6UVVbYx7C%2BbXcfzcIy0aoh%2FfZAX6FERl8P9sg%2FqKjfK1qSuTHE8cOYO%2BeksIvmag0ySBcv%2FBa8QCVaTjwtczQnwk4lkiCDjSaoJszfXo8nocHzCOsp6Q5UWRRJFMOj1ndvoqw2MLrD3ckGOqUBfUOKsC6VPmi2aeneQbLHR09nTDtkxmSHipxBr%2BbixDA7%2F2gfAV%2FcjaIdVmnCOuALIF5CLxOK%2BjVum1X5smyzAWaQRrbO0EmyKz6EmqDvXzNRf15IkFAwCaYuyJ2VeYEG5ikLEKDbnN0IkIGeSvVLmGms2P6WEPTZ8fUfqQyWgQlr4XNqcUv5g4v%2B83d5%2FZU5wChIem94yR8pBeq7ixcwg3kfYlLz&X-Amz-Signature=9748c078f7235a24cbaee9ab597b63c07175dcf0ff44c78cda316a2e4e4ebdf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

