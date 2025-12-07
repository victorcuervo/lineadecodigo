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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKPRQGL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPHePUxfodSE10x%2FXhS10L2cre2cHRJtfS%2FtQTgKUuQwIgXmd8JSeHn%2FzuZn0cfxDDhPaqzrZHgvsNEHbf0Wqg%2BxUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxSFVjQMV8gCWqgQSrcA%2FFgkEoifvqExKGTV6gvdGoyb1dXcGDLgEUw5Fo7Hl%2BUF09%2FAT0BK%2FgX%2FDmY5cFsD5qM7MQzswxCj8PvWOPIvDYKSJ9nZLfQd18eFzKyfQAeukqYdHiaQ0IarfuBeykCIkUevQ%2BkzJLJJcU8xD2pV0bQRtJ4qJsM3QdeKXbeIXg8z9lhVE5%2Bdu%2BW%2BYDeB7LonwL4fnrg2pOA06dvo7BCLq78fDPrKhiuHhUUdsDnwsGMXFeP%2FOF05%2F0tiJMyICyN%2BMMd%2F%2BLEjVmTP1CfmotNNHsw4gtg5zBdped0pxsKLALzAHRmEb6%2FymxHA8G5lyJ00WEZxM3P5iqVnox8g25xKmAE6IpL6lTCuhhwLRVirL8Ta3AHu%2BY8OzDGbGQog%2BtbvQaZzYn%2Brsqm1lePHwY03neBDzl6V61qlimVSOfkvPfQnMVIiWs7xMaxzovtmt2OtZk5xB8400t953uJtCLYDqtCAmPrUaGE1iSsvDN%2BCBtDhSc2ZVQOZimFVCkMAUREyRHzoOCzjDzRhHir%2FPzOKWmkdC0DkJ7HMeFGNYMGpuQ8RI%2BqQJT6StDe4aic9uRJzTjDUFrFLAa3r78fXZqI87fPI4ktDPf%2FZ9yhgDqz%2Bc0MQ8lxCViyKVX%2BPIksMLzH18kGOqUBFxXpqjs6vTsUWuxp9dg2L0TMj0xbFFzOUdAOSQloC2Qr4H%2FKiooWM%2FzLz1%2Bq3WXjrJ9ERlSXIzkWRYN4SOYXaGeaCaaAOXIcEFJcGQqWYBh%2FJ5mY1foAHOVz2LdUbDnh9ogpNCJd42QkXnDsArpKM0pwxPxahHt2xkfTiVFOPsybZ9J9gb5ojLnA%2FnN%2FfbTlh7RVAOUHFlfIwxQyM5PoUi%2FNXD9h&X-Amz-Signature=8cb0a94ada0d802befc3fb058bca4c6e46944ff39fb3d501220b7a9a0d74c377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

