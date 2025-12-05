---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJIHD25%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrSVYbT7%2FXYyiXyQgjGpy45ygoXWGTG5zBxqxkk6LVgIhANU5bB0cOkdDQ3GIUhahVsLrKqZ0%2FOi7b4oOkYXMMM1jKv8DCGAQABoMNjM3NDIzMTgzODA1IgyxU4MnuggMma6HhXgq3APm3ZKsNkDvCjJ3pwuCUVB3UkP68D3Z46y7oCOGDYkqffNhnACB7m4Nz%2F7Nfktdb1VaISb2Z4%2F5Mt%2BLiwSe3D9Wx%2F1%2ByLfciN%2FRKN8red11nAcX9BZ6tt9Ge1Pw6TjVBLxU6czTx3rF6B0nNEWqItUhVyY9qHHtBpSjjagOOm%2F0TmZ8ft6%2BLeEJ6a7ImolCBhLfp%2BCb1TrNitBkKqiOTYYBEFu9BvBUQKTr7g3pjQtW4MraVwaZGj59McPn%2Fljh900%2BNbGQBr5k5WVGOm6bkAIuyjA6Jmy4sw3XajX6ycdoOgstHuyHp0s3AaZF0gSGPUVEM8cLtCc3ZOXeY%2FqMVfYGPW93tIb7hKbiK0PdkrIHHNTIjZ5C4BvVyE8cybATPCQKnQj20ZUCsYQtFqGHipru%2BvdwOb8M49teuK471VzHyJ2s94JVw8FtjqpE5y%2FPZtpVFQUt5Tl%2BFmib7YExYKIGty0utPIsJz4UYTBbUPAfR20%2BmtX8snrAa2BGBcWGGzkaewtw1hRyZlNhp5wWaO77IqpVK6crP5qtEBRmAjIKsMvrzctP8Imda4f%2FcrZcjVL8t7srL6Pl%2FrN2lUon51jdmDY7IU5Fp3OCXAP2fPSBQBvlT6dJJoOJm3fOQzC38MvJBjqkAemIWdJyEOvfNOimYC543hWQwALBF1VBKufST8pcl0KInjHQsTCilE%2FaSRfuzs7gxSt0PkfsgihYjav8mxX%2BSrEBTLDe5hGU4BR3TGoQMTW2p2Bfy80TdUn1fX2ESedU1qDNvW3CS2GEeVyE0JDXW8lOUYZqz3iLHqHE4bNjg6%2FjQWEud43z0jYF%2ByIcG6LEM971HYBYGgvGBHAoR%2FMjf9X658UV&X-Amz-Signature=e4bd8f0f7408b25f1fe89a03afaafb7099443768982eeb847e806d2474d0d5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJIHD25%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrSVYbT7%2FXYyiXyQgjGpy45ygoXWGTG5zBxqxkk6LVgIhANU5bB0cOkdDQ3GIUhahVsLrKqZ0%2FOi7b4oOkYXMMM1jKv8DCGAQABoMNjM3NDIzMTgzODA1IgyxU4MnuggMma6HhXgq3APm3ZKsNkDvCjJ3pwuCUVB3UkP68D3Z46y7oCOGDYkqffNhnACB7m4Nz%2F7Nfktdb1VaISb2Z4%2F5Mt%2BLiwSe3D9Wx%2F1%2ByLfciN%2FRKN8red11nAcX9BZ6tt9Ge1Pw6TjVBLxU6czTx3rF6B0nNEWqItUhVyY9qHHtBpSjjagOOm%2F0TmZ8ft6%2BLeEJ6a7ImolCBhLfp%2BCb1TrNitBkKqiOTYYBEFu9BvBUQKTr7g3pjQtW4MraVwaZGj59McPn%2Fljh900%2BNbGQBr5k5WVGOm6bkAIuyjA6Jmy4sw3XajX6ycdoOgstHuyHp0s3AaZF0gSGPUVEM8cLtCc3ZOXeY%2FqMVfYGPW93tIb7hKbiK0PdkrIHHNTIjZ5C4BvVyE8cybATPCQKnQj20ZUCsYQtFqGHipru%2BvdwOb8M49teuK471VzHyJ2s94JVw8FtjqpE5y%2FPZtpVFQUt5Tl%2BFmib7YExYKIGty0utPIsJz4UYTBbUPAfR20%2BmtX8snrAa2BGBcWGGzkaewtw1hRyZlNhp5wWaO77IqpVK6crP5qtEBRmAjIKsMvrzctP8Imda4f%2FcrZcjVL8t7srL6Pl%2FrN2lUon51jdmDY7IU5Fp3OCXAP2fPSBQBvlT6dJJoOJm3fOQzC38MvJBjqkAemIWdJyEOvfNOimYC543hWQwALBF1VBKufST8pcl0KInjHQsTCilE%2FaSRfuzs7gxSt0PkfsgihYjav8mxX%2BSrEBTLDe5hGU4BR3TGoQMTW2p2Bfy80TdUn1fX2ESedU1qDNvW3CS2GEeVyE0JDXW8lOUYZqz3iLHqHE4bNjg6%2FjQWEud43z0jYF%2ByIcG6LEM971HYBYGgvGBHAoR%2FMjf9X658UV&X-Amz-Signature=69fc4906d369fbbe6f67d1b2273f2b20d287f7a4c0475f1b8a391263fb5280cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

