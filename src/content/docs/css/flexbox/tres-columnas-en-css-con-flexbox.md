---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZ7HBUS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlzN5pN3MPHxFXLKAfv5hpT8YSQ27%2BZ6rNxn8Ya8coJAiEAzO1peE7ITbFadizsAvGsL43gJHxj2Out1sKNY6zcTu0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOlAlw9vS6B4GQRUyrcAzBXKToESHjYKIWXAkc3YGuO9Z2j79Htk7VbMlekP8AN%2BnWVfq1kV23s%2BE1XL0ltvChSvTAF5iCR8cMLrs2RAJx2dp%2BBMhTImRpjCyR8IJNBhvas4dTrAJMvFvzQPJ81wWXS5ELkaWPtddUUrxJ1B7O1IHKuIUUFQg5OhqEWxnTNcz7cskZx3XXb0eQLVlAMPmueUc6Lg2685wed7w%2BqyPTLmNms74vuDvDHFvgqxR2bB5Yt99DW3Az5FYkfTYOdU6sIkGC%2BY0fva67P9XpreQ7108ly86F3I0YtvAhwP94y2qcXioJ9ZkKWuAxkXFppjZTeTsINUr1vFvaqMo4nKshmqf%2FykElkmbI08K%2F5ESw1nmHchvM7G%2BpQBSqDcoyeSbglNwqQFdbFSQcBdeIxs9gBrSyBlclTk6Gps4IaAh1sXKHkD3BGr01vk7kOPQ6NZ6OBTPhs7JlHCX%2BQOooAR83lzGiTjp6BRH8WtBPRAxfnnNb%2BZXMGao%2F3z%2BKSJph%2Bf8o33cak%2Bipx92fD9s%2FMVWJyt8Mns7Aph%2Bb1EEDRnpSqM1388idnVYpulfaESoqT7kPZnoBV0N49iMU%2BaiBzrkEB5JY3zien2s6qJQ1U0gNiyS6zJGycuQSQqdbRMLbu2ckGOqUBz7yrTeebx7D2ODJjC%2BmcmkkmgJz%2B63qbyfJSm%2FEvaT5ZuZn4wAHwXXoLJKnZrIldkNgvlFme3EyIBAcCA0lsQWN41aMH1BwhUM3ZlXuo2ZBDVoHwkGtok8CWJhGsQFOXUCSLrmiERNdQIP1bYuT2T3UHVGj4g%2BFFWgqM%2BjxhfNofufIN1SB7WxWgTFjEzCR%2F8XtBYYe%2F0z7nyYuazXD5yBHrWqve&X-Amz-Signature=f743a51b0a9d76b33352a09bc7c580e42f50570255da6667884fbdbc88bc837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZ7HBUS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlzN5pN3MPHxFXLKAfv5hpT8YSQ27%2BZ6rNxn8Ya8coJAiEAzO1peE7ITbFadizsAvGsL43gJHxj2Out1sKNY6zcTu0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOlAlw9vS6B4GQRUyrcAzBXKToESHjYKIWXAkc3YGuO9Z2j79Htk7VbMlekP8AN%2BnWVfq1kV23s%2BE1XL0ltvChSvTAF5iCR8cMLrs2RAJx2dp%2BBMhTImRpjCyR8IJNBhvas4dTrAJMvFvzQPJ81wWXS5ELkaWPtddUUrxJ1B7O1IHKuIUUFQg5OhqEWxnTNcz7cskZx3XXb0eQLVlAMPmueUc6Lg2685wed7w%2BqyPTLmNms74vuDvDHFvgqxR2bB5Yt99DW3Az5FYkfTYOdU6sIkGC%2BY0fva67P9XpreQ7108ly86F3I0YtvAhwP94y2qcXioJ9ZkKWuAxkXFppjZTeTsINUr1vFvaqMo4nKshmqf%2FykElkmbI08K%2F5ESw1nmHchvM7G%2BpQBSqDcoyeSbglNwqQFdbFSQcBdeIxs9gBrSyBlclTk6Gps4IaAh1sXKHkD3BGr01vk7kOPQ6NZ6OBTPhs7JlHCX%2BQOooAR83lzGiTjp6BRH8WtBPRAxfnnNb%2BZXMGao%2F3z%2BKSJph%2Bf8o33cak%2Bipx92fD9s%2FMVWJyt8Mns7Aph%2Bb1EEDRnpSqM1388idnVYpulfaESoqT7kPZnoBV0N49iMU%2BaiBzrkEB5JY3zien2s6qJQ1U0gNiyS6zJGycuQSQqdbRMLbu2ckGOqUBz7yrTeebx7D2ODJjC%2BmcmkkmgJz%2B63qbyfJSm%2FEvaT5ZuZn4wAHwXXoLJKnZrIldkNgvlFme3EyIBAcCA0lsQWN41aMH1BwhUM3ZlXuo2ZBDVoHwkGtok8CWJhGsQFOXUCSLrmiERNdQIP1bYuT2T3UHVGj4g%2BFFWgqM%2BjxhfNofufIN1SB7WxWgTFjEzCR%2F8XtBYYe%2F0z7nyYuazXD5yBHrWqve&X-Amz-Signature=c0ae6438f535be39c9862ca3ec9f9d521619c56beb3757cb68c3502e757eb0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

