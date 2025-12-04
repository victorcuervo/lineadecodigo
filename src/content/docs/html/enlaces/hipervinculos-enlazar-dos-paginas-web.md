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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQNQSCX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2FjiLGdEu%2F1gWDBM1RWQTtSXmLerwz3Atz2rnSXHeYgwIgAnDir9wHd7lWD%2F0g1uZNPmx1RrOK%2BG67I32vtWw1Wx8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3j2rJjsyRPwyVfECrcA7PhHqAdSXGbBLGA1CthxdrQ3KzzoQOxOHvBv0gcQayDfTyAUL0KDuh%2BA028VAGPvrY5lddGu4eHeMslArtJr3QGtzknI8LeUil%2FOV%2FNG%2BJfCkBL2pNS4pGSAdl%2By%2F4o4w06%2FZgNMxiN%2FHJCE%2FnfORE4vOFyOOpyfkOWutg8x5Tb3I4G5QdRmg0%2BKl5uO4lha%2FAwlMFihiRqgUFNqGBmjYe%2FCmCRbYd7GbwBj29pEXfN%2Btvh8pU67IV01eG8Oy%2BnsmSgxlZOMCFYgPG2tOmeieDn3RMkeWWAynBut5PUX0xudlZL%2B9gs9wxXB%2BARvsZ0e6mtdmfQgCpNKTWvAH7KKpwDD7wPOdK1sIRKOzLm5%2BnqdEldWFGjV8rWjPgYu3Si5qq%2B%2FXLJUcXxsXpMHqAf0q2aPYK%2BYkyXCcITK9gZeTPfKAWLLis5J9yyTro3qBBN6cADhyyMQb3BYt0LbBFcydygjU2Uxm%2BtsKOM50vj2Vxk7hVHZdrj8kYSUZWkadFdwyKCx4dUrhXSxtw%2Bo%2Fc%2B8c6DbRvy%2FswmzCALsX2x4vJORxdbPUqcZ9f5%2FbRnn9KTXx3bNhPbc9IfHd%2Fk%2FpvESmWru0PiGAAw%2FRZ1iLP57%2F1JtYHTnw9Cf%2BIzKRz3MKmVw8kGOqUBVCtf8k7%2F3CnVElShYiQOW7hOE7jItC9LRMsi5mrgOxcliGI%2BFrL799Uh1p5EmlPfQET76gNCz6LrS8F5xfUJhBciXHP2DQczpFxwAv2lRJ4ZGFHfVu3hIHuN4EgQ4viBsmHV6WnjOVwPsJVurU7xsGuw4iOh%2Fiqs5%2BlViFmSS5uxLw074TD4Q2mYgRXDz5f6%2Ficu7oalpkEaH4rsFGWATlwtsQWX&X-Amz-Signature=77d20d3ad2de5725b936625eb604382d2ba2ae9de9738fe84b57ce34a240c62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

