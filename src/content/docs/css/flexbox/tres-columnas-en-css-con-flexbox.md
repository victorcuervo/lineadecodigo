---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIYMAAP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb8VP%2B%2FkU9%2FcCQ3tEQ3vL2sPbpLmD1XNNBmnkZ%2FvyVnAIgc%2FOm4mXCaFhjNWw%2BpFH3GBOdUvIXOvv7LWHb94VtP5Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDKF%2Fh%2FawJKY6WV0EyrcA%2FZERzW4YZDaHdUVMtV0WVuytLM4JJPoEiw5IhnQQC63TCGJ7H6V%2BiGFOjc%2BCrrN%2FxAk%2Bm%2B7PTDCBdv1U%2FhldBYgiUe%2Fb71f1FjaVuXr0Sf9C6FZmlZr34Cw1AvD9PR7y6M6UgJlPH3q3n0xDA2q5wJ%2Bm%2F7q7a90pa%2FORs5h4iXh4Sd5wGfU2byKIF%2BNUNy9v2dddkklwNk7pAHTAVwVbzFDS6Lv3lDfe0Q%2Beea6zk9%2FDABtzMbDUXdHOy%2BI89egtC7mZ%2BDpa%2F0usHDQWA2DRUBQZd0gdnaIGSL9egfxdc144kWr609pEHjOlbsiatcYJaOroOYn0OtHs4p0aaG1kmFwN%2B24Y0RurwIEFbiiqRTlH2bYtew5ycdUReIhdLukM0%2F%2FXm77XE4d9HGoGLgluPdi8mAJ54gZIjdCSXMHiof65FSxYBjVobtXvh3G51PrLkhzC17%2FbaN55%2FM1K5hED0vUmt%2F8PrgITgLex6%2Fra1a3wIJGLnD4V8cawaSSPesJdPK0TP6MFNPm6dhTYqN5zk69X%2BxxZDynr1BXaGNPXKXT9Dw2mHekdw7RUXiFoc3Az3uAKGDuC9Yd0VtZR7A%2FVnqhRnqd%2FtF%2F0%2B6q9IMo1JWcQJqcOwzWMwglxhNlMIqsyckGOqUB3fy4y%2FWk9y3CAKRsvuKh599AtdyPPwk6%2BID6XQIUvcwOi60u35%2FVc6pp1LA4PZH07xadByu1Xu4hWysteUgjF5H%2FMAxTdmSW8N9ol%2B5UeMEr%2FcDAa%2FChQOMEec0CIkU%2BGLtWzxlSvjCnOgw1hvhP5mn%2BCKTyz1E6BwJaighk8W5Tn%2BUjs0CYun3hyzXJlafcnrpiisYUBFdLEukJW21jCcrT%2F8cy&X-Amz-Signature=d238cf3b353e10bf5fed5833760f4537c773ebad13279cc719ca4f2c566ef57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIYMAAP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb8VP%2B%2FkU9%2FcCQ3tEQ3vL2sPbpLmD1XNNBmnkZ%2FvyVnAIgc%2FOm4mXCaFhjNWw%2BpFH3GBOdUvIXOvv7LWHb94VtP5Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDKF%2Fh%2FawJKY6WV0EyrcA%2FZERzW4YZDaHdUVMtV0WVuytLM4JJPoEiw5IhnQQC63TCGJ7H6V%2BiGFOjc%2BCrrN%2FxAk%2Bm%2B7PTDCBdv1U%2FhldBYgiUe%2Fb71f1FjaVuXr0Sf9C6FZmlZr34Cw1AvD9PR7y6M6UgJlPH3q3n0xDA2q5wJ%2Bm%2F7q7a90pa%2FORs5h4iXh4Sd5wGfU2byKIF%2BNUNy9v2dddkklwNk7pAHTAVwVbzFDS6Lv3lDfe0Q%2Beea6zk9%2FDABtzMbDUXdHOy%2BI89egtC7mZ%2BDpa%2F0usHDQWA2DRUBQZd0gdnaIGSL9egfxdc144kWr609pEHjOlbsiatcYJaOroOYn0OtHs4p0aaG1kmFwN%2B24Y0RurwIEFbiiqRTlH2bYtew5ycdUReIhdLukM0%2F%2FXm77XE4d9HGoGLgluPdi8mAJ54gZIjdCSXMHiof65FSxYBjVobtXvh3G51PrLkhzC17%2FbaN55%2FM1K5hED0vUmt%2F8PrgITgLex6%2Fra1a3wIJGLnD4V8cawaSSPesJdPK0TP6MFNPm6dhTYqN5zk69X%2BxxZDynr1BXaGNPXKXT9Dw2mHekdw7RUXiFoc3Az3uAKGDuC9Yd0VtZR7A%2FVnqhRnqd%2FtF%2F0%2B6q9IMo1JWcQJqcOwzWMwglxhNlMIqsyckGOqUB3fy4y%2FWk9y3CAKRsvuKh599AtdyPPwk6%2BID6XQIUvcwOi60u35%2FVc6pp1LA4PZH07xadByu1Xu4hWysteUgjF5H%2FMAxTdmSW8N9ol%2B5UeMEr%2FcDAa%2FChQOMEec0CIkU%2BGLtWzxlSvjCnOgw1hvhP5mn%2BCKTyz1E6BwJaighk8W5Tn%2BUjs0CYun3hyzXJlafcnrpiisYUBFdLEukJW21jCcrT%2F8cy&X-Amz-Signature=e7e9da0c6e8fa14402a90e11006b9ded2b92124cdf330eb0e4c2c4407adc319f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

