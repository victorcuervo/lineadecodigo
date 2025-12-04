---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFN5U3F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCDFmJ6UURDGPztdzLp5nk7a%2FXWt1h1B6o9vY18S0o%2FYgIhAI2SiXp3%2FgDeu3W6neEBWHJ0RXWVOqr3JpAZv2M6E2wKKv8DCEEQABoMNjM3NDIzMTgzODA1IgwN4WpKpUymA%2BRxEpMq3ANMXmZrfuqrelM7tTlz5Lu2cXcRNtlBehrbUK9iYdgL%2BNbvZWxbVrWi4FWUXyj5PDKxhohShWWvgzcsCIrTMsPJAfE6VFUOpfnkEc6VgijWbIqMktNO7FBQLJTacEx50a4M2hlj9IXEXUJ8%2F3MY4glHrQ3Fbb%2FlicUW1j99%2FpXtJQ0M%2BXzFPWBbX%2FPBseEHtIGw6sQ2t3L7DX2KlmmPIn1iPMitrMNoZ2BGnDp%2B70NnZoKDi6HwqqMfopdAHP2ICwK3H%2FlfV2vr28UaBjGeKaXW9QyoQAYeXTCfu5v%2Bbbj0%2B6ekY5HfNubXp%2BeLZdnghxmUy5N%2FzMqW5IkYXma6ZHHd3BvpHKa3g7q%2FU9uywHSV9EbhgtYcPTpUVf4Q%2FYPXtG4JsChFEf%2BGLwEAAAwGSatL5BilWUkQXMqOum9fopbGS9%2Fjk2HAP6kDQo4VIgqFqOgKjZGfbstFKia61YpS3%2FIJxfMQCNJEOM5QXvF6MmBr2RNPLy4JKd7Th6JsIfgdtmMwa4KFUKLZPyUINfh6uIdOlO1iNZS6lyVqLp%2BCIi6wXGA5UR6mCY6tr1p6VRiIa8OVoOVEU2BIOVHnGv9%2FO0nSxFSID6Q20V1guAwV9ANviXgAxKSNnjPHXDHSjzCZhcXJBjqkATFZXPlmQwjFJX7skR3VLYnOsZFF9S7PA7gQH1aZaTA2hrnzQrEat82W4wvDYCcGjxuUedhdiUldRkbz0BKmIg4zrdBYdfh3s0Il1k4Nom9mEhUDY8zDN64BxqY3Iw0xFiDHZZXOAAtF227IMQDkWahmOwv02pduJvWDwAUvVZx51Zz8qlj2IS97obAR11sKth0iMTPCLRbLRt%2BSwPDkNEmx9SCH&X-Amz-Signature=8cb30b44dd8c0f1e7d2957eb378f1c022fa10cd62bbc7b2b94a685c6b63acf59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFN5U3F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCDFmJ6UURDGPztdzLp5nk7a%2FXWt1h1B6o9vY18S0o%2FYgIhAI2SiXp3%2FgDeu3W6neEBWHJ0RXWVOqr3JpAZv2M6E2wKKv8DCEEQABoMNjM3NDIzMTgzODA1IgwN4WpKpUymA%2BRxEpMq3ANMXmZrfuqrelM7tTlz5Lu2cXcRNtlBehrbUK9iYdgL%2BNbvZWxbVrWi4FWUXyj5PDKxhohShWWvgzcsCIrTMsPJAfE6VFUOpfnkEc6VgijWbIqMktNO7FBQLJTacEx50a4M2hlj9IXEXUJ8%2F3MY4glHrQ3Fbb%2FlicUW1j99%2FpXtJQ0M%2BXzFPWBbX%2FPBseEHtIGw6sQ2t3L7DX2KlmmPIn1iPMitrMNoZ2BGnDp%2B70NnZoKDi6HwqqMfopdAHP2ICwK3H%2FlfV2vr28UaBjGeKaXW9QyoQAYeXTCfu5v%2Bbbj0%2B6ekY5HfNubXp%2BeLZdnghxmUy5N%2FzMqW5IkYXma6ZHHd3BvpHKa3g7q%2FU9uywHSV9EbhgtYcPTpUVf4Q%2FYPXtG4JsChFEf%2BGLwEAAAwGSatL5BilWUkQXMqOum9fopbGS9%2Fjk2HAP6kDQo4VIgqFqOgKjZGfbstFKia61YpS3%2FIJxfMQCNJEOM5QXvF6MmBr2RNPLy4JKd7Th6JsIfgdtmMwa4KFUKLZPyUINfh6uIdOlO1iNZS6lyVqLp%2BCIi6wXGA5UR6mCY6tr1p6VRiIa8OVoOVEU2BIOVHnGv9%2FO0nSxFSID6Q20V1guAwV9ANviXgAxKSNnjPHXDHSjzCZhcXJBjqkATFZXPlmQwjFJX7skR3VLYnOsZFF9S7PA7gQH1aZaTA2hrnzQrEat82W4wvDYCcGjxuUedhdiUldRkbz0BKmIg4zrdBYdfh3s0Il1k4Nom9mEhUDY8zDN64BxqY3Iw0xFiDHZZXOAAtF227IMQDkWahmOwv02pduJvWDwAUvVZx51Zz8qlj2IS97obAR11sKth0iMTPCLRbLRt%2BSwPDkNEmx9SCH&X-Amz-Signature=07556268c6091612eeb4df41f3570a3c688af27afc1ba0e7c69934ec20b96d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

