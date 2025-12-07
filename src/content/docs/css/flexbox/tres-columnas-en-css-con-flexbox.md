---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYBTOF3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7K%2B9oACrnVjRtWDfIbzZTPWm6sYe%2BjOp4avFehlHnRwIgQn%2Bf6o4T70%2BBSIZRbm3OrkSlniSzGwz932yCZ2teKPkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B2oycJ5dGyD9k1QircA%2BFGGCfSEGyuKDA26mUkxGrr34zdMsriVnbhnUND6NoBX5x1DdTn6DonVRhToTCAFT%2Bufo%2F%2Ff%2BY2kL02EaKll4OcA9TQLxPOfUqjHcTOjIIaavPxI5rWraBxeq2kIvlq2P7XZCWh1YgLLkiic%2Fs4x5oTtTodu%2BXHoRnY%2FmzGyIcm5mWT947cioiw7J3Ix1gfpWU%2BZBlcZvU3LM38qM8IiNQog%2FiiXmt3PGrrza%2Bbw%2BGviQh2UGUVfqJIi1OWNQbh9zJltUbwDWvV%2BDJ5W9Fuc9T%2B6bmuD7mwxOtph%2B6o2ShmCRgIaostCGLfm97kp8sqcEqoFSuWnatWy7cE1aYGushySe%2Fv5OqZFBJYiO6HEgrT78OrRczzqxQ%2FY4T%2BbJ%2FRQalb0YmzQ6ySRoovTlljWv%2BMeMdapteJb1nud1kV9Dwhh7uMrtMl0YMnN7bM57dN6riMwnIe90RT4Vah68bFjhBwIGgfEzyTJcwWl3nUWrEN0I%2BLmf62AE9C87%2BoB8e5W49Ip0%2B%2BbP3o1D7PrM16hX6Gn%2Fvq8v4vJbYynZaOkpklTsxaSeyeMf1zpGwjLbphwMuVOnT4rydySwKvZ3jd2lHJVKosKVpBDQnu4pW%2BY07ToImalHbo5YUgwhotMM271skGOqUB2EEjVitls6CKRtfU6YFsRPreBvuS1f59m2zcAd0JNkoxBrMyVPvwQohxOPUKtFZ2VIRlA%2FTMvluhg6faFj2OhPMS9bAHdGZMZntEJXVXhVZceE0GpEB4DvQEdqTKcdd6%2BQZHQK1O%2FvzRHI7rH4hPkQAp9i%2Bdk5mde1MYGyK8iGw1WLYDCCpAZJ6N0JmM0vekrqCxRDtDHmBqrinS2jrlXdPIQIMb&X-Amz-Signature=dd3c0d036329e86964250ab2244fead1329aa2dad56ce8b2ca68e5fae6e5d3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYBTOF3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7K%2B9oACrnVjRtWDfIbzZTPWm6sYe%2BjOp4avFehlHnRwIgQn%2Bf6o4T70%2BBSIZRbm3OrkSlniSzGwz932yCZ2teKPkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B2oycJ5dGyD9k1QircA%2BFGGCfSEGyuKDA26mUkxGrr34zdMsriVnbhnUND6NoBX5x1DdTn6DonVRhToTCAFT%2Bufo%2F%2Ff%2BY2kL02EaKll4OcA9TQLxPOfUqjHcTOjIIaavPxI5rWraBxeq2kIvlq2P7XZCWh1YgLLkiic%2Fs4x5oTtTodu%2BXHoRnY%2FmzGyIcm5mWT947cioiw7J3Ix1gfpWU%2BZBlcZvU3LM38qM8IiNQog%2FiiXmt3PGrrza%2Bbw%2BGviQh2UGUVfqJIi1OWNQbh9zJltUbwDWvV%2BDJ5W9Fuc9T%2B6bmuD7mwxOtph%2B6o2ShmCRgIaostCGLfm97kp8sqcEqoFSuWnatWy7cE1aYGushySe%2Fv5OqZFBJYiO6HEgrT78OrRczzqxQ%2FY4T%2BbJ%2FRQalb0YmzQ6ySRoovTlljWv%2BMeMdapteJb1nud1kV9Dwhh7uMrtMl0YMnN7bM57dN6riMwnIe90RT4Vah68bFjhBwIGgfEzyTJcwWl3nUWrEN0I%2BLmf62AE9C87%2BoB8e5W49Ip0%2B%2BbP3o1D7PrM16hX6Gn%2Fvq8v4vJbYynZaOkpklTsxaSeyeMf1zpGwjLbphwMuVOnT4rydySwKvZ3jd2lHJVKosKVpBDQnu4pW%2BY07ToImalHbo5YUgwhotMM271skGOqUB2EEjVitls6CKRtfU6YFsRPreBvuS1f59m2zcAd0JNkoxBrMyVPvwQohxOPUKtFZ2VIRlA%2FTMvluhg6faFj2OhPMS9bAHdGZMZntEJXVXhVZceE0GpEB4DvQEdqTKcdd6%2BQZHQK1O%2FvzRHI7rH4hPkQAp9i%2Bdk5mde1MYGyK8iGw1WLYDCCpAZJ6N0JmM0vekrqCxRDtDHmBqrinS2jrlXdPIQIMb&X-Amz-Signature=e9fdf717fe138319fa029d8bf02f05e3af4c032f4c4b1ccfe5b463804d6ef80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

