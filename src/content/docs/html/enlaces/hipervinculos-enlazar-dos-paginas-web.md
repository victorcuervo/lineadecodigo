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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ27NEOT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCarYSA%2BrIcC7quuiMTScbvezfpsAxQief8ZgAv2f%2F6lgIhALT6Qyha6gqH20cX3RTq6QDRORRAn8syrk1VkFni1VWOKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1g3L2jGwBuutuWp0q3AMMmOQdZiK67yCWAhUB8NS6oSmKwexr%2FM8CojuFz6c04Ax1qpUVB%2FJeUBbW4M3JRFEU0dWSkkEWptbITurC1TrnNimRD4sT5deRh0j3xUTTYPhKsMAYNv9Om4w8OPpGt7k3W2v1zec1IaMxVdXHdYnxIDoFc2fQjgLKIUITfXgUT%2Bdh7k%2BWAoZ5lQwVena6Qy%2Bdry4oLK0QxPr8gFvzeRfOJfulH%2BPst4K2Ovd8h%2FFaXIGaapikoMZL4Szqru7%2BR0zAFZLt%2FbFT8kkWKv9quT8h6vCR5s9QDfjBdzM4T9djbrotG8Nf83FgJYuu%2Bf4B0UDUwK17w%2B4f8%2BkiqM26lpkzZm5QIIr12Zd3xwSbqIHtjvejegI0S33M21VI%2Fx76YEZJ7GGN4ph7V4qtJD9xjHB0JjL9c%2FkT4ztBdFfSWp1CbjSqpXfIXck8yhNRRBTeYpVICF%2B4jXxvQ5drHWSBUTQlVbjxMelovFoU9q9nMUl8rxGsl3hZjbI9g%2F412%2BuT95TaYtBnj51RD2c4kyOgvGUAowI2pNcsjEydHKZpUdF%2B5vUoPxYgW0WkUmWRIEnMBwLDToU7lc00ZIk1Y%2BSlprxIqIUaf90J1uwYi12glOzSNahVzNejokB4DpiUnjCAodTJBjqkAYDfJhlvvH2OdwYuAmKvd3HFEJmj0PUyCcCtQi4zNCIIhMJA4LxHdyDaVh7CnyFqFWO8BDz7%2BDeTVwRJgDGipEOfh5NEP8fIucFdBDrEOGZPuRJeSMmiB%2BZcA8Wejbb6kg8Zy5nYxTHk%2Bfa28cQgtFFRNn6UCI01%2FSqq1YGXaYUgDrJyXI69oL1%2FwswJ3UKOZxosBKtUOG2OEbvneEJLiBu6YSRM&X-Amz-Signature=28dad3de46ce37052e7f5dffd5213771a4d876276f1e08577690443101346761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

