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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2EPKVV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIE%2FRSvsmbTs%2F0pkxv7o69THWmcgcvUD86O5A9GF48mN%2FAiEAqmZTjSOzc5nYijAhvFV53gYtpQLvSJwGi631uLQr4WEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGGVBrxWLv19CJbnHircA3y16WteL%2F6ZuyzWak%2BaQjN3Udyc0078dcMgS8BBVBk5G7xkGZbqKmmlyZaOhSslIILp%2BqpoHEadhgsmUm9m61kU5SFvD4KWO%2BFx12aBV5aoeUqwQYQQ81XvJJSGh%2F%2BF0cX99Y7lzG8kzjZwQq7c%2FDb3YoqMzAd%2FJoXoU2FsQKFu%2FXC8uWMNhqldOJwiW3GH01glOdznRDBKFvlXxNqDMnPkrc%2B%2B0J8LpEvq56NWNmLFXa7Um973Qng3XibIlTFDGC3TYAD9wJr1ypL2tkgeoqUneA3zFNfuiJzDsyGiZVxwqB2AEtH1rtwCPVqezh1qFZHS7tJcKpTqXbF0X2N%2Fms4K6Ty5Hgd0m9iObJRWlX6oyVIG5h21fma%2FZqdFVQY4ZZXIX5egAogkn8wVuE8D%2ByUORlMnSYbbdMQS11sDzPQC%2BEe%2F3CoujsUlEMEym2O34BLTrW%2FamH6eBjYlDAcB6y3aHXQ85SOY7rxBp%2FNRPvVhK2qoO2%2FXM6Nb59hoXMdVe%2FJdrARdWIFSYNJKLZHd6YGeY9ua%2Bf2RozFA8fl8%2BYDkSOYu4NZ7FJdDeE0ckQaPx7rhPY0GtFnFVzU1ltdbvAQM1MOxJY5jsAkN01BWNYQHS7x9lRTTkjC8CtGEMMX3wskGOqUBkFR3sKVSceM9FAhvLS3OLBluooZ%2F%2FwjNXgGdGwz7luly%2BNSwGVoSeCDUFDdn8a2PlwB8Att39BGTLeRI4oE3W87VNwuZtTyK7A27bIJR%2FYMVdY632vsA8KWyys9%2BncbT0g3NdlOG%2FwCSXoDKP2b40SOmnctJuuuVQTlMHJ6d%2BMV6G6%2BGc7K4N%2FtVEeMF5Uw5kHSvoMItrFbpWFjH8Vwzuz2%2FNCWD&X-Amz-Signature=1592398d080b5b0212b840dec9f1959be5982b59b8acc218aa0a35aeacbf40da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

