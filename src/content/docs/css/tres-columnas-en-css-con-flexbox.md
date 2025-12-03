---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NY7I32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCCvWos21aeJHMh83FYgsVgE69BFkKIlCjsbgBFwOULCwIhAP%2FrFnJXs%2BFok65AgzbhhhNQy%2BiVL41aZC%2B2Lmhgp%2F6LKv8DCDYQABoMNjM3NDIzMTgzODA1Igzfl%2FjiuaEKTXwQyT8q3AP8oO8t91SMoGwDtt8ZlVUdrjgDxotp0Egs1CuWw1UtUZYUDNKoiq6oRiah2ovswTEqzrxnfZ5imk54zw0hN47lz2I9sGle5uDYTOuOwOYT0ztmkpK2uVB0ezBa61ILDOjIV9c7DjbSi3pNLd8Bpta9jItLg1eMlQLh0umNBnJomvcZ20u0KJS%2FyZPW1gCPINvwlozgpsqzT%2BCo9V%2FKLcSpQomD296hwRsfCCkCcSOUiXDdScDfVpDe7%2B65%2BA0SP98WtQ%2B6Yk4H0%2FHuv%2Fn%2BlVjdgJTuSeGl1AhvsppSH0ylyGQAewOy5ut%2BAjDY1As3AOc8dS4losuVqeJAw0cX3rLO5uRDa9o5CcS%2FZaUH8xRqtGsGMSAdXdcsaBlNxguTgxjhM%2BRTIkcUOKH8JRX3iIK76WRRXxAKrMGf10nhzpiWUFiiQbFkJzN7rythO%2BpWqFlLuXtpiDDsyLk%2Fc3FIf1P6yK%2BaPyMFXOUhPrqZ18lR7b4HseFQBCxLVLI0CsuBZz%2B9Xr1ZenhE0ziHrgpmZCJkQyIkKk51Bxbt9eTroEbBl%2BesWEB1keNijxz8UnYOS8z6y2uWtIlNTaSVM0%2Fpz%2BStnpr4%2FwZLIg5VIDKzyXGrrDt3uO7z0iGnuF0KTjC%2BvcLJBjqkATwpKPTRpBdDGMa1btRUm8l5x07Ij2Is%2Bk4bxV8VBl%2FxGcz975rxlKcSwKfU6WPECCX57sLF2%2BbxuFzjRWcubKjbRysAC9DQQlOBC8uOqbhFMbv5h6YYyWhHezVXa4CS2epKn5RAd4qN0YkWUopw%2B3XGXzXXwOgYcNIJ6QviZhArH2h92Z2yLqjq4enwbu7a0Rj%2BZSv2IY3rTJ7UBQ416mM%2F3aKq&X-Amz-Signature=7d0737c03ef4c6ec79b6527c1dc098c37a79e28cdfbbe88954832c5416c57bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NY7I32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCCvWos21aeJHMh83FYgsVgE69BFkKIlCjsbgBFwOULCwIhAP%2FrFnJXs%2BFok65AgzbhhhNQy%2BiVL41aZC%2B2Lmhgp%2F6LKv8DCDYQABoMNjM3NDIzMTgzODA1Igzfl%2FjiuaEKTXwQyT8q3AP8oO8t91SMoGwDtt8ZlVUdrjgDxotp0Egs1CuWw1UtUZYUDNKoiq6oRiah2ovswTEqzrxnfZ5imk54zw0hN47lz2I9sGle5uDYTOuOwOYT0ztmkpK2uVB0ezBa61ILDOjIV9c7DjbSi3pNLd8Bpta9jItLg1eMlQLh0umNBnJomvcZ20u0KJS%2FyZPW1gCPINvwlozgpsqzT%2BCo9V%2FKLcSpQomD296hwRsfCCkCcSOUiXDdScDfVpDe7%2B65%2BA0SP98WtQ%2B6Yk4H0%2FHuv%2Fn%2BlVjdgJTuSeGl1AhvsppSH0ylyGQAewOy5ut%2BAjDY1As3AOc8dS4losuVqeJAw0cX3rLO5uRDa9o5CcS%2FZaUH8xRqtGsGMSAdXdcsaBlNxguTgxjhM%2BRTIkcUOKH8JRX3iIK76WRRXxAKrMGf10nhzpiWUFiiQbFkJzN7rythO%2BpWqFlLuXtpiDDsyLk%2Fc3FIf1P6yK%2BaPyMFXOUhPrqZ18lR7b4HseFQBCxLVLI0CsuBZz%2B9Xr1ZenhE0ziHrgpmZCJkQyIkKk51Bxbt9eTroEbBl%2BesWEB1keNijxz8UnYOS8z6y2uWtIlNTaSVM0%2Fpz%2BStnpr4%2FwZLIg5VIDKzyXGrrDt3uO7z0iGnuF0KTjC%2BvcLJBjqkATwpKPTRpBdDGMa1btRUm8l5x07Ij2Is%2Bk4bxV8VBl%2FxGcz975rxlKcSwKfU6WPECCX57sLF2%2BbxuFzjRWcubKjbRysAC9DQQlOBC8uOqbhFMbv5h6YYyWhHezVXa4CS2epKn5RAd4qN0YkWUopw%2B3XGXzXXwOgYcNIJ6QviZhArH2h92Z2yLqjq4enwbu7a0Rj%2BZSv2IY3rTJ7UBQ416mM%2F3aKq&X-Amz-Signature=0b2b2e18f885aab9f51a94a1468c4024c7fa7ef1aedc0f4506039f7813615616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

