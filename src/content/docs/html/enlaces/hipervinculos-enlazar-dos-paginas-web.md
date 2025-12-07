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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSO2WXOJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQwm5l4fe8S2%2BrsSw6cG4jyjudvbaAKL3av8BVAQnkAiBla3OQAKboo0VoaCyE3GjzHrws8lb4Q3xS1vKdy%2BOlKiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Z%2BUoDsOcOzta2CcKtwDCvKXFEtgFRUFxbszFdUfiAyzJwNhgIXgQFClTk0O6gfwoVnISr%2BpwUq6L21hIHvaq7qN7A9ScuFdyHVfvQUB%2B2hTYmMlFdcKtnkXlpNax%2FkoHJbT4SRj1wgwwZ0ONRt21OTP9Mg9vAo%2F9n9%2FWgQFf9ecCTp5tVDwEvTL0Bf9ED8AuDk8AAB9EvvS76g9Yf3ZrAHeAsLBaIUkXIQvOUhXquzHhUuVixMrPkVgr6M2xkVWaO3voAYrggk8Arkh%2FyxSkGbgSxIg6RuYjfz5gd7qsAq5BqCv4sBjOhnPbA2PKQSWWpACQL%2FQkAtjWAEuWS%2Fmj0hiwoPupQjy73OlcpGFvEQM%2F0aXsWqIF0X0WSrfoQJ9kDWhSmlmrZRu4%2B100tEE7eId27nIYQdiavjsbkNNzqK9mC6S6w6poANTf0Qem7QKygWsr0mV%2B2ry3OE%2Ff3IMxSfiBhtaKiDWx36bOrDVjggK%2BIrXEXl%2FgevwnlwFGAzQaMvwAXoVlpdRDzZE%2FzGJDpfDIR5ZRwTfTN%2Bt5Y8GEwfAFcyNavpw4sTc%2Beo8EJcqsPvuPv9tCgz%2BJmIbhsgdK%2FWFedu4ro2E0sa40hUrJth4vFqKsQHTN0CqHUNd6ixPuIGwJ4I96h2Jezowu6HUyQY6pgFuCLKsjBM4skoWY9ql0vRStzfypjLvPdlQQzFJvXUVcc77o7KqZJABaVrBxEe%2FL%2BkwDUfm8gmZ1gICEYnX3OMk6s9x3HiWpjyE%2BGaLK7QgjmaxRHefeoHjtRTtcV6CN54oLCSuT%2BDFuahpNcIhSaXN1lqHHOBTpVfRd5wivudJLK0bIlMxTtK9K6BZdt0HDgxbchmcgUqAc1NQ7cBo4Pt8KM4wGy2N&X-Amz-Signature=5df2757cc4f83231cba082bec37f96017ef66d78eded6c2ced4cd0ba8be18076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

