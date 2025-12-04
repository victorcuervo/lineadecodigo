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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7Z3KDH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDHGzUQkEVTbUX4ufkQo7VkPPO%2FJowmEr8dbxDUaRfYoAiEApYClR6lE8gHcwmJ%2Bf%2B7HgskQsE6g0JMTvudTPdh8xDwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIaKFtR33Zb7KoMTWyrcA2QPwITMiJK5FqBwt%2BCQmcsA9OY%2FNhSGHaWRyvRD1B7wycK%2F54Wn200N34dbN1lmMBOM0zI9ga66rO8kL2MdV%2F7CvoEpRPqFPFlLBh8MT6rQyCSwENX10pM992sGJlu3DBYaU0hN8jHx1aXERDWrEbhiuG8k1SAkaEpRN%2BHpEzQ1WPOyaIaNz0l3coyWMWCIbw5lGI9zsEuTYznmFT9qLjKbtv6jk26%2F1kP5tHjcHwCvEmhWuLlKgYqpX99dT2ABI1hwhGRC7QLcO%2BioMujTChAmFSQoyOlDC%2BMSXUjSqVdg%2FEU1f4RDK%2BjdD4pBCaNn2ju9eGBH1YTdkmRoLS5ESzO0WINFpxqCvvMLTcGU50fpnFzJ%2FnXDewyqTGkOYH7tc2Pl1zeBw%2FKlXPhFplJAnzSjJla%2BF%2FMpg4xGTVjlQRyPNYM5qgUCiMKI7TVLflFIkVkoumYRPRbecXvHlyhZvAzUrzXcRWnyCfQq1EojvuGBVZAZ38NHiFncWcHa3oxK6OTWfU7uhrigspSST%2FISrJ%2B6XyGKtSU5x%2BI00Bs6fY6oeqRWBPVuWRGeMWEONVlJ33Yx8ULwS1aknYwgs%2BaMQZtFvlPn6gFKW7xAGCnNKen264l%2BpJONoMGiLkXUMMGVw8kGOqUB1cd%2ByJx7ADKk7eqZaynEc2Aq9h8AcqrXhaLzh8J8gKTFPCHp0EGTCpN%2BK%2FAYfOuzTE4jlaUknm7aUYSQWNmCcWUVxJBxhg9RkyMPz2yUW03iQ%2BU6ajIQK5%2BJTD9uJLV26bapX24cc0rWvSfUKNhI5tSJXub7cvztZiRNxQQ3vdsQyMh3ep2EFcvW2c%2F1vSTsGrsCyOeCjGfIpEJvc2uErDsZ25%2Fp&X-Amz-Signature=5e75e43bf58fc57ab1425fe653d53ec6e91d302dfcfddcf3b8a881e8db15ad66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

