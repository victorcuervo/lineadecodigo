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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCW4GI2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiSnImud9%2BMMIcyrldbNNt7UPUOqlI1qhRE00gNhF7igIhAMoXVWpTpYgQhoWSyjNzubA3E%2FyW5kz2WLbC13Ykch3bKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygrw5EX35HMPqQISgq3AMM9EuYhNOc0%2B4JFyTxDbn976w1QcrFK3ZbHdQI0eCZxR0yjp3UIWxK9aPF4hLm%2FJvcawhihpbSpnHKCW6ERPXkyYu%2BUMn9w0Y4a5tWTjMGewyXmjLen5zXlbfUQXsQ2oYUtIuXVly5ALnbobyCYZ2zQFaz14nQjbm3l%2B4f%2Ba8d9L6FcW4%2BJHB9uydSMG1D0n6p0K14oR%2BKkKGAiy3vblGx6kL0VH20q15dF7qt0ulQHcK5algZbT1JBIDC4sRHFNJVeECdRBgag336m9tPVGVTwJSjq%2FDqTgyaP5QoHFrQERuzkzIgdF1brdpTcFnfQLm4I%2B%2FF6s83IdUSxG%2Be8c7A8SMMW9N%2FtkHYs9nQR4i%2BhnrtV6AhktGpm1ZHfpEpMblbHA7yAmhnvziN6Kz5R3Bua7iQZmjgl9ewV5G2hvn9dGblqXXmGRbhCh44OAUXiLmrqeiNSVPcyBmvcHckDQ836yVDAQvYFptviQQJcuCEymxwIAfL3QJwGV3hCQ6%2B9D%2Fh7kWU%2FmT%2B1FdCrrZgN4IdpAKimLU4jrtzcB3oCn7N3PK8%2FQUWG%2FEfPi9y%2FSLuDcUHWENN9YCtPTXGWQKL2osa7939rFFTKX9pRIjJe5R7TUzSTXT1qTNobJ8n1DCJtNzJBjqkAcJYfBAhVH5D3soS1LLOyPnyHUKkQmw45YUYId6MkQDIeRO6U8Pa6JX8%2FRmZ%2BVXUi8hV7v6P87mwA0xRREkuZ8ZfRXcV2RM9FsXZWxsPtSRsVUYTHmulovBduXjDG6G4Otpkfqk9JY8wg4zp9f60amZb2mZKZIahOfRqmGzVelG8zv1K49f6RmBkZy2IgSVzBod8ARj%2FMqcmtoQMfzpatQ%2B%2Fx8V2&X-Amz-Signature=df9247e523c2023368658c7f260428f974b28175156e9fd96cd9d520c0e3fd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

