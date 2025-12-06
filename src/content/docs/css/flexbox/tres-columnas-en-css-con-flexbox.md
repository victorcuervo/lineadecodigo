---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZJBJ3Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3IdNcWQla9XgFH%2FVPH0QCemTHBzqCBwto2dpdD6%2FJ8wIgBy5MlHK1LNzwVkpX15JE7l067XrQOfc3%2B7He3ugQi3Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGfWcJpLij1GICObByrcA%2FRp5jDn5VDj1vDM%2F2HFjCmv9aCF7iezgvbfFtTA9VFt54hO5wgsFY%2FaF8a1ZbzUWrPZSi4LYVH%2FCIyOHLJIvpS9kcjFt7aKe90JD0RvlOnJQ0qko9Agg2M%2B3DYZ%2BDfsniYkVlHK6wcFUTvDmLONk8q8KOEeoiKPP%2FSxIc6GATELKISFY509hcJrnOr1ZoXa42vdeSQ1rwn5rY5wCCXglnGlOtPATr95S4QoTeVuMjiC1CekKIKQ3ss88QkE4fBSvnHcQGAbmNx%2F6Nq2F5xOpejhR6ClqFRmIf%2FQmtYh3K0jh04VTIF8mpT6zm3yAKGlIQ5Cw0v6y6YkbSYtG40iI8AYwmm0tfD2whrSZmUqEiMBE57I8TO02E5MOsbbBpqitKAsvua7Ha53fcZ9eJj2JjBdfc%2FuKTqHklHA27yCsEw3kSICx8cyYaNeAyfRtPzH1IWZ2oqwjAPnH6sP7ush5S%2FJCWzf7MzJcpGzVApe44jtjuqJuhJtz6EDd5DAhQ1RxFs0AXyPr2o3g7jfu80IP3U5ly%2Bz7p24cHJjsYi%2BNn3MGatbLcDwlOS3eieUIFQQZ1JLfw9H%2FdzuAUc3xDUCqQ4g0cEL0485%2BwA%2B%2B7sy6bwxVWPxQwLXerMPKZ2%2FMNS8z8kGOqUBEmiPirWgEUW%2FR%2FemgPZAK7qaUZh2VBF9NZ%2F6YnrwVIgsDJwo%2BhcsMYS5UrNY%2Bsik73alaKWa2zJ1Ors8xYGAJ3oU02ZMoq3GGIvFMLNW36GAMSRUeZZ6F%2FqKQK067Z%2FLrz%2BdvwhrVQrWymIzb7sZYu5dOnoPrupGgtFs%2BCeUaXPpC2dp1DJuRmct5CPErXNltp%2F%2Ft1QzhhEN0f0w72BGVM0xIwa6&X-Amz-Signature=fec544633875a9601e0f5b5d670de415ef9fdc6235dd51a04c588c175267685a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZJBJ3Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3IdNcWQla9XgFH%2FVPH0QCemTHBzqCBwto2dpdD6%2FJ8wIgBy5MlHK1LNzwVkpX15JE7l067XrQOfc3%2B7He3ugQi3Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGfWcJpLij1GICObByrcA%2FRp5jDn5VDj1vDM%2F2HFjCmv9aCF7iezgvbfFtTA9VFt54hO5wgsFY%2FaF8a1ZbzUWrPZSi4LYVH%2FCIyOHLJIvpS9kcjFt7aKe90JD0RvlOnJQ0qko9Agg2M%2B3DYZ%2BDfsniYkVlHK6wcFUTvDmLONk8q8KOEeoiKPP%2FSxIc6GATELKISFY509hcJrnOr1ZoXa42vdeSQ1rwn5rY5wCCXglnGlOtPATr95S4QoTeVuMjiC1CekKIKQ3ss88QkE4fBSvnHcQGAbmNx%2F6Nq2F5xOpejhR6ClqFRmIf%2FQmtYh3K0jh04VTIF8mpT6zm3yAKGlIQ5Cw0v6y6YkbSYtG40iI8AYwmm0tfD2whrSZmUqEiMBE57I8TO02E5MOsbbBpqitKAsvua7Ha53fcZ9eJj2JjBdfc%2FuKTqHklHA27yCsEw3kSICx8cyYaNeAyfRtPzH1IWZ2oqwjAPnH6sP7ush5S%2FJCWzf7MzJcpGzVApe44jtjuqJuhJtz6EDd5DAhQ1RxFs0AXyPr2o3g7jfu80IP3U5ly%2Bz7p24cHJjsYi%2BNn3MGatbLcDwlOS3eieUIFQQZ1JLfw9H%2FdzuAUc3xDUCqQ4g0cEL0485%2BwA%2B%2B7sy6bwxVWPxQwLXerMPKZ2%2FMNS8z8kGOqUBEmiPirWgEUW%2FR%2FemgPZAK7qaUZh2VBF9NZ%2F6YnrwVIgsDJwo%2BhcsMYS5UrNY%2Bsik73alaKWa2zJ1Ors8xYGAJ3oU02ZMoq3GGIvFMLNW36GAMSRUeZZ6F%2FqKQK067Z%2FLrz%2BdvwhrVQrWymIzb7sZYu5dOnoPrupGgtFs%2BCeUaXPpC2dp1DJuRmct5CPErXNltp%2F%2Ft1QzhhEN0f0w72BGVM0xIwa6&X-Amz-Signature=4ae34c24a584668787480a31d29eafacfbb8d67c8eed336d35aab4f63b648c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

