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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JRERYW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTGamhRYByzn0KxYMsmdqnroQzAp4wvaxlB4mpvPd0lAIhALJbPpL0s55EStWnV0EiO7AP3aLb5UlF2uTk%2BaQl3SmeKv8DCE8QABoMNjM3NDIzMTgzODA1IgyyVx7S%2Ba5x3yEiAG4q3AOnbrVQTaF1enKZL%2BiN5T7u9gb7CVuBS%2FyLOaag0NASblaC0t1h0k%2FSUM8wGgOfF3nApvSFynipXcC8lc0qpX2OJnI06HwNScKQFIQje8h0oW1Np5spiDvTWktPijJsGFeVRib7D5vSJA0x6YYm8h7kfBvIBGUQ5pMxIwNp2bZjuRDjhQB4Yyera8jxcBbUUzh4vAEanoVEj21WTHyM1Q3goVsk0HEGkK1IcKJn6%2FKC97NRDAiR8am8BeztZCDVMticlzYl0QQ9zOFIRVV7yPJFS6dhK3pMCmH0Bdk%2BpKNlBjdRwVHkNaR17NkogDsX80nc%2Fi%2F2NljPtJpXjNfoXAvfgRj9SJGeXChwxipqIkjAeNiAJrkU6ngUgOYi7oerveLovOpYGStNVE409mpPkxgiwMUv1%2F1AXMLy%2FJ45x7WzdkJcurKGJSEcynaCNi6stYM8toTmXxx5g5LXwXssAPlACxaQLWRu390LRRI25%2FXU0IKTx%2Bu8c%2Flqz775DmC6Yd4ogtQ%2BRH5ElsNEWvI49fuhTz3eRpraHtTPnb3URsZtyfK93Y0RXfy2m5m2wyvlKwEQDNMqTr3BUVHmm9%2FsuOazrjcQVqWhjDlkw7CpcSJQWs93iVTcBTuW4lkjJDCLjMjJBjqkAQGbTq0DizKdT5oAAPo7kU0Ce4JFhrLfmYyWIcS4E3cJcl8tm3Mi%2Bt0C1TacZnikpPEybVJRW3iiLLJqhWnkgSMJ7SfhbXvkY7vxgYl62maY293N0iStmJRHc%2BEZDeAqvop0rHn9AwBMC10vmwdS1tMX4EHkxD%2FtfUWyGCbRTMMoJ8V0TkPPzyf8s%2Fq4gwqWSKNKfQdGPxu7fM8a3H4d6EU%2FST3v&X-Amz-Signature=305c2a46f41c443cdbbf92ea17af3a5070022610ac6078246bba832e078273a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

