---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45WZ6RG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNs7GiGtvtcDoQecBdTcyFxoAbg17pI7FGY90lprgjTAiEAh%2FwbV1zxJJgrTtBLcb22E%2BEhHHXQWgu7A1tr38S5lZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7Z97CZYzIKeGXxJircA7ulAQUli9heqU7o%2B7JHLd8idOpzo7uXcaC9vYKaBU1SmwcIpy%2BMPa5snLFJiJ%2FMEscf3sDMqPlqD%2Fhx11T2i1X6842xjMZDKH3xfwoBoORVm9quLqViL4nv9IkH35q07ViJyZJe4acGxOzYet6sZVO5U1v8srXvs15krhkGCbiT8VOoB6hYvHAAdZrVSh1HX4g%2BGXe7lSc%2F0lt1mza2xGFExbUG84eEaadkIUtR83nOwQ9cCjPh0rW4%2F9a7C9Yq2n3w2R92wPzzuMqm%2BGB0sLX%2BCJc2I1x10kxc%2BmpGS5M6xCoaYweQz0cwfkcUCzieOQ0P7zsCCEINo9KgPzyKWN9bwX2riuRIWlY2Yf%2Bl7RI3daNl3DyIAJcoBOKPtXVO5KOEOezY3FECl2wa0Qqf27fDEx8VNFvcE0JlpJmG4wACQQrtenbmAmfQOWyNcURK8VQXGekz3t%2B86QfvKlG21%2FhhPTVfhy%2FHE7XPBE6Zu%2FcmwUUQT0zeVMmn7Da7SD8%2FijbQFZ%2BBOzifxyb0xlEyeYT1JGGy4f9kFp%2Bus9%2BmHSu5wxi5ftcISsJwGHgiAdfsn8956sIndsWOe8yk%2BIgcFcDqfrvj6RYvHPOf%2BiS3DInohXxaE%2BLCUp75hzKUMMmP28kGOqUBWyFooPNwg7O0UMZGm5orPt4jfrvVvAYR84I0k4xvKuB4AQBZqcga0k6Qnq%2FRuNCDUqtVcxjYuLDe7%2BNz3yd3NJA3UwLWEOj1UoRiCOTbx%2B8mH0eoJxbGJG7j3Fj%2FoswtInLp0KN8S0OYJSVNlIvvGaTE17YcUTXrktzdhLhJRNewOT449SSyL%2BjI8vys0y0Zo7FQs6A3tVWRiCNBCDo5bm2w4fOi&X-Amz-Signature=197f20511843067f9fa62d4b1f6ddf34220eda2c462a945eb195f93f617c9f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X45WZ6RG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNs7GiGtvtcDoQecBdTcyFxoAbg17pI7FGY90lprgjTAiEAh%2FwbV1zxJJgrTtBLcb22E%2BEhHHXQWgu7A1tr38S5lZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7Z97CZYzIKeGXxJircA7ulAQUli9heqU7o%2B7JHLd8idOpzo7uXcaC9vYKaBU1SmwcIpy%2BMPa5snLFJiJ%2FMEscf3sDMqPlqD%2Fhx11T2i1X6842xjMZDKH3xfwoBoORVm9quLqViL4nv9IkH35q07ViJyZJe4acGxOzYet6sZVO5U1v8srXvs15krhkGCbiT8VOoB6hYvHAAdZrVSh1HX4g%2BGXe7lSc%2F0lt1mza2xGFExbUG84eEaadkIUtR83nOwQ9cCjPh0rW4%2F9a7C9Yq2n3w2R92wPzzuMqm%2BGB0sLX%2BCJc2I1x10kxc%2BmpGS5M6xCoaYweQz0cwfkcUCzieOQ0P7zsCCEINo9KgPzyKWN9bwX2riuRIWlY2Yf%2Bl7RI3daNl3DyIAJcoBOKPtXVO5KOEOezY3FECl2wa0Qqf27fDEx8VNFvcE0JlpJmG4wACQQrtenbmAmfQOWyNcURK8VQXGekz3t%2B86QfvKlG21%2FhhPTVfhy%2FHE7XPBE6Zu%2FcmwUUQT0zeVMmn7Da7SD8%2FijbQFZ%2BBOzifxyb0xlEyeYT1JGGy4f9kFp%2Bus9%2BmHSu5wxi5ftcISsJwGHgiAdfsn8956sIndsWOe8yk%2BIgcFcDqfrvj6RYvHPOf%2BiS3DInohXxaE%2BLCUp75hzKUMMmP28kGOqUBWyFooPNwg7O0UMZGm5orPt4jfrvVvAYR84I0k4xvKuB4AQBZqcga0k6Qnq%2FRuNCDUqtVcxjYuLDe7%2BNz3yd3NJA3UwLWEOj1UoRiCOTbx%2B8mH0eoJxbGJG7j3Fj%2FoswtInLp0KN8S0OYJSVNlIvvGaTE17YcUTXrktzdhLhJRNewOT449SSyL%2BjI8vys0y0Zo7FQs6A3tVWRiCNBCDo5bm2w4fOi&X-Amz-Signature=646c1a52935bb237f8bff8eee52f02edccbad618e161fb6c9633b626bfee1f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

