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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZDM4YTM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzd2tOdtfQ0YzCVMP6MUXfJlC5qO4wQyRqeP1VxyxfcAIgSOmXTb1h340T3DpexQfVP0djWJk10mLdNrBuPNnscsQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKBJBWL9NCkuqwxSQCrcA16%2BPgGbJ7wkTu6vHFsaYS4CM0%2Fi0TVTFruj36h3%2B84UzvyGFntRCn3KU34ZyLLflUJxujPpX9q%2B2CQjOjcSWvSkyzIj%2FAQgI%2BPGHq%2FPTaiS75JT4nLQ5RDwxgvq%2BVfj3IalL7xMB%2F0MegMUAKtj7WWycze1Qo4cfI1zPq7ovdMpPBZy%2FqVHAXdpVvHpCS0O35mWY%2FKhBmLvVxhVeiRCbq0EzOAEyr%2BEj1%2FtNa2rbojyxox52LIi7J8A2QkZT3F3TtrQb8oooiB1%2BNeF3haPZKFTDHHFjAnMnqHy9U3sbfEEqGkg1neii64WyPnRE5SMRnCoJXsKtO2qGGB2zrmcpr3qfiekR0Xwiy6TG9xwDaDI0yAQ3sfP%2BeAUW1o9t1s4CISb2hgNarjBo%2FOVbQz50Ld2UHAdlLKlZsR%2BIimXM11eRxuaMVkq12pnBcYIVWZMgXNNCIiAVj2vDHxC3uwN8%2Bd9kej3VK%2FQ9y4ABhhelAZmZzaGkR4dPVkRR2ZP5C%2F7SZb29Cj7HKJVOUbRpi0fqQEg0GvmHS5%2BzFZt9mRsTCRR%2BadeCMtwhNR%2BF%2FhbOnfXMnzGJbLOHvAXXey%2FiP%2F%2BxAAi8ygOT4mOdPU7lGfLvR33B1YMb4NzlUDTb3ZsMPvbxskGOqUBZ3qKaIUCMDZg9GFVJ9sg%2Ba7e5RhoXEZBuzjLYCTrnwSC3qR7HIkPFOHzQVSxlBIDwJUFzZqLPdqRX8oEEbo7ylo1V9TjFzqJbt1Srwn7asEZm8r6Ggc02HAipNV2i8HE4Vvky5PKSoV7jbv9M9JAK0sWC%2BFSiZIFq6kWudXAAVo0xIXF6K2B7rRqAvX06V754Fj%2BD2rBm79dbRxcevrLN0BYwDU9&X-Amz-Signature=a3e928a2a099f02bc95531b325aee6b62b582952c976c8941b34e6a820be85d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

