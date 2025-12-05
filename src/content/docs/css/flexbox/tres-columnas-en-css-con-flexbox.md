---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUN3KG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNITdeAEvLde%2BMhgDE%2FOPJZjfoLwljYEPsK7tnuAyCjAIhAMzzBh5pfYcoGNjDzb0HDEsTfff1YLC8ItfAYlPODDNzKv8DCE8QABoMNjM3NDIzMTgzODA1Igyo4PgqWAjqLnx%2BpUUq3APuQksb5oCFDbl05WAiQl5037c6ZGWSvd2QaAj0iOIN835YL06pVeYjbnaTnQ%2FCuEePK6pBdlus%2BlmxmpHa1kgvk2p8l9EhU%2FflxBMqB4Y3NqzMO%2BbnKSIyHGwURUh6Rl3HFTRpsQuasrZGiNGm9xUgMmO0fBVraFXQ%2FKVQccjxs%2F1gWjKSq%2BsgjpjZMFcpqDzRCld1NxSRPLvKvFXeFRPhAWf6%2B7P2Pl%2BSL%2FQSji4dGSikeEa8PzKOJaCL5%2BSyES%2BXY0%2B4swFEXB30SmBvwkkDgKmGoiB9uGpRf3ry4vtlf9URlHNVb9pP0Ds5azS%2FWhoA4W3UzANVNSgZRbAxd1bi8fn9oKmdoVgffutcmhKfVCrdfJJdF2LnhU7FVV2u%2BvxB4nZGGimYMQfQ00QYQr6%2F6U3Pu1ZSSJHx3x%2B76JqJFVr3J3WIq8%2FofpUEIQ9y%2BvvGiBXT%2FRPMvgbhpdKGB533SXXbUh0Ry1QoYNZdod3F%2FaitQSB9SorPYVbU2wwzbcB6e7fmtPnmfgdeZyCgS52iFj9%2BW5BLvdpDM7%2BHNCE%2BmwYdVTxlLnGna2qSlOlq0ENN3hNH2pU5GulP2YkN6b8KeoPlG9qOJGxrnDsjySBiidKBx7nREGGqF2imfjC0jMjJBjqkAUeecGyVO4PMtyP29PUQod1TZJRv9oiu5AEuCVMEWudnfmLkMeOLKkQQICNW9seO9dJH0Jtq95oEacZ6V9K7Ktpgx8Yi%2F2s7SthBjAccibY4SLqgjpAqhDvkrXmNrsUBZvuio3JooULnItae%2F7m7oV7%2F4UKLWZ8bzVUt99DTdYi8Q1vhzRRwnFeklllIlTYKfjvq6nY8J2cnCBLMjmLxDiXf6hsv&X-Amz-Signature=0d8f18b7c200f2c5892a9aaf0280cc359e6ab60e721c6faca3c55f31afc9596a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUN3KG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNITdeAEvLde%2BMhgDE%2FOPJZjfoLwljYEPsK7tnuAyCjAIhAMzzBh5pfYcoGNjDzb0HDEsTfff1YLC8ItfAYlPODDNzKv8DCE8QABoMNjM3NDIzMTgzODA1Igyo4PgqWAjqLnx%2BpUUq3APuQksb5oCFDbl05WAiQl5037c6ZGWSvd2QaAj0iOIN835YL06pVeYjbnaTnQ%2FCuEePK6pBdlus%2BlmxmpHa1kgvk2p8l9EhU%2FflxBMqB4Y3NqzMO%2BbnKSIyHGwURUh6Rl3HFTRpsQuasrZGiNGm9xUgMmO0fBVraFXQ%2FKVQccjxs%2F1gWjKSq%2BsgjpjZMFcpqDzRCld1NxSRPLvKvFXeFRPhAWf6%2B7P2Pl%2BSL%2FQSji4dGSikeEa8PzKOJaCL5%2BSyES%2BXY0%2B4swFEXB30SmBvwkkDgKmGoiB9uGpRf3ry4vtlf9URlHNVb9pP0Ds5azS%2FWhoA4W3UzANVNSgZRbAxd1bi8fn9oKmdoVgffutcmhKfVCrdfJJdF2LnhU7FVV2u%2BvxB4nZGGimYMQfQ00QYQr6%2F6U3Pu1ZSSJHx3x%2B76JqJFVr3J3WIq8%2FofpUEIQ9y%2BvvGiBXT%2FRPMvgbhpdKGB533SXXbUh0Ry1QoYNZdod3F%2FaitQSB9SorPYVbU2wwzbcB6e7fmtPnmfgdeZyCgS52iFj9%2BW5BLvdpDM7%2BHNCE%2BmwYdVTxlLnGna2qSlOlq0ENN3hNH2pU5GulP2YkN6b8KeoPlG9qOJGxrnDsjySBiidKBx7nREGGqF2imfjC0jMjJBjqkAUeecGyVO4PMtyP29PUQod1TZJRv9oiu5AEuCVMEWudnfmLkMeOLKkQQICNW9seO9dJH0Jtq95oEacZ6V9K7Ktpgx8Yi%2F2s7SthBjAccibY4SLqgjpAqhDvkrXmNrsUBZvuio3JooULnItae%2F7m7oV7%2F4UKLWZ8bzVUt99DTdYi8Q1vhzRRwnFeklllIlTYKfjvq6nY8J2cnCBLMjmLxDiXf6hsv&X-Amz-Signature=ba78b3add7ca10cd65bb99b0fccad62da1cc395979ef95e4b75fa9bb9078b887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

