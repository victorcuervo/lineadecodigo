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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7N7RRX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7Nrglq6wcdI9vHyocGkCnN433ugkB3X5iSt0WFzr0VAiAGL6o2M4HlzGBV4DQDqlT59RsjWpJ1IdC39Al%2FfJLNcCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IZZx%2ByfivXtlGFEKtwDQ4ZpSfaip7%2Bfr%2Fp9Fs0f3nWXcu70jPho4jri3meYpBV9urLy0T8Rn0tggaDoAMbpMaqJYs21nTZeb%2Fzx2EOEJ7tmDrUjO%2FFiuO8Jp%2FlJEQv8Uvn%2F47P0ag7HlmL6n1ah%2FmJIUITz4%2BqSU0WNBrisUNE%2Ff%2BC5ijM%2Fu5v51GKQ0zTFiXkOEz97nKwKZ0DJX9BNk%2Ff%2BiPmJiuhw1dKsxXd2KZRHVCU0ABwF2BfsO3K3nEyjww7ydJFb4hmmmNURLBOYv6EHYI5NlhG6zm%2Bo%2FvY4Vw0AMzO3HMMXjHmWv%2FbqRV07XuTbcksSO2YOhvDU1jpzRz%2FTvp0dgSqniYm4DHkMOJUqpJaHOy6P9QAdMz%2FlG0pz0UiqwfPLPguBpwXrhS3%2B5%2F1kCz5tRL7WeLdzNCotpTDZyofhK9up77XzahlG2rgeXQhhxsiRSBdvzdJ6NCjwx2f2O7epqecr5%2BEPfxetfOXkoswXQv8NmlTq7oPfiY30eHR3kdmQBfbVNZ22FGf7tH3SicdJ%2FiX4KgNav6WDV7s8nktOr7aoWTK%2F4EWH7SVw0g59Q9k%2FvV5YZVvSjDqFZIgOb1MXSO2aytqdcfWe%2FABLwNFZJnr2jSGy83MWpQN0XuHK%2FXqdPv%2BvLFkwqcLdyQY6pgFpHAGZLM%2BPkE29h5DX5iyNOtHOzBdOHUdmXdF%2FAfiGj9DYN4nK82KJ9Qbq2IjJEVtkaSI%2BklpitqHPMACDKjYnQQYndovPNjBX6RW%2BR6ufKf3WKwtEOcrzki188zwroHax5Mh6IwfivqqXmFyhZcW91hRGw62cbZqGQ3zvl8%2BixRA2oxWgK%2BVEpQ%2FlhjqINeCVXJMNgeTnHwq7%2BFhtZ0%2BSszE2R9h%2B&X-Amz-Signature=7521dfabefeff2e1c710d078d5befe690e810e7b107e39e01c17a6ec902dd61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

