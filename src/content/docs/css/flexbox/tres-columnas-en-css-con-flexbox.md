---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWHPTOK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd6IRuMeAtJ0PtrogwGyv369%2Fx%2BHLmvOFtuKhL%2FJ8rCAIhAKghyVsSD%2B0n1CRP%2BxqCoPFxpudQ2cxtlcATLFMjKBBEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVrSb3n4%2BV82uKb3Aq3AOIzfw9IkXoSsg%2FECVWMHVPPVJkNIyCdAkuYPd7i42OqYHRKp%2FLYYwlGDfDSjDJdhX%2BbzlnEL6jzOyekmqtziBgPm%2F9PnNZuit8g9gGHqJveWTrGVG0zN2CtLoL3BJFpkbzQgKRFOo%2Foo%2FYogPcyJjwx7NS2S%2FTRPl0npB0MTVMLk7biRucXLqRvggjvpnl%2Fg08KQYgqUKWuthsQc%2FZ95rzuMg2yBT3vektrucCKRitLPUz1Enqr0YOnhjIalp12SXj%2Bd%2FCw7oEoBXSzgdp0ezktNSN2BfbgOKesOLlE7zRv8p%2Ff4CxHb18y1wUFPU5owWFhMXLIX0KlelwDYvps6ETK6%2B4cU71uKH6YTbbPFXtE0h1m%2BumK8pxWgKnHAofZks4DgvgUJvSZQh2Fw0lj9EZtWiUY8IrBj1WczLPPynWuSqbkAvQtIAwhZXjqRE4vKK0ejX71Nbpwcm5EJFUyon4EYKlefdBotrI7qkzInxFzFe7c%2BLjjHsQKaFvg82kJH37blOPsiM1yWq14uVUujJ8l4RIOYp6qegch%2FgEESFmDSWwt8uKc8%2FsKh7yJGMKRpU3M1ElKNdutH3UdsDMk6WoBePpKJXQYYXxjvTfEXSxob3YP0XWiC6DZQJsyjDBmdXJBjqkAaLYZhwOKs8YlK8gndtWUiyitbqYOIUtpexu16YlXfgs8u06KsCus1DI%2B%2FHnQ%2FD5%2FxDjycabfaICrIJgWWhYYLqPLGubnuBz1rB%2BZiWLjfGwp3E%2Bv5xVp0O7URD3%2BeNHfztNSW5Q4n5ZfFVLR%2F1ZFBwPWA1544FVb7mPqUiH26pwxu7Tj4Jukg%2FiXCiLceZTGwZVJswDCfk47%2Ff0BVIMOMgXoOnd&X-Amz-Signature=dbef856a5305a1d281482235e104f35d3a8a3146173ec8c970460c5479c1b176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWHPTOK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd6IRuMeAtJ0PtrogwGyv369%2Fx%2BHLmvOFtuKhL%2FJ8rCAIhAKghyVsSD%2B0n1CRP%2BxqCoPFxpudQ2cxtlcATLFMjKBBEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVrSb3n4%2BV82uKb3Aq3AOIzfw9IkXoSsg%2FECVWMHVPPVJkNIyCdAkuYPd7i42OqYHRKp%2FLYYwlGDfDSjDJdhX%2BbzlnEL6jzOyekmqtziBgPm%2F9PnNZuit8g9gGHqJveWTrGVG0zN2CtLoL3BJFpkbzQgKRFOo%2Foo%2FYogPcyJjwx7NS2S%2FTRPl0npB0MTVMLk7biRucXLqRvggjvpnl%2Fg08KQYgqUKWuthsQc%2FZ95rzuMg2yBT3vektrucCKRitLPUz1Enqr0YOnhjIalp12SXj%2Bd%2FCw7oEoBXSzgdp0ezktNSN2BfbgOKesOLlE7zRv8p%2Ff4CxHb18y1wUFPU5owWFhMXLIX0KlelwDYvps6ETK6%2B4cU71uKH6YTbbPFXtE0h1m%2BumK8pxWgKnHAofZks4DgvgUJvSZQh2Fw0lj9EZtWiUY8IrBj1WczLPPynWuSqbkAvQtIAwhZXjqRE4vKK0ejX71Nbpwcm5EJFUyon4EYKlefdBotrI7qkzInxFzFe7c%2BLjjHsQKaFvg82kJH37blOPsiM1yWq14uVUujJ8l4RIOYp6qegch%2FgEESFmDSWwt8uKc8%2FsKh7yJGMKRpU3M1ElKNdutH3UdsDMk6WoBePpKJXQYYXxjvTfEXSxob3YP0XWiC6DZQJsyjDBmdXJBjqkAaLYZhwOKs8YlK8gndtWUiyitbqYOIUtpexu16YlXfgs8u06KsCus1DI%2B%2FHnQ%2FD5%2FxDjycabfaICrIJgWWhYYLqPLGubnuBz1rB%2BZiWLjfGwp3E%2Bv5xVp0O7URD3%2BeNHfztNSW5Q4n5ZfFVLR%2F1ZFBwPWA1544FVb7mPqUiH26pwxu7Tj4Jukg%2FiXCiLceZTGwZVJswDCfk47%2Ff0BVIMOMgXoOnd&X-Amz-Signature=89f0926e17e27415e005623ca40cfcc734f909425b9c33755d6e2adcfd6e9e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

