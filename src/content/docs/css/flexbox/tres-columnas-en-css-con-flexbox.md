---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQDR32M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBj2kk%2Ffeu0W09StSxPO1mPdf51%2FR7NG%2FPouT0BeamTQIgc8uiqEOEuCnnYwjo%2Btc6dvJMIPce1R6Xg1wyFZBrSJoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYA%2F61mTR7tr8o25CrcA2KtRBHxKaay3QxzuoR2KH%2FH2jLWtwUNyqNYucz9F4T4tWsQ7UafItyEgLvJzIfRKHR9o1Vgq%2B0hty4poUap6gJncepKffbeZXuw6gygUibUkuSTKVmXPBIqGWGTUtTVqadPlOgjBFiUQgQZFgfUN%2B8%2FyNYPelju2m4zDS0BD%2FTaA5iRcfutgFTJRffnKLqPWSLMU8PnoX87qXRJvNfrBpp1F9G9rzBBOkQK3grPivA8267W3b8uloRiuDhwEiqhZ9UUXsEuTbAuiI%2F8gVxF4A%2Fue4OBz3vr58VmWFTJtc0xGO1ej%2BUANDJ03QcEedp5gsAICT3i1%2B1ggZ0XpJo7lGESvn7YGWEYKXFzhWqu1E79PLjB7rvwvikMU678nS76Nv2dXTxK4wAEOV%2B7aj%2FvL%2B5kb8s0RlW9uafrXt%2B2N7tDU0x7R6Ist1IoIyZGgUIHEOIoFq6DLOqovZ4AXDrjeY9kx40Fwmv8D0kpVmXysY%2FeIpfY7NLUPNq71iFYd4jPFNYsjS8vKdE0p9m6wVgMp1IcKAWlUiO3a%2ByHjK3CWMCB89859BInqYsVAZUKf5cKiaMfd2rqoW4x0qNHf2W%2FUoc7LNia3OblLbB9g4oSzCPYdWVVv3XdT0jTSoC2MNnl3skGOqUBq4MeJqRD3wGweZ%2B7oyHQQQSMkdG%2BzcPaNMMBDx41%2Ft9ECC3NoESqUWz5RR0AzUJbh5ml11BsJBV38euXg8wxJFuaXD4SsvVjPrTv9yM8lN5Y5bJM9LGN5a7uQuwUAO2c%2Bp32ydcsoIA7F0ppdj0qV1Iw9%2FKGhiBxLWgLMI9k6M0GS7dD5KzE4d0XytSHiVwavYV7BkCXCCQEeg3F4BTZ0%2FQbyDvT&X-Amz-Signature=6347b69f914348ace8d6d4f3a8dc5943a5303e655571d654590f55b77dfb7502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQDR32M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBj2kk%2Ffeu0W09StSxPO1mPdf51%2FR7NG%2FPouT0BeamTQIgc8uiqEOEuCnnYwjo%2Btc6dvJMIPce1R6Xg1wyFZBrSJoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYA%2F61mTR7tr8o25CrcA2KtRBHxKaay3QxzuoR2KH%2FH2jLWtwUNyqNYucz9F4T4tWsQ7UafItyEgLvJzIfRKHR9o1Vgq%2B0hty4poUap6gJncepKffbeZXuw6gygUibUkuSTKVmXPBIqGWGTUtTVqadPlOgjBFiUQgQZFgfUN%2B8%2FyNYPelju2m4zDS0BD%2FTaA5iRcfutgFTJRffnKLqPWSLMU8PnoX87qXRJvNfrBpp1F9G9rzBBOkQK3grPivA8267W3b8uloRiuDhwEiqhZ9UUXsEuTbAuiI%2F8gVxF4A%2Fue4OBz3vr58VmWFTJtc0xGO1ej%2BUANDJ03QcEedp5gsAICT3i1%2B1ggZ0XpJo7lGESvn7YGWEYKXFzhWqu1E79PLjB7rvwvikMU678nS76Nv2dXTxK4wAEOV%2B7aj%2FvL%2B5kb8s0RlW9uafrXt%2B2N7tDU0x7R6Ist1IoIyZGgUIHEOIoFq6DLOqovZ4AXDrjeY9kx40Fwmv8D0kpVmXysY%2FeIpfY7NLUPNq71iFYd4jPFNYsjS8vKdE0p9m6wVgMp1IcKAWlUiO3a%2ByHjK3CWMCB89859BInqYsVAZUKf5cKiaMfd2rqoW4x0qNHf2W%2FUoc7LNia3OblLbB9g4oSzCPYdWVVv3XdT0jTSoC2MNnl3skGOqUBq4MeJqRD3wGweZ%2B7oyHQQQSMkdG%2BzcPaNMMBDx41%2Ft9ECC3NoESqUWz5RR0AzUJbh5ml11BsJBV38euXg8wxJFuaXD4SsvVjPrTv9yM8lN5Y5bJM9LGN5a7uQuwUAO2c%2Bp32ydcsoIA7F0ppdj0qV1Iw9%2FKGhiBxLWgLMI9k6M0GS7dD5KzE4d0XytSHiVwavYV7BkCXCCQEeg3F4BTZ0%2FQbyDvT&X-Amz-Signature=738c1e2a268efb89134486d84ff7411a490e5d33fae8f301fa83eae7c95d8290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

