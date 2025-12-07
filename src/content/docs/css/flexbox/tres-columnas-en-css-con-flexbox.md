---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEY64ZUO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCL2D9TTSFDAGALaPqbsQqYL%2B6J1h9Pu%2Bt5bL8VgnGAwIgfu3uwemzDfxQE%2F%2F6COtfKyPi%2FoxPklSwu3N854sjjZAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxSkJL7N6K3GdMhJircA6XR7YNI8IbV9ILnasz%2FGTi%2BGNlOGWHtxt6TKCvVfErAJdmjAXsj2NYShHLN5YYxuZR3atqTbLTXYkpZX0JrKbSEc3Vi48ujJLCga0mUQETNvytXycFK8XUM%2Bt%2B%2FpJ%2B6laJqYzTEH5wcG1vHbC1455VQQqZ8OXJ3Z6w9SQKT8iQi8izVOIWR59JG2lk5pmYEDi6b0fyvw5Uz%2BHWVTqz1Fy4nFpUcAUsKduiBe2fxjT6S0xq828fhPlfvef4GHjRSsMxT6T3Yg5bq6XAG%2B%2FXwzMNSTDVEDWZM6zJFSpOqT8FSzKb56L3SOO2Vxl1OWcKYeYNFkRF8vg3%2Fm9njNiDRBuoXDDFW%2BtCwHhzd9OSb0UJ6%2B5bVjgFZ2h%2FFLKr4MWtaKtVt76Q6y%2BoLtbJTGseMNcQDoNbqS5%2B67DBzZsJdIaFzJF37V7n9NJhXMW23wxwS9R3FkVkwRIfocSiBFj3FTx24pEoNpJ2AY61yDfo7e3ys%2Fd63yufLj1in782G5bTvykPV%2B5gIohsuN%2BfSV0yvP%2BU1vy8myDvqI3RR63TlC8ZNUOr0xMFuXQyfeoF8Vsr9EYTMjhw5msBtLb9YbT1%2Fa3g4eqI%2FeiuKMOFxdiQ8LeF%2FPFqRfy%2FfXJ0iCMcwMOS%2B1skGOqUB7uk82mJgPLwXl0aB9ivMoznGq1jnYba1GsFhN%2BbkQNKcaFKU%2FnhlNazCEJTlxoebJFWYiMal%2FgbvJFlYkABAtdXT6OEqw7MbewltoGD%2FekROaOOPX6lGd7OSCWIFNhRc4ite3p10RBsDQbG8ZAOLZaGeG1DoMydL5IrYzSQEDLwDAwaSSsfu1y0LgDrhkglfLRzsX6lGfa0x%2BPaeHRQWIMx%2BSDuk&X-Amz-Signature=37e3e764492a92400b429470c445679558844dd2556aa2c6c7425f00e1a4ed0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEY64ZUO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCL2D9TTSFDAGALaPqbsQqYL%2B6J1h9Pu%2Bt5bL8VgnGAwIgfu3uwemzDfxQE%2F%2F6COtfKyPi%2FoxPklSwu3N854sjjZAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxSkJL7N6K3GdMhJircA6XR7YNI8IbV9ILnasz%2FGTi%2BGNlOGWHtxt6TKCvVfErAJdmjAXsj2NYShHLN5YYxuZR3atqTbLTXYkpZX0JrKbSEc3Vi48ujJLCga0mUQETNvytXycFK8XUM%2Bt%2B%2FpJ%2B6laJqYzTEH5wcG1vHbC1455VQQqZ8OXJ3Z6w9SQKT8iQi8izVOIWR59JG2lk5pmYEDi6b0fyvw5Uz%2BHWVTqz1Fy4nFpUcAUsKduiBe2fxjT6S0xq828fhPlfvef4GHjRSsMxT6T3Yg5bq6XAG%2B%2FXwzMNSTDVEDWZM6zJFSpOqT8FSzKb56L3SOO2Vxl1OWcKYeYNFkRF8vg3%2Fm9njNiDRBuoXDDFW%2BtCwHhzd9OSb0UJ6%2B5bVjgFZ2h%2FFLKr4MWtaKtVt76Q6y%2BoLtbJTGseMNcQDoNbqS5%2B67DBzZsJdIaFzJF37V7n9NJhXMW23wxwS9R3FkVkwRIfocSiBFj3FTx24pEoNpJ2AY61yDfo7e3ys%2Fd63yufLj1in782G5bTvykPV%2B5gIohsuN%2BfSV0yvP%2BU1vy8myDvqI3RR63TlC8ZNUOr0xMFuXQyfeoF8Vsr9EYTMjhw5msBtLb9YbT1%2Fa3g4eqI%2FeiuKMOFxdiQ8LeF%2FPFqRfy%2FfXJ0iCMcwMOS%2B1skGOqUB7uk82mJgPLwXl0aB9ivMoznGq1jnYba1GsFhN%2BbkQNKcaFKU%2FnhlNazCEJTlxoebJFWYiMal%2FgbvJFlYkABAtdXT6OEqw7MbewltoGD%2FekROaOOPX6lGd7OSCWIFNhRc4ite3p10RBsDQbG8ZAOLZaGeG1DoMydL5IrYzSQEDLwDAwaSSsfu1y0LgDrhkglfLRzsX6lGfa0x%2BPaeHRQWIMx%2BSDuk&X-Amz-Signature=09e062429b829cae000665ac6ecd8713c662c682ad2519ba4646bf0a270cc116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

