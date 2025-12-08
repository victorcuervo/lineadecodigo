---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVLDWIZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD5F8mlJyRFvGxv%2BVfluHWGrrx%2B2Z2kdoG2ZWatPvKoAiBvFs9CzIBcnIXxp4xmveGh2gx0YW3v42jk%2Bcx0v9HTICqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlnoMq%2FpCuNz1NVBeKtwD1HKf%2Fzj2UZYHGDQ8OPzc%2B1%2Bp0Uinc8jbJuVPhT%2F%2FJbrAw3%2BFwCDJzbfenStZ6lubHWTCZemYRGrTxoa9ganvmPDt%2FAAi%2F6fj4JKw4L1qlS6hwUj2OVOIE580lmFUz%2FBoimNs%2FO1uRcOKXoaH529Z3yX%2BDEKckVQec4eK2UnNZ445jLQH3Mmv4bIsUM%2F1LzvwsPLs6hIw6dxuD%2FI98OUYIuz1%2FbmVQjuKIx0OyiEpl5ylsztZ46ilNz3or%2BQXISIpkrdQqFojIPT4kPcg7cDc3Uqi9vVBeebhoeV9HmUoFIJuQddW2uWApIoMm9zk0lwbj2VRTViRgRPPKUyCejn8Jpx8vr0wNTDcOnaJsUmzSJ4G3%2BcXWi1b6dVqJbPWyNFDCAVfZFkGYaQaxtwkodgrkf1oZjERSbZPhE9kOXHq4Rlw0HxeUSYef%2FXiSqH2Ao4mF6rpu5n5o7ProRwHfT1uamaSsEV9LOcrjeaO9xjx57vixJ6jsgGcIEE4m4hNF83zBfSfZuHj%2BIYqigC1FK%2FNV9gJhrqpqbwP4aPze9TRCvyZb%2Fmz24Dn1qtx86XEeSiPaoVkv%2B5fNswv1VG5roOMq0fcigSYGTCcVY0XyKZ%2FNG53RONijsFXoP83e6wwteTbyQY6pgGfgHR1ueRzwBJ2hSZBsXzc2j1QHDMlj5MG%2B6TfxudKCan9KasmUzbzNUdV%2BeGqGbuLiS748DRu6cMGLKNs3CMjboOoGcVwkg0UJ5PTj7ecH24I%2B3s1ICUsjGblCkAP5CfEqasrNRjW0uT9Ch8Vs2sjrnWpb28grg3l%2BN88r3zgP%2Fegkw6bBLe%2F9hdOQQ0q30ACMJiqqf2cBNv02nILp2gBugO5o4fH&X-Amz-Signature=2e7877c4f15306068cfd9476a2e50ac1ec9b8699d7dfd9948895958339b79109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVLDWIZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD5F8mlJyRFvGxv%2BVfluHWGrrx%2B2Z2kdoG2ZWatPvKoAiBvFs9CzIBcnIXxp4xmveGh2gx0YW3v42jk%2Bcx0v9HTICqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlnoMq%2FpCuNz1NVBeKtwD1HKf%2Fzj2UZYHGDQ8OPzc%2B1%2Bp0Uinc8jbJuVPhT%2F%2FJbrAw3%2BFwCDJzbfenStZ6lubHWTCZemYRGrTxoa9ganvmPDt%2FAAi%2F6fj4JKw4L1qlS6hwUj2OVOIE580lmFUz%2FBoimNs%2FO1uRcOKXoaH529Z3yX%2BDEKckVQec4eK2UnNZ445jLQH3Mmv4bIsUM%2F1LzvwsPLs6hIw6dxuD%2FI98OUYIuz1%2FbmVQjuKIx0OyiEpl5ylsztZ46ilNz3or%2BQXISIpkrdQqFojIPT4kPcg7cDc3Uqi9vVBeebhoeV9HmUoFIJuQddW2uWApIoMm9zk0lwbj2VRTViRgRPPKUyCejn8Jpx8vr0wNTDcOnaJsUmzSJ4G3%2BcXWi1b6dVqJbPWyNFDCAVfZFkGYaQaxtwkodgrkf1oZjERSbZPhE9kOXHq4Rlw0HxeUSYef%2FXiSqH2Ao4mF6rpu5n5o7ProRwHfT1uamaSsEV9LOcrjeaO9xjx57vixJ6jsgGcIEE4m4hNF83zBfSfZuHj%2BIYqigC1FK%2FNV9gJhrqpqbwP4aPze9TRCvyZb%2Fmz24Dn1qtx86XEeSiPaoVkv%2B5fNswv1VG5roOMq0fcigSYGTCcVY0XyKZ%2FNG53RONijsFXoP83e6wwteTbyQY6pgGfgHR1ueRzwBJ2hSZBsXzc2j1QHDMlj5MG%2B6TfxudKCan9KasmUzbzNUdV%2BeGqGbuLiS748DRu6cMGLKNs3CMjboOoGcVwkg0UJ5PTj7ecH24I%2B3s1ICUsjGblCkAP5CfEqasrNRjW0uT9Ch8Vs2sjrnWpb28grg3l%2BN88r3zgP%2Fegkw6bBLe%2F9hdOQQ0q30ACMJiqqf2cBNv02nILp2gBugO5o4fH&X-Amz-Signature=fa9f49df3314d4bf1b2d8b75043f1888c880ba9ac46b2d8d6bb75832aa12b56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

