---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FIYVWJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0PgNEXE0xGXtabFzYCRyxLwCtqEMJc%2BB8ECH1kVP6IAIgQXmHdyPh8HabZW%2Foio6apgHWwzMqw17I2GRIn%2Fl1CuAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHljDCB6ZyRDDpBhLyrcA5uSJQyHfGdiRvB9VEKTTaG5YaF2KqVR2dkajdW5%2FjTvEIq0oK431oM%2BsOfqGiEOLnAtUP5EDzXeUk%2BMmeBC3FTJ1p3E%2BHpQq3PEyMwQvJfMGk3PZCiWH1el83C3B6Sr5YlH0SKrpHWTncbD3TKmYn%2FFH4%2Fv4dzdoDoUieTzNriUfdverWF%2BKGQO2YtiwaaY5V9ATMNBGWZqyf4XlhfNdFFNORkkKbxSXZSOwuwxQHDxr6sdhQ651PmnTeZ%2FqJLQR%2BQ1KigFJeicbwvd36qmiW3%2Fj%2FlfNqC81fFsWEBhbsWWCxOrxRGetKQAxBbrxb%2B%2BIXo%2BrBi%2BNWw%2B45YsjpwhXIIiH64x9QksfTZc4YQz5oKZvA%2B0lN3%2F2RWRCJ%2B%2FuANujrPy98pXiY0k8sOeqdQQ1fT2vV2BrgegfoZywwBSIIy1Lmkz2xUUp%2FyBRfj270S1Y3sxkhZY%2B190UPqaMMVnHekC9Y6Qr%2BKwYhoEySd92IAbFdb%2Fq%2Bz4qEBYc7y0DrPkIHVWSCq26eAnfOMVmoKq6f3GXBZPz1g90ynGX75YNqGnqN8WoThNL90W8ZCfX8CcAlM%2FO2Fmpw5ef7JJj4XcgrNbwYjtLCYD%2BWlxWBOMvKjj%2FSGZVPoi%2Baz3%2FO9MMPim0MkGOqUBQxLhHaDhiJkQf5wztTdjNEpkLn8XAqxhUPUjOG5WbqA8sZPAnlXBY48cBNctXSbCzZJ2%2F75mVY%2Bj2R0SeC1Rnwh6xOclW0c%2FzwmyPhJ%2FcWleJqyYrRU0%2FE9yXxkzA2fw1vzua1YhcEGnLtcE1KOnEYpwrHijlWLF1wQge20dBoX8yxd7rWb28M%2BjA4GwMc0jiUc9R3nHZUUkTkD74y1njiIMRPg5&X-Amz-Signature=617ba9b9dd79c040dfffba4b5b6a6b817b8020257044c9c6cf03c8a73ec3e923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FIYVWJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0PgNEXE0xGXtabFzYCRyxLwCtqEMJc%2BB8ECH1kVP6IAIgQXmHdyPh8HabZW%2Foio6apgHWwzMqw17I2GRIn%2Fl1CuAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHljDCB6ZyRDDpBhLyrcA5uSJQyHfGdiRvB9VEKTTaG5YaF2KqVR2dkajdW5%2FjTvEIq0oK431oM%2BsOfqGiEOLnAtUP5EDzXeUk%2BMmeBC3FTJ1p3E%2BHpQq3PEyMwQvJfMGk3PZCiWH1el83C3B6Sr5YlH0SKrpHWTncbD3TKmYn%2FFH4%2Fv4dzdoDoUieTzNriUfdverWF%2BKGQO2YtiwaaY5V9ATMNBGWZqyf4XlhfNdFFNORkkKbxSXZSOwuwxQHDxr6sdhQ651PmnTeZ%2FqJLQR%2BQ1KigFJeicbwvd36qmiW3%2Fj%2FlfNqC81fFsWEBhbsWWCxOrxRGetKQAxBbrxb%2B%2BIXo%2BrBi%2BNWw%2B45YsjpwhXIIiH64x9QksfTZc4YQz5oKZvA%2B0lN3%2F2RWRCJ%2B%2FuANujrPy98pXiY0k8sOeqdQQ1fT2vV2BrgegfoZywwBSIIy1Lmkz2xUUp%2FyBRfj270S1Y3sxkhZY%2B190UPqaMMVnHekC9Y6Qr%2BKwYhoEySd92IAbFdb%2Fq%2Bz4qEBYc7y0DrPkIHVWSCq26eAnfOMVmoKq6f3GXBZPz1g90ynGX75YNqGnqN8WoThNL90W8ZCfX8CcAlM%2FO2Fmpw5ef7JJj4XcgrNbwYjtLCYD%2BWlxWBOMvKjj%2FSGZVPoi%2Baz3%2FO9MMPim0MkGOqUBQxLhHaDhiJkQf5wztTdjNEpkLn8XAqxhUPUjOG5WbqA8sZPAnlXBY48cBNctXSbCzZJ2%2F75mVY%2Bj2R0SeC1Rnwh6xOclW0c%2FzwmyPhJ%2FcWleJqyYrRU0%2FE9yXxkzA2fw1vzua1YhcEGnLtcE1KOnEYpwrHijlWLF1wQge20dBoX8yxd7rWb28M%2BjA4GwMc0jiUc9R3nHZUUkTkD74y1njiIMRPg5&X-Amz-Signature=68fc517c087ca656d0d287b0715bab7448e0a69a9187a98f9bc2e0737746c091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

