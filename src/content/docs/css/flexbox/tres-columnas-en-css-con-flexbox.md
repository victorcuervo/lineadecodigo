---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAFSPFI2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9ReInYvPqjyxQh9XjM0ctyI8JYtQ6ouiuNxZQ6c5xQIhAOr5pEmtGYim%2BkZDF0h7tT0sw3rEqkniCexAxU78tGTrKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYRSM50RghB205bAgq3ANmRIWwNTEGvP5Y9QlrA53TqV0U2TEUgMV8nhZEMY7oNfevCa3aFankhxU1BdY7l0h7L0TqwhMCBNH3yM8aZ%2FlFxjR3XA9MVAD1bCK1lhEtY3%2FyQdvro5aR0%2F5%2BSvc4Yp8C%2BVA1V2eq%2FGCbn%2BcWaLMG%2BwzJJFnxidppY7tZXz1EEshE8KJ34aTqlrBRgR4n0Lx1tEft63jRd6bHKqZGruf02ifnm1DKJv%2Bc04JYRi1lodx5C6TWy1Pv5PAmGnlP70UC3h16GqJKB9VEd43iUw0rfy0NXSca29alnXSO%2BNSoz1nm81cSGF98Fq8wJrrJZNxwGuV9zjrAYFdQKW59zTO3o2%2BTEd3z8OrCisCpnDUjpf6Zfmj7G0udNlhj0jx79v2PZX%2FYvVrU7LCQSUZk7%2BYlBUOc6wdiEbbb3%2BvkI42ynrn6v5ABjLG6Vx6oPk0mtZMbGTtTyp4uriQ71H3f3kVP8U287d6D0kUhhbeZe4IrkExTuXf2If7IkxTAWRmn9AJcPlJLZKzr2KL0imZ1BrGEMA7fme6y7rhzkidN%2BNxx5lJ6GOqhIv72smJ%2BvFXFuE15thmbtUdQJ%2BxckKJrhBDyo2Rt9T2sYemLRLgQxXoY2od5dO29s6t%2BlibxYzCu89rJBjqkAXtlzs4wg1pZusISiqVXqXr0yz6gQvAYo2btJTNdx4pp8IK2R9eP9HMwb93smYF7haaNJENufopp9ZnuKqL%2BkrAGP6lyVEEGCJXzTtQLAKHZWtvRhPaCgNSTCdjEIziw43AWW%2BuFtFZU%2FkHsURmI1zPH%2F3BT31NzeLzTgMqYFDJ%2F7OMJTtSY75%2FV5tOfnawN5Sa1orldrUaRb1gLEaykGyDkHTo5&X-Amz-Signature=c68f5384d39993327460ffe8b5f07a65de3fdc56415f61b4cb2602ded6c6f3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAFSPFI2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9ReInYvPqjyxQh9XjM0ctyI8JYtQ6ouiuNxZQ6c5xQIhAOr5pEmtGYim%2BkZDF0h7tT0sw3rEqkniCexAxU78tGTrKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYRSM50RghB205bAgq3ANmRIWwNTEGvP5Y9QlrA53TqV0U2TEUgMV8nhZEMY7oNfevCa3aFankhxU1BdY7l0h7L0TqwhMCBNH3yM8aZ%2FlFxjR3XA9MVAD1bCK1lhEtY3%2FyQdvro5aR0%2F5%2BSvc4Yp8C%2BVA1V2eq%2FGCbn%2BcWaLMG%2BwzJJFnxidppY7tZXz1EEshE8KJ34aTqlrBRgR4n0Lx1tEft63jRd6bHKqZGruf02ifnm1DKJv%2Bc04JYRi1lodx5C6TWy1Pv5PAmGnlP70UC3h16GqJKB9VEd43iUw0rfy0NXSca29alnXSO%2BNSoz1nm81cSGF98Fq8wJrrJZNxwGuV9zjrAYFdQKW59zTO3o2%2BTEd3z8OrCisCpnDUjpf6Zfmj7G0udNlhj0jx79v2PZX%2FYvVrU7LCQSUZk7%2BYlBUOc6wdiEbbb3%2BvkI42ynrn6v5ABjLG6Vx6oPk0mtZMbGTtTyp4uriQ71H3f3kVP8U287d6D0kUhhbeZe4IrkExTuXf2If7IkxTAWRmn9AJcPlJLZKzr2KL0imZ1BrGEMA7fme6y7rhzkidN%2BNxx5lJ6GOqhIv72smJ%2BvFXFuE15thmbtUdQJ%2BxckKJrhBDyo2Rt9T2sYemLRLgQxXoY2od5dO29s6t%2BlibxYzCu89rJBjqkAXtlzs4wg1pZusISiqVXqXr0yz6gQvAYo2btJTNdx4pp8IK2R9eP9HMwb93smYF7haaNJENufopp9ZnuKqL%2BkrAGP6lyVEEGCJXzTtQLAKHZWtvRhPaCgNSTCdjEIziw43AWW%2BuFtFZU%2FkHsURmI1zPH%2F3BT31NzeLzTgMqYFDJ%2F7OMJTtSY75%2FV5tOfnawN5Sa1orldrUaRb1gLEaykGyDkHTo5&X-Amz-Signature=0b9eb2c2ff2ff38c7dca29ef083eb35f53722cee1e317470ab170288d816a7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

