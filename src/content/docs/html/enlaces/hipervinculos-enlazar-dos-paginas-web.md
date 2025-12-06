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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLB2UH46%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtRz9x1XaY%2FrYXsn9rxGRbVrq0upUuTsqHL5S9GwnOjAiEAkMPMjJawwc0jYoUPkEhLQ2HRoF4aCKjUc8tWAOfdcYgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGDwdoArifi7U4iImCrcA2l2EhaNZUcZ8A9l3I3HjZja18jgfEIwA5qK5%2F9uJV1O4%2B9fccstoRMkqQGRVJrR8jzkrPVrHm6JOwqEkp1pzo4NK2j%2BjNDOTGulKJSlfvAxRZRuxy%2BYbQb5MmyBHEa6f9RMjjToAtEHbujdW6JFFrn920BNj4Lkd4XrFO1B375piVdMpgOwfSSLz8a1awRSQYVhccVfjeOTr9QiURmMS0NG6hcpEudhIpHVlE7zhrRD3bKW7Xi4pHNxrCqkXg9ACbWrKSuWdngejfksSrwix593uKpxESZGxwBn09iGSKtwfrLjfqO6w6Q8xtVPfvUA9MBx5Ae0hcG%2FsjpVJvt6LzYzwltr%2BH0%2Bv2JFQVL8nydlmDe9zZeEjQMIgcZn15%2BEhr2iyzWG%2FOddI%2BQvKzkyAZMswbgvr1vhflhLifPtz3PJaKLKYqOU3DkNZVuW2LPGoOVJu%2B57772qSbmisaPYhzyFTuGPL%2BBR%2FfQoT2PxKIQK%2BfmDnOF1LtOjMA7pxFH6gMUnLDd3bOPIffiJtknDGBHw7dsH2qV23Fij%2BBn7bwIs9QUD9BR5zF5E9inTCq5Ql1jhtUmGmIEsScXddsuLYdouA4T9JjWtQklE5R%2BZkD%2B%2B7k0jRBI1SFk7RHo%2BMPHDzskGOqUBWHHNz5%2BGEkre7NnY%2BkFSQkK%2FY1dCr7dbIr%2BztvAYi6k4wIenz7wnLsfxlkc%2BMttzEPLP7BYMtrL%2Ft7TnjlZGnM8UHQjSAV524yEYFzRND9Qd0GIMk%2F0%2Fc2iqH69hqrqP75SNXOHOJ7FsO8sLLo8RTOU4DbYoytDhIpvQZ8Pf2D1ddinj2sj2wdv3qw%2FlXDsW8NsjsK6ezYxO9l1d2SipV4uf9b1O&X-Amz-Signature=0ad0d38e2f3abc936362d822a5d1d66e7de7803ea06b3f0fc4ec9cbbba720b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

