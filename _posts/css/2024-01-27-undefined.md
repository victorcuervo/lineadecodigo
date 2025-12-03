---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBUUS7S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHSXvrffmXeH0NfeRUsnaQRHdB0UpcK82YVyePGnG6d8AiEAj7C%2FLzw0dlDLuOhAu5rcO0QGWYE7SlgWh67c4BcShBIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNxfAaAL7Jjcz2ow4SrcA2pi%2BkrU%2Bs3pJifROBWLdmmi6JT7AimzpjJEi5OkOPua1rRJIgcvZcwG2fjp6mW2gjyAa%2FUyyfRwtPKmxPQJ1x%2F5uxtHaeXt6algyNOE2j03PNKGyOmrYjc1U39oLz26GiEKiS%2B929MC4OXKIfjav3Uitsx9pp6WRKtEU3AIg22QOy8I%2BW5%2BhclqL2I%2BXvNhmt8O0wYbap5%2BwFH9VfYydWFK%2B5%2FtfzQi6%2BUJ6SLpuEbWoS6s1KwK8IMqL17abOjYn3Hw0ez5Bp0bYN1qiLUoe%2FnYpL1VV0043TvN%2FdnfnFL1hk9tpOtPUDhB1J1hxk0mX66fHzIOnkfuOhy7hvKyMtocRultB6hPK%2BcsmAecMXAShyrZpouM9axLRChsjUS%2F1t2uZe%2F4nLggZeyVH9SDw2vx3QsWu70S5mtlmmkpxWCNl9u7tXQNZWjigujf0zutxaCC7puoYUbka9xOGyBNkGFzq2hG2wrOfZWxD15iBSeR%2F3%2FsZa1GLzJqx9M7klH8QbMupxkvKnU1HwlTftKxZ%2BrtbiJft5xLnZA%2FwJmy6BkxgjSOrTVvgXnf2xk7tZLyPKgJ02MVqO2WlJbnNE8s9rQNHK2DxVB6Qi2J6w2oVZXxgksgVu1I9v5l4LD9MLKWvskGOqUBvCy702yKh4BrUDhMYVfQEbdzH7G%2B2cqcsErx9KTDJcZKFN%2FKp3lT58C8E2AnATpUsFGQoIBu1R8l8zHPfXoJL0Y%2FYEW9GkgqcIwuVtbpqU34N6FBxnaTEmq0tQ4zgWbBlMZ2itcTd4UalVMs4iIirgnjpLTxgoUgyr4OWgOLsIj%2F7SafXRkm27qyGm52O3n6OZn9LuflucdWPPLtIXYohG9A8Ld7&X-Amz-Signature=c50d36a2be6bb3f2255ed9a3cb577872190fb539d829a85813e39fb6b1d5c0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBUUS7S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHSXvrffmXeH0NfeRUsnaQRHdB0UpcK82YVyePGnG6d8AiEAj7C%2FLzw0dlDLuOhAu5rcO0QGWYE7SlgWh67c4BcShBIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNxfAaAL7Jjcz2ow4SrcA2pi%2BkrU%2Bs3pJifROBWLdmmi6JT7AimzpjJEi5OkOPua1rRJIgcvZcwG2fjp6mW2gjyAa%2FUyyfRwtPKmxPQJ1x%2F5uxtHaeXt6algyNOE2j03PNKGyOmrYjc1U39oLz26GiEKiS%2B929MC4OXKIfjav3Uitsx9pp6WRKtEU3AIg22QOy8I%2BW5%2BhclqL2I%2BXvNhmt8O0wYbap5%2BwFH9VfYydWFK%2B5%2FtfzQi6%2BUJ6SLpuEbWoS6s1KwK8IMqL17abOjYn3Hw0ez5Bp0bYN1qiLUoe%2FnYpL1VV0043TvN%2FdnfnFL1hk9tpOtPUDhB1J1hxk0mX66fHzIOnkfuOhy7hvKyMtocRultB6hPK%2BcsmAecMXAShyrZpouM9axLRChsjUS%2F1t2uZe%2F4nLggZeyVH9SDw2vx3QsWu70S5mtlmmkpxWCNl9u7tXQNZWjigujf0zutxaCC7puoYUbka9xOGyBNkGFzq2hG2wrOfZWxD15iBSeR%2F3%2FsZa1GLzJqx9M7klH8QbMupxkvKnU1HwlTftKxZ%2BrtbiJft5xLnZA%2FwJmy6BkxgjSOrTVvgXnf2xk7tZLyPKgJ02MVqO2WlJbnNE8s9rQNHK2DxVB6Qi2J6w2oVZXxgksgVu1I9v5l4LD9MLKWvskGOqUBvCy702yKh4BrUDhMYVfQEbdzH7G%2B2cqcsErx9KTDJcZKFN%2FKp3lT58C8E2AnATpUsFGQoIBu1R8l8zHPfXoJL0Y%2FYEW9GkgqcIwuVtbpqU34N6FBxnaTEmq0tQ4zgWbBlMZ2itcTd4UalVMs4iIirgnjpLTxgoUgyr4OWgOLsIj%2F7SafXRkm27qyGm52O3n6OZn9LuflucdWPPLtIXYohG9A8Ld7&X-Amz-Signature=f1328752299498caf42f494ed0eda344d1fd923667a6a459ea73ba411c26cf48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

