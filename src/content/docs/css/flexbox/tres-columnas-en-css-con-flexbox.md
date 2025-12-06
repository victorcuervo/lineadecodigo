---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HEM7RA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACgSncnpYtL2%2FBnQVuKhuNh6LjMpoqNdurWq7GUIl1JAiEAvnfKB3UANKf2R1FnXXABqEH47ybJmx6DUykentoqLnEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIR0ilsECHcvsl24YyrcAzE4f20rslLUbr080X5DSve8knpyURcs8dY8W%2FWSYpIrZ2WdBQ3kUdE7q4WxzZgRpcr7c%2BQm4cnbbSVCOrHn%2F6ygqNmTeBhIshJviEwTDEsdkaqpbIBLzlXVqSksyEP5EyddS5Uz2DnKgrmniSSDgfTAhzr%2BYekMnbhTAQWLjqzXtMF2Z26x2NvHuk9aq%2B60%2Bxjo3Vi0X%2FbF7s2rpPgpm9QgF1NJvsBHEL9tVBKvpIK6E8LpqBcn1zqYOxao2vAIz5MM1uOzaqf9PJX8F%2F6Fema4Xc1jp5pXXUEjIOJrl%2FcHAxJMSHyCJDY9adL08YVhOvJK%2Bas58kiPAZoW4PQr6xMYwFm20c1sRvYN%2BJPn47xId2ymSQQOpiSHpYJpy1WJjWhjCVcYDLVqnwCPi82zDv0bnpmJFDmBFDEv1jBI6fTw5Zt2ra6j8sj5dnNy5q1X5qFfsxYwgpIl694G%2Fo5QS8gjX%2Bu2VX5d0IistGI%2Fx%2BaYd87tOkt0Ohupfp0CAuwrjp5EbwUMQkNygWqb0Zh4JCZH5cUHymmMw%2FkXRLHB7UyDSyaI3nlLsD4kQjQy1gDciZf9tHdy1IMXc1qgOkHmJLst2R78qy247CaHjz9HPKzXoCDD0Q7T7luYf2D2MP6ez8kGOqUBt5ejuy%2FkqKi%2B0pB52j5aJhNMQNdYJ2gnuE5UEb1Fxz1gtToujGUvUwhr4WpWZr6SAAv0ebWyRWvyzlDAydN2%2BYAbzYCdObOpSis0HL3Y8UyiUe1H9%2FXSKzm7KVXgdt%2FfH%2FL6VxDnj11zgAfcCi13hbIh4QLk7ccrOEi7t6CUzfTwAxFEP%2BhZbsysDOhgekilly73IaGXR5IfEYx04bcXRA2g9kO9&X-Amz-Signature=eab171b5732a6e067b8c170ec1bdad7a0f7f2602118cc6e7a77282a58b550d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HEM7RA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACgSncnpYtL2%2FBnQVuKhuNh6LjMpoqNdurWq7GUIl1JAiEAvnfKB3UANKf2R1FnXXABqEH47ybJmx6DUykentoqLnEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIR0ilsECHcvsl24YyrcAzE4f20rslLUbr080X5DSve8knpyURcs8dY8W%2FWSYpIrZ2WdBQ3kUdE7q4WxzZgRpcr7c%2BQm4cnbbSVCOrHn%2F6ygqNmTeBhIshJviEwTDEsdkaqpbIBLzlXVqSksyEP5EyddS5Uz2DnKgrmniSSDgfTAhzr%2BYekMnbhTAQWLjqzXtMF2Z26x2NvHuk9aq%2B60%2Bxjo3Vi0X%2FbF7s2rpPgpm9QgF1NJvsBHEL9tVBKvpIK6E8LpqBcn1zqYOxao2vAIz5MM1uOzaqf9PJX8F%2F6Fema4Xc1jp5pXXUEjIOJrl%2FcHAxJMSHyCJDY9adL08YVhOvJK%2Bas58kiPAZoW4PQr6xMYwFm20c1sRvYN%2BJPn47xId2ymSQQOpiSHpYJpy1WJjWhjCVcYDLVqnwCPi82zDv0bnpmJFDmBFDEv1jBI6fTw5Zt2ra6j8sj5dnNy5q1X5qFfsxYwgpIl694G%2Fo5QS8gjX%2Bu2VX5d0IistGI%2Fx%2BaYd87tOkt0Ohupfp0CAuwrjp5EbwUMQkNygWqb0Zh4JCZH5cUHymmMw%2FkXRLHB7UyDSyaI3nlLsD4kQjQy1gDciZf9tHdy1IMXc1qgOkHmJLst2R78qy247CaHjz9HPKzXoCDD0Q7T7luYf2D2MP6ez8kGOqUBt5ejuy%2FkqKi%2B0pB52j5aJhNMQNdYJ2gnuE5UEb1Fxz1gtToujGUvUwhr4WpWZr6SAAv0ebWyRWvyzlDAydN2%2BYAbzYCdObOpSis0HL3Y8UyiUe1H9%2FXSKzm7KVXgdt%2FfH%2FL6VxDnj11zgAfcCi13hbIh4QLk7ccrOEi7t6CUzfTwAxFEP%2BhZbsysDOhgekilly73IaGXR5IfEYx04bcXRA2g9kO9&X-Amz-Signature=69aa5d4418017e12978e2e95647415f19527e1b9d4e2512da133520dac51cd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

