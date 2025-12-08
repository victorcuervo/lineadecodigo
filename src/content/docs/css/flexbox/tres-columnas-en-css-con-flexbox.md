---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILIOWVZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8dLN5EKUqgjjO76EhOa2x3RLerL3jbwwlubLMYJiyAIhALR3bHUxAczsIaqY%2B8BBx2%2BjCigEaEeTHKHqojC84OENKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh5jvx5cxsPq4ajYsq3AMUF8zgI1EvYL0OtYFx65tPIiuZkvlf7ky7rdC%2BIlW2uk8XlJH32ykcIdPrmOLzN2we4PQwt2IJMB5ivuZGFxi%2F7qzABNvh5YUr4%2BlnkPKp%2Bh8zpM4gRIAExQcWR1%2BHDwgYOGdhZfEnC%2BFZroBH1sXZDD3myrz1jbu2Hrf6BDcByfXhQGn88%2FBuBBVUc2Y%2FCLl9W7u5rt0KqEAaUSAeSeEmc%2BztSMxVuics6lQcLi5utHxq9xQ7dVFna52Iwc%2B%2F022%2Fdax7nBcMj2xowusU6MQ89xb0WmT3ExJrnhxXvP2SY3AkfTOOrINBivkKDhKNQaq3ci8TP5N%2F8rjQzSFffGUxhJ6Btb3gPuzFblPASFhhsETLymtWFG%2BZGQjmQt6JEiXo1p3Amq5JivkoggPl83lI5wAuhL3g3nUrYDckCK2sAUvJUnvADuojbeQw8LJrB3uBGmsUn%2FYNaBszbqdP%2FmfwaWAKjnEF3k3VEixOeU43upFFbRjyMRsFlHqKRZ97d37cc8xSwG1TmfC%2FXDzS5iYjz%2BC7bpC%2BnDnL%2Fz6NEZbtuiuaS6I%2Fwf2dG9eTHKvryosADkyn7GlF6CLpWu%2Bc%2BZfm2NDcqGEVamq7TfCJcr%2Bd%2FLW4AI0l5cz5DzgvWzDylNnJBjqkAc8qkD7kyxV8YbvEyo%2FANPeIoujhl2Vuf1D4ZEe1QaWsAgx5pgTItDz%2FN63xHQKvxg08wFnWuqmgprntxIU%2BIHMtMeazKSM6iI3NuABWNRCyOi9YjLnOXpVpRv4XtsZwT%2BGMxxTbsNxmAWD6NopWylvybBdHCgSMoTDlIjeIzpGBiO3TQ4niEZ1TYCWokx9gZmyM7dRxvEjUvumTIWwoKmN21Dpk&X-Amz-Signature=4941952792e4eb46cbafac0afff61eb3042d4f0dce4f713581bb38d85c688b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILIOWVZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8dLN5EKUqgjjO76EhOa2x3RLerL3jbwwlubLMYJiyAIhALR3bHUxAczsIaqY%2B8BBx2%2BjCigEaEeTHKHqojC84OENKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh5jvx5cxsPq4ajYsq3AMUF8zgI1EvYL0OtYFx65tPIiuZkvlf7ky7rdC%2BIlW2uk8XlJH32ykcIdPrmOLzN2we4PQwt2IJMB5ivuZGFxi%2F7qzABNvh5YUr4%2BlnkPKp%2Bh8zpM4gRIAExQcWR1%2BHDwgYOGdhZfEnC%2BFZroBH1sXZDD3myrz1jbu2Hrf6BDcByfXhQGn88%2FBuBBVUc2Y%2FCLl9W7u5rt0KqEAaUSAeSeEmc%2BztSMxVuics6lQcLi5utHxq9xQ7dVFna52Iwc%2B%2F022%2Fdax7nBcMj2xowusU6MQ89xb0WmT3ExJrnhxXvP2SY3AkfTOOrINBivkKDhKNQaq3ci8TP5N%2F8rjQzSFffGUxhJ6Btb3gPuzFblPASFhhsETLymtWFG%2BZGQjmQt6JEiXo1p3Amq5JivkoggPl83lI5wAuhL3g3nUrYDckCK2sAUvJUnvADuojbeQw8LJrB3uBGmsUn%2FYNaBszbqdP%2FmfwaWAKjnEF3k3VEixOeU43upFFbRjyMRsFlHqKRZ97d37cc8xSwG1TmfC%2FXDzS5iYjz%2BC7bpC%2BnDnL%2Fz6NEZbtuiuaS6I%2Fwf2dG9eTHKvryosADkyn7GlF6CLpWu%2Bc%2BZfm2NDcqGEVamq7TfCJcr%2Bd%2FLW4AI0l5cz5DzgvWzDylNnJBjqkAc8qkD7kyxV8YbvEyo%2FANPeIoujhl2Vuf1D4ZEe1QaWsAgx5pgTItDz%2FN63xHQKvxg08wFnWuqmgprntxIU%2BIHMtMeazKSM6iI3NuABWNRCyOi9YjLnOXpVpRv4XtsZwT%2BGMxxTbsNxmAWD6NopWylvybBdHCgSMoTDlIjeIzpGBiO3TQ4niEZ1TYCWokx9gZmyM7dRxvEjUvumTIWwoKmN21Dpk&X-Amz-Signature=c26d975030dc44a1859db35bd0afc62ab21289e49d534448051cf1fd231d19ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

