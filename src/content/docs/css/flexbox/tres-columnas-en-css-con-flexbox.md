---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLWR6XE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIasB1qa%2BZoEJHztGDPnMYHbkPaw%2Fg1CpqfRwy%2FBYvhAiBVM3snBvW8kMtujBr0ezfGn41KiCdHi7veQNB%2F4BOAuiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY8OqeFagXFpqyut4KtwDVs3opcTlRCrQokdOr1mGSg6f1mnlzLF1W7DQxJ%2FLf4k9NA0IJ5pbgBpSETko6E3iUTCXX43f4mbRw79Q1sEreIdUygTu9425u3QGBHQjdz%2F6yI5q9g8piop%2F9h23Vp1tuQPvQm%2B8AbLbg25UpP6jOwm9124WlKxEe%2Bxj3RkAT%2BA2ZhFBlGszpS1NdlKW2Ui8%2BBlgRjaWtXOL6VbA6sVadCEouWhoPZvmRdpdI7GE3xmpq%2BXte37TYXrpU0sStZjw1TAwH0ikpzNwpmEq0vP9ktBLLBlA4u%2B2kq3dFZNKZUFUk8tslZbmumwudozjjdkj%2F9h5GnZfFXfanc2TkX%2FyzoC84QF7k%2BsUScZjE4g5Z%2Fkmv2kD57Cpfx9j5OWmkpgZxcXy0R07Vo6%2Fhr8huqOg1PQTA1EvjJ29Y7xl6Gm4aisYUgnmAVpgvpsHy9lPDuPH8xFpr190C0GQEwtY%2FoLl20X09nbT1j%2Ff9ch51pqVT0uGRWy%2Bg7QM0TM2cgSKeNXUM3brEipJ3dlyWXdC1TbjlG31m1nryQwEXdJZtqBrwUNupKgSSjhIT%2BIhj12r0tSm1V1T9fyGYr1naEmpkstGAdYSytMN%2BqyqxBMe5%2BwFI3%2BjuTEMpYH%2FNnphcvMw9JnUyQY6pgEgRYQd%2FriO99BLxZIDwqDuaIdLnxPk97bJFL2UxQWkT%2B2hx8Zrvv%2BAwLfHY67a1%2BBNgLvwQ3ME4FVDy3FGxb%2FNV8ejyjpNAyeGK4AorTVKeBfhNqcC8XLbNamVfl7QraGivVmznCk%2FuapH6%2B%2Bb4edqdfFbbcH%2F7oKjr2T8QqajczRBYyObopgNJfZv6Pm%2Bwht5dSiGoWIoWXkQ9BK2RBmV%2F%2FMdmeXm&X-Amz-Signature=a392274a0bc27a5f966e2ae65b54ec45e0bc5995aa3c8805cb8cae0701870d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLWR6XE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIasB1qa%2BZoEJHztGDPnMYHbkPaw%2Fg1CpqfRwy%2FBYvhAiBVM3snBvW8kMtujBr0ezfGn41KiCdHi7veQNB%2F4BOAuiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY8OqeFagXFpqyut4KtwDVs3opcTlRCrQokdOr1mGSg6f1mnlzLF1W7DQxJ%2FLf4k9NA0IJ5pbgBpSETko6E3iUTCXX43f4mbRw79Q1sEreIdUygTu9425u3QGBHQjdz%2F6yI5q9g8piop%2F9h23Vp1tuQPvQm%2B8AbLbg25UpP6jOwm9124WlKxEe%2Bxj3RkAT%2BA2ZhFBlGszpS1NdlKW2Ui8%2BBlgRjaWtXOL6VbA6sVadCEouWhoPZvmRdpdI7GE3xmpq%2BXte37TYXrpU0sStZjw1TAwH0ikpzNwpmEq0vP9ktBLLBlA4u%2B2kq3dFZNKZUFUk8tslZbmumwudozjjdkj%2F9h5GnZfFXfanc2TkX%2FyzoC84QF7k%2BsUScZjE4g5Z%2Fkmv2kD57Cpfx9j5OWmkpgZxcXy0R07Vo6%2Fhr8huqOg1PQTA1EvjJ29Y7xl6Gm4aisYUgnmAVpgvpsHy9lPDuPH8xFpr190C0GQEwtY%2FoLl20X09nbT1j%2Ff9ch51pqVT0uGRWy%2Bg7QM0TM2cgSKeNXUM3brEipJ3dlyWXdC1TbjlG31m1nryQwEXdJZtqBrwUNupKgSSjhIT%2BIhj12r0tSm1V1T9fyGYr1naEmpkstGAdYSytMN%2BqyqxBMe5%2BwFI3%2BjuTEMpYH%2FNnphcvMw9JnUyQY6pgEgRYQd%2FriO99BLxZIDwqDuaIdLnxPk97bJFL2UxQWkT%2B2hx8Zrvv%2BAwLfHY67a1%2BBNgLvwQ3ME4FVDy3FGxb%2FNV8ejyjpNAyeGK4AorTVKeBfhNqcC8XLbNamVfl7QraGivVmznCk%2FuapH6%2B%2Bb4edqdfFbbcH%2F7oKjr2T8QqajczRBYyObopgNJfZv6Pm%2Bwht5dSiGoWIoWXkQ9BK2RBmV%2F%2FMdmeXm&X-Amz-Signature=fe3f1d960347f33bcf86e7557636cc1125cdc7f47c96d9b431333c415cd8c575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

