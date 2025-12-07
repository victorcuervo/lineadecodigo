---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGE6NO25%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLzp64h4GDgQ4ZviBNvl7dgTuQ2cu6PRcjuLoVXqypvAiAFLtP9NKTziZLaOktrGbkwGWuc8tWfa%2BALl9aI%2BacJviqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGoJIMUBy9WoSg4y2KtwDA7QfqhLwc5%2BwkcB5SmjRr7nhTpbxb7EzcFgnvJjeXzgnG7Z%2FIyAC3nDrrd5XSAjYqx%2FBMm2Uzm77bZX%2B6iziX%2FOODTLQA1Eq5LJlrZBZqBs1IB6NWOl6QEJaGcR%2Bq%2BMnIUsak8zx7Fhd61UhSW5VY5pmM0lbbc9xZiV6IVBvmowj1C4FvuSemWZ8vOUk%2FbNyz%2Bf3l5HLfcWzsajzF%2F%2FbBmdK4dQzbY%2BEdWmsHcTLwuYz71idnOEuFvoM8WTTBc2ZaoUEIIiKAOaGzmY1J15U0iC7SJnpZmB%2FEBgieQbz49Px%2FCKPUsktlx9jC3n7qzyBxkXLCpiLxaE%2Ffio8AcwxVeNax%2FE8whzDcJ75vQ9fuB%2Bcp3A%2BlonwJIjiYlU8%2Bkm6i7i7j85faUT4h1Ix479Rg8%2FpY9mgKt%2B2BX4gcmN5c4mJnvDQxG%2BY0Ei%2BWLAVkhT12Ws3VNXdOmL7zSIHa6xLnyC8R9tHOnXV9%2BHbF2C5yDJP%2BjYYpk1nyl86hV%2FYqqbsylQiK2UeyCtvUQONCECtrS7vzm57yeDTzNWvdY1eWXWUI%2BlGJ36Yttk%2FxYpLn%2FDxz8OvXOe0o%2FuWDVJnVE%2FZnDf5R%2Bx8Ppr2FdEstTCvqf9R1XPSOxkT9Zlaa1gwq5%2FUyQY6pgGJEhbijL%2BEQfMgUP%2FMic%2FPH8EICJs9Jx8iSvkartvdi8kFsix2p6kXFGwaPX%2FT8tQdOMIg30r0mfA1vDYMOWKX%2BngkVVw4RrhMb8EIKIAhHv0IoBdEt3KOmcFS2LTDaIM9KdxJQPTgAzV3MvgLY0v8LEs4TUtPUUHNjNh2kyj12MnrXCPDTK4I9CzmA1oenyXxpij0RrxBmfQt6XbYlYQ8tQqERCzN&X-Amz-Signature=b2a6cb67a15acd1bd9654e726455a8b58108848f2f7f1b46e52d15bb8993f201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGE6NO25%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLzp64h4GDgQ4ZviBNvl7dgTuQ2cu6PRcjuLoVXqypvAiAFLtP9NKTziZLaOktrGbkwGWuc8tWfa%2BALl9aI%2BacJviqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGoJIMUBy9WoSg4y2KtwDA7QfqhLwc5%2BwkcB5SmjRr7nhTpbxb7EzcFgnvJjeXzgnG7Z%2FIyAC3nDrrd5XSAjYqx%2FBMm2Uzm77bZX%2B6iziX%2FOODTLQA1Eq5LJlrZBZqBs1IB6NWOl6QEJaGcR%2Bq%2BMnIUsak8zx7Fhd61UhSW5VY5pmM0lbbc9xZiV6IVBvmowj1C4FvuSemWZ8vOUk%2FbNyz%2Bf3l5HLfcWzsajzF%2F%2FbBmdK4dQzbY%2BEdWmsHcTLwuYz71idnOEuFvoM8WTTBc2ZaoUEIIiKAOaGzmY1J15U0iC7SJnpZmB%2FEBgieQbz49Px%2FCKPUsktlx9jC3n7qzyBxkXLCpiLxaE%2Ffio8AcwxVeNax%2FE8whzDcJ75vQ9fuB%2Bcp3A%2BlonwJIjiYlU8%2Bkm6i7i7j85faUT4h1Ix479Rg8%2FpY9mgKt%2B2BX4gcmN5c4mJnvDQxG%2BY0Ei%2BWLAVkhT12Ws3VNXdOmL7zSIHa6xLnyC8R9tHOnXV9%2BHbF2C5yDJP%2BjYYpk1nyl86hV%2FYqqbsylQiK2UeyCtvUQONCECtrS7vzm57yeDTzNWvdY1eWXWUI%2BlGJ36Yttk%2FxYpLn%2FDxz8OvXOe0o%2FuWDVJnVE%2FZnDf5R%2Bx8Ppr2FdEstTCvqf9R1XPSOxkT9Zlaa1gwq5%2FUyQY6pgGJEhbijL%2BEQfMgUP%2FMic%2FPH8EICJs9Jx8iSvkartvdi8kFsix2p6kXFGwaPX%2FT8tQdOMIg30r0mfA1vDYMOWKX%2BngkVVw4RrhMb8EIKIAhHv0IoBdEt3KOmcFS2LTDaIM9KdxJQPTgAzV3MvgLY0v8LEs4TUtPUUHNjNh2kyj12MnrXCPDTK4I9CzmA1oenyXxpij0RrxBmfQt6XbYlYQ8tQqERCzN&X-Amz-Signature=7949b1e9410d73b958729be870872d3ccfa7f94a444dded52b0c1f57ab81e0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

