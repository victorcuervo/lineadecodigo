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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZAA5EQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF0ODZWdpgk8Lu%2Bvymfiso66NUWAlm9tWdKbSVjUb%2BmiAiAX2rMZkdwQh9y6gNtJz0nEvvF9eGG%2FO5APv%2FvoMJwujCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM5xt8u9rLF85NgtSjKtwDZdTkH%2FiXaDYW3Ist3BqggXbnUzbHhTQ8HnQKw1ZwpA8sLnpCnw4lgjbyMQLecFlCfn7cAHjdTZBx5JCloA5B5A6uP5r1k8gMG58EXTyiBdZetfLnRZ2Z0wKTuceKpSALD8yVbA4B5lZRaULllyY1LLQjykjGFgMGdEuuSK2jd7V2w7lff1R1RaS8Rp0TDtMlduDW3891VQWlVN1WFu84zorW2EwOheDA1yowzgUPw3Ye7FHIRzHhR1POl9QcabWMz6ZL7HuCgrtqLnd%2FH2OmjCqH9oH5GqPVg7Ps8hX1ktm5c0JWi2ltl1C9%2F0LbczC0TS1rF8vsfNOy1HXk4Fh66u4%2FRxVFv3sujzDKmq6DwjcYQqvMDW2EZolbINUSOeGepS4QPPbNcCp81YOFA83HvWLh8TMK5goWXkLiwuntpZaR%2B3h2kQvWv2x%2FtkTxtm6KF0Dga1i6iB6niP4wxA8LpD9v9as2B4LxRJbyfZszPbmlKm3Q6dZ2FAoQ9%2BJLu6QydP5rqVE1qpQ33CkveZcXZ1M0AkhGCigWXbDKzIZDBqZBnNMx2AWzc25Dn7eqooEg1E%2F1pz6t%2BOvrUaT1GPCK5lbg2I8NazGy1YEsA3AmXTpuEA2GVrcaCgFQnUowpIPGyQY6pgFmXQ1nW5XKwdVhTspHsd3tK3e23cAgKHjPhdzSd7jeCXHlGopni2trC2Oy5CkQ31WI6V4lu0Zaz1XSCJc%2F8yuUgSMp46%2BXafITwP3WZHG4e4OOqykgnE%2BNNxsu7sGS44pJk3VvzHLjokro%2FGK41g0CyvQx9ryviCNY4j9lPZ0Jmt1OKXEd0xdrrsC7AH5ydgNUUyOvkrWiyRWbNJLwsqh0WVvOZfuO&X-Amz-Signature=b1cfd0b3a9c4f14e781a7985b5c42fad94fff8e351b97d17a5386d4e81fdf1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

