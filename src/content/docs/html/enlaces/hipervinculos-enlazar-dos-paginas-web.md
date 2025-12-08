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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTCSN6I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSUxmjbNTh%2F2juxzRr4UT7CpOGbCRSS8RmFa69ab1MQIgLQx3s8EAuUh2Z1MYpaH6lSVwRV5N3rSco04Ms1I5ckoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjWPUlTixikBLLsWSrcA2FrEeSPRFDhYn0duv4jV%2FgeJ2ALw5xjs8HQSC4sfL25a3s0v%2F2UC7UOuAPAKpfRf4O%2BrRt5tRVDUvSvu0P5Ii8UjpZi9j1WslaUDjZNXxDwthnvP%2B7G%2Fy6d45awRt3Bhh0JnabsVR0ad1UZmnfCiEqx9spgu7Z4rz6efmCJ1727QONgSmVLpttHopX3wegrrJfR%2BdXlSdnHx5sIGe%2FkZBzwOfmcr06h29248yFjGrOCqihNhvrg24C4H%2BYnYO%2BrWDFHmgJ5YSHi8CQ6tmYyKZOaVVDCWRtqD8MGibTI7gw9noMswSDWcl91gLT5Tk2%2FSRM2UXfrkivRsSt11yHTyGlEUuZLB1NYZrDZnNcYmxdsRiKdr6vi6%2BaraIzDptWrN4budROlw%2FarmUrabixU9TZyjxbCJNwD9sIZ0y4JyuSVzEoS2TKSmKe2G8M9id6Qwt%2FDfvkJ6F1zzd8rcvqgsGaUty0mKvrNsDJFOzvPKWT0Pay%2BijVDcagMlupxK1KpoUNAkojUV2ZoaN5pUrzbBksZV%2FxTR7eoo8IxZmAOnzX8gbkOzev4wJPhH94%2BswqpuOuPZC9dqignLuGkPux8P0jOXQqw9mmepx94ibP46C7w%2BVXJiB616iIJ3eArMMjz2skGOqUBXsorNxJa4ro9zdJqjVi0JQAW%2FHXChXUsj2UnSslga4DT69bIYDEbLUfxYbf13mgM42ebMfb060SZlKr1E%2BX7jdfJ0Kg5%2BU6yBhdkXBfwfp0UiFSlSO%2FRzUXM6xBwCzC6CdKTThmqtrOFZcaDL8vaciDxsket2Nc0pHhp7GViENWc4XD9GwG%2BGJh4Rj93i9MOZKZpRHVSaAW9Ai5e4yVoGfg%2Fr0nt&X-Amz-Signature=4b2f588d37c7f190fd4bbfb97963a168535d9cd214cc7bca492325843643b560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

