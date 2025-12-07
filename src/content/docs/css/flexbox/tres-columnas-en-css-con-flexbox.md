---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R45ZJHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICU9Sfjk0Cg9rhof2KmFD%2FFQlkp%2FZ%2Fk0ym9onvVUD2DlAiA%2FGfVuRxM4MLu39SMabc8HyLAqj2Az26uHNqAvQ5nOUSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkxEfIvbO5FbnuhjKtwDhqyMWud4VR1ecXFC55TMIj5fuw5i8AIwRH7AzkBZ99cH3Y0dXS29CCR8MW6LKki5%2B9ionDRDuGbYYsDHYk04%2BB3uAGz8iuVawyhsYB300bR1I3uaRfj1x02cj0Ca6s3lp2KdZ6TwQ7NjR8f2I%2FuzRL%2BOL0yqsFRp9%2BWSmDH985rmtlBt9jrHMNTQh4QXRXM54W1Kx44g90loiz7rd7D4070G6wPTYDH3nYjgs0v79fmvGKsDg%2FjnxX1P3z%2BqPqb1Fryn5NEWw6q5XmnYhS1RBMvzzWkwMMHgIDjGruzbMgbyWjOsJue8wotQ2HcHpPBfg2m0jQD8ebMSTo9zTcOSiNz7pBJUDjcF4Eeq7QdDVYTqz0b9FhXyXZmXn%2Bdn3EoXmlZQ028%2BBJBfaicyhIIG5kjQ0IDOmoLurjQAv5SDEMQ5g8mlLvVy5IOembVzzDTqdO%2BYjCZE1L%2Fwk8ej%2FzjBJuexvbInRRPTZLN%2FS9bILhVaA9LhRG%2BUVm2GJisIenZXD00fVfU286BRXN6a4ALqH9V7CNROR2cZ6DeSNVLnXR%2BPqhOaDzhuT21KChzx3SqaOeVdq1Lg3Oc5%2B%2FucrHJyLzWTORGY13bbtEYkyvyVDvQdGVfguuzMRnCkGC0w77fWyQY6pgF3Oa9XDOXuhF21RBZS29fN%2FoKTZIjFYzVOSeMjIaEHKA4E8AmqwxHysCWI7bGJc7gybJceAiN4neGwl%2BvqesAxOOQuFTsNUSsEDEon4CzHlyS3fhJP0oivL1nijoEfAy3rFZxt0eqDRJwOt0EDH%2Bexrsm6pyayoMYdw2deXk8TeL8Fbg5ED4mx6qdtvpjkfxhPbpueRedBJ7g361wF5Vksl%2FCrlvbE&X-Amz-Signature=425890aa7990bd2aa0a9386d8e16663147fb76fe915bba0fddc5ec6ef5e1a037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R45ZJHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICU9Sfjk0Cg9rhof2KmFD%2FFQlkp%2FZ%2Fk0ym9onvVUD2DlAiA%2FGfVuRxM4MLu39SMabc8HyLAqj2Az26uHNqAvQ5nOUSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkxEfIvbO5FbnuhjKtwDhqyMWud4VR1ecXFC55TMIj5fuw5i8AIwRH7AzkBZ99cH3Y0dXS29CCR8MW6LKki5%2B9ionDRDuGbYYsDHYk04%2BB3uAGz8iuVawyhsYB300bR1I3uaRfj1x02cj0Ca6s3lp2KdZ6TwQ7NjR8f2I%2FuzRL%2BOL0yqsFRp9%2BWSmDH985rmtlBt9jrHMNTQh4QXRXM54W1Kx44g90loiz7rd7D4070G6wPTYDH3nYjgs0v79fmvGKsDg%2FjnxX1P3z%2BqPqb1Fryn5NEWw6q5XmnYhS1RBMvzzWkwMMHgIDjGruzbMgbyWjOsJue8wotQ2HcHpPBfg2m0jQD8ebMSTo9zTcOSiNz7pBJUDjcF4Eeq7QdDVYTqz0b9FhXyXZmXn%2Bdn3EoXmlZQ028%2BBJBfaicyhIIG5kjQ0IDOmoLurjQAv5SDEMQ5g8mlLvVy5IOembVzzDTqdO%2BYjCZE1L%2Fwk8ej%2FzjBJuexvbInRRPTZLN%2FS9bILhVaA9LhRG%2BUVm2GJisIenZXD00fVfU286BRXN6a4ALqH9V7CNROR2cZ6DeSNVLnXR%2BPqhOaDzhuT21KChzx3SqaOeVdq1Lg3Oc5%2B%2FucrHJyLzWTORGY13bbtEYkyvyVDvQdGVfguuzMRnCkGC0w77fWyQY6pgF3Oa9XDOXuhF21RBZS29fN%2FoKTZIjFYzVOSeMjIaEHKA4E8AmqwxHysCWI7bGJc7gybJceAiN4neGwl%2BvqesAxOOQuFTsNUSsEDEon4CzHlyS3fhJP0oivL1nijoEfAy3rFZxt0eqDRJwOt0EDH%2Bexrsm6pyayoMYdw2deXk8TeL8Fbg5ED4mx6qdtvpjkfxhPbpueRedBJ7g361wF5Vksl%2FCrlvbE&X-Amz-Signature=2415ebc1a77c570d95ca5e7aae0c1e0a8a0acd210bf6728dad05ea5f4e35e407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

