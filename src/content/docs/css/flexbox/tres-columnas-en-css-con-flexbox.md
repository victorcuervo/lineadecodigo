---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPAB7IG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSr514xUS%2FYm1fnmQDwb40I6tdla%2Bo9ZLQZWbH2vBK3AiAqtHgzVdNIo8l2uDKrSW%2Fa1Xs7EE%2ByUtWDauIc7ou3zyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPg9U7jsdaMYGUVTjKtwDHld47hFp0LoH6ruMjymTTIExe1JDijHp7M2OkinzZVRxKPrNMrrkZkEshiMSl%2FjrtrKXMYT3ZJUtBRubCYLX4NH8APCU%2FciSqAz0M4WJOq%2F%2FYIANJAafsR9mNeHgrTgqNtLKcEVbzMSRAS8Xe2iw7zDBkaa0kkqgU29FPZUklsLd%2BM5T6U%2F8T1zJ2aw4jIu3NxJDFv%2BqnYLJnwlbBY2r9%2BDEkOXhHiDp9TtFqJSspDqiekSBUyw8k82nkRvbYFlOQgH4C8k3ljrLrqyIOXHobaq6MdO1L7O6lI3RnIfxAtjGncr3bpQvsSjqi%2F14Qd5lrIirDXinwKtM8HLB2Slew0vasWacn9UM%2Bl6y8QphCChtax1ZASBumF43gEGuxI7bpaqfHzfq74o1FxiscC7QOOkOP87lrtUKX7o0RP6aLcv5dDM1nu96vOkm7qql03RRPlxD8bSWXrpoGWnlH6Zps4%2ByH7SNqjycVnTqGibxasUbsfDqKW%2F6n3QEfWl4N1cboFOaoAbffOzAE7seeZJoPhseLAMQy4DmjdJqmMnNGLhrvwlzycZpVjhWgjSN2ZoITcNycGXbZffj%2B1%2B%2FQkdjT0QHqIxuqR0ZVpkgzPFTr0LlKM1mqPat8EpRsK0w2u7ZyQY6pgFsXvHM83vDOqV37r2CN0CD94bldTMSE5g1EPvjKSxwNHtM8dH8vdI8pJz1vZvYObNOS6QdOdNraXN0g0NRk47vh5o%2FNn4pfSo8A949Uu2%2Bi3eBYgHq8aTeMsEkHmbFqg5dGUr6TbuFGEUJQY7tDvpZcOOhLvDjumkr0YQYTXwGl1bt5yrRLqKotud6epNnbO7YpBfSYdoQQJo8fcu66CG28VD4b9qQ&X-Amz-Signature=f2fe66176e96c5c05439f881b7cb582f0d0f64c44c6f99e960a33e78fa897e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPAB7IG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSr514xUS%2FYm1fnmQDwb40I6tdla%2Bo9ZLQZWbH2vBK3AiAqtHgzVdNIo8l2uDKrSW%2Fa1Xs7EE%2ByUtWDauIc7ou3zyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPg9U7jsdaMYGUVTjKtwDHld47hFp0LoH6ruMjymTTIExe1JDijHp7M2OkinzZVRxKPrNMrrkZkEshiMSl%2FjrtrKXMYT3ZJUtBRubCYLX4NH8APCU%2FciSqAz0M4WJOq%2F%2FYIANJAafsR9mNeHgrTgqNtLKcEVbzMSRAS8Xe2iw7zDBkaa0kkqgU29FPZUklsLd%2BM5T6U%2F8T1zJ2aw4jIu3NxJDFv%2BqnYLJnwlbBY2r9%2BDEkOXhHiDp9TtFqJSspDqiekSBUyw8k82nkRvbYFlOQgH4C8k3ljrLrqyIOXHobaq6MdO1L7O6lI3RnIfxAtjGncr3bpQvsSjqi%2F14Qd5lrIirDXinwKtM8HLB2Slew0vasWacn9UM%2Bl6y8QphCChtax1ZASBumF43gEGuxI7bpaqfHzfq74o1FxiscC7QOOkOP87lrtUKX7o0RP6aLcv5dDM1nu96vOkm7qql03RRPlxD8bSWXrpoGWnlH6Zps4%2ByH7SNqjycVnTqGibxasUbsfDqKW%2F6n3QEfWl4N1cboFOaoAbffOzAE7seeZJoPhseLAMQy4DmjdJqmMnNGLhrvwlzycZpVjhWgjSN2ZoITcNycGXbZffj%2B1%2B%2FQkdjT0QHqIxuqR0ZVpkgzPFTr0LlKM1mqPat8EpRsK0w2u7ZyQY6pgFsXvHM83vDOqV37r2CN0CD94bldTMSE5g1EPvjKSxwNHtM8dH8vdI8pJz1vZvYObNOS6QdOdNraXN0g0NRk47vh5o%2FNn4pfSo8A949Uu2%2Bi3eBYgHq8aTeMsEkHmbFqg5dGUr6TbuFGEUJQY7tDvpZcOOhLvDjumkr0YQYTXwGl1bt5yrRLqKotud6epNnbO7YpBfSYdoQQJo8fcu66CG28VD4b9qQ&X-Amz-Signature=4674608c7d2d5f51aa39cf3d560ff2e1765a1864a467a452c0ddc737a45c5da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

