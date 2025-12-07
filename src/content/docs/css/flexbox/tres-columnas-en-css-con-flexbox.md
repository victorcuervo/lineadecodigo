---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMEDHPL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVzq1Rsq3W%2BcTwjr2CX2QVrdGpJBmNSjcXPUJXUCI1HQIgPA3%2Bh3vfyLyHXNKezwd1d0%2BmH5rnqVOATm6K%2F4z7FOAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFcGrQfC2D9kSPnpCrcA4%2Byd6QGo6LO36R5pZTvRrKZGyYoTxk%2BX3h0su%2BR1Z%2F5UlMj7S4eIyCAZtXZ0dynaU%2BO7a1%2FZLVBj%2Bb5imAfYhq9OtBbRsWVhdb6yIHftQOlyEMFOBgnzA0%2BbX5a7WdLDL86zskfWy1vc7PVvC13Y%2BV%2FtgDydMlVUTcJe1RINl5kcM%2BDwo30jVY9NHbWXYnhxLdQ6%2FV8oGKZFkdF2AwK8yHGoPzZC7I8VAN3k4z1c3BTQt0mdsQnF8gajja%2FTaPqjlPxWacVC%2Fd%2Bb63NPBBiFrosH8Q9kx035CRj9EHb2tX5MtRWdXzazvzTuO71Fhrv7J6lPquchBcdGp4cpBE8ZESuGGk%2FCOp5G9%2FQqJLBZj9Ii63HHHnMS8jX9yfIKhTSpVrV8bE41Ai5OlxYP3Zn9tL06konC15kq5MqQLdpos9xkuuY%2BzEH3Dabca0h0sOP%2B8hRPh94cZMtuZohgnzvJZR0%2FSugySK%2FSaHI3HYg0OHUTL%2BOXsjze7swGnUbG3AvLEy71th%2FLFhUpTr4Xi4gJb8RegDdM8DzhbfBtsZV6dQYncJCR8RhiYfmVfvZDJ5UHt1O5JARnaNhAO8EM3nz3Kgsb7NKppgJuHF7Wf%2FLqw%2BEQxtaO4zzslLb6wwgMNLH18kGOqUBZKFX64r6spRMCM6odAH7GayW3X%2BOFneCK3x9lhYDCCI9m7TkaTytQ5O7GdJRNtUJRJSRdkstUreSohG1%2FjX5uhR7i2%2B2BwwLlcFyriXtpSs2cACjPzAs8A9SQcF67%2FGm4L6YCUfqlRWCC7vwG2og7hzzze0QuIwKWSa1HFIJDB5miMU8kcyju3hcZwzyjCLRzZzEP9tKU4v3Y6B9dKdvV%2FLrkCSU&X-Amz-Signature=158e69b438e9e2cffecccf147970b8bea1b86f125e97c2427593ab9723449a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMEDHPL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVzq1Rsq3W%2BcTwjr2CX2QVrdGpJBmNSjcXPUJXUCI1HQIgPA3%2Bh3vfyLyHXNKezwd1d0%2BmH5rnqVOATm6K%2F4z7FOAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFcGrQfC2D9kSPnpCrcA4%2Byd6QGo6LO36R5pZTvRrKZGyYoTxk%2BX3h0su%2BR1Z%2F5UlMj7S4eIyCAZtXZ0dynaU%2BO7a1%2FZLVBj%2Bb5imAfYhq9OtBbRsWVhdb6yIHftQOlyEMFOBgnzA0%2BbX5a7WdLDL86zskfWy1vc7PVvC13Y%2BV%2FtgDydMlVUTcJe1RINl5kcM%2BDwo30jVY9NHbWXYnhxLdQ6%2FV8oGKZFkdF2AwK8yHGoPzZC7I8VAN3k4z1c3BTQt0mdsQnF8gajja%2FTaPqjlPxWacVC%2Fd%2Bb63NPBBiFrosH8Q9kx035CRj9EHb2tX5MtRWdXzazvzTuO71Fhrv7J6lPquchBcdGp4cpBE8ZESuGGk%2FCOp5G9%2FQqJLBZj9Ii63HHHnMS8jX9yfIKhTSpVrV8bE41Ai5OlxYP3Zn9tL06konC15kq5MqQLdpos9xkuuY%2BzEH3Dabca0h0sOP%2B8hRPh94cZMtuZohgnzvJZR0%2FSugySK%2FSaHI3HYg0OHUTL%2BOXsjze7swGnUbG3AvLEy71th%2FLFhUpTr4Xi4gJb8RegDdM8DzhbfBtsZV6dQYncJCR8RhiYfmVfvZDJ5UHt1O5JARnaNhAO8EM3nz3Kgsb7NKppgJuHF7Wf%2FLqw%2BEQxtaO4zzslLb6wwgMNLH18kGOqUBZKFX64r6spRMCM6odAH7GayW3X%2BOFneCK3x9lhYDCCI9m7TkaTytQ5O7GdJRNtUJRJSRdkstUreSohG1%2FjX5uhR7i2%2B2BwwLlcFyriXtpSs2cACjPzAs8A9SQcF67%2FGm4L6YCUfqlRWCC7vwG2og7hzzze0QuIwKWSa1HFIJDB5miMU8kcyju3hcZwzyjCLRzZzEP9tKU4v3Y6B9dKdvV%2FLrkCSU&X-Amz-Signature=22a7e8ee9d94aab81ed11643ea76ce738c17b05ae93b1d8cca18217bdd030791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

