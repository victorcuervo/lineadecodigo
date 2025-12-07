---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVES4YY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMV86xRR9NPh4Nl1lv4%2BLIxajJWOBRGzHV6OeSsiXEpgIgCQBlOfb6uTYR4ufAYuIPNAscdlhyg%2Br46klk4YBI7VUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0nHr%2Fbg118CkepUyrcA9buJ%2BWPPmY9TrCzYOXCpaUcdPUv37TXims7CXgrf8Hm5tRR0y2o2yvKf6%2BjcA2gRC6UFqEB8tpnRxnbibd48ldYy8xLVszPSlVZWPLRckFA%2FKQC6Si7yyS4Ht2xsk5FXHX1LwAUT5QjEF56qYqhtb6%2BtcHkN5BiwdPAZn5kcN9bz8tZomXCOrFw7vdPichI7vtJqvMNJf%2F9FCmGUlJSa%2Bl6I24btNqgNqbLR7LSV7iaVqI688ZIWTnC%2Bdp6%2FLaCQz3dRipzqi4a89MXZ8RR1mvDwrO076aPRkv3T9w1eNxPJuCUL%2F6qDTlBxXyt8YedjOLS2Mp3KhfC0k%2B4UjM3GoULlTI8wohSjN5eehdWq94Ul7K3LUFKt%2F%2FPhsGfZGhOAL7HwFRkVh81wXzaj7KXKly%2BliwtuwTCm7%2BWCnFo6W7hL08sjAYKvlUTmf0tw0I8jKyQmqDdxf8NpNnGCBCABvk7Rs%2FgGJYMsrn8VROnEFfacN0vRZjp4eeWweq4WmiDSiG3K0L%2BV%2BUJPsnVZYuwOlkFTsfVnfug0UUs%2BzNGdK1QQ2oz7gVnKojlXOsW3amzqtBohYqgAgzdPsPHb7uZMx6XlumxNCi%2BGz8LalCyzeKrLrjkU3p%2FpQwKWvckMPqo18kGOqUB1kt6p%2BDMeNjm1w%2FYMTY6TFhx7VboX8ay%2Fj4azpZdFHbiYoQFPGozLumOv8RTf8wbsd7FY1OhOQpRaYUYE0gFyLgyf%2FI13yp0kDtRCHL12rEKk1g0TojMw0%2F5RHmAJ2gNh2XDjEiZEI%2FQFjZ6HeL8Pl0BoxYsOZBBQhHR4TkMpPMjNB58GGztHai0yKayE3eyoJGNNpgrfMPHNyY9HRjEpzY4QsYA&X-Amz-Signature=27c613bc365cee1ea257d596d07c4f7eac4836b909a7e9efdda9714cf7f5cc37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVES4YY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMV86xRR9NPh4Nl1lv4%2BLIxajJWOBRGzHV6OeSsiXEpgIgCQBlOfb6uTYR4ufAYuIPNAscdlhyg%2Br46klk4YBI7VUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0nHr%2Fbg118CkepUyrcA9buJ%2BWPPmY9TrCzYOXCpaUcdPUv37TXims7CXgrf8Hm5tRR0y2o2yvKf6%2BjcA2gRC6UFqEB8tpnRxnbibd48ldYy8xLVszPSlVZWPLRckFA%2FKQC6Si7yyS4Ht2xsk5FXHX1LwAUT5QjEF56qYqhtb6%2BtcHkN5BiwdPAZn5kcN9bz8tZomXCOrFw7vdPichI7vtJqvMNJf%2F9FCmGUlJSa%2Bl6I24btNqgNqbLR7LSV7iaVqI688ZIWTnC%2Bdp6%2FLaCQz3dRipzqi4a89MXZ8RR1mvDwrO076aPRkv3T9w1eNxPJuCUL%2F6qDTlBxXyt8YedjOLS2Mp3KhfC0k%2B4UjM3GoULlTI8wohSjN5eehdWq94Ul7K3LUFKt%2F%2FPhsGfZGhOAL7HwFRkVh81wXzaj7KXKly%2BliwtuwTCm7%2BWCnFo6W7hL08sjAYKvlUTmf0tw0I8jKyQmqDdxf8NpNnGCBCABvk7Rs%2FgGJYMsrn8VROnEFfacN0vRZjp4eeWweq4WmiDSiG3K0L%2BV%2BUJPsnVZYuwOlkFTsfVnfug0UUs%2BzNGdK1QQ2oz7gVnKojlXOsW3amzqtBohYqgAgzdPsPHb7uZMx6XlumxNCi%2BGz8LalCyzeKrLrjkU3p%2FpQwKWvckMPqo18kGOqUB1kt6p%2BDMeNjm1w%2FYMTY6TFhx7VboX8ay%2Fj4azpZdFHbiYoQFPGozLumOv8RTf8wbsd7FY1OhOQpRaYUYE0gFyLgyf%2FI13yp0kDtRCHL12rEKk1g0TojMw0%2F5RHmAJ2gNh2XDjEiZEI%2FQFjZ6HeL8Pl0BoxYsOZBBQhHR4TkMpPMjNB58GGztHai0yKayE3eyoJGNNpgrfMPHNyY9HRjEpzY4QsYA&X-Amz-Signature=b6e4346d582b0821e93f588deb5c719de849735492a58124cc857b00d6e0db9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

