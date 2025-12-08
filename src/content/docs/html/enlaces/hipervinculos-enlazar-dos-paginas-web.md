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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZDX7WK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0RoEFfNg2NByF%2FY37XcpRorwYi4Y86xHdK0%2FaYX7fPQIhAIRIrmD9HnlRzlWt4OU0RkCtigjnqnpK7UmypOZG7qgaKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBQ%2F6vKElh9S1R57gq3APvEa7Qsi5lp0Nie7A2BSYBbSmU9ZrbTjrUfyHdyZVRkBVryn4rauvAEEiHHsUg9Q6rnF%2BHqBKvyZxXAB2dBVKEsoN3gXcJP3xItr65p0lVfnsI6Zs1zD4d4XBuUCF%2BUUX3KmyU3grNS5GPW4HPE2Ii53cMoGZ4yu5kZitwAg2dqeuSncYBLlC831oilKzW8NVl6B0CTP4uZYAfpgLE3bdgaE1ZFdsr3vCf9%2B%2BWzSW9hqvMY0j6rOUhPloXggkeSExX3OREcrRVJTgS1neClr0e1nW6KQMEhcMFNQZlTC4m1Z%2FwS3wuIwjO8SoH%2FJOJSN%2FI92B5PnPhLPlLyRWtxHXvNQvAMPbUaYVcAiCN3zYSw8p2iCO6ZwDfb0%2BP6ZeNIQ%2B9BfaNUoKmN%2FiKLl7OwuoEv71gs%2BP3kOpf%2FF%2F7mVMpnCOLcy%2FZsxHePQPXOq0FLfjfTa3pOKgLYVhEJQOgeT51a2rMSjZLcC%2BX0RuYovBKhOPxA%2F%2FtVUwDzBkPtD6UKdOKv2gXV3dOGvSOzJA5BT1oRoxuwvC7ZvaFHnPMlRxmUjLqldOTN4K07th3jsQDtfUI8lwa7mb4uk5%2BO9U9EvYSHqb6K67bAsrgV53WDU2VQzqduU2fHrq0Vn%2BlOTDeod3JBjqkASE7yZbuOh%2FCB7cECe5LZc59Gh%2Bv%2BAz6hmiIPJrPjl86rP6dSCOdRh31AImOV%2Fy9oYMIWnp29Vxj%2B%2Bv5wf1d9i%2BhS3RQwFcAzfdsqIbGsTWI75kWXz70%2B35Ho%2FY0FKX9dSYFaSO9H%2Be%2B5IWfsL9gyekYc8Uf4CMfuSa4cJzrCbPH5byWWY9RarQTiDv21gJdZKZhBjBkyu6%2FQmNqvJKDbPV4RUJ4&X-Amz-Signature=6d0eb7db063a79df86392b02f0cc63a9e8498936335f7ed5a29df9a41a8d5f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

