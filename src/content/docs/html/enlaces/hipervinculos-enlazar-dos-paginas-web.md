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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73ZGE2M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrEkhncbH5ALDg%2FgyHEeEdR%2B%2B6OKyCw%2Fb8RRq6shNkGAiADHP2dny0syS6tteUniuFHN7ddggPY2e3zQmRfGTezJSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMih5vMXEmCei9ljT4KtwDGEqwNq85UcBugR6nxpB1IVWeEnJUyQEFBIjvhDzla0WFMdkfjAfu87G%2FV%2BOk6kc16UTe4wPFth3aE5JC6WTyMEGdQ0OP%2B7JKHcshb%2Fe9atptRMpPBvhsuxkRirebndRv8kA%2Brz9jRoY24kPIUCdOHuOyrO2HxHVNIwH2qafOSj%2FcJRqawSd1FSNjfNmFCEbjKi0wZnCwH3%2FV7NqqknmGFLF5xa8XcMEQYoiVjg9GFxXnWmctSqK1wCwaY3yDmRu5hBEUBabvHiZsKb8rM61MLk6V16AlSCasBM0UIYzIae3XLkuxrOCHk26TIyhu9xMHVvql%2FwUbBP1l2Goeujpy1MIY6zqv%2Fb0ivATGu7dXn%2F%2FjpIh2Q6tAcKMfqz7bDsbskzvQdZFNSa%2FRCfJ4G7pwRVKvXgYwj6LFubSMnYoZyaofwF5FVSwuV79gtgDZu1aXGwL%2BE8391RAm0IR75OXdAPVG3OEaLSMe132JaWQEvOYFrelhkwT25FMkoosiX%2FLH6PGq4S%2F%2BGEIeXA8oQdIZASJ31zK8EJnHCLwhcH88CoIZTjZR4iWKOhmg8SEmzk10SzsSIma7lRvLq591K37nTshbIG%2F5Ugp3ChzlK5gVmqCGK%2F3%2FHeSpnbqh%2FPIw%2FrzPyQY6pgFsEjKJQqLjHyDRdYksjKnXDgPWlSEOS6AgPR7hELcdAMhYS2Dr%2FNfOAHHkxKBwuQrsTiq8tK4tMd7ZulwHrbjVmGQj6hxMEivt6310QEBxSXqRXVZh4p2537JW6N9LUKHezoTYF61axEFeaDmZjTAnCAl7VtylyIfxHO%2BoeQtTrpOS4WGq7ebTooWoPMA30ebmT8mhZ8kaseXOxgt5efS3yoCh0Ekn&X-Amz-Signature=fa35bd36b5d55945242248fea58820b011603da371d7f9dafcacff138c19deae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

