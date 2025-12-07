---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QQGSRM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC94SGPPBS%2B31VR769SZ%2Fekhu154CPN%2FshYOOIE4gugMQIgDlu5KwFJx1RHunh9yBa2w4ZeTx0Pl7Dt9vmjENhI0AEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9f9lrfdxJzmXMk3CrcA%2BxINN3lAMcHoLH%2FGKtal7dq8B1SlECtT3ll3F7rNblmQxQOBalxtS0AG6BCckheMzp%2BaoXmQ2UDau8Xq8%2F3vMtpjs%2BH0tPyPp%2F8YROyiAzFC89MlAqjZS0OZpWQYtjGWWAfEkNihQgzz1YrdGSLpYcxOS%2FMequ4D2xh9mD6qEpUYyiW1SuHC8yZLMjI%2BroB1trXx7L829QmbnGQvC2qGDryCd7Z9elKkCWR%2FtTAt9bXMNfuCjra986A4PnYp5cA2nwAvsSKFNiLzqZztBNNC%2Fh9Q%2FzfM5UX5oalZJ6kM8KKdETyt6cZHg6zIMoRNA%2FPW%2BzC7z%2FsvBRS2QIJJFwLAzlGYm4eBk9YAj41kqN56b6Fl8DMWDYl8XE5xmg5hnutqobN%2BogDRd%2BEVfhfne6GOKYPrALBncqPIAWY8lR3VTpYoSvMzimBJ2D%2FGJzdA5OXS2%2BujDi1LIeTZYyOaygQX2JxViXmA6MZ1bUGWnTdg6TLFAC3m9J304Bc3BU9RQyEZ8cejZK8xLJbFah1mglcTTZAufxBsZArZZTqjiMJjf0SQ%2BLtEYzzGDMN7pc7x%2B1pRs5fDf5obmgtHNJsSN5Loah5yGeuvGBUHgblGMen3GzIvDxpPgM1kHj1YPHnMPTH18kGOqUBE9jk2atRM82SeDR2kdzoLy6zRsK5K0auqAlpQx8GowLSMLi5FxzXHcAHaolORYPKuJop%2Bl88axB0Zh7uDSuNSy9c3tFcdAPyY7N8gOfuaMZuFklJvE5y42gC%2FMH%2BPHiT%2BG32HgHO%2BHC%2BWF7AaakX1yQ4FqPJtB37clqVjRtWNz5iPgJqOXlK6eC94JqZfl%2FzpXOyRiKyBTnuSsJGfHBHRi9RVzOE&X-Amz-Signature=d1379ef2687024ade88336889080b97fb0bf8caee2e73c2ff8bed31c5f278a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QQGSRM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC94SGPPBS%2B31VR769SZ%2Fekhu154CPN%2FshYOOIE4gugMQIgDlu5KwFJx1RHunh9yBa2w4ZeTx0Pl7Dt9vmjENhI0AEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9f9lrfdxJzmXMk3CrcA%2BxINN3lAMcHoLH%2FGKtal7dq8B1SlECtT3ll3F7rNblmQxQOBalxtS0AG6BCckheMzp%2BaoXmQ2UDau8Xq8%2F3vMtpjs%2BH0tPyPp%2F8YROyiAzFC89MlAqjZS0OZpWQYtjGWWAfEkNihQgzz1YrdGSLpYcxOS%2FMequ4D2xh9mD6qEpUYyiW1SuHC8yZLMjI%2BroB1trXx7L829QmbnGQvC2qGDryCd7Z9elKkCWR%2FtTAt9bXMNfuCjra986A4PnYp5cA2nwAvsSKFNiLzqZztBNNC%2Fh9Q%2FzfM5UX5oalZJ6kM8KKdETyt6cZHg6zIMoRNA%2FPW%2BzC7z%2FsvBRS2QIJJFwLAzlGYm4eBk9YAj41kqN56b6Fl8DMWDYl8XE5xmg5hnutqobN%2BogDRd%2BEVfhfne6GOKYPrALBncqPIAWY8lR3VTpYoSvMzimBJ2D%2FGJzdA5OXS2%2BujDi1LIeTZYyOaygQX2JxViXmA6MZ1bUGWnTdg6TLFAC3m9J304Bc3BU9RQyEZ8cejZK8xLJbFah1mglcTTZAufxBsZArZZTqjiMJjf0SQ%2BLtEYzzGDMN7pc7x%2B1pRs5fDf5obmgtHNJsSN5Loah5yGeuvGBUHgblGMen3GzIvDxpPgM1kHj1YPHnMPTH18kGOqUBE9jk2atRM82SeDR2kdzoLy6zRsK5K0auqAlpQx8GowLSMLi5FxzXHcAHaolORYPKuJop%2Bl88axB0Zh7uDSuNSy9c3tFcdAPyY7N8gOfuaMZuFklJvE5y42gC%2FMH%2BPHiT%2BG32HgHO%2BHC%2BWF7AaakX1yQ4FqPJtB37clqVjRtWNz5iPgJqOXlK6eC94JqZfl%2FzpXOyRiKyBTnuSsJGfHBHRi9RVzOE&X-Amz-Signature=9b067684b638cac6b8dd567fbd07f86e62b91c46bbfa6011cd66fcd9f7e7688d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

