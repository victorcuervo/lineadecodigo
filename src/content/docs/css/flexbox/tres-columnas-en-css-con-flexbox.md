---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQ6RF45%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDPRYk9R5yEf3pb%2Fc1%2FOUYQxjMoIqdpnoXNMDLTmG9MdQIgOErBve6Ca%2F2%2BpzSsX3ZCg2Dsfw6IrjaF5HUfhMw0uPsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIqEQJeZuftWYP8iaSrcA4fUZkiNnkkVaDfXpHxk%2BZcxHwTi5HaGlWEkMSvFbHzl5pRtfF%2BkhpC8lVDQGExdqAc1QEoCWM84ifJ6AuCVQ8Gx6VzwxEWCuikN1mms7OcL6oF8SYyZEwGmaKiOBA5tefvrtSUD81Bxn7JYXvK4PdvFgcoSGRVPS0hsr8JzEyQg2WSKlpgfbhzWfEZw40XjokRGidGOkQBgLUdm3vzrolIgk8GXH7IVElAVfYyfCwhyX7fKKRVCZyKg1q1leimvWf47K9HWaDYfy1B0LKY1eihZbM7rZi8CYZlsz54pVbQBPCaTaOPX9GJu6%2BADW0QLJPJ%2FWUJz6Jvt%2ByM%2FXa6zMbkESr69cvukM6U1YiyMnOPcdR%2BNFYQW8VW1fazESiBSjNN97tR1l5%2FTbE%2FINE6U0qG3Ex%2Bg036xg5CA61pX91lIefkQuOJguePKdSqDbDZh0RaMPvi7jcubs6O5koPK9guKaBBBisyS3kQg7CdtvxyI%2FlKw2aHci4J%2BeXHNUuzWneLkccl67%2FuN7LA5A%2BCI7CJeeQ3lDKdg%2B3zE6NLmryFRABBYtvWG4eb7%2F%2BQp9dPA2rSfKPG3KQlxsa5WAIPtCMkt5A2JYWgKu%2FEIBbrSXvFCcAzqUoTlpGs3hJ9XMM2GxckGOqUBQYV7dp%2FcGPLum4FmXwg65TM34n%2BJ41udlFu7EMxm%2BI6C4299cE45Xkga6IitvUKJ3aUM%2FmVDG4fvMNCQs2r8uN57Seh5AyCDiM5xfNGMgF3Z79PUMAzAcgA%2B4gipWrUT0hkfQsDbOx1GB5INJyS82rnSDifSugE3WRjPLoq0oWOla6hevp1SfHN4GO5uk4WgNKWbulDJTtUO6QcEYZcaYWykxydj&X-Amz-Signature=e4e77ae5fd757b4b5213de6177f1f6dd34f15287153c13683c4894d0ef30588a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQ6RF45%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDPRYk9R5yEf3pb%2Fc1%2FOUYQxjMoIqdpnoXNMDLTmG9MdQIgOErBve6Ca%2F2%2BpzSsX3ZCg2Dsfw6IrjaF5HUfhMw0uPsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIqEQJeZuftWYP8iaSrcA4fUZkiNnkkVaDfXpHxk%2BZcxHwTi5HaGlWEkMSvFbHzl5pRtfF%2BkhpC8lVDQGExdqAc1QEoCWM84ifJ6AuCVQ8Gx6VzwxEWCuikN1mms7OcL6oF8SYyZEwGmaKiOBA5tefvrtSUD81Bxn7JYXvK4PdvFgcoSGRVPS0hsr8JzEyQg2WSKlpgfbhzWfEZw40XjokRGidGOkQBgLUdm3vzrolIgk8GXH7IVElAVfYyfCwhyX7fKKRVCZyKg1q1leimvWf47K9HWaDYfy1B0LKY1eihZbM7rZi8CYZlsz54pVbQBPCaTaOPX9GJu6%2BADW0QLJPJ%2FWUJz6Jvt%2ByM%2FXa6zMbkESr69cvukM6U1YiyMnOPcdR%2BNFYQW8VW1fazESiBSjNN97tR1l5%2FTbE%2FINE6U0qG3Ex%2Bg036xg5CA61pX91lIefkQuOJguePKdSqDbDZh0RaMPvi7jcubs6O5koPK9guKaBBBisyS3kQg7CdtvxyI%2FlKw2aHci4J%2BeXHNUuzWneLkccl67%2FuN7LA5A%2BCI7CJeeQ3lDKdg%2B3zE6NLmryFRABBYtvWG4eb7%2F%2BQp9dPA2rSfKPG3KQlxsa5WAIPtCMkt5A2JYWgKu%2FEIBbrSXvFCcAzqUoTlpGs3hJ9XMM2GxckGOqUBQYV7dp%2FcGPLum4FmXwg65TM34n%2BJ41udlFu7EMxm%2BI6C4299cE45Xkga6IitvUKJ3aUM%2FmVDG4fvMNCQs2r8uN57Seh5AyCDiM5xfNGMgF3Z79PUMAzAcgA%2B4gipWrUT0hkfQsDbOx1GB5INJyS82rnSDifSugE3WRjPLoq0oWOla6hevp1SfHN4GO5uk4WgNKWbulDJTtUO6QcEYZcaYWykxydj&X-Amz-Signature=4477534d4d51942af0b1cfad59fba18d13862bd9efe00403561eeb0ce5d56df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

