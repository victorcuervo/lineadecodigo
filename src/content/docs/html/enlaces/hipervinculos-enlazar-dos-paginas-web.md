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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7MU5TN3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOHfJVFE5c8t55oafq5e2FSIR6i2lNqeYwk6736dYLHAiB7tn8XIUCAR7r3y8RKYzN4QYZ5z%2F83qefikcXzAsZRmCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMCd1mj62IgzqNBtCWKtwDSscANiXAUNvqAXZQocfkEJ1aKl4BfrYp5X9rLlzhwuiCnmrhQB3rk0Rh6CFzBJ9rh4LbB2jDl1vLxUVHj2RQ4und6vrvhaVCJl6MAste7BEFN7M4EjHf0YWWPgMoZaLJfQVF%2BdeYm8jtBsM2G4HbOP7FOcT1xO3s79cxYOtP9Fb1F5yP2rhY0OSbmRWCR0QEVhcLPpih%2BVckK2SzHP5hFA6hHuzPgB7WZ0%2BkBdSDnkvhcNVpg24bL5AhkrMC1HXd4oGhEZ4arN0jquqS%2B3plW%2BAdh%2BcCdVT01nFKDTNrFBYYcAioFCDFsyrVTjfAp67%2FVZFi7qptbdz3ndu0qvuU4fIlAUnaObHx2JBnkK1GUFJhoaW7epMunxEqsQQYFgDA%2Fs685Pop2aofMLxXrbJtIg2jl4bi37Gdj%2BJWXvaBSHxmenxZUE0vnBcg7AKzRdebxiECgBfxG5rAx7Ph6OzuwqsG7Qm8qSiS6%2BheK0X9rV4FSu1wx7Mw9Z%2BlTWH6bVZr0aM7Zvo7skiJTRPIXrGQmnS00Ial%2BcQJ%2B3WPgtfY1FeUt16PdlDTqPLks23zEQTwcCHJtnxsz7Ui6qHtPrYBfGe4wvCPZ2uPNz6S2e4KmcgLcDCP%2Bl1mcyzX0FUw8uvPyQY6pgGeUAd6QbTI6iKbU7uDL4aoiBUilklOBWfUcrpG%2FY59W8HXXzFJTHGmED0Ua6Sx8P%2BTBekdc3qnULfKBdZTC7IQxLvrbd5qPsS4aVxa1WHi9zADe6ol5wn3T4r%2B3ubEHTTnTqqZ82qcb%2FO%2FAROfCXVvgGi71YsbE5zyAG7kRqsfbPavCRLNtdllvCNOhLwk14JZ%2BjL%2BDqsN%2FlSr6tXrLe8tlyf7klRf&X-Amz-Signature=25922cb8b9a68c1fc805a831e2342cddb48acc4a5c39b019ec8ee2aaa3268281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

