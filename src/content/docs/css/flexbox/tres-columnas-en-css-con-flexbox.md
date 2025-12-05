---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA57CNTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhaCqniKLnSIhPhO%2B9UW2KrKvqy1635qj3dmOsM3XDdAiA84EtCvnhU0kLVQZMfHaiT2wd6JgM%2F2tGytlZuiZGlVSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMgtWmN7l32eLHCWkYKtwD7yZ3qRf5KBU7RF3P4K%2FF%2BWRqisE3fJCVXL1RIKqCe2V5w2AyIWOYqCvmkytydsMUAvmbTR4PqVeRWvXQsncm2im%2BZ3nVL89uxaM6nv%2Bb9g%2BeNNrJ5jeezTAIi582CIHpxpXsuE1q0XtZhGUSqGThyYtF%2BPil1WTQ3bg5bW1VK4BCA52JQlRaum%2FPApEHr1pL7%2FklH%2BhqVV3vKz1gj7sS4FmyLCrFuR8cLUB8yVCq0AJ9cX4nGXP%2FAGKKYrZG1BZNX7cguVRaVD05h3vd3pshNz6HOJx0jJFIHVN6DSW%2BR3fkdAxtIEkxQX6VA37A3wY5MpQQHCODS2QkyP%2FqQnDmAmS8PJ8Yttg6vmK5H1mRjASAPF8kEJGj%2BWOdoCHinfQLlpRQtEwgvNNeb2cpyG4rOU%2FrMtVemMJCwfvQtDMe%2Fz2q19wVHVKkTwUvz6k0Zvwdlw4zb68erJ%2FlirYHdHa2NLTyOA%2F14KnbnyX3I9TToEvkav%2BH99RsU%2Fg%2BBOtrQO%2FBqthKdBiZUd%2FVwgbljR%2FpJi10RH%2FaVbIihAvHo8LDcHfjK0jCRzvu3xaUpSFSnezvSfYYgD17n1BQ77wUUbAM4j1TKLiXwor48EYQcOyGC3OsJ5Y7jFvDJn0u90wwyoTMyQY6pgFCxzvah2t3knSO%2BrbM5xbaVrDs0lmun0UcU2PMNOXxDh4CTkiRZSR79nuERspRbb3g2WQZYb8IpVolx9UUz9ITVEyuGNlI%2B1Yvf5LCnEDXqkQ%2B786axqkQCTfpDtAnXHqeoUTCSQPS2tHGx1zPyh17c7%2BvI2mBby3Q%2BJT1nIJTKwDrW7oxd8ZbJYNdkoU3ZSKvzU7F3bE2JL1zqsInjof2O0n00PJx&X-Amz-Signature=11455fd11cbd60eae4c82663c82cb9c15a9bbb2eff5008197ded8a4a7acfcc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA57CNTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhaCqniKLnSIhPhO%2B9UW2KrKvqy1635qj3dmOsM3XDdAiA84EtCvnhU0kLVQZMfHaiT2wd6JgM%2F2tGytlZuiZGlVSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMgtWmN7l32eLHCWkYKtwD7yZ3qRf5KBU7RF3P4K%2FF%2BWRqisE3fJCVXL1RIKqCe2V5w2AyIWOYqCvmkytydsMUAvmbTR4PqVeRWvXQsncm2im%2BZ3nVL89uxaM6nv%2Bb9g%2BeNNrJ5jeezTAIi582CIHpxpXsuE1q0XtZhGUSqGThyYtF%2BPil1WTQ3bg5bW1VK4BCA52JQlRaum%2FPApEHr1pL7%2FklH%2BhqVV3vKz1gj7sS4FmyLCrFuR8cLUB8yVCq0AJ9cX4nGXP%2FAGKKYrZG1BZNX7cguVRaVD05h3vd3pshNz6HOJx0jJFIHVN6DSW%2BR3fkdAxtIEkxQX6VA37A3wY5MpQQHCODS2QkyP%2FqQnDmAmS8PJ8Yttg6vmK5H1mRjASAPF8kEJGj%2BWOdoCHinfQLlpRQtEwgvNNeb2cpyG4rOU%2FrMtVemMJCwfvQtDMe%2Fz2q19wVHVKkTwUvz6k0Zvwdlw4zb68erJ%2FlirYHdHa2NLTyOA%2F14KnbnyX3I9TToEvkav%2BH99RsU%2Fg%2BBOtrQO%2FBqthKdBiZUd%2FVwgbljR%2FpJi10RH%2FaVbIihAvHo8LDcHfjK0jCRzvu3xaUpSFSnezvSfYYgD17n1BQ77wUUbAM4j1TKLiXwor48EYQcOyGC3OsJ5Y7jFvDJn0u90wwyoTMyQY6pgFCxzvah2t3knSO%2BrbM5xbaVrDs0lmun0UcU2PMNOXxDh4CTkiRZSR79nuERspRbb3g2WQZYb8IpVolx9UUz9ITVEyuGNlI%2B1Yvf5LCnEDXqkQ%2B786axqkQCTfpDtAnXHqeoUTCSQPS2tHGx1zPyh17c7%2BvI2mBby3Q%2BJT1nIJTKwDrW7oxd8ZbJYNdkoU3ZSKvzU7F3bE2JL1zqsInjof2O0n00PJx&X-Amz-Signature=16bd37c1458231079b7ab47e48d1528cfb5fba7ed47aa9da5827dbe05a521d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

