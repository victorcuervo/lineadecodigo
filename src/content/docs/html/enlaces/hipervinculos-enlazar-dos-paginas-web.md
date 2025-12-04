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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMOEWMD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFqDN%2BKhpRBm6OTsP94pjjPZN6NZ2m0nrb7v93K8kH2hAiEA17QSloN3gvIa3LBDPFt2Ur3Da6bJwHVpUEbS9epCpW8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJQoWfRSEcBBK8NbcCrcAxbKNxc8JzCLyt4DAtJdUk3tazdkPpgq%2FtjIfqfLwpOBu%2FV6xaW2Yo5AILqC6MrE%2Bw8dzozrPYSXgvuah1LinCASJMX4n85PmhuHPJNgtJBHJ8bXFfy%2BV7b1CADh0PRUHfl%2BgWZ3nwJo%2BQjXUGrPotXR1qUy53zg6k3ALEW%2FqxBfD8WElFjBJlPErr87bu1nlV7zkZAZPpIv6bvVvSK6OQLDya9HL9AkFOKByrVuSlcrQeWvJawex4EVy3ZIc%2BJyGoIvS8ngAlOo6l1nwDYS9maBPv1cZZHgGxEu0XDIb9xYJSHSVwTAi4ilqyrluTiQiGFoFMqBjvU3%2BIIDxb1FBUUkk76PE7YIM5jWdmzgk%2BDGJul%2BJ%2FBbcNzDz%2FwWxeAp3qNI%2B%2FR6l5JEjJnxQFMfYikpyTA3sDO4GRsvnYHffImO1yamxQlPd8%2FlzeYSWf33ejn576Jn4AzIv6K6Jm2mZzcFeYgCgM4IyVYk%2BceFbNwsOPPbNFUQSjQydHOY%2FsSx6URbANaPFMfcm0nbnCmMqGw3kh7opfWSlip48OPGJZ1TlZl42ORI1Zyf%2BauNM1GmbXmizsosi8VSrTbeuXcPqmgOzA24UTSHtpNazc%2BdsvYHCjgP1H%2BE29NbgJFOMLG1w8kGOqUB6QlXjx6VpYV7HGYhgadZtfGZHEQjdJhbxRH%2BqkcQN1bNfNFblqQBoeD5qKdwXdPNaBdbMp7Qhl7R0jnIU4DpuCl1lRZ6xYd99OXsbLRwkdtAe%2BquLIGLBq8sY5LTpQwFOWavrD%2BdYujnekSFfx6k76lR8xRFfJOXbA0ABzSsJjcXa8BGC5QxmabylicNlZrbIRtrOTJx6nBorglI3Mp%2FaCOPvW0I&X-Amz-Signature=f37728528fab29ec7730dd87954788ab6c158202fab399e4eedfcd0eed622d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

