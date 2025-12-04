---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWZ6FIK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCyXivebbLG45i19yUCL7b9lrcAHPsX2hWysi5sPdxpBgIgOAO5rwdX1Bm8HUH3ejzgo5Qzwrn3c6lHgp2BJbXGkrsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDF9Si1swwPWqdoCDeircA%2FfEK7%2BmAuIJbJsysm%2F%2FDu08dw%2FxmpETlPpUiXJA3V22WOb8j7s5EmdPRRKrtmjYdHfH0uUCOSIeUum9xLOULm9BN4NiMdUKjya4ZFJEl%2B%2FR%2FhZapWP0S8hIiR58eTS4uPPO5D3VkqZ6psNBouN1doRGDoOjyuZ5BElZHaVn7nyUd0UrkjS6V26agjbJeV9sQwBYwgvVPe0nSr7WU6kOLYWB0PyUKchHCdQKe76Nat1Br0SPH2F3bmO2n0aPVYNaixRNdiO0YGx7zSynbddUmH8I%2F2ipOqOUcs49IjifgwL2YzgUZAaHP1RIIUC71fP%2Bh3rJywI8Ccb2u2s5Oz9IHq2SUfHYhfTL01sHZ0asKCFeW%2BRF1hF4kDRoxXtQdLq%2B%2FIOb5QnsNoyZSLOEofTQImizrx7u83b4u7LycdK%2Bl8RfXw7oAcIWGUL0z%2FG9PCaQeAehBUgH9RNlto0uMCTwQzXKMtsMdULEuI8W12dpIBulHFI3OW4pJxCLg5X0Eh1LzCnFzdoUtmptjkWvyPtZtNMVCA0iAEYES43%2B5HJYR2lYu%2BuD%2BaAVR27kM2hpftXUBjbek1b0SJ1rLZJ%2BwGNhsVx0LEhI%2Bs0W3UV7XPqUW%2FxLsubYTws1HWu%2F1ozKMNqExskGOqUBJR2Uw0arLNgX55PX2ozDd3ACiMaMyEWOkSGKNNIoGlKvIskRcjiSFWBZeYqqO3QuXCYFxc4LuIhf70fyqeAIZQFXKv3kv%2F8hkJ%2B%2Bm%2BsrcwfUM35oll2PBXcuHVXNSOhAc3DRtfJISJa9Fkv1Cns20cxrkLu8aKAaECTwIg2o%2FipP1wc2LBzf%2FT%2BB7vLxAlJYuo%2BF6kdayhhe6sSHgR7wjZ9n%2Bki7&X-Amz-Signature=7985d31cd44cd19e5dd0ab1ab09952181fb160eb4603b5b47613d70a28794b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWZ6FIK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCyXivebbLG45i19yUCL7b9lrcAHPsX2hWysi5sPdxpBgIgOAO5rwdX1Bm8HUH3ejzgo5Qzwrn3c6lHgp2BJbXGkrsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDF9Si1swwPWqdoCDeircA%2FfEK7%2BmAuIJbJsysm%2F%2FDu08dw%2FxmpETlPpUiXJA3V22WOb8j7s5EmdPRRKrtmjYdHfH0uUCOSIeUum9xLOULm9BN4NiMdUKjya4ZFJEl%2B%2FR%2FhZapWP0S8hIiR58eTS4uPPO5D3VkqZ6psNBouN1doRGDoOjyuZ5BElZHaVn7nyUd0UrkjS6V26agjbJeV9sQwBYwgvVPe0nSr7WU6kOLYWB0PyUKchHCdQKe76Nat1Br0SPH2F3bmO2n0aPVYNaixRNdiO0YGx7zSynbddUmH8I%2F2ipOqOUcs49IjifgwL2YzgUZAaHP1RIIUC71fP%2Bh3rJywI8Ccb2u2s5Oz9IHq2SUfHYhfTL01sHZ0asKCFeW%2BRF1hF4kDRoxXtQdLq%2B%2FIOb5QnsNoyZSLOEofTQImizrx7u83b4u7LycdK%2Bl8RfXw7oAcIWGUL0z%2FG9PCaQeAehBUgH9RNlto0uMCTwQzXKMtsMdULEuI8W12dpIBulHFI3OW4pJxCLg5X0Eh1LzCnFzdoUtmptjkWvyPtZtNMVCA0iAEYES43%2B5HJYR2lYu%2BuD%2BaAVR27kM2hpftXUBjbek1b0SJ1rLZJ%2BwGNhsVx0LEhI%2Bs0W3UV7XPqUW%2FxLsubYTws1HWu%2F1ozKMNqExskGOqUBJR2Uw0arLNgX55PX2ozDd3ACiMaMyEWOkSGKNNIoGlKvIskRcjiSFWBZeYqqO3QuXCYFxc4LuIhf70fyqeAIZQFXKv3kv%2F8hkJ%2B%2Bm%2BsrcwfUM35oll2PBXcuHVXNSOhAc3DRtfJISJa9Fkv1Cns20cxrkLu8aKAaECTwIg2o%2FipP1wc2LBzf%2FT%2BB7vLxAlJYuo%2BF6kdayhhe6sSHgR7wjZ9n%2Bki7&X-Amz-Signature=2b8f3790378e27ca9f94afa76f2ad75b737628980a1d990d7c83298f0b81dfae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

