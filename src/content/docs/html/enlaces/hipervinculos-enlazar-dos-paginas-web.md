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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECDOSNL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqiD8Y7YEIUFUDOKWuXNO6dFg7hBJb7CuzXeuEBwR8OgIgcbWh7UChHWgitQiN9goNe3RN2eZqCL0dNmT98Gd5Ggkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDF%2Fl87daOWl3oLfjyircA2zCAYu%2F6lOMQkoPZ96pI01cPW6coNXCciA37bHd1SS6mUxhKvkyFf0Ymf6vM2cL01yiUG00vl9mho1hn6DshLhecHIR7u8xyXKGyoBRMGswn2UwXrtdhGx1JZ8Hs7lyK9aVaA%2BcCbaGbpnVNiGrqR7W0RwbYVgdL5wjfbMnZL1%2F9GslxiwYXKKDZ%2Fe0bFd%2Ft4nj9Aa1XtbeMgwLINZQCwXy0q4eiQ4rBYltoJvHDbRuGyHLOX4QljT5IsqfNLQU7yhxx77iQYjZuW61Yv%2FYQow%2Bnx6ZjksjnB78cGerLed4NdcTsyzFuI%2BqU6gTCdOztzesJEv70Jp1JclP6FfA65bgUfx8yfJh1Jat%2B4ny7XQZZxi7OcGLZCDU0LCUWOougPxWqAv009qKPmTU%2BoOOD3uNTivov2rWIyv6%2Fm88KTR9%2FdVJ48b1f6XOttDWImpfNdod0dvesJMrUJOdXDpoULzfqLXslZ0oeejvRCknDd4WdeU9aVNpu6TXGo5stE0VnhxrPipxy6Uw5rUfzxRSYdT%2BjsaKq%2BVAj%2FfN1jWOBlRE0JeE3zCz3V9xnnve25LaJVgCy4jUzzJPsh0cGDpDSs%2BH7mzyZc2vB7Yf8jj6wDRFliD3E6T35AbK110PMKrcxskGOqUB0ogSMWWfMEH1Z9%2BpKw2GdztgeKtqLv6nBsmWXjhxS5uBqYtWgLAnXTH2%2FZQVo%2FtivC3xQseK6bM2N%2FTY0vtSoEGI1UZNQMdEeyf9TOAe20MMtzKo68ZaPb3P9Kw13hPTyz2ZL2skgF0HIHjZCjBtN2IRsReN%2BZ5Qd2hqOJjZ8b9lkTxhIC6CV2p5empXheD4j08tZtC0J7iTnNtPq5WmvTiOY80B&X-Amz-Signature=aa5f6353a0eaadf0e1cb7a1ad6d40bf2da7c22b62665809226230457fecff1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

