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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSM2EW3A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDikwh950MsV%2BSpH1RdBDh0n673a96USIncYGEmSGE25QIhAJfsnpuUwb4tf83zMNwLbYeYp89AldfgX%2BL3%2FljW1lg1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyMbdbMSGU14SqfZCkq3AO65UjMVruNH8LjAE2M7TNDHjY2JeUz51%2FPrJsb4dN03B%2Ft8EVZrIOi%2B06pRloUeaMMK8cQieFJmIk1yGg2kKQSzCK0kgAsCEZ0ij05ovSUfvAWtbkHi8O3GGDH4yib%2B1siXPR%2BNGra9zEhPvWbHPP8u3Vb4LpckIJdekprC%2Bv64FSpcltg7LHI3MdsG6ib8zrHIZYgPkG%2F5cs%2F7vnqykRh9VDjeLDx6dV6%2BUKMyHW5WmfKDRrcMB43aPwC10%2FUS6sRZK681%2Blfmr4UKUXd2hI%2FRFg%2BSE8w%2BtmQi0hKnBxIMZb4OwUAsg8tBy7wfJYF9IOod%2Fd1J6FknKsVniK0Lc8HhLCyQW%2BXdGFjvL6fDZVPh4uHsJr6P68G68nL0jW0Q1YiJW%2FsriPHQgrtpwLF63rAuPZKQ%2BSSvMA9sG%2FVEXIv%2BBUC7zo5ESWHGpqlvhC2DjHiZUV9H%2BZVlWpDQvkS4AihjUWoDdweGWBKtdAXM0WYg68U7lD%2BWT8Zgkum6zD6Maw5E8WdcTSr5%2B1l8koFi9le2s1%2BqCS0A3tbgvc3UMjBQ1Z5Nb8ccAZludonIPuZsk%2BYFBnaE%2BN3tt4B4zpJ69Z3qvNA28Udi%2B8qSycBKOWMqmaYCQb4aOIUD53kJTCh58XJBjqkAVkHqyZEe%2F3W7uHwaP7VCLtlFa1dALymhIlGsqum%2Bh%2Btd6Tl0rMSYPRku7NmsPg%2FIP73lJPLFdAhBxkCq%2FeziotmE7vpoJBk0EpibGLbwXym4XAxnmFR8yNhaE%2FNtMsi18VIAHeGmNxCIpRp272C9qexxvSgc46bHAPIyJ2YQZo5qRVn%2Bb%2BZzuddasmmIfvUmcWINn8vgpD1ZtuLPSqRPTOHyCfo&X-Amz-Signature=13f58da5bf7e1dd7346a679051a5d5bb87580c4ffc0197d9ab5c8b145b4af5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

