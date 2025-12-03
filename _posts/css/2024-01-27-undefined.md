---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAVGZGE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAjhiXqNx07IydfAAA7TXw%2BKewlnfKDTPqCzkrKq%2BOjDAiBKZCMtzR75lmT2Nxl3xgohW%2BO5OChPn5S9pbJs6l1tvyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMieBEfdxvnJcMdCdMKtwDBWVhyn7GXcLt1%2BNPEXLbqDPfvjK%2BZ2GZLFH2kr6GV3XSalL8wvZEjzctVR3fay7QBMYa2Xi4fhSChJWo9LDQIeNUNdJxFEbPhBiXn%2FbBlewIwZhhmjyeGJgpCrepDDTBw7%2BAgFS0nxhvEhz0oc2xWjLsvCxRGAY0ZgLPTVxNSEIF4RIXnlegjnU%2Fw4zHcD4hxPLVm%2BXrGA0Iija8bJPJhA211Dlp5%2Bw2JJfjxaMVXA%2FRrjem99jMkA9MrUrZY8uwzT74ckTvIpnj0VPNbb8D0FohR9nzG86nz4kebRObN2aewpoT7lFBbLxEXj%2FqfN7q9Yws1QzakbIRyImbXCFdbb1txDhgFKmmGt%2Fjz3Ij23tzogmETBw%2Bf%2FAnfyBYK2ORxFj%2B3PGvpOkHcOU1S1rLWUBVGxGGyVsnZ3bJNos446NCmGTbWYEpCbZ%2FaxaC2c1IWC2fULoQOEqu7rhIZZEx6jjdSPoEAonFjFfGKCSE1ekuTeHAo0im9c89M3YTU0FbW9duT9k%2FSbck1rQXNm2aVm3zwchwzMHDLVE87GTW%2BDT298n%2Bn5qQVFlo%2F0%2BYhgKi8JjdKj8BNLGrWFSnsUu5g7GrsL1sjIVddogrYBfTlo4bS2r9tVZ%2BkCMjalQwmpq%2FyQY6pgG4Eecoz0tOYsHtGyY9weyiHgBGswj3EBnj4DR6MTZSxmP76S5Zpo6UnQEiNjgD1VF56kjEgYW2%2FQlea98vtDktR5hTwKb4UJETRpWynfg4YrkM%2BgGDh5uJpotDlDNKDf9TprupzEEzEUQgkiG3Vr%2FjOTaPC9aKvv%2Fry6zEeUEZL34jqBWlTFbtuqmB6A0S8%2Fqj1SQMyKI0v8B8Ts5UbWjr2ezusan1&X-Amz-Signature=adf8ee58e92197be4adc5e9551046a576962ce6e2207ff02f28f6a6d44c6fa83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBAVGZGE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAjhiXqNx07IydfAAA7TXw%2BKewlnfKDTPqCzkrKq%2BOjDAiBKZCMtzR75lmT2Nxl3xgohW%2BO5OChPn5S9pbJs6l1tvyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMieBEfdxvnJcMdCdMKtwDBWVhyn7GXcLt1%2BNPEXLbqDPfvjK%2BZ2GZLFH2kr6GV3XSalL8wvZEjzctVR3fay7QBMYa2Xi4fhSChJWo9LDQIeNUNdJxFEbPhBiXn%2FbBlewIwZhhmjyeGJgpCrepDDTBw7%2BAgFS0nxhvEhz0oc2xWjLsvCxRGAY0ZgLPTVxNSEIF4RIXnlegjnU%2Fw4zHcD4hxPLVm%2BXrGA0Iija8bJPJhA211Dlp5%2Bw2JJfjxaMVXA%2FRrjem99jMkA9MrUrZY8uwzT74ckTvIpnj0VPNbb8D0FohR9nzG86nz4kebRObN2aewpoT7lFBbLxEXj%2FqfN7q9Yws1QzakbIRyImbXCFdbb1txDhgFKmmGt%2Fjz3Ij23tzogmETBw%2Bf%2FAnfyBYK2ORxFj%2B3PGvpOkHcOU1S1rLWUBVGxGGyVsnZ3bJNos446NCmGTbWYEpCbZ%2FaxaC2c1IWC2fULoQOEqu7rhIZZEx6jjdSPoEAonFjFfGKCSE1ekuTeHAo0im9c89M3YTU0FbW9duT9k%2FSbck1rQXNm2aVm3zwchwzMHDLVE87GTW%2BDT298n%2Bn5qQVFlo%2F0%2BYhgKi8JjdKj8BNLGrWFSnsUu5g7GrsL1sjIVddogrYBfTlo4bS2r9tVZ%2BkCMjalQwmpq%2FyQY6pgG4Eecoz0tOYsHtGyY9weyiHgBGswj3EBnj4DR6MTZSxmP76S5Zpo6UnQEiNjgD1VF56kjEgYW2%2FQlea98vtDktR5hTwKb4UJETRpWynfg4YrkM%2BgGDh5uJpotDlDNKDf9TprupzEEzEUQgkiG3Vr%2FjOTaPC9aKvv%2Fry6zEeUEZL34jqBWlTFbtuqmB6A0S8%2Fqj1SQMyKI0v8B8Ts5UbWjr2ezusan1&X-Amz-Signature=984e432ccf9ee6e66b123347a6a43b16e014da6f3ed686357f2580e56f5c028a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

