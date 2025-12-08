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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIVZIOL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYGe180IKaXNN7AsN9U7VZ5jUmrzVQ1bI0956TEvDNAiBuZtShKF1DJyTOPPPbXnoKU%2Bb3y2gaANSekkjml473yCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMFbciHG4Pw8%2BBRpAKtwDnsxzOCl309CHFX7%2B%2F0xti69iBsMlCWFbycA3wjruDEf4f05RamREuuDwnkrFysARDta7ZuHD5kWWJHolibCSV63aHP1zTEzl9Q17PZvQpA7YmMygeRU1momJmRz%2F6x2bshgH3RKikCX5FRdQ6fF8i0HnZB0Fe1oBI1DiL3a28eEODDSerpGNw1syYKyZuDjwhmJwxzgNBEgZhWfDNq6IlZr5SoXYADVc%2BwY%2FXF2GSaTF8okRigCo2o%2FAQQ3gERgRb0k9dLtpaIIOZ%2BnVZvMLpe7oIA7YElAXnbZeg3pPkWEtFbT9I7C7cYaADTrAFw3dVMI5hrpIPm1SMT8NEpEAX3Iyp25OO0k68TvJo%2FIM95cVCAtU9x932%2FC6M1lSiB8x9rna5%2FYS5jjCa79ob%2BOJP7Zw2fw1rwKF2gjogvNXbCxKHuewd1I1U1lIg4YukqOj%2F8kDZ8TPal0PljcbxqG5yaEFCthQ17SEl5VvvuPs3V56Egpecz8Ho6yH6meKU7VnDu%2FaI99Rb0SeHy3acUHnO18gsu%2BHCY1i3vbhvhLD%2F9hEqBOZis%2FKnq8mWRaHTjjNoliEB12Ub6n6JBfvQgmAicOV8ToY%2FzIqeVjB5dDOmzQLgeceKbjQnYnN7ZswlbTcyQY6pgHPAZccjK9tTYMBhy5IiZMdCh6iUh9JCPXB3eVutcucr6dam7ej796jgeRb4WCXohdmJhiy1Rw%2BQXpuraAPblYIVnzhPzW%2FtNvVEfFNRJh2nGO%2B9woHtx0b8VP3lE3yibnwM3ugEteUtC3f%2FJYMEp%2Bb1dwp6NoI2dMZUaVpUpBjRumFpyFoqJNZ37QGGoULExiuOu56ILsX3tX1ORQGy6eG%2B%2FE79Xog&X-Amz-Signature=3b48df8cdfa8638482e97162078ac56ff84482dbc23d5bb277dc63ad566ba7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

