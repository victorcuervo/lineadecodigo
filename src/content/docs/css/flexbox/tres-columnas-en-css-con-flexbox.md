---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVZ5IV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUGym1xXeLFh2YCoZhTK8ddm5G8MO7VwTq2XNodk40QIgO1MPqLsXrlvRpNN1EOlcm4dd6iM0oBFcOB%2BREaYa9a8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDII7U8fFQ0Ci8nnK%2FircA2BufC2SCwOVf2ILnnVSyDMKvYa0F%2FZrqGuly%2BZ21sup9XMcziuu0tVDo38XspqRLl4KBYToXywrkpLBh%2Fbh3Rl7udboNulZ6sckxkSj2RM6OyKvb7Ro%2BwbnN84qqGyoftSNc8PpN6G6HbJ6haV6IS0y0X281ygxt2anV7TDGryeJrAHAOlnbva%2BNYpbT1zxYkhJjJOk696WszY3qGpNzX%2FnxE6q1EorCSfGVMc3tFrCQuPR2VjqyiIbGPuAiogCt6iCahaFoZuvUxroawYNj730zbstQmf39lXOFAa%2FQ3r2TsQ95OoWMS%2BDWB8vE4UW4gAiG9iPpETYudrmlKTMkqn1DnwckyOxPb9r4EFetLn4iRJhX3MW9ugEqRft4l59i7%2BliEhpckJxsQEoucYh2bb71ayDuV9NSruwhwovRj6H4KDBf%2FPSQELcd%2BFUVLs%2BB197dvBL5t7kh13IZ5uPsSz4vT7i%2BNVNpTuRv5%2BUKW%2BAGL8aNU%2Bi7hHYA7CdxT0u4nQGuOPkvzCAqOoy2RuVbqmKor6d%2FxNzBkfkHsSpI7eVQEmiTmq%2FNvqNnwEJLVcM0ak7vO5A3aryRpuDTUoAgIsw8A4MCSSjeQNdLyIfLi78FlzzqXS8CmIycXBXMKn9zskGOqUBV7lYzwfgoOPkReStF4hYY3E%2FBYVmHTD4DDldIdzn0yk73J0vQTPrbdUXJJAQu5FsAgC2l3fOgkjmdfuFPin5Jrr9%2BmJ8%2FNvXXiWDc1LpZaVu%2FMQCPB71j0kyTqF%2BVPF%2Fi4YlzcIiUHoiRI6MiV%2BmijWMpdy3l5adMydO2vWNcj14r6gvlG0gocuKtsXTJEj7R7zCHk09K8xGQJHhn%2Fc%2BfjoCYd%2Fk&X-Amz-Signature=875a0eeea01f6fee48e8f769dbbfb44d898dd6b167c67e2c6f4af6672e8d4738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVZ5IV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUGym1xXeLFh2YCoZhTK8ddm5G8MO7VwTq2XNodk40QIgO1MPqLsXrlvRpNN1EOlcm4dd6iM0oBFcOB%2BREaYa9a8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDII7U8fFQ0Ci8nnK%2FircA2BufC2SCwOVf2ILnnVSyDMKvYa0F%2FZrqGuly%2BZ21sup9XMcziuu0tVDo38XspqRLl4KBYToXywrkpLBh%2Fbh3Rl7udboNulZ6sckxkSj2RM6OyKvb7Ro%2BwbnN84qqGyoftSNc8PpN6G6HbJ6haV6IS0y0X281ygxt2anV7TDGryeJrAHAOlnbva%2BNYpbT1zxYkhJjJOk696WszY3qGpNzX%2FnxE6q1EorCSfGVMc3tFrCQuPR2VjqyiIbGPuAiogCt6iCahaFoZuvUxroawYNj730zbstQmf39lXOFAa%2FQ3r2TsQ95OoWMS%2BDWB8vE4UW4gAiG9iPpETYudrmlKTMkqn1DnwckyOxPb9r4EFetLn4iRJhX3MW9ugEqRft4l59i7%2BliEhpckJxsQEoucYh2bb71ayDuV9NSruwhwovRj6H4KDBf%2FPSQELcd%2BFUVLs%2BB197dvBL5t7kh13IZ5uPsSz4vT7i%2BNVNpTuRv5%2BUKW%2BAGL8aNU%2Bi7hHYA7CdxT0u4nQGuOPkvzCAqOoy2RuVbqmKor6d%2FxNzBkfkHsSpI7eVQEmiTmq%2FNvqNnwEJLVcM0ak7vO5A3aryRpuDTUoAgIsw8A4MCSSjeQNdLyIfLi78FlzzqXS8CmIycXBXMKn9zskGOqUBV7lYzwfgoOPkReStF4hYY3E%2FBYVmHTD4DDldIdzn0yk73J0vQTPrbdUXJJAQu5FsAgC2l3fOgkjmdfuFPin5Jrr9%2BmJ8%2FNvXXiWDc1LpZaVu%2FMQCPB71j0kyTqF%2BVPF%2Fi4YlzcIiUHoiRI6MiV%2BmijWMpdy3l5adMydO2vWNcj14r6gvlG0gocuKtsXTJEj7R7zCHk09K8xGQJHhn%2Fc%2BfjoCYd%2Fk&X-Amz-Signature=901583933b18f68093149945fcea04ff8fa58c497398e3d6029462f872815dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

