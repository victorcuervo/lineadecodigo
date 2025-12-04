---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3RWJRZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGLudOgvsKws3nOF3jlQn9PCYkOcUzaBUseA%2F3FIpxVvAiAzQN5gJREG5gpNjEE1D236d4uEH2iST5ZFuRfbPHNw%2Fir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdQv5s7I4rHBR5Z3JKtwDtFywXPaK0Wavh06j2TGjdSqWV5IsIs%2FZHRHsIYAlMhYQlJ9vEqyI7aWjqN2dJ0cuoiSErfI3rA%2Fw2eN%2F3RnBGRZjSsc5dizkGvgO9x%2BYD0hYhSsi37sL%2FzEPXzp8d9qFo4AWu0vppAycYIOKfXKR7POpHyxxZHpDqqaUbZT7rpwNU%2F22sU6becDZibrqxQXPgGqEea40bVz1i0TBei32xL1piZ1m40kZ4yzJe7Fw7cVALoMm1bGJiLcMuVWxlY%2Been6adsEnFvVNGFil2s2mDkgkPd%2Blau4WEUgA3DjGy%2FVInZbDOo8sdSHDkxykM2S56wsgWqIs8gGz0WmVfUd12gkLQX%2Fl8QdaJWC01o3uTIDVkRUc71eIWKNmkoI%2Fif5UZc2u7YHZ%2FWE5aqSxSbDUpUtzvqeRcrIwEpUBjizShBypQUWgrgkKmnrQU0CKYKroHTCn%2BIobdomQy6egDvzWmOcGNsk2T1yfs86dcavGw7DY00pfAKnrflMUsnNeY0N5jdNlfztbFxDMMDmzVm%2F%2Fd97Alq65fnd2Bd4245PyZBNs0%2FwvNTXN3u34EWRyibTFbSRy9W4aRmxsdP%2BrntAUzOEFDhddceXTPtZJUMHY7Ecl54fqQu%2BhfTepNlAw1KDGyQY6pgE4eWTLScTnJ5%2BoMUJZN2rJAU%2F0w6ldgHqLE1NfZ%2F8avrZUb7v%2Ftrs%2BfBX%2FXDdsEJL32dzWXwQI%2FClQPLaG61zlfNHmHW6PbtcKsCab8wYKPZOVtwPPofBS8WJWFT%2Bhxro52BIWwWDkZolVwuMNUUr%2FRxH8srxWPqQkgVgN9pAJsqDHPhlj1VAAR8N%2F2NpFmiG%2FKApBbj6OOu436B8kzGtAHvrhNR%2Fg&X-Amz-Signature=aab4d034db5134511c018e2900b4840beb857a9a3e8bfe502b8793912dcde5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3RWJRZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGLudOgvsKws3nOF3jlQn9PCYkOcUzaBUseA%2F3FIpxVvAiAzQN5gJREG5gpNjEE1D236d4uEH2iST5ZFuRfbPHNw%2Fir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdQv5s7I4rHBR5Z3JKtwDtFywXPaK0Wavh06j2TGjdSqWV5IsIs%2FZHRHsIYAlMhYQlJ9vEqyI7aWjqN2dJ0cuoiSErfI3rA%2Fw2eN%2F3RnBGRZjSsc5dizkGvgO9x%2BYD0hYhSsi37sL%2FzEPXzp8d9qFo4AWu0vppAycYIOKfXKR7POpHyxxZHpDqqaUbZT7rpwNU%2F22sU6becDZibrqxQXPgGqEea40bVz1i0TBei32xL1piZ1m40kZ4yzJe7Fw7cVALoMm1bGJiLcMuVWxlY%2Been6adsEnFvVNGFil2s2mDkgkPd%2Blau4WEUgA3DjGy%2FVInZbDOo8sdSHDkxykM2S56wsgWqIs8gGz0WmVfUd12gkLQX%2Fl8QdaJWC01o3uTIDVkRUc71eIWKNmkoI%2Fif5UZc2u7YHZ%2FWE5aqSxSbDUpUtzvqeRcrIwEpUBjizShBypQUWgrgkKmnrQU0CKYKroHTCn%2BIobdomQy6egDvzWmOcGNsk2T1yfs86dcavGw7DY00pfAKnrflMUsnNeY0N5jdNlfztbFxDMMDmzVm%2F%2Fd97Alq65fnd2Bd4245PyZBNs0%2FwvNTXN3u34EWRyibTFbSRy9W4aRmxsdP%2BrntAUzOEFDhddceXTPtZJUMHY7Ecl54fqQu%2BhfTepNlAw1KDGyQY6pgE4eWTLScTnJ5%2BoMUJZN2rJAU%2F0w6ldgHqLE1NfZ%2F8avrZUb7v%2Ftrs%2BfBX%2FXDdsEJL32dzWXwQI%2FClQPLaG61zlfNHmHW6PbtcKsCab8wYKPZOVtwPPofBS8WJWFT%2Bhxro52BIWwWDkZolVwuMNUUr%2FRxH8srxWPqQkgVgN9pAJsqDHPhlj1VAAR8N%2F2NpFmiG%2FKApBbj6OOu436B8kzGtAHvrhNR%2Fg&X-Amz-Signature=81782f2c4a2cfe2f76959cbaab05ee55dffe0b35bd66ce0adebcb6598e52539b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

