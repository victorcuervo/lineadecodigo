---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWVUPHU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4xoFnPkfGiF1EBCJZQJM%2BoRjD1d%2BV0izw%2BVYRpp3buAIgFaMpWneFADB7HsSMFs54wiQUSxk7ySSNCsCIuoYcBikq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJClhP6ZkDG2nb4X4ircA1ln4F1n9xodTZ0n4VO1X0x9h1tnUQFHBw63cwnuXP3ilT625OUBCr8GIaZ7W0LeVij%2FVEWAdl3MdY%2FUoQe9rpmCoNouh1Fv6AXY2R4aLDaehlI3LBZxChGDNNt7V0KE%2BDXf3jcRsfODj5c1G7c61ZWlgJXYXvOnz3BmIET%2FiIJvwjMWBDr9aqF%2FcDwIQq%2FD0fsDqr16D0fzJH0%2F25yXzLjSunOlA9aQaPFsIgjZcnVf%2BH1%2BDJzceOpI2KOg%2F9VVqnUnEjz377HyE3XcHla7WjfbmrzbkiBy1e%2Fmy1M7J2tL9bOaTOW9HIemqj9uQMqaRdI%2FF9Aj3bcUSPgfr6BlZ93H9d6L1MLgPqO0u1jvUeSL4yCaGER0Db5dO7uRT491tE5kdleKyomszTtQYFq2VYC8stAXLozWeU0BuHV5bEEm34BNQD30Z4mPzbaXkHHi8ctYPuTMzHWmhYvdpQ7%2FocMSwT9BWQpajkIaJ2ppBFMA%2BiAVE3FNlBAWKL6GicA3iDeTyUKSUkVDSleqTmShZJ76dUAvr4u0SY1cqxT303A0eLlqZ29jOPbnI8Wt3wR1tqocaLSZcSvQ2hWqOevbRIZeI4bVbpKYPc2MRGuq%2BPB9Ce0ANsiPq5i0WVxAMLyMyMkGOqUBwRAD0KZv%2FFj25TvSa5%2BSa650gJvS%2FOKyu6IY4cZ8QDjOpnkwonJoioXpfrItaj7tYKClV2Zd2rvwnsy5iutgdiZ1CFU7gwhK49A8CCTUEqkTuhXg%2BP%2FONpa3Rqlh4mAAXCFQdB0c4YnbwF4EGa4g3fJkudDwMAmkzQAWyfaEjBv5jhPgzy6W3YsQkP6ZlwGntcPqYLAJfNbOm32QdG3hN2F3VlQb&X-Amz-Signature=9a329b405e663e810ef26895f10d12ac6daa9a17a16cae71634fa44402ddad83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWVUPHU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4xoFnPkfGiF1EBCJZQJM%2BoRjD1d%2BV0izw%2BVYRpp3buAIgFaMpWneFADB7HsSMFs54wiQUSxk7ySSNCsCIuoYcBikq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJClhP6ZkDG2nb4X4ircA1ln4F1n9xodTZ0n4VO1X0x9h1tnUQFHBw63cwnuXP3ilT625OUBCr8GIaZ7W0LeVij%2FVEWAdl3MdY%2FUoQe9rpmCoNouh1Fv6AXY2R4aLDaehlI3LBZxChGDNNt7V0KE%2BDXf3jcRsfODj5c1G7c61ZWlgJXYXvOnz3BmIET%2FiIJvwjMWBDr9aqF%2FcDwIQq%2FD0fsDqr16D0fzJH0%2F25yXzLjSunOlA9aQaPFsIgjZcnVf%2BH1%2BDJzceOpI2KOg%2F9VVqnUnEjz377HyE3XcHla7WjfbmrzbkiBy1e%2Fmy1M7J2tL9bOaTOW9HIemqj9uQMqaRdI%2FF9Aj3bcUSPgfr6BlZ93H9d6L1MLgPqO0u1jvUeSL4yCaGER0Db5dO7uRT491tE5kdleKyomszTtQYFq2VYC8stAXLozWeU0BuHV5bEEm34BNQD30Z4mPzbaXkHHi8ctYPuTMzHWmhYvdpQ7%2FocMSwT9BWQpajkIaJ2ppBFMA%2BiAVE3FNlBAWKL6GicA3iDeTyUKSUkVDSleqTmShZJ76dUAvr4u0SY1cqxT303A0eLlqZ29jOPbnI8Wt3wR1tqocaLSZcSvQ2hWqOevbRIZeI4bVbpKYPc2MRGuq%2BPB9Ce0ANsiPq5i0WVxAMLyMyMkGOqUBwRAD0KZv%2FFj25TvSa5%2BSa650gJvS%2FOKyu6IY4cZ8QDjOpnkwonJoioXpfrItaj7tYKClV2Zd2rvwnsy5iutgdiZ1CFU7gwhK49A8CCTUEqkTuhXg%2BP%2FONpa3Rqlh4mAAXCFQdB0c4YnbwF4EGa4g3fJkudDwMAmkzQAWyfaEjBv5jhPgzy6W3YsQkP6ZlwGntcPqYLAJfNbOm32QdG3hN2F3VlQb&X-Amz-Signature=7c6e54c9b107f2a78969ff6c226f40c7f7fd391d626d09ffba8709b8677f4695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

