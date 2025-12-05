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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76IYVKI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGKexxeerqlSjkZaK27DSBkS%2BCyStgdrMgyEedMjSH6gIgVSfJPtqEEWXoHnEc6ysJghUZB4xa%2FewUMheAo1dWkM8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBb%2BHkf29zs2XvpYCSrcA2v9vU664%2Bsh9FGN9TZ4hal2wAIh8wX4fG1Pzg5p9Ofck26gXx0WjPPHN1M5oveyCYdhnsnAg478XfB4KqCqvzGaLkvi%2BXRFsmd8s1SYmnlQf9S87c%2FSw9ta%2FppNROL4ITkc8vI8Gg4rCVFzfeZt3Ntxr80G%2BZU1K%2BW%2BVsqBzRzZj5YN39YBnkqBkk04tBXQ4dUk8DMDnKuLB7eOIHwWO6%2FAOuQc1N4IQ1buIt5lQhBEC4jpU8Y4b0fnIOzKS4JdXn7vLt1ztT%2FtvIHNQ23HMkK0Ne2hVce46NugQrw5FZNxlX%2Bc3yoskE4ydnPynpBgRi7FNS%2B%2FOZmK9SBl%2BFf%2BkbmttdQfNE7j%2FPUm4Xs%2BpdQgBUTZax%2FTKNKvT9fGNeWam46Ocq4AznT%2B4JRjThCaONI9ZSctOEBcBdTpWXMJAQmjuF198Lg3Ge2g%2FntgFlLXNU0lFJ9WddQO4BNtiijETZhv8VuzH5VyN2ZuHMQ2fx0xVqUI3RUKQD3gmHnbqr%2BdU%2FrqxsVVI1OmHDb9DGbUYXvUuz7wGF1muke2nPDd2J9VJymQxC4HuQjdVQSWR%2FRl3E9Zf6W7oLZUNW2zjdEpQr5vfZeEUWT1VkBNPWK6njzLn0USt6jpbU%2BP%2FcRuMMDVyskGOqUBaQpZs5%2Bo0DC2A3shp2ulJyWafY7ytbre0YGjt6koHD91gDTV7YUs5YJzjdJczOIiTmYvFDYGl0E2Oef1GiLXzj34SYzNXpO49B9FZ4pXk3MAbhzfXb%2Fn%2Fkstru2OTqdh4QI4RY5eh0XASRli66BTOiQPuIVjWk%2FYUnqiquikdTXzEN%2FRJTRn5QkRFqNSMEjh%2FfzO1p6C7ztkP0FxQSiv89m%2BoaCr&X-Amz-Signature=4ead25663d4c51b99ab3947872f13788a740ed64015d45666318d4c8e6ad73b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

