---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFJW2Y6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX0M1ue4pa0KD%2FuNg%2B%2B%2FKA79R%2FX8TyqO%2FZdA%2BmOOqneQIgNlsCFkYj4i0hJy5j%2BO83psk%2FLUdxLGsXPRHti6jNMlMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFwX55eC2hok8PCkCSrcA6Sngnafft6WjeE4CiwS2vuu27uzVnyVOMGB2fppdIbyoXNK%2FGgFgaBpAZGT83oT42MlqRcjjxF%2BkchuagdZB%2FU%2Bep60V2EGSGN%2FnOlgKCA27BuUKPzah%2FOWJCmeZdPkU8rTzA5Xqji8h4ntNcZnNXJ%2FiqgPuCywvwmaf6s%2FrQj8BdD0qKVPDeh%2BwhLhSxND77P%2BxuIaXELy%2FlPj%2FE0LA1DUns92%2Fx%2BoyMo%2Bp2sQP78TXn8TQNqEM0oOAy1ACN3sBGhnhFeKDwt6V441tqZ%2FptG3YsjjrvpfakPUiGDeDN%2Bb3l%2FSQD6%2FYwz%2BM%2BdlLhPp7oMSsvJiqqfM%2FZQo9Sccd4lC12Vqm%2B3NZVLu%2FxUbIvIQYJnYt3%2BwryYtGv8ySLcKrksFRhZo2RmiZ6A0E17lsKwQlj98CbsNl4RfPz6vylRedcPN4q5uSGrF4208YaI99tq7PrjRL9R3X4KIxYdsZYKcWYP8S5SNa9ve51Y4xrIvAbiyABPyXZSCNFfZ3vqWD%2FfYd8HxaXYK57FNd2aIQyL%2BEW6vCqbOvPxGKHv%2F%2BQQ8RYq%2FCIa66zWPmO0PkZJTwAsy%2ByDqCg0nyp2USiYKF1At5NiAS054uEzfVAGixMIJh9RFdm45xPSbXFukMJa8z8kGOqUB8ZR6zkn2nkMQv5SAU%2FmFbWsLAXpeUc0Fly2oubh7ajKy7qDd1X6olIDX%2BiXFym6CwdtvIHoQ5tL%2BDOzjmg1%2BVSvQMGsdVMKU5%2Fl7rV7cGPXpfz%2BlkI%2FNMAlexvCJFcayeaqAlP9qDvKG2BeTfc5iiXE6RH7b3Wd1l8ayETJZ1A%2FONXJNAKd3CiRExZPfPVmGXjmaDdJ2%2F7nnq8Bpni9ls%2BFiljMy&X-Amz-Signature=73069c3531f4d8bbfef5e517f7cbc4dea2f32f5fc9f3e6710e667c750193b630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFJW2Y6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX0M1ue4pa0KD%2FuNg%2B%2B%2FKA79R%2FX8TyqO%2FZdA%2BmOOqneQIgNlsCFkYj4i0hJy5j%2BO83psk%2FLUdxLGsXPRHti6jNMlMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFwX55eC2hok8PCkCSrcA6Sngnafft6WjeE4CiwS2vuu27uzVnyVOMGB2fppdIbyoXNK%2FGgFgaBpAZGT83oT42MlqRcjjxF%2BkchuagdZB%2FU%2Bep60V2EGSGN%2FnOlgKCA27BuUKPzah%2FOWJCmeZdPkU8rTzA5Xqji8h4ntNcZnNXJ%2FiqgPuCywvwmaf6s%2FrQj8BdD0qKVPDeh%2BwhLhSxND77P%2BxuIaXELy%2FlPj%2FE0LA1DUns92%2Fx%2BoyMo%2Bp2sQP78TXn8TQNqEM0oOAy1ACN3sBGhnhFeKDwt6V441tqZ%2FptG3YsjjrvpfakPUiGDeDN%2Bb3l%2FSQD6%2FYwz%2BM%2BdlLhPp7oMSsvJiqqfM%2FZQo9Sccd4lC12Vqm%2B3NZVLu%2FxUbIvIQYJnYt3%2BwryYtGv8ySLcKrksFRhZo2RmiZ6A0E17lsKwQlj98CbsNl4RfPz6vylRedcPN4q5uSGrF4208YaI99tq7PrjRL9R3X4KIxYdsZYKcWYP8S5SNa9ve51Y4xrIvAbiyABPyXZSCNFfZ3vqWD%2FfYd8HxaXYK57FNd2aIQyL%2BEW6vCqbOvPxGKHv%2F%2BQQ8RYq%2FCIa66zWPmO0PkZJTwAsy%2ByDqCg0nyp2USiYKF1At5NiAS054uEzfVAGixMIJh9RFdm45xPSbXFukMJa8z8kGOqUB8ZR6zkn2nkMQv5SAU%2FmFbWsLAXpeUc0Fly2oubh7ajKy7qDd1X6olIDX%2BiXFym6CwdtvIHoQ5tL%2BDOzjmg1%2BVSvQMGsdVMKU5%2Fl7rV7cGPXpfz%2BlkI%2FNMAlexvCJFcayeaqAlP9qDvKG2BeTfc5iiXE6RH7b3Wd1l8ayETJZ1A%2FONXJNAKd3CiRExZPfPVmGXjmaDdJ2%2F7nnq8Bpni9ls%2BFiljMy&X-Amz-Signature=a5ace98e1e5cb74b863999eec31a324ca123a458c78ef2b02593f347753dfa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

