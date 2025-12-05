---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LIBA3F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRWZAcEczcFSIOK2gOpktYvsGXWtDWT39bPlGBbRAoUAiA9ehuIH5v13WgEuVu5E1uIUYAq90TpHHn6MDolt%2FACcyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMHmz%2FNwcdzf8rC7aRKtwDZ0NH6guZRnw8Ud0tYD8an3wP62uu%2B2VcylOcgYJS75Wu8CfFFz5zpgWBFr6UHUMNuiEG9RqWgx1MBy8NHWaFr2MXQeYwf6N2sw1xhDg5LSXHnJ4oqw239DaY97NCYObAQVahpvVaBG%2Bn6SWTJE9EFkm%2BfarqEOwnX%2FVRqhcj9E0TDGsI8h2xX6w7WEoZgntqE85Mx75ejpl3aBG%2ByI%2F3prBTfLvfi3noxAb4ER9rLBBJzsmyCIbJUToMPnVZiXkL2PB4FFeQ%2BE1rKe3fMyQH1AcaEDdZ1qDs64u3xzM6c6HeH54aZf1tgJZtFdUacTwGHQRVxgFIPo%2BPnf8EZkxtpiyrs6dQ8%2F8wxT5UAx5VWVDwIPMaWVQjTlk06ax%2BvNjChkgaRhnqbdJLHc3mZ3Pi6gG4PZL2wg7z5pzT06kXJq9EItl6Z4UpYENoMEq92f2P6oqUEpTCKWFyqm4dd7ukvTf91FmvAIhiHqs94%2FI62fhDPEfPWdhricTrSen5jdaaUMgxzGvempCYpuguVzdY6%2B%2F0fOuvblhxIkqQVb7rdz0d%2FTCXjL1SrNMmKbzj0wRgDeS5%2B%2B84lONB29EwLCmySMritqr88pjWZOOfENwynvoRas6Z1cIHeA1VOVcwwebLyQY6pgHPPcZA0FSPoo94kBXvHZp4dnghNya2TFtvx%2Fpf4USbs0dnXb8RiEMVsqCI4UH8Ly682grh4I%2BmgpWI4IlW2BP%2FBOOEMvJke%2FCkzwL2mDyjlp0WMgCvPgnPAkylfIhctQVwovcpCtAivhEXJZo%2FAXC5atS8JWTOjuR8TrJlpg2poiN1Q09sIRe%2Fsdd1ts75OyfLjn9jIqjnwXGfR8z6OQPfFFi0nJyq&X-Amz-Signature=dd1402dc170116893608b656c14740917bd1c4e335f1ea5219131c482953d7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LIBA3F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRWZAcEczcFSIOK2gOpktYvsGXWtDWT39bPlGBbRAoUAiA9ehuIH5v13WgEuVu5E1uIUYAq90TpHHn6MDolt%2FACcyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMHmz%2FNwcdzf8rC7aRKtwDZ0NH6guZRnw8Ud0tYD8an3wP62uu%2B2VcylOcgYJS75Wu8CfFFz5zpgWBFr6UHUMNuiEG9RqWgx1MBy8NHWaFr2MXQeYwf6N2sw1xhDg5LSXHnJ4oqw239DaY97NCYObAQVahpvVaBG%2Bn6SWTJE9EFkm%2BfarqEOwnX%2FVRqhcj9E0TDGsI8h2xX6w7WEoZgntqE85Mx75ejpl3aBG%2ByI%2F3prBTfLvfi3noxAb4ER9rLBBJzsmyCIbJUToMPnVZiXkL2PB4FFeQ%2BE1rKe3fMyQH1AcaEDdZ1qDs64u3xzM6c6HeH54aZf1tgJZtFdUacTwGHQRVxgFIPo%2BPnf8EZkxtpiyrs6dQ8%2F8wxT5UAx5VWVDwIPMaWVQjTlk06ax%2BvNjChkgaRhnqbdJLHc3mZ3Pi6gG4PZL2wg7z5pzT06kXJq9EItl6Z4UpYENoMEq92f2P6oqUEpTCKWFyqm4dd7ukvTf91FmvAIhiHqs94%2FI62fhDPEfPWdhricTrSen5jdaaUMgxzGvempCYpuguVzdY6%2B%2F0fOuvblhxIkqQVb7rdz0d%2FTCXjL1SrNMmKbzj0wRgDeS5%2B%2B84lONB29EwLCmySMritqr88pjWZOOfENwynvoRas6Z1cIHeA1VOVcwwebLyQY6pgHPPcZA0FSPoo94kBXvHZp4dnghNya2TFtvx%2Fpf4USbs0dnXb8RiEMVsqCI4UH8Ly682grh4I%2BmgpWI4IlW2BP%2FBOOEMvJke%2FCkzwL2mDyjlp0WMgCvPgnPAkylfIhctQVwovcpCtAivhEXJZo%2FAXC5atS8JWTOjuR8TrJlpg2poiN1Q09sIRe%2Fsdd1ts75OyfLjn9jIqjnwXGfR8z6OQPfFFi0nJyq&X-Amz-Signature=09521e8633dd510e890aec25257aee45abf5dcc3ee1214fe81c6348823d05b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

