---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGN7AVU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvT0QV8w0mWZV9eeIubIi8VNasJTfAlsBx8qe0FAx%2BQQIhAKn6WYlhVyCikK1XsCvt8vefs%2FBfjhXElHPo0l9zlwkfKv8DCHoQABoMNjM3NDIzMTgzODA1IgzgAwnJPLZMH%2BJP%2Bs8q3AOEUYv8SREq2G%2B6s5Jq1Ush5gnz82SiPMTFzY64UWtbHfc2hkTINnsEjMogrjeEpsyRJDZ0tCw0wVSZr4GhqXn1QdapPbrm6pakmfAve8WVkJGDEz9219oQcf7L38C4FBaagPWA0JlGcJJmwTp4KlpDH8cvoCaq3uP4IuetXo5I9jX%2FuVQ%2FQXkDDOASSPXMEmgd5BnOrQjrccuwWjuCi8AYKcC5qmG1NSqX4dwG4dApKA7ZaWAe0BtiBUc%2BQj6IqLy1ZslVchq0%2B6eMVEizyIt%2F7yKtQgDYPngBJcwlRa75JHfhWcldDbkIwgc7y5s7rxpLPVME%2Bokbbz%2BlFPgQHgqXG5WP%2FoWeAwl2cfMED0YqZzGSePdT5Iai70VR5x9CHgAM%2F82WqrFcrcXpVF2Zec1SWXFy4cChkoBNAS22KIOVj28P8VJbySWqdxTk%2BuIjCi6t6pUhCfdRuFOw1daesWd5yjfpAoVCdGqLAkbkCszPISWw0JMILDKveL7eKumH3%2FDDdNowEUm3HekZVnhiN0DuoLUWd4BudMaef%2F8FFdL2Z7VkPI%2Fmw5B92pC5lJoU2bNwL7cKokLLJ3GklFz0qEPjbx7YPjFEJOiNf%2FbAVszqpGHBG8NawG%2Ff0RXICTD0x9HJBjqkAb1l0xb6NvSY5%2B%2F%2FUPWTYUpOwFfCpkQynMWrrBmZk1tySvHUXT38raJVWS1z2vx4xkP5iqX4iJR4A0iYicTkM2Q3iCQxEkqp%2FjJuSEtmJW4Odi52HMmN7x2dyHBz9e2TxsNfZCCEn8M%2FpSW7vZDZeo9CWXncYtCX0JjPsnLrag4gMCuYx4JLTLuzn3bQN0OWI3YPZ3szvo473WAr%2FDrQWKAiVURq&X-Amz-Signature=14a764c607d877695504441f3d4667f1f8f05a6d54e4fa5db7251b94920f06be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGN7AVU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvT0QV8w0mWZV9eeIubIi8VNasJTfAlsBx8qe0FAx%2BQQIhAKn6WYlhVyCikK1XsCvt8vefs%2FBfjhXElHPo0l9zlwkfKv8DCHoQABoMNjM3NDIzMTgzODA1IgzgAwnJPLZMH%2BJP%2Bs8q3AOEUYv8SREq2G%2B6s5Jq1Ush5gnz82SiPMTFzY64UWtbHfc2hkTINnsEjMogrjeEpsyRJDZ0tCw0wVSZr4GhqXn1QdapPbrm6pakmfAve8WVkJGDEz9219oQcf7L38C4FBaagPWA0JlGcJJmwTp4KlpDH8cvoCaq3uP4IuetXo5I9jX%2FuVQ%2FQXkDDOASSPXMEmgd5BnOrQjrccuwWjuCi8AYKcC5qmG1NSqX4dwG4dApKA7ZaWAe0BtiBUc%2BQj6IqLy1ZslVchq0%2B6eMVEizyIt%2F7yKtQgDYPngBJcwlRa75JHfhWcldDbkIwgc7y5s7rxpLPVME%2Bokbbz%2BlFPgQHgqXG5WP%2FoWeAwl2cfMED0YqZzGSePdT5Iai70VR5x9CHgAM%2F82WqrFcrcXpVF2Zec1SWXFy4cChkoBNAS22KIOVj28P8VJbySWqdxTk%2BuIjCi6t6pUhCfdRuFOw1daesWd5yjfpAoVCdGqLAkbkCszPISWw0JMILDKveL7eKumH3%2FDDdNowEUm3HekZVnhiN0DuoLUWd4BudMaef%2F8FFdL2Z7VkPI%2Fmw5B92pC5lJoU2bNwL7cKokLLJ3GklFz0qEPjbx7YPjFEJOiNf%2FbAVszqpGHBG8NawG%2Ff0RXICTD0x9HJBjqkAb1l0xb6NvSY5%2B%2F%2FUPWTYUpOwFfCpkQynMWrrBmZk1tySvHUXT38raJVWS1z2vx4xkP5iqX4iJR4A0iYicTkM2Q3iCQxEkqp%2FjJuSEtmJW4Odi52HMmN7x2dyHBz9e2TxsNfZCCEn8M%2FpSW7vZDZeo9CWXncYtCX0JjPsnLrag4gMCuYx4JLTLuzn3bQN0OWI3YPZ3szvo473WAr%2FDrQWKAiVURq&X-Amz-Signature=211aae0f339b0ec94f5126f32ffb87c27ddae6476d16e111f2e66b6f160c16e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

