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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYWVF5V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dS%2B84aEkKYiFDxBxlgrNU2CphVOUBwm7oFZzPxCmmwIgJwk%2Bkqh14fjp7H8nJATCy4icLdqSHU5MqEqrEUDk4Egq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIgXHa0hmH2jj27ZbCrcA3JAqPkSeOIgX8UnK%2F9t3fIx92ypQSpLYKM9eS%2BbrT3Igu%2BwcY7YSQ6wdOdoCNxfL8wRNOdEfo0X1gGN1ggRWt1H89mVx0zfvEiYaicFdvsxqjSqnV5orpVeiVXl8Ps%2FRlqRAigZuAK0gimOSeSCWzyVRg8XMBcUpAiRP1R13b9Fm4sHD3tz7ymYA4zzmM%2Fn4YjXDhY8HYktyvbIGI%2F47CEHl0rl7yg%2Fxe9SuY4icKZhks9wBb3aPVibDKLM2OZLS%2FZMr%2FIr6TjWmR36j%2F2Nsn6uzbpC%2B3yXIeYwMnUdZ8WB2yIBj61GnssiuU6qi1Y3Eh3NERz9GXLeLsBfb1NjhmjU1Yp1jPEZhIgMa3xOZGUNr8mxcCy4JFD69M4Qy5LYnBDu9hchpWaK%2FRAFYYxA78z5hsprjT488MODT5DokP%2FrOKYjH1%2Fga1G1vQ8QjGs1fSsR6D5uyjCO2q8FPW%2BKcg3G8DOpQFRTYHCvauoWzQJJBF6ODe0t0gczwXI%2Bjx%2ByA6ncir9ftdEJnscGHVDq5EByvHIICgTG5gNdmUQO969FGLJOQB6%2BZ25pQJSV%2FvXjSxk9SSJigSK7YHCNcakDqM%2BJmh733glxlfUlaHDc1Dyof8w3EbxflfI7zCXOMIDSyskGOqUBbm3FuXbN1vmBrcJDJ2si1PIWl95TnCM7dW17reEGAQPVpEGVcEyMJG4s3yJYDYjTvY%2FW55V17Gy%2Fcp7B31AyUuh37cp7ml8k7IGmc69I1g%2FDt%2BCM5BnLI0YEBmvQA2XP8qu3UhK1c6XSQ%2FAPI2uWpg%2FaCC9t1qtlyK3T77r11K4lFMyW8q6%2B8ZPK4S%2Bwnazt6SVVKIMjOq1dBRywpUdZXr5pasJc&X-Amz-Signature=0bedb1e7b48f27b06c6fc6e8f8c1165e262b11d9fb64c2a69a4bcefdf0b0c3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

