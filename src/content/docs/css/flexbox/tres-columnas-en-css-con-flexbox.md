---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOD5BRUT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFykaqiML87OvJ%2FByxi3c%2F21PXvJpQXtg8hjNKSj4oF0AiEAnW4eGpj2RuisbDqfwGU2OpLK5RmnddD7GK26zaYuwTIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8r%2FfMb%2FzWd%2FRiscyrcAyIDfz0Coqbv%2F9GAxlx3nukDPP76UNGQo%2Fy1HRDb2fxUAftXzL6B9AZ1st6zRKU7GJzIYAx%2FdipNiA0w5Mf9O0DE31ycSjKREtBex56tYsQ2xTEeOUnDQWDh25%2BzbTsWi2GsnBB%2BNkxraAlj09X8xXt24e%2Bwk3wKG4mulsx3ioYVezXvjmatiiYolc5SDmLn%2Fm2Os151I3h2%2FY7eUtzSWMgh5VoLzcgu%2FUpP52M2yjU9XUCyXzDQjJd7p9IbFjCOz8qgLtIBTB9IIeioAirJo0IkI3%2F4MvGVcyiILVMfLZls1yN27zNg%2Be6X0XYAbUxdCepX1RnWL1WXOmGYqjz2sVMvBwSpYuQpZQZE6ECOFQgjcCzmiC54y0oJvfStOraTFblHpWYPoHV6UhlvT0iNp7z6ukxIV5sJW5Tfcdq6mbYuAb%2BI0QrMa8ZaNE6SA85jZLuvaG03cb9wNu0gUFJebCHrnG3G1ZwQ%2BprJIXc7PJXpHR1kKEGKQO70%2BxMucXt8qQFpLkz5EDA%2BDMMovYu95q%2FsGwktg91XoBhGao%2B08LkK3uLfwZuyAy5R7isg2CActOBDTqfjpSu4Iv8y6T3wqfsErB68kdnryhY7lKq4CTCpCAgzJ73UymmRH2i4MMHQ2MkGOqUBcVh93lf4yzQ06MTaWuUAAsUfJbX1d6uCY%2Fgh3rgh%2FE1OhfVyWb%2F1FwSydJ5ouXRWeXofMuVbB49tqjZF4US0opEi6yX9ETuZUmIpUYlhcAWB%2BhRTUUgUisnbm2wzrEicBIE5dHPlJYhVyMSy42AFu27jmeY70PAb5TWaCHernHvqOOpbEBSLB5v4v2JOCTBsnqmGO3FpEiuFMijEM7sdOLId133C&X-Amz-Signature=cf6363189f2602f445c7824b475425fa8f4b5b4442d1fc8dc70044a92e5bdd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOD5BRUT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFykaqiML87OvJ%2FByxi3c%2F21PXvJpQXtg8hjNKSj4oF0AiEAnW4eGpj2RuisbDqfwGU2OpLK5RmnddD7GK26zaYuwTIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8r%2FfMb%2FzWd%2FRiscyrcAyIDfz0Coqbv%2F9GAxlx3nukDPP76UNGQo%2Fy1HRDb2fxUAftXzL6B9AZ1st6zRKU7GJzIYAx%2FdipNiA0w5Mf9O0DE31ycSjKREtBex56tYsQ2xTEeOUnDQWDh25%2BzbTsWi2GsnBB%2BNkxraAlj09X8xXt24e%2Bwk3wKG4mulsx3ioYVezXvjmatiiYolc5SDmLn%2Fm2Os151I3h2%2FY7eUtzSWMgh5VoLzcgu%2FUpP52M2yjU9XUCyXzDQjJd7p9IbFjCOz8qgLtIBTB9IIeioAirJo0IkI3%2F4MvGVcyiILVMfLZls1yN27zNg%2Be6X0XYAbUxdCepX1RnWL1WXOmGYqjz2sVMvBwSpYuQpZQZE6ECOFQgjcCzmiC54y0oJvfStOraTFblHpWYPoHV6UhlvT0iNp7z6ukxIV5sJW5Tfcdq6mbYuAb%2BI0QrMa8ZaNE6SA85jZLuvaG03cb9wNu0gUFJebCHrnG3G1ZwQ%2BprJIXc7PJXpHR1kKEGKQO70%2BxMucXt8qQFpLkz5EDA%2BDMMovYu95q%2FsGwktg91XoBhGao%2B08LkK3uLfwZuyAy5R7isg2CActOBDTqfjpSu4Iv8y6T3wqfsErB68kdnryhY7lKq4CTCpCAgzJ73UymmRH2i4MMHQ2MkGOqUBcVh93lf4yzQ06MTaWuUAAsUfJbX1d6uCY%2Fgh3rgh%2FE1OhfVyWb%2F1FwSydJ5ouXRWeXofMuVbB49tqjZF4US0opEi6yX9ETuZUmIpUYlhcAWB%2BhRTUUgUisnbm2wzrEicBIE5dHPlJYhVyMSy42AFu27jmeY70PAb5TWaCHernHvqOOpbEBSLB5v4v2JOCTBsnqmGO3FpEiuFMijEM7sdOLId133C&X-Amz-Signature=b6db900a6ed6a0093ab58dc57c3061533cbbaeaf9334e556cce10739462a3c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

