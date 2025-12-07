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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RXEBAQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOz4wjgZYTS6nmGAdqEXy%2BSykL5T7jUS5dw4I2gxLnTgIhAKr%2Bpso4HEkpWY1a6pEKPUJ%2Fq8IDuHqXyAbchoB4PhN%2BKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXa1z2TojTMj4Obt4q3AMvi1mR8Yg8JcKiei98L4lte8TuEtCf3VtKEo31TLH7%2F2AUKAq9xF%2FtwnFZHgtjQHW6Z0X%2B6tZkIoWIH2VBgA2CU5pKcK0sKbL57xfseXwd%2FIOqHMTlyQE8gxu0DvtvaGKgk4E4Jgl%2B9Kg60KBw9iHPVdZ6rg3ojsb6U%2F7RGFwsKc0ThaVrn8yu7B2t0mPT4DIoMnZA8K39q7pud70IznpWzqyU8cuACIhsYOzNrT97i59rSMZpyvgSFQnoSP04QvjdiiNA9Jfnes9d%2BFvzh%2FXzRla%2BvAX7QfdXpST40inMTN5s40KzD0qHyi5DO0ca6UiZZVhTRzLdF1I%2F06NRKYkR6owaxjiPx%2BsqdDxccaN%2FRFlewdRMzYIeTymE3o4wWrOxHnWfqOs4SOt4m4L%2Frhj0joLVCmsafqNREku4%2FcQRF8TwaDb9SsKfhvidWpKTls%2FMmY8buzChiEoedcIaoFgoA9FBO77cWTC%2Bhgdu32bW1TUzhfHYrer%2FcPxZsFXnrgdJxSYjSElwHUsS8%2FqRjbuFLcUyj2xtO6larpuCzB%2BNiyh%2B6itYXG9CY0MrQp3DvqtG4w10bXOIsi6KDUZQVW%2By4atP8gkcMl0Jwj3gi9SrIf6v01usSwsMqkadfzCEyNfJBjqkAYRhjkKPJx2mp1xPP5MYAlE0l54W9hdo5Ktr%2Fd07i0dZoJLrD5msbMyVjBnT%2Bfe9a3kgP1fE6WQS%2F4Az5NbX%2Fo1F0EkJ%2Fw%2BMK8c1HRJkyjI4acBex%2B9ULee5Y0aeZte4FynUdDPG7f5qBkVkUt3NmSgoTaBmbTzy9fB52qOurwL0KQFHm7sGAikAGeGGyRhlVNLYQInA1g4fsEROTj4bUIdVDaOM&X-Amz-Signature=d6cf2c7bb88d055001c77aec1eed1c99e44efd9e4eeb14ec7367b3754a988c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

