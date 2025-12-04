---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXSWCMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGb0d0b8bPTPufWn0QQCGJ1tBYLYUp4cC0ekU21ykGRTAiEAmYBPk2EV45hapHHMP1QGP2%2B6dQxIwsmB74viliFMNwEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFSITHHc8gBDtA0PoSrcA7pT%2FM3wyGJBucwbKtKjg%2BWx8o20D4kFmcaZJBraytJm3gbBWFVoVXgtlED%2FLrW932n0T8EIkqT1tsC8VmCtJYMlhIqjQyXqOqBaHSIcHb5Y1siQAuAA5TZC4GnqQ%2FsRPRebYc%2BwWOHdG0hoG%2BqRnZiKv4JH6jbkRoVGNrp5OOmU%2FviWC0c6XqcBDo%2Fx5gRiv1T1YMsGOm%2Bcsk2LtupcHNM2zK9VnS%2FedBwkyg6h6zxVhv0dMc%2Fazw%2Bq5r7cOs9%2BqGBLUmKHL4X%2BNMX4D87tJ%2FFJyGGQ%2B9RgkBXf4m%2Fq8cGkXwt73FZVhg3sqKyMuFSGrYAcEwNo4%2FuZDfjkI6gXex43qmWd8NpkeXdalvQNKmcOK8HSw217VgxxPNEcD0KTIrAbubS3fhM7EAiG1e71Jt%2BtyNi26jCW42wrvc%2Fm9v0%2Bq97OFViFXVuGxsrx%2BV5K1x%2BW4F94wUi0WosgIf8NNKFkygSDP08eHIDlOCqZBXQZ1g8tegc7SIWzvPFxFh8ng3qX4fatutxJZXBMfmC5GuUT8jIP69wn0axGvp2ObznwVpNrQP3TCIlQgvkuNO370RHcS6LbLdOYJaL%2B0wCqlx5kWnSMcVZFemf%2Bix3%2F33W1gMJ7d%2FF5p3D7nUTXMPTTw8kGOqUBjb%2Bh3IWA5wdKmofazn4vrbpPnTzgZEplWvo%2FGbdAGAV%2Fdmah8B0CLGsZzaJ%2BAts7%2FdmWJeHmCJWpBxUtpuewpiLSDeOFBxkKtNQU90FGmXVwJWrxyg0M4THGPMQmAw5CTZXkaOXUSmh3bydD%2FiIFF6zDAeN5vXBcguivRoz%2FTNqdHFwEn1zkW8g%2FCvJYcunoDfCywQGmdpd6Ppa3bgUWEyEH3bLz&X-Amz-Signature=ca8c8736af1a004c04ed23cdc8a39b8fccc1e3788d40c5206094556faa48429c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXSWCMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGb0d0b8bPTPufWn0QQCGJ1tBYLYUp4cC0ekU21ykGRTAiEAmYBPk2EV45hapHHMP1QGP2%2B6dQxIwsmB74viliFMNwEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFSITHHc8gBDtA0PoSrcA7pT%2FM3wyGJBucwbKtKjg%2BWx8o20D4kFmcaZJBraytJm3gbBWFVoVXgtlED%2FLrW932n0T8EIkqT1tsC8VmCtJYMlhIqjQyXqOqBaHSIcHb5Y1siQAuAA5TZC4GnqQ%2FsRPRebYc%2BwWOHdG0hoG%2BqRnZiKv4JH6jbkRoVGNrp5OOmU%2FviWC0c6XqcBDo%2Fx5gRiv1T1YMsGOm%2Bcsk2LtupcHNM2zK9VnS%2FedBwkyg6h6zxVhv0dMc%2Fazw%2Bq5r7cOs9%2BqGBLUmKHL4X%2BNMX4D87tJ%2FFJyGGQ%2B9RgkBXf4m%2Fq8cGkXwt73FZVhg3sqKyMuFSGrYAcEwNo4%2FuZDfjkI6gXex43qmWd8NpkeXdalvQNKmcOK8HSw217VgxxPNEcD0KTIrAbubS3fhM7EAiG1e71Jt%2BtyNi26jCW42wrvc%2Fm9v0%2Bq97OFViFXVuGxsrx%2BV5K1x%2BW4F94wUi0WosgIf8NNKFkygSDP08eHIDlOCqZBXQZ1g8tegc7SIWzvPFxFh8ng3qX4fatutxJZXBMfmC5GuUT8jIP69wn0axGvp2ObznwVpNrQP3TCIlQgvkuNO370RHcS6LbLdOYJaL%2B0wCqlx5kWnSMcVZFemf%2Bix3%2F33W1gMJ7d%2FF5p3D7nUTXMPTTw8kGOqUBjb%2Bh3IWA5wdKmofazn4vrbpPnTzgZEplWvo%2FGbdAGAV%2Fdmah8B0CLGsZzaJ%2BAts7%2FdmWJeHmCJWpBxUtpuewpiLSDeOFBxkKtNQU90FGmXVwJWrxyg0M4THGPMQmAw5CTZXkaOXUSmh3bydD%2FiIFF6zDAeN5vXBcguivRoz%2FTNqdHFwEn1zkW8g%2FCvJYcunoDfCywQGmdpd6Ppa3bgUWEyEH3bLz&X-Amz-Signature=4148f220196a1c238b1cc2a08354a7260bd675b750a3ad3c52ceeb63691eec2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

