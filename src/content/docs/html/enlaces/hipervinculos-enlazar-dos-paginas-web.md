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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIE6YJO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIE7NcNRkueBfhQsaShOOwR3qkJS3SVONqcS0oH9QDEkDAiAScG%2FlPrUZUR2WzTH1ZA%2BKJMgc3Xed9WvMVuswx9OPYCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvZ6B3so5D%2FHEvp8CKtwDe%2F4qz9476e57yHN64d6XkWSKiyhOYpk%2Fe4PkYxwvXSWCZRFaFqvQ43C61jzwi4oKr9BmEMmDzRp0N5HTiWSTfMTFLZai9cOQGfmlrfPjMiNU88YALhLQSaNKPqoiLHqGf6%2Fujh%2F1dtpA8U1xyXkqqnU4yjKfNKBxUHvZpUQQwbkzx5sQPkRBEuoHRYqNNC6w7Benul7iHEBB9U%2FPW%2FMjp5y4NFAtUNOLtwmbcyMwTAQT808XmV8qSfwPhK54Ij4tqgZRmJlVWOz7nL1Etfae70%2BFWWKdF89ELchUXOPaFrBc%2B4VWO0LW4FlvHuh6RKUFpMdoAEBLOKp4WHKqOV3WgOha4whn1xWpNGEMSHFgJfp%2Fts4Agik1sTfo6XawZXzMAwydJqt6Lrmjjj%2BEzwvovRI71srSZOc5D8uJUPcCs%2FrcCvdrpP9qfug33dV0BxUL%2BDgh92vhXHWIZMSt4pDS4JOnb6KmqfK%2B3JWrJM6hXBiaAmngdbOKswn6gvu3qOP3sQQapwP5VFede7b1FlgWPM3ByvI15ioUIMf4vTab9NIGQgIrNsk80lNsdu5JsPa3hqteMZJyya3F9D59sUmKCFh0njotRTyizrn%2B58cHwfVOboxJ500ypow3ypIw84XFyQY6pgEFLLw%2FynCmujXJJUuZ8RfYDksEv8qrKyDAWgXDZY8f1G1TStxisIKgPOErfY4cU4j%2FEmFrsPJZzwSZ8KHeIDOpQQAhABRHNOZHYHXJv5m2sfrzwS9v48n2MQ43n7ta6Hvn5yvBYrz6wt4A58cIwL4%2F3IocdHA8CKHhtcuGVStDHwSVeXBYspaLIMly7PG2vUJEDTxfAcOQrKBtaY3qw7xOUmPnM1FZ&X-Amz-Signature=512e99f3c2232cbaeabf42808a906083b9f7d98b9d2892d0580cd80b7bb52c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

