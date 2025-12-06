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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NT2WS7J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNuDf5gcwRHtpnsfBf9buJ0phv47dt4qfKxDNiZCz5SAiEAiLWLu9JWxdcz3UA5sHL14uJpa2fl2RZUz6qvbmmgNIIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE%2FMHVEXAWywuyu%2BFCrcA%2FwS1CJh9LBA1suGQTXiSj5ijdku1nvtL3VJ4kkeC4DDXdGNVe3WweCebtGGBAcXC6hlE%2BzlSKUGn%2Bk2BT4ndCdZMBKSjz1FJrzODU2JT34tBU8jnuvUSYwcs3wMZezg9KQlORqtcJOLJbfnIWq3mRDrjYg4u06ki0FUAtZd8XoeXWIgoeCehqNa0RzYYxrGjCUzC2DxyKr%2Fj%2F8MX4lA8%2FZgYjytOYXvNDgCG%2Bg8jw%2BcLaY4YFww5mHqroE6jnEEZhJAWdRMtXI%2BmiTPkMNSDbalqLmPJFY1yPfO8QoPk1wpVHFUEmOcoBO11irV%2Fom2QE5wSMpoap8jvo%2BYnJJmcrsoe%2BrDk%2F486i%2BNdcBBgnQUdcvik9BydjVjqZzO5teuD1OhmSD1JJoGZn%2B4ZFya1opwx681pvbgrOmW%2B4ereaBd6AvFw%2Fu6YpfNk6m9oe3feoM3vRNYs6qVyCQWsG2OO8YizTA11x%2Frgv632UDvJJgxs8ORKTPighTX7kFXBNEbgLmxMp0gfONDklYZpZ0vY44uU3bY%2FTBnjph%2FbiAjp2%2BhLl719YJ%2F7qkfnbHMALZ1LU7CV%2B4JgP%2BxTZeGNRDqKdyedIaNmVyI4iDIauXVCzYCzmBj3GjniuDwG4niMKSm0MkGOqUBlVkdY2hvJNrG%2BkiU2iv1eIaF5vtycaHfIqh1W3uJaj08VDO2v%2FOUaJSfuLB8TxztC4vPIONTrF8a7If1MggLTMgTfdB64vkGnp9wneFHvJ3%2FFhGl9Vz01iqtJovEH%2F%2FUaehUr51dcwVklgZZlJgJPsrI2O0pgU5c32bs8XXry8XGT2rBUpR9vuQuuUZr979f1jZ1g5yBso3nRbyNOxSjk%2BLeo6w%2F&X-Amz-Signature=6498c5f459f1a15bee0cd8bd2f3f7e520e982925b9f6a5b8d6626a82ae4dfb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

