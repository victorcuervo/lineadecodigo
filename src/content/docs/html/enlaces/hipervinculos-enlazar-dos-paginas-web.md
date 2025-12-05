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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCQ2BIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJCT9TcudHNiXSySd3vAERqaYkRoMF9%2BCyO2UlC%2FJ4JQIhAIvvX0fU6E%2B9tD8XLHuM87b4iVeZ7pOyldex1%2FBN2H1sKv8DCE8QABoMNjM3NDIzMTgzODA1Igzci3uFGUujD%2FZq1Rwq3AP4u1JVazSmI7j5n%2FRnheeIbnTynQI3cZNu8%2BcuJxGXnbQn9Nm1B1gq9i8enIeFIJf8y6DddK9H9y3CMiE1tLhw2qlNXjLnVaAtW%2BxIbZX%2Fy49uuf2KChrlTLqexAuGRE%2F0Z7cJ%2Bwugiy18EUdrecvYtOVLUZtyL9WXNYCP7XSU5lafR1eRISKt41x66s6jjXhvpxQR%2B6lVpb9ToedFXGz2qSXJLSdKn4%2B95dU7vxhx81nVWQ3G3la%2BC1Dlzs9YA7sM6eW1smaDVebhacR2DZh9QQmjn%2F6ko4m7gW1zuOBDiUnJ1u0huN7zwnpnO0kTp1HGW74Gqp6JMXTBtj7k5tkgdCcZEcxYhMN2R2P9Ote9qgzzZ5W43514mDFo7U2IJfLyewkUMEN7dwsi4LCfJk4nmnu8AR4umr0mdfjCiCgCEZlfCZKtq9iVESXU8b6ORz3BINDXSj0h35XGNL5lPJX4BgtETgQIh0T3Xyt5u5UvwbDgfAsc6kY9tGxObUZvSNbLfnDeDNhG7g6yAVjoMtLYBrFQIZIJ%2F3rnmTr1oUlYJpp61BwRKQOkwlVAsb1HSdfV87SOMKshRdHZqV1EmIL%2FdBChuY9au%2FKkvrG0bNBHUOEwRknGZscsWSMQADD3i8jJBjqkAX4otKqcHSDSIYM6zCHUKRtJ5LFid4G2QxXpUM7AKw%2B1S1Uw9oh2%2Frr1uLmwosNLPMSs5SMde21hvPSY2P9%2B9q%2Fgauhc%2BWq35%2BLAMFYkyRXKPzALdfOPQsdN0jPK79zoNrKi8fUfpBLwYz9i6B%2F%2BflixwWwahQ8KEPupPeb4kMl8T4YGEHer1KPBXI7Kgg4kAksxGyxYvVBQ%2B9OkHoYeQl%2B%2ByTqO&X-Amz-Signature=b91324a5a60544841bf3174b4b29a9c7d7753d34e6a760052408c0a0f8e95b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

